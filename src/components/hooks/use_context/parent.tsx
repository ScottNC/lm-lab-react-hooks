import { createContext, useState } from 'react';
import { Child1 } from './child_1';
import { Child2 } from './child_2';

type Theme = {
    backgroundColor: string,
    color: string,
    padding: string,
    margin: string
}

const DarkTheme : Theme = {
    backgroundColor: '#CCC',
	color: 'white',
	padding: '2rem',
	margin: '2rem',
}

const LightTheme : Theme = {
    backgroundColor: 'white',
	color: '#CCC',
	padding: '2rem',
	margin: '2rem',
}

export const ThemeContext = createContext<Theme>(DarkTheme);


export const Parent = () => {

    const [dark, setDarkTheme] = useState(true)

    const toggleTheme = () => {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    return (
        <div className='section'>
            <h2>useContext</h2>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <ThemeContext.Provider value={dark? DarkTheme : LightTheme}>
                <Child1/>
                <Child2 />
            </ThemeContext.Provider>
            
        </div>

    )
}