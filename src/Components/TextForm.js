import React,{useState} from 'react'

export default function TextForm(props) {
    const upperCaseHandle =()=>{
        console.log("Uppercase button was clicked")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text has been converted into Uppercase", "success")
        

    }
    const OnChangeHandle =(event)=>{
        console.log("OnChnage button was clicked")
        setText(event.target.value)
    }
    // const NoOfWords = () =>{
    //   let numOfWords = 0;
    //   let words = text.split(" ");
    //   let length = words.length;
    //   numOfWords =
    //     words[length - 1] === "" || words[length - 1] === " "
    //       ? length - 1
    //       : length;
    //   console.log(words);
    //   return numOfWords;
    // }
    const lowerCaseHandle = () =>{
      let newText = text.toLowerCase()
      setText(newText)
      props.showAlert("Text has been converted into lowercase", "success")
   }
    const cleartextHandle = () => {
      let newText = ""
      setText(newText)
      props.showAlert("Text has been cleared", "success")
    }
    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
      props.showAlert("Computer is speaking the text", "success")
    }

    const[text,setText] = useState("")
    // setText("new value assigned to text")
  return (
  <>
    <div className="container">
      <h1 style = {{color :props.mode ==="light"?"black":"white"}}> {props.heading} </h1>
      <div className="mb-3">
      <label htmlFor= "MyBox" className ={`form-label text-${props.mode==="light"?"dark":"light"}`}>Enter the text here</label>
      <textarea className="form-control" value={text} onChange={OnChangeHandle} style={{backgroundColor: props.mode==="light"?"white":"#000000",color:props.mode==="light"?"black":"white"}} id="MyBox" rows="10"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={upperCaseHandle} id="butt1"> Convert To UpperCase</button>
      <button disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={lowerCaseHandle} id="butt2"> Convert To LowerCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={cleartextHandle} id="butt3"> Clear all text</button>
      <button disabled={text.length===0} className="btn btn-warning mx-2 my-1" onClick={speak} id="butt3"> Speak the text</button>
    </div>

    <div className="container my-3" style = {{color :props.mode ==="light"?"black":"white"}}>
      <h3>Your Text Summary</h3>
      <p> {text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} words, {text.length} characters</p>
      <p>Can be read in = {text.split(/\s+/).filter((element)=>{ return element.length!==0}).length*0.008} minutes</p>
      <h3>Preview</h3>
      <p>{text.length >0?text:"Type to preview your text here."}</p>
    </div>
  </>
  )
}
