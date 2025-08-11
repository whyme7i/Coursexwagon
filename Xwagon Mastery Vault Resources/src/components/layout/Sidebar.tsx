import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, BookOpen, Headphones, GraduationCap, BarChart2, MessageCircle, Users, Star, ShieldAlert } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CategoryItem {
  name: string;
  link: string;
  icon: JSX.Element;
  subcategories?: { name: string; link: string }[];
}

const Sidebar = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const categories: CategoryItem[] = [
    {
      name: 'Ebooks',
      link: '/ebooks',
      icon: <BookOpen className="h-4 w-4" />,
      subcategories: [
        { name: 'Mindset', link: '/ebooks#mindset' },
        { name: 'Fantasy', link: '/ebooks#fantasy' },
        { name: 'Romance', link: '/ebooks#romance' },
        { name: 'Dark Reads', link: '/ebooks#dark-reads' },
      ]
    },
    {
      name: 'Audiobooks',
      link: '/audiobooks',
      icon: <Headphones className="h-4 w-4" />,
      subcategories: [
        { name: 'Motivation', link: '/audiobooks#motivation' },
        { name: 'Business', link: '/audiobooks#business' },
        { name: 'Fiction', link: '/audiobooks#fiction' },
        { name: 'Erotic Audio', link: '/audiobooks#erotic' },
      ]
    },
    {
      name: 'Courses',
      link: '/courses',
      icon: <GraduationCap className="h-4 w-4" />,
      subcategories: [
        { name: 'Andrew Tate', link: '/courses#andrew-tate' },
        { name: 'Hustlers University', link: '/courses#hustlers-university' },
        { name: 'Business Bootcamps', link: '/courses#business-bootcamps' },
        { name: 'Free Courses', link: '/courses#free-courses' },
      ]
    },
    {
      name: 'Market Growth',
      link: '/market',
      icon: <BarChart2 className="h-4 w-4" />
    },
    {
      name: 'Chatrooms',
      link: '/chatrooms',
      icon: <MessageCircle className="h-4 w-4" />
    },
    {
      name: 'Founders',
      link: '/founders',
      icon: <Users className="h-4 w-4" />
    },
    {
      name: 'Testimonials',
      link: '/testimonials',
      icon: <Star className="h-4 w-4" />
    },
    {
      name: '18+ Vault',
      link: '/adults',
      icon: <ShieldAlert className="h-4 w-4" />
    }
  ];

  const toggleCategory = (categoryName: string) => {
    if (expandedCategory === categoryName) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(categoryName);
    }
  };

  return (
    <aside className="w-64 h-full bg-background/95 backdrop-blur-md border-r border-border/40 fixed left-0 top-16 bottom-0 overflow-y-auto hidden md:block z-40 pt-4">
      <div className="px-4 py-2">
        <h3 className="text-lg font-bold text-gold">Categories</h3>
        <p className="text-xs text-muted-foreground mb-4">Browse all content</p>
      </div>
      
      <nav className="space-y-1">
        {categories.map((category) => (
          <div key={category.name} className="px-2">
            <div 
              className={cn(
                "flex items-center justify-between px-3 py-2 rounded-md cursor-pointer group",
                "hover:bg-card/60 transition-colors"
              )}
              onClick={() => category.subcategories && toggleCategory(category.name)}
            >
              <Link 
                to={category.link} 
                className="flex items-center gap-2 flex-1 text-foreground/80 hover:text-gold transition-colors"
                onClick={(e) => category.subcategories && e.preventDefault()}
              >
                <span className="text-gold">{category.icon}</span>
                <span>{category.name}</span>
              </Link>
              {category.subcategories && (
                <ChevronRight 
                  className={cn(
                    "h-4 w-4 text-muted-foreground transition-transform",
                    expandedCategory === category.name && "transform rotate-90"
                  )} 
                />
              )}
            </div>
            
            {category.subcategories && expandedCategory === category.name && (
              <div className="ml-7 mt-1 space-y-1 border-l border-border/40 pl-3">
                {category.subcategories.map((subcategory) => (
                  <Link
                    key={subcategory.name}
                    to={subcategory.link}
                    className="block py-1.5 text-sm text-foreground/70 hover:text-gold transition-colors"
                  >
                    {subcategory.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
      
      <div className="px-4 py-6 mt-6 bg-gradient-to-b from-transparent to-card/30">
        <div className="p-4 border border-gold/20 rounded-md bg-background/40">
          <h4 className="font-semibold text-gold mb-2">Need Help?</h4>
          <p className="text-xs text-muted-foreground mb-3">
            Can't find what you're looking for? Request it in our chatrooms.
          </p>
          <Link
            to="/chatrooms"
            className="text-xs text-gold hover:underline"
          >
            Join the conversation →
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;