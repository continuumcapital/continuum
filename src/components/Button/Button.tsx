import React from 'react'
import { ButtonBase } from './ButtonBase'

/* 
  *** ReadMe ***

  The button component is amied to solve all instances of a button, not only in the traditional sense.
  Meaning that it supports external links, internal page links, onclick events, or a static button that has no click event attached.
  When meaning static, an example could be a fully clickable card - this could include a visual button meant for afforance,
  while the whole button is clickable, wether that takes the user to a blog post, or opens a dialog window, or an external link.

  This button component is also meant to be scalable (customizable), where various components might be needed to be combined,
  that are unknown or not addressed within here. This is the fallback method. Take for exmaple an avatar accompanied by a user name.
  This situation wouldn't be addressed here but the button component will solve for it, wether that avatar button takes the user to
  an external website, internal page, or an onclick event. All is needed is to import this component into said compnent and use it within there.
  Why this is important is because it automates a few features, such as a background color, and support on click events, without having 
  to write code again.

  The button by default comes bare-bones, meaning there is no visual rendering of a traditional button. This is added once a variant
  is attached to a button. You can view the current varients within the proptypes below.

  Click events supported: 
  • External links - <a href="" target="_blank"></a>
  • Internal links - <Link href=""></Link> ( Following NextJS convention )
  • onClick events - <button onClick={ () => fuunction() }></button>
  • Fallback is a static button, visually representing one, with no click event

  *** End ReadMe ***
*/

// -------------- Typescript declarations -------------- //

interface ButtonProps {
  variant?: 'disabled' | 'primary' | 'secondary' | 'white' | 'outline' | 'icon'
  size?: 'l0Icon' | 'l0'
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
    notBold,
    type
  }: ButtonProps ) => {
  
  return(

    <>
      { linkUrl ? (

        // Here we are adding support that should only be used as a link to an external site
        // This is because below, we follow Next JS page links that will take users to an internal link
        // An example of using the href tag is to take the user to a twitter profile that was called out in a blog post
        
        <a href={ linkUrl } target="_blank">
          <ButtonBase {...{ variant, size, title, icon, iconPlacement, children, notBold }} />
        </a>

      ) : onClick ? (

        // Here we add support for an onClick event, where the action stays on the current page
        // This should be used for anyting that adds to the user experience, without leaving the page
        // An example of this would be clicking on a button that opens up a dialog window with futher actions

        <button {...{ type, onClick }}>
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
