import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Import images
import pf1 from './pf1.png';
import pf2 from './pf2.png';
import pf3 from './pf3.png';
import pc1 from './pc1.png';
import pc2 from './pc2.png';
import pc3 from './pc3.png';
import ps1 from './ps1.png';
import ps2 from './ps2.png';
import ps3 from './ps3.png';
import ac1 from './ac1.png';
import ac2 from './ac2.png';
import ac3 from './ac3.png';
import mp1 from './mp1.png';
import mp3 from './mp3.png';

gsap.registerPlugin(ScrollTrigger);

function MyComponent() {
  const container = useRef();
  const eliteText = useRef();
  const backgroundRef = useRef();
  const eliteSections = useRef([]);
  const eliteLabels = ["PERFORMANCE FACTORY", "PERFORMANCE CURRICULUM", "PERFORMANCE SCIENCE", "ACADEMICS", "MENTORSHIP PLATFORM"];
  const backgroundColors = ["#FFCC99", "#99CCFF", "#CCFF99", "#FF99CC", "#CCCCFF"];
  const images = [
    [pf1, pf2, pf3],  // Images for PERFORMANCE FACTORY
    [pc1, pc2, pc3],  // Images for PERFORMANCE CURRICULUM
    [ps1, ps2, ps3],  // Images for PERFORMANCE SCIENCE
    [ac1, ac2, ac3],  // Images for ACADEMIC COACHING
    [mp1, mp3]   // Images for MENTORSHIP PLATFORM
  ];

  useGSAP(() => {
    eliteSections.current.forEach((section, sectionIndex) => {
      const eliteLabel = eliteLabels[sectionIndex];
      const bgColor = backgroundColors[sectionIndex];
      const sectionImages = images[sectionIndex];

      // Create a timeline for each elite section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=200%",  // Duration of the scroll
          pin: true,
          scrub: true,
          onEnter: () => gsap.to(backgroundRef.current, {
            backgroundColor: bgColor,
            duration: 0.5,
          }),
          onEnterBack: () => gsap.to(backgroundRef.current, {
            backgroundColor: bgColor,
            duration: 0.5,
          }),
        }
      });

      // Animate the elite text
      tl.to(eliteText.current, {
        textContent: `ELITE: ${eliteLabel}`,
        duration: 0.25,  // Short duration for each section's text change
      });

      // Loop through images and create fade-in and fade-out animations
      sectionImages.forEach((imageSrc, imageIndex) => {
        tl.to(section.querySelectorAll('img')[imageIndex], {
          opacity: 1,
          duration: 0.5,  // Duration for the image fade-in
          ease: "power2.inOut",
        })
        .to(section.querySelectorAll('img')[imageIndex], {
          opacity: 0,
          duration: 0.5,  // Duration for the image fade-out
          ease: "power2.inOut",
        }, "+=0.5");  // Delay between images
      });
    });
  }, { scope: container });

  return (
    <div ref={backgroundRef} style={{ backgroundColor: "#FFCC99", transition: "background-color 0.5s ease" }}>
      <div ref={container} className="container">
        <style>
          {`@import url('https://fonts.googleapis.com/css2?family=Notable&display=swap');`}
          {`
            .elite-text-container {
              position: fixed;
              top: 20%;
              left: 50%;
              transform: translateX(20%);
              font-size: 1.5rem;
              font-family: 'Notable', sans-serif;
              text-align: left;
              z-index: 10;
            }

            .elite-section {
              height: 100vh;
              display: flex;
              flex-direction: column;
              transform: translateX(-20%);
              align-items: center;
              justify-content: center;
              position: relative;
              margin-bottom: 50vh;
            }

            .elite-section img {
              width: 50%;
              opacity: 0;
              position: absolute;
              transition: opacity 0.5s ease;
            }

            /* Mobile styles */
            @media (max-width: 768px) {
              .elite-text-container {
                position: fixed;
                transform: none;
                font-size: 0.7rem; /* Smaller font size for mobile */
                transform: translate(-50%, -80%);
                text-align: center;
                margin-bottom: 20px;
              }

              .elite-section {
                flex-direction: column;
                align-items: center;
                transform: none;
              }

              .elite-section img {
                position: relative;
                width: 80%;
                opacity: 0;
                transition: opacity 0.5s ease;
              }
            }
          `}
        </style>

        <div className="elite-text-container">
          <h1 ref={eliteText} style={{ opacity: 1 }}>ELITE: PERFORMANCE FACTORY</h1>
        </div>

        <div style={{ paddingTop: "100vh" }}>
          {eliteLabels.map((label, index) => (
            <div
              key={index}
              ref={(el) => (eliteSections.current[index] = el)}
              className="elite-section"
            >
              {images[index].map((imageSrc, imgIndex) => (
                <img
                  key={imgIndex}
                  src={imageSrc}
                  alt={`Imag ${imgIndex + 1}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
