import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import ScrollTriggerPlugin from 'gsap/dist/ScrollToPlugin'
import { useEffect, useRef } from 'react'
import { Box, Container } from '@mui/material'
import Typography from '@mui/material/Typography'

const About = () => {
    // gsap.registerPlugin(ScrollTriggerPlugin)
    const sectionRef = useRef(null)
    const headingRef = useRef(null)
    const textRef = useRef(null)

    return (
        <Container  maxWidth="md" sx={{ position: 'relative' }}>
            
        </Container>
    )
}

export default About
