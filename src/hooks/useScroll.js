
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const useScroll = ({ duration = 1000, easing = 'ease-in-out', once = false } = {}) => {
  useEffect(() => {
    AOS.init({ duration, easing, once });
    AOS.refresh();
  }, [duration, easing, once]);
};

export default useScroll;
