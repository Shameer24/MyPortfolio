import { ListItem, ListItemButton, ListItemIcon } from '@mui/material'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/router'
import { IDrawerItem } from '../../Types/Types'
import gsap from 'gsap'

const DrawerItem = ({ text, Icon, id, toggleDrawer }: IDrawerItem) => {
    const router = useRouter()
    const isScrollTo = text === 'Projects'

    const handleClick = () => {
        toggleDrawer(false)
        const section =
            id === 'about'
                ? document.getElementById('hero-about-wrapper')
                : document.getElementById(id)

        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        } else {
            const fallback = document.querySelector(`.${id}`)
            if (fallback) {
                fallback.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                })
            }
        }
    }

    return (
        <ListItem
            onClick={handleClick}
            disablePadding
            sx={{
                my: '.2em',
                display: 'inline-block',
            }}
        >
            <ListItemButton
                sx={{
                    py: '.65em',
                    backgroundColor: 'transparent',
                    transition: 'all 0.3s ease',
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: 'transparent',
                        color: '#90caf9',
                        transform: 'translateX(6px)',
                    },
                }}
            >
                <ListItemIcon
                    sx={{
                        minWidth: '40px',
                        transition: 'color 0.3s ease',
                        color: 'inherit',
                    }}
                >
                    <Icon />
                </ListItemIcon>
                <Typography
                    variant="h1"
                    fontSize=".95em"
                    fontWeight="500"
                    sx={{
                        color: 'inherit',
                        transition: 'color 0.3s ease, transform 0.3s ease',
                    }}
                >
                    {text}
                </Typography>
            </ListItemButton>
        </ListItem>
    )
}

export default DrawerItem
