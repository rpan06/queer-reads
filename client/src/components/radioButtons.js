import React from 'react';

export default props => {
    const {value, handleChange} = props
    return (
        <label>
            <input type="radio" name="searchType" value={value} onChange={handleChange}/>
            <span>{value}</span>
        </label>
    )
}
