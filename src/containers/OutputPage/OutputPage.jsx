import React from 'react'
import { connect } from 'react-redux'



class OutputPage extends React.Component{



    render(){
        return(
            <div>{ this.props.text.originalText }</div>
        )
    }
}

const mapStateToProps = ( state ) => ({
    text : state.reducer
})

export default connect( mapStateToProps, {} )( OutputPage )