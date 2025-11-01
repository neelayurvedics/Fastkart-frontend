import React from 'react';

const ThemeImage = ({ src, theme = 'paris', alt = '', className = '', style = {}, ...props }) => {
    const getImageUrl = (src, theme) => {
        if (src.startsWith('http://') || src.startsWith('https://')) {
            return src;
        }
        return `${process.env.storageURL}/frontend/images/themes/${theme}/${src}`;
    };

    return (
        <img
            src={getImageUrl(src, theme)}
            alt={alt || 'Theme image'}
            className={className}
            loading="lazy"
            style={{
                display: 'block',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                ...style
            }}
            {...props}
        />
    );
}; export default ThemeImage;