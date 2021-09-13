import React,{useState} from 'react'
import './Form.css'
const Form = ({captureFile,uploadFile}) => {
    // we need to create a box in center to upload a file 
  const [fileDescription,setFileDescription] = useState();
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    //console.log(fileDescription);
    // console.log("inside handle");
    const description =fileDescription;
    uploadFile(description);
  }
    return (
        <div>
            
                <div className="row">
                    <div className="col l2 s12 ">
                    </div>
                    <div className="col l8 s12 center white inp">
                    <div className="section">
                        <div className="row">
                            
                            <div className="col ll s12">

                            </div>
                            <div className="col l8 s12">
                                <div className = "file-field input-field ">
                                        <input  onChange = {
                                            (e)=>{
                                                setFileDescription(e.target.value);
                                            }
                                        }placeholder= "Description" 
                                            type="text" 
                                            id = "filename" 
                                            className = "c"
                                        />
                                </div>
                            </div>
                            
                            <div className="col cntr-btn s12 l8">
                                <div className = "file-field input-field">
                                    <div className = "btn-large waves-effect waves-light yellow darken-1">
                                        <span>Choose File</span>
                                        <input type = "file" onChange = {captureFile}/>
                                    </div>
                                    
                                    <div className = "file-path-wrapper ">
                                        <input className = "file-path validate" type = "text"
                                            placeholder = "Upload file" />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col s12 l4 ">
                                <button  onClick = {handleSubmit} href="" className="btn-large upload ">UPLOAD</button>
                            </div>
                        </div>
                    </div>
                    </div> 
                </div> 
            
            
        </div>
                
                

       
    )
}

export default Form
