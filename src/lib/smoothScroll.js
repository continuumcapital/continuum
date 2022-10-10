import GSAP from 'gsap'

export const SmoothScroll = () => {
  const element = element
  const viewport = viewport
  const scroll = scroll

  const elements = { scrollContent: element.querySelector( 'body' ) }

  const setSizes = () => {
    scroll.height = elements.scrollContent.getBoundingClientRect().height
    scroll.limit = elements.scrollContent.clientHeight - this.viewport.height
    document.body.style.height = `${this.scroll.height}px`
  }

  const update = () => {
    scroll.hard = window.scrollY
    scroll.hard = GSAP.utils.clamp( 0, scroll.limit, scroll.hard )
    scroll.soft = GSAP.utils.interpolate( scroll.soft, scroll.hard, scroll.ease )
    elements.scrollContent.style.transform = `translateY(${ -scroll.soft}px )`
  }

  const onResize = () => {
    viewport = {
      width: window.innerWidth,
      height: window.innerHeight
    }
    
    setSizes()
  }
}