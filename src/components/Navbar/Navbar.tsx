import { AppBar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { useContext } from "react";
import HomeIcon from "@mui/icons-material/Home";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { INavbar } from "../../Types/Types";
import { ColorModeContext } from "../../../pages/_app";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import { useRouter } from "next/router";
import Link from "next/link";

export const Links = [
  {
    text: "Home",
    Icon: HomeIcon,
    url: "/",
  },
  {
    text: "Contact",
    Icon: ConnectWithoutContactIcon,
    url: "/contact",
  },
  {
    text: "Projects",
    Icon: AssignmentTurnedInIcon,
    url: "/",
  },
];

const Navbar = ({ toggleDrawer, navbarSx }: INavbar) => {
  return (
    <AppBar
      sx={{
        background: "black",
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        height: "60px",
        py: ".45em",
        zIndex: "555",
        backdropFilter: "blur(1px)",
        position: "fixed",
      }}
      position="static"
    >
      <Container
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          color: "white",
        }}
      >
        <Container>Logo</Container>

        <Container className="px-0 flex justify-end">
          <a className="mr-10" href="#hero">
            Home
          </a>
          <a className="mr-10" href="#about">
            About
          </a>
          <a className="mr-10" href="#skills">
            Skills
          </a>
          <a className="mr-10" href="#ProjectSection">
            Projects
          </a>
          <Link href="/contact">Contact</Link>
        </Container>
      </Container>
    </AppBar>
  );
};
export default Navbar;
