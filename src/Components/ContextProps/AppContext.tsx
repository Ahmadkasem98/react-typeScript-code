import React from 'react'
import Box from './Box'
import { createContext } from 'react'
import {theme} from './Theme'

type themeProps = {
    children : React.ReactNode
}

export const ThemeContext = createContext(theme)


export default function AppContext({children}:themeProps) {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}
