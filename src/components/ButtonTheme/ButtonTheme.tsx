import React from 'react'
import { Button } from '@components'


// -------------- Typescript declarations -------------- //

interface ButtonProps {
  variant?: 'disabled' | 'primary' | 'tint' | 'success' | 'outline' | 'icon' | 'iconOutline' | 'noStyle'
  size?: 'l0Icon' | 'l0'
  href?: string
  target?: '_blank'
  pageLink?: string
  title?: any
  icon?: any
  iconPlacement?: 'left' | 'right'
  children?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  notBold?: boolean
}

// ---------- This is the end of declarations ---------- //

export const Button = ({
    variant, // Supporting the different visual treatments of the button
    href, // Supporting links that take users to an external website - wraps in <a> tag
    target, // Supporting the href link to be opened in a new tab/window
    pageLink, // Supprting Next/Link to tak the user to another page within the site - wraps in <Link> tag
    onClick, // Supporting standalone button clicks that provide an interaction on the current page - wraps in <button> tag
    title, // Support for the title of a button, only not used if icon only
    icon, // Support for the icon to be within the button - can be standalone or left/right of text
    iconPlacement, // Supporting the icon placement to be on the left or right side of the container
    size, // Supporting the small version of the button
    children, // For customization of a button as fallabck for compnents needed to be witin a button (ie a whole card is a button)
    notBold
  }: ButtonProps ) => {
  
  return(

    <>
      { href ? (

        // Here we are adding support that should only be used as a link to an external site
        // This is because below, we follow Next JS page links that will take users to an internal link
        // An example of using the href tag is to take the user to a twitter profile that was called out in a blog post
        
        <a href={ href } target={ target }>
          <ButtonBase {...{ variant, size, title, icon, iconPlacement, children, notBold }} />
        </a>

      ) : onClick ? (

        // Here we add support for an onClick event, where the action stays on the current page
        // This should be used for anyting that adds to the user experience, without leaving the page
        // An example of this would be clicking on a button that opens up a dialog window with futher actions

        <button onClick={ onClick }>
          <ButtonBase {...{ variant, size, title, icon, iconPlacement, children, notBold }} />
        </button>

      ) : (

        // Here we support the fallback of a button, if no click event is needed for said button
        // This will provide a static button, where the hover and active states will be respected, as the other intances
        // And technically "clicking" on this button will observe the parent action, meaning this should only be used if there is a click event
        // An example of the this is using a button within a card to show the affordance that the clicking on the card has an action
        // In all instances, this button without a click event will be encompassed with a parent container that is a button

        <ButtonBase {...{ variant, size, title, icon, iconPlacement, children, notBold }} />

      )}
    </>

  )
}
