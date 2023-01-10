import AOS from 'aos';
import 'aos/dist/aos.css';

window.addEventListener('load', () => {
  AOS.init({
    offset: 0,
    duration: 1000,
    easing: 'ease-in-out',
    delay: 0,
    once: true,
  });
  AOS.refresh();
});
