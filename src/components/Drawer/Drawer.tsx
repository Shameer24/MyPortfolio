import { Box, Divider, Drawer, IconButton } from '@mui/material';
import {ICustomDrawer} from '../../Types/Types'
import CloseIcon from '@mui/icons-material/Close';
import {Links} from '../Navbar/Navbar';
import DrawerItem from './DrawerItem';
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import gsap from 'gsap'


const CustomDrawer = ({isOpen, toggleDrawer} : ICustomDrawer) => {
    gsap.registerPlugin(ScrollToPlugin);
    return (

        <Drawer anchor={'right'} open={isOpen} onClose={() => toggleDrawer(false)}>
            <Box
                sx={{
                px: '.5em',
                zIndex: '555555',
                display: 'flex',
                width: '300px',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: '0 auto'
            }}>

                <IconButton
                    onClick={() => toggleDrawer(false)}
                    size="large"
                    sx={{
                    padding: 0,
                }}
                    edge="start"
                    aria-label="menu">
                    <CloseIcon
                        sx={{
                        margin: '.6em .5em'
                    }}/>
                </IconButton>
            </Box>
            <Divider sx={{
                borderColor: '#565656'
            }}/>

            <Box
                sx={{
                pt: '1em',
                height: '100%'
            }}>
                {Links.map(link => {
                    return <DrawerItem
                        toggleDrawer={toggleDrawer}
                        key={link.text}
                        url={link.url}
                        Icon={link.Icon}
                        text={link.text}/>
                })}

            </Box>
        </Drawer>

    )
}

export default CustomDrawer