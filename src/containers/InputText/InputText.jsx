import React from 'react'
import './InputText.css'

class InputText extends React.Component{

    render(){
        return(
            <div className={ "inputContainerDiv"} > 
                <div className={ "inputTopControl"}></div>
                <div className={ "inputInnerDiv" }>
                    <p>Input text</p>
                </div>
                <div className={ "inputLiftDiv"}></div>
            </div>
        )
    }
}

export default InputText