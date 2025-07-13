import { Box, IconButton, useMediaQuery } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import { useTheme } from '@mui/material/styles'
import { INavbar } from '../../Types/Types'
import Link from 'next/link'
import { lazy, useEffect, useState } from 'react'

const Navbar = ({ isOpen, toggleDrawer }: INavbar) => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    const [animateNav, setAnimateNav] = useState(false)
    const [activeSection, setActiveSection] = useState<string>('hero-intro')

    useEffect(() => {
        setAnimateNav(true)
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            const sectionIds = [
                'hero-intro',
                'about',
                'experience',
                'skills',
                'ProjectSection',
                'contact',
            ]
            let current: string = 'hero-intro'

            for (const id of sectionIds) {
                const section = document.getElementById(id)
                if (section) {
                    const rect = section.getBoundingClientRect()
                    const mid = window.innerHeight / 2
                    if (rect.top <= mid && rect.bottom > mid) {
                        current = id
                        break
                    }
                }
            }

            setActiveSection(current)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <Box
            component="nav"
            sx={{
                py: { xs: '0.5em', sm: '1.5em' },
                paddingBottom: { xs: '0.5em', sm: '0.5em' },
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1100,
                backgroundColor: '#232323',
                transform: animateNav ? 'translateY(0)' : 'translateY(-100%)',
                transition: 'transform 0.9s ease',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <Box
                    sx={{
                        pl: { xs: '1em', sm: '3em' },
                    }}
                >
                    <Box
                        sx={{
                            display: 'inline-block',
                            '&:hover': {
                                color: '#90caf9',
                            },
                            color: 'white',
                        }}
                    >
                        <Link
                            href="/"
                            style={{
                                textDecoration: 'none',
                                color: 'inherit',
                                alignItems: 'flex-start',
                            }}
                        >
                            Mohamed Shameer
                        </Link>
                    </Box>
                </Box>

                {isMobile ? (
                    !isOpen ? (
                        <IconButton
                            onClick={() => toggleDrawer(true)}
                            sx={{
                                backgroundColor: 'transparent',
                                transition: 'all 0.3s ease',
                                color: '#fff',
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    color: '#90caf9',
                                    transform: 'scale(1.1)',
                                },
                                mr: { xs: '20px', sm: '40px' },
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <IconButton
                            onClick={() => toggleDrawer(false)}
                            sx={{
                                backgroundColor: 'transparent',
                                transition: 'all 0.3s ease',
                                color: '#fff',
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    color: '#90caf9',
                                    transform: 'scale(1.1)',
                                },
                                mr: { xs: '20px', sm: '40px' },
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    )
                ) : (
                    <Box sx={{ display: 'flex', gap: '3em', pr: '3em' }}>
                        {[
                            {
                                label: 'Home',
                                id: 'hero',
                                section: 'hero-intro',
                            },
                            {
                                label: 'About',
                                id: 'hero-about-wrapper',
                                section: 'about',
                            },
                            {
                                label: 'Experience',
                                id: 'experience',
                                section: 'experience',
                            },
                            {
                                label: 'Skills',
                                id: 'skills',
                                section: 'skills',
                            },
                            {
                                label: 'Projects',
                                id: 'ProjectSection',
                                section: 'ProjectSection',
                            },
                            {
                                label: 'Contact',
                                id: 'contact',
                                section: 'contact',
                            },
                        ].map(({ label, id, section }) => (
                            <Box
                                key={label}
                                onClick={() => {
                                    const section =
                                        id === 'about'
                                            ? document.getElementById(
                                                  'hero-about-wrapper'
                                              )
                                            : document.getElementById(id)

                                    if (section) {
                                        section.scrollIntoView({
                                            behavior: 'smooth',
                                            block: 'start',
                                        })
                                    } else {
                                        const fallback = document.querySelector(
                                            `.${id}`
                                        )
                                        if (fallback) {
                                            fallback.scrollIntoView({
                                                behavior: 'smooth',
                                                block: 'start',
                                            })
                                        }
                                    }
                                }}
                                sx={{
                                    color:
                                        activeSection === section
                                            ? '#90caf9'
                                            : 'white',
                                    cursor: 'pointer',
                                    fontWeight: 500,
                                    transform:
                                        activeSection === section
                                            ? 'translateY(-2px)'
                                            : 'none',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        color: '#90caf9',
                                        transform: 'translateY(-2px)',
                                    },
                                }}
                            >
                                {label}
                            </Box>
                        ))}
                        {/* <Link
                            href="/contact"
                            style={{
                                color: 'white',
                                textDecoration: 'none',
                                fontWeight: 500,
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.color = '#90caf9')
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.color = 'white')
                            }
                        >
                            Contact
                        </Link> */}
                    </Box>
                )}
            </Box>
        </Box>
    )
}

export default Navbar
