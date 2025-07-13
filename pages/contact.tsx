import {
    Box,
    Typography,
    TextField,
    Button,
    useTheme,
    useMediaQuery,
} from '@mui/material'
import { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { gsap } from 'gsap'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'

const ContactSection = () => {
    gsap.registerPlugin(ScrollToPlugin)
    const theme = useTheme()
    const form = useRef<HTMLFormElement>(null)
    const sectionRef = useRef<HTMLDivElement>(null)
    const headerRef = useRef<HTMLDivElement>(null)
    const contactInfoRef = useRef<HTMLDivElement>(null)
    const formRef = useRef<HTMLDivElement>(null)
    const socialRef = useRef<HTMLDivElement>(null)
    const contactItemsRef = useRef<HTMLDivElement[]>([])

    const [status, setStatus] = useState<number>(0)
    const [email, setEmail] = useState('')
    const [hoveredSocial, setHoveredSocial] = useState<string | null>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Set initial states
            gsap.set(
                [
                    headerRef.current,
                    contactInfoRef.current,
                    formRef.current,
                    socialRef.current,
                ],
                {
                    opacity: 0,
                    y: 50,
                }
            )

            gsap.set(contactItemsRef.current, {
                opacity: 0,
                x: -30,
            })

            // Main timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse',
                },
            })

            // Header animation
            tl.to(headerRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power2.out',
            })

            // Contact info and form appear together
            tl.to(
                [contactInfoRef.current, formRef.current],
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    stagger: 0.2,
                },
                '-=0.3'
            )

            // Contact items stagger animation
            tl.to(
                contactItemsRef.current,
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.6,
                    ease: 'power2.out',
                    stagger: 0.15,
                },
                '-=0.4'
            )

            // Social links
            tl.to(
                socialRef.current,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power2.out',
                },
                '-=0.2'
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    const addToContactItemsRef = (el: HTMLDivElement) => {
        if (el && !contactItemsRef.current.includes(el)) {
            contactItemsRef.current.push(el)
        }
    }

    const sendEmail = async (e: any) => {
        e.preventDefault()
        if (!form.current) return
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (!email.match(regexEmail)) {
            setStatus(400)
            return
        }
        const res = await emailjs.sendForm(
            'service_n1z2l7c',
            'template_pi2z1id',
            form.current,
            't3XbZNYBGPUiLOWYk'
        )
        setStatus(res?.status ?? 400)
    }

    const socialLinks = [
        {
            title: "LinkedIn",
            href: "https://www.linkedin.com/in/mohamed-shameer-eshak/",
            color: "#0e76a8",
            svg: "https://www.svgrepo.com/show/138936/linkedin.svg",
        },
        {
            title: "Github",
            href: "https://github.com/Shameer24",
            color: "#171515",
            svg: "https://www.svgrepo.com/show/343674/github.svg",
        },
    ]

    return (
        <Box
            ref={sectionRef}
            id="contact"
            sx={{
                py: { xs: 8, md: 12 },
                px: { xs: 3, sm: 6, md: 10 },
                color: '#fff',
            }}
        >
            <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
                <Box
                    ref={headerRef}
                    sx={{ textAlign: 'center', mb: { xs: 8, md: 10 } }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '2.2em', md: '3.2em' },
                            fontWeight: 700,
                            mb: 3,
                            background:
                                'linear-gradient(135deg, #fff 0%, #aaa 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            lineHeight: 1.2,
                        }}
                    >
                        Lets connect and create something great
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            mt: 2,
                            color: '#bbb',
                            maxWidth: 600,
                            mx: 'auto',
                            fontSize: { xs: 16, md: 18 },
                            lineHeight: 1.6,
                        }}
                    >
                        Whether you have a project, a question, or just want to
                        say hi — Im here and ready to chat.
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: {
                            xs: 'column',
                            sm: 'column',
                            md: 'row',
                        },
                        gap: { xs: 6, md: 8 },
                        alignItems: 'stretch',
                        justifyContent: 'space-between',
                        // flexWrap: 'wrap',
                    }}
                >
                    {/* Contact Info */}
                    <Box
                        ref={contactInfoRef}
                        sx={{
                            flex: '1 1 300px',
                            maxWidth: { xs: '100%', md: '40%' },
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            alignItems: { sm: 'center', md: 'flex-start' },
                            order: { xs: 2, sm: 2, md: 1 },
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: {
                                    xs: 'column',
                                    sm: 'row',
                                    md: 'column',
                                },
                                gap: 4,
                                justifyContent: 'space-between',
                                width: '100%',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 2,
                                    flex: 1,
                                }}
                            >
                                {[
                                    {
                                        title: 'Get in touch',
                                        subtitle: 'Email Address',
                                        value: 'mohamedshameer2406@gmail.com',
                                        icon: '📧',
                                    },
                                    {
                                        title: 'Location',
                                        subtitle: 'Currently living in',
                                        value: 'Harrison, NJ',
                                        icon: '📍',
                                    },
                                    {
                                        title: 'Contact Directly',
                                        subtitle: 'Phone Number',
                                        value: '+1 (862)-231-1651',
                                        icon: '📞',
                                    },
                                ].map((item, index) => (
                                    <Box
                                        key={index}
                                        ref={addToContactItemsRef}
                                        sx={{
                                            transition: 'all 0.3s ease',
                                            pointerEvents: 'auto',
                                            
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 1.5,
                                                mb: 1,
                                            }}
                                        >
                                            <Typography
                                                className="contact-icon"
                                                sx={{
                                                    fontSize: '1em',
                                                    transition:
                                                        'transform 0.3s ease',
                                                }}
                                            >
                                                {item.icon}
                                            </Typography>
                                            <Typography
                                                className="contact-title"
                                                fontWeight={600}
                                                sx={{
                                                    fontSize: 18,
                                                    transition:
                                                        'color 0.3s ease',
                                                }}
                                            >
                                                {item.title}
                                            </Typography>
                                        </Box>
                                        <Typography
                                            fontSize={14}
                                            color="#888"
                                            sx={{ mb: 0.5, ml: 4 }}
                                        >
                                            {item.subtitle}
                                        </Typography>
                                        <Typography
                                            fontSize={16}
                                            sx={{
                                                fontWeight: 500,
                                                color: '#fff',
                                                ml: 4,
                                            }}
                                        >
                                            {item.value}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                            <Box ref={socialRef} sx={{ flex: 1 }}>
                                <Typography
                                    variant="h6"
                                    fontWeight={600}
                                    sx={{
                                        mb: 3,
                                        fontSize: 18,
                                        color: '#fff',
                                        width: '100%',
                                        textAlign: {
                                            xs: 'center',
                                            sm: 'center',
                                            md: 'left',
                                        },
                                    }}
                                >
                                    You can also find me on
                                </Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: 1,
                                        justifyContent: {
                                            xs: 'center',
                                            sm: 'center',
                                            md: 'flex-start',
                                        },
                                        alignItems: 'center',
                                    }}
                                >
                                    {socialLinks.map((icon) => (
                                        <Box
                                            key={icon.href}
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: 48,
                                                height: 48,
                                                borderRadius: 2,
                                                background: '#bbb',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    boxShadow:
                                                        '0 6px 16px rgba(0, 146, 255, 0.5)',
                                                    transform: 'scale(1.1)',
                                                },
                                            }}
                                        >
                                            <a
                                                href={icon.href}
                                                target="_blank"
                                                rel="noreferrer"
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    margin: 0,
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                            >
                                                <img
                                                    src={icon.svg}
                                                    alt={icon.title}
                                                    width={40}
                                                    height={40}
                                                    style={{
                                                        transition:
                                                            'all 0.3s ease',
                                                    }}
                                                />
                                            </a>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    {/* Contact Form */}
                    <Box
                        ref={formRef}
                        component="form"
                        onSubmit={sendEmail}
                        sx={{
                            flex: '1 1 500px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 3,
                            p: { xs: 3, md: 4 },
                            background:
                                'linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%)',
                            borderRadius: 2,
                            border: '1px solid #333',
                            order: { xs: 1, sm: 1, md: 2 },
                            '& .MuiTextField-root': {
                                '& .MuiOutlinedInput-root': {
                                    backgroundColor: '#1a1a1a',
                                    borderRadius: 2,
                                    '& fieldset': {
                                        borderColor: '#444',
                                        transition: 'all 0.3s ease',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#0092ff',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#0092ff',
                                        boxShadow:
                                            '0 0 0 2px rgba(0, 146, 255, 0.1)',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    color: '#bbb',
                                    '&.Mui-focused': {
                                        color: '#0092ff',
                                    },
                                },
                                '& .MuiOutlinedInput-input': {
                                    color: '#fff',
                                },
                            },
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                mb: 2,
                                fontWeight: 600,
                                textAlign: 'center',
                                color: '#fff',
                            }}
                        >
                            Send me a message
                        </Typography>

                        <Box
                            sx={{
                                display: 'flex',
                                gap: 2,
                                flexDirection: { xs: 'column', sm: 'row' },
                            }}
                        >
                            <TextField
                                name="user_name"
                                label="Name *"
                                variant="outlined"
                                fullWidth
                                required
                            />
                            <TextField
                                name="user_phone"
                                label="Phone"
                                variant="outlined"
                                fullWidth
                            />
                        </Box>

                        <TextField
                            name="user_email"
                            label="Email *"
                            variant="outlined"
                            type="email"
                            fullWidth
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <TextField
                            name="message"
                            label="Message *"
                            variant="outlined"
                            multiline
                            rows={4}
                            fullWidth
                            required
                            placeholder="Tell me about your project or just say hello..."
                        />

                        <Button
                            type="submit"
                            variant="outlined"
                            sx={{
                                mt: 2,
                                alignSelf: 'center',
                                px: 6,
                                py: 1.5,
                                fontSize: 16,
                                fontWeight: 600,
                                color: '#0092ff',
                                borderColor: '#0092ff',
                                borderRadius: 2,
                                background:
                                    'linear-gradient(135deg, transparent, rgba(0, 146, 255, 0.05))',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    backgroundColor: '#0092ff',
                                    color: '#fff',
                                    transform: 'translateY(-2px)',
                                    boxShadow:
                                        '0 8px 25px rgba(0, 146, 255, 0.3)',
                                },
                            }}
                        >
                            Send Message
                        </Button>

                        {status !== 0 && (
                            <Typography
                                sx={{
                                    textAlign: 'center',
                                    mt: 2,
                                    p: 2,
                                    borderRadius: 1,
                                    backgroundColor:
                                        status === 200
                                            ? '#4caf5022'
                                            : '#f4433622',
                                    color:
                                        status === 200 ? '#4caf50' : '#f44336',
                                    border: `1px solid ${status === 200 ? '#4caf50' : '#f44336'}`,
                                }}
                            >
                                {status === 200
                                    ? '✅ Message sent successfully!'
                                    : '❌ Error sending message. Please try again.'}
                            </Typography>
                        )}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ContactSection
