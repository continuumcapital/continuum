import GSAP from 'gsap';

interface ScrollData {
  hard: number;
  soft: number;
  limit: number;
  height: number;
  ease: number;
}

interface Viewport {
  width: number;
  height: number;
}

export const SmoothScroll = () => {
  const scroll: ScrollData = {
    hard: 0,
    soft: 0,
    limit: 0,
    height: 0,
    ease: 0.1, // You need to define the scroll ease value
  };

  let viewport: Viewport = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  const elements = { scrollContent: document.querySelector('body') as HTMLElement };

  const setSizes = () => {
    scroll.height = elements.scrollContent.getBoundingClientRect().height;
    scroll.limit = elements.scrollContent.clientHeight - viewport.height;
    document.body.style.height = `${scroll.height}px`;
  };

  const update = () => {
    scroll.hard = window.scrollY;
    scroll.hard = GSAP.utils.clamp(0, scroll.limit, scroll.hard);
    scroll.soft = GSAP.utils.interpolate(scroll.soft, scroll.hard, scroll.ease);
    elements.scrollContent.style.transform = `translateY(${-scroll.soft}px)`;
  };

  const onResize = () => {
    viewport = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    
    setSizes();
  };

  // Attach event listeners
  window.addEventListener('scroll', update);
  window.addEventListener('resize', onResize);

  // Initialize sizes
  setSizes();

  // Initial update
  update();
};
