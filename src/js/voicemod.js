function checkiftooltip() {
    $(window).width() > 768 ? ($('[data-toggle="tooltip"]').tooltip(), 
    $('[data-toggle="tooltip"]').tooltip("enable")) : $('[data-toggle="tooltip"]').tooltip("disable")

    $("[data-toggle='tooltip']").tooltip();

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

}

$(document).ready(function() {
    checkiftooltip();
}); 

$(window).resize(function() {
    checkiftooltip();
});

//smooth scroll
    /*const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      //console.log(e)
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)*/
//smooth scroll end


//navbar show on scroll up
/*const showAnim = gsap.from('.main-navbar', { 
    yPercent: -100,
    paused: true,
    duration: 0.3
}).progress(1);

ScrollTrigger.create({
    start: "top top",
    end: 99999,
    onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse()
    }
});*/
//navbar show on scroll up end


//scroll toTop
/*$(window).scroll(function() {
    $(this).scrollTop() > 800 ? $("#toTop").fadeIn("fast", function() {}) : $("#toTop").fadeOut("fast", function() {})
    }), $("#toTop").click(function() {
        return $("html, body").animate({
            scrollTop: 0
        }, 800)

});*/
//scroll toTop end




//lottie
var vmHeroAnimation = bodymovin.loadAnimation({
  container: document.getElementById('vm-hero-lottie'), // Required
  path: 'js/vm-lottie/vm-hero-lottie.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: false
});
vmHeroAnimation.setSpeed(4);

var vmStreamingApps = bodymovin.loadAnimation({
  container: document.getElementById('vm-streaming-apps'), // Required
  path: 'js/vm-lottie/streaming-apps.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: false
});

var vmMeetingApps = bodymovin.loadAnimation({
  container: document.getElementById('vm-meeting-apps'), // Required
  path: 'js/vm-lottie/meeting-apps.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: false
});

var vmMetaverseApps = bodymovin.loadAnimation({
  container: document.getElementById('vm-metaverse-apps'), // Required
  path: 'js/vm-lottie/metaverse-apps.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: false
});

//lottie end