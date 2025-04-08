"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
 
    useEffect(() => {
  // Ensure it runs only on the client
  if (typeof window === 'undefined') return;

  // Animation for blobs - making them move randomly
  const blobs = document.querySelectorAll(
    '.hero-blob-1, .hero-blob-2, .hero-blob-3, .hero-blob-4, .hero-blob-5'
  );

  console.log('Blobs found:', blobs.length); // Debug

  blobs.forEach((blob) => {
    // Random movement for blobs
    const randomX = Math.random() * 20 - 10;
    const randomY = Math.random() * 20 - 10;
    const randomDuration = 5 + Math.random() * 10;

    // Animate using Web Animations API
    blob.animate(
      [
        { transform: 'translate(0, 0)' },
        { transform: `translate(${randomX}px, ${randomY}px)` },
        { transform: 'translate(0, 0)' }
      ],
      {
        duration: randomDuration * 1000,
        iterations: Infinity,
        easing: 'ease-in-out',
        direction: 'alternate'
      }
    );
  });

  // Text wrapping logic
  const wrapText = (brSelector, ratio) => {
    const brElement = document.querySelector(`[data-br="${brSelector}"]`);
    if (!brElement) return;

    const parent = brElement.parentElement;
    const setMaxWidth = (width) => (brElement.style.maxWidth = `${width}px`);

    brElement.style.maxWidth = '';
    const parentWidth = parent.clientWidth;
    const parentHeight = parent.clientHeight;

    if (!parentWidth) return;

    let left = parentWidth / 2 - 0.25;
    let right = parentWidth + 0.5;
    let mid;

    while (left + 1 < right) {
      mid = Math.round((left + right) / 2);
      setMaxWidth(mid);
      if (parent.clientHeight === parentHeight) {
        right = mid;
      } else {
        left = mid;
      }
    }

    setMaxWidth(right * ratio + parentWidth * (1 - ratio));
  };

  // Initialize text wrapping
  wrapText(':R29hjf7la:', 1);
  wrapText(':R2dhjf7la:', 1);
  wrapText(':R96hjf7la:', 1);
  wrapText(':R9mhjf7la:', 1);

  // ResizeObserver to update on parent resize
  const setupResizeObserver = (brSelector) => {
    const element = document.querySelector(`[data-br="${brSelector}"]`);
    if (!element) return;

    const observer = new ResizeObserver(() => {
      wrapText(brSelector, +element.dataset.brr);
    });

    observer.observe(element.parentElement);
    return observer;
  };

  const observers = [
    setupResizeObserver(':R29hjf7la:'),
    setupResizeObserver(':R2dhjf7la:'),
    setupResizeObserver(':R96hjf7la:'),
    setupResizeObserver(':R9mhjf7la:')
  ];

  return () => {
    observers.forEach((obs) => obs && obs.disconnect());
  };
}, []);

  return (
    <section className="relative w-full overflow-visible pt-0 pb-0 md:pb-0 xl:pb-0" style={{ zIndex: 10 }} data-theme="light">
      <div>
        {/* Desktop version (hidden on smaller screens) */}
        <div className="hidden xl:grid relative grid h-full w-full">
          {/* Gradient overlay */}
          <div className="pointer-events-none absolute inset-0 z-[2] flex flex-col justify-between" style={{ opacity: 1 }}>
            <div className="h-[8rem] w-full bg-gradient-to-b from-gray-100 to-transparent"></div>
          </div>
          
          {/* Main content */}
          <div className="relative z-[0] col-start-1 row-start-1 flex h-full w-full items-center justify-center">
            <div className="w-full h-full">
              <div className="mx-auto px-5 md:px-10 lg:px-12 w-full max-w-screen relative grid min-h-screen w-screen overflow-visible">
                <div className="flex flex-col justify-between h-full col-start-1 row-start-1">
                  <div className="h-[8rem] lg:h-[6.5rem]" aria-hidden="true"></div>
                  
                  {/* Main heading */}
                  <h2 className="text-center md:mx-auto md:max-w-[74.6875rem] text-5xl md:text-6xl lg:text-7xl font-bold">
                    <span data-br=":R29hjf7la:" data-brr="1" className="inline-block align-top">
                      <span className="inline-flex overflow-hidden">
                        <span className="inline-flex" style={{ transform: 'translateY(0px)', opacity: 1, transition: 'transform 0.5s cubic-bezier(0.17, 0.55, 0.55, 1)' }}>
                          <span>We</span>
                        </span>&nbsp;
                      </span>
                      <span className="inline-flex overflow-hidden">
                        <span className="inline-flex" style={{ transform: 'translateY(0px)', opacity: 1, transition: 'transform 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s' }}>
                          <span>craft</span>
                        </span>&nbsp;
                      </span>
                      <span className="inline-flex overflow-hidden">
                        <span className="inline-flex" style={{ transform: 'translateY(0px)', opacity: 1, transition: 'transform 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s' }}>
                          <span>software</span>
                        </span>&nbsp;
                      </span>
                      <span className="inline-flex overflow-hidden">
                        <span className="inline-flex" style={{ transform: 'translateY(0px)', opacity: 1, transition: 'transform 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s' }}>
                          <span>to</span>
                        </span>&nbsp;
                      </span>
                      <span className="inline-flex overflow-hidden">
                        <span className="inline-flex" style={{ transform: 'translateY(0px)', opacity: 1, transition: 'transform 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s' }}>
                          <span><em>supercharge</em></span>
                        </span>&nbsp;
                      </span>
                      <span className="inline-flex overflow-hidden">
                        <span className="inline-flex" style={{ transform: 'translateY(0px)', opacity: 1, transition: 'transform 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s' }}>
                          <span>proven</span>
                        </span>&nbsp;
                      </span>
                      <span className="inline-flex overflow-hidden">
                        <span className="inline-flex" style={{ transform: 'translateY(0px)', opacity: 1, transition: 'transform 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s' }}>
                          <span>processes</span>
                        </span>&nbsp;
                      </span>
                    </span>
                  </h2>
                  
                  {/* Description and buttons */}
                  <div className="relative z-[21] mb-10 mt-10 flex flex-col justify-end gap-20 md:gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
                    <div className="max-w-[31.25rem]" style={{ opacity: 1 }}>
                      <p className="text-lg lg:text-lg md:text-[1.8rem]">
                        SKYCATCHFIRE is a software studio building systems that connect, scale, and transform manual operations.
                      </p>
                    </div>
                    
                    <div className="mx-10 hidden h-px flex-1 border-b border-gray-500 xl:flex" style={{ transformOrigin: 'left center', transform: 'none' }}></div>
                    
                    <div className="flex flex-wrap items-start flex-shrink-0 gap-5 md:items-center">
                      {/* Call to action buttons */}
                      <div>
                        <span className="hidden lg:inline-block" style={{ opacity: 1, transform: 'none' }}>
                          <div className="relative z-0 inline-block group">
                            <Link 
                              href="https://calendar.app.google/FuiPuuwpkX4eUtfZ8"
                              className="text-[0.9rem] pt-[0.7rem] pb-[0.6rem] px-[1.2rem] md:text-[0.9375rem] whitespace-nowrap rounded-full uppercase md:pt-[0.75rem] md:pb-[0.625rem] md:px-[1.375rem] leading-tight tracking-wider inline-flex items-center justify-center text-center transition-transform z-0 group-hover:-translate-y-1 ease-in-out duration-500 bg-gray-100 text-gray-500 border border-gray-500"
                              style={{ transition: 'color 0.01s ease-in-out, transform 0.5s ease-in-out' }}
                            >
                              Schedule a call
                            </Link>
                            <div className="absolute bottom-0 left-0 z-[-1] h-full w-full rounded-full bg-gray-500"></div>
                          </div>
                        </span>
                        
                        <span className="lg:hidden" style={{ opacity: 1, transform: 'none' }}>
                          <div className="relative z-0 inline-block group">
                            <Link 
                              href="https://calendar.app.google/FuiPuuwpkX4eUtfZ8"
                              className="text-[0.9rem] pt-[0.7rem] pb-[0.6rem] px-[1.2rem] md:text-[0.9375rem] whitespace-nowrap rounded-full uppercase md:pt-[0.75rem] md:pb-[0.625rem] md:px-[1.375rem] leading-tight tracking-wider inline-flex items-center justify-center text-center transition-transform z-0 group-hover:-translate-y-1 ease-in-out duration-500 bg-gray-500 text-gray-100 border border-gray-100"
                              style={{ transition: 'color 0.01s ease-in-out, transform 0.5s ease-in-out' }}
                            >
                              Schedule a call
                            </Link>
                            <div className="absolute bottom-0 left-0 z-[-1] h-full w-full rounded-full bg-gray-100"></div>
                          </div>
                        </span>
                      </div>
                      
                      <div>
                        <span className="hidden lg:inline-block" style={{ opacity: 1, transform: 'none' }}>
                          <div className="relative z-0 inline-block group">
                            <Link 
                              href="https://www.skycatchfire.com/work"
                              className="text-[0.9rem] pt-[0.7rem] pb-[0.6rem] px-[1.2rem] md:text-[0.9375rem] whitespace-nowrap rounded-full uppercase md:pt-[0.75rem] md:pb-[0.625rem] md:px-[1.375rem] leading-tight tracking-wider inline-flex items-center justify-center text-center transition-transform z-0 group-hover:-translate-y-1 ease-in-out duration-500 bg-gray-100 text-gray-500 border border-gray-500"
                              style={{ transition: 'color 0.01s ease-in-out, transform 0.5s ease-in-out' }}
                            >
                              Case Studies
                            </Link>
                            <div className="absolute bottom-0 left-0 z-[-1] h-full w-full rounded-full bg-gray-500"></div>
                          </div>
                        </span>
                        
                        <span className="lg:hidden" style={{ opacity: 1, transform: 'none' }}>
                          <div className="relative z-0 inline-block group">
                            <Link 
                              href="https://www.skycatchfire.com/work"
                              className="text-[0.9rem] pt-[0.7rem] pb-[0.6rem] px-[1.2rem] md:text-[0.9375rem] whitespace-nowrap rounded-full uppercase md:pt-[0.75rem] md:pb-[0.625rem] md:px-[1.375rem] leading-tight tracking-wider inline-flex items-center justify-center text-center transition-transform z-0 group-hover:-translate-y-1 ease-in-out duration-500 bg-gray-500 text-gray-100 border border-gray-100"
                              style={{ transition: 'color 0.01s ease-in-out, transform 0.5s ease-in-out' }}
                            >
                              Case Studies
                            </Link>
                            <div className="absolute bottom-0 left-0 z-[-1] h-full w-full rounded-full bg-gray-100"></div>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Text overlay with mix-blend-overlay */}
          <div className="pointer-events-none relative z-[3] col-start-1 row-start-1 flex h-full w-full items-center justify-center mix-blend-overlay" aria-hidden="true">
            <div className="w-full h-full">
              <div className="mx-auto px-5 md:px-10 lg:px-12 w-full max-w-screen relative grid min-h-screen w-screen overflow-visible">
                <div className="flex flex-col justify-between h-full col-start-1 row-start-1">
                  <div className="h-[8rem] lg:h-[6.5rem]" aria-hidden="true"></div>
                  
                  {/* Duplicated heading for overlay effect */}
                  <h2 className="text-center md:mx-auto md:max-w-[74.6875rem] text-5xl md:text-6xl lg:text-7xl font-bold">
                    <span data-br=":R2dhjf7la:" data-brr="1" className="inline-block align-top">
                      <span className="inline-flex overflow-hidden">
                        <span className="inline-flex" style={{ transform: 'translateY(0px)', opacity: 1, transition: 'transform 0.5s cubic-bezier(0.17, 0.55, 0.55, 1)' }}>
                          <span>We</span>
                        </span>&nbsp;
                      </span>
                      <span className="inline-flex overflow-hidden">
                        <span className="inline-flex" style={{ transform: 'translateY(0px)', opacity: 1, transition: 'transform 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s' }}>
                          <span>craft</span>
                        </span>&nbsp;
                      </span>
                      <span className="inline-flex overflow-hidden">
                        <span className="inline-flex" style={{ transform: 'translateY(0px)', opacity: 1, transition: 'transform 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s' }}>
                          <span>software</span>
                        </span>&nbsp;
                      </span>
                      <span className="inline-flex overflow-hidden">
                        <span className="inline-flex" style={{ transform: 'translateY(0px)', opacity: 1, transition: 'transform 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s' }}>
                          <span>to</span>
                        </span>&nbsp;
                      </span>
                      <span className="inline-flex overflow-hidden">
                        <span className="inline-flex" style={{ transform: 'translateY(0px)', opacity: 1, transition: 'transform 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s' }}>
                          <span><em>supercharge</em></span>
                        </span>&nbsp;
                      </span>
                      <span className="inline-flex overflow-hidden">
                        <span className="inline-flex" style={{ transform: 'translateY(0px)', opacity: 1, transition: 'transform 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s' }}>
                          <span>proven</span>
                        </span>&nbsp;
                      </span>
                      <span className="inline-flex overflow-hidden">
                        <span className="inline-flex" style={{ transform: 'translateY(0px)', opacity: 1, transition: 'transform 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s' }}>
                          <span>processes</span>
                        </span>&nbsp;
                      </span>
                    </span>
                  </h2>
                  
                  {/* Duplicated buttons and description for overlay */}
                  <div className="relative z-[21] mb-10 mt-10 flex flex-col justify-end gap-20 md:gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
                    <div className="max-w-[31.25rem]" style={{ opacity: 1 }}>
                      <p className="text-lg lg:text-lg md:text-[1.8rem]">
                        SKYCATCHFIRE is a software studio building systems that connect, scale, and transform manual operations.
                      </p>
                    </div>
                    
                    <div className="mx-10 hidden h-px flex-1 border-b border-gray-500 xl:flex" style={{ transformOrigin: 'left center', transform: 'none' }}></div>
                    
                    <div className="flex flex-wrap items-start flex-shrink-0 gap-5 md:items-center">
                      <div>
                        <span className="hidden lg:inline-block" style={{ opacity: 1, transform: 'none' }}>
                          <div className="relative z-0 inline-block group">
                            <Link 
                              href="https://calendar.app.google/FuiPuuwpkX4eUtfZ8"
                              className="text-[0.9rem] pt-[0.7rem] pb-[0.6rem] px-[1.2rem] md:text-[0.9375rem] whitespace-nowrap rounded-full uppercase md:pt-[0.75rem] md:pb-[0.625rem] md:px-[1.375rem] leading-tight tracking-wider inline-flex items-center justify-center text-center transition-transform z-0 group-hover:-translate-y-1 ease-in-out duration-500 bg-gray-100 text-gray-500 border border-gray-500"
                              style={{ transition: 'color 0.01s ease-in-out, transform 0.5s ease-in-out' }}
                            >
                              Schedule a call
                            </Link>
                            <div className="absolute bottom-0 left-0 z-[-1] h-full w-full rounded-full bg-gray-500"></div>
                          </div>
                        </span>
                        
                        <span className="lg:hidden" style={{ opacity: 1, transform: 'none' }}>
                          <div className="relative z-0 inline-block group">
                            <Link 
                              href="https://calendar.app.google/FuiPuuwpkX4eUtfZ8"
                              className="text-[0.9rem] pt-[0.7rem] pb-[0.6rem] px-[1.2rem] md:text-[0.9375rem] whitespace-nowrap rounded-full uppercase md:pt-[0.75rem] md:pb-[0.625rem] md:px-[1.375rem] leading-tight tracking-wider inline-flex items-center justify-center text-center transition-transform z-0 group-hover:-translate-y-1 ease-in-out duration-500 bg-gray-500 text-gray-100 border border-gray-100"
                              style={{ transition: 'color 0.01s ease-in-out, transform 0.5s ease-in-out' }}
                            >
                              Schedule a call
                            </Link>
                            <div className="absolute bottom-0 left-0 z-[-1] h-full w-full rounded-full bg-gray-100"></div>
                          </div>
                        </span>
                      </div>
                      
                      <div>
                        <span className="hidden lg:inline-block" style={{ opacity: 1, transform: 'none' }}>
                          <div className="relative z-0 inline-block group">
                            <Link 
                              href="https://www.skycatchfire.com/work"
                              className="text-[0.9rem] pt-[0.7rem] pb-[0.6rem] px-[1.2rem] md:text-[0.9375rem] whitespace-nowrap rounded-full uppercase md:pt-[0.75rem] md:pb-[0.625rem] md:px-[1.375rem] leading-tight tracking-wider inline-flex items-center justify-center text-center transition-transform z-0 group-hover:-translate-y-1 ease-in-out duration-500 bg-gray-100 text-gray-500 border border-gray-500"
                              style={{ transition: 'color 0.01s ease-in-out, transform 0.5s ease-in-out' }}
                            >
                              Case Studies
                            </Link>
                            <div className="absolute bottom-0 left-0 z-[-1] h-full w-full rounded-full bg-gray-500"></div>
                          </div>
                        </span>
                        
                        <span className="lg:hidden" style={{ opacity: 1, transform: 'none' }}>
                          <div className="relative z-0 inline-block group">
                            <Link 
                              href="https://www.skycatchfire.com/work"
                              className="text-[0.9rem] pt-[0.7rem] pb-[0.6rem] px-[1.2rem] md:text-[0.9375rem] whitespace-nowrap rounded-full uppercase md:pt-[0.75rem] md:pb-[0.625rem] md:px-[1.375rem] leading-tight tracking-wider inline-flex items-center justify-center text-center transition-transform z-0 group-hover:-translate-y-1 ease-in-out duration-500 bg-gray-500 text-gray-100 border border-gray-100"
                              style={{ transition: 'color 0.01s ease-in-out, transform 0.5s ease-in-out' }}
                            >
                              Case Studies
                            </Link>
                            <div className="absolute bottom-0 left-0 z-[-1] h-full w-full rounded-full bg-gray-100"></div>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Animated blob background */}
          <div className="hero-blobs pointer-events-none z-[1] col-start-1 row-start-1 h-full w-1/2 md:w-full">
            {/* <div className="hero-blob-5 absolute left-[24%] top-[26%] lg:left-[44%] lg:top-[20%]" style={{ animationPlayState: 'running' }}>
              <svg className="w-[22.875rem] scale-110 lg:scale-100" viewBox="0 0 372 356" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.0210643 159.052C6.80885 111.081 45.0122 37.7493 91.9035 15.4908C138.795 -6.76775 234.783 -4.81885 281.369 25.5007C327.955 55.8203 372.934 143.174 371.42 197.408C369.906 251.643 325.659 333.257 272.286 350.908C218.912 368.559 96.554 335.29 51.1766 303.314" fill="#c588ed"></path>
              </svg>
            </div>
             */}
            <div className="hero-blob-5  absolute left-[70%] top-[55%] lg:left-[75%] lg:top-[50%]">
    <svg className="w-[10rem] filter drop-shadow-[0_0_18px_rgba(44,175,137,0.4)]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#2CAF89" d="M33.4,-52.6C45.4,-43.7,58.3,-37.2,63.3,-26.8C68.4,-16.3,65.6,-2,59.7,9.5C53.8,20.9,44.7,29.4,35.7,40.5C26.6,51.6,17.7,65.4,6.8,67.7C-4.1,70.1,-18,61.1,-30.6,52.3C-43.2,43.4,-54.6,34.6,-62.3,22.2C-69.9,9.8,-73.7,-7.3,-69.8,-21.9C-65.9,-36.6,-54.3,-48.7,-41.3,-57.8C-28.2,-67,-14.1,-73.1,-1,-71.5C12.1,-69.8,24.3,-60.3,33.4,-52.6Z" transform="translate(100 100)" />
    </svg>
  </div>
            {/* <div className="hero-blob-4 absolute left-[16%] top-[36%] lg:left-[36%] lg:top-[30%]" style={{ animationPlayState: 'running' }}>
              <svg className="w-[22.875rem] scale-110 lg:scale-100" viewBox="0 0 381 392" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M377.416 133.464C387.277 185.871 375.593 277.621 338.106 320.23C300.62 362.84 207.652 400.967 152.497 389.12C97.3423 377.273 24.2487 305.82 7.17656 249.147C-9.89556 192.473 4.7704 89.6373 50.0645 49.078C95.3587 8.51873 224.383 -8.27341 278.941 5.79092" fill="#A07ECC"></path>
              </svg>
            </div> */}
            
            <div className="absolute hero-blob-4 left-[5%] top-[65%] lg:left-[15%] lg:top-[60%]">
    <svg className="w-[18rem] filter drop-shadow-[0_0_30px_rgba(44,175,137,0.4)]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#2CAF89" d="M37.8,-61.6C49.2,-54.6,59.4,-49.6,67.6,-40.2C75.8,-30.8,82,-16.9,78.9,-5C75.8,6.9,63.4,13.7,56.2,26.3C48.9,38.9,46.9,57.3,36.9,66.4C26.9,75.5,8.9,75.3,-5.7,67.2C-20.3,59.1,-30.5,43.1,-38.1,30.4C-45.6,17.7,-50.4,8.4,-52.2,-1.5C-54.1,-11.4,-52.9,-22.7,-46.6,-30.9C-40.4,-39.1,-29.2,-44.3,-17.8,-50.6C-6.4,-56.9,4.3,-64.3,17.1,-66.9C29.8,-69.5,44.7,-67.4,37.8,-61.6Z" transform="translate(100 100)" />
    </svg>
  </div>
            {/* <div className="hero-blob-3 absolute left-[23%] top-[42%] lg:left-[43%] lg:top-[32%]" style={{ animationPlayState: 'running' }}>
              <svg className="w-[18.75rem] scale-110 lg:scale-100" viewBox="0 0 313 347" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M92.3302 0.924189C129.695 -4.51942 192.112 48.7515 228.62 82.945C265.129 117.139 321.473 162.587 311.381 206.085C301.29 249.583 214.71 331.621 168.071 343.933C121.433 356.245 58.8245 318.01 31.5512 279.956C4.27786 241.901 -5.69829 162.112 4.43153 115.607" fill="#92EBD1"></path>
              </svg>
            </div> */}
            
            <div className="absolute hero-blob-3  left-[25%] top-[40%] lg:left-[35%] lg:top-[35%]">
    <svg className="w-[11rem] filter drop-shadow-[0_0_20px_rgba(146,235,209,0.4)]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#92EBD1" d="M42.3,-59.5C55.7,-51.2,68.1,-41.4,72.1,-28.3C76.1,-15.2,71.8,1.3,64.5,17.3C57.2,33.4,47,48.9,33.1,56.8C19.2,64.8,1.6,65.1,-14.6,61.5C-30.8,58,-45.6,50.5,-56.5,38.6C-67.5,26.7,-74.7,10.4,-71.5,-3.7C-68.3,-17.9,-54.8,-30,-42.1,-39.9C-29.3,-49.8,-17.1,-57.4,-3.4,-55.2C10.3,-52.9,20.6,-40.8,42.3,-59.5Z" transform="translate(100 100)" />
    </svg>
  </div>
            {/* <div className="hero-blob-2 absolute left-[30%] top-[51%] lg:left-[50%] lg:top-[41%]" style={{ animationPlayState: 'running' }}>
              <svg className="w-[26rem] scale-110 lg:scale-100" viewBox="0 0 463 235" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M454.06 15.3906C480.663 37.5979 439.736 97.6504 411.644 133.893C383.551 170.136 350.219 223.374 285.503 232.846C220.788 242.319 64.1113 216.416 23.3526 190.728C-17.406 165.039 2.84009 110.397 40.9514 78.7178C79.0628 47.0381 183.169 11.204 252.021 0.649467" fill="#2CAF89"></path>
              </svg>
            </div> */}
            
            <div className="absolute hero-blob-2 left-[60%] top-[15%] lg:left-[65%] lg:top-[10%]">
    <svg className="w-[14rem] filter drop-shadow-[0_0_25px_rgba(160,126,204,0.4)]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#A07ECC" d="M40.4,-61.7C51.8,-51.7,60.5,-41.5,67.6,-29.3C74.7,-17.2,80.2,-3,77.7,10.8C75.1,24.6,64.6,38.1,52.5,48.7C40.4,59.3,26.7,67,11.1,69.6C-4.5,72.2,-21,69.7,-34.4,61.3C-47.9,52.9,-58.2,38.7,-61.7,23.3C-65.2,7.9,-61.9,-8.8,-55.1,-22.9C-48.3,-37,-37.9,-48.4,-25.4,-57.9C-12.9,-67.4,1.6,-75,15.4,-74.8C29.2,-74.7,42.3,-66.7,40.4,-61.7Z" transform="translate(100 100)" />
    </svg>
  </div>
{/* 
            <div className="hero-blob-1 absolute left-[12%] top-[22%] lg:left-[32%] lg:top-[12%]" style={{ animationPlayState: 'running' }}>
              <svg className="w-[11.875rem] scale-110 lg:scale-100" viewBox="0 0 199 185" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M193.451 19.6636C205.893 38.0934 190.319 83.6587 179.441 111.03C168.563 138.401 156.043 178.907 128.182 183.889C100.321 188.871 31.0197 162.618 12.2741 140.922C-6.47145 119.225 0.288774 77.1222 15.7085 53.7103C31.1281 30.2985 75.1684 6.1253 104.792 0.450853" fill="#2CAF89"></path>
              </svg>
            </div> */}
             <div className="absolute    hero-blob-1 left-[10%] top-[10%] lg:left-[20%] lg:top-[5%]">
    <svg className="w-[12rem] filter drop-shadow-[0_0_20px_rgba(197,136,237,0.5)]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#c588ed" d="M44.2,-56.6C57.6,-47.9,68.4,-33.9,72.2,-18.6C76,-3.2,72.7,13.6,64.1,28.2C55.5,42.9,41.6,55.4,26.5,61.3C11.5,67.2,-5,66.5,-21.3,61.1C-37.7,55.7,-53.9,45.6,-61.1,31.6C-68.3,17.6,-66.6,-0.3,-58.5,-15.1C-50.3,-29.9,-35.7,-41.6,-20.3,-50.1C-4.8,-58.6,11.5,-64.1,27.2,-63.2C42.9,-62.3,57.6,-55.2,44.2,-56.6Z" transform="translate(100 100)" />
    </svg>
  </div>
          </div>
        </div>
        </div>
        </section>
        
)
}       