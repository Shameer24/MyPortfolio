import { Box } from "@mui/material";
import type { NextPage } from "next";
import Experience from "../src/components/Sections/TechTools/TechTools";
import Hero from "../src/components/Sections/Hero/Hero";
import Perks from "../src/components/Sections/Perks/Perks";
import Projects from "../src/components/Sections/Projects/Projects";
import CTA from "../src/components/Sections/CallToAction/CTA";
import { useEffect, useRef, useState } from "react";
import CursorAnimation from "../src/gsap/CursorAnimation";
import About from "../src/components/Sections/About/About";
import Layout from "../Layout/Layout";
import GLOBE from "vanta/dist/vanta.globe.min";
import * as THREE from "three";

const Home: NextPage = ({ projectsArray, iconsArray }: any) => {
  const ball = useRef();

  useEffect(() => {
    if (ball && ball.current) {
      CursorAnimation(ball.current);
    }
  }, []);

  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xf0ff,
          color2: 0x8e5f7,
          backgroundColor: 0x0,
        })
      );
    }
    return () => {
      if (vantaEffect) setVantaEffect(0);
    };
  }, [vantaEffect]);

  return (
    <Layout desc={`Shameer Portfolio`} title="Shameeer's Portfolio">
      <div ref={vantaRef} id="vanta"></div>
      <Box
        sx={{
          margin: "0 auto",
          color: "white",
        }}
      >
        <Hero />
        <Perks />
        <Experience iconsArray={iconsArray} />
        <Projects projectsArray={projectsArray} />
        <About />
        <CTA />

        <Box
          ref={ball}
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
          className="ball"
        ></Box>
      </Box>
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  function removeEmpty(obj: any) {
    return Object.fromEntries(
      Object.entries(obj).filter(([_, v]) => v != null && v != false)
    );
  }
  try {
    // first, grab our Contentful keys from the .env file
    const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
    const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
    // then, send a request to Contentful (using the same URL from GraphiQL)
    const res = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${space}`,
      {
        method: "POST", // GraphQL *always* uses POST requests!
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${accessToken}`, // add our access token header
        },
        // send the query we wrote in GraphiQL as a string
        body: JSON.stringify({
          // all requests start with "query: ", so we'll stringify that for convenience
          query: `
                query {
                  projectCollection {
                    items {
                      title
                      repoUrl
                      siteUrl
                      description
                      img {
                        url
                      }
                    }
                  }
                }`,
        }),
      }
    );
    // grab the data from our response
    const { data } = await res.json();
    console.log(data);
    // const data :any = {}
    if (!data || data?.length < 1) {
      throw "Error fetching data";
    }
    let iconsArray = [];
    for (let i = 0; i < data?.iconsCollection?.items.length; i++) {
      let clearedIcon = removeEmpty(data?.iconsCollection.items[i]);
      iconsArray.push(clearedIcon);
    }
    return {
      props: {
        projectsArray: data?.projectCollection.items,
        iconsArray,
      },
    };
  } catch (err) {
    console.log("err: ", err);
    return {
      props: {
        data: null,
      },
    };
  }
}
