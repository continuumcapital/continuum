import React from 'react'
import { styled } from '@theme'
import * as SelectPrimitive from '@radix-ui/react-select'
import { List, Icon } from '@components'

const SelectWrap = styled(SelectPrimitive.Root, {
})

// For the container of the main trigger of the select component
// This holds the changes in the selection and is visually the same as the other input fields

const StyledTrigger = styled(SelectPrimitive.SelectTrigger, {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  width: 'calc( 50% - 48px )',
  height: 64,
  border: '1px solid $blueBorder',
  borderRadius: '$r2',
  padding: '0 24px',
  fontFamily: '$sansSerif',
  zIndex: 9001,
  // '&:hover': { backgroundColor: mauve.mauve3 },
  // '&:focus': { boxShadow: `0 0 0 2px black` },
  // '&[data-placeholder]': { color: violet.violet9 },

  '@tablet': {
    width: 'calc( 100% - 48px )'
  }
});

const StyledIcon = styled(SelectPrimitive.SelectIcon, {
  // color: violet.violet11,
});

const StyledContent = styled(SelectPrimitive.Content, {
  overflow: 'hidden',
  backgroundColor: 'white',
  borderRadius: '$r2',
  fontFamily: '$sansSerif',
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
});

const StyledViewport = styled(SelectPrimitive.Viewport, {
  padding: 5,
})

interface ContentProps {
  children: React.ReactNode
}

function Content({ children, ...props }:ContentProps) {
  return (
    <SelectPrimitive.Portal>
      <StyledContent {...props}>{children}</StyledContent>
    </SelectPrimitive.Portal>
  );
}

const StyledItem = styled(SelectPrimitive.Item, {
  all: 'unset',
  fontSize: 13,
  lineHeight: 1,
  color: '$black',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  position: 'relative',
  userSelect: 'none',

  '&[data-disabled]': {
    color: '$black',
    pointerEvents: 'none',
  },

  '&[data-highlighted]': {
    backgroundColor: '$black',
    color: '$black',
  },
});

const StyledLabel = styled(SelectPrimitive.Label, {
  padding: '0 25px',
  fontSize: 12,
  lineHeight: '25px',
  color: '$black',
});

const StyledSeparator = styled(SelectPrimitive.Separator, {
  height: 1,
  backgroundColor: '$black',
  margin: 5,
});

const StyledItemIndicator = styled(SelectPrimitive.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const scrollButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 25,
  backgroundColor: 'white',
  color: '$black',
  cursor: 'default',
};

const StyledScrollUpButton = styled(SelectPrimitive.ScrollUpButton, scrollButtonStyles);

const StyledScrollDownButton = styled(SelectPrimitive.ScrollDownButton, scrollButtonStyles);

// Exports
export const SelectTrigger = StyledTrigger;
export const SelectValue = SelectPrimitive.Value;
export const SelectIcon = StyledIcon;
export const SelectContent = Content;
export const SelectViewport = StyledViewport;
export const SelectGroup = SelectPrimitive.Group;
export const SelectItem = StyledItem;
export const SelectItemText = SelectPrimitive.ItemText;
export const SelectItemIndicator = StyledItemIndicator;
export const SelectLabel = StyledLabel;
export const SelectSeparator = StyledSeparator;
export const SelectScrollUpButton = StyledScrollUpButton;
export const SelectScrollDownButton = StyledScrollDownButton;

interface SelectProps {
  category: string
  placeholder: string
  options: {
    title: string
  }[]
}

export const InputSelect = ({ 
    category,
    placeholder, 
    options 
  }:SelectProps) => (

    <SelectWrap>
      <SelectTrigger aria-label={ category }>
        <SelectValue {...{ placeholder }} />
        <SelectIcon><Icon size="l0" icon="chevron-down" /></SelectIcon>
      </SelectTrigger>

      <SelectContent>
        <SelectViewport>
          <SelectGroup>
            <List>
              { options.map(( selection, i ) => (

                <li key={`selection-${ i }`}>
                  <SelectItem value={ selection.title }>
                    <SelectItemText>{ selection.title }</SelectItemText>
                    <SelectItemIndicator><Icon icon="check" /></SelectItemIndicator>
                  </SelectItem>
                </li>

              ))}
            </List>
          </SelectGroup>
        </SelectViewport>

      </SelectContent>
    </SelectWrap>

)
