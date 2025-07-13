'use client'
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import gsap from 'gsap'
import { useRef, useEffect, useState } from 'react'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
import HeroSectionAnimation from '../../../gsap/HeroSectionAnimation'
import Image from 'next/image'
import pic from '../../../../Layout/assets/final.png'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

export const btnStyles = {
    padding: '.77em 1.5em',
    borderRadius: '3px',
}

const Hero = () => {
    const ref = useRef<HTMLDivElement | null>(null)
    const headingRef = useRef(null)
    const textRef = useRef(null)
    const q = gsap.utils.selector(ref)
    gsap.registerPlugin(ScrollToPlugin)
    useEffect(() => {
        HeroSectionAnimation(q)
    }, [])

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const mm = gsap.matchMedia()

        mm.add('(max-width: 899px)', () => {
            // For sm screens (below md)
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.hero-about-wrapper',
                    start: 'top top',
                    end: '+=100%',
                    scrub: true,
                    pin: '.sticky-layer',
                    anticipatePin: 1,
                },
            })

            tl.to(['.hero-intro', '.mainBox'], { opacity: 0, y: '-100vh' }, 0)
                .fromTo(
                    '.about-intro',
                    { opacity: 0 },
                    { opacity: 1, duration: 0.3, ease: 'power2.out' },
                    0
                )
                .fromTo(
                    '.about-intro h4',
                    { opacity: 0, y: 60 },
                    { opacity: 1, y: 0, ease: 'power2.out', duration: 0.5 },
                    0.1
                )
                .fromTo(
                    '.about-intro h5',
                    { opacity: 0, y: 60 },
                    { opacity: 1, y: 0, ease: 'power2.out', duration: 0.4 },
                    0.2
                )
                .fromTo(
                    '.about-intro p',
                    { opacity: 0, y: 60 },
                    { opacity: 1, y: 0, ease: 'power2.out', duration: 0.4 },
                    0.3
                )
        })

        mm.add('(min-width: 900px)', () => {
            // For md and above
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.hero-about-wrapper',
                    start: 'top top',
                    end: '+=100%',
                    scrub: true,
                    pin: '.sticky-layer',
                    anticipatePin: 1,
                },
            })

            tl.to('.hero-intro', { opacity: 0, y: '-100vh' }, 0)
                .fromTo(
                    '.about-intro',
                    { opacity: 0 },
                    { opacity: 1, duration: 0.3, ease: 'power2.out' },
                    0
                )
                .fromTo(
                    '.about-intro h4',
                    { opacity: 0, y: 60 },
                    { opacity: 1, y: 0, ease: 'power2.out', duration: 0.6 },
                    0.1
                )
                .fromTo(
                    '.about-intro h5',
                    { opacity: 0, y: 60 },
                    { opacity: 1, y: 0, ease: 'power2.out', duration: 0.6 },
                    0.2
                )
                .fromTo(
                    '.about-intro p',
                    { opacity: 0, y: 60 },
                    { opacity: 1, y: 0, ease: 'power2.out', duration: 0.6 },
                    0.3
                )
        })

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill())
            mm.kill()
        }
    }, [])
    const buttontheme = createTheme({ palette: { primary: { main: '#fff' } } })

    return (
        <Container id="hero" className="hero-section" maxWidth={false}>
            <Box
                className="hero-about-wrapper"
                sx={{
                    height: '200vh',
                    position: 'relative',
                }}
            >
                <div
                    id="hero-about-wrapper"
                    style={{ position: 'absolute', top: '100vh' }}
                />
                <Box
                    className="sticky-layer"
                    sx={{
                        position: 'sticky',
                        top: 0,
                        height: '100vh',
                        width: '100%',
                        overflow: 'hidden',
                        backgroundColor: '#232323',
                    }}
                >
                    <Box
                        className="mainBox"
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            width: {
                                xs: '100%',
                                sm: '100%',
                                md: '100%',
                                lg: '50%',
                            },
                            minHeight: {
                                xs: '50%',
                                sm: '55%',
                                md: '70%',
                                lg: '80%',
                            },
                            zIndex: 0,
                            mixBlendMode: 'luminosity',
                            pointerEvents: 'none',
                            transition: 'height 0.5s ease',
                        }}
                    >
                        <Image
                            layout="fill"
                            quality={100}
                            loading="eager"
                            objectFit="contain"
                            objectPosition="bottom right"
                            style={{
                                zIndex: 0,
                                filter: 'drop-shadow(0px 0px 0px rgba(0,0,0,0.9))',
                                height: '100%',
                                margin: '0px !important',
                            }}
                            className="img1"
                            src={pic}
                            alt="Shameer Profile"
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                height: '6vh',
                                background:
                                    'linear-gradient(to bottom, rgba(0,0,0,0) 0%, #232323 100%)',
                                zIndex: 1,
                            }}
                        />
                    </Box>
                    <Box
                        // ref={ref}
                        id="hero-intro"
                        className="hero-intro"
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            minHeight: '100vh',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            pl: { xs: '0.3em', sm: '2em', md: '3em' },
                            pt: { xs: '4em', sm: '0em' },
                            zIndex: 1,
                        }}
                    >
                        <Grid
                            container
                            sx={{
                                width: '100%',
                                height: '100vh',
                                justifyContent: 'space-between',
                                position: 'relative',
                                zIndex: 1,
                            }}
                        >
                            <Grid
                                item
                                xs={12}
                                sm={10}
                                md={8}
                                lg={7}
                                sx={{
                                    position: 'absolute',
                                    textAlign: 'left',
                                    left: { xs: '0em', sm: '0em', md: '2em' },
                                    top: {
                                        xs: 0,
                                        sm: '12%',
                                        md: '20%',
                                        lg: '25%',
                                    },
                                    zIndex: 1,
                                    pb: { xs: '2em', sm: 0 },
                                }}
                            >
                                <Box ref={ref}>
                                    <Box sx={{ width: '100%' }}>
                                        <Typography
                                            variant="h2"
                                            className="secondary t2 t25o0"
                                            sx={{
                                                textAlign: 'start',
                                                pt: '1em',
                                                fontSize: {
                                                    xs: '0.9em',
                                                    sm: '1em',
                                                },
                                                maxWidth: '570px',
                                                fontWeight: '400',
                                                transition:
                                                    'font-size 0.3s ease',
                                            }}
                                        >
                                            Hi, my name is
                                        </Typography>
                                        <Typography
                                            className="t1"
                                            variant="h1"
                                            sx={{
                                                fontSize: {
                                                    xs: '1.5em',
                                                    sm: '2.4em',
                                                    md: '3.4em',
                                                },
                                                textAlign: 'left',
                                                opacity: 0,
                                                pt: '0.5em',
                                                fontWeight: '600',
                                                transform: 'translateY(40px)',
                                                // transition: 'font-size 0.7s ease',
                                            }}
                                        >
                                            Mohamed Shameer
                                        </Typography>
                                        <Typography
                                            className="t1"
                                            variant="h1"
                                            sx={{
                                                fontSize: {
                                                    xs: '1.5em',
                                                    sm: '2.4em',
                                                    md: '2.7em',
                                                },
                                                textAlign: 'left',
                                                opacity: 0,
                                                pt: '0.5em',
                                                fontWeight: '500',
                                                transform: 'translateY(40px)',
                                                // transition: 'font-size 0.7s ease',
                                            }}
                                        >
                                            Full Stack Developer
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            className="secondary t2 t25o0"
                                            sx={{
                                                textAlign: 'left',
                                                pt: '1.5em',
                                                fontSize: {
                                                    xs: '0.8em',
                                                    sm: '1em',
                                                },
                                                maxWidth: '570px',
                                                fontWeight: '300',
                                                transition:
                                                    'font-size 0.7s ease',
                                                justifyContent: 'justify',
                                            }}
                                        >
                                            Call me Shameer. I enjoy creating
                                            full stack applications and
                                            web/mobile apps, ones that suit your
                                            desires and needs using latest
                                            technologies and cleanest design
                                            patterns.
                                        </Typography>
                                        <Stack
                                            spacing={2}
                                            direction="row"
                                            flexWrap="wrap"
                                            sx={{
                                                gap: '.8em',
                                                display: 'flex',
                                                justifyContent: {
                                                    xs: 'flex-start',
                                                    sm: 'flex-start',
                                                },
                                                alignItems: 'center',
                                                flexWrap: 'wrap',
                                                mt: '1.5em',
                                            }}
                                        >
                                            <Button
                                                className="b2"
                                                sx={{
                                                    ...btnStyles,
                                                    opacity: 0,
                                                    height: 'max-content',
                                                    padding: '1em 1.5em',
                                                    width: {
                                                        xs: 'auto',
                                                        sm: 'auto',
                                                    },
                                                    ':hover': {
                                                        color: '#0092ff',
                                                    },
                                                }}
                                                variant="text"
                                                onClick={() =>
                                                    gsap.to(window, {
                                                        duration: 2,
                                                        scrollTo: `#ProjectSection`,
                                                    })
                                                }
                                            >
                                                <Typography fontSize="14px">
                                                    View Projects
                                                </Typography>
                                            </Button>
                                            <a
                                                href={`https://drive.google.com/file/d/1cirgDDtkF_7YOBdxX5rKzDt4cXK1wsja/view?usp=sharing`}
                                                rel="noreferrer"
                                                target="_blank"
                                            >
                                                <Button
                                                    className="b2"
                                                    sx={{
                                                        ...btnStyles,
                                                        opacity: 0,
                                                        height: 'max-content',
                                                        padding: '1em 1.5em',
                                                        width: {
                                                            xs: 'auto',
                                                            sm: 'auto',
                                                        },
                                                        ':hover': {
                                                            color: '#0092ff',
                                                        },
                                                    }}
                                                    variant="text"
                                                >
                                                    <Typography fontSize="14px">
                                                        View Resume
                                                    </Typography>
                                                </Button>
                                            </a>
                                        </Stack>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box
                        id="about"
                        className="about-intro"
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            minHeight: '100vh',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            opacity: 0,
                            zIndex: 1,
                            px: { xs: '2em', sm: '3em' },
                        }}
                    >
                        <Box
                            sx={{
                                width: { xs: '100%', sm: '100%', md: '60%' },
                            }}
                        >
                            <Typography
                                variant="h4"
                                fontWeight="700"
                                sx={{
                                    color: '#fff',
                                    mb: '1.2em',
                                    textAlign: {
                                        xs: 'center',
                                        sm: 'center',
                                        md: 'left',
                                    },
                                    fontSize: { xs: '1.6rem', sm: '2rem' },
                                    display: 'inline-block',
                                    pb: '.2em',
                                    width: 'inherit',
                                }}
                            >
                                About Me
                            </Typography>
                            <Typography
                                ref={headingRef}
                                variant="h5"
                                fontWeight="600"
                                sx={{
                                    color: '#fff',
                                    textAlign: 'left',
                                    mb: '1.5em',
                                    fontSize: { xs: '1.1rem', sm: '1.4rem' },
                                    lineHeight: 1.6,
                                }}
                            >
                                Hi, I&apos;m Mohamed Shameer — a Builder,
                                Explorer & Developer
                            </Typography>
                            <Typography
                                ref={textRef}
                                variant="body1"
                                component="p"
                                sx={{
                                    color: '#fff',
                                    textAlign: 'justify',
                                    fontSize: { xs: '0.95rem', sm: '1.1rem' },
                                    lineHeight: 1.8,
                                }}
                            >
                                I&apos;m a passionate full-stack developer with
                                a keen eye for clean UI, seamless UX, and
                                scalable backend architecture. My journey into
                                tech was born from curiosity and shaped by
                                formal education in Computer Science, where I
                                honed my skills in building end-to-end digital
                                experiences.
                                <br />
                                <br />
                                Whether it&apos;s collaborating with research
                                teams or agile product squads, I thrive on
                                transforming complex problems into elegant
                                software solutions. I enjoy mentoring peers,
                                exploring new tech stacks, and turning code into
                                impactful products. When I&apos;m not coding,
                                I&apos;m probably brainstorming my next big idea
                                or optimizing an old one.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default Hero
