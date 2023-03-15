$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

// pre loader start
// window.addEventListener("load", () => {
//     const loader = document.querySelector(".loader");
  
//     loader.classList.add("loader--hidden");
//     loader.addEventListener("transitionend", () => {
//       document.body.removeChild(loader);
//     });
//   });
  
  function loader(){
    document.querySelector('.loader').classList.add('loader--hidden')
}
function fadeOut(){
    setInterval(loader,500);
}
window.onload=fadeOut();
// pre loader end

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });
});

$(window).scroll(function(){
    $('header').toggleClass('scrolled',$(this).scrollTop()>50)
})
// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["frontend development", "backend development", "web design", "web development"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 1500,
});
// <!-- typed js effect ends -->

   // <!-- emailjs to mail contact form data -->
   $("#contact-form").submit(function (event) {
    emailjs.init("oYwI6qrmRrlMDkNOD");
    emailjs.sendForm('service_r2caz5a', 'template_l12yosv', '#contact-form')
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById("contact-form").reset();
            alert("Form Submitted Successfully");
        }, function (error) {
            console.log('FAILED...', error);
            alert("Form Submission Failed! Try Again");
        });
    event.preventDefault();
});
// <!-- emailjs to mail contact form data -->



/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 700,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h2', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });


/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content h2', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .box', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL SERVICES */
srtop.reveal('.service .row .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });
