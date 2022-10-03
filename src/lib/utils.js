import { useState, useEffect } from 'react'

// For the scroll position of a page
// Here we do this to change styling, animations, ect on different scroll positions

export const useScrollPosition = () => {
    if (typeof window === "undefined") return 500;
  
    // Store the state
    const [scrollPos, setScrollPos] = useState(window.pageYOffset);
  
    // On Scroll
    const onScroll = () => {
      setScrollPos(window.pageYOffset);
    };
  
    // Add and remove the window listener
    useEffect(() => {
      window.addEventListener("scroll", onScroll);
      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    });
    
    return scrollPos;
  }

// For the truncation of crypto address

export const truncateCryptoAddress = ( str ) => {
    let addr = str
    let first = str.substr( 0, 5 )
    let last = str.substr( str.length - 5 )
    return first + '...' + last
}

export const numberWithCommas = ( str ) => {
    return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const currencyFormat = ( str ) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumSignificantDigits: Math.trunc(Math.abs( str )).toFixed().length,
    }).format( str )
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
  };
