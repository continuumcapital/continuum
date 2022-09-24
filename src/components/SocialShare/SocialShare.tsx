import React, { useState } from 'react'
import { styled } from '@stitches/react'
import { List } from '@components'
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share'
import FacebookIcon from './SocialIcons/FacebookIcon'
import TwitterIcon from './SocialIcons/TwitterIcon'
import LinkedInIcon from './SocialIcons/LinkedInIcon'
import LinkIcon from './SocialIcons/LinkIcon'

// For the master container of the social links
// This contains the social share ability, mostly used in articles to share to Facebook, Twitter, or LinkedIn

const SocialWrap = styled('div', {
  position: 'relative',
  width: '100%',
  color: '$gray',  
  svg: { width: 20, height: 20 },
  'li:hover svg': { color: '$moss' },
})

// -------------- Typescript declarations -------------- //

interface SocialProps {
  withTitle?: boolean
  socials: {
    type: string
    shareURL: string
    summary?: string
  }[]
}

// ---------- This is the end of declarations ---------- //

export const SocialShare = ({ socials, withTitle }: SocialProps) => {
  const [copied, setCopied] = useState(false)
  const copyText = () => {
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }

  return (

    <SocialWrap>
      <List direction="horizontal" spacing="l1r">
        { socials.map(( social:any, i ) => (
          
          <li key={ `social-${ i }` }>
            {social.type == 'Facebook' ? (
              <FacebookShareButton
                url={ social.shareURL }
                quote={ social.summary }
              >
                <FacebookIcon />
              </FacebookShareButton>
            ) : null }

            { social.type == 'Twitter' ? (
              <TwitterShareButton
                url={ social.shareURL }
                title={ social.summary }
              >
                <TwitterIcon />
              </TwitterShareButton>
            ) : null }

            {social.type == 'LinkedIn' ? (
              <LinkedinShareButton
                title="Artizen Essay"
                summary={ social.summary }
                source={ social.shareURL }
                url={ social.shareURL }
              >
                <LinkedInIcon />
                { withTitle ? <>LinkedIn</> : null}
              </LinkedinShareButton>
            ) : null }

            {social.type == 'Link' ? (
              <button
                style={{ background: 'none', color: 'inherit' }}
                onClick={() => {
                  navigator.clipboard.writeText(social.shareURL)
                  copyText()
                }}>
                <LinkIcon />
                {/* {copied ? <Toast /> : null} */}
              </button>
            ) : null}
          </li>
        ))}
      </List>
    </SocialWrap>
    
  )
}
