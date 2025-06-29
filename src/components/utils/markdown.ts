import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "markdown/blogs");

export function getPostSlugs() {
  try {
    return fs.readdirSync(postsDirectory);
  } catch (error) {
    console.error("Error reading posts directory:", error);
    return [];
  }
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  try {
    const realSlug = slug.replace(/\.mdx$/, "");
    const fullPath = join(postsDirectory, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    type Items = {
      // [key: string]: string;
      [key: string]: string | object;
    };

    const items: any = {};

    function processImages(content: string) {
      // You can modify this function to handle image processing
      // For example, replace image paths with actual HTML image tags
      return content.replace(/!\[.*?\]\((.*?)\)/g, '<img src="$1" alt="" />');
    }

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
      if (field === "slug") {
        items[field] = realSlug;
      }
      if (field === "content") {
        // You can modify the content here to include images
        items[field] = processImages(content);
      }

      if (field === "metadata") {
        // Include metadata, including the image information
        items[field] = { ...data, coverImage: data.coverImage || null };
      }

      if (typeof data[field] !== "undefined") {
        items[field] = data[field];
      }
    });

    return items;
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return {};
  }
}

export function getAllPosts(fields: string[] = []) {
  try {
    const slugs = getPostSlugs();
    const posts = slugs
      .map((slug) => getPostBySlug(slug, fields))
      .filter(post => Object.keys(post).length > 0)
      // sort posts by date in descending order
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

    return posts;
  } catch (error) {
    console.error("Error getting all posts:", error);
    return [];
  }
}
