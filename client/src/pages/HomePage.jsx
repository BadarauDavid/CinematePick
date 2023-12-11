import { Carousel, Card,
        CardHeader,
        CardBody,
        Typography,
        Button, 
        IconButton } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function HomePage (){
const [movies, setMovies] = useState(null);
const getMovies = async() =>{
        try {
                const response = await axios.get(
                  "http://localhost:8000/api/movies/getCarouselMovies"
                );
                const data = response.data;
                setMovies(data);
              } catch (err) {
                console.log(err);
              }
}
useEffect(()=>{
        getMovies();
},[])


return(

   

<div className=" grid grid-cols-1  mx-10 ">
        <Carousel className="rounded-none ">

           {movies && movies.map((movie)=>(
                 <Card className="w-full  flex-row bg-blue-gray-50 dark:text-white dark:bg-gray-800" key={movie.Title}>
                 <CardHeader
                   shadow={false}
                   floated={false}
                   className="m-0  shrink-0 rounded-r-none"
                 >
              <img
     key={movie.Title}
     src={movie.Poster}
     alt={`Movie Poster - ${movie.Title}`}
     className="h-auto w-auto object-cover "
   />

                 </CardHeader>

                 <CardBody key={movie.Title}>
                   <Typography variant="h6" color="gray" className="mb-4 uppercase dark:text-white">
                     {movie.Title + `(${movie.Year})`}
                   </Typography>
                   <Typography variant="h6" color="gray" className="mb-4 uppercase dark:text-white">
                     {movie.Genre}
                   </Typography>
                   <Typography variant="h4" color="blue-gray" className="mb-2 dark:text-white">
                     {movie.Ratings[0].Source +": " +movie.Ratings[0].Value }
                   </Typography>
                   <Typography color="gray" className="mb-8 font-normal dark:text-white">
                        {movie.Plot}
                   </Typography>
                   <Typography variant="h6" color="gray" className="mb-4 uppercase dark:text-white">
                     {`Director: ${movie.Director}`}
                   </Typography>
                   <Typography variant="h6" color="gray" className="mb-4 uppercase dark:text-white">
                     {`Writer: ${movie.Writer}`}
                   </Typography>
                   <Typography variant="h6" color="gray" className="mb-4 uppercase dark:text-white">
                     {`Stars: ${movie.Actors}`}
                   </Typography>
                   <a href="#" className="inline-block">
                     <Button variant="outlined" className="flex items-center gap-2 dark:text-black text-white dark:bg-white bg-gray-900">
                       Add to Fav
                     </Button>
                   </a>

                 </CardBody>

               </Card>


        ))}
      </Carousel>
 </div>

)
}