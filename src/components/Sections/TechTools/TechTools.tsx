import { Container, Typography, Grid, Divider, Box } from '@mui/material'
import { useContext, useEffect } from 'react'
import { ColorModeContext } from '../../../../pages/_app'
import MainTitleAnimation from '../../../gsap/MainTitleAnimation'
import { centeredStyles } from '../Perks/Perks'
import ToolCard from './ToolCard'
import gsap from 'gsap'
import { red } from '@mui/material/colors'
import { ToolContainer } from '../../../Types/Types'

const TechTools = ({ iconsArray }: any) => {
    let ProgLang =
        iconsArray && iconsArray.filter((icon: any) => icon.type === 'prog')
    let FrontendTools = iconsArray?.filter(
        (icon: any) => icon.type === 'frontend'
    )
    let database = iconsArray?.filter(
        (icon: any) =>
            icon.type === 'database' ||
            icon.type === 'cloud' ||
            icon.type === 'vct'
    )
    let tools = iconsArray?.filter(
        (icon: any) => icon.type === 'tools' || icon.type === 'ide'
    )

    useEffect(() => {
        MainTitleAnimation('.title1', '.title2')
    }, [])

    const sections = [
        { label: 'Languages & Core Technologies', data: ProgLang },
        { label: 'Frameworks & Libraries', data: FrontendTools },
        { label: 'Databases & Cloud + DevOps', data: database },
        { label: 'Tools, IDEs & ML Platforms', data: tools },
    ]

    const ToolsContainer = ({ className = 'secondTitle', label, data, index = 0 }: ToolContainer) => {
        useEffect(() => {
            gsap.to(`.${className}${index}`, {
                delay: '.4',
                duration: '0.9',
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: `.${className}${index}`,
                    start: 'top 70%',
                },
            })
        }, [])

        return (
            <Grid
                className={className + index}
                item
                xs={12}
                sm={6}
                key={label}
                sx={{
                    ...centeredStyles,
                    opacity: 0,
                    transform: 'translateY(25px)',
                    px: '1em !important',
                    py: '1em',
                }}
            >
                <Box sx={{ textAlign: 'center', mb: 2 }}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: {
                                xs: '1em',
                                sm: '1.1em',
                            },
                            fontWeight: 600,
                            mb: 1,
                            color: '#fff',
                        }}
                    >
                        {label}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.7em',
                        justifyContent: 'center',
                    }}
                >
                    {data &&
                        data.map((item: any) => {
                            return (
                                <ToolCard
                                    className="toolCard"
                                    index={index}
                                    src={item.svg.url}
                                    title={item.title}
                                    key={item.title}
                                />
                            )
                        })}
                </Box>
            </Grid>
        )
    }

    return (
        <>
            {' '}
            <Container
                id="skills"
                maxWidth={false}
                sx={{
                    margin: '0 auto',
                    width: '100%',
                    py: '4em',
                    px: {
                        xs: '1.5em',
                        sm: '2.5em',
                        md: '4em',
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
                                    xs: '1.8em',
                                    sm: '2.2em',
                                    md: '2.5em',
                                },
                            }}
                            fontWeight="600"
                        >
                            Skills
                        </Typography>
                        <Typography
                            className="title2 t25o0"
                            variant="h2"
                            sx={{
                                opacity: 0,
                                color: '#cbd5e1',
                                fontSize: {
                                    xs: '0.95em',
                                    sm: '1.1em',
                                    md: '1.2em',
                                },
                            }}
                        >
                            Technologies I’ve used and explored across the
                            stack.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={4}
                    justifyContent="center"
                    sx={{ mt: 4, width: '100%', ml: '0 !important' }}
                >
                    {sections &&
                        sections.map(({ label, data }, index: number) => {
                            return (
                                <ToolsContainer
                                    className='secondTitle'
                                    label={label}
                                    data={data}
                                    index={index}
                                    key ={label}
                                />
                            )
                        })}
                </Grid>
            </Container>{' '}
            {/* <Divider sx={{ borderColor: 'rgba(255,255,255, 0.4)' }} /> */}
        </>
    )
}

export default TechTools
