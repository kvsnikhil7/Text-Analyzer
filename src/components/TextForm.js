import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpclick = () => {
        // console.log('upperCase was clicked');
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Text converted to upper case','success');
    }
    const handleLowclick = () => {
        // console.log('LowerCase was clicked');
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Text converted to lower case','success');

    }
    const handleClearclick = () => {
        // console.log('LowerCase was clicked');
        let newText = '';
        setText(newText);
        props.showAlert('Text cleared','success');

    }
    const handleOnchange = (event) => {//this function is to edit the text if not we cannot do it
        // console.log('Onchange');
        setText(event.target.value);
    }
    const handleCopyclick = () => {
        let cpyText = text;
        navigator.clipboard.writeText(cpyText);
        props.showAlert('Text copied to clipboard!','success');

    }
    const handleAllSpaceclick = () => {
       let result = text.replace(/ +/g,'');
        setText(result);
        props.showAlert('All spaces are removed','success');

    }
    const handleSpaceclick = () => {
        let result = text.replace(/\s{2,}/g, ' ').trim() ;
        setText(result);
        props.showAlert('Extra spaces are removed','success');

    }


    
    const [text, setText] = useState('Enter the text');//refer to react hooks
    // text = 'new text' // wrong way to change the text
    // setText("new text1"); // correct way to change the text
    return (
    <>
        <div className='container' style={{color: props.mode === 'light' ? '#001130' : 'white'}}>
            <h1 >{props.heading}</h1>
            <div className ="mb-3">
            <textarea className ="form-control" value = {text} id="myBox" style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white',color: props.mode === 'light' ? '#001130' : 'white'}} onChange={handleOnchange} rows="8" ></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpclick}>convert to UpperCase</button>
            <button className="btn btn-primary" onClick={handleLowclick}>convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearclick}>Clear text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopyclick}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleAllSpaceclick}>Remove All spaces</button>
            <button className="btn btn-primary mx-1" onClick={handleSpaceclick}>Remove extra spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'light' ? '#001130' : 'white'}}> 
            <h2>your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.08 * text.split(" ").length} minutes read</p>
            <h2>preview</h2>
            <p>{text.length>0 ? text : 'enter someting in the textbox above to preview something'}</p>
        </div>
    </>
  )
}

