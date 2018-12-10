import React from 'react'
import { Link } from 'react-router-dom'
import './Main.css'

class Main extends React.Component{


    render(){
        return(
            <div className={ "mainContainerDiv"}> 
                <div className={ "mainInnerDiv"}>
                    <p>Placeholder</p>
                    <Link to={ "/input" }><button>Go to Input</button></Link>
                </div>
            </div>
        )
    }
}

export default Main