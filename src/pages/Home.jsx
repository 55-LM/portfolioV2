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
          <div className="max-w-xl w-full">
            <div 
              className="text-left space-y-4 text-base md:text-lg"
              style={{
                fontFamily: 'Neue Montreal',
                fontWeight: 300,
                lineHeight: 1.6,
              }}
            >
              <div className="flex items-center justify-between fade-in">
                <p className="m-0">
                  Hi, I'm&nbsp;<span className="highlight-text italic editorial-text" style={{ fontFamily: 'Editorial New' }}>Alvi</span>
                </p>
                <div className="flex items-center gap-4 ml-4" style={{ transform: 'translateY(-4px)' }}>
                  <a href="https://www.linkedin.com/in/alvia22" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity fade-in fade-in-delay-1">
                    <img src={linkedinIcon} alt="LinkedIn" className="object-contain" style={{ width: '26px', height: '26px', filter: 'brightness(0) saturate(100%) invert(63%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)' }} />
                  </a>
                  <a href="https://github.com/55-LM" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity fade-in fade-in-delay-2">
                    <img src={githubIcon} alt="GitHub" className="object-contain" style={{ width: '26px', height: '26px', filter: 'brightness(0) saturate(100%) invert(63%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)' }} />
                  </a>
                  <a href="mailto:alvi.alam@torontomu.ca" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity fade-in fade-in-delay-3" title="alvi.alam@torontomu.ca">
                    <img src={mailIcon} alt="Email" className="object-contain" style={{ width: '26px', height: '26px', filter: 'brightness(0) saturate(100%) invert(63%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)' }} />
                  </a>
                  <a href="https://github.com/55-LM/portfolioV2" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity fade-in fade-in-delay-4">
                    <img src={codeIcon} alt="Code" className="object-contain" style={{ width: '26px', height: '26px', filter: 'brightness(0) saturate(100%) invert(63%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)' }} />
                  </a>
                </div>
              </div>
              <p className="fade-in fade-in-delay-2">
                I am currently a computer engineering student at <a href="https://www.torontomu.ca/" target="_blank" rel="noopener noreferrer" className="highlight-text italic editorial-text cursor-pointer" style={{ fontFamily: 'Editorial New' }}>Toronto Metropolitan University</a>
              </p>
              <p className="fade-in fade-in-delay-3">
                I love working on <Link to="/projects" className="highlight-text italic editorial-text cursor-pointer" style={{ fontFamily: 'Editorial New' }}>projects</Link> that combine electronics, software, and design, building systems where all the pieces come together to bring something to life. I enjoy every step of the process, and I'm always excited to learn new tools and technologies along the way. Ultimately, I aim to create things that are useful, practical, and have a positive impact on the world around me.
              </p>
              <p className="fade-in fade-in-delay-4">
                I use my free time to hone my <Link to="/photos" className="highlight-text italic editorial-text cursor-pointer" style={{ fontFamily: 'Editorial New' }}>photography</Link> and explore new creative techniques. I'm also passionate about travelling, discovering new places, and spending time outdoors.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
