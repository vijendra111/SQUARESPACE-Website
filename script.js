var tl = gsap.timeline()

tl.from("#nav img ,#nav h3,#nav h4,#nav button", {
    y: -100,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.2,

})
tl.from("#main h1",{
    opacity:0,
    duration:1,
    delay: 0.5,
    stagger:0.5,
})
tl.from("#left-img",{
    opacity:0,
    x:-150,
    duration:1,
    delay: 0.5,
    stagger:0.5,
})
tl.from("#right-img",{
    opacity:0,
    x:150,
    duration:1,
    delay: 0.5,
    stagger:0.5,
})
tl.from("h5",{
    scale:0.5,
    opacity:0
})
tl.to("h5",{
    y:30,
    repeat:-1,
    duration:0.7,
    yoyo:true,
})
tl.from("#left-btm,#top-right",{
    opacity:0,
    duration:1.5,
})
tl.from("#main #icon",{
    opacity:0,
    duration:2,

})