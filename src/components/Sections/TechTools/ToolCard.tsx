import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { IToolCard } from '../../../Types/Types'
import { centeredStyles } from '../Perks/Perks'
import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ToolCard = ({ title, src, className = 'toolCard', index }: IToolCard) => {
    useEffect(() => {
        gsap.to(`.${className}${index}`, {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            scrollTrigger: {
                trigger: `.${className}${index}`,
                start: 'top 70%',
            },
        })
    }, [])

    return (
        <Box
            className={className + index}
            sx={{
                display: 'inline-flex',
                width: 'fit-content',
                flexGrow :1,
                justifyContent: 'center',
                alignItems: 'center',
                gap: 1,
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                padding: '0.5em 1em',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                backdropFilter: 'blur(6px)',
                transition: 'all 0.3s ease',
                opacity: 0,
                '&:hover': {
                    transform: 'translateY(-2px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 22,
                    height: 22,
                }}
            >
                <img alt="Project Image" className="img1" src={`${src}`} />
            </Box>
            <Typography
                variant="body2"
                sx={{
                    fontWeight: 400,
                    fontSize: '0.9em',
                    color: '#fff',
                }}
            >
                {title}
            </Typography>
        </Box>
    )
}

export default ToolCard
