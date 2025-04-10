'use client';
import { useEffect, useRef } from 'react';
import '../../styles/style.scss'
 

export default function GradientBackground() {
  const interBubbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interBubble = interBubbleRef.current || null;
    if (!interBubble) return;

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(move);
    }

    const handleMouseMove = (event: MouseEvent) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    move();

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);


 useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector(".hero")?.offsetHeight || 0;
      const scrollY = window.scrollY;

      if (scrollY > heroHeight - 50) {
        document.body.style.backgroundColor = "#252422";
        document.body.style.color = "#efedea";
      } else {
        document.body.style.backgroundColor = "#efedea";
        document.body.style.color = "#000000";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <div className="text-container hero flex flex-col lg:p-14 p-4">
        <div>

        <h1 className="text-5xl md:text-6xl font-extrabold animate__animated animate__fadeInUp  animate__delay-1s">
          Hi, I’m Roshan
        </h1>
        <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-primary animate__animated animate__fadeInUp animate__delay-2s">
          A Frontend Developer Who Gets Things Done
        </h2>
        <p className="mt-6 text-lg md:text-xl font-medium max-w-xl animate__animated animate__fadeInUp animate__delay-2s">
          I build fast UIs, write clean code, and deliver scalable React apps backed by AWS & modern DevOps.
        </p>
        <blockquote className="mt-10 italic text-lg text-gray-800 max-w-2xl  animate__animated animate__fadeInUp animate__delay-2s">
          “Good code is its own best documentation —  <br/> and great UI speaks for your product.” <br />
          <span className="not-italic font-semibold text-primary">Let’s build something meaningful.</span>
        </blockquote>

        {/* Optional Buttons */}
        <div className="mt-10 flex gap-4 lg:absolute bottom-8 right-8 flex-wrap animate__animated animate__fadeInUp animate__delay-2s">
          <a
            href="#projects"
            className="inline-block truncate lg:px-6 lg:py-4 py-2 px-3 text-black no-underline rounded-full uppercase leading-tight tracking-wider transition-all duration-500 ease-in-out hover:shadow-[0_5px_#000]  border border-neutral-800"
          >
            View Project
          </a>
          <a
             href="/roshanyadav.pdf"
             target='_blank'
            className="inline-block truncate lg:px-6 lg:py-4 py-2 px-3 text-black no-underline rounded-full uppercase leading-tight tracking-wider transition-all duration-500 ease-in-out hover:shadow-[0_5px_#000]  border border-neutral-800"
          >
            Download Resume
          </a>
        </div>
      </div>
      </div>



      <div className="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="matrix">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="matrix"
              />
              <feBlend in="SourceGraphic" in2="matrix" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive" ref={interBubbleRef}></div>
        </div>
      </div>
    </div>
  );
}
