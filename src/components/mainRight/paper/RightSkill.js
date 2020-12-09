import { Context } from 'contexts/context';
import React, { useContext} from 'react'

function RightSkill() {
    const {control, content , contentFake} = useContext(Context);
    let contentUse;
    if(control){
        contentUse = contentFake;
    }else{
        contentUse = content;
    }
    let title;
    console.log(contentUse.skill);
    if(contentUse.skill.length === 0){
        title = '' ;
    }else{
        title = (
            <h3>Additional Skills</h3>
        )
    };
    let bulletData = contentUse.skill.map((item, index) => {
        if(item === "") {
            return "";
        }else{
            return <li key={index}>{item}</li>;
        }
    })
    console.log(bulletData);
    return (
        <div className='rightExperence'>
            <h3>
            {title}
            </h3>
            <ul>{bulletData}</ul>
        </div>
    );
}

export default RightSkill;  
