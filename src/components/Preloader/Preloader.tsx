import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const preloaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      delay: 0.3,
      onComplete: () => {
        onComplete();
      },
    });

    tl.fromTo(
      '.preloader-text',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );

    tl.to(preloaderRef.current, {
      y: '-100%',
      duration: 1.2,
      ease: 'power4.inOut',
    });
  }, [onComplete]);

  return (
    <div
      ref={preloaderRef}
      className="fixed top-0 left-0 w-full h-screen bg-[#0d0d0d] z-[9999] flex items-center justify-center"
    >
      <h1 className="text-white text-3xl preloader-text font-light">Loading...</h1>
    </div>
  );
};

export default Preloader;
