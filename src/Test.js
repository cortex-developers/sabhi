import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Import images
import imageAAA from './Group 91.png';
import imageBBB from './Group 93 (1).png';
import imageCCC from './Group 93 (2).png';
//import imageDDD from './nate.jpg';
//import imageEEE from './cortexchatmobile.png';

gsap.registerPlugin(ScrollTrigger);

function MyComponent() {
  const container = useRef();
  const eliteText = useRef();
  const backgroundRef = useRef();
  const eliteSections = useRef([]);
  const eliteLabels = ["PERFORMANCE FACTORY", "PERFORMANCE CURRICULUM", "PERFORMANCE SCIENCE", "ACADEMIC COACHING", "MENTORSHIP PLATFORM"];
  const backgroundColors = ["#FFCC99", "#99CCFF", "#CCFF99", "#FF99CC", "#CCCCFF"];
  const images = [
    [imageAAA, imageBBB, imageCCC],  // Images for PERFORMANCE FACTORY
    [imageAAA, imageBBB],  // Images for PERFORMANCE CURRICULUM
    [imageAAA, imageBBB],  // Images for PERFORMANCE SCIENCE
    [imageAAA, imageBBB],  // Images for ACADEMIC COACHING
    [imageAAA, imageBBB]   // Images for MENTORSHIP PLATFORM
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

      // Animate the elite text and images within each section
      tl.to(eliteText.current, {
        textContent: `ELITE: ${eliteLabel}`,
        duration: 0.25,  // Short duration for each section's text change
      });

      sectionImages.forEach((imageSrc, imageIndex) => {
        tl.to(section.querySelectorAll('img')[imageIndex], {
          opacity: 1,
          duration: 0.25,  // Short duration for the image fade-in
          ease: "power2.inOut",
        })
/*         .to(section.querySelectorAll('img')[imageIndex], {
          opacity: 0,
          duration: 0.25,  // Short duration for the image fade-out
          ease: "power2.inOut",
          delay: 0.25,  // Delay between fade-out and the next image's fade-in
        }); */
      });
    });
  }, { scope: container });

  return (
    <div ref={backgroundRef} style={{ backgroundColor: "#FFCC99", transition: "background-color 0.5s ease" }}>
      <div ref={container} className="container">
        <style>
          {`@import url('https://fonts.googleapis.com/css2?family=Notable&display=swap');`}
        </style>
        <div
          style={{
            position: "fixed",
            top: "20%",
            left: "50%",
            transform: "translateX(20%)",
            fontSize: "1.5rem",
            fontFamily: "'Notable', sans-serif",
            textAlign: "left",
            zIndex: 10
          }}
        >
          <h1 ref={eliteText} style={{ opacity: 1 }}>ELITE: PERFORMANCE FACTORY</h1>
        </div>

        <div style={{ paddingTop: "100vh" }}>
          {eliteLabels.map((label, index) => (
            <div
              key={index}
              ref={(el) => (eliteSections.current[index] = el)}
              style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                transform: "translateX(-20%)",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                marginBottom: "50vh",  // Add some space before the next section
              }}
            >

              {images[index].map((imageSrc, imgIndex) => (
                <img
                  key={imgIndex}
                  src={imageSrc}
                  alt={`Imag ${imgIndex + 1}`}
                  style={{ width: "50%", opacity: 0, position: "absolute", transition: "opacity 0.5s ease" }}
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
