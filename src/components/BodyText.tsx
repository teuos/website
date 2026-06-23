import { useState } from 'react';
import './BodyText.css'

function BodyText(){
    const [name, setName] = useState("teuos");
    return (
        <div className='textBox'>
            <p className='text'>
                Hey, my name is&nbsp;<span 
                className='textHighlight'
                onMouseEnter={() => setName("a.k.a. Kiro")}
                onMouseLeave={() => setName("teuos")}
                >
                    {name}&nbsp;
                </span>
                <br /> 
                I'm a softwear engineer and computer scientist.
            </p>
        </div>
    );
}

export default BodyText;