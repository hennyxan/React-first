import React from 'react';
import './Main.css';

function Main() {
    return (
        <main className="main">
            <h2>Main Content Goes Here</h2>
            <p>This is the main section of the website. You can add more content here to describe your services or products.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam vel nisi varius tristique.</p>
            <p>Donec convallis augue eget consectetur vehicula.</p>
            <div className="image-grid">
                <img src="https://via.placeholder.com/400" alt="Placeholder 1" />
                <img src="https://via.placeholder.com/400" alt="Placeholder 2" />
                <img src="https://via.placeholder.com/400" alt="Placeholder 3" />
            </div>
        </main>
    );
}

export default Main;