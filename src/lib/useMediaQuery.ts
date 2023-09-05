import { useState, useEffect } from 'react';

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Handle server-side rendering cases
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia(query);
    const handleMediaChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };
    
    // Immediately set state if matches
    setMatches(mediaQuery.matches);

    // Listen for changes
    mediaQuery.addEventListener('change', handleMediaChange);

    // Cleanup listener on component unmount
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, [query]);

  return matches;
}
