import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import MobileNav from '../common/MobileNav';
import { useIsMobile } from '@/hooks/use-mobile';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        {!isMobile && <Sidebar />}
        <main className={`flex-1 pt-16 ${!isMobile ? 'md:ml-64' : ''}`}>
          {children}
        </main>
      </div>
      <Footer />
      {isMobile && <MobileNav />}
    </div>
  );
};

export default Layout;