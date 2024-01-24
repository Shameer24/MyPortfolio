import { Box,  } from "@mui/material";
import  Head  from "next/head";
import { useState } from "react";
import Navbar from "../src/components/Navbar/Navbar";
import { ILayout } from "../src/Types/Types";
import CustomDrawer from "../src/components/Drawer/Drawer";



const Layout = ({navbarSx, title ,children ,desc } : ILayout) => {
  const [isOpen,setOpen] = useState(false)
    const toggleDrawer = (state?:boolean) => {
      setOpen(state !== undefined ? state : !isOpen)
    }

  return (

    <>
    
    <Head >
        <title>{title || "Mohamed Shameer's Personal Portfolio | Full stack Developer"}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="https://res.cloudinary.com/dwcu3wcol/image/upload/v1657099811/log_nkmcys.jpg" />   
   
   <meta httpEquiv="content-language" content="en"/>
    <meta charSet="UTF-8"/>
    <meta name="robots" content="index, follow"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="keywords" content="Personal Portfolio" />
    <meta name="author" content="Mohamed Shameer" />
    <meta name="publisher" content="publisher"/>
    <meta name="copyright" content="copyright"/>
    <meta name="page-topic" content="Full stack development"/>
    <meta name="audience" content="Everyone"/>
  
    </Head> 
    <Navbar toggleDrawer={toggleDrawer} navbarSx={navbarSx}/>
    <CustomDrawer isOpen={isOpen} toggleDrawer={toggleDrawer}/>
    <Box 
     className="site-content">
      {children}
    </Box>    
  </>
  )


}
 
export default Layout; 