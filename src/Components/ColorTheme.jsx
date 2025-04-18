import React, { useContext } from 'react'
import { themeContexts } from './ThemeContext'

function ColorTheme() {
    const {darkTheme}=useContext(themeContexts);


    console.log(`theme is ${darkTheme}`);
    console.log(darkTheme);

    const Style={
        backgroundColor:darkTheme?'#000':'#fff',
        color:darkTheme?'#fff':'#000',
    }
    
    



  return (
    <div className='colorTheme' style={Style}>
        <h1>ColorTheme</h1>
        <h1>This is a text</h1>

        
    </div>
  )
}

export default ColorTheme