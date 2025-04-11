'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ScrollButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed cursor-pointer bottom-6 right-6 z-50 p-3 rounded-full  bg-[#252422]/35 shadow-lg hover:bg-black/60 hover:scale-110 transition-all duration-300"
    >
      <Image src="/icons/up.svg" alt="Scroll to top" width={24} height={24} />
    </button>
  );
}
