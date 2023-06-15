import React , {useState} from 'react'

export default function TextForm(props) {
    
    const handleupclick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("converted to Uppercase." , "success")
    }

    const handleloclick = () => {
        let newtext = text.toLocaleLowerCase();
        setText(newtext);
        props.showAlert("converted to Lowercase." , "success")
    }
    
    const handlecopy = () => {
        console.log("I am copy.");
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied." , "success")
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Space Removed." , "success")
    }
    const handleonchange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState("");

    // text = "Enter the text Here";      //  wroung way to change the text
    // setText("Enter the text Here");     //  wroung way to change the text
    return (
        <>
        <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>{props.Heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value = {text} onChange ={handleonchange} style={{backgroundColor: props.mode === 'dark' ? '#13466e' : 'white' , color: props.mode === 'dark' ? 'white' : 'black' }} id="mybox" rows="8"></textarea>
            </div>
            <div className="d-flex justify-content-center align-items-center flex-wrap">
                <button className='btn btn-primary mx-3 mb-3' onClick={handleupclick}> Conver to UpperCase</button>
                <button className='btn btn-primary mx-3 mb-3' onClick={handleloclick}> Conver to LowerCase</button>
                <button className='btn btn-primary mx-3 mb-3' onClick={handlecopy}> Copy </button>
                <button className='btn btn-primary mx-3 mb-3' onClick={handleExtraSpace}> Extra Space </button>
            </div>
        </div>
        <div className="container my-3"s style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h2>Your Text summary</h2>
            <p> {text.split(" ").filter((element) => {return element.length !== 0}).length} Words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} Minuts to Read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Nothig to Preview...."}</p>
        </div>
        </>
    )
}
