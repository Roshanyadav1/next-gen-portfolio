"use client"
import React, { useEffect } from 'react'
import anime from 'animejs/lib/anime.es.js';

function Boarding() {
  useEffect(() => {
    const count = 2024;
    const duration = 10000;
    const distance = 20;

    // Clean up if re-rendered
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.zIndex = '-1';
    document.body.appendChild(container);

    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      const hue = Math.round((360 / count) * i);
      el.style.width = '4px';
      el.style.height = '4px';
      el.style.position = 'absolute';
      el.style.background = `hsl(${hue}, 60%, 60%)`;
      container.appendChild(el);
    }

    const angle = (i: number) => {
      const mapped = (Math.PI * 100) * (i / count);
      return mapped;
    };

    anime({
      targets: container.children,
      translateX: (_el, i) => `${Math.sin(angle(i)) * distance}rem`,
      translateY: (_el, i) => `${Math.cos(angle(i)) * distance}rem`,
      scale: [
        { value: 0, duration: 0 },
        { value: 0.4, duration: 2000 },
        { value: 0.2, duration: 2000 },
        { value: 0.9, duration: 2000 },
        { value: 0, duration: 4000 },
      ],
      easing: 'easeInOutSine',
      duration,
      loop: true,
    });

    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return (
    <div>Boarding</div>
  )
}

export default Boarding 