import { Router } from "express";

const user =Router()
const userdata = new Map()



user.post("/signup",(req,res) => {
try{
     const {UserName,Email,Password} = req.body
console.log(FirstName);

try{
  
  
  const result=userdata.get(UserName)

  if(result){

 res.status(400).json({msg:'Username already exist'})
  }

  else{
    userdata.set(UserName,{UserName,Email,Password})
    res.status(201).json({msg:"Successfully created"})
  }
   }
   catch{
    res.status(201).json({msg:"something wrong"})
   }
}
catch{
    res.status(500).send("error")

}
})
export{user}