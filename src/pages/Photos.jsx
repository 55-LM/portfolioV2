import Gallery from '../Gallery';
import footerlogo from '../assets/footerlogo.png';
import { useEffect } from 'react';

function Photos() {
  useEffect(() => {
    const body = document.body;
    const observer = new MutationObserver(() => {
      const lightbox = document.querySelector('.lightbox-open');
      if (lightbox) {
        body.classList.add('no-scroll');
      } else {
        body.classList.remove('no-scroll');
      }
    });
    observer.observe(body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen text-white bg-black">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 relative z-20">
        {/* Header and Subtitle */}
        <div className="pt-16 pb-4">
          <div className="mb-3 text-left pl-0 sm:pl-6">
            <h1
              className="text-lg md:text-xl mb-1 text-white italic fade-in"
              style={{
                fontFamily: 'Editorial New',
                letterSpacing: '-0.05em',
                fontWeight: 400,
              }}
            >
              Photography
            </h1>
            <p
              className="text-xs md:text-sm text-white fade-in fade-in-delay-1"
              style={{
                fontFamily: 'Neue Montreal',
                fontWeight: 300,
              }}
            >
              A collection of photographs I've taken while travelling and exploring using my Sony a6700
            </p>
          </div>
        </div>
        
        {/* Gallery */}
        <Gallery glowOpacity={0.9} />

        {/* Footer */}
        <footer
          className="border-t border-[#333] mt-16 pt-6 pb-10 text-sm md:text-base bg-black fade-in fade-in-delay-5"
          style={{ color: '#4E4E4E', fontFamily: 'Neue Montreal', fontWeight: 300 }}
        >
          <div className="flex flex-row justify-between items-center w-full">
            <img src={footerlogo} alt="Footer Logo" className="w-6 h-auto object-contain" />
            <span>© 2025</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Photos;
