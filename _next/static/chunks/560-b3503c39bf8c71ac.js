(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[560],{3393:function(t,e,i){!function(t,e,i){"use strict";function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=n(e),o=n(i);function s(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)}return i}function a(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(Object(i),!0).forEach(function(e){var n,r;n=e,r=i[e],(n=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,e||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function l(t,e){if(null==t)return{};var i,n,r=function(t,e){if(null==t)return{};var i,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)i=o[n],e.indexOf(i)>=0||(r[i]=t[i]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)i=o[n],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(r[i]=t[i])}return r}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=Array(e);i<e;i++)n[i]=t[i];return n}var u=["animationData","loop","autoplay","initialSegment","onComplete","onLoopComplete","onEnterFrame","onSegmentStart","onConfigReady","onDataReady","onDataFailed","onLoadedImages","onDOMLoaded","onDestroy","lottieRef","renderer","name","assetsPath","rendererSettings"],h=function(t,e){var n,s=t.animationData,h=t.loop,d=t.autoplay,p=t.initialSegment,m=t.onComplete,f=t.onLoopComplete,v=t.onEnterFrame,y=t.onSegmentStart,g=t.onConfigReady,S=t.onDataReady,w=t.onDataFailed,b=t.onLoadedImages,E=t.onDOMLoaded,L=t.onDestroy;t.lottieRef,t.renderer,t.name,t.assetsPath,t.rendererSettings;var T=l(t,u),_=function(t){if(Array.isArray(t))return t}(n=i.useState(!1))||function(t,e){var i=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=i){var n,r,o,s,a=[],l=!0,c=!1;try{for(o=(i=i.call(t)).next;!(l=(n=o.call(i)).done)&&(a.push(n.value),2!==a.length);l=!0);}catch(t){c=!0,r=t}finally{try{if(!l&&null!=i.return&&(s=i.return(),Object(s)!==s))return}finally{if(c)throw r}}return a}}(n,2)||function(t,e){if(t){if("string"==typeof t)return c(t,2);var i=Object.prototype.toString.call(t).slice(8,-1);if("Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return c(t,2)}}(n,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),O=_[0],R=_[1],z=i.useRef(),N=i.useRef(null),M=function(){var e,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(N.current){null===(e=z.current)||void 0===e||e.destroy();var n=a(a(a({},t),i),{},{container:N.current});return z.current=r.default.loadAnimation(n),R(!!z.current),function(){var t;null===(t=z.current)||void 0===t||t.destroy(),z.current=void 0}}};return i.useEffect(function(){var t=M();return function(){return null==t?void 0:t()}},[s,h]),i.useEffect(function(){z.current&&(z.current.autoplay=!!d)},[d]),i.useEffect(function(){if(z.current){if(!p){z.current.resetSegments(!0);return}Array.isArray(p)&&p.length&&((z.current.currentRawFrame<p[0]||z.current.currentRawFrame>p[1])&&(z.current.currentRawFrame=p[0]),z.current.setSegment(p[0],p[1]))}},[p]),i.useEffect(function(){var t=[{name:"complete",handler:m},{name:"loopComplete",handler:f},{name:"enterFrame",handler:v},{name:"segmentStart",handler:y},{name:"config_ready",handler:g},{name:"data_ready",handler:S},{name:"data_failed",handler:w},{name:"loaded_images",handler:b},{name:"DOMLoaded",handler:E},{name:"destroy",handler:L}].filter(function(t){return null!=t.handler});if(t.length){var e=t.map(function(t){var e;return null===(e=z.current)||void 0===e||e.addEventListener(t.name,t.handler),function(){var e;null===(e=z.current)||void 0===e||e.removeEventListener(t.name,t.handler)}});return function(){e.forEach(function(t){return t()})}}},[m,f,v,y,g,S,w,b,E,L]),{View:o.default.createElement("div",a({style:e,ref:N},T)),play:function(){var t;null===(t=z.current)||void 0===t||t.play()},stop:function(){var t;null===(t=z.current)||void 0===t||t.stop()},pause:function(){var t;null===(t=z.current)||void 0===t||t.pause()},setSpeed:function(t){var e;null===(e=z.current)||void 0===e||e.setSpeed(t)},goToAndStop:function(t,e){var i;null===(i=z.current)||void 0===i||i.goToAndStop(t,e)},goToAndPlay:function(t,e){var i;null===(i=z.current)||void 0===i||i.goToAndPlay(t,e)},setDirection:function(t){var e;null===(e=z.current)||void 0===e||e.setDirection(t)},playSegments:function(t,e){var i;null===(i=z.current)||void 0===i||i.playSegments(t,e)},setSubframe:function(t){var e;null===(e=z.current)||void 0===e||e.setSubframe(t)},getDuration:function(t){var e;return null===(e=z.current)||void 0===e?void 0:e.getDuration(t)},destroy:function(){var t;null===(t=z.current)||void 0===t||t.destroy(),z.current=void 0},animationContainerRef:N,animationLoaded:O,animationItem:z.current}},d=function(t){var e=t.wrapperRef,n=t.animationItem,r=t.mode,o=t.actions;i.useEffect(function(){var t,i,s,a,l,c=e.current;if(c&&n&&o.length)switch(n.stop(),r){case"scroll":return t=null,i=function(){var e,i,r,s=(i=(e=c.getBoundingClientRect()).top,r=e.height,(window.innerHeight-i)/(window.innerHeight+r)),a=o.find(function(t){var e=t.visibility;return e&&s>=e[0]&&s<=e[1]});if(a){if("seek"===a.type&&a.visibility&&2===a.frames.length){var l=a.frames[0]+Math.ceil((s-a.visibility[0])/(a.visibility[1]-a.visibility[0])*a.frames[1]);n.goToAndStop(l-n.firstFrame-1,!0)}"loop"===a.type&&(null===t?(n.playSegments(a.frames,!0),t=a.frames):t!==a.frames?(n.playSegments(a.frames,!0),t=a.frames):n.isPaused&&(n.playSegments(a.frames,!0),t=a.frames)),"play"===a.type&&n.isPaused&&(n.resetSegments(!0),n.play()),"stop"===a.type&&n.goToAndStop(a.frames[0]-n.firstFrame-1,!0)}},document.addEventListener("scroll",i),function(){document.removeEventListener("scroll",i)};case"cursor":return s=function(t,e){var i=t,r=e;if(-1!==i&&-1!==r){var s,a,l,u,h=(s=i,a=r,u=(l=c.getBoundingClientRect()).top,{x:(s-l.left)/l.width,y:(a-u)/l.height});i=h.x,r=h.y}var d=o.find(function(t){var e=t.position;return e&&Array.isArray(e.x)&&Array.isArray(e.y)?i>=e.x[0]&&i<=e.x[1]&&r>=e.y[0]&&r<=e.y[1]:!(!e||Number.isNaN(e.x)||Number.isNaN(e.y))&&i===e.x&&r===e.y});if(d){if("seek"===d.type&&d.position&&Array.isArray(d.position.x)&&Array.isArray(d.position.y)&&2===d.frames.length){var p=(i-d.position.x[0])/(d.position.x[1]-d.position.x[0]),m=(r-d.position.y[0])/(d.position.y[1]-d.position.y[0]);n.playSegments(d.frames,!0),n.goToAndStop(Math.ceil((p+m)/2*(d.frames[1]-d.frames[0])),!0)}"loop"===d.type&&n.playSegments(d.frames,!0),"play"===d.type&&(n.isPaused&&n.resetSegments(!1),n.playSegments(d.frames)),"stop"===d.type&&n.goToAndStop(d.frames[0],!0)}},a=function(t){s(t.clientX,t.clientY)},l=function(){s(-1,-1)},c.addEventListener("mousemove",a),c.addEventListener("mouseout",l),function(){c.removeEventListener("mousemove",a),c.removeEventListener("mouseout",l)}}},[r,n])},p=function(t){var e=t.actions,i=t.mode,n=t.lottieObj,r=n.animationItem,o=n.View;return d({actions:e,animationItem:r,mode:i,wrapperRef:n.animationContainerRef}),o},m=["style","interactivity"];Object.defineProperty(t,"LottiePlayer",{enumerable:!0,get:function(){return r.default}}),t.default=function(t){var e,n,r,o=t.style,s=t.interactivity,a=h(l(t,m),o),c=a.View,u=a.play,d=a.stop,f=a.pause,v=a.setSpeed,y=a.goToAndStop,g=a.goToAndPlay,S=a.setDirection,w=a.playSegments,b=a.setSubframe,E=a.getDuration,L=a.destroy,T=a.animationContainerRef,_=a.animationLoaded,O=a.animationItem;return i.useEffect(function(){t.lottieRef&&(t.lottieRef.current={play:u,stop:d,pause:f,setSpeed:v,goToAndPlay:g,goToAndStop:y,setDirection:S,playSegments:w,setSubframe:b,getDuration:E,destroy:L,animationContainerRef:T,animationLoaded:_,animationItem:O})},[null===(e=t.lottieRef)||void 0===e?void 0:e.current]),p({lottieObj:{View:c,play:u,stop:d,pause:f,setSpeed:v,goToAndStop:y,goToAndPlay:g,setDirection:S,playSegments:w,setSubframe:b,getDuration:E,destroy:L,animationContainerRef:T,animationLoaded:_,animationItem:O},actions:null!==(n=null==s?void 0:s.actions)&&void 0!==n?n:[],mode:null!==(r=null==s?void 0:s.mode)&&void 0!==r?r:"scroll"})},t.useLottie=h,t.useLottieInteractivity=p,Object.defineProperty(t,"__esModule",{value:!0})}(e,i(1451),i(2265))},7138:function(t,e,i){"use strict";i.d(e,{default:function(){return r.a}});var n=i(231),r=i.n(n)},6463:function(t,e,i){"use strict";var n=i(1169);i.o(n,"useParams")&&i.d(e,{useParams:function(){return n.useParams}}),i.o(n,"usePathname")&&i.d(e,{usePathname:function(){return n.usePathname}}),i.o(n,"useSearchParams")&&i.d(e,{useSearchParams:function(){return n.useSearchParams}})},8879:function(t,e,i){"use strict";i.d(e,{S1:function(){return o},ZT:function(){return n},jU:function(){return s},on:function(){return r}});var n=function(){};function r(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];t&&t.addEventListener&&t.addEventListener.apply(t,e)}function o(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];t&&t.removeEventListener&&t.removeEventListener.apply(t,e)}var s="undefined"!=typeof window},5225:function(t,e,i){"use strict";var n=i(2265),r=i(8879);e.Z=function(t,e,i){if(!r.jU)return[e,r.ZT,r.ZT];if(!t)throw Error("useLocalStorage key may not be falsy");var o=i?i.raw?function(t){return t}:i.deserializer:JSON.parse,s=(0,n.useRef)(function(t){try{var n=i?i.raw?String:i.serializer:JSON.stringify,r=localStorage.getItem(t);if(null!==r)return o(r);return e&&localStorage.setItem(t,n(e)),e}catch(t){return e}}),a=(0,n.useState)(function(){return s.current(t)}),l=a[0],c=a[1];(0,n.useLayoutEffect)(function(){return c(s.current(t))},[t]);var u=(0,n.useCallback)(function(e){try{var n="function"==typeof e?e(l):e;if(void 0===n)return;var r=void 0;r=i?i.raw?"string"==typeof n?n:JSON.stringify(n):i.serializer?i.serializer(n):JSON.stringify(n):JSON.stringify(n),localStorage.setItem(t,r),c(o(r))}catch(t){}},[t,c]);return[l,u,(0,n.useCallback)(function(){try{localStorage.removeItem(t),c(void 0)}catch(t){}},[t,c])]}},5563:function(t,e,i){"use strict";var n=i(2265),r=i(8879);e.Z=function(t,e){var i=(0,n.useState)(void 0!==e?e:!!r.jU&&window.matchMedia(t).matches),o=i[0],s=i[1];return(0,n.useEffect)(function(){var e=!0,i=window.matchMedia(t),n=function(){e&&s(!!i.matches)};return i.addEventListener("change",n),s(i.matches),function(){e=!1,i.removeEventListener("change",n)}},[t]),o}},8928:function(t,e,i){"use strict";i.d(e,{Z:function(){return l}});var n=i(2265),r=function(t){(0,n.useEffect)(t,[])},o=function(t){var e=(0,n.useRef)(t);e.current=t,r(function(){return function(){return e.current()}})},s=function(t){var e=(0,n.useRef)(0),i=(0,n.useState)(t),r=i[0],s=i[1],a=(0,n.useCallback)(function(t){cancelAnimationFrame(e.current),e.current=requestAnimationFrame(function(){s(t)})},[]);return o(function(){cancelAnimationFrame(e.current)}),[r,a]},a=i(8879),l=function(t,e){void 0===t&&(t=1/0),void 0===e&&(e=1/0);var i=s({width:a.jU?window.innerWidth:t,height:a.jU?window.innerHeight:e}),r=i[0],o=i[1];return(0,n.useEffect)(function(){if(a.jU){var t=function(){o({width:window.innerWidth,height:window.innerHeight})};return(0,a.on)(window,"resize",t),function(){(0,a.S1)(window,"resize",t)}}},[]),r}},4839:function(t,e,i){"use strict";e.Z=function(){for(var t,e,i=0,n="",r=arguments.length;i<r;i++)(t=arguments[i])&&(e=function t(e){var i,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e){if(Array.isArray(e)){var o=e.length;for(i=0;i<o;i++)e[i]&&(n=t(e[i]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n)}return r}(t))&&(n&&(n+=" "),n+=e);return n}},4108:function(t,e,i){"use strict";function n(t,e,i){return Math.max(t,Math.min(e,i))}i.d(e,{Z:function(){return c}});class r{advance(t){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=t;let i=n(0,this.currentTime/this.duration,1),r=(e=i>=1)?1:this.easing(i);this.value=this.from+(this.to-this.from)*r}else{var i,r,o;this.lerp?(this.value=(i=this.value,r=this.to,(1-(o=1-Math.exp(-(60*this.lerp)*t)))*i+o*r),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0)}e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(t,e,{lerp:i,duration:n,easing:r,onStart:o,onUpdate:s}){this.from=this.value=t,this.to=e,this.lerp=i,this.duration=n,this.easing=r,this.currentTime=0,this.isRunning=!0,o?.(),this.onUpdate=s}}class o{constructor({wrapper:t,content:e,autoResize:i=!0,debounce:n=250}={}){var r;let o;this.wrapper=t,this.content=e,i&&(this.debouncedResize=(r=this.resize,function(){let t=arguments,e=this;clearTimeout(o),o=setTimeout(function(){r.apply(e,t)},n)}),this.wrapper===window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),window.removeEventListener("resize",this.debouncedResize,!1)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper===window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class s{constructor(){this.events={}}emit(t,...e){let i=this.events[t]||[];for(let t=0,n=i.length;t<n;t++)i[t](...e)}on(t,e){return this.events[t]?.push(e)||(this.events[t]=[e]),()=>{this.events[t]=this.events[t]?.filter(t=>e!==t)}}off(t,e){this.events[t]=this.events[t]?.filter(t=>e!==t)}destroy(){this.events={}}}let a=100/6;class l{constructor(t,{wheelMultiplier:e=1,touchMultiplier:i=1}){this.element=t,this.wheelMultiplier=e,this.touchMultiplier=i,this.touchStart={x:null,y:null},this.emitter=new s,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}onTouchStart=t=>{let{clientX:e,clientY:i}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=e,this.touchStart.y=i,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:t})};onTouchMove=t=>{let{clientX:e,clientY:i}=t.targetTouches?t.targetTouches[0]:t,n=-(e-this.touchStart.x)*this.touchMultiplier,r=-(i-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=e,this.touchStart.y=i,this.lastDelta={x:n,y:r},this.emitter.emit("scroll",{deltaX:n,deltaY:r,event:t})};onTouchEnd=t=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t})};onWheel=t=>{let{deltaX:e,deltaY:i,deltaMode:n}=t;e*=1===n?a:2===n?this.windowWidth:1,i*=1===n?a:2===n?this.windowHeight:1,e*=this.wheelMultiplier,i*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:i,event:t})};onWindowResize=()=>{this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight}}class c{constructor({wrapper:t=window,content:e=document.documentElement,wheelEventsTarget:i=t,eventsTarget:n=i,smoothWheel:a=!0,syncTouch:c=!1,syncTouchLerp:u=.075,touchInertiaMultiplier:h=35,duration:d,easing:p=t=>Math.min(1,1.001-Math.pow(2,-10*t)),lerp:m=.1,infinite:f=!1,orientation:v="vertical",gestureOrientation:y="vertical",touchMultiplier:g=1,wheelMultiplier:S=1,autoResize:w=!0,prevent:b=!1,__experimental__naiveDimensions:E=!1}={}){this.__isScrolling=!1,this.__isStopped=!1,this.__isLocked=!1,this.direction=0,this.onVirtualScroll=({deltaX:t,deltaY:e,event:i})=>{if(i.ctrlKey)return;let n=i.type.includes("touch"),r=i.type.includes("wheel");if(this.isTouching="touchstart"===i.type||"touchmove"===i.type,this.options.syncTouch&&n&&"touchstart"===i.type&&!this.isStopped&&!this.isLocked)return void this.reset();let o="vertical"===this.options.gestureOrientation&&0===e||"horizontal"===this.options.gestureOrientation&&0===t;if(0===t&&0===e||o)return;let s=i.composedPath();s=s.slice(0,s.indexOf(this.rootElement));let a=this.options.prevent;if(s.find(t=>{var e,i,o,s,l;return t instanceof Element&&(("function"==typeof a?null==a?void 0:a(t):a)||(null===(e=t.hasAttribute)||void 0===e?void 0:e.call(t,"data-lenis-prevent"))||n&&(null===(i=t.hasAttribute)||void 0===i?void 0:i.call(t,"data-lenis-prevent-touch"))||r&&(null===(o=t.hasAttribute)||void 0===o?void 0:o.call(t,"data-lenis-prevent-wheel"))||(null===(s=t.classList)||void 0===s?void 0:s.contains("lenis"))&&!(null===(l=t.classList)||void 0===l?void 0:l.contains("lenis-stopped")))}))return;if(this.isStopped||this.isLocked)return void i.preventDefault();if(!(this.options.syncTouch&&n||this.options.smoothWheel&&r))return this.isScrolling="native",void this.animate.stop();i.preventDefault();let l=e;"both"===this.options.gestureOrientation?l=Math.abs(e)>Math.abs(t)?e:t:"horizontal"===this.options.gestureOrientation&&(l=t);let c=n&&this.options.syncTouch,u=n&&"touchend"===i.type&&Math.abs(l)>5;u&&(l=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+l,Object.assign({programmatic:!1},c?{lerp:u?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(clearTimeout(this.__resetVelocityTimeout),delete this.__resetVelocityTimeout,this.__preventNextNativeScrollEvent)delete this.__preventNextNativeScrollEvent;else if(!1===this.isScrolling||"native"===this.isScrolling){let t=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-t,this.direction=Math.sign(this.animatedScroll-t),this.isScrolling="native",this.emit(),0!==this.velocity&&(this.__resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}},window.lenisVersion="1.1.3",t&&t!==document.documentElement&&t!==document.body||(t=window),this.options={wrapper:t,content:e,wheelEventsTarget:i,eventsTarget:n,smoothWheel:a,syncTouch:c,syncTouchLerp:u,touchInertiaMultiplier:h,duration:d,easing:p,lerp:m,infinite:f,gestureOrientation:y,orientation:v,touchMultiplier:g,wheelMultiplier:S,autoResize:w,prevent:b,__experimental__naiveDimensions:E},this.animate=new r,this.emitter=new s,this.dimensions=new o({wrapper:t,content:e,autoResize:w}),this.updateClassName(),this.userData={},this.time=0,this.velocity=this.lastVelocity=0,this.isLocked=!1,this.isStopped=!1,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll=new l(n,{touchMultiplier:g,wheelMultiplier:S}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName()}on(t,e){return this.emitter.on(t,e)}off(t,e){return this.emitter.off(t,e)}setScroll(t){this.isHorizontal?this.rootElement.scrollLeft=t:this.rootElement.scrollTop=t}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(t){let e=t-(this.time||t);this.time=t,this.animate.advance(.001*e)}scrollTo(t,{offset:e=0,immediate:i=!1,lock:r=!1,duration:o=this.options.duration,easing:s=this.options.easing,lerp:a=this.options.lerp,onStart:l,onComplete:c,force:u=!1,programmatic:h=!0,userData:d={}}={}){if(!this.isStopped&&!this.isLocked||u){if("string"==typeof t&&["top","left","start"].includes(t))t=0;else if("string"==typeof t&&["bottom","right","end"].includes(t))t=this.limit;else{let i;if("string"==typeof t?i=document.querySelector(t):t instanceof HTMLElement&&(null==t?void 0:t.nodeType)&&(i=t),i){if(this.options.wrapper!==window){let t=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?t.left:t.top}let n=i.getBoundingClientRect();t=(this.isHorizontal?n.left:n.top)+this.animatedScroll}}if("number"==typeof t&&(t+=e,t=Math.round(t),this.options.infinite?h&&(this.targetScroll=this.animatedScroll=this.scroll):t=n(0,t,this.limit),t!==this.targetScroll)){if(this.userData=d,i)return this.animatedScroll=this.targetScroll=t,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),null==c||c(this),void(this.userData={});h||(this.targetScroll=t),this.animate.fromTo(this.animatedScroll,t,{duration:o,easing:s,lerp:a,onStart:()=>{r&&(this.isLocked=!0),this.isScrolling="smooth",null==l||l(this)},onUpdate:(t,e)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=t-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=t,this.setScroll(this.scroll),h&&(this.targetScroll=t),e||this.emit(),e&&(this.reset(),this.emit(),null==c||c(this),this.userData={},this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this.__preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{delete this.__preventNextNativeScrollEvent})}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return"horizontal"===this.options.orientation}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){var t;return this.options.infinite?(this.animatedScroll%(t=this.limit)+t)%t:this.animatedScroll}get progress(){return 0===this.limit?1:this.scroll/this.limit}get isScrolling(){return this.__isScrolling}set isScrolling(t){this.__isScrolling!==t&&(this.__isScrolling=t,this.updateClassName())}get isStopped(){return this.__isStopped}set isStopped(t){this.__isStopped!==t&&(this.__isStopped=t,this.updateClassName())}get isLocked(){return this.__isLocked}set isLocked(t){this.__isLocked!==t&&(this.__isLocked=t,this.updateClassName())}get isSmooth(){return"smooth"===this.isScrolling}get className(){let t="lenis";return this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),"smooth"===this.isScrolling&&(t+=" lenis-smooth"),t}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}}}}]);