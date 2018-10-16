import React from 'react';

export default props => {
    const {name, text, handleChange} = props
    return (
        <label>
            <input type="checkbox" className="filled-in" onChange={handleChange} name={name} value={name}/>
            <span>{text}</span>
        </label>
    )
}
