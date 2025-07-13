import gsap from 'gsap'

const MainTitleAnimation = (t1:string,t2:string) => {
    gsap.to(t1, {
        duration: '.5',
        y: '0',
        color : "#fff",
        opacity: 1,
        scrollTrigger: {
            trigger: t1 ,
            start: 'center 65%'
        }
    })
    gsap.to(t2, {
        delay:'.2',
        duration: '.7',
        y: '15px',
        fontWeight : 300,
        opacity: 0.9,
        color : "#DED9E2",
        scrollTrigger: {
            trigger: t2,
            start: 'center 65%'
        }
    })
    gsap.to('.loadMore',{
        duration:.5,
        opacity:1,
        scrollTrigger: {
            trigger : '.loadMore',
            start : 'top 90%'
        }
    })
}

export default MainTitleAnimation