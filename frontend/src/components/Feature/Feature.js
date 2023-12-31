import React from 'react';
import './Feature.css';

export default function Feature({ imgURL, alt, title, content }) {
    return (
        <div className='Feature'>
            <div className='alignment'>
                <img id="feature" src={imgURL} alt={alt} />
                <h1>{title}</h1>
                <p>{content}</p>
            </div>
        </div>
    );
}