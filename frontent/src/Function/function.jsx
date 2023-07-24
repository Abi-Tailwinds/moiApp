import React,{useState} from "react"
import { useNavigate} from "react-router-dom"
import "./function.css"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css'



const Function = () => {

   
    const[weds, setweds]=useState("")
  
    const navigate = useNavigate();
   
    
    const functionSubmit = (e) => {
        e.preventDefault();
        const data = {
            BrideGroomsandBrideName:weds
        }
        axios.post("http://localhost:5000/Moi/newfunction",data)
       
        .then((result) => {
         if(result){
              navigate("/Createfunction")
            
         }
        })
        .catch((error) => { 
        alert(error)
        });
 
       
    }

   return (    
    <div class="container2">
    
    <div class="container">
    <div class="background-color1">
    <h1 class="text-center mb-4 text0">FUNCTION</h1>
    <div class="row justify-content-center">
      <div class="col-md-4">
        <form>
          <div class="form-group form1">
            <label for="username" class="in0 mb-2">Bride and BrideGrooms Name:</label>
            <input type="text" class="form-control in1" id="username" placeholder="Type Name" onChange={(e)=>{setweds(e.target.value)}} value={weds} ></input>
          </div>
          <div class="text-center mt-3">
            <button type="submit" class="btn btn-primary create1" onClick={(e)=>functionSubmit(e)}>Create</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  </div>
  </div>
    )
}

export default Function;
