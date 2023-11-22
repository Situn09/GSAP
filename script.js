// gsap.to("#one",{
//     width: "100%",
//     ease: Expo.easeInOut,
//     duration: 2
// })
setInterval(function(){
    location.reload();
},7500);
gsap.to(".imagecontainer",{
    ease:Expo.easeInOut,
    width: "100%",
    duration:2,
    stagger:2
})
gsap.to(".text h1",{
    ease:Expo.easeInOut,
    stagger:2,
    top:0
})
gsap.to(".text h1",{
    delay: 2,
    ease:Expo.easeInOut,
    top:"100px",
    stagger:2,
    
})