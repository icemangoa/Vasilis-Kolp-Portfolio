const tooltipTriggerList=document.querySelectorAll('[data-bs-toggle="tooltip"]'),tooltipList=[...tooltipTriggerList].map(t=>new bootstrap.Tooltip(t)),lenis=new Lenis;function checkiftooltip(){$(window).width()>768?($('[data-toggle="tooltip"]').tooltip(),$("[data-toggle='tooltip']").tooltip(),$('[data-toggle="tooltip"]').tooltip("enable")):$('[data-toggle="tooltip"]').tooltip("disable")}function checkifLenis(){0==$(window).width()<768?lenis.start():lenis.destroy()}function raf(t){lenis.raf(t),requestAnimationFrame(raf)}lenis.stop(),$(document).ready(function(){checkiftooltip(),lenis.start(),$("html").css("opacity",1),$.get("https://api.openweathermap.org/data/2.5/weather?q=Athens&units=metric&appid=cc645b18d5f5a4906bf8bdc7f9137124",function(t){setTimeout(function(){var e=t.main.temp.toFixed(0);$("#athTemp").html(e+"°C")},300)}),$.get("https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&units=metric&appid=cc645b18d5f5a4906bf8bdc7f9137124",function(t){setTimeout(function(){var e=t.main.temp.toFixed(0);$("#amsTemp").html(e+"°C")},100)})}),$(window).resize(function(){checkiftooltip()}),lenis.on("scroll",ScrollTrigger.update),gsap.ticker.add(t=>{lenis.raf(1e3*t)}),gsap.ticker.lagSmoothing(0),requestAnimationFrame(raf),document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",function(t){t.preventDefault(),t.stopPropagation(),lenis.scrollTo(this.getAttribute("href")),bootstrap.Tooltip.getInstance(".close-button").dispose(),setTimeout(function(){[...tooltipTriggerList].map(t=>new bootstrap.Tooltip(t))},3050)})}),document.querySelectorAll('[data-target^="#"]').forEach(t=>{t.addEventListener("click",function(t){t.preventDefault(),t.stopPropagation(),lenis.scrollTo(this.getAttribute("data-target")),bootstrap.Tooltip.getInstance(".close-button").dispose(),setTimeout(function(){[...tooltipTriggerList].map(t=>new bootstrap.Tooltip(t))},3050)})}),$(window).scroll(function(){$(this).scrollTop()>800?$("#toTop").fadeIn("fast",function(){}):$("#toTop").fadeOut("fast")});const showAnim=gsap.from(".main-navbar",{yPercent:-100,paused:!0,duration:.3}).progress(1);ScrollTrigger.create({start:"top top",end:99999,onUpdate:t=>{-1===t.direction?showAnim.play():showAnim.reverse()}}),gsap.registerPlugin(ScrollTrigger),gsap.to(".progress-circle",{strokeDashoffset:0,ease:"none",scrollTrigger:{scrub:.3},onComplete:t=>{$(".icon-wrap").addClass("bg-accent"),$(".icon--close path").css({fill:"#fff"})},onUpdate:t=>{"0px"!==$(".progress-circle").css("stroke-dashoffset")&&($(".icon-wrap").removeClass("bg-accent"),$(".icon--close path").css({fill:"#3A2D52"}))}}),function(t,e){var o=t.createElement(e),i=t.getElementsByTagName(e)[0];o.onload=function(){window.voiceflow.chat.load({verify:{projectID:"64f776b3d0a6dd00073f976a"},url:"https://general-runtime.voiceflow.com",versionID:"production"})},o.src="https://cdn.voiceflow.com/widget/bundle.mjs",o.type="text/javascript",i.parentNode.insertBefore(o,i)}(document,"script");