import { Box, IconButton, Paper } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { ICustomDrawer } from '../../Types/Types'
import DrawerItem from './DrawerItem'
import { useEffect, useRef, useState } from 'react'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
import gsap from 'gsap'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import BuildIcon from '@mui/icons-material/Build'
import WorkIcon from '@mui/icons-material/WorkHistory'
import ProjectIcon from '@mui/icons-material/Source'
import ContactMailIcon from '@mui/icons-material/ContactMail'

export const Links = [
    { text: 'Home', id: 'hero', Icon: HomeIcon },
    { text: 'About', id: 'hero-about-wrapper', Icon: InfoIcon },
    { text: 'Skills', id: 'skills', Icon: BuildIcon },
    { text: 'Experience', id: 'experience', Icon: WorkIcon },
    { text: 'Projects', id: 'ProjectSection', Icon: ProjectIcon },
    { text: 'Contact', id: 'contact', Icon: ContactMailIcon },
]

const CustomDrawer = ({ isOpen, toggleDrawer }: ICustomDrawer) => {
    gsap.registerPlugin(ScrollToPlugin)
    const dropdownRef = useRef(null)
    const [animate, setAnimate] = useState(false)
    const [start, setStart] = useState(false)

    useEffect(() => {
        if (isOpen) {
            setAnimate(true)
            setStart(true)
        } else {
            setAnimate(false)
            setTimeout(() => {
                setStart(false)
            }, 900) // Match the duration of the transition
        }
    }, [isOpen])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !(dropdownRef.current as any).contains(event.target)
            ) {
                toggleDrawer(false)
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        } else {
            document.removeEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isOpen, toggleDrawer])

    return isOpen || start ? (
        <Paper
            ref={dropdownRef}
            elevation={4}
            sx={{
                position: 'fixed',
                top: '80px',
                right: { xs: '20px', sm: '40px' },
                maxHeight: 'fit-content',
                width: '180px',
                backgroundColor: '#1e1e1e',
                borderRadius: '8px',
                overflow: 'hidden',
                zIndex: 100,
                transform: animate ? 'translateY(0)' : 'translateY(-380px)',
                opacity: animate ? 1 : 0,
                transition: 'all 0.9s ease-in-out',
            }}
        >
            <Box sx={{ px: '1em', pb: '1em' }}>
                {Links.map((link) => (
                    <DrawerItem
                        key={link.text}
                        toggleDrawer={toggleDrawer}
                        id={link.id}
                        Icon={link.Icon}
                        text={link.text}
                    />
                ))}
            </Box>
        </Paper>
    ) : null
}

export default CustomDrawer
