import { useState } from 'react';
import { Link } from 'react-router-dom';
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
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  
  const toggleDescription = (index) => {
    // Force a reflow to ensure the transition starts
    requestAnimationFrame(() => {
      setExpandedDescriptions(prev => ({
        ...prev,
        [index]: !prev[index]
      }));
    });
  };
  
  const getTruncatedDescription = (description, maxLength = 150) => {
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength) + '...';
  };

  const projects = [
    { name: 'Hidayah', image: hidayah, description: 'A cube-shaped smart speaker that plays the Adhan at the five daily prayer times and uses four diffused 8×8 RGB LED matrices to show a reverse-hourglass countdown as the next prayer approaches. The device supports Qur\'an playback using the wake phrase followed by the surah name, and displays an audio-reactive LED visualizer during recitation. Hardware integrates an ESP32-S3, ICS-43434 I²S MEMS microphone, MAX98357A I²S class-D amplifier, an 8-ohm speaker, WS2812B addressable LED matrices, and microSD storage for offline audio. The enclosure and internal layout were designed using AutoCAD, with plans to design a PCB for effeciency.', techStack: ['ESP32', 'Arduino IDE', 'C/C++', 'FreeRTOS', 'FastLED', 'I²S', 'SPI', 'AutoCAD', 'Fusion 360'], githubUrl: 'https://github.com/55-LM/Hidayah' },
    { name: 'Mono', image: mono, description: 'A minimalist digital detox companion that encourages intentional screen time through a Tamagotchi-style interface navigated with three push buttons. The device features UI on a 240×240 TFT display, GPS-based navigation with a compass arrow, a pomodoro timer, a step counter, and audio input for simple sound-reactive interactions. Hardware integrates an ESP32 Feather V2 with an ST7789 TFT, PA1616S GPS module, QMC5883L magnetometer, ADXL345 triple-axis accelerometer, SPH0645 I²S MEMS microphone, a mini 8-ohm speaker and a 3.7V 2500mAh LiPo battery. Currently designing a custom enclosure in AutoCAD and a compact PCB in KiCad to reduce size and improve integration.', techStack: ['ESP32', 'Arduino IDE', 'C/C++', 'FreeRTOS', 'SPI', 'I²C', 'UART', 'I²S', 'Adafruit GFX', 'Fusion 360', 'AutoCAD', 'KiCAD'], githubUrl: 'https://github.com/55-LM/MONO' },
    { name: 'SecondSight', image: braille, description: 'A laptop-to-hardware Text-to-Braille reader that converts typed input into 6-dot Braille using an Arduino Uno and a solenoid-based Braille cell array. A Python script streams characters over UART serial to the Arduino firmware, which maps each letter to its Braille pattern and actuates push-pull solenoids through N-channel MOSFET drivers with flyback diodes for switching. Designed and 3D-printed an enclosure using AutoCAD to package the electronics and align the Braille cell mechanism for output.', techStack: ['Arduino Uno', 'Arduino IDE', 'C/C++', 'Python', 'UART', 'AutoCAD'], githubUrl: 'https://github.com/55-LM/Text-to-Braille-Reader' },
    { name: 'Metropolitan Engineering Competition', image: mec, description: 'Web development and design for Toronto Metropolitan University\'s annual engineering competition that showcases nine event categories, sponsors, organizers and a new 20th anniversary theme. The front end is built with React, TypeScript, and styled-components designed in Figma. Helped build a full-stack backend tool dashboard for participant requirments distribution and inquiries.', techStack: ['React', 'TypeScript', 'Figma', 'Vercel'], githubUrl: 'https://github.com/55-LM/MEC2025' },
    { name: 'Escanor', image: escanor, description: 'A web app that helps photographers find high-quality photo spots by visualizing real-time sun position and scene lighting on an interactive 3D Mapbox map. Users can search anywhere, click a location, and scrub date/time to see realistic sunlight direction, shadows, and atmospheric conditions. The app also scores locations by how well they\'re lit and renders them as glowing dots with brighter yellow for better light, and dim/grey for worse. The interface includes a sidebar for controls and readouts, and the project is built with Next.js, React and TypeScript using Mapbox GL JS for rendering and styling.', techStack: ['Next.js', 'TypeScript', 'Mapbox GL JS', 'SunCalc', 'OpenStreetMap', 'Open-Meteo API', 'Tailwind CSS'], githubUrl: 'https://github.com/55-LM/escanor' },
    { name: 'Powerplex', image: powerplex, description: 'An interactive web-based power grid visualization and forecasting platform focused on Bangladesh\'s national electricity system. The application predicts power generation growth and supply–demand adequacy over a 15-year horizon using historical energy data and time-series forecasting models, and renders the progression as an animated geospatial heatmap. The platform integrates a FastAPI backend for data ingestion, forecasting, and scenario simulation with a Next.js and TypeScript frontend using Mapbox GL JS for map rendering. A PostGIS database stores spatial and temporal grid data, enabling users to explore how new clean energy infrastructure impacts regional reliability, deficits, and surplus across the country.', techStack: ['Next.js', 'TypeScript', 'Mapbox GL JS', 'Python', 'PostgreSQL'], githubUrl: 'https://github.com/55-LM/PowerPlex' },
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
    <div className="relative min-h-screen text-white bg-black">
      <GlowPortal
        src={glowPortal.src}
        left={glowPortal.left}
        top={glowPortal.top}
        width={glowPortal.width}
        height={glowPortal.height}
        show={glowPortal.show}
        opacity={glowPortal.opacity}
        zIndex={1}
      />
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 relative z-20">
        {/* Projects Content */}
        <main className="min-h-[60vh] py-16">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 text-left">
              <h1
                className="text-lg md:text-xl mb-1 text-white italic fade-in"
                style={{
                  fontFamily: 'Editorial New',
                  letterSpacing: '-0.05em',
                  fontWeight: 400,
                }}
              >
                Projects
              </h1>
              <p
                className="text-xs md:text-sm text-white fade-in fade-in-delay-1"
                style={{
                  fontFamily: 'Neue Montreal',
                  fontWeight: 300,
                }}
              >
                Here are some of the projects I have completed and the ones I'm currently working on. Head over to my GitHub to see the other projects I worked on and their source code.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => {
              const delayMap = ['fade-in-delay-2', 'fade-in-delay-3', 'fade-in-delay-4', 'fade-in-delay-5', 'fade-in-delay-5', 'fade-in-delay-5'];
              const delayClass = delayMap[Math.min(index, delayMap.length - 1)];
              return (
              <div
                key={index}
                className={`w-full cursor-pointer overflow-visible fade-in ${delayClass}`}
                onMouseEnter={!isTouchDevice ? handleShowGlow : undefined}
                onMouseLeave={!isTouchDevice ? handleHideGlow : undefined}
              >
                <a 
                  href={project.githubUrl || `https://github.com/${project.name.toLowerCase()}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-auto object-contain relative z-10"
                    onLoad={(e) => handleLoad(e, index)}
                  />
                </a>
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
                    href={project.githubUrl || `https://github.com/${project.name.toLowerCase()}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:opacity-70 transition-opacity ml-2"
                  >
                    <img src={redirectIcon} alt="Redirect" className="w-4 h-4 object-contain" />
                  </a>
                </div>
                <div className="mt-2">
                  <div
                    style={{
                      overflow: 'hidden',
                      maxHeight: expandedDescriptions[index] ? '2000px' : '3.9em',
                      willChange: 'max-height',
                      transition: 'max-height 3s ease-in-out',
                    }}
                  >
                    <p
                      className="text-left text-xs md:text-sm"
                      style={{
                        fontFamily: 'Neue Montreal',
                        fontWeight: 300,
                        color: '#828282',
                        lineHeight: '1.3',
                        display: '-webkit-box',
                        WebkitLineClamp: expandedDescriptions[index] ? '999' : '3',
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {project.description}
                    </p>
                  </div>
                  {project.description.length > 150 && (
                    <button
                      onClick={() => toggleDescription(index)}
                      className="mt-2 text-left hover:opacity-70 transition-opacity"
                      style={{
                        fontFamily: 'Neue Montreal',
                        fontWeight: 300,
                        color: '#828282',
                        fontSize: '0.7rem',
                        cursor: 'pointer',
                      }}
                    >
                      {expandedDescriptions[index] ? 'Read less' : 'Read more'}
                    </button>
                  )}
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.techStack && project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs"
                      style={{
                        fontFamily: 'Neue Montreal',
                        fontWeight: 300,
                        color: '#828282',
                        backgroundColor: 'rgba(37, 37, 37, 0.3)',
                        border: '1px solid rgba(58, 58, 58, 0.3)',
                        borderRadius: '4px',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )})}
          </div>
          </div>
        </main>

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

export default Projects;
