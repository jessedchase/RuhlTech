function soliloquyIsMobile(){var e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e}function soliloquyYouTubeVids(e,t,i,s,n,$,o){$("#"+n).show().css({display:"block","z-index":"1210"}),player=o,YT.Player&&"undefined"==typeof soliloquy_youtube[t]&&(soliloquy_youtube[t]=new YT.Player(n,{videoId:t,playerVars:e,events:{onStateChange:soliloquyYouTubeOnStateChange}}))}function soliloquyYouTubeOnStateChange(e){var t=jQuery(e.target.getIframe()).data("soliloquy-slider-id");e.data!==YT.PlayerState.PAUSED&&e.data!==YT.PlayerState.ENDED||soliloquy_slider[t]&&soliloquy_slider[t].getSetting("auto")&&soliloquy_slider[t].startAuto(),e.data!==YT.PlayerState.PLAYING&&e.data!==YT.PlayerState.BUFFERING||soliloquy_slider[t]&&soliloquy_slider[t].stopAuto()}function onYouTubeIframeAPIReady(){}function soliloquyVimeoVids(e,t,i,s,n,$){if($("#"+n).show().css({display:"block","z-index":"1210"}),$f){var o={};$.each($("#"+n)[0].attributes,function(e,t){o[t.nodeName]=t.nodeValue}),e.player_id=n,o.src="//player.vimeo.com/video/"+t+"?"+$.param(e),o.frameborder=0,$("#"+n).replaceWith(function(){return $("<iframe />",o).append($(this).contents())}),soliloquy_vimeo[t]=$f($("#"+n)[0]);var l=$("#"+n).data("soliloquy-slider-id");soliloquy_vimeo[t].addEvent("ready",function(){soliloquy_slider[l]&&soliloquy_slider[l].stopAuto(),soliloquy_vimeo[t].addEvent("play",function(){soliloquy_slider[l]&&soliloquy_slider[l].stopAuto()}),soliloquy_vimeo[t].addEvent("pause",function(){soliloquy_slider[l].getSetting("auto")&&soliloquy_slider[l].startAuto()}),soliloquy_vimeo[t].addEvent("finish",function(){soliloquy_slider[l].getSetting("auto")&&soliloquy_slider[l].startAuto()})})}}function soliloquyVimeoSliderPause(e){var t=jQuery("#"+e).data("soliloquy-slider-id");soliloquy_slider[t]&&soliloquy_slider[t].stopAuto()}function soliloquyVimeoSliderStart(e){var t=jQuery("#"+e).data("soliloquy-slider-id");soliloquy_slider[t]&&soliloquy_slider[t].getSetting("auto")&&soliloquy_slider[t].startAuto()}function soliloquyWistiaVids(e,t,i,s,n,$){if($("#"+n).show().css({display:"block","z-index":"1210"}),wistiaEmbeds){var o={};$.each($("#"+n)[0].attributes,function(e,t){o[t.nodeName]=t.nodeValue}),e.container=n,o.src="//fast.wistia.net/embed/iframe/"+t+"?"+$.param(e),o.frameborder=0,$("#"+n).replaceWith(function(){return $("<iframe />",o).addClass("wistia_embed").append($(this).contents())}),wistiaEmbeds.onFind(function(e){t===e.hashedId()&&(soliloquy_wistia[t]=e,soliloquy_wistia[t].bind("play",function(){var e=$(this.container).data("soliloquy-slider-id");soliloquy_slider[e]&&soliloquy_slider[e].stopAuto()}),soliloquy_wistia[t].bind("pause",function(){var e=$(this.container).data("soliloquy-slider-id");soliloquy_slider[e]&&soliloquy_slider[e].getSetting("auto")&&soliloquy_slider[e].startAuto()}),soliloquy_wistia[t].bind("end",function(){var e=$(this.container).data("soliloquy-slider-id");soliloquy_slider[e]&&soliloquy_slider[e].getSetting("auto")&&soliloquy_slider[e].startAuto()}),e.play())})}}function soliloquyLocalVids(e,t,i,s,n,$){$("#"+n).show().css({display:"block","z-index":"1210"});var o={};$.each($("#"+n)[0].attributes,function(e,t){o[t.nodeName]=t.nodeValue});var l=[];1===e.playpause&&l.push("playpause"),1===e.progress&&l.push("progress"),1===e.current&&l.push("current"),1===e.duration&&l.push("duration"),1===e.volume&&l.push("volume"),1===e.fullscreen&&l.push("fullscreen"),soliloquy_local[t]=new MediaElementPlayer("video#"+n,{features:l,success:function(t,i){1==e.autoplay&&t.play()}})}function soliloquyInitManually(){jQuery(document).ready(function($){var soliloquy_sliders=[];$(".soliloquy-outer-container[data-soliloquy-loaded='0']").each(function(){soliloquy_sliders.push($(".soliloquy-container",$(this)).attr("id").replace(/^\D+/g,""))}),soliloquy_sliders.length>0&&$.post(soliloquy_ajax.ajax,{action:"soliloquy_init_sliders",ajax_nonce:soliloquy_ajax.ajax_nonce,ids:soliloquy_sliders},function(response){"-1"!==response&&"0"!==response&&eval(response)})})}!function($,e,t,s){var n={},o={keyboard:!1,mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,captionSpeed:0,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,wrapperClass:"soliloquy-wrapper",touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,autoSlideForOnePage:!1,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){},onSliderResize:function(){}};$.fn.soliloquy=function(n){if(0===this.length)return this;if(this.length>1)return this.each(function(){$(this).soliloquy(n)}),this;var l={},a=this,r=$(e).width(),d=$(e).height(),c=function(){l.settings=$.extend({},o,n),l.settings.slideWidth=parseInt(l.settings.slideWidth),l.children=a.children(l.settings.slideSelector),l.children.length<l.settings.minSlides&&(l.settings.minSlides=l.children.length),l.children.length<l.settings.maxSlides&&(l.settings.maxSlides=l.children.length),l.settings.randomStart&&(l.settings.startSlide=Math.floor(Math.random()*l.children.length)),l.active={index:l.settings.startSlide},l.carousel=l.settings.minSlides>1||l.settings.maxSlides>1,l.carousel&&(l.settings.preloadImages="all"),l.minThreshold=l.settings.minSlides*l.settings.slideWidth+(l.settings.minSlides-1)*l.settings.slideMargin,l.maxThreshold=l.settings.maxSlides*l.settings.slideWidth+(l.settings.maxSlides-1)*l.settings.slideMargin,l.working=!1,l.controls={},l.interval=null,l.animProp="vertical"==l.settings.mode?"top":"left",l.usingCSS=l.settings.useCSS&&"fade"!=l.settings.mode&&function(){var e=t.createElement("div"),i=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var n in i)if(e.style[i[n]]!==s)return l.cssPrefix=i[n].replace("Perspective","").toLowerCase(),l.animProp="-"+l.cssPrefix+"-transform",!0;return!1}(),"vertical"==l.settings.mode&&(l.settings.maxSlides=l.settings.minSlides),a.data("origStyle",a.attr("style")),a.children(l.settings.slideSelector).each(function(){$(this).data("origStyle",$(this).attr("style"))}),u()},u=function(){a.wrap('<div class="'+l.settings.wrapperClass+'"><div class="soliloquy-viewport"></div></div>'),l.viewport=a.parent(),l.loader=$('<div class="soliloquy-loading" />'),l.viewport.prepend(l.loader),a.css({width:"horizontal"==l.settings.mode?100*l.children.length+215+"%":"auto",position:"relative"}),l.usingCSS&&l.settings.easing?a.css("-"+l.cssPrefix+"-transition-timing-function",l.settings.easing):l.settings.easing||(l.settings.easing="swing");var e=m();l.viewport.css({width:"100%",position:"relative"}),"fade"!=l.settings.mode&&l.viewport.css({overflow:"hidden"}),l.viewport.parent().css({maxWidth:v()}),l.settings.pager||l.viewport.parent().css({margin:"0 auto 0px"}),l.children.css({"float":"left",listStyle:"none",position:"relative"}),l.children.css("width",f()),"horizontal"==l.settings.mode&&l.settings.slideMargin>0&&l.children.css("marginRight",l.settings.slideMargin),"vertical"==l.settings.mode&&l.settings.slideMargin>0&&l.children.css("marginBottom",l.settings.slideMargin),"fade"==l.settings.mode&&(l.children.css({zIndex:0,display:"none",marginRight:"-100%",width:"100%"}),l.children.eq(l.settings.startSlide).css({zIndex:l.settings.slideZIndex,display:"block"})),l.controls.el=$('<div class="soliloquy-controls" />'),l.settings.captions&&E(),l.active.last=l.settings.startSlide==y()-1;var t=l.children.eq(l.settings.startSlide);"all"==l.settings.preloadImages&&(t=l.children),l.settings.ticker?l.settings.pager=!1:(l.settings.pager&&b(),l.settings.controls&&T(),l.settings.auto&&l.settings.autoControls&&k(),(l.settings.controls||l.settings.autoControls||l.settings.pager)&&l.viewport.after(l.controls.el)),g(t,h)},g=function(e,t){var i=e.find('img:not([src=""]), iframe').length,s=0;return 0===i?void t():void e.find('img:not([src=""]), iframe').each(function(){$(this).one("load error",function(){++s===i&&t()}).each(function(){this.complete&&$(this).load()})})},h=function(){if(l.settings.infiniteLoop&&"fade"!=l.settings.mode&&!l.settings.ticker&&l.children.length>1){var t="vertical"==l.settings.mode?l.settings.minSlides:l.settings.maxSlides,i=l.children.slice(0,t).clone(!0).addClass("soliloquy-clone"),s=l.children.slice(-t).clone(!0).addClass("soliloquy-clone");a.append(i).prepend(s)}l.loader.remove(),S(),"vertical"==l.settings.mode&&(l.settings.adaptiveHeight=!0),l.viewport.height(p()),a.redrawSlider(),l.settings.onSliderLoad(l.active.index),l.initialized=!0,l.settings.responsive&&$(e).bind("resize",X),l.settings.auto&&l.settings.autoStart&&(y()>1||l.settings.autoSlideForOnePage)&&L(),l.settings.ticker&&W(),l.settings.pager&&I(l.settings.startSlide),l.settings.controls&&H(),l.settings.touchEnabled&&!l.settings.ticker&&j(),l.settings.keyboard&&!l.settings.ticker&&$("body").on("keydown",function(e){return"textarea"!=e.target.type&&"input"!=e.target.type?39==e.keyCode?(C(e),!1):37==e.keyCode?(z(e),!1):void 0:void 0})},p=function(){var e=0,t=$();if("vertical"==l.settings.mode||l.settings.adaptiveHeight)if(l.carousel){var s=1==l.settings.moveSlides?l.active.index:l.active.index*x();for(t=l.children.eq(s),i=1;i<=l.settings.maxSlides-1;i++)t=s+i>=l.children.length?t.add(l.children.eq(i-1)):t.add(l.children.eq(s+i))}else t=l.children.eq(l.active.index);else t=l.children;return"vertical"==l.settings.mode?(t.each(function(t){e+=$(this).outerHeight()}),l.settings.slideMargin>0&&(e+=l.settings.slideMargin*(l.settings.minSlides-1))):e=Math.max.apply(Math,t.map(function(){return $(this).outerHeight(!1)}).get()),"border-box"==l.viewport.css("box-sizing")?e+=parseFloat(l.viewport.css("padding-top"))+parseFloat(l.viewport.css("padding-bottom"))+parseFloat(l.viewport.css("border-top-width"))+parseFloat(l.viewport.css("border-bottom-width")):"padding-box"==l.viewport.css("box-sizing")&&(e+=parseFloat(l.viewport.css("padding-top"))+parseFloat(l.viewport.css("padding-bottom"))),e},v=function(){var e="100%";return l.settings.slideWidth>0&&(e="horizontal"==l.settings.mode?l.settings.maxSlides*l.settings.slideWidth+(l.settings.maxSlides-1)*l.settings.slideMargin:l.settings.slideWidth),"fade"==l.settings.mode?"100%":e},f=function(){var e=l.settings.slideWidth,t=l.viewport.width();return 0===l.settings.slideWidth||l.settings.slideWidth>t&&!l.carousel||"vertical"===l.settings.mode?e=t:l.settings.maxSlides>1&&"horizontal"===l.settings.mode&&(t>l.maxThreshold||t<l.minThreshold&&(e=(t-l.settings.slideMargin*(l.settings.minSlides-1))/l.settings.minSlides)),"fade"==l.settings.mode?"100%":e},m=function(){var e=1;if("horizontal"===l.settings.mode&&l.settings.slideWidth>0)if(l.viewport.width()<l.minThreshold)e=l.settings.minSlides;else if(l.viewport.width()>l.maxThreshold)e=l.settings.maxSlides;else{var t=l.children.first().width()+l.settings.slideMargin;e=Math.floor((l.viewport.width()+l.settings.slideMargin)/t)}else"vertical"===l.settings.mode&&(e=l.settings.minSlides);return e},y=function(){var e=0;if(l.settings.moveSlides>0)if(l.settings.infiniteLoop)e=Math.ceil(l.children.length/x());else for(var t=0,i=0;t<l.children.length;)++e,t=i+m(),i+=l.settings.moveSlides<=m()?l.settings.moveSlides:m();else e=Math.ceil(l.children.length/m());return e},x=function(){return l.settings.moveSlides>0&&l.settings.moveSlides<=m()?l.settings.moveSlides:m()},S=function(){if(l.children.length>l.settings.maxSlides&&l.active.last&&!l.settings.infiniteLoop){if("horizontal"===l.settings.mode){var e=l.children.last(),t=e.position();w(-(t.left-(l.viewport.width()-e.outerWidth())),"reset",0)}else if("vertical"===l.settings.mode){var i=l.children.length-l.settings.minSlides,t=l.children.eq(i).position();w(-t.top,"reset",0)}}else if(l.settings.infiniteLoop){var n=l.active.index*x(),t=l.children.eq(n).position();l.active.index===y()-1&&(l.active.last=!0),t!=s&&("horizontal"===l.settings.mode&&l.children.length<=1?(t.left=l.active.index*l.children.eq(n).outerWidth(!0),w(-t.left,"reset",0)):"horizontal"!==l.settings.mode||l.carousel?"vertical"===l.settings.mode?(t.top=(l.active.index+1)*l.children.eq(n).outerHeight(!0),w(-t.top,"reset",0)):l.carousel&&"horizontal"===l.settings.mode&&l.settings.infiniteLoop&&(t.left=(l.active.index+1)*l.children.eq(n).outerWidth(!0),w(-t.left*l.settings.maxSlides,"reset",0)):(t.left=(l.active.index+1)*l.children.eq(n).outerWidth(!0),w(-t.left,"reset",0)))}else{var n=l.active.index,t=l.children.eq(n).position();l.active.index===y()-1&&(l.active.last=!0),t!=s&&("horizontal"!==l.settings.mode||l.carousel?"vertical"===l.settings.mode&&(t.top=l.active.index*l.children.eq(n).outerHeight(!0),w(-t.top,"reset",0)):(t.left=l.active.index*l.children.eq(n).outerWidth(!0),w(-t.left,"reset",0)))}},w=function(e,t,i,s){if(l.usingCSS){var n="vertical"===l.settings.mode?"translate3d(0, "+e+"px, 0)":"translate3d("+e+"px, 0, 0)";a.css("-"+l.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"===t?(a.css(l.animProp,n),a.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){a.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),A()})):"reset"===t?a.css(l.animProp,n):"ticker"===t&&(a.css("-"+l.cssPrefix+"-transition-timing-function","linear"),a.css(l.animProp,n),a.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){a.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),w(s.resetValue,"reset",0),Y()}))}else{var o={};o[l.animProp]=e,"slide"===t?a.animate(o,i,l.settings.easing,function(){A()}):"reset"===t?a.css(l.animProp,e):"ticker"===t&&a.animate(o,speed,"linear",function(){w(s.resetValue,"reset",0),Y()})}},q=function(){for(var e="",t=y(),i=0;t>i;i++){var s="";l.settings.buildPager&&$.isFunction(l.settings.buildPager)?(s=l.settings.buildPager(i),l.pagerEl.addClass("soliloquy-custom-pager")):(s=i+1,l.pagerEl.addClass("soliloquy-default-pager")),e+='<div class="soliloquy-pager-item"><a href="" data-slide-index="'+i+'" class="soliloquy-pager-link" tabindex="0"><span>'+s+"</span></a></div>"}l.pagerEl.html(e)},b=function(){l.settings.pagerCustom?l.pagerEl=$(l.settings.pagerCustom):l.pagerEl=$('<div class="soliloquy-pager" />'),l.settings.pagerSelector?$(l.settings.pagerSelector).html(l.pagerEl):l.controls.el.addClass("soliloquy-has-pager").append(l.pagerEl),l.settings.pagerCustom||q(),l.pagerEl.on("click","a",M)},T=function(){l.controls.next=$('<a class="soliloquy-next" href="" tabindex="0"><span>'+l.settings.nextText+"</span></a>"),l.controls.prev=$('<a class="soliloquy-prev" href="" tabindex="0"><span>'+l.settings.prevText+"</span></a>"),l.controls.next.bind("click",C),l.controls.prev.bind("click",z),l.settings.nextSelector&&$(l.settings.nextSelector).append(l.controls.next),l.settings.prevSelector&&$(l.settings.prevSelector).append(l.controls.prev),l.settings.nextSelector||l.settings.prevSelector||(l.controls.directionEl=$('<div class="soliloquy-controls-direction" />'),l.controls.directionEl.append(l.controls.prev).append(l.controls.next),l.controls.el.addClass("soliloquy-has-controls-direction").append(l.controls.directionEl))},k=function(){l.controls.start=$('<div class="soliloquy-controls-auto-item"><a class="soliloquy-start" href="" aria-label="play" tabindex="0"><span>'+l.settings.startText+"</span></a></div>"),l.controls.stop=$('<div class="soliloquy-controls-auto-item"><a class="soliloquy-stop" href="" aria-label="pause" tabindex="0"><span>'+l.settings.stopText+"</span></a></div>"),l.controls.autoEl=$('<div class="soliloquy-controls-auto" />'),l.controls.autoEl.on("click",".soliloquy-start",P),l.controls.autoEl.on("click",".soliloquy-stop",_),l.settings.autoControlsCombine?l.controls.autoEl.append(l.controls.start):l.controls.autoEl.append(l.controls.start).append(l.controls.stop),l.settings.autoControlsSelector?$(l.settings.autoControlsSelector).html(l.controls.autoEl):l.controls.el.addClass("soliloquy-has-controls-auto").append(l.controls.autoEl),D(l.settings.autoStart?"stop":"start")},E=function(){l.children.each(function(e){var t=$(this).find("img:first").attr("title");t!=s&&(""+t).length&&$(this).append('<div class="soliloquy-caption"><span>'+t+"</span></div>")})},C=function(e){l.settings.auto&&a.stopAuto(),a.goToNextSlide(),e.preventDefault()},z=function(e){l.settings.auto&&a.stopAuto(),a.goToPrevSlide(),e.preventDefault()},P=function(e){a.startAuto(),e.preventDefault()},_=function(e){a.stopAuto(),e.preventDefault()},M=function(e){l.settings.auto&&a.stopAuto();var t=$(e.currentTarget);if(t.attr("data-slide-index")!==s){var i=parseInt(t.attr("data-slide-index"));i!=l.active.index&&a.goToSlide(i),e.preventDefault()}},I=function(e){var t=l.children.length;return"short"===l.settings.pagerType?(l.settings.maxSlides>1&&(t=Math.ceil(l.children.length/l.settings.maxSlides)),void l.pagerEl.html(e+1+l.settings.pagerShortSeparator+t)):(l.pagerEl.find("a").removeClass("active"),void l.pagerEl.each(function(t,i){$(i).find("a").eq(e).addClass("active")}))},A=function(){if(l.settings.infiniteLoop){var e="";0===l.active.index?e=l.children.eq(0).position():l.active.index==y()-1&&l.carousel?e=l.children.eq((y()-1)*x()).position():l.active.index==l.children.length-1&&(e=l.children.eq(l.children.length-1).position()),e&&("horizontal"===l.settings.mode?w(-e.left,"reset",0):"vertical"===l.settings.mode&&w(-e.top,"reset",0))}l.working=!1,"fade"==l.settings.mode&&l.viewport.css({overflow:""}),l.settings.onSlideAfter(l.children.eq(l.active.index),l.oldIndex,l.active.index)},D=function(e){l.settings.autoControlsCombine?l.controls.autoEl&&l.controls.autoEl.html(l.controls[e]):(l.controls.autoEl.find("a").removeClass("active"),l.controls.autoEl.find("a:not(.soliloquy-"+e+")").addClass("active"))},H=function(){1==y()?(l.controls.prev.addClass("disabled"),l.controls.next.addClass("disabled")):!l.settings.infiniteLoop&&l.settings.hideControlOnEnd&&(0==l.active.index?(l.controls.prev.addClass("disabled"),l.controls.next.removeClass("disabled")):l.active.index==y()-1?(l.controls.next.addClass("disabled"),l.controls.prev.removeClass("disabled")):(l.controls.prev.removeClass("disabled"),l.controls.next.removeClass("disabled")))},L=function(){if(l.settings.autoDelay>0)var e=setTimeout(a.startAuto,l.settings.autoDelay);else a.startAuto();l.settings.autoHover&&a.hover(function(){l.interval&&(a.stopAuto(!0),l.autoPaused=!0)},function(){l.autoPaused&&(a.startAuto(!0),l.autoPaused=null)})},W=function(){var e=0;if("next"==l.settings.autoDirection)a.append(l.children.clone().addClass("soliloquy-clone"));else{a.prepend(l.children.clone().addClass("soliloquy-clone"));var t=l.children.first().position();e="horizontal"==l.settings.mode?-t.left:-t.top}w(e,"reset",0),l.settings.pager=!1,l.settings.controls=!1,l.settings.autoControls=!1,l.settings.tickerHover&&!l.usingCSS&&l.viewport.hover(function(){a.stop()},function(){var e=0;l.children.each(function(t){e+="horizontal"==l.settings.mode?$(this).outerWidth(!0):$(this).outerHeight(!0)});var t=l.settings.speed/e,i="horizontal"==l.settings.mode?"left":"top",s=t*(e-Math.abs(parseInt(a.css(i))));Y(s)}),Y()},Y=function(e){speed=e?e:l.settings.speed;var t={left:0,top:0},i={left:0,top:0};"next"==l.settings.autoDirection?t=a.find(".soliloquy-clone").first().position():i=l.children.first().position();var s="horizontal"==l.settings.mode?-t.left:-t.top,n="horizontal"==l.settings.mode?-i.left:-i.top,o={resetValue:n};w(s,"ticker",speed,o)},j=function(){l.touch={start:{x:0,y:0},end:{x:0,y:0}},l.viewport.bind("touchstart",O)},O=function(e){if(l.working)e.preventDefault();else{l.touch.originalPos=a.position();var t=e.originalEvent;l.touch.start.x=t.changedTouches[0].pageX,l.touch.start.y=t.changedTouches[0].pageY,l.viewport.bind("touchmove",N),l.viewport.bind("touchend",V)}},N=function(e){var t=e.originalEvent,i=Math.abs(t.changedTouches[0].pageX-l.touch.start.x),s=Math.abs(t.changedTouches[0].pageY-l.touch.start.y);if(3*i>s&&l.settings.preventDefaultSwipeX?e.preventDefault():3*s>i&&l.settings.preventDefaultSwipeY&&e.preventDefault(),"fade"!=l.settings.mode&&l.settings.oneToOneTouch){var n=0;if("horizontal"==l.settings.mode){var o=t.changedTouches[0].pageX-l.touch.start.x;n=l.touch.originalPos.left+o}else{var o=t.changedTouches[0].pageY-l.touch.start.y;n=l.touch.originalPos.top+o}w(n,"reset",0)}},V=function(e){l.viewport.unbind("touchmove",N);var t=e.originalEvent,i=0;if(l.touch.end.x=t.changedTouches[0].pageX,l.touch.end.y=t.changedTouches[0].pageY,"fade"==l.settings.mode){var s=Math.abs(l.touch.start.x-l.touch.end.x);s>=l.settings.swipeThreshold&&(l.touch.start.x>l.touch.end.x?a.goToNextSlide():a.goToPrevSlide(),a.stopAuto())}else{var s=0;"horizontal"==l.settings.mode?(s=l.touch.end.x-l.touch.start.x,i=l.touch.originalPos.left):(s=l.touch.end.y-l.touch.start.y,i=l.touch.originalPos.top),!l.settings.infiniteLoop&&(0==l.active.index&&s>0||l.active.last&&0>s)?w(i,"reset",200):Math.abs(s)>=l.settings.swipeThreshold?(0>s?a.goToNextSlide():a.goToPrevSlide(),a.stopAuto()):w(i,"reset",200)}l.viewport.unbind("touchend",V)},X=function(t){if(l.initialized){var i=$(e).width(),s=$(e).height();r==i&&d==s||(r=i,d=s,a.redrawSlider(),l.settings.onSliderResize.call(a,l.active.index))}};return a.goToSlide=function(e,t){if(!l.working&&l.active.index!=e)if(l.working=!0,l.oldIndex=l.active.index,0>e?l.active.index=y()-1:e>=y()?l.active.index=0:l.active.index=e,l.settings.onSlideBefore(l.children.eq(l.active.index),l.oldIndex,l.active.index,l.children.eq(l.oldIndex)),"next"==t?l.settings.onSlideNext(l.children.eq(l.active.index),l.oldIndex,l.active.index):"prev"==t&&l.settings.onSlidePrev(l.children.eq(l.active.index),l.oldIndex,l.active.index),l.active.last=l.active.index>=y()-1,l.settings.pager&&I(l.active.index),l.settings.controls&&H(),"fade"==l.settings.mode)l.viewport.css({overflow:"hidden"}),l.settings.adaptiveHeight&&l.viewport.height()!=p()&&l.viewport.animate({height:p()},l.settings.adaptiveHeightSpeed),l.children.filter(":visible").fadeOut(l.settings.speed).css({zIndex:0}),l.children.eq(l.active.index).css("zIndex",l.settings.slideZIndex+1).fadeIn(l.settings.speed,function(){$(this).css("zIndex",l.settings.slideZIndex),A()});else{l.settings.adaptiveHeight&&l.viewport.height()!=p()&&l.viewport.animate({height:p()},l.settings.adaptiveHeightSpeed);var i=0,s={left:0,top:0};if(!l.settings.infiniteLoop&&l.carousel&&l.active.last)if("horizontal"==l.settings.mode){var n=l.children.eq(l.children.length-1);s=n.position(),i=l.viewport.width()-n.outerWidth()}else{var o=l.children.length-l.settings.minSlides;s=l.children.eq(o).position()}else if(l.carousel&&l.active.last&&"prev"==t){var r=1==l.settings.moveSlides?l.settings.maxSlides-x():(y()-1)*x()-(l.children.length-l.settings.maxSlides),n=a.children(".soliloquy-clone").eq(r);s=n.position()}else if("next"==t&&0==l.active.index)s=a.find("> .soliloquy-clone").eq(l.settings.maxSlides).position(),l.active.last=!1;else if(e>=0){var d=e*x();s=l.children.eq(d).position()}if("undefined"!=typeof s){var c="horizontal"==l.settings.mode?-(s.left-i):-s.top;w(c,"slide",l.settings.speed)}}},a.goToNextSlide=function(){if(l.settings.infiniteLoop||!l.active.last){var e=parseInt(l.active.index)+1;a.goToSlide(e,"next")}},a.goToPrevSlide=function(){if(l.settings.infiniteLoop||0!=l.active.index){var e=parseInt(l.active.index)-1;a.goToSlide(e,"prev")}},a.startAuto=function(e){l.interval||(l.interval=setInterval(function(){"next"==l.settings.autoDirection?a.goToNextSlide():a.goToPrevSlide()},l.settings.pause),l.settings.autoControls&&1!=e&&D("stop"))},a.stopAuto=function(e){l.interval&&(clearInterval(l.interval),l.interval=null,l.settings.autoControls&&1!=e&&D("start"))},a.getCurrentSlide=function(){return l.active.index},a.getCurrentSlideElement=function(){return l.children.eq(l.active.index)},a.getSlideCount=function(){return l.children.length},a.redrawSlider=function(){l.children.add(a.find(".soliloquy-clone")).width(f()),l.viewport.css("height",p()),l.settings.ticker||S(),l.active.last&&(l.active.index=y()-1),l.active.index>=y()&&(l.active.last=!0),l.settings.pager&&!l.settings.pagerCustom&&(q(),I(l.active.index))},a.destroySlider=function(){l.initialized&&(l.initialized=!1,$(".soliloquy-clone",this).remove(),l.children.each(function(){$(this).data("origStyle")!==s?$(this).attr("style",$(this).data("origStyle")):$(this).removeAttr("style")}),$(this).data("origStyle")!==s?this.attr("style",$(this).data("origStyle")):$(this).removeAttr("style"),$(this).unwrap().unwrap(),l.controls.el&&l.controls.el.remove(),l.controls.next&&l.controls.next.remove(),l.controls.prev&&l.controls.prev.remove(),l.pagerEl&&l.settings.controls&&l.pagerEl.remove(),$(".soliloquy-caption",this).remove(),l.controls.autoEl&&l.controls.autoEl.remove(),clearInterval(l.interval),l.settings.responsive&&$(e).unbind("resize",X))},a.reloadSlider=function(e){e!==s&&(n=e),a.destroySlider(),c()},a.getSetting=function(e){return l.settings[e]?l.settings[e]:!1},c(),this}}(jQuery,window,document),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e:e(jQuery)}(function($){function e(e){var s=e||window.event,n=o.call(arguments,1),r=0,c=0,u=0,g=0,h=0,p=0;if(e=$.event.fix(s),e.type="mousewheel","detail"in s&&(u=-1*s.detail),"wheelDelta"in s&&(u=s.wheelDelta),"wheelDeltaY"in s&&(u=s.wheelDeltaY),"wheelDeltaX"in s&&(c=-1*s.wheelDeltaX),"axis"in s&&s.axis===s.HORIZONTAL_AXIS&&(c=-1*u,u=0),r=0===u?c:u,"deltaY"in s&&(u=-1*s.deltaY,r=u),"deltaX"in s&&(c=s.deltaX,0===u&&(r=-1*c)),0!==u||0!==c){if(1===s.deltaMode){var v=$.data(this,"mousewheel-line-height");r*=v,u*=v,c*=v}else if(2===s.deltaMode){var f=$.data(this,"mousewheel-page-height");r*=f,u*=f,c*=f}if(g=Math.max(Math.abs(u),Math.abs(c)),(!a||a>g)&&(a=g,i(s,g)&&(a/=40)),i(s,g)&&(r/=40,c/=40,u/=40),r=Math[r>=1?"floor":"ceil"](r/a),c=Math[c>=1?"floor":"ceil"](c/a),u=Math[u>=1?"floor":"ceil"](u/a),d.settings.normalizeOffset&&this.getBoundingClientRect){var m=this.getBoundingClientRect();h=e.clientX-m.left,p=e.clientY-m.top}return e.deltaX=c,e.deltaY=u,e.deltaFactor=a,e.offsetX=h,e.offsetY=p,e.deltaMode=0,n.unshift(e,r,c,u),l&&clearTimeout(l),l=setTimeout(t,200),($.event.dispatch||$.event.handle).apply(this,n)}}function t(){a=null}function i(e,t){return d.settings.adjustOldDeltas&&"mousewheel"===e.type&&t%120===0}var s=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],n="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],o=Array.prototype.slice,l,a;if($.event.fixHooks)for(var r=s.length;r;)$.event.fixHooks[s[--r]]=$.event.mouseHooks;var d=$.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var t=n.length;t;)this.addEventListener(n[--t],e,!1);else this.onmousewheel=e;$.data(this,"mousewheel-line-height",d.getLineHeight(this)),$.data(this,"mousewheel-page-height",d.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var t=n.length;t;)this.removeEventListener(n[--t],e,!1);else this.onmousewheel=null;$.removeData(this,"mousewheel-line-height"),$.removeData(this,"mousewheel-page-height")},getLineHeight:function(e){var t=$(e),i=t["offsetParent"in $.fn?"offsetParent":"parent"]();return i.length||(i=$("body")),parseInt(i.css("fontSize"),10)||parseInt(t.css("fontSize"),10)||16},getPageHeight:function(e){return $(e).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};$.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})});