import { useState } from 'react';
import GlowPortal from '../GlowPortal';
import footerlogo from '../assets/footerlogo.png';
import redirectIcon from '../assets/redirect.png';
import hidayah from '../assets/hidayah.png';
import mono from '../assets/mono.png';
import braille from '../assets/braille.png';
import mec from '../assets/mec.png';
import escanor from '../assets/escanor.png';
import powerplex from '../assets/powerplex.png';

function Projects() {
  const isTouchDevice = typeof window !== 'undefined' && 'ontouchstart' in window;
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 640;
  const bleed = isMobile ? 2 : 4;
  const [glowPortal, setGlowPortal] = useState({ show: false, src: null, left: 0, top: 0, width: 0, height: 0, opacity: 0.5 });

  const projects = [
    { name: 'Hidayah', image: hidayah, description: 'A comprehensive web application designed to provide users with an intuitive interface for managing and organizing their daily tasks and activities. Built with modern technologies to ensure scalability and performance.', techStack: ['ESP32', 'C/C++', 'AutoCAD', 'Fusion360'] },
    { name: 'Mono', image: mono, description: 'A minimalist design system and component library focused on creating clean, efficient user interfaces. Features a cohesive design language that promotes consistency across different platforms and applications.', techStack: ['TypeScript', 'React', 'CSS'] },
    { name: 'SecondSight', image: braille, description: 'An accessibility-focused application that helps convert text to braille format, making digital content more accessible to visually impaired users. Includes real-time conversion and multiple braille standards support.', techStack: ['Python', 'Flask', 'JavaScript'] },
    { name: 'Metropolitan Engineering Competition', image: mec, description: 'A full-stack e-commerce platform with advanced features including inventory management, payment processing, and order tracking. Designed to handle high traffic volumes and provide a seamless shopping experience.', techStack: ['React', 'Express', 'PostgreSQL'] },
    { name: 'Escanor', image: escanor, description: 'A powerful data analysis and visualization tool that helps businesses make informed decisions through comprehensive reporting and interactive dashboards. Supports multiple data sources and export formats.', techStack: ['Python', 'D3.js', 'SQL'] },
    { name: 'Powerplex', image: powerplex, description: 'An enterprise-level project management solution that streamlines workflow, enhances team collaboration, and provides detailed analytics. Features include task assignment, progress tracking, and resource allocation.', techStack: ['Vue.js', 'Django', 'MySQL'] },
  ];

  const handleLoad = (e, projectIndex) => {
    const img = e.target;
    const w = img.naturalWidth;
    const h = img.naturalHeight;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = w;
    canvas.height = h;
    ctx.drawImage(img, 0, 0);

    const glowCanvas = document.createElement('canvas');
    const glowCtx = glowCanvas.getContext('2d');
    glowCanvas.width = w + bleed * 2;
    glowCanvas.height = h + bleed * 2;

    glowCtx.drawImage(canvas, bleed, bleed);

    const topRow = ctx.getImageData(0, 0, w, 1);
    for (let y = 0; y < bleed; y++) {
      glowCtx.putImageData(topRow, bleed, y);
    }

    const bottomRow = ctx.getImageData(0, h - 1, w, 1);
    for (let y = 0; y < bleed; y++) {
      glowCtx.putImageData(bottomRow, bleed, h + bleed + y);
    }

    const leftCol = ctx.getImageData(0, 0, 1, h);
    for (let x = 0; x < bleed; x++) {
      glowCtx.putImageData(leftCol, x, bleed);
    }

    const rightCol = ctx.getImageData(w - 1, 0, 1, h);
    for (let x = 0; x < bleed; x++) {
      glowCtx.putImageData(rightCol, w + bleed + x, bleed);
    }

    const topLeft = ctx.getImageData(0, 0, 1, 1);
    const topRight = ctx.getImageData(w - 1, 0, 1, 1);
    const bottomLeft = ctx.getImageData(0, h - 1, 1, 1);
    const bottomRight = ctx.getImageData(w - 1, h - 1, 1, 1);

    for (let y = 0; y < bleed; y++) {
      for (let x = 0; x < bleed; x++) {
        glowCtx.putImageData(topLeft, x, y);
        glowCtx.putImageData(topRight, w + bleed + x, y);
        glowCtx.putImageData(bottomLeft, x, h + bleed + y);
        glowCtx.putImageData(bottomRight, w + bleed + x, h + bleed + y);
      }
    }

    const glowDataUrl = glowCanvas.toDataURL();
    e.target.setAttribute('data-glow-url', glowDataUrl);
  };

  const handleShowGlow = (e) => {
    const glowDataUrl = e.target.getAttribute('data-glow-url');
    if (!glowDataUrl) return;
    const rect = e.target.getBoundingClientRect();
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;
    const width = rect.width + bleed * 2;
    const height = rect.height + bleed * 2;
    if (!glowDataUrl || width <= 0 || height <= 0) {
      return;
    }
    setGlowPortal({
      show: true,
      src: glowDataUrl,
      left: rect.left + scrollX - bleed,
      top: rect.top + scrollY - bleed,
      width,
      height,
      opacity: 0.7,
    });
  };

  const handleHideGlow = () => {
    setGlowPortal((g) => ({ ...g, show: false }));
  };

  return (
    <div className="relative min-h-screen text-white bg-[#0C0C0C]">
      <GlowPortal
        src={glowPortal.src}
        left={glowPortal.left}
        top={glowPortal.top}
        width={glowPortal.width}
        height={glowPortal.height}
        show={glowPortal.show}
        opacity={glowPortal.opacity}
      />
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Projects Content */}
        <main className="min-h-[60vh] py-16">
          <div className="max-w-5xl">
            <div className="mb-12 text-left">
              <h1
                className="text-lg md:text-xl mb-1 text-white italic"
                style={{
                  fontFamily: 'Editorial New',
                  letterSpacing: '-0.05em',
                  fontWeight: 400,
                }}
              >
                Projects
              </h1>
              <p
                className="text-xs md:text-sm text-white"
                style={{
                  fontFamily: 'Neue Montreal',
                  fontWeight: 300,
                }}
              >
                Here are some of the projects I have completed and the ones I'm currently working on. Head over to my GitHub to see the other projects I worked on and their source code.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-full cursor-pointer overflow-visible"
                onMouseEnter={!isTouchDevice ? handleShowGlow : undefined}
                onMouseLeave={!isTouchDevice ? handleHideGlow : undefined}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-auto object-contain relative z-10"
                  onLoad={(e) => handleLoad(e, index)}
                />
                <div className="mt-3 flex items-center justify-between">
                  <p
                    className="text-left text-xs md:text-sm text-white"
                    style={{
                      fontFamily: 'Neue Montreal',
                      fontWeight: 300,
                    }}
                  >
                    {project.name}
                  </p>
                  <a 
                    href={`https://github.com/${project.name.toLowerCase()}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:opacity-70 transition-opacity ml-2"
                  >
                    <img src={redirectIcon} alt="Redirect" className="w-4 h-4 object-contain" />
                  </a>
                </div>
                <p
                  className="mt-2 text-left text-xs md:text-sm"
                  style={{
                    fontFamily: 'Neue Montreal',
                    fontWeight: 300,
                    color: '#828282',
                  }}
                >
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.techStack && project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-full text-xs"
                      style={{
                        fontFamily: 'Neue Montreal',
                        fontWeight: 300,
                        color: '#828282',
                        backgroundColor: 'rgba(37, 37, 37, 0.3)',
                        border: '1px solid rgba(58, 58, 58, 0.3)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          </div>
        </main>

        {/* Footer */}
        <footer
          className="border-t border-[#333] mt-16 pt-6 pb-10 text-sm md:text-base bg-[#0C0C0C]"
          style={{ color: '#4E4E4E', fontFamily: 'Neue Montreal', fontWeight: 300 }}
        >
          <div className="flex flex-row justify-between items-center w-full">
            <img src={footerlogo} alt="Footer Logo" className="w-8 h-auto object-contain" />
            <span>© 2025</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Projects;
