(this.webpackJsonpbpc=this.webpackJsonpbpc||[]).push([[46],{100:function(i,n,t){"use strict";t.r(n),t.d(n,"ion_infinite_scroll",(function(){return h})),t.d(n,"ion_infinite_scroll_content",(function(){return p}));var e=t(16),r=t(2),s=t.n(r),o=t(5),l=t(7),c=t(9),a=t(17),d=t(19),f=t(44),h=function(){function i(n){var t=this;Object(l.a)(this,i),Object(a.o)(this,n),this.ionInfinite=Object(a.g)(this,"ionInfinite",7),this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.isLoading=!1,this.threshold="15%",this.disabled=!1,this.position="bottom",this.onScroll=function(){var i=t.scrollEl;if(!i||!t.canStart())return 1;var n=t.el.offsetHeight;if(0===n)return 2;var e=i.scrollTop,r=i.scrollHeight,s=i.offsetHeight,o=0!==t.thrPc?s*t.thrPc:t.thrPx;if(("bottom"===t.position?r-n-e-o-s:e-n-o)<0){if(!t.didFire)return t.isLoading=!0,t.didFire=!0,t.ionInfinite.emit(),3}else t.didFire=!1;return 4}}return Object(c.a)(i,[{key:"thresholdChanged",value:function(){var i=this.threshold;i.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(i)/100):(this.thrPx=parseFloat(i),this.thrPc=0)}},{key:"disabledChanged",value:function(){var i=this.disabled;i&&(this.isLoading=!1,this.isBusy=!1),this.enableScrollEvents(!i)}},{key:"connectedCallback",value:function(){var i=Object(o.a)(s.a.mark((function i(){var n,t=this;return s.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(n=this.el.closest("ion-content")){i.next=4;break}return console.error("<ion-infinite-scroll> must be used inside an <ion-content>"),i.abrupt("return");case 4:return i.next=6,n.getScrollElement();case 6:this.scrollEl=i.sent,this.thresholdChanged(),this.disabledChanged(),"top"===this.position&&Object(a.f)((function(){t.scrollEl&&(t.scrollEl.scrollTop=t.scrollEl.scrollHeight-t.scrollEl.clientHeight)}));case 10:case"end":return i.stop()}}),i,this)})));return function(){return i.apply(this,arguments)}}()},{key:"disconnectedCallback",value:function(){this.enableScrollEvents(!1),this.scrollEl=void 0}},{key:"complete",value:function(){var i=Object(o.a)(s.a.mark((function i(){var n,t,e=this;return s.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(n=this.scrollEl,this.isLoading&&n){i.next=3;break}return i.abrupt("return");case 3:this.isLoading=!1,"top"===this.position&&(this.isBusy=!0,t=n.scrollHeight-n.scrollTop,requestAnimationFrame((function(){Object(a.h)((function(){var i=n.scrollHeight-t;requestAnimationFrame((function(){Object(a.f)((function(){n.scrollTop=i,e.isBusy=!1}))}))}))})));case 5:case"end":return i.stop()}}),i,this)})));return function(){return i.apply(this,arguments)}}()},{key:"canStart",value:function(){return!this.disabled&&!this.isBusy&&!!this.scrollEl&&!this.isLoading}},{key:"enableScrollEvents",value:function(i){this.scrollEl&&(i?this.scrollEl.addEventListener("scroll",this.onScroll):this.scrollEl.removeEventListener("scroll",this.onScroll))}},{key:"render",value:function(){var i,n=Object(d.b)(this),t=this.disabled;return Object(a.j)(a.c,{class:(i={},Object(e.a)(i,n,!0),Object(e.a)(i,"infinite-scroll-loading",this.isLoading),Object(e.a)(i,"infinite-scroll-enabled",!t),i)})}},{key:"el",get:function(){return Object(a.k)(this)}}],[{key:"watchers",get:function(){return{threshold:["thresholdChanged"],disabled:["disabledChanged"]}}}]),i}();h.style="ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}";var p=function(){function i(n){Object(l.a)(this,i),Object(a.o)(this,n)}return Object(c.a)(i,[{key:"componentDidLoad",value:function(){if(void 0===this.loadingSpinner){var i=Object(d.b)(this);this.loadingSpinner=d.c.get("infiniteLoadingSpinner",d.c.get("spinner","ios"===i?"lines":"crescent"))}}},{key:"render",value:function(){var i,n=Object(d.b)(this);return Object(a.j)(a.c,{class:(i={},Object(e.a)(i,n,!0),Object(e.a)(i,"infinite-scroll-content-".concat(n),!0),i)},Object(a.j)("div",{class:"infinite-loading"},this.loadingSpinner&&Object(a.j)("div",{class:"infinite-loading-spinner"},Object(a.j)("ion-spinner",{name:this.loadingSpinner})),this.loadingText&&Object(a.j)("div",{class:"infinite-loading-text",innerHTML:Object(f.a)(this.loadingText)})))}}]),i}();p.style={ios:"ion-infinite-scroll-content{display:flex;flex-direction:column;justify-content:center;min-height:84px;text-align:center;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}",md:"ion-infinite-scroll-content{display:flex;flex-direction:column;justify-content:center;min-height:84px;text-align:center;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}"}}}]);
//# sourceMappingURL=46.2e6d5f77.chunk.js.map