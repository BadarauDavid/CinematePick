import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
  } from "@material-tailwind/react";
import { useState } from "react";
import  axios  from "axios";
import { useNavigate } from "react-router-dom";
export default function RegisterPage(){

    const[name,setName] = useState('');
    const[password,setPassword] = useState('');
    const navigate = useNavigate();

async function submit(e){
    e.preventDefault();

    try{
        await axios.post("http://localhost:8000/api/register",{
            "name": name,
            "password":password
        })
        .then(res=>{
            if(res.data==="exist"){
               alert("User alredy exist")
            }else if(res.data==="notExist"){
                navigate("/logIn");
            }
        })
        .catch(e=>{
            alert("wrong details");
            console.log(e);
        })
}catch(err){
        console.log(err);
      
}
}
    return (
            <div className="flex justify-center mt-20" >
        
            <Card className="w-96 ">
              <CardHeader
                variant="gradient"
                color="gray"
                className="mb-4 grid h-28 place-items-center"
              >
                <Typography variant="h3" color="white">
                  Register
                </Typography>
              </CardHeader>
              <CardBody className="flex flex-col gap-4">
                <Input label="UserName" size="lg" onChange={(e)=>{setName(e.target.value)}}/>
                <Input label="Password" size="lg" onChange={(e)=>{setPassword(e.target.value)}}/>
                <div className="-ml-2.5">
                  <Checkbox label="I accept the Terms and Conditions "/>
                </div>
              </CardBody>
              <CardFooter className="pt-0">
                <Button variant="gradient" fullWidth onClick={(e)=>submit(e)}>
                  Register
                </Button>
                <br/>
                <a href="/terms-and-conditions" className="mx-16">Check Terms and Conditions</a>
                <Typography variant="small" className="mt-6 flex justify-center">
                  You have an account?
                  <Typography
                    as="a"
                    href="/logIn"
                    variant="small"
                    color="blue-gray"
                    className="ml-1 font-bold"
                  >
                    Log in
                  </Typography>
                </Typography>
              </CardFooter>
            </Card>
            </div>
    )
}