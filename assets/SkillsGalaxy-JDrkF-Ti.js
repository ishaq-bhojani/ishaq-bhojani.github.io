import{r as h,c as zt,u as Nt,s as Ie,j as v}from"./index-DiVj13-X.js";import{a as Q,u as Fe,b as Rt,V as _,c as F,d as Le,O as Te,R as It,S as dt,Q as ut,e as ye,T as xe,f as Ut,g as Bt,I as Ht,F as ft,h as tt,i as we,W as kt,B as it,j as Et,k as Wt,U as ht,l as pt,m as Ft,n as Se,L as Vt,M as Yt,o as Gt,p as Zt,C as $t}from"./constants-0AB08n6d.js";import{S as Xt}from"./Stars-BDhdb3W3.js";import{_ as We}from"./extends-CF3RwP-h.js";const De=new _,ot=new _,Kt=new _,mt=new F;function qt(r,n,i){const e=De.setFromMatrixPosition(r.matrixWorld);e.project(n);const o=i.width/2,s=i.height/2;return[e.x*o+o,-(e.y*s)+s]}function Qt(r,n){const i=De.setFromMatrixPosition(r.matrixWorld),e=ot.setFromMatrixPosition(n.matrixWorld),o=i.sub(e),s=n.getWorldDirection(Kt);return o.angleTo(s)>Math.PI/2}function Jt(r,n,i,e){const o=De.setFromMatrixPosition(r.matrixWorld),s=o.clone();s.project(n),mt.set(s.x,s.y),i.setFromCamera(mt,n);const p=i.intersectObjects(e,!0);if(p.length){const a=p[0].distance;return o.distanceTo(i.ray.origin)<a}return!0}function en(r,n){if(n instanceof Te)return n.zoom;if(n instanceof Le){const i=De.setFromMatrixPosition(r.matrixWorld),e=ot.setFromMatrixPosition(n.matrixWorld),o=n.fov*Math.PI/180,s=i.distanceTo(e);return 1/(2*Math.tan(o/2)*s)}else return 1}function tn(r,n,i){if(n instanceof Le||n instanceof Te){const e=De.setFromMatrixPosition(r.matrixWorld),o=ot.setFromMatrixPosition(n.matrixWorld),s=e.distanceTo(o),p=(i[1]-i[0])/(n.far-n.near),a=i[1]-p*n.far;return Math.round(p*s+a)}}const nt=r=>Math.abs(r)<1e-10?0:r;function Mt(r,n,i=""){let e="matrix3d(";for(let o=0;o!==16;o++)e+=nt(n[o]*r.elements[o])+(o!==15?",":")");return i+e}const nn=(r=>n=>Mt(n,r))([1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1]),on=(r=>(n,i)=>Mt(n,r(i),"translate(-50%,-50%)"))(r=>[1/r,1/r,1/r,1,-1/r,-1/r,-1/r,-1,1/r,1/r,1/r,1,1,1,1,1]);function sn(r){return r&&typeof r=="object"&&"current"in r}const Pt=h.forwardRef(({children:r,eps:n=.001,style:i,className:e,prepend:o,center:s,fullscreen:p,portal:a,distanceFactor:c,sprite:E=!1,transform:d=!1,occlude:f,onOcclude:S,castShadow:U,receiveShadow:j,material:T,geometry:L,zIndexRange:O=[16777271,0],calculatePosition:B=qt,as:g="div",wrapperClass:w,pointerEvents:P="auto",...b},re)=>{const{gl:W,camera:A,scene:y,size:D,raycaster:Ve,events:ee,viewport:Ee}=Q(),[z]=h.useState(()=>document.createElement(g)),me=h.useRef(),H=h.useRef(null),te=h.useRef(0),ae=h.useRef([0,0]),G=h.useRef(null),ue=h.useRef(null),ne=(a==null?void 0:a.current)||ee.connected||W.domElement.parentNode,V=h.useRef(null),fe=h.useRef(!1),ve=h.useMemo(()=>f&&f!=="blending"||Array.isArray(f)&&f.length&&sn(f[0]),[f]);h.useLayoutEffect(()=>{const k=W.domElement;f&&f==="blending"?(k.style.zIndex=`${Math.floor(O[0]/2)}`,k.style.position="absolute",k.style.pointerEvents="none"):(k.style.zIndex=null,k.style.position=null,k.style.pointerEvents=null)},[f]),h.useLayoutEffect(()=>{if(H.current){const k=me.current=zt(z);if(y.updateMatrixWorld(),d)z.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{const M=B(H.current,A,D);z.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${M[0]}px,${M[1]}px,0);transform-origin:0 0;`}return ne&&(o?ne.prepend(z):ne.appendChild(z)),()=>{ne&&ne.removeChild(z),k.unmount()}}},[ne,d]),h.useLayoutEffect(()=>{w&&(z.className=w)},[w]);const Me=h.useMemo(()=>d?{position:"absolute",top:0,left:0,width:D.width,height:D.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:s?"translate3d(-50%,-50%,0)":"none",...p&&{top:-D.height/2,left:-D.width/2,width:D.width,height:D.height},...i},[i,s,p,D,d]),Ye=h.useMemo(()=>({position:"absolute",pointerEvents:P}),[P]);h.useLayoutEffect(()=>{if(fe.current=!1,d){var k;(k=me.current)==null||k.render(h.createElement("div",{ref:G,style:Me},h.createElement("div",{ref:ue,style:Ye},h.createElement("div",{ref:re,className:e,style:i,children:r}))))}else{var M;(M=me.current)==null||M.render(h.createElement("div",{ref:re,style:Me,className:e,children:r}))}});const le=h.useRef(!0);Fe(k=>{if(H.current){A.updateMatrixWorld(),H.current.updateWorldMatrix(!0,!1);const M=d?ae.current:B(H.current,A,D);if(d||Math.abs(te.current-A.zoom)>n||Math.abs(ae.current[0]-M[0])>n||Math.abs(ae.current[1]-M[1])>n){const Z=Qt(H.current,A);let Y=!1;ve&&(Array.isArray(f)?Y=f.map($=>$.current):f!=="blending"&&(Y=[y]));const ce=le.current;if(Y){const $=Jt(H.current,A,Ve,Y);le.current=$&&!Z}else le.current=!Z;ce!==le.current&&(S?S(!le.current):z.style.display=le.current?"block":"none");const ge=Math.floor(O[0]/2),Ge=f?ve?[O[0],ge]:[ge-1,0]:O;if(z.style.zIndex=`${tn(H.current,A,Ge)}`,d){const[$,Pe]=[D.width/2,D.height/2],be=A.projectionMatrix.elements[5]*Pe,{isOrthographicCamera:ze,top:Ze,left:Ne,bottom:_e,right:he}=A,$e=nn(A.matrixWorldInverse),Xe=ze?`scale(${be})translate(${nt(-(he+Ne)/2)}px,${nt((Ze+_e)/2)}px)`:`translateZ(${be}px)`;let X=H.current.matrixWorld;E&&(X=A.matrixWorldInverse.clone().transpose().copyPosition(X).scale(H.current.scale),X.elements[3]=X.elements[7]=X.elements[11]=0,X.elements[15]=1),z.style.width=D.width+"px",z.style.height=D.height+"px",z.style.perspective=ze?"":`${be}px`,G.current&&ue.current&&(G.current.style.transform=`${Xe}${$e}translate(${$}px,${Pe}px)`,ue.current.style.transform=on(X,1/((c||10)/400)))}else{const $=c===void 0?1:en(H.current,A)*c;z.style.transform=`translate3d(${M[0]}px,${M[1]}px,0) scale(${$})`}ae.current=M,te.current=A.zoom}}if(!ve&&V.current&&!fe.current)if(d){if(G.current){const M=G.current.children[0];if(M!=null&&M.clientWidth&&M!=null&&M.clientHeight){const{isOrthographicCamera:Z}=A;if(Z||L)b.scale&&(Array.isArray(b.scale)?b.scale instanceof _?V.current.scale.copy(b.scale.clone().divideScalar(1)):V.current.scale.set(1/b.scale[0],1/b.scale[1],1/b.scale[2]):V.current.scale.setScalar(1/b.scale));else{const Y=(c||10)/400,ce=M.clientWidth*Y,ge=M.clientHeight*Y;V.current.scale.set(ce,ge,1)}fe.current=!0}}}else{const M=z.children[0];if(M!=null&&M.clientWidth&&M!=null&&M.clientHeight){const Z=1/Ee.factor,Y=M.clientWidth*Z,ce=M.clientHeight*Z;V.current.scale.set(Y,ce,1),fe.current=!0}V.current.lookAt(k.camera.position)}});const Ce=h.useMemo(()=>({vertexShader:d?void 0:`
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom"
            is false.
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;

            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `,fragmentShader:`
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `}),[d]);return h.createElement("group",We({},b,{ref:H}),f&&!ve&&h.createElement("mesh",{castShadow:U,receiveShadow:j,ref:V},L||h.createElement("planeGeometry",null),T||h.createElement("shaderMaterial",{side:Rt,vertexShader:Ce.vertexShader,fragmentShader:Ce.fragmentShader})))}),_t=parseInt(It.replace(/\D+/g,"")),At=_t>=125?"uv1":"uv2";var rn=Object.defineProperty,an=(r,n,i)=>n in r?rn(r,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[n]=i,ln=(r,n,i)=>(an(r,n+"",i),i);class cn{constructor(){ln(this,"_listeners")}addEventListener(n,i){this._listeners===void 0&&(this._listeners={});const e=this._listeners;e[n]===void 0&&(e[n]=[]),e[n].indexOf(i)===-1&&e[n].push(i)}hasEventListener(n,i){if(this._listeners===void 0)return!1;const e=this._listeners;return e[n]!==void 0&&e[n].indexOf(i)!==-1}removeEventListener(n,i){if(this._listeners===void 0)return;const o=this._listeners[n];if(o!==void 0){const s=o.indexOf(i);s!==-1&&o.splice(s,1)}}dispatchEvent(n){if(this._listeners===void 0)return;const e=this._listeners[n.type];if(e!==void 0){n.target=this;const o=e.slice(0);for(let s=0,p=o.length;s<p;s++)o[s].call(this,n);n.target=null}}}var dn=Object.defineProperty,un=(r,n,i)=>n in r?dn(r,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[n]=i,u=(r,n,i)=>(un(r,typeof n!="symbol"?n+"":n,i),i);const Ue=new Ut,vt=new Bt,fn=Math.cos(70*(Math.PI/180)),gt=(r,n)=>(r%n+n)%n;let hn=class extends cn{constructor(n,i){super(),u(this,"object"),u(this,"domElement"),u(this,"enabled",!0),u(this,"target",new _),u(this,"minDistance",0),u(this,"maxDistance",1/0),u(this,"minZoom",0),u(this,"maxZoom",1/0),u(this,"minPolarAngle",0),u(this,"maxPolarAngle",Math.PI),u(this,"minAzimuthAngle",-1/0),u(this,"maxAzimuthAngle",1/0),u(this,"enableDamping",!1),u(this,"dampingFactor",.05),u(this,"enableZoom",!0),u(this,"zoomSpeed",1),u(this,"enableRotate",!0),u(this,"rotateSpeed",1),u(this,"enablePan",!0),u(this,"panSpeed",1),u(this,"screenSpacePanning",!0),u(this,"keyPanSpeed",7),u(this,"zoomToCursor",!1),u(this,"autoRotate",!1),u(this,"autoRotateSpeed",2),u(this,"reverseOrbit",!1),u(this,"reverseHorizontalOrbit",!1),u(this,"reverseVerticalOrbit",!1),u(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),u(this,"mouseButtons",{LEFT:ye.ROTATE,MIDDLE:ye.DOLLY,RIGHT:ye.PAN}),u(this,"touches",{ONE:xe.ROTATE,TWO:xe.DOLLY_PAN}),u(this,"target0"),u(this,"position0"),u(this,"zoom0"),u(this,"_domElementKeyEvents",null),u(this,"getPolarAngle"),u(this,"getAzimuthalAngle"),u(this,"setPolarAngle"),u(this,"setAzimuthalAngle"),u(this,"getDistance"),u(this,"getZoomScale"),u(this,"listenToKeyEvents"),u(this,"stopListenToKeyEvents"),u(this,"saveState"),u(this,"reset"),u(this,"update"),u(this,"connect"),u(this,"dispose"),u(this,"dollyIn"),u(this,"dollyOut"),u(this,"getScale"),u(this,"setScale"),this.object=n,this.domElement=i,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>d.phi,this.getAzimuthalAngle=()=>d.theta,this.setPolarAngle=t=>{let l=gt(t,2*Math.PI),m=d.phi;m<0&&(m+=2*Math.PI),l<0&&(l+=2*Math.PI);let x=Math.abs(l-m);2*Math.PI-x<x&&(l<m?l+=2*Math.PI:m+=2*Math.PI),f.phi=l-m,e.update()},this.setAzimuthalAngle=t=>{let l=gt(t,2*Math.PI),m=d.theta;m<0&&(m+=2*Math.PI),l<0&&(l+=2*Math.PI);let x=Math.abs(l-m);2*Math.PI-x<x&&(l<m?l+=2*Math.PI:m+=2*Math.PI),f.theta=l-m,e.update()},this.getDistance=()=>e.object.position.distanceTo(e.target),this.listenToKeyEvents=t=>{t.addEventListener("keydown",Ke),this._domElementKeyEvents=t},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",Ke),this._domElementKeyEvents=null},this.saveState=()=>{e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=()=>{e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(o),e.update(),c=a.NONE},this.update=(()=>{const t=new _,l=new _(0,1,0),m=new ut().setFromUnitVectors(n.up,l),x=m.clone().invert(),C=new _,ie=new ut,de=2*Math.PI;return function(){const ct=e.object.position;m.setFromUnitVectors(n.up,l),x.copy(m).invert(),t.copy(ct).sub(e.target),t.applyQuaternion(m),d.setFromVector3(t),e.autoRotate&&c===a.NONE&&Ee(Ve()),e.enableDamping?(d.theta+=f.theta*e.dampingFactor,d.phi+=f.phi*e.dampingFactor):(d.theta+=f.theta,d.phi+=f.phi);let oe=e.minAzimuthAngle,se=e.maxAzimuthAngle;isFinite(oe)&&isFinite(se)&&(oe<-Math.PI?oe+=de:oe>Math.PI&&(oe-=de),se<-Math.PI?se+=de:se>Math.PI&&(se-=de),oe<=se?d.theta=Math.max(oe,Math.min(se,d.theta)):d.theta=d.theta>(oe+se)/2?Math.max(oe,d.theta):Math.min(se,d.theta)),d.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,d.phi)),d.makeSafe(),e.enableDamping===!0?e.target.addScaledVector(U,e.dampingFactor):e.target.add(U),e.zoomToCursor&&A||e.object.isOrthographicCamera?d.radius=V(d.radius):d.radius=V(d.radius*S),t.setFromSpherical(d),t.applyQuaternion(x),ct.copy(e.target).add(t),e.object.matrixAutoUpdate||e.object.updateMatrix(),e.object.lookAt(e.target),e.enableDamping===!0?(f.theta*=1-e.dampingFactor,f.phi*=1-e.dampingFactor,U.multiplyScalar(1-e.dampingFactor)):(f.set(0,0,0),U.set(0,0,0));let Ae=!1;if(e.zoomToCursor&&A){let Oe=null;if(e.object instanceof Le&&e.object.isPerspectiveCamera){const je=t.length();Oe=V(je*S);const Re=je-Oe;e.object.position.addScaledVector(re,Re),e.object.updateMatrixWorld()}else if(e.object.isOrthographicCamera){const je=new _(W.x,W.y,0);je.unproject(e.object),e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/S)),e.object.updateProjectionMatrix(),Ae=!0;const Re=new _(W.x,W.y,0);Re.unproject(e.object),e.object.position.sub(Re).add(je),e.object.updateMatrixWorld(),Oe=t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),e.zoomToCursor=!1;Oe!==null&&(e.screenSpacePanning?e.target.set(0,0,-1).transformDirection(e.object.matrix).multiplyScalar(Oe).add(e.object.position):(Ue.origin.copy(e.object.position),Ue.direction.set(0,0,-1).transformDirection(e.object.matrix),Math.abs(e.object.up.dot(Ue.direction))<fn?n.lookAt(e.target):(vt.setFromNormalAndCoplanarPoint(e.object.up,e.target),Ue.intersectPlane(vt,e.target))))}else e.object instanceof Te&&e.object.isOrthographicCamera&&(Ae=S!==1,Ae&&(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/S)),e.object.updateProjectionMatrix()));return S=1,A=!1,Ae||C.distanceToSquared(e.object.position)>E||8*(1-ie.dot(e.object.quaternion))>E?(e.dispatchEvent(o),C.copy(e.object.position),ie.copy(e.object.quaternion),Ae=!1,!0):!1}})(),this.connect=t=>{e.domElement=t,e.domElement.style.touchAction="none",e.domElement.addEventListener("contextmenu",at),e.domElement.addEventListener("pointerdown",Ne),e.domElement.addEventListener("pointercancel",he),e.domElement.addEventListener("wheel",X)},this.dispose=()=>{var t,l,m,x,C,ie;e.domElement&&(e.domElement.style.touchAction="auto"),(t=e.domElement)==null||t.removeEventListener("contextmenu",at),(l=e.domElement)==null||l.removeEventListener("pointerdown",Ne),(m=e.domElement)==null||m.removeEventListener("pointercancel",he),(x=e.domElement)==null||x.removeEventListener("wheel",X),(C=e.domElement)==null||C.ownerDocument.removeEventListener("pointermove",_e),(ie=e.domElement)==null||ie.ownerDocument.removeEventListener("pointerup",he),e._domElementKeyEvents!==null&&e._domElementKeyEvents.removeEventListener("keydown",Ke)};const e=this,o={type:"change"},s={type:"start"},p={type:"end"},a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let c=a.NONE;const E=1e-6,d=new dt,f=new dt;let S=1;const U=new _,j=new F,T=new F,L=new F,O=new F,B=new F,g=new F,w=new F,P=new F,b=new F,re=new _,W=new F;let A=!1;const y=[],D={};function Ve(){return 2*Math.PI/60/60*e.autoRotateSpeed}function ee(){return Math.pow(.95,e.zoomSpeed)}function Ee(t){e.reverseOrbit||e.reverseHorizontalOrbit?f.theta+=t:f.theta-=t}function z(t){e.reverseOrbit||e.reverseVerticalOrbit?f.phi+=t:f.phi-=t}const me=(()=>{const t=new _;return function(m,x){t.setFromMatrixColumn(x,0),t.multiplyScalar(-m),U.add(t)}})(),H=(()=>{const t=new _;return function(m,x){e.screenSpacePanning===!0?t.setFromMatrixColumn(x,1):(t.setFromMatrixColumn(x,0),t.crossVectors(e.object.up,t)),t.multiplyScalar(m),U.add(t)}})(),te=(()=>{const t=new _;return function(m,x){const C=e.domElement;if(C&&e.object instanceof Le&&e.object.isPerspectiveCamera){const ie=e.object.position;t.copy(ie).sub(e.target);let de=t.length();de*=Math.tan(e.object.fov/2*Math.PI/180),me(2*m*de/C.clientHeight,e.object.matrix),H(2*x*de/C.clientHeight,e.object.matrix)}else C&&e.object instanceof Te&&e.object.isOrthographicCamera?(me(m*(e.object.right-e.object.left)/e.object.zoom/C.clientWidth,e.object.matrix),H(x*(e.object.top-e.object.bottom)/e.object.zoom/C.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}})();function ae(t){e.object instanceof Le&&e.object.isPerspectiveCamera||e.object instanceof Te&&e.object.isOrthographicCamera?S=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function G(t){ae(S/t)}function ue(t){ae(S*t)}function ne(t){if(!e.zoomToCursor||!e.domElement)return;A=!0;const l=e.domElement.getBoundingClientRect(),m=t.clientX-l.left,x=t.clientY-l.top,C=l.width,ie=l.height;W.x=m/C*2-1,W.y=-(x/ie)*2+1,re.set(W.x,W.y,1).unproject(e.object).sub(e.object.position).normalize()}function V(t){return Math.max(e.minDistance,Math.min(e.maxDistance,t))}function fe(t){j.set(t.clientX,t.clientY)}function ve(t){ne(t),w.set(t.clientX,t.clientY)}function Me(t){O.set(t.clientX,t.clientY)}function Ye(t){T.set(t.clientX,t.clientY),L.subVectors(T,j).multiplyScalar(e.rotateSpeed);const l=e.domElement;l&&(Ee(2*Math.PI*L.x/l.clientHeight),z(2*Math.PI*L.y/l.clientHeight)),j.copy(T),e.update()}function le(t){P.set(t.clientX,t.clientY),b.subVectors(P,w),b.y>0?G(ee()):b.y<0&&ue(ee()),w.copy(P),e.update()}function Ce(t){B.set(t.clientX,t.clientY),g.subVectors(B,O).multiplyScalar(e.panSpeed),te(g.x,g.y),O.copy(B),e.update()}function k(t){ne(t),t.deltaY<0?ue(ee()):t.deltaY>0&&G(ee()),e.update()}function M(t){let l=!1;switch(t.code){case e.keys.UP:te(0,e.keyPanSpeed),l=!0;break;case e.keys.BOTTOM:te(0,-e.keyPanSpeed),l=!0;break;case e.keys.LEFT:te(e.keyPanSpeed,0),l=!0;break;case e.keys.RIGHT:te(-e.keyPanSpeed,0),l=!0;break}l&&(t.preventDefault(),e.update())}function Z(){if(y.length==1)j.set(y[0].pageX,y[0].pageY);else{const t=.5*(y[0].pageX+y[1].pageX),l=.5*(y[0].pageY+y[1].pageY);j.set(t,l)}}function Y(){if(y.length==1)O.set(y[0].pageX,y[0].pageY);else{const t=.5*(y[0].pageX+y[1].pageX),l=.5*(y[0].pageY+y[1].pageY);O.set(t,l)}}function ce(){const t=y[0].pageX-y[1].pageX,l=y[0].pageY-y[1].pageY,m=Math.sqrt(t*t+l*l);w.set(0,m)}function ge(){e.enableZoom&&ce(),e.enablePan&&Y()}function Ge(){e.enableZoom&&ce(),e.enableRotate&&Z()}function $(t){if(y.length==1)T.set(t.pageX,t.pageY);else{const m=qe(t),x=.5*(t.pageX+m.x),C=.5*(t.pageY+m.y);T.set(x,C)}L.subVectors(T,j).multiplyScalar(e.rotateSpeed);const l=e.domElement;l&&(Ee(2*Math.PI*L.x/l.clientHeight),z(2*Math.PI*L.y/l.clientHeight)),j.copy(T)}function Pe(t){if(y.length==1)B.set(t.pageX,t.pageY);else{const l=qe(t),m=.5*(t.pageX+l.x),x=.5*(t.pageY+l.y);B.set(m,x)}g.subVectors(B,O).multiplyScalar(e.panSpeed),te(g.x,g.y),O.copy(B)}function be(t){const l=qe(t),m=t.pageX-l.x,x=t.pageY-l.y,C=Math.sqrt(m*m+x*x);P.set(0,C),b.set(0,Math.pow(P.y/w.y,e.zoomSpeed)),G(b.y),w.copy(P)}function ze(t){e.enableZoom&&be(t),e.enablePan&&Pe(t)}function Ze(t){e.enableZoom&&be(t),e.enableRotate&&$(t)}function Ne(t){var l,m;e.enabled!==!1&&(y.length===0&&((l=e.domElement)==null||l.ownerDocument.addEventListener("pointermove",_e),(m=e.domElement)==null||m.ownerDocument.addEventListener("pointerup",he)),Dt(t),t.pointerType==="touch"?Lt(t):$e(t))}function _e(t){e.enabled!==!1&&(t.pointerType==="touch"?Tt(t):Xe(t))}function he(t){var l,m,x;Ct(t),y.length===0&&((l=e.domElement)==null||l.releasePointerCapture(t.pointerId),(m=e.domElement)==null||m.ownerDocument.removeEventListener("pointermove",_e),(x=e.domElement)==null||x.ownerDocument.removeEventListener("pointerup",he)),e.dispatchEvent(p),c=a.NONE}function $e(t){let l;switch(t.button){case 0:l=e.mouseButtons.LEFT;break;case 1:l=e.mouseButtons.MIDDLE;break;case 2:l=e.mouseButtons.RIGHT;break;default:l=-1}switch(l){case ye.DOLLY:if(e.enableZoom===!1)return;ve(t),c=a.DOLLY;break;case ye.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enablePan===!1)return;Me(t),c=a.PAN}else{if(e.enableRotate===!1)return;fe(t),c=a.ROTATE}break;case ye.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enableRotate===!1)return;fe(t),c=a.ROTATE}else{if(e.enablePan===!1)return;Me(t),c=a.PAN}break;default:c=a.NONE}c!==a.NONE&&e.dispatchEvent(s)}function Xe(t){if(e.enabled!==!1)switch(c){case a.ROTATE:if(e.enableRotate===!1)return;Ye(t);break;case a.DOLLY:if(e.enableZoom===!1)return;le(t);break;case a.PAN:if(e.enablePan===!1)return;Ce(t);break}}function X(t){e.enabled===!1||e.enableZoom===!1||c!==a.NONE&&c!==a.ROTATE||(t.preventDefault(),e.dispatchEvent(s),k(t),e.dispatchEvent(p))}function Ke(t){e.enabled===!1||e.enablePan===!1||M(t)}function Lt(t){switch(lt(t),y.length){case 1:switch(e.touches.ONE){case xe.ROTATE:if(e.enableRotate===!1)return;Z(),c=a.TOUCH_ROTATE;break;case xe.PAN:if(e.enablePan===!1)return;Y(),c=a.TOUCH_PAN;break;default:c=a.NONE}break;case 2:switch(e.touches.TWO){case xe.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;ge(),c=a.TOUCH_DOLLY_PAN;break;case xe.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Ge(),c=a.TOUCH_DOLLY_ROTATE;break;default:c=a.NONE}break;default:c=a.NONE}c!==a.NONE&&e.dispatchEvent(s)}function Tt(t){switch(lt(t),c){case a.TOUCH_ROTATE:if(e.enableRotate===!1)return;$(t),e.update();break;case a.TOUCH_PAN:if(e.enablePan===!1)return;Pe(t),e.update();break;case a.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;ze(t),e.update();break;case a.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Ze(t),e.update();break;default:c=a.NONE}}function at(t){e.enabled!==!1&&t.preventDefault()}function Dt(t){y.push(t)}function Ct(t){delete D[t.pointerId];for(let l=0;l<y.length;l++)if(y[l].pointerId==t.pointerId){y.splice(l,1);return}}function lt(t){let l=D[t.pointerId];l===void 0&&(l=new F,D[t.pointerId]=l),l.set(t.pageX,t.pageY)}function qe(t){const l=t.pointerId===y[0].pointerId?y[1]:y[0];return D[l.pointerId]}this.dollyIn=(t=ee())=>{ue(t),e.update()},this.dollyOut=(t=ee())=>{G(t),e.update()},this.getScale=()=>S,this.setScale=t=>{ae(t),e.update()},this.getZoomScale=()=>ee(),i!==void 0&&this.connect(i),this.update()}};const bt=new it,Be=new _;class st extends Ht{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const n=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],i=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],e=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(e),this.setAttribute("position",new ft(n,3)),this.setAttribute("uv",new ft(i,2))}applyMatrix4(n){const i=this.attributes.instanceStart,e=this.attributes.instanceEnd;return i!==void 0&&(i.applyMatrix4(n),e.applyMatrix4(n),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(n){let i;n instanceof Float32Array?i=n:Array.isArray(n)&&(i=new Float32Array(n));const e=new tt(i,6,1);return this.setAttribute("instanceStart",new we(e,3,0)),this.setAttribute("instanceEnd",new we(e,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(n,i=3){let e;n instanceof Float32Array?e=n:Array.isArray(n)&&(e=new Float32Array(n));const o=new tt(e,i*2,1);return this.setAttribute("instanceColorStart",new we(o,i,0)),this.setAttribute("instanceColorEnd",new we(o,i,i)),this}fromWireframeGeometry(n){return this.setPositions(n.attributes.position.array),this}fromEdgesGeometry(n){return this.setPositions(n.attributes.position.array),this}fromMesh(n){return this.fromWireframeGeometry(new kt(n.geometry)),this}fromLineSegments(n){const i=n.geometry;return this.setPositions(i.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new it);const n=this.attributes.instanceStart,i=this.attributes.instanceEnd;n!==void 0&&i!==void 0&&(this.boundingBox.setFromBufferAttribute(n),bt.setFromBufferAttribute(i),this.boundingBox.union(bt))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Et),this.boundingBox===null&&this.computeBoundingBox();const n=this.attributes.instanceStart,i=this.attributes.instanceEnd;if(n!==void 0&&i!==void 0){const e=this.boundingSphere.center;this.boundingBox.getCenter(e);let o=0;for(let s=0,p=n.count;s<p;s++)Be.fromBufferAttribute(n,s),o=Math.max(o,e.distanceToSquared(Be)),Be.fromBufferAttribute(i,s),o=Math.max(o,e.distanceToSquared(Be));this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(n){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(n)}}class Ot extends st{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(n){const i=n.length-3,e=new Float32Array(2*i);for(let o=0;o<i;o+=3)e[2*o]=n[o],e[2*o+1]=n[o+1],e[2*o+2]=n[o+2],e[2*o+3]=n[o+3],e[2*o+4]=n[o+4],e[2*o+5]=n[o+5];return super.setPositions(e),this}setColors(n,i=3){const e=n.length-i,o=new Float32Array(2*e);if(i===3)for(let s=0;s<e;s+=i)o[2*s]=n[s],o[2*s+1]=n[s+1],o[2*s+2]=n[s+2],o[2*s+3]=n[s+3],o[2*s+4]=n[s+4],o[2*s+5]=n[s+5];else for(let s=0;s<e;s+=i)o[2*s]=n[s],o[2*s+1]=n[s+1],o[2*s+2]=n[s+2],o[2*s+3]=n[s+3],o[2*s+4]=n[s+4],o[2*s+5]=n[s+5],o[2*s+6]=n[s+6],o[2*s+7]=n[s+7];return super.setColors(o,i),this}fromLine(n){const i=n.geometry;return this.setPositions(i.attributes.position.array),this}}class rt extends Wt{constructor(n){super({type:"LineMaterial",uniforms:ht.clone(ht.merge([pt.common,pt.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new F(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${_t>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(i){this.uniforms.diffuse.value=i}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(i){i===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(i){this.uniforms.linewidth.value=i}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(i){!!i!="USE_DASH"in this.defines&&(this.needsUpdate=!0),i===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(i){this.uniforms.dashScale.value=i}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(i){this.uniforms.dashSize.value=i}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(i){this.uniforms.dashOffset.value=i}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(i){this.uniforms.gapSize.value=i}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(i){this.uniforms.opacity.value=i}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(i){this.uniforms.resolution.value.copy(i)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(i){!!i!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),i===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(n)}}const Qe=new Se,yt=new _,xt=new _,N=new Se,R=new Se,K=new Se,Je=new _,et=new Yt,I=new Vt,wt=new _,He=new it,ke=new Et,q=new Se;let J,pe;function St(r,n,i){return q.set(0,0,-n,1).applyMatrix4(r.projectionMatrix),q.multiplyScalar(1/q.w),q.x=pe/i.width,q.y=pe/i.height,q.applyMatrix4(r.projectionMatrixInverse),q.multiplyScalar(1/q.w),Math.abs(Math.max(q.x,q.y))}function pn(r,n){const i=r.matrixWorld,e=r.geometry,o=e.attributes.instanceStart,s=e.attributes.instanceEnd,p=Math.min(e.instanceCount,o.count);for(let a=0,c=p;a<c;a++){I.start.fromBufferAttribute(o,a),I.end.fromBufferAttribute(s,a),I.applyMatrix4(i);const E=new _,d=new _;J.distanceSqToSegment(I.start,I.end,d,E),d.distanceTo(E)<pe*.5&&n.push({point:d,pointOnLine:E,distance:J.origin.distanceTo(d),object:r,face:null,faceIndex:a,uv:null,[At]:null})}}function mn(r,n,i){const e=n.projectionMatrix,s=r.material.resolution,p=r.matrixWorld,a=r.geometry,c=a.attributes.instanceStart,E=a.attributes.instanceEnd,d=Math.min(a.instanceCount,c.count),f=-n.near;J.at(1,K),K.w=1,K.applyMatrix4(n.matrixWorldInverse),K.applyMatrix4(e),K.multiplyScalar(1/K.w),K.x*=s.x/2,K.y*=s.y/2,K.z=0,Je.copy(K),et.multiplyMatrices(n.matrixWorldInverse,p);for(let S=0,U=d;S<U;S++){if(N.fromBufferAttribute(c,S),R.fromBufferAttribute(E,S),N.w=1,R.w=1,N.applyMatrix4(et),R.applyMatrix4(et),N.z>f&&R.z>f)continue;if(N.z>f){const g=N.z-R.z,w=(N.z-f)/g;N.lerp(R,w)}else if(R.z>f){const g=R.z-N.z,w=(R.z-f)/g;R.lerp(N,w)}N.applyMatrix4(e),R.applyMatrix4(e),N.multiplyScalar(1/N.w),R.multiplyScalar(1/R.w),N.x*=s.x/2,N.y*=s.y/2,R.x*=s.x/2,R.y*=s.y/2,I.start.copy(N),I.start.z=0,I.end.copy(R),I.end.z=0;const T=I.closestPointToPointParameter(Je,!0);I.at(T,wt);const L=Gt.lerp(N.z,R.z,T),O=L>=-1&&L<=1,B=Je.distanceTo(wt)<pe*.5;if(O&&B){I.start.fromBufferAttribute(c,S),I.end.fromBufferAttribute(E,S),I.start.applyMatrix4(p),I.end.applyMatrix4(p);const g=new _,w=new _;J.distanceSqToSegment(I.start,I.end,w,g),i.push({point:w,pointOnLine:g,distance:J.origin.distanceTo(w),object:r,face:null,faceIndex:S,uv:null,[At]:null})}}}class jt extends Ft{constructor(n=new st,i=new rt({color:Math.random()*16777215})){super(n,i),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const n=this.geometry,i=n.attributes.instanceStart,e=n.attributes.instanceEnd,o=new Float32Array(2*i.count);for(let p=0,a=0,c=i.count;p<c;p++,a+=2)yt.fromBufferAttribute(i,p),xt.fromBufferAttribute(e,p),o[a]=a===0?0:o[a-1],o[a+1]=o[a]+yt.distanceTo(xt);const s=new tt(o,2,1);return n.setAttribute("instanceDistanceStart",new we(s,1,0)),n.setAttribute("instanceDistanceEnd",new we(s,1,1)),this}raycast(n,i){const e=this.material.worldUnits,o=n.camera;o===null&&!e&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=n.params.Line2!==void 0&&n.params.Line2.threshold||0;J=n.ray;const p=this.matrixWorld,a=this.geometry,c=this.material;pe=c.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),ke.copy(a.boundingSphere).applyMatrix4(p);let E;if(e)E=pe*.5;else{const f=Math.max(o.near,ke.distanceToPoint(J.origin));E=St(o,f,c.resolution)}if(ke.radius+=E,J.intersectsSphere(ke)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),He.copy(a.boundingBox).applyMatrix4(p);let d;if(e)d=pe*.5;else{const f=Math.max(o.near,He.distanceToPoint(J.origin));d=St(o,f,c.resolution)}He.expandByScalar(d),J.intersectsBox(He)!==!1&&(e?pn(this,i):mn(this,o,i))}onBeforeRender(n){const i=this.material.uniforms;i&&i.resolution&&(n.getViewport(Qe),this.material.uniforms.resolution.value.set(Qe.z,Qe.w))}}class vn extends jt{constructor(n=new Ot,i=new rt({color:Math.random()*16777215})){super(n,i),this.isLine2=!0,this.type="Line2"}}const gn=h.forwardRef(function({points:n,color:i=16777215,vertexColors:e,linewidth:o,lineWidth:s,segments:p,dashed:a,...c},E){var d,f;const S=Q(O=>O.size),U=h.useMemo(()=>p?new jt:new vn,[p]),[j]=h.useState(()=>new rt),T=(e==null||(d=e[0])==null?void 0:d.length)===4?4:3,L=h.useMemo(()=>{const O=p?new st:new Ot,B=n.map(g=>{const w=Array.isArray(g);return g instanceof _||g instanceof Se?[g.x,g.y,g.z]:g instanceof F?[g.x,g.y,0]:w&&g.length===3?[g[0],g[1],g[2]]:w&&g.length===2?[g[0],g[1],0]:g});if(O.setPositions(B.flat()),e){i=16777215;const g=e.map(w=>w instanceof Zt?w.toArray():w);O.setColors(g.flat(),T)}return O},[n,p,e,T]);return h.useLayoutEffect(()=>{U.computeLineDistances()},[n,U]),h.useLayoutEffect(()=>{a?j.defines.USE_DASH="":delete j.defines.USE_DASH,j.needsUpdate=!0},[a,j]),h.useEffect(()=>()=>{L.dispose(),j.dispose()},[L]),h.createElement("primitive",We({object:U,ref:E},c),h.createElement("primitive",{object:L,attach:"geometry"}),h.createElement("primitive",We({object:j,attach:"material",color:i,vertexColors:!!e,resolution:[S.width,S.height],linewidth:(f=o??s)!==null&&f!==void 0?f:1,dashed:a,transparent:T===4},c)))}),bn=h.forwardRef(({makeDefault:r,camera:n,regress:i,domElement:e,enableDamping:o=!0,keyEvents:s=!1,onChange:p,onStart:a,onEnd:c,...E},d)=>{const f=Q(b=>b.invalidate),S=Q(b=>b.camera),U=Q(b=>b.gl),j=Q(b=>b.events),T=Q(b=>b.setEvents),L=Q(b=>b.set),O=Q(b=>b.get),B=Q(b=>b.performance),g=n||S,w=e||j.connected||U.domElement,P=h.useMemo(()=>new hn(g),[g]);return Fe(()=>{P.enabled&&P.update()},-1),h.useEffect(()=>(s&&P.connect(s===!0?w:s),P.connect(w),()=>void P.dispose()),[s,w,i,P,f]),h.useEffect(()=>{const b=A=>{f(),i&&B.regress(),p&&p(A)},re=A=>{a&&a(A)},W=A=>{c&&c(A)};return P.addEventListener("change",b),P.addEventListener("start",re),P.addEventListener("end",W),()=>{P.removeEventListener("start",re),P.removeEventListener("end",W),P.removeEventListener("change",b)}},[p,a,c,P,f,T]),h.useEffect(()=>{if(r){const b=O().controls;return L({controls:P}),()=>L({controls:b})}},[r,P]),h.createElement("primitive",We({ref:d,object:P,enableDamping:o},E))});function yn({skill:r,position:n,color:i}){const e=h.useRef(null),[o,s]=h.useState(!1),p=.1+r.level*.08,a=r.level*.5;return Fe(c=>{if(e.current){e.current.rotation.y+=.01;const E=o?1.5:1,d=Math.sin(c.clock.elapsedTime*2+r.level)*.05,f=e.current.scale.x,S=f+(E-f)*.1+d*.1;e.current.scale.setScalar(S)}}),v.jsxs("group",{position:n,children:[v.jsxs("mesh",{ref:e,onPointerOver:()=>{s(!0),document.body.style.cursor="pointer"},onPointerOut:()=>{s(!1),document.body.style.cursor="auto"},children:[v.jsx("sphereGeometry",{args:[p,16,16]}),v.jsx("meshStandardMaterial",{color:o?"#ffffff":i,emissive:i,emissiveIntensity:o?a*2:a})]}),v.jsx(Pt,{center:!0,distanceFactor:6,style:{opacity:o?1:0,transition:"opacity 0.2s",pointerEvents:"none"},children:v.jsxs("div",{className:"bg-black/95 border-2 border-white/40 px-4 py-3 rounded-xl text-center min-w-[160px] shadow-lg",children:[v.jsx("div",{className:"text-white font-bold text-lg",children:r.name}),v.jsx("div",{className:"flex justify-center gap-1 mt-2",children:[...Array(5)].map((c,E)=>v.jsx("span",{className:`text-base ${E<r.level?"text-yellow-400":"text-gray-600"}`,children:"★"},E))}),r.years&&v.jsxs("div",{className:"text-sm text-gray-300 mt-2",children:[r.years," years exp"]})]})})]})}function xn({category:r,position:n}){const i=h.useRef(null),[e,o]=h.useState(!1),s=h.useMemo(()=>r.skills.map((a,c)=>{const E=c/r.skills.length*Math.PI*2,d=e?2+Math.random()*1:.5;return new _(Math.cos(E)*d,Math.sin(E)*d*.6,(Math.random()-.5)*(e?1:.3))}),[r.skills.length,e]),p=h.useMemo(()=>{if(s.length<2)return[];const a=[];for(let c=0;c<s.length;c++)a.push(s[c]),a.push(s[(c+1)%s.length]);return a},[s]);return Fe(()=>{i.current&&(i.current.rotation.y+=.002)}),v.jsxs("group",{ref:i,position:n,children:[v.jsxs("mesh",{onClick:()=>o(!e),onPointerOver:()=>document.body.style.cursor="pointer",onPointerOut:()=>document.body.style.cursor="auto",children:[v.jsx("sphereGeometry",{args:[e?.3:.5,32,32]}),v.jsx("meshStandardMaterial",{color:r.color,emissive:r.color,emissiveIntensity:e?1:.5,transparent:!0,opacity:.9})]}),v.jsx(Pt,{position:[0,e?-3:-1.2,0],center:!0,children:v.jsxs("div",{className:`text-center cursor-pointer transition-all ${e?"scale-125":"hover:scale-110"}`,onClick:()=>o(!e),children:[v.jsx("div",{className:"text-4xl mb-2",children:r.icon}),v.jsx("div",{className:"text-white font-bold text-xl whitespace-nowrap drop-shadow-lg",style:{color:r.color},children:r.name}),v.jsxs("div",{className:"text-base text-gray-300 mt-1",children:[r.skills.length," skills"]}),!e&&v.jsx("div",{className:"text-sm text-cyan-400 mt-2 animate-pulse",children:"Click to explore"})]})}),e&&r.skills.map((a,c)=>v.jsx(yn,{skill:a,position:s[c],color:r.color},a.name)),e&&p.length>0&&v.jsx(gn,{points:p,color:r.color,lineWidth:1,transparent:!0,opacity:.3})]})}function An({onComplete:r}){const{playClick:n}=Nt(),i=h.useMemo(()=>Ie.map((e,o)=>{const s=o/Ie.length*Math.PI*2,p=6+o%2*2;return[Math.cos(s)*p,Math.sin(o*.5)*2,Math.sin(s)*p]}),[]);return v.jsxs("div",{className:"h-screen w-full bg-black relative",children:[v.jsxs("div",{className:"absolute top-4 left-4 z-10 text-white pointer-events-none",children:[v.jsx("h2",{className:"text-3xl font-bold tracking-wider text-cyan-400",children:"🌌 SKILL GALAXY"}),v.jsx("p",{className:"text-base opacity-80",children:"Click constellations to explore skills"}),v.jsx("p",{className:"text-sm text-cyan-400/70 mt-1",children:"🖱️ Drag to orbit • Scroll to zoom"})]}),v.jsxs("div",{className:"absolute top-4 right-20 z-10 bg-black/50 backdrop-blur p-3 rounded-lg hidden md:block",children:[v.jsx("div",{className:"text-xs text-gray-400 mb-2",children:"Categories"}),v.jsx("div",{className:"grid grid-cols-2 gap-2",children:Ie.map(e=>v.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[v.jsx("div",{className:"w-2 h-2 rounded-full",style:{backgroundColor:e.color}}),v.jsxs("span",{className:"text-white",children:[e.icon," ",e.name]})]},e.name))})]}),v.jsx("button",{onClick:()=>{n(),r()},className:"absolute bottom-8 right-8 z-10 px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg transition-colors",children:"Continue →"}),v.jsxs($t,{camera:{position:[0,10,20],fov:60},children:[v.jsx("color",{attach:"background",args:["#000008"]}),v.jsx(Xt,{radius:100,depth:50,count:5e3,factor:4,saturation:0,fade:!0,speed:.5}),v.jsx("ambientLight",{intensity:.3}),v.jsx("pointLight",{position:[0,0,0],intensity:2,color:"#4488ff"}),v.jsx(bn,{enablePan:!1,minDistance:10,maxDistance:40,autoRotate:!0,autoRotateSpeed:.3}),v.jsxs("mesh",{position:[0,0,0],children:[v.jsx("sphereGeometry",{args:[1.5,32,32]}),v.jsx("meshStandardMaterial",{color:"#4488ff",emissive:"#0044aa",emissiveIntensity:3,transparent:!0,opacity:.8})]}),Ie.map((e,o)=>v.jsx(xn,{category:e,position:i[o]},e.name))]})]})}export{An as default};
