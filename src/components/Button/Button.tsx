import React from 'react'
import { ButtonBase } from './ButtonBase'

// -------------- Typescript declarations -------------- //

interface ButtonProps {
  variant?: 'disabled' | 'primary' | 'secondary' | 'outline' | 'icon'
  size?: 'l0'
  linkUrl?: string
  title?: any
  icon?: any
  iconPlacement?: 'left' | 'right'
  children?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  notBold?: boolean
  type?: any
}

// ---------- This is the end of declarations ---------- //

export const Button = ({
    variant, // Supporting the different visual treatments of the button
    linkUrl, // Supporting links that take users to an external website - wraps in <a> tag
    onClick, // Supporting standalone button clicks that provide an interaction on the current page - wraps in <button> tag
    title, // Support for the title of a button, only not used if icon only
    icon, // Support for the icon to be within the button - can be standalone or left/right of text
    iconPlacement, // Supporting the icon placement to be on the left or right side of the container
    size, // Supporting the small version of the button
    children, // For customization of a button as fallabck for compnents needed to be witin a button (ie a whole card is a button)
    notBold, // Optional - by default, the button is bolded and this will allow it to observe regular font
    type // Optional - allows the button to be more specific for it's function, such as submit, emial, text, number, ect
  }: ButtonProps ) => {
  
  return(

    <>
      { linkUrl ? (

        // Here we are adding support that should only be used as a link to an external site
        // This is because below, we follow Next JS page links that will take users to an internal link
        // An example of using the href tag is to take the user to a twitter profile that was called out in a blog post
        
        <a href={ linkUrl }>
          <ButtonBase {...{ variant, size, title, icon, iconPlacement, children, notBold }} />
        </a>

        ) : onClick ? (

          // Here we add support for an onClick event, where the action stays on the current page
          // This should be used for anyting that adds to the user experience, without leaving the page
          // An example of this would be clicking on a button that opens up a dialog window with futher actions

          <button onClick={ onClick }>
            <ButtonBase {...{ variant, size, title, icon, type, iconPlacement, children, notBold }} />
          </button>

          // Here we add support for Form submit buttons

        ) : type == "submit" ? (
          
          <button type="submit">
            <ButtonBase {...{ variant, size, title, icon, type, iconPlacement, children, notBold }} />
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
