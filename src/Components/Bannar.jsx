// import React from 'react';

// const Bannar = () => {
//     return (
//         <div className="carousel w-full ">
//             <div id="slide1" className="carousel-item relative w-full">
//                 <img
//                     src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
//                     className="w-full" />
//                 <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//                     <a href="#slide4" className="btn btn-circle">❮</a>
//                     <a href="#slide2" className="btn btn-circle">❯</a>
//                 </div>
//             </div>
//             <div id="slide2" className="carousel-item relative w-full">
//                 <img
//                     src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
//                     className="w-full" />
//                 <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//                     <a href="#slide1" className="btn btn-circle">❮</a>
//                     <a href="#slide3" className="btn btn-circle">❯</a>
//                 </div>
//             </div>
//             <div id="slide3" className="carousel-item relative w-full">
//                 <img
//                     src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
//                     className="w-full" />
//                 <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//                     <a href="#slide2" className="btn btn-circle">❮</a>
//                     <a href="#slide4" className="btn btn-circle">❯</a>
//                 </div>
//             </div>
//             <div id="slide4" className="carousel-item relative w-full">
//                 <img
//                     src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
//                     className="w-full" />
//                 <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//                     <a href="#slide3" className="btn btn-circle">❮</a>
//                     <a href="#slide1" className="btn btn-circle">❯</a>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Bannar;

import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Bannar = () => {
    return (
        <div className="carousel w-full scroll-smooth">

            {/* Slide 1 */}
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                    className="w-full object-cover"
                />

                {/* Overlay Text */}
                <div className="absolute inset-0 bg-black/50 flex items-center">
                    <div className="px-6 bg-red-600 ml-5 md:px-16 text-white max-w-xl">
                        <h1 className="lg:text-5xl sm:text-xl md:text-3xl font-bold mb-3">
                            <Typewriter
                                words={['Discover Smart Learning']}
                                loop={0}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={2000}
                            />
                        </h1>

                        <p className="lg:text-lg sm:text-sm md:text-base leading-relaxed">
                            Build your future with modern technology, practical skills,
                            and interactive learning experiences.
                        </p>
                    </div>
                </div>

                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" onClick={(e) => e.preventDefault() || document.getElementById('slide4').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })} className="btn btn-circle">❮</a>

                    <a href="#slide2" onClick={(e) => e.preventDefault() || document.getElementById('slide2').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })} className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* Slide 2 */}
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                    className="w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/50 flex items-center">
                    <div className="px-6 md:px-16 text-white max-w-xl">
                        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3">
                            <Typewriter
                                words={['Creative Web Solutions']}
                                loop={0}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={2000}
                            />
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                            We design responsive and elegant websites that grow your
                            brand and impress users.
                        </p>
                    </div>
                </div>

                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" onClick={(e) => e.preventDefault() || document.getElementById('slide1').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })} className="btn btn-circle">❮</a>

                    <a href="#slide3" onClick={(e) => e.preventDefault() || document.getElementById('slide3').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })} className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* Slide 3 */}
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                    className="w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/50 flex items-center">
                    <div className="px-6 md:px-16 text-white max-w-xl">
                        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3">
                            <Typewriter
                                words={['Innovation Starts Here']}
                                loop={0}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={2000}
                            />
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                            Turn your ideas into real digital products with modern tools
                            and expert guidance.
                        </p>
                    </div>
                </div>

                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" onClick={(e) => e.preventDefault() || document.getElementById('slide2').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })} className="btn btn-circle">❮</a>

                    <a href="#slide4" onClick={(e) => e.preventDefault() || document.getElementById('slide4').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })} className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* Slide 4 */}
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                    className="w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/50 flex items-center">
                    <div className="px-6 md:px-16 text-white max-w-xl">
                        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3">
                            <Typewriter
                                words={['Build Your Career Today']}
                                loop={0}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={2000}
                            />
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                            Start your journey with confidence through smart projects,
                            teamwork, and real experience.
                        </p>
                    </div>
                </div>

                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" onClick={(e) => e.preventDefault() || document.getElementById('slide3').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })} className="btn btn-circle">❮</a>

                    <a href="#slide1" onClick={(e) => e.preventDefault() || document.getElementById('slide1').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })} className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Bannar;