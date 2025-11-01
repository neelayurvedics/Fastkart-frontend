import React from 'react';
import ThemeImage from '@/components/common/ThemeImage';

const TestPage = () => {
    const themes = ['paris', 'tokyo', 'rome', 'madrid', 'denver', 'berlin', 'moscow'];
    const [selectedTheme, setSelectedTheme] = React.useState('paris');
    const images = Array.from({ length: 11 }, (_, i) => `${i + 1}.jpg`);

    return (
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{
                position: 'sticky',
                top: 0,
                backgroundColor: 'white',
                padding: '20px 0',
                borderBottom: '1px solid #eee',
                zIndex: 1000
            }}>
                <h1>Theme Images Gallery</h1>
                <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                    {themes.map((theme) => (
                        <button
                            key={theme}
                            onClick={() => setSelectedTheme(theme)}
                            style={{
                                padding: '10px 20px',
                                borderRadius: '5px',
                                border: 'none',
                                backgroundColor: theme === selectedTheme ? '#007bff' : '#f8f9fa',
                                color: theme === selectedTheme ? 'white' : '#333',
                                cursor: 'pointer',
                                textTransform: 'capitalize'
                            }}
                        >
                            {theme}
                        </button>
                    ))}
                </div>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '20px',
                padding: '20px 0'
            }}>
                {images.map((image, index) => (
                    <div key={index} style={{
                        border: '1px solid #eee',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        backgroundColor: 'white',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                        <div style={{ aspectRatio: '1', position: 'relative' }}>
                            <ThemeImage
                                src={image}
                                theme={selectedTheme}
                                alt={`${selectedTheme} theme image ${index + 1}`}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                        <div style={{
                            padding: '15px',
                            borderTop: '1px solid #eee',
                            textAlign: 'center'
                        }}>
                            Image {index + 1}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestPage;