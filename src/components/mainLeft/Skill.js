import { Button, TextField } from '@material-ui/core'
import { Context } from 'contexts/context';
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import './style.css';
const style = {
    marginTop: 12,
    marginLeft: 8,
    marginRight: 8
}
function Skill() {
    const {content , updateSkillData, removeData} = useContext(Context);
    const [Text, setText] = useState("Add")
    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => {
        console.log(data);
        removeData();
        updateSkillData(data)
        setText('Update');

        
    }
    return (
        <div className="skill">
            <h2>Additional Skills</h2>
            <form 
                className='form'
                noValidate 
                autoComplete="off"
                onSubmit = {handleSubmit(onSubmit)}
            >
                <TextField 
                id="outlined-basic" 
                label="" 
                name="skill1"
                defaultValue = {content.skill[0]}
                variant="outlined" 
                inputRef ={register}
                style={style}
               
                />
                 <TextField 
                id="outlined-basic" 
                label="" 
                name="skill2"
                variant="outlined" 
                inputRef ={register}
                style={style}
                defaultValue = {content.skill[1]}
                />
                 <TextField 
                id="outlined-basic" 
                label="" 
                name="skill3"
                variant="outlined" 
                inputRef ={register}
                style={style}
                defaultValue = {content.skill[2]}
                />
                 <TextField 
                id="outlined-basic" 
                label="" 
                name="skill4"
                variant="outlined" 
                inputRef ={register}
                style={style}
                defaultValue = {content.skill[3]}
                />
                <Button  
                type="submit" 
                variant="contained" 
                color="secondary" 
                disableElevation
                style={style}>
                    {Text}

                </Button>
            </form>
        </div>
    )
}

export default Skill
