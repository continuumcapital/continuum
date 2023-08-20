import { useState, useEffect } from 'react'

// For the scroll position of a page
// Here we do this to change styling, animations, ect on different scroll positions

export const useScrollPosition = () => {
  const [scrollPos, setScrollPos] = useState(typeof window !== "undefined".pageYOffset);
  const onScroll = () => { setScrollPos(window.pageYOffset) };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  if (typeof window === "undefined") return 500;
  return scrollPos;
}

export const useScrollDirection = () => {
  const [ scrollDirection, setScrollDirection ] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);

  return scrollDirection;
}