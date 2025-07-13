'use client'
import { useEffect, useRef } from 'react'
import {
    Box,
    Container,
    Typography,
    Grid,
    Chip,
    useMediaQuery,
    useTheme,
} from '@mui/material'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Experience {
    id: string
    company: string
    role: string
    date: string
    description: string
    tech: string[]
    logo?: string
}

const experiences: Experience[] = [
    {
        id: 'nagy',
        company: 'Nagy Ventures',
        role: 'Full Stack Developer Apprentice',
        date: 'Feb 2025 - May 2025',
        description:
            'Engineered a prompt generation API to dynamically merge user logos with holiday data for AI-driven image creation. Designed responsive frontend flows and animations using ReactJS and react-spring. Integrated backend APIs with Hugging Face models. Collaborated in a fast-paced startup to optimize both UI and backend performance.',
        tech: ['ReactJS', 'React-Spring', 'Node.js', 'Hugging Face'],
        logo: '/logos/nagy.png',
    },
    {
        id: 'njit',
        company: 'New Jersey Institute of Technology',
        role: 'Graduate Teaching Assistant',
        date: 'Sep 2024 - May 2025',
        description:
            'Graded assignments and assisted 70+ graduate students in CS434 and CS632. Strengthened expertise in relational and NoSQL databases including PL/SQL with Oracle and MongoDB.',
        tech: ['PL/SQL', 'Oracle', 'MongoDB'],
        logo: '/logos/njit.png',
    },
    {
        id: 'visai',
        company: 'VisAI Labs',
        role: 'Full Stack Developer',
        date: 'Jan 2023 - Jul 2023',
        description:
            'Developed a Wi-Fi setup module on Raspberry Pi using ReactJS and wpa-supplicant. Migrated legacy frontend to TypeScript, reducing bugs by 35%. Integrated EAP/PEAP protocols for network security. Resolved 50+ SonarQube issues and documented Raspberry Pi workflows for onboarding.',
        tech: ['ReactJS', 'TypeScript', 'SonarQube', 'Raspberry Pi'],
        logo: '/logos/visai.png',
    },
    {
        id: 'tequip',
        company: 'Tequip Software Solutions',
        role: 'Android App Developer Intern',
        date: 'Apr 2022 - Jul 2022',
        description:
            'Built a real-time crypto tracking app for 2000+ coins on Android. Released a wallpaper app using Pexels API with responsive UI, boosting user engagement and retention.',
        tech: ['Android', 'Java', 'Pexels API'],
        logo: '/logos/tequip.png',
    },
]

interface EducationEntry {
    institution: string
    degree: string
    major: string
    year: string
    achievements?: string[]
}

const educationEntries: EducationEntry[] = [
    {
        institution: 'New Jersey Institute of Technology',
        degree: 'Master of Science',
        major: 'Computer Science',
        year: '2023 - 2025',
        achievements: ['GPA: 3.65', 'Member of Coding Club'],
    },
    {
        institution: 'St. Joseph’s College of Engineering',
        degree: 'Bachelor of Engineering',
        major: 'Computer Science and Engineering',
        year: '2019 - 2023',
        achievements: ['GPA: 8.86 / 10', 'Science Olympiad Winner'],
    },
]

export default function ExperienceSection() {
    const theme = useTheme()
    const isSm = useMediaQuery(theme.breakpoints.down('md'))
    const revealRefs = useRef<HTMLDivElement[]>([])
    revealRefs.current = []

    const educationRef = useRef<HTMLDivElement | null>(null)

    const addToRefs = (el: HTMLDivElement | null) => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el)
        }
    }

    // Experience card styles and component helpers
    const experienceCardStyles = (isLeft: boolean) => ({
        backgroundColor: '#2a2a2a',
        p: 3,
        borderRadius: 3,
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        color: '#e0e0e0',
        textAlign: 'left',
        ml: 'auto',
        mr: 'auto',
        width: '100%',
        maxWidth: { xs: '90%', sm: '90%', md: '600px' },
        transition: 'transform 0.3s ease',
        '&:hover': {
            transform: 'translateY(-5px)',
        },
    })

    const ExperienceCard = ({ exp }: { exp: Experience }) => (
        <>
            <Typography
                variant="h6"
                sx={{
                    fontWeight: 600,
                    fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem' },
                    color: '#fff',
                }}
            >
                {exp.role}
            </Typography>
            <Typography
                variant="subtitle2"
                sx={{
                    color: '#bbbbbb',
                    mb: 1,
                    fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' },
                }}
            >
                {exp.company}
            </Typography>
            <Typography
                variant="subtitle2"
                sx={{
                    color: '#999999',
                    mb: 1,
                    fontStyle: 'italic',
                    fontSize: { xs: '0.85rem', sm: '0.87rem', md: '0.9rem' },
                }}
            >
                {exp.date}
            </Typography>
            <Typography
                variant="body2"
                sx={{
                    color: '#cccccc',
                    mb: 2,
                    lineHeight: 1.5,
                    fontSize: { xs: '0.9rem', sm: '0.9rem', md: '0.9rem' },
                }}
            >
                {exp.description}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {exp.tech.map((t) => (
                    <Chip
                        key={t}
                        label={t}
                        size="small"
                        sx={{ backgroundColor: '#444', color: '#fff' }}
                    />
                ))}
            </Box>
        </>
    )

    useEffect(() => {
        // Experience cards animation
        revealRefs.current.forEach((el, i) => {
            ScrollTrigger.create({
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
                animation: gsap.fromTo(
                    el,
                    { opacity: 0, x: isSm ? 0 : i % 2 ? 100 : -100 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.6,
                        ease: 'power2.out',
                    }
                ),
            })
        })

        // Education cards animation
        if (educationRef.current) {
            const eduCards = educationRef.current.querySelectorAll('.edu-card')
            eduCards.forEach((card, i) => {
                ScrollTrigger.create({
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                    animation: gsap.fromTo(
                        card,
                        { opacity: 0, y: 60 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.6,
                            ease: 'power2.out',
                            delay: i * 0.1,
                        }
                    ),
                })
            })

            // Animate Education header
            const eduHeader = educationRef.current.querySelector('h4')
            if (eduHeader) {
                gsap.fromTo(
                    eduHeader,
                    { opacity: 0, y: 60 },
                    {
                        opacity: 1,
                        y: 0,
                        scrollTrigger: {
                            trigger: eduHeader,
                            start: 'top 85%',
                        },
                        duration: 0.8,
                        ease: 'power3.out',
                    }
                )
            }
        }

        // Animate Experience header
        const expHeader = document.querySelector('#experience h4')
        if (expHeader) {
            gsap.fromTo(
                expHeader,
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    scrollTrigger: {
                        trigger: expHeader,
                        start: 'top 85%',
                    },
                    duration: 0.8,
                    ease: 'power3.out',
                }
            )
        }

        const handleResize = () => {
            ScrollTrigger.refresh()
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [isSm])

    return (
        <Box
            component="section"
            id="experience"
            sx={{
                py: { xs: 6, md: 8 },
                backgroundColor: '#232323',
                overflowX: 'hidden',
            }}
        >
            <Container
                maxWidth="lg"
                sx={{
                    position: 'relative',
                    pl: {
                        xs: '10px !important',
                        sm: '10px !important',
                        md: '24px !important',
                    },
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        color: '#fff',
                        textAlign: 'center',
                        mb: 4,
                        width: '100%',
                        display: 'inline-block',
                        pb: 1,
                    }}
                >
                    My Experience
                </Typography>

                <Box sx={{ position: 'relative' }}>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            left: {
                                xs: 'calc(10% - 1px)', // center aligned at sm and below
                                sm: 'calc(10% - 1px)', // maintain center for sm
                                md: 'calc(50% - 1px)', // maintain center for md
                            },
                            width: '2px',
                            backgroundColor: '#444',
                            zIndex: 1,
                        }}
                    />
                    {experiences.map((exp, i) => {
                        const isLeft = i % 2 === 0
                        const year = exp.date
                            .split('–')[0]
                            .trim()
                            .split(' ')
                            .pop()

                        return (
                            <Box
                                key={exp.id}
                                ref={addToRefs}
                                sx={{ overflowX: 'hidden', display: 'flex' }}
                            >
                                <Grid
                                    container
                                    sx={{
                                        mb: 6,
                                        display: 'flex',
                                        flexDirection: {
                                            xs: 'column',
                                            sm: 'column',
                                            md: 'row',
                                        },
                                        alignItems: 'center',
                                        position: 'relative',
                                    }}
                                >
                                    {/* Left side content */}
                                    <Grid
                                        item
                                        xs={12}
                                        md={5.5}
                                        sx={{
                                            order: {
                                                xs: isLeft ? 3 : 1,
                                                sm: isLeft ? 3 : 1,
                                                md: 1,
                                            },
                                            maxWidth: {
                                                xs: '90%',
                                                sm: '90%',
                                                md: '600px',
                                            },
                                            height: {
                                                xs: '100%',
                                                sm: '100%',
                                                md: 'auto',
                                            },
                                            display: {
                                                xs: 'flex',
                                                sm: 'flex',
                                                md: 'block',
                                            },
                                            alignItems: 'center',
                                            boxSizing: 'border-box',
                                        }}
                                    >
                                        {isLeft ? (
                                            <Box
                                                sx={experienceCardStyles(true)}
                                            >
                                                <ExperienceCard exp={exp} />
                                            </Box>
                                        ) : (
                                            <Typography
                                                variant="caption"
                                                sx={{
                                                    color: '#bbb',
                                                    fontSize: '0.75rem',
                                                    fontWeight: 500,
                                                    backgroundColor: '#232323',
                                                    borderRadius: 1,
                                                    mt: 0.5,
                                                    zIndex: 2,
                                                    display: 'flex',
                                                    justifyContent: 'flex-end',
                                                    alignItems: 'center',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                {year}
                                            </Typography>
                                        )}
                                    </Grid>

                                    {/* Timeline dot and year */}
                                    <Grid
                                        item
                                        xs={12}
                                        md={1}
                                        sx={{
                                            position: {
                                                xs: 'absolute',
                                                sm: 'absolute',
                                                md: 'relative',
                                            },
                                            order: { xs: 2, sm: 2, md: 2 },
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            flexDirection: 'row',
                                            height: '100%',
                                            left: {
                                                xs: 'calc(10% - 10px)', // center aligned at sm and below
                                                sm: 'calc(10% - 10px)', // maintain center for sm
                                                md: '0', // maintain center for md
                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                position: 'relative',
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: 20,
                                                    height: 20,
                                                    borderRadius: '50%',
                                                    backgroundColor: '#0092ff',
                                                    border: '4px solid #232323',
                                                    zIndex: 2,
                                                    mb: 1,
                                                    boxShadow:
                                                        '0 0 12px 2px rgba(0,146,255,0.5)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}
                                            />
                                        </Box>
                                    </Grid>

                                    {/* Right side content */}
                                    <Grid
                                        item
                                        xs={12}
                                        md={5.5}
                                        sx={{
                                            maxWidth: {
                                                xs: '90%',
                                                sm: '90%',
                                                md: '600px',
                                            },

                                            order: {
                                                xs: isLeft ? 1 : 3,
                                                sm: isLeft ? 1 : 3,
                                                md: 3,
                                            },
                                            height: {
                                                xs: '100%',
                                                sm: '100%',
                                                md: 'auto',
                                            },
                                            display: {
                                                xs: 'flex',
                                                sm: 'flex',
                                                md: 'block',
                                            },
                                            alignItems: 'center',
                                            boxSizing: 'border-box',
                                        }}
                                    >
                                        {!isLeft ? (
                                            <Box
                                                sx={experienceCardStyles(false)}
                                            >
                                                <ExperienceCard exp={exp} />
                                            </Box>
                                        ) : (
                                            <Typography
                                                variant="caption"
                                                sx={{
                                                    color: '#bbb',
                                                    fontSize: '0.75rem',
                                                    height: '100%',
                                                    display: 'flex',
                                                    justifyContent:
                                                        'flex-start',
                                                    alignItems: 'center',
                                                    fontWeight: 500,
                                                    backgroundColor: '#232323',
                                                    borderRadius: 1,
                                                    mt: 0.5,
                                                    zIndex: 2,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                {year}
                                            </Typography>
                                        )}
                                    </Grid>
                                </Grid>
                            </Box>
                        )
                    })}
                </Box>

                {/* Education Section */}
                <Box ref={educationRef} sx={{ mt: 10 }}>
                    <Typography
                        variant="h4"
                        sx={{
                            color: '#fff',
                            textAlign: 'center',
                            mb: 4,
                            display: 'block',
                            pb: 1,
                        }}
                    >
                        Education
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        {educationEntries.map((edu, i) => (
                            <Grid item xs={12} md={6} key={i}>
                                <Box
                                    className="edu-card"
                                    sx={{
                                        backgroundColor: '#292929',
                                        borderRadius: 3,
                                        p: { xs: 2, sm: 3 },
                                        boxShadow: 2,
                                        color: '#fff',
                                        width: '100%',
                                        maxWidth: '100%',
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 600,
                                            mb: 1,
                                            fontSize: {
                                                xs: '1rem',
                                                sm: '1.05rem',
                                                md: '1.1rem',
                                            },
                                        }}
                                    >
                                        {edu.degree}
                                    </Typography>
                                    <Typography
                                        variant="subtitle2"
                                        sx={{
                                            color: '#bbb',
                                            mb: 1,
                                            fontSize: {
                                                xs: '0.85rem',
                                                sm: '0.9rem',
                                                md: '0.95rem',
                                            },
                                        }}
                                    >
                                        {edu.major}
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{
                                            color: '#aaa',
                                            mb: 1,
                                            fontSize: {
                                                xs: '0.95rem',
                                                sm: '1rem',
                                                md: '1.05rem',
                                            },
                                        }}
                                    >
                                        {edu.institution}
                                    </Typography>
                                    <Typography
                                        variant="subtitle2"
                                        sx={{
                                            color: '#bbb',
                                            mb: 2,
                                            fontSize: {
                                                xs: '0.85rem',
                                                sm: '0.9rem',
                                                md: '0.95rem',
                                            },
                                        }}
                                    >
                                        {edu.year}
                                    </Typography>
                                    {edu.achievements && (
                                        <Box
                                            component="ul"
                                            sx={{ pl: 3, mb: 0 }}
                                        >
                                            {edu.achievements.map((ach, j) => (
                                                <li key={j}>
                                                    <Typography
                                                        variant="body2"
                                                        sx={{
                                                            color: '#ccc',
                                                            fontSize: {
                                                                xs: '0.9rem',
                                                                sm: '1rem',
                                                                md: '1.05rem',
                                                            },
                                                        }}
                                                    >
                                                        {ach}
                                                    </Typography>
                                                </li>
                                            ))}
                                        </Box>
                                    )}
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}
