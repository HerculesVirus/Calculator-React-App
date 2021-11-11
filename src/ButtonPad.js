import React from 'react'
import Buttons from './Buttons'
import './Main.css'

class ButtonPad extends React.Component{

    render(){
        let EachButton = this.props.OnButtonClick;
        return(
            <div className='ButtonPad'>
                <div className='Button-row'>
                    <Buttons content={'C'} action={EachButton}/>
                    <Buttons content={'Del'} action={EachButton}/>
                    <Buttons content={'%'} action={EachButton}/>
                    <Buttons content={'Console Log'} action={EachButton}/>
                </div>
                <div className='Button-row'>
                    <Buttons content={'7'} action={EachButton}/>
                    <Buttons content={'8'} action={EachButton}/>
                    <Buttons content={'9'} action={EachButton}/>
                    <Buttons content={'/'} action={EachButton}/>
                </div>
                <div className='Button-row'>
                    <Buttons content={'4'} action={EachButton}/>
                    <Buttons content={'5'} action={EachButton}/>
                    <Buttons content={'6'} action={EachButton}/>
                    <Buttons content={'*'} action={EachButton}/>
                </div>
                <div className='Button-row'>
                    <Buttons content={'1'} action={EachButton}/>
                    <Buttons content={'2'} action={EachButton}/>
                    <Buttons content={'3'} action={EachButton}/>
                    <Buttons content={'-'} action={EachButton}/>
                </div>
                <div className='Button-row'>
                    <Buttons content={'0'} action={EachButton}/>
                    <Buttons content={'.'} action={EachButton}/>
                    <Buttons content={'='} action={EachButton}/>
                    <Buttons content={'+'} action={EachButton}/>
                </div>

            </div>
        )
    }
}

export default ButtonPad;