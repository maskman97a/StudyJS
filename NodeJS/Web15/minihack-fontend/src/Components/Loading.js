import React from 'react';
import './loading.css';

export default (props) => {
    return (
        <div className="div-loading">
            <span>Loading...</span>
            <div class="lds-hourglass"></div>
        </div>
        
    );
}