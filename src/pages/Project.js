import React from 'react';
import MenuBar from '../components/MenuBar';
import Card1 from './Card1';
import Card2 from './Card2';

const Project = () => {
    return (
        <div style={{ display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '600px',
                      marginBottom: '200px'
                    }}>
                <Card1 />
                <Card2 />
                <div className="bottom">
                    <MenuBar />
                </div>
        </div>
    );
};

export default Project;