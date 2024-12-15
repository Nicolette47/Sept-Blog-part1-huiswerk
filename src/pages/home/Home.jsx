import React from 'react';
import './Home.css';
import billboard from '../../assets/images.jpg';

function Home() {
    return (
        <>
            <div className="homepage-container">
            <h1>Bij Blogventure geloven we in de kracht van woorden</h1>
            <img src={billboard} alt=" billboard met text no stress"/>
            </div>
        </>
    );
}

export default Home;