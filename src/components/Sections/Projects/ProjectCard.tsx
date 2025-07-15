import { Box, Typography, Button } from '@mui/material'
import { IProjectCard } from '../../../Types/Types'

const ProjectCard = ({
    isReversed,
    img,
    className,
    repoUrl,
    title,
    description,
    organization,
    techStack,
}: IProjectCard) => {
    return (
        <Box
            className={className}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                position: 'relative',
                minWidth: { xs: '100%', sm: '75%', md: '47%' },
                minHeight: { xs: '300px', sm: '350px', md: '430px' },
                overflow: 'hidden',
                borderRadius: '12px',
                margin: 'auto',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                transform: isReversed
                    ? 'translateX(-200%)'
                    : 'translateX(200%)',
                '&:hover .overlay-content': {
                    transform: 'translateY(0%)',
                },
                '&:hover .project-image': {
                    transform: 'scale(1.1)',
                    filter: 'blur(2px) brightness(30%)',
                },
            }}
        >
            <Box
                component="img"
                src={img}
                alt="Project"
                className="project-image"
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'fill',
                    transform: 'scale(1)',
                    transition: 'transform 0.7s ease, filter 0.7s ease',
                }}
            />
            <Box
                className="overlay-content"
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    borderRadius: '12px',
                    color: 'white',
                    padding: {
                        xs: '1em',
                        sm: '1em',
                        md: '2em',
                    },
                    boxShadow: 'inset 0 0 20px rgba(0,0,0,0.3)',
                    transform: 'translateY(100%)',
                    transition: 'transform 0.7s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    gap: { sm: '0.5em', md: '0.75em' },
                    pointerEvents: 'auto',
                    overflow: 'scroll',
                }}
            >
                <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, textAlign: 'start' }}
                >
                    {title}
                </Typography>
                <Typography
                    variant="subtitle2"
                    sx={{
                        color: '#ddd',
                        fontStyle: 'italic',
                        textAlign: 'start',
                    }}
                >
                    {organization}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        fontWeight: 400,
                        textAlign: 'start',
                        lineHeight: 1.5,
                        fontSize: {
                            xs: '0.7em',
                            sm: '0.8em',
                            md: '0.9em',
                        },
                        textWrap: { sm: 'wrap' },
                        whiteSpace: 'pre-wrap',
                        overflow: 'scroll',
                        color: '#f0f0f0',
                    }}
                >
                    {description}
                </Typography>
                {techStack && techStack.length > 0 && (
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '0.5em',
                            mt: 1,
                        }}
                    >
                        {techStack.map((tech, idx) => (
                            <Box
                                key={idx}
                                sx={{
                                    fontSize: '0.65rem',
                                    padding: '0.4em 0.7em',
                                    backgroundColor: 'rgba(255,255,255,0.15)',
                                    borderRadius: '16px',
                                    color: '#fff',
                                    textTransform: 'capitalize',
                                    letterSpacing: '0.4px',
                                    flexShrink: 0,
                                }}
                            >
                                {tech}
                            </Box>
                        ))}
                    </Box>
                )}
                <Box
                    sx={{
                        minWidth: '100%',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        mt: 2,
                    }}
                >
                    <a
                        href={repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: 'none' }}
                    >
                        <Button
                            variant="outlined"
                            sx={{
                                color: '#00bfff',
                                borderColor: '#00bfff',
                                fontSize: '0.8rem',
                                padding: '0.5em 1.2em',
                                borderRadius: '8px',
                                fontWeight: 500,
                                ':hover': {
                                    backgroundColor: '#00bfff',
                                    color: 'white',
                                },
                            }}
                        >
                            Visit Project
                        </Button>
                    </a>
                </Box>
            </Box>
        </Box>
    )
}

export default ProjectCard
