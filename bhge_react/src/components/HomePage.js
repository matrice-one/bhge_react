// HomePage.js
import React from "react";
import Banner from './Banner';
import Header from "./Header";
import bannerImage from '../media/images/vue_evaux.jpeg'

const HomePage = () => {
    return (
        <div style={{
            backgroundImage: `url(${bannerImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            height: '50vh' // This will make the div take the full height of the viewport
        }}>
            
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity by changing the alpha value (0.5 in this case)
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                }}
            >
                <Header />
                <Banner />
            </div>
        </div>
    )
}

export default HomePage;
