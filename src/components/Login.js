import React,{useState} from 'react'

function Login() {
    let[user,setUser]=useState({name:"",password:""});
    let[showerror,setShowError]=useState("");
    function formSubmission(e){
        e.preventDefault();
        if(user.name==="" || user.password==="")
        {
            setShowError("Both username and password are required.")
        }else{
            setShowError("");
        }
    }
  return (
    <div>
        <form onSubmit={formSubmission}>
           Username:<input type="text"onChange={(e)=>setUser({...user,name:e.target.value})}/>
         <br/>  
            Password:<input type="password"onChange={(e)=>setUser({...user,password:e.target.value})}/>
           <br/>
           {
            showerror&&(
                <p id="errorMessage">{showerror}</p>
            )
        }
            <button type="submit">Login</button>
           
        </form>
       
    </div>
  )
}

export default Login