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
        delay:'.1',
        duration: '.6',
        y: '0',
        fontWeight : 500,
        opacity: 1,
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