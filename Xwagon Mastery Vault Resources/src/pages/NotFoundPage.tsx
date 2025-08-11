import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useEffect } from 'react'

function NotFoundPage() {
  const navigate = useNavigate()
  
  useEffect(() => {
    document.title = "Page Not Found | COURSE.XWAGON";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md p-6">
        <div className="w-20 h-20 mx-auto mb-6">
          <svg className="w-full h-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <circle cx="256" cy="256" r="240" fill="currentColor" className="text-midnight" />
            <path d="M180 170 L180 340 Q180 350, 190 350 L322 350 Q332 350, 332 340 L332 170 Q332 160, 322 160 L190 160 Q180 160, 180 170 Z" fill="none" stroke="currentColor" strokeWidth="12" className="text-gold" />
            <path d="M256 200 L256 260" stroke="currentColor" strokeWidth="12" strokeLinecap="round" className="text-gold" />
            <path d="M256 290 L256 300" stroke="currentColor" strokeWidth="12" strokeLinecap="round" className="text-gold" />
          </svg>
        </div>
        <h1 className="text-6xl font-bold mb-4 heading-gradient">404</h1>
        <p className="mb-6 text-xl text-foreground/70">This vault doesn't exist or is locked</p>
        <Button onClick={() => navigate('/')} className="bg-gold text-primary-foreground hover:bg-gold/90">
          Return to Main Vault
        </Button>
      </div>
    </div>
  )
}

export default NotFoundPage 