(this.webpackJsonpbpc=this.webpackJsonpbpc||[]).push([[10],{108:function(e,o,t){"use strict";t.r(o),t.d(o,"ion_popover",(function(){return y}));var r=t(16),n=t(2),i=t.n(n),a=t(5),p=t(7),s=t(9),c=t(17),l=t(19),d=(t(20),t(6)),u=t(22),v=(t(30),t(27)),h=t(132),f=t(134),b=function(e,o){var t="top",r="left",n=e.querySelector(".popover-content"),i=n.getBoundingClientRect(),a=i.width,p=i.height,s=e.ownerDocument.defaultView.innerWidth,c=e.ownerDocument.defaultView.innerHeight,l=o&&o.target&&o.target.getBoundingClientRect(),u=null!=l&&"top"in l?l.top:c/2-p/2,v=null!=l&&"left"in l?l.left:s/2,h=l&&l.width||0,f=l&&l.height||0,b=e.querySelector(".popover-arrow"),g=b.getBoundingClientRect(),x=g.width,w=g.height;null==l&&(b.style.display="none");var y={top:u+f,left:v+h/2-x/2},j={top:u+f+(w-1),left:v+h/2-a/2},k=!1,O=!1;j.left<m+25?(k=!0,j.left=m):a+m+j.left+25>s&&(O=!0,j.left=s-a-m,r="right"),u+f+p>c&&u-p>0?(y.top=u-(w+1),j.top=u-p-(w-1),e.className=e.className+" popover-bottom",t="bottom"):u+f+p>c&&(n.style.bottom=m+"%"),b.style.top=y.top+"px",b.style.left=y.left+"px",n.style.top=j.top+"px",n.style.left=j.left+"px",k&&(n.style.left="calc(".concat(j.left,"px + var(--ion-safe-area-left, 0px))")),O&&(n.style.left="calc(".concat(j.left,"px - var(--ion-safe-area-right, 0px))")),n.style.transformOrigin=t+" "+r;var D=Object(d.a)(),E=Object(d.a)(),P=Object(d.a)();return E.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),P.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),D.addElement(e).easing("ease").duration(100).addAnimation([E,P])},m=5,g=function(e){var o=Object(d.a)(),t=Object(d.a)(),r=Object(d.a)();return t.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),r.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),o.addElement(e).easing("ease").duration(500).addAnimation([t,r])},x=function(e,o){var t=e.ownerDocument,r="rtl"===t.dir,n="top",i=r?"right":"left",a=e.querySelector(".popover-content"),p=a.getBoundingClientRect(),s=p.width,c=p.height,l=t.defaultView.innerWidth,u=t.defaultView.innerHeight,v=o&&o.target&&o.target.getBoundingClientRect(),h=null!=v&&"bottom"in v?v.bottom:u/2-c/2,f=null!=v&&"left"in v?r?v.left-s+v.width:v.left:l/2-s/2,b=v&&v.height||0,m={top:h,left:f};m.left<12?(m.left=12,i="left"):s+12+m.left>l&&(m.left=l-s-12,i="right"),h+b+c>u&&h-c>0?(m.top=h-c-b,e.className=e.className+" popover-bottom",n="bottom"):h+b+c>u&&(a.style.bottom="12px");var g=Object(d.a)(),x=Object(d.a)(),w=Object(d.a)(),y=Object(d.a)(),j=Object(d.a)();return x.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),w.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),y.addElement(a).beforeStyles({top:"".concat(m.top,"px"),left:"".concat(m.left,"px"),"transform-origin":"".concat(n," ").concat(i)}).fromTo("transform","scale(0.001)","scale(1)"),j.addElement(e.querySelector(".popover-viewport")).fromTo("opacity",.01,1),g.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([x,w,y,j])},w=function(e){var o=Object(d.a)(),t=Object(d.a)(),r=Object(d.a)();return t.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),r.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),o.addElement(e).easing("ease").duration(500).addAnimation([t,r])},y=function(){function e(o){var t=this;Object(p.a)(this,e),Object(c.o)(this,o),this.didPresent=Object(c.g)(this,"ionPopoverDidPresent",7),this.willPresent=Object(c.g)(this,"ionPopoverWillPresent",7),this.willDismiss=Object(c.g)(this,"ionPopoverWillDismiss",7),this.didDismiss=Object(c.g)(this,"ionPopoverDidDismiss",7),this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),t.dismiss()},this.onBackdropTap=function(){t.dismiss(void 0,v.a)},this.onLifecycle=function(e){var o=t.usersElement,r=j[e.type];if(o&&r){var n=new CustomEvent(r,{bubbles:!1,cancelable:!1,detail:e.detail});o.dispatchEvent(n)}}}return Object(s.a)(e,[{key:"connectedCallback",value:function(){Object(v.f)(this.el)}},{key:"present",value:function(){var e=Object(a.a)(i.a.mark((function e(){var o,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.presented){e.next=2;break}return e.abrupt("return");case 2:if(o=this.el.querySelector(".popover-content")){e.next=5;break}throw new Error("container is undefined");case 5:return t=Object.assign(Object.assign({},this.componentProps),{popover:this.el}),e.next=8,Object(f.a)(this.delegate,o,this.component,["popover-viewport",this.el["s-sc"]],t);case 8:return this.usersElement=e.sent,e.next=11,Object(u.d)(this.usersElement);case 11:return e.abrupt("return",Object(v.e)(this,"popoverEnter",b,x,this.event));case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"dismiss",value:function(){var e=Object(a.a)(i.a.mark((function e(o,t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.g)(this,o,t,"popoverLeave",g,w,this.event);case 2:if(!(r=e.sent)){e.next=6;break}return e.next=6,Object(f.b)(this.delegate,this.usersElement);case 6:return e.abrupt("return",r);case 7:case"end":return e.stop()}}),e,this)})));return function(o,t){return e.apply(this,arguments)}}()},{key:"onDidDismiss",value:function(){return Object(v.h)(this.el,"ionPopoverDidDismiss")}},{key:"onWillDismiss",value:function(){return Object(v.h)(this.el,"ionPopoverWillDismiss")}},{key:"render",value:function(){var e,o=Object(l.b)(this),t=this.onLifecycle;return Object(c.j)(c.c,{"aria-modal":"true","no-router":!0,tabindex:"-1",style:{zIndex:"".concat(2e4+this.overlayIndex)},class:Object.assign(Object.assign({},Object(h.b)(this.cssClass)),(e={},Object(r.a)(e,o,!0),Object(r.a)(e,"popover-translucent",this.translucent),e)),onIonPopoverDidPresent:t,onIonPopoverWillPresent:t,onIonPopoverWillDismiss:t,onIonPopoverDidDismiss:t,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap},Object(c.j)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(c.j)("div",{tabindex:"0"}),Object(c.j)("div",{class:"popover-wrapper ion-overlay-wrapper"},Object(c.j)("div",{class:"popover-arrow"}),Object(c.j)("div",{class:"popover-content"})),Object(c.j)("div",{tabindex:"0"}))}},{key:"el",get:function(){return Object(c.k)(this)}}]),e}(),j={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};y.style={ios:'.sc-ion-popover-ios-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:flex;position:fixed;align-items:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:flex;position:absolute;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios::after,[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after,[dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{top:-6px}@supports (backdrop-filter: blur(0)){.popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios,.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);backdrop-filter:saturate(180%) blur(20px)}}',md:".sc-ion-popover-md-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:flex;position:fixed;align-items:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:flex;position:absolute;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content.sc-ion-popover-md{border-radius:4px;transform-origin:left top}[dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md,[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md,[dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md{transform-origin:right top}.popover-viewport.sc-ion-popover-md{transition-delay:100ms}"}},132:function(e,o,t){"use strict";t.d(o,"a",(function(){return s})),t.d(o,"b",(function(){return c})),t.d(o,"c",(function(){return p})),t.d(o,"d",(function(){return d}));var r=t(2),n=t.n(r),i=t(5),a=t(16),p=function(e,o){return null!==o.closest(e)},s=function(e,o){return"string"===typeof e&&e.length>0?Object.assign(Object(a.a)({"ion-color":!0},"ion-color-".concat(e),!0),o):o},c=function(e){var o={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter((function(e){return null!=e})).map((function(e){return e.trim()})).filter((function(e){return""!==e})):[]}(e).forEach((function(e){return o[e]=!0})),o},l=/^[a-z][a-z0-9+\-.]*:/,d=function(){var e=Object(i.a)(n.a.mark((function e(o,t,r,i){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==o||"#"===o[0]||l.test(o)){e.next=5;break}if(!(a=document.querySelector("ion-router"))){e.next=5;break}return null!=t&&t.preventDefault(),e.abrupt("return",a.push(o,r,i));case 5:return e.abrupt("return",!1);case 6:case"end":return e.stop()}}),e)})));return function(o,t,r,n){return e.apply(this,arguments)}}()},134:function(e,o,t){"use strict";t.d(o,"a",(function(){return a})),t.d(o,"b",(function(){return p}));var r=t(2),n=t.n(r),i=t(5),a=function(){var e=Object(i.a)(n.a.mark((function e(o,t,r,i,a){var p;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o){e.next=2;break}return e.abrupt("return",o.attachViewToDom(t,r,a,i));case 2:if("string"===typeof r||r instanceof HTMLElement){e.next=4;break}throw new Error("framework delegate is missing");case 4:if(p="string"===typeof r?t.ownerDocument&&t.ownerDocument.createElement(r):r,i&&i.forEach((function(e){return p.classList.add(e)})),a&&Object.assign(p,a),t.appendChild(p),!p.componentOnReady){e.next=11;break}return e.next=11,p.componentOnReady();case 11:return e.abrupt("return",p);case 12:case"end":return e.stop()}}),e)})));return function(o,t,r,n,i){return e.apply(this,arguments)}}(),p=function(e,o){if(o){if(e){var t=o.parentElement;return e.removeViewFromDom(t,o)}o.remove()}return Promise.resolve()}}}]);
//# sourceMappingURL=10.70cfd587.chunk.js.map