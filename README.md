# HuddleHive - Women in Tech Community Platform

A modern, responsive web platform designed to connect and empower women in technology through events, networking opportunities, and community support. Built with Next.js, TypeScript, and Tailwind CSS.

## 🌟 Project Overview

HuddleHive is a comprehensive platform that brings together women in tech through various events and activities. The platform features:

- **Event Management**: Browse and register for tech events, hackathons, and workshops
- **Venue Showcase**: Explore different venues and spaces for events
- **Community Building**: Connect with like-minded professionals
- **Resource Sharing**: Access documentation and educational content

## ✨ Key Features

### 🎯 Events & Activities
- **Women in Tech Leadership Summit**: Leadership development and networking
- **HuddleHive Women Hackathon**: 24-hour hackathon for women in tech
- **Green Energy Innovation Workshop**: Sustainable tech and renewable energy
- **Tech for Good Community Day**: Community-focused tech workshops
- **AI & Machine Learning Bootcamp**: Hands-on AI/ML training
- **Mental Health in Tech Support Group**: Wellness and support for tech professionals
- **Coding for Climate Change**: Environmental tech solutions
- **Women in Energy Leadership**: Energy sector leadership development

### 🏢 Venue Categories
- **Coworking & Office Spaces**: Professional work environments
- **Schools & Universities**: Educational institutions
- **Cafés & Restaurants**: Casual meeting spaces
- **Community Halls**: Event and gathering spaces
- **Luxury Villas**: Premium event venues
- **Apartments**: Residential event spaces

### 🎨 User Experience
- **Responsive Design**: Optimized for all devices
- **Dark/Light Mode**: Toggle between themes
- **Interactive Cards**: Engaging event and venue displays
- **Dynamic Navigation**: Context-aware routing
- **Search & Filter**: Easy content discovery

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Iconify
- **Authentication**: NextAuth.js
- **Database**: Supabase (configured)
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
HuddleHive-Hackathon/
├── package/                    # Main application
│   ├── src/
│   │   ├── app/               # Next.js app router
│   │   │   ├── (site)/        # Public pages
│   │   │   │   ├── events/    # Event pages
│   │   │   │   ├── properties/ # Venue pages
│   │   │   │   └── ...        # Other pages
│   │   │   ├── api/           # API routes
│   │   │   └── context/       # React contexts
│   │   ├── components/        # Reusable components
│   │   ├── lib/              # Utilities and configs
│   │   └── types/            # TypeScript definitions
│   ├── public/               # Static assets
│   └── package.json          # Dependencies
└── README.md                 # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/HuddleHive-Hackathon.git
   cd HuddleHive-Hackathon
   ```

2. **Navigate to the package directory**
   ```bash
   cd package
   ```

3. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

4. **Set up environment variables**
   Create a `.env.local` file in the `package` directory:
   ```env
   NEXTAUTH_SECRET=your-secret-key
   NEXTAUTH_URL=http://localhost:3000
   SUPABASE_URL=your-supabase-url
   SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Customization

### Styling
The project uses Tailwind CSS for styling. Custom styles can be added in:
- `src/app/globals.css` - Global styles
- Component-specific CSS classes

### Content Management
- **Events**: Edit `src/app/api/events.tsx`
- **Venues**: Edit `src/app/api/propertyhomes.tsx`
- **Navigation**: Edit `src/app/api/navlink.tsx`

### Theme Configuration
- Colors and branding: `tailwind.config.js`
- Component styling: `src/components/ui/`

## 🔧 Configuration

### Authentication
The project is configured with NextAuth.js. Configure providers in:
- `src/app/api/auth/[...nextauth]/route.js`

### Database
Supabase is configured for data storage. Update connection in:
- `src/lib/supabaseClient.ts`

## 📱 Pages & Routes

### Public Pages
- `/` - Homepage with featured events and venues
- `/events` - All events listing
- `/events/[slug]` - Individual event details
- `/properties` - All venues listing
- `/properties/[slug]` - Individual venue details
- `/blogs` - Blog articles
- `/contactus` - Contact information

### Category Pages
- `/office-spaces` - Coworking and office spaces
- `/schools-universities` - Educational venues
- `/cafes-restaurants` - Food and beverage venues
- `/community-halls` - Community gathering spaces
- `/luxury-villa` - Premium venues
- `/appartment` - Residential venues

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Octopus Energy** - Supporting the HuddleHive Women Hackathon
- **BCS, The Chartered Institute for IT** - Professional development support
- **Next.js Team** - Amazing framework and documentation
- **Tailwind CSS** - Utility-first CSS framework
- **Iconify** - Comprehensive icon library

## 📞 Support

For support, email support@huddlehive.com or join our community discussions.

---

**Built with ❤️ for the Women in Tech community**