import gsap from 'gsap'
import { Box, Typography, Divider, Grid } from '@mui/material'

import Link from 'next/link'
import { useRouter } from 'next/router'

const styles = {
    mt: '1em',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    flexWrap: 'wrap',
    color: 'white',
}

function Footer() {
    const router = useRouter()

    return (
        <Box
            sx={{ backgroundColor: '#000', color: '#ccc', mt: 6, pt: 6, pb: 3 }}
        >
            <Divider sx={{ backgroundColor: '#444' }} />
            <Grid
                container
                spacing={4}
                sx={{
                    maxWidth: '100%',
                    width: '100%',
                    margin: '0 auto',
                    px: { xs: 3, md: 8 },
                    py: 6,
                }}
            >
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    sx={{
                        textAlign: { xs: 'center', sm: 'left' },
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: { xs: 'center', sm: 'flex-start' },
                    }}
                >
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                        About Me
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#aaa' }}>
                        I&apos;m Mohamed Shameer, a passionate Full Stack Developer
                        specializing in building elegant and performant web apps
                        with React, TypeScript, and modern tools.
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    sx={{
                        textAlign: { xs: 'center', sm: 'left' },
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: { xs: 'center', sm: 'flex-start' },
                    }}
                >
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                        Quick Links
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1,
                        }}
                    >
                        <Typography
                            className="FooterLink"
                            onClick={() => {
                                const section = document.getElementById('hero')
                                if (section) {
                                    section.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start',
                                    })
                                }
                            }}
                            sx={{ cursor: 'pointer' }}
                        >
                            Home
                        </Typography>
                        <Typography
                            className="FooterLink"
                            onClick={() => {
                                const section =
                                    document.getElementById(
                                        'hero-about-wrapper'
                                    )
                                if (section) {
                                    section.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start',
                                    })
                                }
                            }}
                            sx={{ cursor: 'pointer' }}
                        >
                            About
                        </Typography>
                        <Typography
                            className="FooterLink"
                            onClick={() => {
                                const section =
                                    document.getElementById('contact')
                                if (section) {
                                    section.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start',
                                    })
                                }
                            }}
                            sx={{ cursor: 'pointer' }}
                        >
                            Contact
                        </Typography>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={4}
                    sx={{
                        textAlign: { xs: 'center', sm: 'left' },
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: { xs: 'center', sm: 'flex-start' },
                    }}
                >
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                        Contact
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1,
                            alignItems: { xs: 'center', sm: 'flex-start' },
                        }}
                    >
                        <Typography
                            className="FooterLink"
                            sx={{ cursor: 'pointer' }}
                        >
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://github.com/Shameer24"
                                style={{margin : 0}}
                            ></a>
                            GitHub
                        </Typography>
                        <Typography variant="body2">
                            mohamedshameer2406@gmail.com
                        </Typography>
                        <Typography variant="body2">New York, NY</Typography>
                        <Typography variant="body2">
                            +1 (862)-231-1651
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Divider sx={{ backgroundColor: '#444', mt: 4 }} />
            <Typography
                align="center"
                sx={{ mt: 2, fontSize: '0.8em', color: '#777' }}
            >
                © {new Date().getFullYear()} Mohamed Shameer. All rights
                reserved.
            </Typography>
        </Box>
    )
}
export default Footer
