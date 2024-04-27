import React, { useState, useEffect, useCallback } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from '@mui/material/IconButton';

const useTypingEffect = (text, typingSpeed = 150, enableEffect = true) => {
    const [displayedText, setDisplayedText] = useState(enableEffect ? '' : text);

    useEffect(() => {
        if (!enableEffect) {
            setDisplayedText(text);
            return;
        }

        setDisplayedText('');
        let index = 0;
        const interval = setInterval(() => {
            setDisplayedText((prev) => prev + text.charAt(index));
            index++;
            if (index === text.length) {
                clearInterval(interval);
            }
        }, typingSpeed);

        return () => clearInterval(interval);
    }, [text, typingSpeed, enableEffect]);

    return displayedText;
};

const Slideshow = ({
    images,
    texts,
    enableTypingEffect = true,
    showArrows = true,
    textSize = '2rem', // Default text size
    textColor = 'white', // Default text color
    textHighlightColor="black", // Text highlight color
    textFont = 'Kosugi Maru, sans-serif', // Default text font
    slideDuration = 3000, // Default slide duration as a prop
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const displayedText = useTypingEffect(texts[currentIndex], 50, enableTypingEffect);

    const goToPrevious = useCallback(() => {
        setIsTransitioning(true);
        setTimeout(() => {
            const isFirstImage = currentIndex === 0;
            const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
            setCurrentIndex(newIndex);
        }, 200);
    }, [currentIndex, images.length]);

    const goToNext = useCallback(() => {
        setIsTransitioning(true);
        setTimeout(() => {
            const isLastImage = currentIndex === images.length - 1;
            const newIndex = isLastImage ? 0 : currentIndex + 1;
            setCurrentIndex(newIndex);
        }, 200);
    }, [currentIndex, images.length]);

    useEffect(() => {
        const timer = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                goToNext();
            }, 200);
        }, slideDuration); // Use the slideDuration prop here

        return () => clearInterval(timer);
    }, [goToNext, slideDuration]);

    useEffect(() => {
        if (isTransitioning) {
            setTimeout(() => {
                setIsTransitioning(false);
            }, 600);
        }
    }, [isTransitioning]);

    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
            {showArrows && (
                <IconButton onClick={goToPrevious} style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 2, color:"white" }} aria-label="Previous image">
                    <ArrowBackIosNewIcon fontSize = "large"/>
                </IconButton>
            )}
            {images.map((image, index) => (
                <div key={index} style={{ position: 'relative', display: currentIndex === index ? 'block' : 'none', width: '100%', height: '100%' }}>
                    <img
                        src={image}
                        alt={`Slide ${index}`}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            position: 'absolute',
                            filter: isTransitioning ? 'blur(8px)' : 'blur(0px)',
                            transition: 'filter 0.6s ease'
                        }}
                    />
                    {currentIndex === index && (
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            color: textColor,
                            backgroundColor: textHighlightColor,
                            textAlign: 'center',
                            fontSize: textSize,
                            fontWeight: 'bold',
                            zIndex: 1,
                            whiteSpace: 'pre-wrap',
                            fontFamily: textFont,
                        }}>                            
                        {displayedText}
                        </div>
                    )}
                </div>
            ))}
            {showArrows && (
                <IconButton onClick={goToNext} style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 2, color: "white" }} aria-label="Next image">
                    <ArrowForwardIosIcon  fontSize = "large"/>
                </IconButton>
            )}
        </div>
    );
};

export default Slideshow;
