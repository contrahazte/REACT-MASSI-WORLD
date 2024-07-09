import React, { useState } from 'react';
import "./src/ImageButton.css"

const ImageButton = ({ imageSrc }) => {
    const handleImageClick = (e) => {
        const imageSource = e.target.getAttribute('src');
        console.log('Image source:', imageSource);
    };

    return (
        <button type="button" onClick={handleImageClick}>
            <img src={imageSrc} alt="Image Button" className="imageButton" />
        </button>
    );
};

export default ImageButton;