import React from 'react';
import ThemeImage from '../common/ThemeImage';

const ThemeImageTest = () => {
    const images = Array.from({ length: 11 }, (_, i) => `${i + 1}.jpg`);
    const [loadedImages, setLoadedImages] = React.useState([]);

    const handleImageLoad = (imageName) => {
        setLoadedImages(prev => [...prev, imageName]);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Theme Images Test ({loadedImages.length} of {images.length} loaded)</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '20px',
                padding: '20px'
            }}>
                {images.map((image, index) => (
                    <div key={index} style={{
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        padding: '10px',
                        background: '#fff',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                        <ThemeImage
                            src={image}
                            alt={`Theme image ${index + 1}`}
                            style={{
                                width: '100%',
                                height: '200px',
                                objectFit: 'cover',
                                borderRadius: '4px'
                            }}
                            onLoad={() => handleImageLoad(image)}
                        />
                        <div style={{
                            marginTop: '10px',
                            textAlign: 'center',
                            color: loadedImages.includes(image) ? 'green' : 'orange'
                        }}>
                            {loadedImages.includes(image) ? '✓ Loaded' : 'Loading...'}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}; export default ThemeImageTest;