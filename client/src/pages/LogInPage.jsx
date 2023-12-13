import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Button,
  } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function LogInPage(){
    const[name,setName] = useState('');
    const[password,setPassword] = useState('');
    const navigate = useNavigate();

async function submit(e){
    e.preventDefault();

    try{
            await axios.post("http://localhost:8000/login",{
                "name": name,
                "password":password
            })
            .then(res=>{
                if(res.data==="exist"){
                    navigate("/",{state:{id:name}});
                }else if(res.data==="notExist"){
                    alert("User have note sign up");
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
          Sign In
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Input label="Name" size="lg" onChange={(e)=>{setName(e.target.value)}}/>
        <Input label="Password" size="lg"  onChange={(e)=>{setPassword(e.target.value)}}/>
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth onClick={(e)=>submit(e)}>
          Sign In
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
          Don&apos;t have an account?
          <Typography
            as="a"
            href="/register"
            variant="small"
            color="blue-gray"
            className="ml-1 font-bold"
          >
            Sign up
          </Typography>
        </Typography>
      </CardFooter>
    </Card>
    </div>
  );
}