import React from 'react';
import MenuBar from '../components/MenuBar';
import image2 from '../Images/FrontEnd-Test-Image.png';

const Task = () => {
    return (
        <div>
            <div>
            <img
                src={image2}
                style={{ width: '600px', height: '600px', marginBottom: '100px'}}
            />
            </div>
            <div className="bottom">
                <MenuBar />
            </div>
        </div>
    );
};

export default Task;