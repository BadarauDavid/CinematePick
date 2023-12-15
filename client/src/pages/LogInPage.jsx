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
import { useSignIn } from "react-auth-kit";
import { AxiosError } from "axios";

 function LogInPage(){
    const[name,setName] = useState('');
    const[password,setPassword] = useState('');
    const navigate = useNavigate();
    const signIn = useSignIn();
    const [error, setError] = useState("");

async function submit(e){
    e.preventDefault();

    setError("");

    try {
      const response = await axios.post(
        `http://localhost:8000/api/login`,
        {
          "name": name,
          "password":password
      }
      );
      signIn({
        token: response.data.acsessToken,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: { name: name },
      });
      navigate("/");
    } catch (err) {
      if (err instanceof AxiosError) setError(err.response?.data.message);
      else if (err instanceof Error) setError(err.message);
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

export default LogInPage;