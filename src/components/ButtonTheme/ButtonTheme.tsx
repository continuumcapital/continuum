import React, { useState } from 'react'
import { Button, Icon } from '@components'
import { useTheme } from 'next-themes'

export const ButtonTheme = () => {
  const [ active, setActive ] = useState( false )
  const { theme, setTheme } = useTheme()
  const changeTheme = () => { 
    setActive( !active )
    active ? setTheme('light') : setTheme('dark') 
  }
  
  return(

    <Button 
      variant="icon"
      icon={ active ? 'moon' : 'sun' }
      onClick={ changeTheme }
    />

  )
}
