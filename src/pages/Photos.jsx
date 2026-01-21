import Gallery from '../Gallery';
import footerlogo from '../assets/footerlogo.png';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
        {/* Photography Content */}
        <main className="pt-16">
          <div className="mb-4 text-left pl-0 sm:pl-6">
              <h1
                className="text-xl md:text-2xl mb-1 text-white italic fade-in"
                style={{
                  fontFamily: 'Editorial New',
                  letterSpacing: '-0.05em',
                  fontWeight: 400,
                }}
              >
                Photography
              </h1>
              <p
                className="text-sm md:text-base text-white fade-in fade-in-delay-1"
                style={{
                  fontFamily: 'Neue Montreal',
                  fontWeight: 300,
                }}
              >
                I purchased my first mirrorless camera, the Sony a6700, not too long ago and have been shooting away. I pair it with the Viltrox 25mm f1.7. Here are some selected stills from my travels and outings.
              </p>
          </div>
        </main>
        
        {/* Gallery */}
        <Gallery glowOpacity={0.9} />

        {/* Footer */}
        <footer
          className="border-t border-[#333] mt-16 pt-6 pb-10 text-sm md:text-base bg-black fade-in fade-in-delay-5"
          style={{ color: '#4E4E4E', fontFamily: 'Neue Montreal', fontWeight: 300 }}
        >
          <div className="flex flex-row justify-between items-center w-full">
            <Link to="/" className="hover:opacity-70 transition-opacity">
              <img src={footerlogo} alt="Footer Logo" className="w-6 h-auto object-contain" />
            </Link>
            <span className="text-xs">© 2025</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Photos;
