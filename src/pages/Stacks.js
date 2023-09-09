import React from 'react';
import MenuBar from '../components/MenuBar';
import image3 from '../Images/stack.png';
const Stacks = () => {
    return (
        <div>
            <div>
            <img
                src={image3}
                style={{ width: '600px', height: '600px', marginBottom: '100px', borderRadius: '10px'}}
            />
            </div>
        <div className="bottom">
            <MenuBar />
        </div>
        </div>
    );
};

export default Stacks;