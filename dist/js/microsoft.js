const tooltipTriggerList=document.querySelectorAll('[data-bs-toggle="tooltip"]'),tooltipList=[...tooltipTriggerList].map(e=>new bootstrap.Tooltip(e)),lenis=new Lenis;function checkiftooltip(){$(window).width()>768?($('[data-toggle="tooltip"]').tooltip(),$("[data-toggle='tooltip']").tooltip(),$('[data-toggle="tooltip"]').tooltip("enable")):$('[data-toggle="tooltip"]').tooltip("disable")}function checkifLenis(){0==$(window).width()<768?lenis.start():lenis.destroy()}function raf(e){lenis.raf(e),requestAnimationFrame(raf)}lenis.stop(),$(document).ready(function(){checkiftooltip(),lenis.start(),$("body").removeClass("opacity-0"),$("html").css("opacity",1)}),$(window).resize(function(){checkiftooltip()}),lenis.on("scroll",ScrollTrigger.update),gsap.ticker.add(e=>{lenis.raf(1e3*e)}),gsap.ticker.lagSmoothing(0),requestAnimationFrame(raf),document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation(),lenis.scrollTo(this.getAttribute("href")),bootstrap.Tooltip.getInstance(".close-button").dispose(),setTimeout(function(){[...tooltipTriggerList].map(e=>new bootstrap.Tooltip(e))},3050)})}),document.querySelectorAll('[data-target^="#"]').forEach(e=>{e.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation(),lenis.scrollTo(this.getAttribute("data-target")),bootstrap.Tooltip.getInstance(".close-button").dispose(),setTimeout(function(){[...tooltipTriggerList].map(e=>new bootstrap.Tooltip(e))},3050)})}),$(window).scroll(function(){$(this).scrollTop()>800?$("#toTop").fadeIn("fast"):$("#toTop").fadeOut("fast")});const showAnim=gsap.from(".main-navbar",{yPercent:-100,paused:!0,duration:.3}).progress(1);ScrollTrigger.create({start:"top top",end:99999,onUpdate:e=>{-1===e.direction?showAnim.play():showAnim.reverse()}}),gsap.registerPlugin(ScrollTrigger),gsap.to(".progress-circle",{strokeDashoffset:0,ease:"none",scrollTrigger:{scrub:.3},onComplete:e=>{$(".icon-wrap").addClass("bg-accent"),$(".icon--close path").css({fill:"#fff"})},onUpdate:e=>{"0px"!==$(".progress-circle").css("stroke-dashoffset")&&($(".icon-wrap").removeClass("bg-accent"),$(".icon--close path").css({fill:"#3A2D52"}))}}),$(document).on("click","#oldNewSwitch",function(){$(this).prop("checked")?($("#oldNewImageContainer").attr("src","img/misc/elements/power-automate-desktop.png"),$("#oldNewImageContainer").attr("alt","Screenshot from Power Automate Desktop")):($("#oldNewImageContainer").attr("src","img/misc/elements/winautomation-old.png"),$("#oldNewImageContainer").attr("alt","Screenshot from WinAutomation"))}),$(document).on("click","#accessibilitySwitch",function(){$(this).prop("checked")?($("#accessibilityImgContainer").attr("src","img/misc/elements/pad-high-contrast.png"),$("#accessibilityImgContainer").attr("alt","High contrast version")):($("#accessibilityImgContainer").attr("src","img/misc/elements/pad-no-high-contrast.png"),$("#accessibilityImgContainer").attr("alt","Regular version"))});var $scrollableDiv1=$("#scrollableDiv1"),$scrollableDiv2=$("#scrollableDiv2");$("#scrollableDiv2").on("scroll",function(){var e=$scrollableDiv2.scrollLeft();$scrollableDiv1.scrollLeft(e)});var startX,scrollLeft,isDragging=!1;$("#scrollableDiv2, #scrollableDiv1").mousedown(function(e){e.preventDefault(),isDragging=!0,startX=e.pageX-$("#scrollableDiv2").offset().left,scrollLeft=$("#scrollableDiv2").scrollLeft(),$(this).css("cursor","grabbing")}).mouseup(function(){isDragging=!1,$(this).css("cursor","grab")}),$(document).mousemove(function(e){if(e.preventDefault(),isDragging){var t=e.pageX-$("#scrollableDiv2").offset().left-startX;$("#scrollableDiv2").scrollLeft(scrollLeft-t)}}).mouseup(function(){isDragging=!1});var startXImprovements,scrollLeftImprovements,isDraggingImprovements=!1;$("#scrollableDivImprovements").mousedown(function(e){e.preventDefault(),isDraggingImprovements=!0,startXImprovements=e.pageX-$("#scrollableDivImprovements").offset().left,scrollLeftImprovements=$("#scrollableDivImprovements").scrollLeft(),$(this).css("cursor","grabbing")}).mouseup(function(){isDraggingImprovements=!1,$(this).css("cursor","grab")}),$(document).mousemove(function(e){if(e.preventDefault(),isDraggingImprovements){var t=e.pageX-$("#scrollableDivImprovements").offset().left-startXImprovements;$("#scrollableDivImprovements").scrollLeft(scrollLeftImprovements-t)}}).mouseup(function(){isDraggingImprovements=!1});var startXImages,scrollLeftImages,isDraggingImages=!1;function showBeforeAfter(){$("#beforeAfter").removeClass("d-none"),$(".beforeAfterBtn").addClass("d-none"),lenis.scrollTo("#beforeAfter"),$(".scrollableArea").scroll()}function checkScrollableLeftSpace(e){const t=e.parent().find(".btn-left");e.scrollLeft()<=0?t.addClass("d-none"):t.removeClass("d-none")}function checkScrollableRightSpace(e){const t=e.parent().find(".btn-right"),o=e.get(0).scrollWidth-e.width();e.scrollLeft()>=o?t.addClass("d-none"):t.removeClass("d-none")}function handleManualScroll(){const e=$(this);checkScrollableLeftSpace(e),checkScrollableRightSpace(e)}$("#scrollableDivImages").mousedown(function(e){e.preventDefault(),isDraggingImages=!0,startXImages=e.pageX-$("#scrollableDivImages").offset().left,scrollLeftImages=$("#scrollableDivImages").scrollLeft(),$(this).css("cursor","grabbing")}).mouseup(function(){isDraggingImages=!1,$(this).css("cursor","grab")}),$(document).mousemove(function(e){if(e.preventDefault(),isDraggingImages){var t=e.pageX-$("#scrollableDivImages").offset().left-startXImages;$("#scrollableDivImages").scrollLeft(scrollLeftImages-t)}}).mouseup(function(){isDraggingImages=!1}),function(e,t){var o=e.createElement(t),s=e.getElementsByTagName(t)[0];o.onload=function(){window.voiceflow.chat.load({verify:{projectID:"64f776b3d0a6dd00073f976a"},url:"https://general-runtime.voiceflow.com",versionID:"production"})},o.src="https://cdn.voiceflow.com/widget/bundle.mjs",o.type="text/javascript",s.parentNode.insertBefore(o,s)}(document,"script"),$(".scrollableArea").on("scroll",handleManualScroll),$(".btn-left").click(function(){const e=$(this).parent().find(".scrollableArea");e.animate({scrollLeft:"-=300px"},"fast"),checkScrollableLeftSpace(e),checkScrollableRightSpace(e)}),$(".btn-right").click(function(){const e=$(this).parent().find(".scrollableArea");e.animate({scrollLeft:"+=300px"},"fast"),checkScrollableLeftSpace(e),checkScrollableRightSpace(e)}),$(".scrollableArea").each(function(){checkScrollableLeftSpace($(this)),checkScrollableRightSpace($(this))}),0===$(window).scrollTop()?gsap.set(".anim01, .anim02, .anim03, .anim04, .anim05",{opacity:"0"}):gsap.set(".anim01, .anim02, .anim03, .anim04, .anim05",{opacity:"1"});const timeline=gsap.timeline();timeline.add(gsap.to(".anim01",{duration:1,opacity:1}),"-=0.3").add(gsap.to(".anim02",{duration:1,opacity:1}),"-=0.3").add(gsap.to(".anim03",{duration:1,opacity:1}),"-=0.3").add(gsap.to(".anim04",{duration:1,opacity:1}),"-=0.3").add(gsap.to(".anim05",{duration:1,opacity:1}),"-=0.3");