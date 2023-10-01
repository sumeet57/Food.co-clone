document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("content").classList.remove("hidden");
    }, 100);
});


const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function video_hover_ani(){
    let video_cont = document.querySelector(".video-cont");
let play = document.querySelector(".play");


video_cont.addEventListener("mouseenter", function() {
     
    gsap.to(play,{
        opacity : 1,
        scale : 1
    })
   
    window.addEventListener("mousemove", function (dets) {
        gsap.to(play,{
            left : dets.x-70,
            top : dets.pageY,
        })
    })
})
video_cont.addEventListener("mouseleave", function() {
    gsap.to(play, {
        opacity : 0,
        scale :0
    })
})
}
video_hover_ani();

function load_ani(){
    gsap.from(".page1 h1",{
        y : 100,
        opacity : 0,
        delay : 0.3 ,
        duration : 0.7,
        stagger : 0.2
    
    })
    gsap.from(".page1 .video-cont", {
        
        opacity : 0,
        scale : 0.9,
        delay : 1.2 ,
        duration : 0.3,
        
    })
}
load_ani();

function detail_box(){
    
const boxElements = document.querySelectorAll('.box');

boxElements.forEach(box => {
  box.addEventListener('mouseover', () => {
    const imgElement = box.previousElementSibling;
    if (imgElement.classList.contains('img_3')) {
      imgElement.style.filter = 'blur(5px)';
    }
  });

  box.addEventListener('mouseout', () => {
    const imgElement = box.previousElementSibling;
    if (imgElement.classList.contains('img_3')) {
      imgElement.style.filter = 'none';
      
    }
  });
});
}
detail_box();

    let curs = document.querySelector(".cursor");
    document.addEventListener("mousemove", function (details) {
        gsap.to(curs,{
            left : details.x-10,
            top : details.y-10,
        });
    });


function mousetitle_ani(){
    let title = document.querySelector(".page1 h1");
let title2 = document.querySelector(".page1 .h12");

// mouse animation on title
title.addEventListener("mouseenter", function(){
    curs.style.borderRadius = '5%';
    gsap.to(curs,{
        
        scale : 10,
        backgroundColor : 'rgba(181, 180, 180, 0.756)',
        rotate : 90
        
    });
});
title.addEventListener("mouseleave", function(){
    curs.style.borderRadius = '50%';
    gsap.to(curs,{
        scale : 1,
        rotate : 0
    });
});


title2.addEventListener("mouseenter", function(){
    
    gsap.to(curs,{
        scale : 8,
        backgroundColor : 'grey'
        
    });
});
title2.addEventListener("mouseleave", function(){
    gsap.to(curs,{
        scale : 1,
    });
});
}
mousetitle_ani();

//mouse animation on page 2, all 3 images


function all3images_ani(){
    let img1 = document.querySelector(".page2 .elem #img1");

img1.addEventListener("mouseenter", function(){
    curs.style.borderBottomLeftRadius = '5%';
    curs.style.borderBottomRightRadius = '5%';
    gsap.to(curs,{
        scale : 19,
        backgroundColor : 'orange',
    });
});
img1.addEventListener("mouseleave", function(){
    curs.style.borderRadius = '50%';
    gsap.to(curs,{
        
        scale : 1,
        backgroundColor : 'dimgrey',
    });
});
// image 2
let img2 = document.querySelector(".page2 .elem #img2");

img2.addEventListener("mouseenter", function(){
    curs.style.borderBottomLeftRadius = '5%';
    curs.style.borderBottomRightRadius = '5%';
    gsap.to(curs,{
        scale : 20,
        backgroundColor : 'red',
    });
});
img2.addEventListener("mouseleave", function(){
    curs.style.borderRadius = '50%';
    gsap.to(curs,{
        scale : 1,
        backgroundColor : 'dimgrey',
    });
});

// image 3

let img3 = document.querySelector(".page2 .elem #img3");

img3.addEventListener("mouseenter", function(){
    curs.style.borderBottomLeftRadius = '5%';
    curs.style.borderBottomRightRadius = '5%';
    gsap.to(curs,{
        scale : 18,
        backgroundColor : 'green',
    });
});
img3.addEventListener("mouseleave", function(){
    curs.style.borderRadius = '50%';
    gsap.to(curs,{
        scale : 1,
        backgroundColor : 'dimgrey',
    });
});
}

all3images_ani();
// mouse animation on page 3 content leftdiv /right div

function mouse_ani_page3(){
    document.querySelector(".page3 .leftdiv h1").
addEventListener("mouseenter", function (){
    curs.style.borderTopRightRadius = '5%';
    gsap.to(curs,{
        scale : 8,
        backgroundColor : '#FFCBC0'
    });
});
document.querySelector(".page3 .leftdiv h1").
addEventListener("mouseleave", function (){
    curs.style.borderRadius = '50%';
    gsap.to(curs,{
        scale : 1,
        backgroundColor : 'grey'
    });
});

//right div

document.querySelector(".page3 .rightdiv p").
addEventListener("mouseenter", function (){
    curs.style.borderTopLeftRadius = '5%';
    gsap.to(curs,{
        scale : 3,
        backgroundColor : '#FFF3C4'
    });
});
document.querySelector(".page3 .rightdiv p").
addEventListener("mouseleave", function (){
    curs.style.borderRadius = '50%';

    gsap.to(curs,{
        scale : 1,
        backgroundColor : 'grey'
    });
});
}
mouse_ani_page3();


function producthover_ani(){
    document.querySelector("#product1").
addEventListener("mouseenter",function hello(){
    gsap.to(curs,{
        scale : 10,
        backgroundColor : '#f3dda5',
        borderRadius : '4%',
        rotate : 0,
        rotate : -180,
    });
});
document.querySelector("#product1").
addEventListener("mouseleave",function(){
    gsap.to(curs,{
        scale : 1,
        backgroundColor : '#dadada',
        borderRadius : '50%',
        rotate : 0,
    });
});
document.querySelector("#product2").
addEventListener("mouseenter",function hello(){
    gsap.to(curs,{
        scale : 10,
        backgroundColor : '#f2fcdc',
        borderRadius : '4%',
        rotate : 0,
        rotate : -180,
    });
});
document.querySelector("#product2").
addEventListener("mouseleave",function(){
    gsap.to(curs,{
        scale : 1,
        backgroundColor : '#dadada',
        borderRadius : '50%',
        rotate : 0,
    });
});
document.querySelector("#product3").
addEventListener("mouseenter",function hello(){
    gsap.to(curs,{
        scale : 10,
        backgroundColor : '#dcfcf0',
        borderRadius : '4%',
        rotate : 0,
        rotate : -180,
    });
});
document.querySelector("#product3").
addEventListener("mouseleave",function(){
    gsap.to(curs,{
        scale : 1,
        backgroundColor : '#dadada',
        borderRadius : '50%',
        rotate : 0,
    });
});
document.querySelector("#product4").
addEventListener("mouseenter",function hello(){
    gsap.to(curs,{
        scale : 10,
        backgroundColor : '#d2c5e6',
        borderRadius : '4%',
        rotate : 0,
        rotate : -180,
    });
});
document.querySelector("#product4").
addEventListener("mouseleave",function(){
    gsap.to(curs,{
        scale : 1,
        backgroundColor : '#dadada',
        borderRadius : '50%',
        rotate : 0,
    });
});

}
producthover_ani();


if(window.getComputedStyle(curs).getPropertyValue('display') === 'block'){

    document.querySelector(".page5 .one_elem_left h3").
addEventListener("mouseenter",function(){
    gsap.to(curs,{
        scale : 5,
        borderRadius : '40%',
        backgroundColor : "#d9c7d4"
    })
    
})
document.querySelector(".page5 .one_elem_left h3").
addEventListener("mouseleave",function(){
    gsap.to(curs,{
        scale : 1,
        borderRadius : '50%',
        backgroundColor : "#dadada"
    })
})

document.querySelector(".page5 .two_elem_right img").
addEventListener("mouseenter",function(){
    gsap.to(curs,{
        scale : 20,
        borderRadius : "5%",
        backgroundColor : "#adc6ed",
    });

})
document.querySelector(".page5 .two_elem_right img").
addEventListener("mouseleave",function(){
    gsap.to(curs,{
        scale : 1,
        borderRadius : '50%',
        backgroundColor : "#dadada",
    })

})
}




