import logo from "../img/logo.png"
import { useEffect, useState } from "react";
    import {
      MobileNav,
      Typography,
      Button,
      IconButton,
    } from "@material-tailwind/react";

export default function NavBar(){
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false),
      );

    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <a href="/favoriteMovies" className="flex items-center dark:text-white text-black">  
                 Favorite Movies
            </a>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <a href="/watchlist" className="flex items-center dark:text-white text-black">
            Watchlist
            </a>
          </Typography>
      
        </ul>
      );

      return (

          <nav className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 dark:bg-gray-900 dark:text-white bg-white">
            <div className="flex items-center justify-between dark:text-white text-black">

         <a href="http://localhost:3000/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={logo} class="h-8" alt="CinematePick Logo" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CinematePick</span>
         </a>
              <div className="flex items-center gap-4">
                <div className="mr-4 hidden lg:block">{navList}</div>
                <div className="flex items-center gap-x-1">
                  <a href="/logIn">
                  <Button
                    variant="text"
                    size="sm"
                    className="hidden lg:inline-block  dark:text-white text-black"
                  >
                    <span>Log In</span>
                  </Button>
                  </a>
                  <a href="/register">
                  <Button
                    variant="outlined"
                    size="sm"
                    className="hidden lg:inline-block dark:text-black text-white dark:bg-white bg-gray-900"
                  >
                    <span>Sign in</span>
                  </Button>
                  </a>
                </div>
                <IconButton
                  variant="text"
                  className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                  ripple={false}
                  onClick={() => setOpenNav(!openNav)}
                >
                  {openNav ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </IconButton>
              </div>
            </div>
            <MobileNav open={openNav}>
              {navList}
              <div className="flex items-center gap-x-1">
                <Button fullWidth variant="text" size="sm" className="dark:text-white text-black">
                  <span>Log In</span>
                </Button>
                <Button fullWidth variant="outliner" size="sm" className="dark:text-black text-white dark:bg-white bg-gray-900">
                  <span>Sign in</span>
                </Button>
              </div>
            </MobileNav>
          </nav>



      );
    }