import { Container, Typography, Grid, Divider } from "@mui/material";
import { useContext, useEffect } from "react";
import { ColorModeContext } from "../../../../pages/_app";
import MainTitleAnimation from "../../../gsap/MainTitleAnimation";
import { centeredStyles } from "../Perks/Perks";
import ToolCard from "./ToolCard";
import gsap from "gsap";
import { red } from "@mui/material/colors";

const TechTools = ({ iconsArray }: any) => {
  let FrontendTools =
    iconsArray && iconsArray.filter((icon: any) => icon.type == "frontend");
  let ProgLang =
    iconsArray && iconsArray.filter((icon: any) => icon.type == "prog");
  let Ide = iconsArray && iconsArray.filter((icon: any) => icon.type == "ide");
  let version_control =
    iconsArray && iconsArray.filter((icon: any) => icon.type == "vct");
  let database =
    iconsArray && iconsArray.filter((icon: any) => icon.type == "database");
  let cloud =
    iconsArray && iconsArray.filter((icon: any) => icon.type == "cloud");
  let tools =
    iconsArray && iconsArray.filter((icon: any) => icon.type == "tools");

  const colorMode = useContext(ColorModeContext);
  // turn off "filter" mode when the theme is set to dark mode
  const isfilterMode = (item: any) =>
    colorMode?.mode === "light" ? false : item?.filter;

  useEffect(() => {
    MainTitleAnimation(".title1", ".title2");
    gsap.to(".secondTitle", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: ".secondTitle",
        start: "top 70%",
      },
    });
  }, []);

  return (
    <>
      {" "}
      <Container
        maxWidth="lg"
        sx={{
            backgroundColor : "rgba(0,0,0,0.4)",
          margin: "0 auto",
          py: {
            xs: "6em",
          },
        }}
      >
        <Grid container>
          <Grid item sx={centeredStyles}>
            <Typography
              className=" title1 t25o0"
              variant="h1"
              sx={{
                
                fontSize: {
                  xs: "2.2em",
                  sm: "2.5em",
                  md: "3em",
                },
              }}
              fontWeight="600"
            >
              Tools Of The Present And Future
            </Typography>
            <Typography
              variant="h2"
              className="secondary title2 t25o0"
              sx={{
                pt: "2.5em",
                maxWidth: "570px",
                fontSize: {
                  xs: "1.3em",
                  sm: "1.5em",
                },
              }}
            >
              Frontend technologies I{`'`}m familiar with
            </Typography>
          </Grid>
          <Grid
            sx={{
              ...centeredStyles,
              flexDirection: "row",
              justifyContent: {
                xs: "center",
              },
              mt: "1.0em",
              flexWrap: "wrap",
            }}
            xs={12}
            item
          >
            {FrontendTools &&
              FrontendTools.map((item: any) => {
                return (
                  <ToolCard
                    className="toolCard1"
                    filter={isfilterMode(item)}
                    src={item.svg.url}
                    title={item.title}
                    key={item.title}
                  />
                );
              })}
          </Grid>

          {/* PROGRAMMING LANGUAGES */}
          <Grid item sx={centeredStyles}>
            <Typography
              variant="h2"
              className="secondary title2 t25o0"
              sx={{
                pt: "2.5em",
                maxWidth: "650px",
                fontSize: {
                    xs: "1.3em",
                    sm: "1.5em",
                  },
              }}
            >
              Programmming Languages I{`'`}m familiar with
            </Typography>
          </Grid>
          <Grid
            sx={{
              ...centeredStyles,
              flexDirection: "row",
              justifyContent: {
                xs: "center",
              },
              mt: "1.5em",
              flexWrap: "wrap",
            }}
            xs={12}
            item
          >
            {ProgLang &&
              ProgLang.map((item: any) => {
                return (
                  <ToolCard
                    className="toolCard1"
                    filter={isfilterMode(item)}
                    src={item.svg.url}
                    title={item.title}
                    key={item.title}
                  />
                );
              })}
          </Grid>

          {/* DATABASES */}
          <Grid item sx={centeredStyles}>
            <Typography
              variant="h2"
              className="secondary title2 t25o0"
              sx={{
                pt: "2.5em",
                maxWidth: "650px",
                fontSize: {
                    xs: "1.3em",
                    sm: "1.5em",
                  },
              }}
            >
              Databases I{`'`}m familiar with
            </Typography>
          </Grid>
          <Grid
            sx={{
              ...centeredStyles,
              flexDirection: "row",
              justifyContent: {
                xs: "center",
              },
              mt: "1.5em",
              flexWrap: "wrap",
            }}
            xs={12}
            item
          >
            {database &&
              database.map((item: any) => {
                return (
                  <ToolCard
                    className="toolCard1"
                    filter={isfilterMode(item)}
                    src={item.svg.url}
                    title={item.title}
                    key={item.title}
                  />
                );
              })}
          </Grid>

          {/* VERSION CONTROL TOOLS */}
          <Grid item sx={centeredStyles}>
            <Typography
              variant="h2"
              className="secondary title2 t25o0"
              sx={{
                pt: "2.5em",
                maxWidth: "650px",
                fontSize: {
                    xs: "1.3em",
                    sm: "1.5em",
                  },
              }}
            >
              Version Control Tools I{`'`}m familiar with
            </Typography>
          </Grid>
          <Grid
            sx={{
              ...centeredStyles,
              flexDirection: "row",
              justifyContent: {
                xs: "center",
              },
              mt: "1.5em",
              flexWrap: "wrap",
            }}
            xs={12}
            item
          >
            {version_control &&
              version_control.map((item: any) => {
                return (
                  <ToolCard
                    className="toolCard1"
                    filter={isfilterMode(item)}
                    src={item.svg.url}
                    title={item.title}
                    key={item.title}
                  />
                );
              })}
          </Grid>

          {/* IDE's */}
          <Grid item sx={centeredStyles}>
            <Typography
              variant="h2"
              className="secondary title2 t25o0"
              sx={{
                pt: "2.5em",
                maxWidth: "650px",
                fontSize: {
                    xs: "1.3em",
                    sm: "1.5em",
                  },
              }}
            >
              IDE{`'`}s I{`'`}m familiar with
            </Typography>
          </Grid>
          <Grid
            sx={{
              ...centeredStyles,
              flexDirection: "row",
              justifyContent: {
                xs: "center",
              },
              mt: "1.5em",
              flexWrap: "wrap",
            }}
            xs={12}
            item
          >
            {Ide &&
              Ide.map((item: any) => {
                return (
                  <ToolCard
                    className="toolCard1"
                    filter={isfilterMode(item)}
                    src={item.svg.url}
                    title={item.title}
                    key={item.title}
                  />
                );
              })}
          </Grid>

          {/* Tools and debugging */}
          <Grid item sx={centeredStyles}>
            <Typography
              variant="h2"
              className="secondary title2 t25o0"
              sx={{
                pt: "2.5em",
                maxWidth: "650px",
                fontSize: {
                    xs: "1.3em",
                    sm: "1.5em",
                  },
              }}
            >
              Tools I{`'`}m familiar with
            </Typography>
          </Grid>
          <Grid
            sx={{
              ...centeredStyles,
              flexDirection: "row",
              justifyContent: {
                xs: "center",
              },
              mt: "1.5em",
              flexWrap: "wrap",
            }}
            xs={12}
            item
          >
            {tools &&
              tools.map((item: any) => {
                return (
                  <ToolCard
                    className="toolCard1"
                    filter={isfilterMode(item)}
                    src={item.svg.url}
                    title={item.title}
                    key={item.title}
                  />
                );
              })}
          </Grid>
          {/* Cloud */}
          <Grid item sx={centeredStyles}>
            <Typography
              variant="h2"
              className="secondary title2 t25o0"
              sx={{
                pt: "2.5em",
                maxWidth: "650px",
                fontSize: {
                    xs: "1.3em",
                    sm: "1.5em",
                  },
              }}
            >
              Cloud Technologies I{`'`}m familiar with
            </Typography>
          </Grid>
          <Grid
            sx={{
              ...centeredStyles,
              flexDirection: "row",
              justifyContent: {
                xs: "center",
              },
              mt: "1.5em",
              flexWrap: "wrap",
            }}
            xs={12}
            item
          >
            {cloud &&
              cloud.map((item: any) => {
                return (
                  <ToolCard
                    className="toolCard1"
                    filter={isfilterMode(item)}
                    src={item.svg.url}
                    title={item.title}
                    key={item.title}
                  />
                );
              })}
          </Grid>

          {/* {OtherTools ? 
            <>
           
            <Grid item sx={centeredStyles}>

                <Typography
                    variant='h2'
                    className='secondary secondTitle t25o0'
                    sx={{
                    pt: '3.5em',
                    opacity: 0,
                    fontSize: {
                        xs: '.8em',
                        sm: '1em'
                    }
                }}>
                    Other technologies
                </Typography>

            </Grid>
            <Grid
                sx={{
                ...centeredStyles,
                flexDirection: 'row',
                justifyContent: {
                    xs: "center"
                },
                mt: '3em',
                flexWrap: 'wrap'
            }}
                xs={12}
                item>

                {OtherTools.map((tool : any) => {
                    return <ToolCard
                        className='toolCard2'
                        filter={isfilterMode(tool)}
                        svg={tool.svg.url}
                        title={tool.title}
                        key={tool.title}/>
                })
           

            }

            </Grid>
            
           </>
            : 
            <Typography sx={{margin:'0 auto',fontSize:'1em', fontWeight:'500', color:'red'}} variant='h1' >There was an error loading the items.</Typography>
            } */}
        </Grid>
      </Container>{" "}
      <Divider />{" "}
    </>
  );
};

export default TechTools;
