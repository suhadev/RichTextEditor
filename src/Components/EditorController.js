import React from 'react'
import { white } from 'ansi-colors';
const EditorController = ({toggleInlineStyle, editorState})=>
{
   
    const inlineStyles = [
        {label:"bold",style:"BOLD"},
        {label:"italic",style:"ITALIC"},
        {label:"underline",style:"UNDERLINE"},
        {label:"monospace",style:"CODE"}
    ]
    const currentStyleArray = editorState.getCurrentInlineStyle()
    return(
        <div style={{marginTop:"20px"}}>
           {inlineStyles.map((styleObject,styleIndex) => {
                const handleTheClick = (e)=>{
                    e.preventDefault()
                    toggleInlineStyle(styleObject.style)
                }
               return(
                <span
                style={{
                    borderRadius:"2px",
                    border:"1px solid black",
                    backgroundColor:currentStyleArray.has(styleObject.style)?"silver":"white",
                    padding:"4px 8px"
                    
                }}
             onMouseDown={handleTheClick}
             >
                {styleObject.label}
            </span>
               )
                
            })}
        </div>
    )
}
export default EditorController