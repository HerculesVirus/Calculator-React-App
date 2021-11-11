import React from 'react'
import './Main.css'
// const style ={
//     background-color : 'red'
// }
class Buttons extends React.Component{
    constructor(props){
        super(props);
        this.handleButton = this.handleButton.bind(this)
    }
    handleButton(e, content){
       
        // 
        this.props.action(content)
        //console.log("e.target.value : "+content)
    }
    render(){
        let Content = this.props.content
        return(
            <button onClick={(e)=>this.handleButton(e, Content)}>{Content}</button>    
        )
    }
}
export default Buttons;