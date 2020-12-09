import React, { createContext, useEffect, useState } from 'react'
import fakeData from '../utils/fake_data'

export const Context = createContext();

const ContentProvider = (props) =>{
    const [content, setContent] = useState (
        JSON.parse(localStorage.getItem('dataLocal')) || {
            header: {},
            experience: {descrition: ['',''] , descrition2: ['','']},
            education: {},
            skill: []
        }
    );
    const [contentFake, setContentFake] = useState();

    const [control, setControl] = useState(false);
    function updateHeaderData(data){
        setContent({...content, header: data});
    }
    function updateExperienceData(data){
        setContent({...content, experience: data})
    }
    function updateEducationData(data){
        setContent({...content , education: data})
    }
    function updateSkillData(data){
        setContent({...content, skill: Object.values(data)})
    }
    function addFakeData(){
        setControl(true)
        setContentFake(fakeData)
    }
    function removeData(){
        setControl(false)
        setContentFake({
            header: {},
            experience: {descrition: ['','',''] , descrition2: ['','']},
            education: {},
            skill: [],
        })
    }

    useEffect(() => {
        localStorage.setItem('dataLocal' , JSON.stringify(content))
    },[content])


    return(
    <Context.Provider
        value = {{
            content,
            control,
            contentFake,
            setContent,
            updateHeaderData,
            updateExperienceData,
            updateEducationData,
            updateSkillData,
            addFakeData,
            removeData,
           
        }}
    >
         {props.children}
    </Context.Provider>
)
}
export default ContentProvider;