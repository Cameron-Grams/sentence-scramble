import React from 'react'
import { connect } from 'react-redux'
import { registerText } from '../../actions/textActions'
import InputText from './InputText'
import './InputText.css'

class InputPage extends React.Component{

    registerInputText = ( values ) => {
        this.props.registerText( values )
        this.props.history.push( '/observe-text' )
    }

    render(){
        return(
            <div className={ "inputContainerDiv"} > 
                <div className={ "inputTopControl"}></div>
                <div className={ "inputInnerDiv shadowCentralComponent" }>
                    <h2 className={ "titleElement" }>Input text</h2>
                    <p>Type or copy and past text to be broken in sentences and scrambled:</p>
                    <InputText handleSubmit={ this.registerInputText } />
                </div>
                <div className={ "inputLiftDiv"}></div>
            </div>
        )
    }
}

const mapStateToProps = ( state ) => ({
    ...state
})

export default connect( mapStateToProps, { registerText } )( InputPage )