import React from 'react'

export default function About(props) {
    // const[styling,newStyling] = useState( {
    //     backgroundColor: "white",
    //     color: "black"
    //  })
    
   let styling = {
    color: props.mode === "dark"?"white":'#131212',
    backgroundColor: props.mode === "light"?"white":'#131212'
   }
  return (
    <>
        <div className="container my-2" style={styling}>
            <h1> About Us</h1>
            <div className="accordion" id="accordionExample"style={styling}>
        <div className="accordion-item" style={styling}>
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" style={styling} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong> Creator</strong> 
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                 Hi! My name is Ifham and I am currently pursuing my B.tech degree, I have interst in web development.
            </div>
            </div>
        </div>
        <div className="accordion-item"style={styling}>
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed"style={styling} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>App</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                I created this app to help you guys Alter a text in any way you want, UpperCase, LowerCase, Speech all these things you can do with this app in just a click.
            </div>
            </div>
        </div>
        <div className="accordion-item"style={styling}>
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed"style={styling} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Dark Mode</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                This app also has a dark mode for the nightowls, switch the button on the top right hand side.
            </div>
            </div>
        </div>
        </div>
        
    </div>
   
</>
  )
}
