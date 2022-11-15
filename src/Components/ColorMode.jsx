import { Button, useColorMode } from '@chakra-ui/react'
import React from 'react'

const ColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <header>
      <Button onClick={toggleColorMode}>
        {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </header>
  )
}

export default ColorMode
