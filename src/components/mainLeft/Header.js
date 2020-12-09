import { Button, Switch, TextField } from '@material-ui/core'
import { Context } from '../../contexts/context';
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import './style.css';
const style = {
    marginTop: 12,
    marginLeft: 8, 
    marginRight: 8 
}
function Header() {
    const {content, updateHeaderData, removeData , setContent} = useContext(Context);
    const { register, handleSubmit, errors,onBlur} = useForm();
    
    const onSubmit = (data) => {
        removeData();
        updateHeaderData(data);
    };
    const handleDeleteHeader = (event) => {
       event.preventDefault();
       setContent({...content, header: {} });
       window.location.reload();
    }
    return (
        <div className="">
            <h2>Header</h2>
            <form 
                className='form'
                noValidate 
                autoComplete="off"
            >
                <TextField 
                id="outlined-basic" 
                label="Full Name" 
                name="name"
                variant="outlined"
                onBlur={onBlur} 
                defaultValue = {content.header.name}
                inputRef ={register({required: true, maxLength: 100})}
                style={style}
                onChange={handleSubmit(onSubmit)}
                />
                {errors.name && errors.name.type ==="required" && ( <p>This is required</p>)}
                {errors.name && errors.name.type ==="maxLength"}
                <form onChange={handleSubmit(onSubmit)}>
                    <select name="gender" style={style} ref={register({required: true})} className='gender'>
                        <option>Gender</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Other">Other</option>
                    </select>
                </form>
               <TextField 
                id="outlined-basic" 
                label="Email" 
                name = "email"
                placeholder="bluebill1049@gamil.com"
                variant="outlined" 
                defaultValue = {content.header.email}
                inputRef ={register({required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})}
                style={style}
                onChange={handleSubmit(onSubmit)}
                />
                {errors.email && errors.email.type ==="required" && ( <p>This is required</p>)}
                {errors.email && errors.email.type ==="pattern" && ( <p>Email is not valid, please re-enter your email</p>)}
                <TextField 
                id="outlined-basic" 
                label="Phone" 
                name="phone"
                variant="outlined"
                defaultValue={content.header.phone}
                inputRef ={register({required:true ,pattern: /^\d{10,11}$/})}
                style={style}
                onChange={handleSubmit(onSubmit)}
                />
                {errors.phone && errors.phone.type === "required" && (<p>This is required</p>)}
                {errors.phone && errors.phone.type ==="pattern" && (<p>Phone number must be 10 - 11 digits long</p>) }
                <TextField 
                id="outlined-basic" 
                label="Address" 
                name = "address"
                variant="outlined" 
                defaultValue={content.header.address}
                inputRef={register({required: true})}
                style={style}
                onChange={handleSubmit(onSubmit)}
                />
                {errors.address && errors.address.type === "required" && (<p>This is a required</p>)}
                <TextField 
                id="outlined-basic" 
                label="City" 
                variant="outlined" 
                name="city"
                defaultValue={content.header.city}
                inputRef={register({required: true})}
                style={style}
                onChange={handleSubmit(onSubmit)}
                />
                 {errors.city && errors.city.type === "required" && (<p>This is a required</p>)}
               <Button variant="contained"  style={style} to= "/basic/education" component={Link}>Next</Button>
               <Button variant="contained" onClick={handleDeleteHeader}  style={style} >Delete</Button>
            </form>
        </div>
    )

}

export default Header;
