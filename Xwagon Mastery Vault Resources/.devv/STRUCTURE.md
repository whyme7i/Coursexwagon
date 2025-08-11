# This file is only for editing file nodes, do not break the structure

## Project Description
COURSE.XWAGON is a modern digital hub designed to host and sell ebooks, audiobooks, online courses, and adult content. It features a vault-inspired design with professional animations, business analytics, and interactive user systems.

## Key Features
- Multi-category digital product marketplace (ebooks, audiobooks, courses)
- Animated vault-style user interface with professional transitions
- Age-restricted content section with verification
- Market analytics with interactive charts and trend visualization
- Card-based content display with hover effects and animations
- Book/Audiobook categorization and filtering
- Course flip cards with detailed information on back
- Premium and free content sections across all product types
- Community chatrooms with Telegram integration
- Founder profiles and personal stories
- Customer testimonials with ratings
- Mobile-optimized interface with bottom navigation bar

/src
├── assets/          # Static resources directory, storing static files like images and fonts
│
├── components/      # Components directory
│   ├── adults/     # Adult content specific components
│   │   └── AgeVerification.tsx # Age verification component with toggle switch
│   │
│   ├── audiobooks/ # Audiobook components
│   │   └── AudioBookCard.tsx  # Card component for audiobooks with waveform visualization
│   │
│   ├── common/     # Common components
│   │   └── MobileNav.tsx      # Mobile bottom navigation bar
│   │
│   ├── courses/    # Course components
│   │   └── CourseCard.tsx     # Flip card component for courses with front/back views
│   │
│   ├── ebooks/     # Ebook components
│   │   └── BookCard.tsx       # Card component for book display
│   │
│   ├── home/       # Homepage components
│   │   ├── CategorySection.tsx # Category showcase section
│   │   ├── FeaturedContent.tsx # Featured content slider
│   │   ├── HeroSection.tsx     # Main hero section with CTA
│   │   └── VaultDoor.tsx       # Animated vault door component
│   │
│   ├── layout/     # Layout components
│   │   ├── Footer.tsx  # Global footer with navigation and social links
│   │   ├── Header.tsx  # Global header with navigation menu
│   │   └── Layout.tsx  # Main layout component that includes the MobileNav
│   │
│   ├── ui/         # Pre-installed shadcn/ui components, avoid modifying or rewriting unless necessary
│
├── hooks/          # Custom Hooks directory
│   ├── use-mobile.ts # Pre-installed mobile detection Hook from shadcn (import { useIsMobile } from '@/hooks/use-mobile')
│   └── use-toast.ts  # Toast notification system hook for displaying toast messages (import { useToast } from '@/hooks/use-toast')
│
├── lib/            # Utility library directory
│   └── utils.ts    # Utility functions, including the cn function for merging Tailwind class names
│
├── pages/          # Page components directory, based on React Router structure
│   ├── AdultsPage.tsx     # Age-restricted content page with verification gate
│   ├── AudiobooksPage.tsx # Audiobooks catalog page with preview functionality
│   ├── ChatroomsPage.tsx  # Community chat page with Telegram integration
│   ├── CoursesPage.tsx    # Courses page with flip card animations
│   ├── DonStoryPage.tsx   # Co-Founder Don Kyono's personal story
│   ├── EbooksPage.tsx     # Ebooks catalog with category filtering
│   ├── FoundersPage.tsx   # Founders profiles and introduction
│   ├── HomePage.tsx       # Home page component with vault door animation
│   ├── IgnacioStoryPage.tsx # Founder Ignacio Chamboko's personal story
│   ├── MarketPage.tsx     # Market growth analytics with chart.js visualizations
│   ├── NotFoundPage.tsx   # 404 error page component
│   ├── TestimonialsPage.tsx # Customer testimonials and ratings
│   │
│   └── footer/           # Footer pages directory
│       ├── AboutPage.tsx     # About us page
│       ├── AdultDisclaimerPage.tsx # Adult content disclaimer
│       ├── ContactPage.tsx   # Contact information
│       ├── DMCAPage.tsx      # DMCA/Copyright information
│       ├── FAQPage.tsx       # Frequently asked questions
│       ├── PrivacyPage.tsx   # Privacy policy
│       ├── RefundPage.tsx    # Refund policy
│       └── TermsPage.tsx     # Terms and conditions
│
├── App.tsx         # Root component, with React Router routing system configured
│                   # Add new route configurations in this file
│                   # Includes catch-all route (*) for 404 page handling
│
├── main.tsx        # Entry file, rendering the root component and mounting to the DOM
│
├── index.css       # Global styles file, containing Tailwind configuration and custom styles
│                   # Modify theme colors and design system variables in this file 
│
└── tailwind.config.js  # Tailwind CSS v3 configuration file
                      # Contains theme customization, plugins, and content paths
                      # Includes shadcn/ui theme configuration 