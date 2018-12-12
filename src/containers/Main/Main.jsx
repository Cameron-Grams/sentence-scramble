import React from 'react'
import { Link } from 'react-router-dom'
import './Main.css'

class Main extends React.Component{


    render(){
        return(
            <div className={ "containerDiv"}> 
                <div className={ "topControl"}></div>
                <div className={ "innerDiv mainInnerDiv shadowCentralComponent"}>
                    <p>Placeholder</p>
                    <Link to={ "/input" }><button>Go to Input</button></Link>
                </div>
                <div className={ "liftDiv"}></div>
            </div>
        )
    }
}

export default Main