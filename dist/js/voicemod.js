const tooltipTriggerList=document.querySelectorAll('[data-bs-toggle="tooltip"]'),tooltipList=[...tooltipTriggerList].map(e=>new bootstrap.Tooltip(e)),lenis=new Lenis;function checkiftooltip(){$(window).width()>768?($('[data-toggle="tooltip"]').tooltip(),$('[data-toggle="tooltip"]').tooltip("enable")):$('[data-toggle="tooltip"]').tooltip("disable"),$("[data-toggle='tooltip']").tooltip()}function checkifLenis(){0==$(window).width()<768?lenis.start():lenis.destroy()}function raf(e){lenis.raf(e),requestAnimationFrame(raf)}lenis.stop(),$(document).ready(function(){var e,t,s,a,o,i,n;checkiftooltip(),lenis.start(),$("body").removeClass("opacity-0"),$("html").css("opacity",1),s=document,a=s.getElementById,o=s.createElement,i=s.getElementsByTagName,n="typef_orm_share",a.call(s,n)||((e=o.call(s,"script")).id=n,e.src="https://embed.typeform.com/embed.js",(t=i.call(s,"script")[0]).parentNode.insertBefore(e,t))}),$(window).resize(function(){checkiftooltip()}),lenis.on("scroll",ScrollTrigger.update),gsap.ticker.add(e=>{lenis.raf(1e3*e)}),gsap.ticker.lagSmoothing(0),requestAnimationFrame(raf),document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation(),lenis.scrollTo(this.getAttribute("href")),bootstrap.Tooltip.getInstance(".close-button").dispose(),setTimeout(function(){[...tooltipTriggerList].map(e=>new bootstrap.Tooltip(e))},3050)})}),document.querySelectorAll('[data-target^="#"]').forEach(e=>{e.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation(),lenis.scrollTo(this.getAttribute("data-target")),bootstrap.Tooltip.getInstance(".close-button").dispose(),setTimeout(function(){[...tooltipTriggerList].map(e=>new bootstrap.Tooltip(e))},3050)})}),$(window).scroll(function(){$(this).scrollTop()>800?$("#toTop").fadeIn("fast"):$("#toTop").fadeOut("fast")});const showAnim=gsap.from(".main-navbar",{yPercent:-100,paused:!0,duration:.3}).progress(1);ScrollTrigger.create({start:"top top",end:99999,onUpdate:e=>{-1===e.direction?showAnim.play():showAnim.reverse()}}),gsap.registerPlugin(ScrollTrigger),gsap.to(".progress-circle",{strokeDashoffset:0,ease:"none",scrollTrigger:{scrub:.3},onComplete:e=>{$(".icon-wrap").addClass("bg-secondary"),$(".icon--close path").css({fill:"#3A2D52"})},onUpdate:e=>{"0px"!==$(".progress-circle").css("stroke-dashoffset")&&($(".icon-wrap").removeClass("bg-secondary"),$(".icon--close path").css({fill:"#3A2D52"}))}});var vmHeroAnimation=bodymovin.loadAnimation({container:document.getElementById("vm-hero-lottie"),path:"js/lottie-files/vm-hero-lottie.json",renderer:"svg",loop:!0,autoplay:!0});vmHeroAnimation.setSpeed(2);var vmStreamingApps=bodymovin.loadAnimation({container:document.getElementById("vm-streaming-apps"),path:"js/lottie-files/streaming-apps.json",renderer:"svg",loop:!0,autoplay:!0}),vmMeetingApps=bodymovin.loadAnimation({container:document.getElementById("vm-meeting-apps"),path:"js/lottie-files/meeting-apps.json",renderer:"svg",loop:!0,autoplay:!0}),vmMetaverseApps=bodymovin.loadAnimation({container:document.getElementById("vm-metaverse-apps"),path:"js/lottie-files/metaverse-apps.json",renderer:"svg",loop:!0,autoplay:!0});$(document).on("click",".voiceChangeContainer .form-check",function(){var e="#"+$(this).find("input").attr("id");$(e).attr("checked",!0),$(".voiceChangeContainer .form-check").removeClass("activeVoice"),$(".voiceChangeContainer .form-check p").removeClass("text-background"),$(e).closest(".form-check").addClass("activeVoice"),$(e).closest(".form-check").find("p").addClass("text-background")});var audioElement=document.createElement("audio");audioElement.setAttribute("src","sounds/vm-voice-clean.mp3"),currentTime="",audioElement.addEventListener("canplay",function(){}),audioElement.addEventListener("timeupdate",function(){const e=audioElement.duration;currentTime=audioElement.currentTime;const t=currentTime/e*100;$(".playing_progress").css("width",t+"%")}),$(document).on("click","#voiceEngineSwitch",function(){if($("#voiceEngineSwitch").prop("checked")){var e=$(".activeVoice").find('input[type="radio"]').attr("id");audioElement.pause(),audioElement.setAttribute("src","sounds/vm-voice-"+e+".mp3"),audioElement.currentTime=currentTime,audioElement.play()}else audioElement.pause(),audioElement.setAttribute("src","sounds/vm-voice-clean.mp3"),audioElement.currentTime=currentTime,audioElement.play()}),$(document).on("click","#play",function(){$("#voiceEngineSwitch").attr("disabled",!1),audioElement.play(),$(this).attr("id","pause"),$(this).find("img").attr("src","img/misc/icons/pause-icon-solo.svg"),$(this).find("img").attr("alt","Pause icon"),$(".playBtn").removeClass("playBtn").addClass("playBtnOFF"),$(".fancy-arrow").removeClass("opacity-0").addClass("opacity-100")}),$(document).on("click","#pause",function(){$("#voiceEngineSwitch").attr("disabled",!0),audioElement.pause(),$(this).attr("id","play"),$(this).find("img").attr("src","img/misc/icons/play-icon-solo.svg"),$(this).find("img").attr("alt","Play icon"),$(".playBtnOFF").removeClass("playBtnOFF").addClass("playBtn"),$(".fancy-arrow").removeClass("opacity-100").addClass("opacity-0")}),$(document).on("click",".voiceChangeContainer .form-check",function(){$("#voiceEngineSwitch").attr("disabled",!0).prop("checked",!1),audioElement.pause(),$("#pause").find("img").attr("src","img/misc/icons/play-icon-solo.svg"),$("#pause").find("img").attr("alt","Play icon"),$("#pause").attr("id","play"),$(".playBtnOFF").removeClass("playBtnOFF").addClass("playBtn"),$(".fancy-arrow").removeClass("opacity-100").addClass("opacity-0"),$(".playing_progress").css("width","0%"),audioElement.currentTime=0,audioElement.setAttribute("src","sounds/vm-voice-clean.mp3")}),$("#restart").click(function(){audioElement.currentTime=0}),audioElement.addEventListener("ended",function(){audioElement.pause(),$("#pause").find("img").attr("src","img/misc/icons/play-icon-solo.svg"),$("#pause").find("img").attr("alt","Play icon"),$(".playBtnOFF").removeClass("playBtnOFF").addClass("playBtn"),$(".fancy-arrow").removeClass("opacity-100").addClass("opacity-0"),$("#voiceEngineSwitch").attr("disabled",!0).prop("checked",!1),$(".fancy-arrow").removeClass("opacity-100").addClass("opacity-0"),audioElement.setAttribute("src","sounds/vm-voice-clean.mp3"),$("#pause").attr("id","play")}),$(document).on("click",".competitive-analysis .nav-link",function(){var e=$(".analysis-container div");switch($(this).attr("id")){case"analysisBtn01":e.removeClass("d-none"),e.addClass("d-none"),$(".analysis-01").removeClass("d-none").addClass("d-block"),$(this).closest(".competitive-analysis").find(".active").removeClass("active"),$(this).addClass("active");break;case"analysisBtn02":e.removeClass("d-none"),e.addClass("d-none"),$(".analysis-02").removeClass("d-none").addClass("d-block"),$(this).closest(".competitive-analysis").find(".active").removeClass("active"),$(this).addClass("active");break;case"analysisBtn03":e.removeClass("d-none"),e.addClass("d-none"),$(".analysis-03").removeClass("d-none").addClass("d-block"),$(this).closest(".competitive-analysis").find(".active").removeClass("active"),$(this).addClass("active");break;case"analysisBtn04":e.removeClass("d-none"),e.addClass("d-none"),$(".analysis-04").removeClass("d-none").addClass("d-block"),$(this).closest(".competitive-analysis").find(".active").removeClass("active"),$(this).addClass("active");break;case"analysisBtn05":e.removeClass("d-none"),e.addClass("d-none"),$(".analysis-05").removeClass("d-none").addClass("d-block"),$(this).closest(".competitive-analysis").find(".active").removeClass("active"),$(this).addClass("active")}});var startX,scrollLeft,isDragging=!1;$("#userJourneyScroll").mousedown(function(e){e.preventDefault(),isDragging=!0,startX=e.pageX-$("#userJourneyScroll").offset().left,scrollLeft=$("#userJourneyScroll").scrollLeft(),$(this).removeClass("grab"),$(this).addClass("grabbing")}).mouseup(function(){isDraggingImprovements=!1,$(this).addClass("grab"),$(this).removeClass("grabbing")}),$(document).mousemove(function(e){if(e.preventDefault(),isDragging){var t=e.pageX-$("#userJourneyScroll").offset().left-startX;$("#userJourneyScroll").scrollLeft(scrollLeft-t)}}).mouseup(function(){isDragging=!1});var startXWireframes,scrollLeftWireframes,isDraggingWireframes=!1;function showResearchPlan(){$("#research").removeClass("d-none"),$(".researchPlanBtn").addClass("d-none"),lenis.scrollTo("#research")}function checkScrollableLeftSpace(e){const t=e.parent().find(".btn-left");e.scrollLeft()<=0?t.addClass("d-none"):t.removeClass("d-none")}function checkScrollableRightSpace(e){const t=e.parent().find(".btn-right"),s=e.get(0).scrollWidth-e.width();e.scrollLeft()>=s?t.addClass("d-none"):t.removeClass("d-none")}function handleManualScroll(){const e=$(this);checkScrollableLeftSpace(e),checkScrollableRightSpace(e)}function isScrolledIntoView(e){var t=$(window).scrollTop(),s=t+$(window).height(),a=$(e).offset().top;if(a+$(e).height()<=s&&a>=t)return!0}$("#wireframesScroll").mousedown(function(e){e.preventDefault(),isDraggingWireframes=!0,startXWireframes=e.pageX-$("#wireframesScroll").offset().left,scrollLeftWireframes=$("#wireframesScroll").scrollLeft(),$(this).removeClass("grab"),$(this).addClass("grabbing")}).mouseup(function(){isDraggingImprovements=!1,$(this).addClass("grab"),$(this).removeClass("grabbing")}),$(document).mousemove(function(e){if(e.preventDefault(),isDraggingWireframes){var t=e.pageX-$("#wireframesScroll").offset().left-startXWireframes;$("#wireframesScroll").scrollLeft(scrollLeftWireframes-t)}}).mouseup(function(){isDraggingWireframes=!1}),$(".scrollableArea").on("scroll",handleManualScroll),$(".btn-left").click(function(){const e=$(this).parent().find(".scrollableArea");e.animate({scrollLeft:"-=300px"},"fast"),checkScrollableLeftSpace(e),checkScrollableRightSpace(e)}),$(".btn-right").click(function(){const e=$(this).parent().find(".scrollableArea");e.animate({scrollLeft:"+=300px"},"fast"),checkScrollableLeftSpace(e),checkScrollableRightSpace(e)}),$(".scrollableArea").each(function(){checkScrollableLeftSpace($(this)),checkScrollableRightSpace($(this))}),$(document).on("scroll",function(){isScrolledIntoView($(".progress01")||$(".progress03"))&&($(".progress01").css("width","14.4%").find("img").css("opacity",1),setTimeout(function(){$(".progress02").css("width","24.6%").find("img").css("opacity",1)},500),setTimeout(function(){$(".progress03").css("width","21.2%").find("img").css("opacity",1)},700)),isScrolledIntoView($(".progress04")||$(".progress07"))&&($(".progress04").css("width","24.6%").find("img").css("opacity",1),setTimeout(function(){$(".progress05").css("width","5%").find("img").css("opacity",1)},300),setTimeout(function(){$(".progress06").css("width","21.2%").find("img").css("opacity",1)},600),setTimeout(function(){$(".progress07").css("width","2%").find("img").css("opacity",1)},900))}),$(".workAccordion").click(function(){"true"===$(this).attr("aria-expanded")?$(this).find("svg").css("transform","rotate(90deg)"):$(this).find("svg").css("transform","none")});