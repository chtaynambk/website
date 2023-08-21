gsap.registerPlugin(ScrollTrigger);

   function init(){
  

   }
   window.addEventListener("load",function(event) {
    init();
   });


gsap.from(".title", {
        duration: 1 ,
        x: 50,
        opacity: 0,
       
    });

  gsap.from(".social-media", {
         duration: 1 ,
        x: 50,
        opacity: 0,
       
    });


   gsap.from(".box", {
    duration: 1 ,
   y: 50,
   autoAlpha:0,

   
   scrollTrigger:{
    trigger:".box",
    toggleActions: "restart none none reverse",
    start:"top center",
    end:"top 50% ",
    // markers:true,
    // scrub: 1

   }
  
});


gsap.from(".logo-ipsum", {
    duration: 0.5,
    x: -50,
    opacity: 0,
    
    scrollTrigger:{
        trigger:".logo-ipsum",
        toggleActions:"restart none none reverse",
        start:"top 70%",
        end:"top 50% ",
        // markers:true,
        // scrub: 1
    }
});


// animation left to right for each

// const textBox = gsap.utils.toArray(".content");

// textBox.forEach(content => {
//   gsap.from(content, { 
//     x: 50,
//     opacity: 0,
//     duration:1,
//       scrollTrigger: {
//       trigger: content,
//       start:"top center",
//       end:"top 30%",
//       toggleActions: 'restart none none none',
//       markers:true,
//       scrub: 1,
//       delay:1

//     }
//   })
// });



const textBox = gsap.utils.toArray('.content');

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".text-box",
    toggleActions:"restart none none reverse",
    start:"top 60%",
    end:"top 50%",

    // scrub: 1,
  }
});

textBox.forEach((content) => {
  tl.from(content, { y: 50, duration: 0.2, opacity: 0 })
});







const pragh = gsap.utils.toArray("p");

pragh.forEach(p => {
  gsap.from(p, { 
    y: 50,
    opacity: 0,
    duration:1,
      scrollTrigger: {
      trigger: p,
      start:"top 80%",
      end:"top 50%",
      toggleActions: 'restart none none reverse',
    //   markers:true,
    //   scrub: 1,
    //   delay:1

    }
  })
});





// var tl = gsap.timeline({repeat: 2, repeatDelay: 1});

// tl.from(".content", {
//     y: 50,
//     opacity: 0,

//     scrollTrigger:{
//         trigger:".content",
//         toggleActions:"restart none none none",
//         start:"top 60%",
//         end:"top 40% ",
//         markers:true,
//         scrub: 1
//     },

// });


gsap.from(".img-cont", {
    duration: 0.5,
    x: -50,
   autoAlpha:0,
    
    scrollTrigger:{
        trigger:".img-cont",
        toggleActions:"restart none none reverse",
        start:"top 70%",
        end:"top 50% ",
        // markers:true,
        // scrub: 1
    }
});



gsap.from(".inner-text-cont", {
    duration: 0.5,
    x: 50,
   autoAlpha:0,
    
    scrollTrigger:{
        trigger:".inner-text-cont",
        toggleActions:"restart none none reverse",
        start:"top 70%",
        end:"top 50% ",
        // markers:true,
        // scrub: 1
    }
});


gsap.from(".business-text", {
    duration: 0.5,
    x: -50,
   autoAlpha:0,
    
    scrollTrigger:{
        trigger:".business-text",
        toggleActions:"restart none none reverse",
        start:"top 70%",
        end:"top 50% ",
        // markers:true,
        // scrub: 1
    }
});


gsap.from(".video", {
    duration: 0.5,
    y: 50,
   autoAlpha:0,
    
    scrollTrigger:{
        trigger:".video",
        toggleActions:"restart none none reverse",
        start:"top 70%",
        end:"top 50% ",
        // markers:true,
        // scrub: 1
    }
});

gsap.from(".skils-bg", {
    duration: 0.5,
    y: 100,
   autoAlpha:0,
    
    scrollTrigger:{
        trigger:".skils-bg",
        toggleActions:"restart none none none",
        start:"top 70%",
        end:"top 50% ",
        // markers:true,
        // scrub: 1
    }
});


gsap.from(".skil-bar1", {
    duration: 0.5,
    width:0,
   autoAlpha:0,
    
    scrollTrigger:{
        trigger:".skil-bar1",
        toggleActions:"restart none none none",
        start:"top 70%",
        end:"top 50% ",
        // markers:true,
        // scrub: 1
    }
});


gsap.from(".skil-bar2", {
    duration: 0.5,
    width:0,
   autoAlpha:0,
    
    scrollTrigger:{
        trigger:".skil-bar2",
        toggleActions:"restart none none none",
        start:"top 70%",
        end:"top 50% ",
        // markers:true,
        // scrub: 1
    }
});gsap.from(".skil-bar3", {
    duration: 0.5,
    width:0,
   autoAlpha:0,
    
    scrollTrigger:{
        trigger:".skil-bar3",
        toggleActions:"restart none none none",
        start:"top 70%",
        end:"top 50% ",
        // markers:true,
        // scrub: 1
    }
});gsap.from(".skil-bar4", {
    duration: 0.5,
    width:0,
   autoAlpha:0,
    
    scrollTrigger:{
        trigger:".skil-bar4",
        toggleActions:"restart none none none",
        start:"top 70%",
        end:"top 50% ",
        // markers:true,
        // scrub: 1
    }
});

gsap.from(".violet-mode", {
    duration: 0.5,
    x: -50,
   autoAlpha:0,
    
    scrollTrigger:{
        trigger:".violet-mode",
        toggleActions:"restart none none reverse",
        start:"top 70%",
        end:"top 50% ",
        // markers:true,
        // scrub: 1
    }
});



gsap.from(".white-mode", {
    duration: 0.5,
    x: 50,
   autoAlpha:0,
    
    scrollTrigger:{
        trigger:".white-mode",
        toggleActions:"restart none none reverse",
        start:"top 70%",
        end:"top 50% ",
        // markers:true,
        // scrub: 1
    }
});

gsap.from(".imag-inr", {
    duration: 0.5,
    x: -50,
   autoAlpha:0,
    
    scrollTrigger:{
        trigger:".imag-inr",
        toggleActions:"restart none none reverse",
        start:"top 70%",
        end:"top 50% ",
        // markers:true,
        // scrub: 1
    }
});


gsap.from(".text-right", {
    duration: 0.5,
    x: 50,
   autoAlpha:0,
    
    scrollTrigger:{
        trigger:".text-right",
        toggleActions:"restart none none reverse",
        start:"top 70%",
        end:"top 50% ",
        // markers:true,
        // scrub: 1
    }
});

gsap.from(".openday", {
    duration: 0.5,
    y: 50,
   autoAlpha:0,
    
    scrollTrigger:{
        trigger:".openday",
        toggleActions:"restart none none reverse",
        start:"top 70%",
        end:"top 50% ",
        // markers:true,
        // scrub: 1
    }
});



gsap.from(".all-cont", {
    duration: 0.5,
    y: 50,
   autoAlpha:0,
    
    scrollTrigger:{
        trigger:".all-cont",
        toggleActions:"restart none none reverse",
        start:"top 70%",
        end:"top 50% ",
        // markers:true,
        // scrub: 1
    }
});


const anime = gsap.utils.toArray('.prtfo');

let tm = gsap.timeline({
  scrollTrigger: {
    trigger: ".prt",
    toggleActions:"restart none none reverse",
    start:"top 60%",
    end:"top 50%",
    // markers:true,
 
    // scrub: 1,
  }
});

anime.forEach((prtfo) => {
  tm.from(prtfo, { y: 50, duration: 0.2, opacity: 0 })
});

// animation left to right for each

// const animation = gsap.utils.toArray(".prtfo");

// animation.forEach(prtfo => {
//   gsap.from(prtfo, { 
//     x: 50,
//     opacity: 0,
//     duration:1,
//       scrollTrigger: {
//       trigger: prtfo,
//       start:"top center",
//       end:"top 30%",
//       toggleActions: 'restart none none none',
//       markers:true,
//       scrub: 1,
//       delay:1

//     }
//   })
// });

gsap.from(".inf", {
    duration: 0.5,
    y: 50,
   autoAlpha:0,
    
    scrollTrigger:{
        trigger:".inf",
        toggleActions:"restart none none reverse",
        start:"top 70%",
        end:"top 50% ",
        // markers:true,
        // scrub: 1
    }
});


gsap.from(".contact-box", {
    duration: 0.5,
    y: 50,
   autoAlpha:0,
    
    scrollTrigger:{
        trigger:".grid",
        toggleActions:"restart none none reverse",
        start:"top 70%",
        end:"top 50% ",
        // markers:true,
        // scrub: 1
    }
});

gsap.from(".inf-flex", {
    duration: 0.5,
    y: 50,
   autoAlpha:0,
    
    scrollTrigger:{
        trigger:".inf-flex",
        toggleActions:"restart none none reverse",
        start:"top 70%",
        end:"top 50% ",
        // markers:true,
        // scrub: 1
    }
});


   
   
  

