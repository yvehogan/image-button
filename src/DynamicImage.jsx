import React from 'react';
import Button from './Button';
import "./styles/DynamicImage.css";

const  DynamicImage = ({w,h,source}) => {

    let handleIncreaseClick =() => {
        w = w*0.2  + w;
        h = h*0.2  + h;
        
    };
    let handleDecreaseClick =() => {
        w = w*0.2  - w; 
        h = h*0.2  - h;
    };
    return (
        <div>
            <img  width={w}  height={h} src={source} />
            <Button  text="increase image" handleClick={handleIncreaseClick} />
            <Button  text="decrease image" handleClick={handleDecreaseClick} />
        </div>
        
    );
};
export default DynamicImage;