const tooltipTriggerList=document.querySelectorAll('[data-bs-toggle="tooltip"]'),tooltipList=[...tooltipTriggerList].map(t=>new bootstrap.Tooltip(t)),lenis=new Lenis;function checkiftooltip(){$(window).width()>768?($('[data-toggle="tooltip"]').tooltip(),$("[data-toggle='tooltip']").tooltip(),$('[data-toggle="tooltip"]').tooltip("enable")):$('[data-toggle="tooltip"]').tooltip("disable")}function checkifLenis(){0==$(window).width()<768?lenis.start():lenis.destroy()}function raf(t){lenis.raf(t),requestAnimationFrame(raf)}lenis.stop(),$(document).ready(function(){var t,e,o,i,r,s,n;checkiftooltip(),lenis.start(),$("html").css("opacity",1),$.get("https://api.openweathermap.org/data/2.5/weather?q=Athens&units=metric&appid=cc645b18d5f5a4906bf8bdc7f9137124",function(t){setTimeout(function(){var e=t.main.temp.toFixed(0);$("#athTemp").html(e+"°C")},300)}),$.get("https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&units=metric&appid=cc645b18d5f5a4906bf8bdc7f9137124",function(t){setTimeout(function(){var e=t.main.temp.toFixed(0);$("#amsTemp").html(e+"°C")},100)}),o=document,i=o.getElementById,r=o.createElement,s=o.getElementsByTagName,n="typef_orm_share",i.call(o,n)||((t=r.call(o,"script")).id=n,t.src="https://embed.typeform.com/embed.js",(e=s.call(o,"script")[0]).parentNode.insertBefore(t,e))}),$(window).resize(function(){checkiftooltip()}),lenis.on("scroll",ScrollTrigger.update),gsap.ticker.add(t=>{lenis.raf(1e3*t)}),gsap.ticker.lagSmoothing(0),requestAnimationFrame(raf),document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",function(t){t.preventDefault(),t.stopPropagation(),lenis.scrollTo(this.getAttribute("href")),bootstrap.Tooltip.getInstance(".close-button").dispose(),setTimeout(function(){[...tooltipTriggerList].map(t=>new bootstrap.Tooltip(t))},3050)})}),document.querySelectorAll('[data-target^="#"]').forEach(t=>{t.addEventListener("click",function(t){t.preventDefault(),t.stopPropagation(),lenis.scrollTo(this.getAttribute("data-target")),bootstrap.Tooltip.getInstance(".close-button").dispose(),setTimeout(function(){[...tooltipTriggerList].map(t=>new bootstrap.Tooltip(t))},3050)})}),$(window).scroll(function(){$(this).scrollTop()>800?$("#toTop").fadeIn("fast",function(){}):$("#toTop").fadeOut("fast")});const showAnim=gsap.from(".main-navbar",{yPercent:-100,paused:!0,duration:.3}).progress(1);function initImage(t,e){const o=document.createElement("div"),i=document.querySelector("#imgGroup");o.appendChild(t),i.appendChild(o),gsap.set(o,{pointerEvents:"none",position:"absolute",attr:{id:"box"+e,class:"imgBox"},width:t.width,height:t.height,borderRadius:"24px",overflow:"hidden",scale:"1.2",top:"50%",left:"50%",xPercent:-50,yPercent:-50,x:t.dataset.x,y:t.dataset.y,perspective:500}),t.onmouseover=(t=>{$("#DeskAlt").html(t.srcElement.alt),$("#DeskAlt").css("opacity",1)}),t.onmouseout=(t=>{$("#DeskAlt").css("opacity",0)})}ScrollTrigger.create({start:"top top",end:99999,onUpdate:t=>{-1===t.direction?showAnim.play():showAnim.reverse()}}),gsap.registerPlugin(ScrollTrigger),gsap.to(".progress-circle",{strokeDashoffset:0,ease:"none",scrollTrigger:{scrub:.3},onComplete:t=>{$(".icon-wrap").addClass("bg-secondary"),$(".icon--close path").css({fill:"#3A2D52"})},onUpdate:t=>{"0px"!==$(".progress-circle").css("stroke-dashoffset")&&($(".icon-wrap").removeClass("bg-secondary"),$(".icon--close path").css({fill:"#3A2D52"}))}}),window.onload=(()=>{gsap.set("#scrollDist",{width:"100%",height:gsap.getProperty("#app","height"),onComplete:()=>{gsap.set("#app, #imgGroup",{height:"100%",width:"100%",opacity:1,position:"fixed",top:20,left:"7vw",perspective:300})}}),gsap.set("#app img",{position:"absolute",attr:{id:(t,e,o)=>(initImage(e,t),"img"+t)}});gsap.timeline({defaults:{duration:1},scrollTrigger:{trigger:"#scrollDist",start:"top top",end:"bottom bottom",scrub:1}}).fromTo("#txt1",{scale:.4,transformOrigin:"50%"},{scale:2,opacity:.03},0).to("#txt1 path",{duration:.3,drawSVG:0,stagger:.05,ease:"power1.in"},0).fromTo(".imgBox",{z:-5e3},{z:350,ease:"none",stagger:-.3},.3).fromTo(".imgBox img",{scale:3},{scale:1.15,stagger:-.3},.3).to(".imgBox",{duration:0,pointerEvents:"auto",stagger:-.3},.5).from(".imgBox img",{duration:.3,opacity:0,stagger:-.3,ease:"power1.inOut"},.3).to(".imgBox img",{duration:.1,opacity:0,stagger:-.3,ease:"expo.inOut"},1.2).to(".imgBox",{duration:0,pointerEvents:"none",stagger:-.3},1.27).add("end").fromTo("#txt2",{scale:.1,transformOrigin:"50%"},{scale:.6,ease:"power3"},"end-=0.2").from("#txt2 path",{duration:.4,drawSVG:0,stagger:.15,ease:"sine.inOut"},"end-=0.2")}),1===ScrollTrigger.isTouch?gsap.set(".imgBox",{x:0,y:0}):window.addEventListener("mousemove",t=>{gsap.to(".imgBox",{xPercent:-t.clientX/innerWidth*100,yPercent:-25-t.clientY/innerHeight*50,rotateX:4-t.clientY/innerHeight*8,rotateY:t.clientX/innerWidth*8-4}),gsap.to(".imgBox img",{xPercent:-t.clientX/innerWidth*10,yPercent:-5-t.clientY/innerHeight*10})}),$(".workAccordion").click(function(){"true"===$(this).attr("aria-expanded")?$(this).find("svg").css("transform","rotate(90deg)"):$(this).find("svg").css("transform","none")});