import { Box } from "@mui/material";
import type { NextPage } from "next";
import Experience from "../src/components/Sections/TechTools/TechTools";
import Hero from "../src/components/Sections/Hero/Hero";
import Perks from "../src/components/Sections/Perks/Perks";
import Projects from "../src/components/Sections/Projects/Projects";
import CTA from "../src/components/Sections/CallToAction/CTA";
import { useEffect, useRef, useState } from "react";
import About from "../src/components/Sections/About/About";
import Layout from "../Layout/Layout";
import NET from "vanta/dist/vanta.net.min";
import Image from "next/image";

// const {NET} = require("vanta/dist/vanta.net.min");
import * as THREE from "three";
import Footer from "../src/components/Footer/Footer";

const Home: NextPage = ({ projectsArray, iconsArray }: any) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xa1ff,
          backgroundColor: 0x0,
          maxDistance: 22.0,
          spacing: 19.0,
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
      {/* <Image
        src="/nextjs-github-pages/vercel.svg"
        alt="Vercel Logo"
        className="logo"
        width={100}
        height={24}
        priority
      /> */}
      {vantaEffect ? (
        <>
          <Box
            sx={{
              margin: "0 auto",
              color: "white",
            }}
          >
            <Hero />
            <Experience iconsArray={iconsArray} />
            <Projects projectsArray={projectsArray} />
            <About />
            <CTA />
            <Footer />
          </Box>
        </>
      ) : (
        <>hello</>
      )}
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
                {
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
                  iconsCollection {
                    items {
                      svg{
                        url
                      }
                      title
                      type
                    }
                  }
                }
                  `,
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
