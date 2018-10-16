import React from 'react';
import {Link} from 'react-router-dom'

export default props => {
    const container = {
        height: '100vh',
        display: 'flex'
    }

    const content = {
        margin: 'auto',
        textAlign: 'center'
    }

    return (
        <div style={container}>
            <div style={content}>
                <h1>404 PAGE NOT FOUND</h1>
                <p>Invalid route</p>
                <Link to="/">Back To Home</Link>
            </div>
        </div>
    )
}
