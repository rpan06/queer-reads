import React from 'react';

export default props => {
    const {name, text, handleChange, classes} = props
    return (
        <label className={classes}>
            <input type="checkbox" className="filled-in" onChange={handleChange} name={name} value={name}/>
            <span>{text}</span>
        </label>
    )
}
