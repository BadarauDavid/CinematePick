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

export default function RegisterPage(){
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
                <Input label="UserName" size="lg" />
                <Input label="Email" size="lg" />
                <Input label="Password" size="lg" />
                <div className="-ml-2.5">
                  <Checkbox label="I accept the Terms and Conditions "/>
                </div>
              </CardBody>
              <CardFooter className="pt-0">
                <Button variant="gradient" fullWidth>
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