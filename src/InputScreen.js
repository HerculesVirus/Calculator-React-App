import React from "react";
import './Main.css'

class InputScreen extends React.Component{
    // constructor(props){
    //     super(props);
    // }
    render(props){
        return(
            <div className='single-input'>
                <input type="text" defaultValue={this.props.display} />
            </div>
        )
    }
}

export default InputScreen;