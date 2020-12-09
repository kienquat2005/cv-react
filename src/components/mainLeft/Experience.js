import { Button, TextField } from '@material-ui/core';
import { Context } from 'contexts/context';
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Route, Switch ,Link} from 'react-router-dom';
import Skill from './Skill';
import './style.css'
const style = {
    marginTop: 12,
    marginLeft: 8,
    marginRight: 8
}

function Experience() {
    const {content, updateExperienceData, removeData} = useContext(Context);
    const [Text, setText] = useState('Add');
    const {register , handleSubmit} = useForm();
    const onSubmit = (data) => {
        console.log(data);
        updateExperienceData(data);
        removeData();
        setText('Update')
    }
    return (
        <div className="experience">
            <h2>Professional Experience</h2>
            <form
                className='form'
                noValidate
                autoComplete="off"
                onSubmit = {handleSubmit(onSubmit)}
            >
                <h4>Company 1</h4>
                <TextField
                    id="outlined-basic"
                    label="Company"
                    name="company"
                    variant="outlined"
                    style={style}
                    inputRef = {register}
                    defaultValue = {content.experience.company}

                />
                <TextField
                    id="outlined-basic"
                    label="City/State/Country"
                    name="city"
                    variant="outlined"
                    style={style}
                    inputRef = {register}
                    defaultValue = {content.experience.city}
                />
                <TextField
                    id="outlined-basic"
                    label="Position"
                    name="position"
                    variant="outlined"
                    style={style}
                    inputRef = {register}
                    defaultValue = {content.experience.position}
                />
                <TextField
                    id="outlined-basic"
                    label="Start MM/YYYY"
                    name="start"
                    variant="outlined"
                    style={style}
                    inputRef = {register}
                    defaultValue = {content.experience.start}
                />
                <TextField
                    id="outlined-basic"
                    label="End MM/YYYY"
                    name="end"
                    variant="outlined"
                    style={style}
                    inputRef = {register}
                    defaultValue = {content.experience.end}
                />
                <TextField
                    id="outlined-basic"
                    label="Descrition"
                    name="descrition[0]"
                    variant="outlined"
                    style={style}
                    inputRef = {register}
                    defaultValue = {content.experience.descrition[0]}
                />
                <TextField
                    id="outlined-basic"
                    label="Descrition"
                    name="descrition[1]"
                    variant="outlined"
                    style={style}
                    inputRef = {register}
                    defaultValue = {content.experience.descrition[1]}
                />
                <hr />

                <h4>Company 2</h4>

                <TextField
                    id="outlined-basic"
                    label="Company"
                    name="company2"
                    variant="outlined"
                    style={style}
                    inputRef = {register}
                    defaultValue = {content.experience.company2}
                />
                <TextField
                    id="outlined-basic"
                    label="City/State/Country"
                    name="city2"
                    variant="outlined"
                    style={style}
                    inputRef = {register}
                    defaultValue = {content.experience.city2}
                />
                <TextField
                    id="outlined-basic"
                    label="Position"
                    name="position2"
                    variant="outlined"
                    style={style}
                    inputRef = {register}
                    defaultValue = {content.experience.position2}
                />
                <TextField
                    id="outlined-basic"
                    label="Start MM/YYYY"
                    name="start2"
                    variant="outlined"
                    style={style}
                    inputRef = {register}
                    defaultValue = {content.experience.start2}
                />
                <TextField
                    id="outlined-basic"
                    label="End MM/YYYY"
                    name="end2"
                    variant="outlined"
                    style={style}
                    inputRef = {register}
                    defaultValue = {content.experience.end2}
                />
                <TextField
                    id="outlined-basic"
                    label="Descrition"
                    name="descrition2[0]"
                    variant="outlined"
                    style={style}
                    inputRef = {register}
                    defaultValue = {content.experience.descrition2[0]}
                />
                <TextField
                    id="outlined-basic"
                    label="Descrition"
                    name="descrition2[1]"
                    variant="outlined"
                    style={style}
                    inputRef = {register}
                    defaultValue = {content.experience.descrition2[1]}
                />
                <Button  
                type="submit" 
                variant="contained" 
                color="secondary" 
                disableElevation
                style={style}>
                 {Text}

                </Button>
                <Button variant="contained" style={style} to= "/basic/addittional" component={Link}>Next</Button>
            </form>
        </div>
    )
}

export default Experience;
