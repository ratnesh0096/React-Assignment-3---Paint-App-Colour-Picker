import React, { PropTypes, useState } from 'react';

const Selection = props => {
    const [style, setStyle]=useState({background:""});
    return (
        <div className="fix-box" style={style} onClick={()=>{props.applyColor(setStyle)}}>
            <h2 class="subheading">Selection</h2>
        </div>
    );
};


export default Selection;
