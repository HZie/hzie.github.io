import { useEffect } from 'react';

export default function useScrollAnimation(ref) {
  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add('visible');
        observer.unobserve(element);
      }
    }, { threshold: 0.3 });
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, [ref]);
}
