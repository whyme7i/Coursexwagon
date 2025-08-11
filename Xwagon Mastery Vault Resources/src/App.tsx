import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/layout/Layout";

// Pages
import HomePage from "@/pages/HomePage";
import NotFoundPage from "@/pages/NotFoundPage";

// Lazy-loaded pages
const EbooksPage = lazy(() => import("@/pages/EbooksPage"));
const AudiobooksPage = lazy(() => import("@/pages/AudiobooksPage"));
const CoursesPage = lazy(() => import("@/pages/CoursesPage"));
const MarketPage = lazy(() => import("@/pages/MarketPage"));
const ChatroomsPage = lazy(() => import("@/pages/ChatroomsPage"));
const AdultsPage = lazy(() => import("@/pages/AdultsPage"));
const FoundersPage = lazy(() => import("@/pages/FoundersPage"));
const IgnacioStoryPage = lazy(() => import("@/pages/IgnacioStoryPage"));
const DonStoryPage = lazy(() => import("@/pages/DonStoryPage"));
const TestimonialsPage = lazy(() => import("@/pages/TestimonialsPage"));

// Footer pages
const PrivacyPage = lazy(() => import("@/pages/footer/PrivacyPage"));
const TermsPage = lazy(() => import("@/pages/footer/TermsPage"));
const RefundPage = lazy(() => import("@/pages/footer/RefundPage"));
const DMCAPage = lazy(() => import("@/pages/footer/DMCAPage"));
const AboutPage = lazy(() => import("@/pages/footer/AboutPage"));
const FAQPage = lazy(() => import("@/pages/footer/FAQPage"));
const AdultDisclaimerPage = lazy(() => import("@/pages/footer/AdultDisclaimerPage"));
const ContactPage = lazy(() => import("@/pages/footer/ContactPage"));

function App() {
  return (
    <TooltipProvider>
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading...</div>}>
            <Routes>
              {/* Main pages */}
              <Route path="/" element={<HomePage />} />
              <Route path="/ebooks" element={<EbooksPage />} />
              <Route path="/audiobooks" element={<AudiobooksPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/market" element={<MarketPage />} />
              <Route path="/chatrooms" element={<ChatroomsPage />} />
              <Route path="/adults" element={<AdultsPage />} />
              <Route path="/founders" element={<FoundersPage />} />
              <Route path="/ignacio-story" element={<IgnacioStoryPage />} />
              <Route path="/don-story" element={<DonStoryPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              
              {/* Footer pages */}
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/refund" element={<RefundPage />} />
              <Route path="/dmca" element={<DMCAPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/adult-disclaimer" element={<AdultDisclaimerPage />} />
              <Route path="/contact" element={<ContactPage />} />
              
              {/* 404 Page */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </Layout>
        <Toaster />
      </BrowserRouter>
    </TooltipProvider>
  );
}

export default App;
