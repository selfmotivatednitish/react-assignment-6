import React, { Component } from 'react'
import withTheme from './withTheme';

class ThemeChanger extends Component {
    render() {
        const { theme, setTheme } = this.props;

        return (
            <div style={{ backgroundColor: localStorage.getItem('theme') === 'light' ? 'white' : 'black', height: window.innerHeight + "px", width: window.innerWidth + "px", alignItems: 'center' }}>
                <button onClick={() => setTheme('light')}>Light Theme</button>
                <button onClick={() => setTheme('dark')} style={{
                    backgroundColor: 'black', color: 'white'
                }}>Dark Theme</button>
                <p style={{ color: localStorage.getItem('theme') === 'dark' ? 'white' : 'black' }}>Current Theme: {theme}</p>
            </div>
        );
    }
}

export default withTheme(ThemeChanger);