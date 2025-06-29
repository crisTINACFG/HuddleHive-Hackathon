import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const Categories = () => {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute left-0 top-0">
        <Image
          src="/images/categories/Vector.svg"
          alt="vector"
          width={800}
          height={1050}
          className="dark:hidden"
          unoptimized={true}
        />
        <Image
          src="/images/categories/Vector-dark.svg"
          alt="vector"
          width={800}
          height={1050}
          className="hidden dark:block"
          unoptimized={true}
        />
      </div>
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 relative z-10">
        <div className="grid grid-cols-12 items-center gap-10">
          <div className="lg:col-span-6 col-span-12">
            <p className="text-2xl text-dark/75 dark:text-white/75 font-semibold flex gap-2.5 mb-4">
              <Icon icon="ph:laptop" className="text-2xl text-blue-500 " />
              Our Innovation Spaces
            </p>
            <h2 className="lg:text-52 text-40 mt-4 mb-2 lg:max-w-full font-medium leading-[1.2] text-dark dark:text-white">
              Spaces That <span className="text-blue-600 dark:text-blue-400">Innovate</span> and <span className="text-green-600 dark:text-green-400">Accelerate</span>
            </h2>
            <p className="text-dark/50 dark:text-white/50 text-lg lg:max-w-full leading-[1.3] md:max-w-3/4 mb-6">
              Every venue in our network is designed to foster innovation, support tech startups, and accelerate clean energy solutions. 
              From AI labs to green tech hubs, we provide the spaces where the future is built.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/properties" className="py-4 px-8 bg-blue-600 hover:bg-blue-700 text-base leading-4 block w-fit text-white rounded-full font-semibold transition-all duration-300">
                Explore Our Spaces
              </Link>
              <Link href="/events" className="py-4 px-8 bg-green-600 hover:bg-green-700 text-base leading-4 block w-fit text-white rounded-full font-semibold transition-all duration-300">
                Join Tech Events
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 col-span-12">
            <div className="relative rounded-2xl overflow-hidden group">
              <Link href="/office-spaces">
                <Image
                  src="/images/categories/cowork.jpg"
                  alt="Coworking & Office Spaces"
                  width={680}
                  height={386}
                  className="w-full"
                  unoptimized={true}
                />
              </Link>
              <Link href="/office-spaces" className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 duration-500">
                <div className="flex justify-end mt-6 mr-6">
                  <div className="bg-white text-dark rounded-full w-fit p-4">
                    <Icon icon="ph:arrow-right" width={24} height={24} />
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-white text-2xl">
                    Tech Innovation Hubs
                  </h3>
                  <p className="text-white/80 text-base leading-6">
                   State-of-the-art workspaces for tech startups, AI companies, and clean energy innovators. Includes AI labs, green tech incubators, and collaborative innovation spaces.
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 col-span-12">
            <div className="relative rounded-2xl overflow-hidden group">
              <Link href="/schools-universities">
                <Image
                  src="/images/categories/univ.jpg"
                  alt="Schools & Universities"
                  width={680}
                  height={386}
                  className="w-full"
                  unoptimized={true}
                />
              </Link>
              <Link href="/schools-universities" className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 duration-500">
                <div className="flex justify-end mt-6 mr-6">
                  <div className="bg-white text-dark rounded-full w-fit p-4">
                    <Icon icon="ph:arrow-right" width={24} height={24} />
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-white text-2xl">
                    Research & Development Centers
                  </h3>
                  <p className="text-white/80 text-base leading-6">
                    Advanced research facilities for AI development, renewable energy research, and sustainable technology innovation. Supporting academic and industry collaboration.
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-3 col-span-6">
            <div className="relative rounded-2xl overflow-hidden group">
              <Link href="/cafes-restaurants">
                <Image
                  src="/images/categories/cafe2.jpg"
                  alt="Cafés & Restaurants"
                  width={320}
                  height={386}
                  className="w-full"
                  unoptimized={true}
                />
              </Link>
              <Link href="/cafes-restaurants" className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 duration-500">
                <div className="flex justify-end mt-6 mr-6">
                  <div className="bg-white text-dark rounded-full w-fit p-4">
                    <Icon icon="ph:arrow-right" width={24} height={24} />
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-white text-2xl">
                     Tech Meetup Spaces
                  </h3>
                  <p className="text-white/80 text-base leading-6">
                    Casual, welcoming spaces for tech meetups, coding sessions, and informal networking. Where tech communities gather and ideas spark.
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-3 col-span-6">
            <div className="relative rounded-2xl overflow-hidden group">
              <Link href="/community-halls">
                <Image
                  src="/images/categories/ven3.jpg"
                  alt="Community Halls"
                  width={320}
                  height={386}
                  className="w-full"
                  unoptimized={true}
                />
              </Link>
              <Link href="/community-halls" className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 duration-500">
                <div className="flex justify-end mt-6 mr-6">
                  <div className="bg-white text-dark rounded-full w-fit p-4">
                    <Icon icon="ph:arrow-right" width={24} height={24} />
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-white text-2xl">
                    Green Tech Centers
                  </h3>
                  <p className="text-white/80 text-base leading-6">
                     Sustainable spaces for clean energy events, environmental tech workshops, and climate innovation gatherings. The heart of green technology advancement.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
