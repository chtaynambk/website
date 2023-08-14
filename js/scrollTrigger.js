gsap.registerPlugin(ScrollTrigger);
 
// gsap.to(".title", {
//     scrollTrigger:{
//         trigger:".title",
//         toggleActions:"restart none none none",
//         start:"top 30%",
//         end:"top ",

//         // scrub: true,
//         markers: true
//     },
//     y: 50,
//     duration: 3,
//     // ease: "none"

// });


// gsap.fromTo(".title" ,{
//     y: -500,
//     opacity: 0
// },
// {
//     y:50,
//     opacity: 1,
//     duration: 2

// }
// );

// tweenMax.from(".title " ,{
//     y:500 ,
//     // duartion: 5,
//     // delay: 2


// });
gsap.fromTo(".title", {
    x: -50,
    opacity: 0 
},
{
    scrollTrigger:{
        trigger:".title",
        toggleActions:"restart none none none",
        start:"center 50%",
        end:"center 10% ",
        // markers:true
    },
    x: 0, 
    duration: 1 ,
    ease:"in",
    opacity:1 
});

gsap.fromTo(".social-media", {
    x: 50,
    opacity: 0 
},
{
    scrollTrigger:{
        trigger:".social-media",
        toggleActions:"restart none none none",
        start:"center 50%",
        end:"center 10% ",
        // markers:true
    },
    x: 0, 
    duration: 1 ,
    ease:"in",
    opacity:1 
});

gsap.fromTo(".box", {
    x: 50,
    opacity: 0
},
{
    scrollTrigger:{
        trigger:".box",
        toggleActions:"restart none none none",
        start:"top center",
        end:"top 80% ",
        // markers:true,
        scrub: 1
    },
    x: 0, 
    duration: 1 ,
    ease:"in",
    opacity:1
});
gsap.fromTo(".logo-ipsum", {
    x: -50,
    opacity: 0
},
{
    scrollTrigger:{
        trigger:".logo-ipsum",
        toggleActions:"restart none none none",
        start:"top 60%",
        end:"top 80% ",
        // markers:true,
        scrub: 1
    },
    x: 0, 
    duration: 1 ,
    ease:"in",
    opacity:1
});

gsap.fromTo(".content", {
    x: -50,
    opacity: 0
},
{
    scrollTrigger:{
        trigger:".content",
        toggleActions:"restart none none none",
        start:"top 60%",
        end:"top 40% ",
        // markers:true,
        scrub: 1
    },
    x: 0, 
    duration: 1 ,
    ease:"in",
    opacity:1
});

gsap.fromTo(".img-cont", {
    x: 50,
    opacity: 0
},
{
    scrollTrigger:{
        trigger:".img-cont",
        toggleActions:"restart none none none",
        start:"top 60%",
        end:"top 40% ",
        // markers:true,
        scrub: 1
    },
    x: 0, 
    duration: 1 ,
    ease:"in",
    opacity:1
});


gsap.fromTo(".inner-text", {
    x: -50,
    opacity: 0
},
{
    scrollTrigger:{
        trigger:".inner-text",
        toggleActions:"restart none none none",
        start:"top 60%",
        end:"top 40% ",
        // markers:true,
        scrub: 1
    },
    x: 0, 
    duration: 1 ,
    ease:"in",
    opacity:1
});


gsap.fromTo(".business-text", {
    x: -50,
    opacity: 0
},
{
    scrollTrigger:{
        trigger:".business-text",
        toggleActions:"restart none none none",
        start:"top 60%",
        end:"top 40% ",
        // markers:true,
        scrub: 1
    },
    x: 0, 
    duration: 1 ,
    ease:"in",
    opacity:1
});


gsap.fromTo(".video", {
    x: 50,
    opacity: 0
},
{
    scrollTrigger:{
        trigger:".video",
        toggleActions:"restart none none none",
        start:"top 60%",
        end:"top 40% ",
        // markers:true,
        scrub: 1
    },
    x: 0, 
    duration: 1 ,
    ease:"in",
    opacity:1
});


gsap.fromTo(".skils-bg", {
    y: 100,
    opacity: 0
},
{
    scrollTrigger:{
        trigger:".skils-bg",
        toggleActions:"restart none none none",
        start:"top 80%",
        end:"top 40% ",
        // markers:true,
        scrub: 1
    },
    y: 0, 
    duration: 1 ,
    ease:"in",
    opacity:1
});


gsap.fromTo(".skil-bar1", {
    width: 0,
    opacity: 0
},
{
    scrollTrigger:{
        trigger:".skil-bar1",
        // toggleActions:"restart none none none",
        start:"top 60%",
        end:"top 40% ",
        // markers:true,
        // scrub: 1
    },
    width: "95%", 
    duration: 1 ,
    ease:"in",
    opacity:1
});

gsap.fromTo(".skil-bar2", {
    width: 0,
    opacity: 0
},
{
    scrollTrigger:{
        trigger:".skil-bar2",
        // toggleActions:"restart none none none",
        start:"top 60%",
        end:"top 40% ",
        // markers:true,
        // scrub: 1
    },
    width: "95%", 
    duration: 1 ,
    ease:"in",
    opacity:1
});

gsap.fromTo(".skil-bar3", {
    width: 0,
    opacity: 0
},
{
    scrollTrigger:{
        trigger:".skil-bar3",
        // toggleActions:"restart none none none",
        start:"top 60%",
        end:"top 40% ",
        // markers:true,
        // scrub: 1
    },
    width: "95%", 
    duration: 1 ,
    ease:"in",
    opacity:1
});

gsap.fromTo(".skil-bar4", {
    width: 0,
    opacity: 0
},
{
    scrollTrigger:{
        trigger:".skil-bar4",
        // toggleActions:"restart none none none",
        start:"top 60%",
        end:"top 40% ",
        // markers:true,
        // scrub: 1
    },
    width: "95%", 
    duration: 1 ,
    ease:"in",
    opacity:1
});

gsap.fromTo(".violet-mode", {
    x: -50,
    opacity: 0
},
{
    scrollTrigger:{
        trigger:".card-content",
        toggleActions:"restart none none none",
        start:"top 60%",
        end:"top 10% ",
        // markers:true,
        scrub: 1
    },
    x: 0, 
    duration: 1 ,
    ease:"in",
    opacity:1
});


gsap.fromTo(".card-content", {
    x: 50,
    opacity: 0
},
{
    scrollTrigger:{
        trigger:".card-content",
        toggleActions:"restart none none none",
        start:"top 80%",
        end:"top 40% ",
        // markers:true,
        scrub: 1
    },
    x: 0, 
    duration: 1 ,
    ease:"in",
    opacity:1
});

gsap.fromTo(".imag-inr", {
    x: -50,
    opacity: 0
},
{
    scrollTrigger:{
        trigger:".imag-inr",
        toggleActions:"restart none none none",
        start:"top 80%",
        end:"top 10% ",
        // markers:true,
        scrub: 1
    },
    x: 0, 
    duration: 1 ,
    ease:"in",
    opacity:1
});

gsap.fromTo(".text-right", {
    x: 50,
    opacity: 0
},
{
    scrollTrigger:{
        trigger:".text-right",
        toggleActions:"restart none none none",
        start:"top 80%",
        end:"top 10% ",
        // markers:true,
        scrub: 1
    },
    x: 0, 
    duration: 1 ,
    ease:"in",
    opacity:1
});

gsap.fromTo(".openday", {
    y: 50,
    opacity: 0
},
{
    scrollTrigger:{
        trigger:".openday",
        toggleActions:"restart none none none",
        start:"top 80%",
        end:"top 40% ",
        // markers:true,
        scrub: 1
    },
    y: 0, 
    duration: 1 ,
    ease:"in",
    opacity:1
});


gsap.fromTo(".all-cont", {
    y: 50,
    opacity: 0
},
{
    scrollTrigger:{
        trigger:".all-cont",
        toggleActions:"restart none none none",
        start:"top 80%",
        end:"top 40% ",
        // markers:true,
        scrub: 1
    },
    y: 0, 
    duration: 1 ,
    ease:"in",
    opacity:1
});






