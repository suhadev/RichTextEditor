import React,{useState} from 'react'

const InputHook = ()=>{

    const [title,setTitle] = useState("some Title")
    // let title = "some title"
    let onTitleChange = (e)=>{
            setTitle(e.target.value)
    }
    return(
        <input
        value={title}
        type='text'
        onChange={onTitleChange}>
        </input>
    )
}
export default InputHook