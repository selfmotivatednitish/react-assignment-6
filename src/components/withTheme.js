import React, { Component } from 'react';

const withTheme = (WrappedComponent) => {
    return class extends Component {
        constructor(props) {
            super(props)

            const storedTheme = localStorage.getItem('theme');
            this.state = {
                theme: storedTheme || 'light'
            }
        }

        setTheme = (theme) => {
            localStorage.setItem('theme', theme);
            this.setState({ theme });
        }

        render() {
            const { theme } = this.state;

            return (
                <WrappedComponent
                    theme={theme}
                    setTheme={this.setTheme}
                    {...this.props}
                />
            );
        }
    };
};

export default withTheme;
