import React, { useState } from 'react'
import { Button } from '@components'
import { useTheme } from 'next-themes'

export const ButtonTheme = () => {
  const [ active, setActive ] = useState( true )
  const { theme, setTheme } = useTheme()
  const changeTheme = () => { 
    setActive( !active )
    active ? setTheme('light') : setTheme('dark') 
  }
  
  return(

    <Button 
      variant="icon"
      icon={ active ? 'sun' : 'moon'  }
      onClick={ changeTheme }
    />

  )
}
