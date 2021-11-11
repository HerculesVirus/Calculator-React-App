import ReactDOM from 'react-dom'
import React from 'react'
import InputScreen from './InputScreen'
import ButtonPad from './ButtonPad'
import './Main.css'

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            content: ''
        }
        this.OnButtonPadClick =this.OnButtonPadClick.bind(this)
    }
    OnButtonPadClick(content){
        //if(co)
        switch(content){
            case 'C':
                this.setState({
                    content: ''
                })
                break
            case 'Del':
                console.log("Content in equal : "+content)
                this.setState((prevState)=>({
                    content: (prevState.content ?   prevState.content.slice(0,-1) : 'Invalid VAlue')
                }))                  
                break
            case '=':
                try{
                    this.setState((prevState)=>({
                        content: (prevState.content ? eval(prevState.content) : 'Invalid VAlue')
                    }))                   
                }
                catch{
                    this.setState({
                        content: 'Invalid Value'
                    })
                }
                break
            case 'Console Log':
                    console.log(this.state.content)
                    break
            default:
                //let v = content
                this.setState((prevState)=>({
                    content: (prevState.content ? prevState.content : '')+ content
                })) 
                console.log('default: '+this.state.content)     
                break 
        }


    }
    render(){
        console.log('Hello from Main Render')
        return(          
            <div className='container'>
                <InputScreen display={this.state.content}/>
                <ButtonPad OnButtonClick={this.OnButtonPadClick}/>
            </div>       
        );
    }
}

ReactDOM.render(
    <Calculator/>,
    document.getElementById('root')
);