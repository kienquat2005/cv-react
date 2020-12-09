import { Button, TextField } from '@material-ui/core';
import { Context } from 'contexts/context';
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Route, Switch , Link} from 'react-router-dom';
import './style.css';
const style = {
    marginTop: 12,
    marginLeft: 8,
    marginRight: 8
}
function Education() {
    const {content, updateEducationData, removeData} = useContext(Context);
    const [Text, setText] = useState('add')
    const {register, handleSubmit,onBlur} = useForm();
    const onSubmit = (data) => {
        updateEducationData(data);
        setText('update')   
        removeData();
    }
    return (
        <div className="education">
            <h2>Education</h2>
            <form 
                 className='form' 
                noValidate 
                autoComplete="off"
                onSubmit = {handleSubmit(onSubmit)}
            >
                <TextField 
                id="outlined-basic" 
                label="Institution" 
                name="institution"
                variant="outlined" 
                onBlur={onBlur} 
                inputRef ={register}
                style={style}
                defaultValue = {content.education.institition}
                />
                 <TextField 
                id="outlined-basic" 
                label="City/State/Country" 
                name="city"
                variant="outlined" 
                inputRef ={register}
                style={style}
                defaultValue = {content.education.city}
                />
                 <TextField 
                id="outlined-basic" 
                label="Major" 
                name="major"
                variant="outlined" 
                inputRef ={register}
                style={style}
                defaultValue = {content.education.major}
                />
                 <TextField 
                id="outlined-basic" 
                label="Gradution Year" 
                name="gradution"
                variant="outlined" 
                inputRef ={register}
                style={style}
                defaultValue = {content.education.gradution}
                />
                 <TextField 
                id="outlined-basic" 
                label="Additional Info" 
                name="add"
                variant="outlined" 
                inputRef ={register}
                style={style}
                defaultValue = {content.education.add}
                />
                 <Button  
                type="submit" 
                variant="contained" 
                color="secondary" 
                disableElevation
                style={style}>
                   {Text}

                </Button>
                <Button variant="contained" style={style} to= "/basic/experience" component={Link}>Next</Button>  


            </form>
        </div>
    )
}

export default Education
