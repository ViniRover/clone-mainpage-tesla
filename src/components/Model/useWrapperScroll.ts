import { MotionValue, useMotionValue } from 'framer-motion';
import { useContext, useEffect } from 'react';
import ModelContext from './ModelContext';

interface Return {
  scrollY: MotionValue;
  scrollYProgress: MotionValue;
}

export default function useWrapperScroll(): Return {
  const { wrapperRef } = useContext(ModelContext);
  const scrollY = useMotionValue(0);
  const scrollYProgress = useMotionValue(0);

  useEffect(() => {
    const element = wrapperRef.current;

    if (element) {
      const updateScrollValue = (): void => {
        const { scrollTop, scrollHeight, offsetHeight } = element;

        const fullScroll = scrollHeight - offsetHeight;

        scrollY.set(scrollTop);
        scrollYProgress.set(scrollTop / fullScroll);
      };

      element.addEventListener('scroll', updateScrollValue);

      return () => element.removeEventListener('scroll', updateScrollValue);
    }
  }, [scrollY, scrollYProgress, wrapperRef]);

  return { scrollY, scrollYProgress };
}
