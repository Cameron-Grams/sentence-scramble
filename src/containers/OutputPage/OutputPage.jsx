import React from 'react'
import { connect } from 'react-redux'



class OutputPage extends React.Component{



    render(){
        const outputSentences = this.props.text.sentences.map( ( sentence, index ) => {
            return(
                <div className={ "outputSentenceDiv" } > 
                    <div className={ "outputSentenceNumberBox" }></div>
                    <p className={ "outputeSentence" } key={ index } >{ sentence } </p>
                </div>
            )
        })

        return(
            <div className={ "containerDiv" }>
                <div className={ "topControl"}></div>
                <div className={ "innerDiv shadowCentralComponent" } >  
                    <h3>{ this.props.text.title }</h3>
                    { outputSentences }
                </div> 
                <div className={ "liftDiv"}></div>
            </div>
        )
    }
}

const mapStateToProps = ( state ) => ({
    text : state.reducer
})

export default connect( mapStateToProps, {} )( OutputPage )