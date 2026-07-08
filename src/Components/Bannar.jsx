import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const slides = [
    {
        id: 1,
        image: 'https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp',
        title: 'Discover Smart Learning',
        text: 'Build your future with modern technology, practical skills, and interactive learning experiences.',
    },
    {
        id: 2,
        image: 'https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp',
        title: 'Creative Web Solutions',
        text: 'We design responsive and elegant websites that grow your brand and impress users.',
    },
    {
        id: 3,
        image: 'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp',
        title: 'Innovation Starts Here',
        text: 'Turn your ideas into real digital products with modern tools and expert guidance.',
    },
    {
        id: 4,
        image: 'https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp',
        title: 'Build Your Career Today',
        text: 'Start your journey with confidence through smart projects, teamwork, and real experience.',
    },
];

const Bannar = ({ darkMode }) => {
    const [current, setCurrent] = useState(0);

    const total = slides.length;

    const goTo = (index) => {
        setCurrent((index + total) % total);
    };

    const prevSlide = () => goTo(current - 1);
    const nextSlide = () => goTo(current + 1);

    // autoplay
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % total);
        }, 5000);
        return () => clearInterval(timer);
    }, [total]);

    return (
        <div className="relative w-full h-[45vh] sm:h-[55vh] md:h-[70vh] lg:h-[85vh] overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                >
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                    />

                    {/* Overlay Text */}
                    <div
                        className={`absolute inset-0 flex items-center justify-start ${darkMode ? 'bg-black/70' : 'bg-black/50'
                            }`}
                    >
                       <div className="text-white w-[70%] sm:w-[75%] md:w-[60%] lg:w-[50%] ml-20 sm:ml-16 md:ml-20 lg:ml-28 pr-12 sm:pr-0">
                            <h1 className="text-2xl md:text-5xl font-bold mb-3 leading-tight">
                                {index === current ? (
                                    <Typewriter
                                        words={[slide.title]}
                                        loop={0}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={2000}
                                    />
                                ) : (
                                    <span className="opacity-0">{slide.title}</span>
                                )}
                            </h1>
                            <p className="text-sm md:text-base leading-relaxed mt-3">
                                {slide.text}
                            </p>
                        </div>
                    </div>
                </div>
            ))}

            {/* Arrows */}
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-20">
                <button onClick={prevSlide} className="btn btn-circle">
                    ❮
                </button>
                <button onClick={nextSlide} className="btn btn-circle">
                    ❯
                </button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {slides.map((slide, index) => (
                    <button
                        key={slide.id}
                        onClick={() => goTo(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === current ? 'bg-white w-6' : 'bg-white/50'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Bannar;