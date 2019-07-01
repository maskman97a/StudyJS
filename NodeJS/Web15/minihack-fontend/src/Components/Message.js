import React from 'react';

export default (props) => {
    return (
        <div>
            <h1>Phần này là phần của Message.js</h1>
            <h3>{props.count}</h3>
            <h2>{props.message}</h2>
        </div>
    );
}

