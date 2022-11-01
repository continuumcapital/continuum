import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { styled } from '@theme'
// import { useScrollPosition, useScrollDirection } from '@lib'
import { Logo, Button, ButtonTheme } from '@components'

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

const scrollDown = {
  transform: 'translateY( -100% )',
  padding: '12px 0'
}

// For the master container of the header
// This holds a relative position 

const Header = styled('header', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  transition: '$s1',
  zIndex: 9010,

  // For the frosted glass behind the header
  // By default no one will notice the effect, but will see whne the user starts to hover

  '&:before, &:after': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },

  '&:before': {
    backdropFilter: 'blur( 6px )'
  },

  '&:after': {
    background: '$siteBg',
    opacity: 0.7,
    zIndex: 1
  }
})

// For the container of the objects on the side of the nav container
// This holds the items to be equal width, so that the Avatars can be placed dead center of the container

const Side = styled('div', {
  display: 'inline-flex',
  position: 'relative',
  width: '20%',

  '*:not(:last-child)': { marginRight: 12 }
})

const Middle = styled('div', {
  display: 'flex',
  justifyContent: 'center',

  '@tablet': {
    display: 'none'
  }
})

// For the container for all of the content within the nav container
// This holds the logo on the left, headshots in the center, and the menu button on the right

const Nav = styled('nav', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  width: '92%',
  margin: '0 auto',
  padding: '24px 0',
  transition: '$s1',
  zIndex: 10,

  '> div:nth-child( 2 )': {
    maxWidth: 930,
    width: '100%',
  },

  // Here we align the menu button to the right of the container

  '> div:last-child': {
    justifyContent: 'flex-end'
  }
})

// ---------- This is the end of declarations ---------- //

export const SiteHeader = () => {
  const scrollPos = useScrollPosition()
  const scrollDirection = useScrollDirection()

  return(
    
    <Header style={{ transform: `translateY( ${ scrollDirection == 'down' ? '-100%' : '0' })` }}>
      <Nav style={{ padding: scrollPos <= 100 ? '24px 0' : '12px 0' }}>
        <Side><Logo linkToHome /></Side>

        {/* <Middle>
          <List direction="horizontal">
            <li><a href="https://medium.com/" target="_blank"><Button notBold size="l0" title="Research" /></a></li>
            <li><Link href="#digital-assets"><Button notBold size="l0" title="Digital Assets" /></Link></li>
            <li><Link href="#real-estate"><Button notBold size="l0" title="Real Estate" /></Link></li>
          </List>
        </Middle> */}

        <Side>
          <Link href="#contact"><Button size="l0" variant="secondary" title="Contact Us" /></Link>
          {/* <ButtonTheme /> */}
        </Side>
      </Nav>
    </Header>

  )
}
