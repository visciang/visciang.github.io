(this.webpackJsonpbpc=this.webpackJsonpbpc||[]).push([[28],{104:function(i,n,t){"use strict";t.r(n),t.d(n,"ion_loading",(function(){return v}));var e=t(16),o=t(2),a=t.n(o),r=t(5),s=t(7),d=t(9),c=t(17),l=t(19),p=(t(20),t(6)),u=t(44),g=(t(30),t(27)),h=t(132),m=function(i){var n=Object(p.a)(),t=Object(p.a)(),e=Object(p.a)();return t.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),e.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),n.addElement(i).easing("ease-in-out").duration(200).addAnimation([t,e])},f=function(i){var n=Object(p.a)(),t=Object(p.a)(),e=Object(p.a)();return t.addElement(i.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),e.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),n.addElement(i).easing("ease-in-out").duration(200).addAnimation([t,e])},b=function(i){var n=Object(p.a)(),t=Object(p.a)(),e=Object(p.a)();return t.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),e.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),n.addElement(i).easing("ease-in-out").duration(200).addAnimation([t,e])},y=function(i){var n=Object(p.a)(),t=Object(p.a)(),e=Object(p.a)();return t.addElement(i.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),e.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),n.addElement(i).easing("ease-in-out").duration(200).addAnimation([t,e])},v=function(){function i(n){var t=this;Object(s.a)(this,i),Object(c.o)(this,n),this.didPresent=Object(c.g)(this,"ionLoadingDidPresent",7),this.willPresent=Object(c.g)(this,"ionLoadingWillPresent",7),this.willDismiss=Object(c.g)(this,"ionLoadingWillDismiss",7),this.didDismiss=Object(c.g)(this,"ionLoadingDidDismiss",7),this.presented=!1,this.keyboardClose=!0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onBackdropTap=function(){t.dismiss(void 0,g.a)}}return Object(d.a)(i,[{key:"connectedCallback",value:function(){Object(g.f)(this.el)}},{key:"componentWillLoad",value:function(){if(void 0===this.spinner){var i=Object(l.b)(this);this.spinner=l.c.get("loadingSpinner",l.c.get("spinner","ios"===i?"lines":"crescent"))}}},{key:"present",value:function(){var i=Object(r.a)(a.a.mark((function i(){var n=this;return a.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Object(g.e)(this,"loadingEnter",m,b,void 0);case 2:this.duration>0&&(this.durationTimeout=setTimeout((function(){return n.dismiss()}),this.duration+10));case 3:case"end":return i.stop()}}),i,this)})));return function(){return i.apply(this,arguments)}}()},{key:"dismiss",value:function(i,n){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(g.g)(this,i,n,"loadingLeave",f,y)}},{key:"onDidDismiss",value:function(){return Object(g.h)(this.el,"ionLoadingDidDismiss")}},{key:"onWillDismiss",value:function(){return Object(g.h)(this.el,"ionLoadingWillDismiss")}},{key:"render",value:function(){var i,n=this.message,t=this.spinner,o=Object(l.b)(this);return Object(c.j)(c.c,{onIonBackdropTap:this.onBackdropTap,tabindex:"-1",style:{zIndex:"".concat(4e4+this.overlayIndex)},class:Object.assign(Object.assign({},Object(h.b)(this.cssClass)),(i={},Object(e.a)(i,o,!0),Object(e.a)(i,"loading-translucent",this.translucent),i))},Object(c.j)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),Object(c.j)("div",{tabindex:"0"}),Object(c.j)("div",{class:"loading-wrapper ion-overlay-wrapper",role:"dialog"},t&&Object(c.j)("div",{class:"loading-spinner"},Object(c.j)("ion-spinner",{name:t,"aria-hidden":"true"})),n&&Object(c.j)("div",{class:"loading-content",innerHTML:Object(u.a)(n)})),Object(c.j)("div",{tabindex:"0"}))}},{key:"el",get:function(){return Object(c.k)(this)}}]),i}();v.style={ios:".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:flex;position:fixed;align-items:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;touch-action:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:flex;align-items:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-lines.sc-ion-loading-ios,.spinner-lines-small.sc-ion-loading-ios,.spinner-bubbles.sc-ion-loading-ios,.spinner-circles.sc-ion-loading-ios,.spinner-crescent.sc-ion-loading-ios,.spinner-dots.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, #f9f9f9));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600, #666666);--backdrop-opacity:var(--ion-backdrop-opacity, 0.3);color:var(--ion-text-color, #000);font-size:14px}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;padding-left:34px;padding-right:34px;padding-top:24px;padding-bottom:24px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.loading-wrapper.sc-ion-loading-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px}}@supports (backdrop-filter: blur(0)){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:bold}.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{margin-left:16px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}",md:".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:flex;position:fixed;align-items:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;touch-action:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:flex;align-items:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-lines.sc-ion-loading-md,.spinner-lines-small.sc-ion-loading-md,.spinner-bubbles.sc-ion-loading-md,.spinner-circles.sc-ion-loading-md,.spinner-crescent.sc-ion-loading-md,.spinner-dots.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50, #f2f2f2);--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary, #3880ff);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);color:var(--ion-color-step-850, #262626);font-size:14px}.loading-wrapper.sc-ion-loading-md{border-radius:2px;padding-left:24px;padding-right:24px;padding-top:24px;padding-bottom:24px;box-shadow:0 16px 20px rgba(0, 0, 0, 0.4)}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.loading-wrapper.sc-ion-loading-md{padding-left:unset;padding-right:unset;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px}}.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{margin-left:16px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}"}},132:function(i,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return c})),t.d(n,"c",(function(){return s})),t.d(n,"d",(function(){return p}));var e=t(2),o=t.n(e),a=t(5),r=t(16),s=function(i,n){return null!==n.closest(i)},d=function(i,n){return"string"===typeof i&&i.length>0?Object.assign(Object(r.a)({"ion-color":!0},"ion-color-".concat(i),!0),n):n},c=function(i){var n={};return function(i){return void 0!==i?(Array.isArray(i)?i:i.split(" ")).filter((function(i){return null!=i})).map((function(i){return i.trim()})).filter((function(i){return""!==i})):[]}(i).forEach((function(i){return n[i]=!0})),n},l=/^[a-z][a-z0-9+\-.]*:/,p=function(){var i=Object(a.a)(o.a.mark((function i(n,t,e,a){var r;return o.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(null==n||"#"===n[0]||l.test(n)){i.next=5;break}if(!(r=document.querySelector("ion-router"))){i.next=5;break}return null!=t&&t.preventDefault(),i.abrupt("return",r.push(n,e,a));case 5:return i.abrupt("return",!1);case 6:case"end":return i.stop()}}),i)})));return function(n,t,e,o){return i.apply(this,arguments)}}()}}]);
//# sourceMappingURL=28.5eb55721.chunk.js.map