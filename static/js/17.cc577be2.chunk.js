(this.webpackJsonpbpc=this.webpackJsonpbpc||[]).push([[17],{113:function(t,e,n){"use strict";n.r(e),n.d(e,"ion_reorder",(function(){return d})),n.d(e,"ion_reorder_group",(function(){return f}));var i=n(16),r=n(2),o=n.n(r),s=n(5),a=n(7),c=n(9),l=n(17),h=n(19),u=n(133),d=function(){function t(e){Object(a.a)(this,t),Object(l.o)(this,e)}return Object(c.a)(t,[{key:"onClick",value:function(t){var e=this.el.closest("ion-reorder-group");t.preventDefault(),e&&e.disabled||t.stopImmediatePropagation()}},{key:"render",value:function(){var t=Object(h.b)(this),e="ios"===t?"reorder-three-outline":"reorder-two-sharp";return Object(l.j)(l.c,{class:t},Object(l.j)("slot",null,Object(l.j)("ion-icon",{name:e,lazy:!1,class:"reorder-icon",part:"icon"})))}},{key:"el",get:function(){return Object(l.k)(this)}}]),t}();d.style={ios:":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:34px;opacity:0.4}",md:":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:31px;opacity:0.3}"};var f=function(){function t(e){Object(a.a)(this,t),Object(l.o)(this,e),this.ionItemReorder=Object(l.g)(this,"ionItemReorder",7),this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0}return Object(c.a)(t,[{key:"disabledChanged",value:function(){this.gesture&&this.gesture.enable(!this.disabled)}},{key:"connectedCallback",value:function(){var t=Object(s.a)(o.a.mark((function t(){var e,i=this;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=this.el.closest("ion-content"))){t.next=5;break}return t.next=4,e.getScrollElement();case 4:this.scrollEl=t.sent;case 5:return t.next=7,Promise.resolve().then(n.bind(null,42));case 7:this.gesture=t.sent.createGesture({el:this.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:!1,canStart:function(t){return i.canStart(t)},onStart:function(t){return i.onStart(t)},onMove:function(t){return i.onMove(t)},onEnd:function(){return i.onEnd()}}),this.disabledChanged();case 9:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"disconnectedCallback",value:function(){this.onEnd(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}},{key:"complete",value:function(t){return Promise.resolve(this.completeSync(t))}},{key:"canStart",value:function(t){if(this.selectedItemEl||0!==this.state)return!1;var e=t.event.target.closest("ion-reorder");if(!e)return!1;var n=v(e,this.el);return!!n&&(t.data=n,!0)}},{key:"onStart",value:function(t){t.event.preventDefault();var e=this.selectedItemEl=t.data,n=this.cachedHeights;n.length=0;var i=this.el,r=i.children;if(r&&0!==r.length){for(var o=0,s=0;s<r.length;s++){var a=r[s];o+=a.offsetHeight,n.push(o),a.$ionIndex=s}var c=i.getBoundingClientRect();if(this.containerTop=c.top,this.containerBottom=c.bottom,this.scrollEl){var l=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=l.top+g,this.scrollElBottom=l.bottom-g}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=p(e),this.selectedItemHeight=e.offsetHeight,this.state=1,e.classList.add(m),Object(u.a)()}}},{key:"onMove",value:function(t){var e=this.selectedItemEl;if(e){var n=this.autoscroll(t.currentY),i=this.containerTop-n,r=this.containerBottom-n,o=Math.max(i,Math.min(t.currentY,r)),s=n+o-t.startY,a=o-i,c=this.itemIndexForTop(a);if(c!==this.lastToIndex){var l=p(e);this.lastToIndex=c,Object(u.b)(),this.reorderMove(l,c)}e.style.transform="translateY(".concat(s,"px)")}}},{key:"onEnd",value:function(){var t=this.selectedItemEl;if(this.state=2,t){var e=this.lastToIndex,n=p(t);e===n?this.completeSync():this.ionItemReorder.emit({from:n,to:e,complete:this.completeSync.bind(this)}),Object(u.e)()}else this.state=0}},{key:"completeSync",value:function(t){var e=this.selectedItemEl;if(e&&2===this.state){var n=this.el.children,i=n.length,r=this.lastToIndex,o=p(e);if(r!==o&&(void 0===t||!0===t)){var s=o<r?n[r+1]:n[r];this.el.insertBefore(e,s)}Array.isArray(t)&&(t=y(t,o,r));for(var a=0;a<i;a++)n[a].style.transform="";e.style.transition="",e.classList.remove(m),this.selectedItemEl=void 0,this.state=0}return t}},{key:"itemIndexForTop",value:function(t){var e=this.cachedHeights,n=0;for(n=0;n<e.length&&!(e[n]>t);n++);return n}},{key:"reorderMove",value:function(t,e){for(var n=this.selectedItemHeight,i=this.el.children,r=0;r<i.length;r++){var o=i[r].style,s="";r>t&&r<=e?s="translateY(".concat(-n,"px)"):r<t&&r>=e&&(s="translateY(".concat(n,"px)")),o.transform=s}}},{key:"autoscroll",value:function(t){if(!this.scrollEl)return 0;var e=0;return t<this.scrollElTop?e=-b:t>this.scrollElBottom&&(e=b),0!==e&&this.scrollEl.scrollBy(0,e),this.scrollEl.scrollTop-this.scrollElInitial}},{key:"render",value:function(){var t,e=Object(h.b)(this);return Object(l.j)(l.c,{class:(t={},Object(i.a)(t,e,!0),Object(i.a)(t,"reorder-enabled",!this.disabled),Object(i.a)(t,"reorder-list-active",0!==this.state),t)})}},{key:"el",get:function(){return Object(l.k)(this)}}],[{key:"watchers",get:function(){return{disabled:["disabledChanged"]}}}]),t}(),p=function(t){return t.$ionIndex},v=function(t,e){for(var n;t;){if((n=t.parentElement)===e)return t;t=n}},g=60,b=10,m="reorder-selected",y=function(t,e,n){var i=t[e];return t.splice(e,1),t.splice(n,0,i),t.slice()};f.style=".reorder-list-active>*{transition:transform 300ms;will-change:transform}.reorder-enabled{user-select:none}.reorder-enabled ion-reorder{display:block;cursor:grab;pointer-events:all;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:grabbing}.reorder-selected{position:relative;transition:none !important;box-shadow:0 0 10px rgba(0, 0, 0, 0.4);opacity:0.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{transform:translate3d(0,  0,  0)}"},133:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return a}));var i={getEngine:function(){var t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(t){var e=this.getEngine();if(e){var n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})}},notification:function(t){var e=this.getEngine();if(e){var n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},r=function(){i.selection()},o=function(){i.selectionStart()},s=function(){i.selectionChanged()},a=function(){i.selectionEnd()},c=function(t){i.impact(t)}}}]);
//# sourceMappingURL=17.cc577be2.chunk.js.map