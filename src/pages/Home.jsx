import { Link } from 'react-router-dom';
import linkedinIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.png';
import mailIcon from '../assets/mail.png';
import codeIcon from '../assets/code.png';

function Home() {
  return (
    <div className="relative min-h-screen text-white bg-black flex flex-col">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 w-full flex-1 flex flex-col">
        {/* Main Intro Content */}
        <main className="flex-1 flex flex-col justify-center items-center px-4 py-16">
          <div className="max-w-2xl w-full">
            <div 
              className="text-left space-y-4 text-lg md:text-xl"
              style={{
                fontFamily: 'Neue Montreal',
                fontWeight: 300,
                lineHeight: 1.6,
              }}
            >
              <div className="flex items-center justify-between fade-in">
                <p className="m-0">
                  Hi, I'm   <span className="highlight-text italic editorial-text" style={{ fontFamily: 'Editorial New' }}> Alvi</span>
                </p>
                <div className="flex items-center gap-4 ml-4" style={{ transform: 'translateY(-4px)' }}>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity fade-in fade-in-delay-1">
                    <img src={linkedinIcon} alt="LinkedIn" className="w-7 h-7 object-contain" />
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity fade-in fade-in-delay-2">
                    <img src={githubIcon} alt="GitHub" className="w-7 h-7 object-contain" />
                  </a>
                  <a href="mailto:" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity fade-in fade-in-delay-3">
                    <img src={mailIcon} alt="Email" className="w-7 h-7 object-contain" />
                  </a>
                  <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity fade-in fade-in-delay-4">
                    <img src={codeIcon} alt="Code" className="w-7 h-7 object-contain" />
                  </a>
                </div>
              </div>
              <p className="fade-in fade-in-delay-2">
                I am currently a computer engineering student at <a href="https://www.torontomu.ca/" target="_blank" rel="noopener noreferrer" className="highlight-text italic editorial-text cursor-pointer" style={{ fontFamily: 'Editorial New' }}>Toronto Metropolitan University</a>
              </p>
              <p className="fade-in fade-in-delay-3">
                I enjoy taking on <Link to="/projects" className="highlight-text italic editorial-text cursor-pointer" style={{ fontFamily: 'Editorial New' }}>projects</Link> with versatile requirements especially those that bring my ideas to life. I enjoy every part of the process from conception to design and implementation.
              </p>
              <p className="fade-in fade-in-delay-4">
                I dedicate my spare time to hone my <Link to="/photos" className="highlight-text italic editorial-text cursor-pointer" style={{ fontFamily: 'Editorial New' }}>photography</Link> or travel and explore different parts of the world.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
