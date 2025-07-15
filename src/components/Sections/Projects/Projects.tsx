import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
    Tooltip,
    Typography,
} from '@mui/material'
import { centeredStyles } from '../Perks/Perks'
import ProjectCard from './ProjectCard'
import { useEffect } from 'react'
import MainTitleAnimation from '../../../gsap/MainTitleAnimation'
import gsap from 'gsap'
import { IProjects } from '../../../Types/Types'

const Projects = ({ projectsArray }: IProjects[] | any) => {
    useEffect(() => {
        MainTitleAnimation('.title3', '.title4')
        if (!projectsArray) return
        setTimeout(() => {
            for (let i = 0; i < projectsArray.length; i++) {
                gsap.to(`.p${i}`, {
                    duration: 0.8,
                    transform: 'translateX(0%)',
                    ease: 'easeIn',
                    scrollTrigger: {
                        trigger: `.p${i}`,
                        start: 'top 60%',
                    },
                })
            }
        }, 100)
    }, [])

    const workProjects = projectsArray?.filter((project: any) => project.category === 'Work');
    const academicProjects = projectsArray?.filter((project: any) => project.category === 'Academic');

    return (
        <Box
            sx={{
                overflow: 'hidden',
            }}
        >
            <Container
                id="ProjectSection"
                maxWidth={false}
                sx={{
                    width: '100%',
                    margin: '0 auto',
                    py: '2em',
                    px: {
                        xs: '1.5em',
                        sm: '2em',
                        md: '2em',
                    },
                }}
            >
                <Grid container>
                    <Grid item sx={centeredStyles}>
                        <Typography
                            className="title3 t25o0"
                            variant="h1"
                            sx={{
                                fontSize: {
                                    xs: '1.8em',
                                    sm: '2.2em',
                                    md: '2.6em',
                                },
                                fontWeight: 600,
                                letterSpacing: '-0.5px',
                                lineHeight: 1.3,
                                color: '#1e293b',
                            }}
                        >
                            My Projects
                        </Typography>
                        <Typography
                            className="title4 t25o0"
                            variant="body1"
                            component="p"
                            sx={{
                                fontSize: {
                                    xs: '0.95em',
                                    sm: '1.05em',
                                    md: '1.15em',
                                    lg: '1.5em',
                                },
                                fontWeight: 400,
                                color: '#64748b',
                                mt: 1,
                                lineHeight: 1.5,
                            }}
                        >
                            Some of my work
                        </Typography>
                    </Grid>
                    <Box
                        sx={{
                            alignItems: 'center',
                            textAlign: 'center',
                            margin: '0 auto',
                            width: '100%',
                            
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: {
                                sm: 'center',
                                md: 'space-between',
                            },
                            flexWrap: 'wrap',
                            gap: '1em',
                            mt: '2em',
                        }}
                    >
                        {workProjects ? (
                            workProjects.map((project: any, index: number) => {
                                return (
                                    <ProjectCard
                                        className={`p${index}`}
                                        isReversed={
                                            index % 2 === 0 ? true : false
                                        }
                                        repoUrl={project.repoUrl}
                                        title={project.title}
                                        img={project.img?.url}
                                        description={project.description}
                                        key={project.title}
                                        organization={project.organization}
                                        techStack={project.techStack}
                                    />
                                )
                            })
                        ) : (
                            <Typography
                                variant="h1"
                                fontSize="1em"
                                fontWeight="500"
                                color="red"
                            >
                                There was an error loading the projects.
                            </Typography>
                        )}
                    </Box>
                    <Grid item sx={centeredStyles}>    
                        <Typography
                            className="title4 t25o0"
                            variant="body1"
                            component="p"
                            sx={{
                                fontSize: {
                                    xs: '0.95em',
                                    sm: '1.05em',
                                    md: '1.15em',
                                    lg: '1.5em',
                                },
                                fontWeight: 400,
                                color: '#64748b',
                                mt: 4,
                                mb: 2,
                                lineHeight: 1.5,
                                wordSpacing : '0.1em',
                            }}
                        >
                            Some of my Academic Work
                        </Typography>
                    </Grid>
                    <Box
                        sx={{
                            alignItems: 'center',
                            textAlign: 'center',
                            margin: '0 auto',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: {
                                sm: 'center',
                                md: 'space-between',
                            },
                            flexWrap: 'wrap',
                            gap: '1em',
                            mt: '2em',
                        }}
                    >
                        {academicProjects ? (
                            academicProjects.map((project: any, index: number) => {
                                return (
                                    <ProjectCard
                                        className={`p${index}`}
                                        isReversed={
                                            index % 2 === 0 ? true : false
                                        }
                                        repoUrl={project.repoUrl}
                                        title={project.title}
                                        img={project.img?.url}
                                        description={project.description}
                                        key={project.title}
                                        organization={project.organization}
                                        techStack={project.techStack}
                                    />
                                )
                            })
                        ) : (
                            <Typography
                                variant="h1"
                                fontSize="1em"
                                fontWeight="500"
                                color="red"
                            >
                                There was an error loading the projects.
                            </Typography>
                        )}
                    </Box>
                    <Box
                        sx={{
                            margin: '0 auto',
                            mt: '3em',
                        }}
                    >
                        <Tooltip title="More Projects Soon">
                            <Button
                                className="loadMore"
                                variant="contained"
                                sx={{
                                    opacity: 0,
                                    padding: '.5em 3.5em',
                                    background: 'transparent',
                                    border: '1px solid',
                                    color: '#0092ff',
                                    ':hover': {
                                        border: '1px solid transparent',
                                    },
                                }}
                            >
                                Load More
                            </Button>
                        </Tooltip>
                    </Box>
                </Grid>
            </Container>
        </Box>
    )
}

export default Projects
