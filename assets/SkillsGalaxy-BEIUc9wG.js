import{r as p,c as zt,u as Rt,s as Le,j as c,m as Et}from"./index-DVuNU5VI.js";import{a as Q,u as Fe,b as It,V as j,c as F,d as Te,O as Ce,R as Ut,S as dt,Q as ut,e as ve,T as ye,f as kt,g as Bt,I as Ht,F as ft,h as tt,i as we,W as Wt,B as it,j as Mt,k as Ft,U as ht,l as mt,m as Vt,n as Se,L as Yt,M as Gt,o as Zt,p as $t,C as Xt}from"./constants-B0V089gC.js";import{u as Kt}from"./useIsMobile-9ei47HkM.js";import{S as qt}from"./Stars-CqJmf8xN.js";import{_ as We}from"./extends-CF3RwP-h.js";const De=new j,ot=new j,Qt=new j,pt=new F;function Jt(o,t,i){const e=De.setFromMatrixPosition(o.matrixWorld);e.project(t);const s=i.width/2,a=i.height/2;return[e.x*s+s,-(e.y*a)+a]}function en(o,t){const i=De.setFromMatrixPosition(o.matrixWorld),e=ot.setFromMatrixPosition(t.matrixWorld),s=i.sub(e),a=t.getWorldDirection(Qt);return s.angleTo(a)>Math.PI/2}function tn(o,t,i,e){const s=De.setFromMatrixPosition(o.matrixWorld),a=s.clone();a.project(t),pt.set(a.x,a.y),i.setFromCamera(pt,t);const h=i.intersectObjects(e,!0);if(h.length){const r=h[0].distance;return s.distanceTo(i.ray.origin)<r}return!0}function nn(o,t){if(t instanceof Ce)return t.zoom;if(t instanceof Te){const i=De.setFromMatrixPosition(o.matrixWorld),e=ot.setFromMatrixPosition(t.matrixWorld),s=t.fov*Math.PI/180,a=i.distanceTo(e);return 1/(2*Math.tan(s/2)*a)}else return 1}function on(o,t,i){if(t instanceof Te||t instanceof Ce){const e=De.setFromMatrixPosition(o.matrixWorld),s=ot.setFromMatrixPosition(t.matrixWorld),a=e.distanceTo(s),h=(i[1]-i[0])/(t.far-t.near),r=i[1]-h*t.far;return Math.round(h*a+r)}}const nt=o=>Math.abs(o)<1e-10?0:o;function Pt(o,t,i=""){let e="matrix3d(";for(let s=0;s!==16;s++)e+=nt(t[s]*o.elements[s])+(s!==15?",":")");return i+e}const sn=(o=>t=>Pt(t,o))([1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1]),an=(o=>(t,i)=>Pt(t,o(i),"translate(-50%,-50%)"))(o=>[1/o,1/o,1/o,1,-1/o,-1/o,-1/o,-1,1/o,1/o,1/o,1,1,1,1,1]);function rn(o){return o&&typeof o=="object"&&"current"in o}const jt=p.forwardRef(({children:o,eps:t=.001,style:i,className:e,prepend:s,center:a,fullscreen:h,portal:r,distanceFactor:f,sprite:g=!1,transform:u=!1,occlude:d,onOcclude:x,castShadow:O,receiveShadow:_,material:C,geometry:T,zIndexRange:L=[16777271,0],calculatePosition:k=Jt,as:v="div",wrapperClass:E,pointerEvents:P="auto",...y},ae)=>{const{gl:W,camera:A,scene:w,size:D,raycaster:Ve,events:ee,viewport:Ee}=Q(),[z]=p.useState(()=>document.createElement(v)),pe=p.useRef(),B=p.useRef(null),te=p.useRef(0),re=p.useRef([0,0]),G=p.useRef(null),ue=p.useRef(null),ne=(r==null?void 0:r.current)||ee.connected||W.domElement.parentNode,V=p.useRef(null),fe=p.useRef(!1),be=p.useMemo(()=>d&&d!=="blending"||Array.isArray(d)&&d.length&&rn(d[0]),[d]);p.useLayoutEffect(()=>{const H=W.domElement;d&&d==="blending"?(H.style.zIndex=`${Math.floor(L[0]/2)}`,H.style.position="absolute",H.style.pointerEvents="none"):(H.style.zIndex=null,H.style.position=null,H.style.pointerEvents=null)},[d]),p.useLayoutEffect(()=>{if(B.current){const H=pe.current=zt(z);if(w.updateMatrixWorld(),u)z.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{const M=k(B.current,A,D);z.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${M[0]}px,${M[1]}px,0);transform-origin:0 0;`}return ne&&(s?ne.prepend(z):ne.appendChild(z)),()=>{ne&&ne.removeChild(z),H.unmount()}}},[ne,u]),p.useLayoutEffect(()=>{E&&(z.className=E)},[E]);const Me=p.useMemo(()=>u?{position:"absolute",top:0,left:0,width:D.width,height:D.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:a?"translate3d(-50%,-50%,0)":"none",...h&&{top:-D.height/2,left:-D.width/2,width:D.width,height:D.height},...i},[i,a,h,D,u]),Ye=p.useMemo(()=>({position:"absolute",pointerEvents:P}),[P]);p.useLayoutEffect(()=>{if(fe.current=!1,u){var H;(H=pe.current)==null||H.render(p.createElement("div",{ref:G,style:Me},p.createElement("div",{ref:ue,style:Ye},p.createElement("div",{ref:ae,className:e,style:i,children:o}))))}else{var M;(M=pe.current)==null||M.render(p.createElement("div",{ref:ae,style:Me,className:e,children:o}))}});const le=p.useRef(!0);Fe(H=>{if(B.current){A.updateMatrixWorld(),B.current.updateWorldMatrix(!0,!1);const M=u?re.current:k(B.current,A,D);if(u||Math.abs(te.current-A.zoom)>t||Math.abs(re.current[0]-M[0])>t||Math.abs(re.current[1]-M[1])>t){const Z=en(B.current,A);let Y=!1;be&&(Array.isArray(d)?Y=d.map($=>$.current):d!=="blending"&&(Y=[w]));const ce=le.current;if(Y){const $=tn(B.current,A,Ve,Y);le.current=$&&!Z}else le.current=!Z;ce!==le.current&&(x?x(!le.current):z.style.display=le.current?"block":"none");const xe=Math.floor(L[0]/2),Ge=d?be?[L[0],xe]:[xe-1,0]:L;if(z.style.zIndex=`${on(B.current,A,Ge)}`,u){const[$,Pe]=[D.width/2,D.height/2],ge=A.projectionMatrix.elements[5]*Pe,{isOrthographicCamera:ze,top:Ze,left:Re,bottom:je,right:he}=A,$e=sn(A.matrixWorldInverse),Xe=ze?`scale(${ge})translate(${nt(-(he+Re)/2)}px,${nt((Ze+je)/2)}px)`:`translateZ(${ge}px)`;let X=B.current.matrixWorld;g&&(X=A.matrixWorldInverse.clone().transpose().copyPosition(X).scale(B.current.scale),X.elements[3]=X.elements[7]=X.elements[11]=0,X.elements[15]=1),z.style.width=D.width+"px",z.style.height=D.height+"px",z.style.perspective=ze?"":`${ge}px`,G.current&&ue.current&&(G.current.style.transform=`${Xe}${$e}translate(${$}px,${Pe}px)`,ue.current.style.transform=an(X,1/((f||10)/400)))}else{const $=f===void 0?1:nn(B.current,A)*f;z.style.transform=`translate3d(${M[0]}px,${M[1]}px,0) scale(${$})`}re.current=M,te.current=A.zoom}}if(!be&&V.current&&!fe.current)if(u){if(G.current){const M=G.current.children[0];if(M!=null&&M.clientWidth&&M!=null&&M.clientHeight){const{isOrthographicCamera:Z}=A;if(Z||T)y.scale&&(Array.isArray(y.scale)?y.scale instanceof j?V.current.scale.copy(y.scale.clone().divideScalar(1)):V.current.scale.set(1/y.scale[0],1/y.scale[1],1/y.scale[2]):V.current.scale.setScalar(1/y.scale));else{const Y=(f||10)/400,ce=M.clientWidth*Y,xe=M.clientHeight*Y;V.current.scale.set(ce,xe,1)}fe.current=!0}}}else{const M=z.children[0];if(M!=null&&M.clientWidth&&M!=null&&M.clientHeight){const Z=1/Ee.factor,Y=M.clientWidth*Z,ce=M.clientHeight*Z;V.current.scale.set(Y,ce,1),fe.current=!0}V.current.lookAt(H.camera.position)}});const Ne=p.useMemo(()=>({vertexShader:u?void 0:`
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
      `}),[u]);return p.createElement("group",We({},y,{ref:B}),d&&!be&&p.createElement("mesh",{castShadow:O,receiveShadow:_,ref:V},T||p.createElement("planeGeometry",null),C||p.createElement("shaderMaterial",{side:It,vertexShader:Ne.vertexShader,fragmentShader:Ne.fragmentShader})))}),_t=parseInt(Ut.replace(/\D+/g,"")),At=_t>=125?"uv1":"uv2";var ln=Object.defineProperty,cn=(o,t,i)=>t in o?ln(o,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[t]=i,dn=(o,t,i)=>(cn(o,t+"",i),i);class un{constructor(){dn(this,"_listeners")}addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const e=this._listeners;e[t]===void 0&&(e[t]=[]),e[t].indexOf(i)===-1&&e[t].push(i)}hasEventListener(t,i){if(this._listeners===void 0)return!1;const e=this._listeners;return e[t]!==void 0&&e[t].indexOf(i)!==-1}removeEventListener(t,i){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const a=s.indexOf(i);a!==-1&&s.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const e=this._listeners[t.type];if(e!==void 0){t.target=this;const s=e.slice(0);for(let a=0,h=s.length;a<h;a++)s[a].call(this,t);t.target=null}}}var fn=Object.defineProperty,hn=(o,t,i)=>t in o?fn(o,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[t]=i,m=(o,t,i)=>(hn(o,typeof t!="symbol"?t+"":t,i),i);const Ue=new kt,bt=new Bt,mn=Math.cos(70*(Math.PI/180)),xt=(o,t)=>(o%t+t)%t;let pn=class extends un{constructor(t,i){super(),m(this,"object"),m(this,"domElement"),m(this,"enabled",!0),m(this,"target",new j),m(this,"minDistance",0),m(this,"maxDistance",1/0),m(this,"minZoom",0),m(this,"maxZoom",1/0),m(this,"minPolarAngle",0),m(this,"maxPolarAngle",Math.PI),m(this,"minAzimuthAngle",-1/0),m(this,"maxAzimuthAngle",1/0),m(this,"enableDamping",!1),m(this,"dampingFactor",.05),m(this,"enableZoom",!0),m(this,"zoomSpeed",1),m(this,"enableRotate",!0),m(this,"rotateSpeed",1),m(this,"enablePan",!0),m(this,"panSpeed",1),m(this,"screenSpacePanning",!0),m(this,"keyPanSpeed",7),m(this,"zoomToCursor",!1),m(this,"autoRotate",!1),m(this,"autoRotateSpeed",2),m(this,"reverseOrbit",!1),m(this,"reverseHorizontalOrbit",!1),m(this,"reverseVerticalOrbit",!1),m(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),m(this,"mouseButtons",{LEFT:ve.ROTATE,MIDDLE:ve.DOLLY,RIGHT:ve.PAN}),m(this,"touches",{ONE:ye.ROTATE,TWO:ye.DOLLY_PAN}),m(this,"target0"),m(this,"position0"),m(this,"zoom0"),m(this,"_domElementKeyEvents",null),m(this,"getPolarAngle"),m(this,"getAzimuthalAngle"),m(this,"setPolarAngle"),m(this,"setAzimuthalAngle"),m(this,"getDistance"),m(this,"getZoomScale"),m(this,"listenToKeyEvents"),m(this,"stopListenToKeyEvents"),m(this,"saveState"),m(this,"reset"),m(this,"update"),m(this,"connect"),m(this,"dispose"),m(this,"dollyIn"),m(this,"dollyOut"),m(this,"getScale"),m(this,"setScale"),this.object=t,this.domElement=i,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>u.phi,this.getAzimuthalAngle=()=>u.theta,this.setPolarAngle=n=>{let l=xt(n,2*Math.PI),b=u.phi;b<0&&(b+=2*Math.PI),l<0&&(l+=2*Math.PI);let S=Math.abs(l-b);2*Math.PI-S<S&&(l<b?l+=2*Math.PI:b+=2*Math.PI),d.phi=l-b,e.update()},this.setAzimuthalAngle=n=>{let l=xt(n,2*Math.PI),b=u.theta;b<0&&(b+=2*Math.PI),l<0&&(l+=2*Math.PI);let S=Math.abs(l-b);2*Math.PI-S<S&&(l<b?l+=2*Math.PI:b+=2*Math.PI),d.theta=l-b,e.update()},this.getDistance=()=>e.object.position.distanceTo(e.target),this.listenToKeyEvents=n=>{n.addEventListener("keydown",Ke),this._domElementKeyEvents=n},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",Ke),this._domElementKeyEvents=null},this.saveState=()=>{e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=()=>{e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(s),e.update(),f=r.NONE},this.update=(()=>{const n=new j,l=new j(0,1,0),b=new ut().setFromUnitVectors(t.up,l),S=b.clone().invert(),N=new j,ie=new ut,de=2*Math.PI;return function(){const ct=e.object.position;b.setFromUnitVectors(t.up,l),S.copy(b).invert(),n.copy(ct).sub(e.target),n.applyQuaternion(b),u.setFromVector3(n),e.autoRotate&&f===r.NONE&&Ee(Ve()),e.enableDamping?(u.theta+=d.theta*e.dampingFactor,u.phi+=d.phi*e.dampingFactor):(u.theta+=d.theta,u.phi+=d.phi);let oe=e.minAzimuthAngle,se=e.maxAzimuthAngle;isFinite(oe)&&isFinite(se)&&(oe<-Math.PI?oe+=de:oe>Math.PI&&(oe-=de),se<-Math.PI?se+=de:se>Math.PI&&(se-=de),oe<=se?u.theta=Math.max(oe,Math.min(se,u.theta)):u.theta=u.theta>(oe+se)/2?Math.max(oe,u.theta):Math.min(se,u.theta)),u.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,u.phi)),u.makeSafe(),e.enableDamping===!0?e.target.addScaledVector(O,e.dampingFactor):e.target.add(O),e.zoomToCursor&&A||e.object.isOrthographicCamera?u.radius=V(u.radius):u.radius=V(u.radius*x),n.setFromSpherical(u),n.applyQuaternion(S),ct.copy(e.target).add(n),e.object.matrixAutoUpdate||e.object.updateMatrix(),e.object.lookAt(e.target),e.enableDamping===!0?(d.theta*=1-e.dampingFactor,d.phi*=1-e.dampingFactor,O.multiplyScalar(1-e.dampingFactor)):(d.set(0,0,0),O.set(0,0,0));let _e=!1;if(e.zoomToCursor&&A){let Ae=null;if(e.object instanceof Te&&e.object.isPerspectiveCamera){const Oe=n.length();Ae=V(Oe*x);const Ie=Oe-Ae;e.object.position.addScaledVector(ae,Ie),e.object.updateMatrixWorld()}else if(e.object.isOrthographicCamera){const Oe=new j(W.x,W.y,0);Oe.unproject(e.object),e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/x)),e.object.updateProjectionMatrix(),_e=!0;const Ie=new j(W.x,W.y,0);Ie.unproject(e.object),e.object.position.sub(Ie).add(Oe),e.object.updateMatrixWorld(),Ae=n.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),e.zoomToCursor=!1;Ae!==null&&(e.screenSpacePanning?e.target.set(0,0,-1).transformDirection(e.object.matrix).multiplyScalar(Ae).add(e.object.position):(Ue.origin.copy(e.object.position),Ue.direction.set(0,0,-1).transformDirection(e.object.matrix),Math.abs(e.object.up.dot(Ue.direction))<mn?t.lookAt(e.target):(bt.setFromNormalAndCoplanarPoint(e.object.up,e.target),Ue.intersectPlane(bt,e.target))))}else e.object instanceof Ce&&e.object.isOrthographicCamera&&(_e=x!==1,_e&&(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/x)),e.object.updateProjectionMatrix()));return x=1,A=!1,_e||N.distanceToSquared(e.object.position)>g||8*(1-ie.dot(e.object.quaternion))>g?(e.dispatchEvent(s),N.copy(e.object.position),ie.copy(e.object.quaternion),_e=!1,!0):!1}})(),this.connect=n=>{e.domElement=n,e.domElement.style.touchAction="none",e.domElement.addEventListener("contextmenu",rt),e.domElement.addEventListener("pointerdown",Re),e.domElement.addEventListener("pointercancel",he),e.domElement.addEventListener("wheel",X)},this.dispose=()=>{var n,l,b,S,N,ie;e.domElement&&(e.domElement.style.touchAction="auto"),(n=e.domElement)==null||n.removeEventListener("contextmenu",rt),(l=e.domElement)==null||l.removeEventListener("pointerdown",Re),(b=e.domElement)==null||b.removeEventListener("pointercancel",he),(S=e.domElement)==null||S.removeEventListener("wheel",X),(N=e.domElement)==null||N.ownerDocument.removeEventListener("pointermove",je),(ie=e.domElement)==null||ie.ownerDocument.removeEventListener("pointerup",he),e._domElementKeyEvents!==null&&e._domElementKeyEvents.removeEventListener("keydown",Ke)};const e=this,s={type:"change"},a={type:"start"},h={type:"end"},r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let f=r.NONE;const g=1e-6,u=new dt,d=new dt;let x=1;const O=new j,_=new F,C=new F,T=new F,L=new F,k=new F,v=new F,E=new F,P=new F,y=new F,ae=new j,W=new F;let A=!1;const w=[],D={};function Ve(){return 2*Math.PI/60/60*e.autoRotateSpeed}function ee(){return Math.pow(.95,e.zoomSpeed)}function Ee(n){e.reverseOrbit||e.reverseHorizontalOrbit?d.theta+=n:d.theta-=n}function z(n){e.reverseOrbit||e.reverseVerticalOrbit?d.phi+=n:d.phi-=n}const pe=(()=>{const n=new j;return function(b,S){n.setFromMatrixColumn(S,0),n.multiplyScalar(-b),O.add(n)}})(),B=(()=>{const n=new j;return function(b,S){e.screenSpacePanning===!0?n.setFromMatrixColumn(S,1):(n.setFromMatrixColumn(S,0),n.crossVectors(e.object.up,n)),n.multiplyScalar(b),O.add(n)}})(),te=(()=>{const n=new j;return function(b,S){const N=e.domElement;if(N&&e.object instanceof Te&&e.object.isPerspectiveCamera){const ie=e.object.position;n.copy(ie).sub(e.target);let de=n.length();de*=Math.tan(e.object.fov/2*Math.PI/180),pe(2*b*de/N.clientHeight,e.object.matrix),B(2*S*de/N.clientHeight,e.object.matrix)}else N&&e.object instanceof Ce&&e.object.isOrthographicCamera?(pe(b*(e.object.right-e.object.left)/e.object.zoom/N.clientWidth,e.object.matrix),B(S*(e.object.top-e.object.bottom)/e.object.zoom/N.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}})();function re(n){e.object instanceof Te&&e.object.isPerspectiveCamera||e.object instanceof Ce&&e.object.isOrthographicCamera?x=n:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function G(n){re(x/n)}function ue(n){re(x*n)}function ne(n){if(!e.zoomToCursor||!e.domElement)return;A=!0;const l=e.domElement.getBoundingClientRect(),b=n.clientX-l.left,S=n.clientY-l.top,N=l.width,ie=l.height;W.x=b/N*2-1,W.y=-(S/ie)*2+1,ae.set(W.x,W.y,1).unproject(e.object).sub(e.object.position).normalize()}function V(n){return Math.max(e.minDistance,Math.min(e.maxDistance,n))}function fe(n){_.set(n.clientX,n.clientY)}function be(n){ne(n),E.set(n.clientX,n.clientY)}function Me(n){L.set(n.clientX,n.clientY)}function Ye(n){C.set(n.clientX,n.clientY),T.subVectors(C,_).multiplyScalar(e.rotateSpeed);const l=e.domElement;l&&(Ee(2*Math.PI*T.x/l.clientHeight),z(2*Math.PI*T.y/l.clientHeight)),_.copy(C),e.update()}function le(n){P.set(n.clientX,n.clientY),y.subVectors(P,E),y.y>0?G(ee()):y.y<0&&ue(ee()),E.copy(P),e.update()}function Ne(n){k.set(n.clientX,n.clientY),v.subVectors(k,L).multiplyScalar(e.panSpeed),te(v.x,v.y),L.copy(k),e.update()}function H(n){ne(n),n.deltaY<0?ue(ee()):n.deltaY>0&&G(ee()),e.update()}function M(n){let l=!1;switch(n.code){case e.keys.UP:te(0,e.keyPanSpeed),l=!0;break;case e.keys.BOTTOM:te(0,-e.keyPanSpeed),l=!0;break;case e.keys.LEFT:te(e.keyPanSpeed,0),l=!0;break;case e.keys.RIGHT:te(-e.keyPanSpeed,0),l=!0;break}l&&(n.preventDefault(),e.update())}function Z(){if(w.length==1)_.set(w[0].pageX,w[0].pageY);else{const n=.5*(w[0].pageX+w[1].pageX),l=.5*(w[0].pageY+w[1].pageY);_.set(n,l)}}function Y(){if(w.length==1)L.set(w[0].pageX,w[0].pageY);else{const n=.5*(w[0].pageX+w[1].pageX),l=.5*(w[0].pageY+w[1].pageY);L.set(n,l)}}function ce(){const n=w[0].pageX-w[1].pageX,l=w[0].pageY-w[1].pageY,b=Math.sqrt(n*n+l*l);E.set(0,b)}function xe(){e.enableZoom&&ce(),e.enablePan&&Y()}function Ge(){e.enableZoom&&ce(),e.enableRotate&&Z()}function $(n){if(w.length==1)C.set(n.pageX,n.pageY);else{const b=qe(n),S=.5*(n.pageX+b.x),N=.5*(n.pageY+b.y);C.set(S,N)}T.subVectors(C,_).multiplyScalar(e.rotateSpeed);const l=e.domElement;l&&(Ee(2*Math.PI*T.x/l.clientHeight),z(2*Math.PI*T.y/l.clientHeight)),_.copy(C)}function Pe(n){if(w.length==1)k.set(n.pageX,n.pageY);else{const l=qe(n),b=.5*(n.pageX+l.x),S=.5*(n.pageY+l.y);k.set(b,S)}v.subVectors(k,L).multiplyScalar(e.panSpeed),te(v.x,v.y),L.copy(k)}function ge(n){const l=qe(n),b=n.pageX-l.x,S=n.pageY-l.y,N=Math.sqrt(b*b+S*S);P.set(0,N),y.set(0,Math.pow(P.y/E.y,e.zoomSpeed)),G(y.y),E.copy(P)}function ze(n){e.enableZoom&&ge(n),e.enablePan&&Pe(n)}function Ze(n){e.enableZoom&&ge(n),e.enableRotate&&$(n)}function Re(n){var l,b;e.enabled!==!1&&(w.length===0&&((l=e.domElement)==null||l.ownerDocument.addEventListener("pointermove",je),(b=e.domElement)==null||b.ownerDocument.addEventListener("pointerup",he)),Dt(n),n.pointerType==="touch"?Tt(n):$e(n))}function je(n){e.enabled!==!1&&(n.pointerType==="touch"?Ct(n):Xe(n))}function he(n){var l,b,S;Nt(n),w.length===0&&((l=e.domElement)==null||l.releasePointerCapture(n.pointerId),(b=e.domElement)==null||b.ownerDocument.removeEventListener("pointermove",je),(S=e.domElement)==null||S.ownerDocument.removeEventListener("pointerup",he)),e.dispatchEvent(h),f=r.NONE}function $e(n){let l;switch(n.button){case 0:l=e.mouseButtons.LEFT;break;case 1:l=e.mouseButtons.MIDDLE;break;case 2:l=e.mouseButtons.RIGHT;break;default:l=-1}switch(l){case ve.DOLLY:if(e.enableZoom===!1)return;be(n),f=r.DOLLY;break;case ve.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(e.enablePan===!1)return;Me(n),f=r.PAN}else{if(e.enableRotate===!1)return;fe(n),f=r.ROTATE}break;case ve.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(e.enableRotate===!1)return;fe(n),f=r.ROTATE}else{if(e.enablePan===!1)return;Me(n),f=r.PAN}break;default:f=r.NONE}f!==r.NONE&&e.dispatchEvent(a)}function Xe(n){if(e.enabled!==!1)switch(f){case r.ROTATE:if(e.enableRotate===!1)return;Ye(n);break;case r.DOLLY:if(e.enableZoom===!1)return;le(n);break;case r.PAN:if(e.enablePan===!1)return;Ne(n);break}}function X(n){e.enabled===!1||e.enableZoom===!1||f!==r.NONE&&f!==r.ROTATE||(n.preventDefault(),e.dispatchEvent(a),H(n),e.dispatchEvent(h))}function Ke(n){e.enabled===!1||e.enablePan===!1||M(n)}function Tt(n){switch(lt(n),w.length){case 1:switch(e.touches.ONE){case ye.ROTATE:if(e.enableRotate===!1)return;Z(),f=r.TOUCH_ROTATE;break;case ye.PAN:if(e.enablePan===!1)return;Y(),f=r.TOUCH_PAN;break;default:f=r.NONE}break;case 2:switch(e.touches.TWO){case ye.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;xe(),f=r.TOUCH_DOLLY_PAN;break;case ye.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Ge(),f=r.TOUCH_DOLLY_ROTATE;break;default:f=r.NONE}break;default:f=r.NONE}f!==r.NONE&&e.dispatchEvent(a)}function Ct(n){switch(lt(n),f){case r.TOUCH_ROTATE:if(e.enableRotate===!1)return;$(n),e.update();break;case r.TOUCH_PAN:if(e.enablePan===!1)return;Pe(n),e.update();break;case r.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;ze(n),e.update();break;case r.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Ze(n),e.update();break;default:f=r.NONE}}function rt(n){e.enabled!==!1&&n.preventDefault()}function Dt(n){w.push(n)}function Nt(n){delete D[n.pointerId];for(let l=0;l<w.length;l++)if(w[l].pointerId==n.pointerId){w.splice(l,1);return}}function lt(n){let l=D[n.pointerId];l===void 0&&(l=new F,D[n.pointerId]=l),l.set(n.pageX,n.pageY)}function qe(n){const l=n.pointerId===w[0].pointerId?w[1]:w[0];return D[l.pointerId]}this.dollyIn=(n=ee())=>{ue(n),e.update()},this.dollyOut=(n=ee())=>{G(n),e.update()},this.getScale=()=>x,this.setScale=n=>{re(n),e.update()},this.getZoomScale=()=>ee(),i!==void 0&&this.connect(i),this.update()}};const gt=new it,ke=new j;class st extends Ht{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],i=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],e=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(e),this.setAttribute("position",new ft(t,3)),this.setAttribute("uv",new ft(i,2))}applyMatrix4(t){const i=this.attributes.instanceStart,e=this.attributes.instanceEnd;return i!==void 0&&(i.applyMatrix4(t),e.applyMatrix4(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let i;t instanceof Float32Array?i=t:Array.isArray(t)&&(i=new Float32Array(t));const e=new tt(i,6,1);return this.setAttribute("instanceStart",new we(e,3,0)),this.setAttribute("instanceEnd",new we(e,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t,i=3){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const s=new tt(e,i*2,1);return this.setAttribute("instanceColorStart",new we(s,i,0)),this.setAttribute("instanceColorEnd",new we(s,i,i)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Wt(t.geometry)),this}fromLineSegments(t){const i=t.geometry;return this.setPositions(i.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new it);const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;t!==void 0&&i!==void 0&&(this.boundingBox.setFromBufferAttribute(t),gt.setFromBufferAttribute(i),this.boundingBox.union(gt))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mt),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;if(t!==void 0&&i!==void 0){const e=this.boundingSphere.center;this.boundingBox.getCenter(e);let s=0;for(let a=0,h=t.count;a<h;a++)ke.fromBufferAttribute(t,a),s=Math.max(s,e.distanceToSquared(ke)),ke.fromBufferAttribute(i,a),s=Math.max(s,e.distanceToSquared(ke));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}}class Ot extends st{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const i=t.length-3,e=new Float32Array(2*i);for(let s=0;s<i;s+=3)e[2*s]=t[s],e[2*s+1]=t[s+1],e[2*s+2]=t[s+2],e[2*s+3]=t[s+3],e[2*s+4]=t[s+4],e[2*s+5]=t[s+5];return super.setPositions(e),this}setColors(t,i=3){const e=t.length-i,s=new Float32Array(2*e);if(i===3)for(let a=0;a<e;a+=i)s[2*a]=t[a],s[2*a+1]=t[a+1],s[2*a+2]=t[a+2],s[2*a+3]=t[a+3],s[2*a+4]=t[a+4],s[2*a+5]=t[a+5];else for(let a=0;a<e;a+=i)s[2*a]=t[a],s[2*a+1]=t[a+1],s[2*a+2]=t[a+2],s[2*a+3]=t[a+3],s[2*a+4]=t[a+4],s[2*a+5]=t[a+5],s[2*a+6]=t[a+6],s[2*a+7]=t[a+7];return super.setColors(s,i),this}fromLine(t){const i=t.geometry;return this.setPositions(i.attributes.position.array),this}}class at extends Ft{constructor(t){super({type:"LineMaterial",uniforms:ht.clone(ht.merge([mt.common,mt.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new F(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
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
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(i){this.uniforms.diffuse.value=i}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(i){i===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(i){this.uniforms.linewidth.value=i}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(i){!!i!="USE_DASH"in this.defines&&(this.needsUpdate=!0),i===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(i){this.uniforms.dashScale.value=i}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(i){this.uniforms.dashSize.value=i}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(i){this.uniforms.dashOffset.value=i}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(i){this.uniforms.gapSize.value=i}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(i){this.uniforms.opacity.value=i}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(i){this.uniforms.resolution.value.copy(i)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(i){!!i!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),i===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(t)}}const Qe=new Se,vt=new j,yt=new j,R=new Se,I=new Se,K=new Se,Je=new j,et=new Gt,U=new Yt,wt=new j,Be=new it,He=new Mt,q=new Se;let J,me;function St(o,t,i){return q.set(0,0,-t,1).applyMatrix4(o.projectionMatrix),q.multiplyScalar(1/q.w),q.x=me/i.width,q.y=me/i.height,q.applyMatrix4(o.projectionMatrixInverse),q.multiplyScalar(1/q.w),Math.abs(Math.max(q.x,q.y))}function bn(o,t){const i=o.matrixWorld,e=o.geometry,s=e.attributes.instanceStart,a=e.attributes.instanceEnd,h=Math.min(e.instanceCount,s.count);for(let r=0,f=h;r<f;r++){U.start.fromBufferAttribute(s,r),U.end.fromBufferAttribute(a,r),U.applyMatrix4(i);const g=new j,u=new j;J.distanceSqToSegment(U.start,U.end,u,g),u.distanceTo(g)<me*.5&&t.push({point:u,pointOnLine:g,distance:J.origin.distanceTo(u),object:o,face:null,faceIndex:r,uv:null,[At]:null})}}function xn(o,t,i){const e=t.projectionMatrix,a=o.material.resolution,h=o.matrixWorld,r=o.geometry,f=r.attributes.instanceStart,g=r.attributes.instanceEnd,u=Math.min(r.instanceCount,f.count),d=-t.near;J.at(1,K),K.w=1,K.applyMatrix4(t.matrixWorldInverse),K.applyMatrix4(e),K.multiplyScalar(1/K.w),K.x*=a.x/2,K.y*=a.y/2,K.z=0,Je.copy(K),et.multiplyMatrices(t.matrixWorldInverse,h);for(let x=0,O=u;x<O;x++){if(R.fromBufferAttribute(f,x),I.fromBufferAttribute(g,x),R.w=1,I.w=1,R.applyMatrix4(et),I.applyMatrix4(et),R.z>d&&I.z>d)continue;if(R.z>d){const v=R.z-I.z,E=(R.z-d)/v;R.lerp(I,E)}else if(I.z>d){const v=I.z-R.z,E=(I.z-d)/v;I.lerp(R,E)}R.applyMatrix4(e),I.applyMatrix4(e),R.multiplyScalar(1/R.w),I.multiplyScalar(1/I.w),R.x*=a.x/2,R.y*=a.y/2,I.x*=a.x/2,I.y*=a.y/2,U.start.copy(R),U.start.z=0,U.end.copy(I),U.end.z=0;const C=U.closestPointToPointParameter(Je,!0);U.at(C,wt);const T=Zt.lerp(R.z,I.z,C),L=T>=-1&&T<=1,k=Je.distanceTo(wt)<me*.5;if(L&&k){U.start.fromBufferAttribute(f,x),U.end.fromBufferAttribute(g,x),U.start.applyMatrix4(h),U.end.applyMatrix4(h);const v=new j,E=new j;J.distanceSqToSegment(U.start,U.end,E,v),i.push({point:E,pointOnLine:v,distance:J.origin.distanceTo(E),object:o,face:null,faceIndex:x,uv:null,[At]:null})}}}class Lt extends Vt{constructor(t=new st,i=new at({color:Math.random()*16777215})){super(t,i),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,i=t.attributes.instanceStart,e=t.attributes.instanceEnd,s=new Float32Array(2*i.count);for(let h=0,r=0,f=i.count;h<f;h++,r+=2)vt.fromBufferAttribute(i,h),yt.fromBufferAttribute(e,h),s[r]=r===0?0:s[r-1],s[r+1]=s[r]+vt.distanceTo(yt);const a=new tt(s,2,1);return t.setAttribute("instanceDistanceStart",new we(a,1,0)),t.setAttribute("instanceDistanceEnd",new we(a,1,1)),this}raycast(t,i){const e=this.material.worldUnits,s=t.camera;s===null&&!e&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const a=t.params.Line2!==void 0&&t.params.Line2.threshold||0;J=t.ray;const h=this.matrixWorld,r=this.geometry,f=this.material;me=f.linewidth+a,r.boundingSphere===null&&r.computeBoundingSphere(),He.copy(r.boundingSphere).applyMatrix4(h);let g;if(e)g=me*.5;else{const d=Math.max(s.near,He.distanceToPoint(J.origin));g=St(s,d,f.resolution)}if(He.radius+=g,J.intersectsSphere(He)===!1)return;r.boundingBox===null&&r.computeBoundingBox(),Be.copy(r.boundingBox).applyMatrix4(h);let u;if(e)u=me*.5;else{const d=Math.max(s.near,Be.distanceToPoint(J.origin));u=St(s,d,f.resolution)}Be.expandByScalar(u),J.intersectsBox(Be)!==!1&&(e?bn(this,i):xn(this,s,i))}onBeforeRender(t){const i=this.material.uniforms;i&&i.resolution&&(t.getViewport(Qe),this.material.uniforms.resolution.value.set(Qe.z,Qe.w))}}class gn extends Lt{constructor(t=new Ot,i=new at({color:Math.random()*16777215})){super(t,i),this.isLine2=!0,this.type="Line2"}}const vn=p.forwardRef(function({points:t,color:i=16777215,vertexColors:e,linewidth:s,lineWidth:a,segments:h,dashed:r,...f},g){var u,d;const x=Q(L=>L.size),O=p.useMemo(()=>h?new Lt:new gn,[h]),[_]=p.useState(()=>new at),C=(e==null||(u=e[0])==null?void 0:u.length)===4?4:3,T=p.useMemo(()=>{const L=h?new st:new Ot,k=t.map(v=>{const E=Array.isArray(v);return v instanceof j||v instanceof Se?[v.x,v.y,v.z]:v instanceof F?[v.x,v.y,0]:E&&v.length===3?[v[0],v[1],v[2]]:E&&v.length===2?[v[0],v[1],0]:v});if(L.setPositions(k.flat()),e){i=16777215;const v=e.map(E=>E instanceof $t?E.toArray():E);L.setColors(v.flat(),C)}return L},[t,h,e,C]);return p.useLayoutEffect(()=>{O.computeLineDistances()},[t,O]),p.useLayoutEffect(()=>{r?_.defines.USE_DASH="":delete _.defines.USE_DASH,_.needsUpdate=!0},[r,_]),p.useEffect(()=>()=>{T.dispose(),_.dispose()},[T]),p.createElement("primitive",We({object:O,ref:g},f),p.createElement("primitive",{object:T,attach:"geometry"}),p.createElement("primitive",We({object:_,attach:"material",color:i,vertexColors:!!e,resolution:[x.width,x.height],linewidth:(d=s??a)!==null&&d!==void 0?d:1,dashed:r,transparent:C===4},f)))}),yn=p.forwardRef(({makeDefault:o,camera:t,regress:i,domElement:e,enableDamping:s=!0,keyEvents:a=!1,onChange:h,onStart:r,onEnd:f,...g},u)=>{const d=Q(y=>y.invalidate),x=Q(y=>y.camera),O=Q(y=>y.gl),_=Q(y=>y.events),C=Q(y=>y.setEvents),T=Q(y=>y.set),L=Q(y=>y.get),k=Q(y=>y.performance),v=t||x,E=e||_.connected||O.domElement,P=p.useMemo(()=>new pn(v),[v]);return Fe(()=>{P.enabled&&P.update()},-1),p.useEffect(()=>(a&&P.connect(a===!0?E:a),P.connect(E),()=>void P.dispose()),[a,E,i,P,d]),p.useEffect(()=>{const y=A=>{d(),i&&k.regress(),h&&h(A)},ae=A=>{r&&r(A)},W=A=>{f&&f(A)};return P.addEventListener("change",y),P.addEventListener("start",ae),P.addEventListener("end",W),()=>{P.removeEventListener("start",ae),P.removeEventListener("end",W),P.removeEventListener("change",y)}},[h,r,f,P,d,C]),p.useEffect(()=>{if(o){const y=L().controls;return T({controls:P}),()=>T({controls:y})}},[o,P]),p.createElement("primitive",We({ref:u,object:P,enableDamping:s},g))});function wn({skill:o,position:t,color:i,isSelected:e,onSelect:s,reduceMotion:a}){const h=p.useRef(null),r=.1+o.level*.08,f=o.level*.5;return Fe(g=>{if(!h.current)return;a||(h.current.rotation.y+=.01);const u=e?1.6:1,d=a?0:Math.sin(g.clock.elapsedTime*2+o.level)*.05,x=h.current.scale.x;h.current.scale.setScalar(x+(u-x)*.1+d*.1)}),c.jsxs("group",{position:t,children:[c.jsxs("mesh",{ref:h,onClick:g=>{g.stopPropagation(),s(o)},onPointerOver:()=>{document.body.style.cursor="pointer"},onPointerOut:()=>{document.body.style.cursor="auto"},children:[c.jsx("sphereGeometry",{args:[r,16,16]}),c.jsx("meshStandardMaterial",{color:e?"#ffffff":i,emissive:i,emissiveIntensity:e?f*2:f})]}),c.jsx(jt,{center:!0,distanceFactor:8,occlude:!0,style:{pointerEvents:"none"},children:c.jsx("div",{className:"text-white text-xs font-medium whitespace-nowrap px-1.5 py-0.5 bg-black/70 rounded",style:{transform:"translateY(-200%)",opacity:e?1:.7},children:o.name})})]})}function Sn({category:o,position:t,mobile:i,reduceMotion:e,selected:s,onSelect:a}){const h=p.useRef(null),[r,f]=p.useState(!1),g=p.useMemo(()=>o.skills.map((d,x)=>{const O=x/o.skills.length*Math.PI*2,_=r?2+Math.random()*1:.5;return new j(Math.cos(O)*_,Math.sin(O)*_*.6,(Math.random()-.5)*(r?1:.3))}),[o.skills.length,r]),u=p.useMemo(()=>{if(g.length<2)return[];const d=[];for(let x=0;x<g.length;x++)d.push(g[x]),d.push(g[(x+1)%g.length]);return d},[g]);return Fe(()=>{h.current&&!r&&!e&&(h.current.rotation.y+=.002)}),c.jsxs("group",{ref:h,position:t,children:[c.jsxs("mesh",{onClick:()=>f(!r),onPointerOver:()=>document.body.style.cursor="pointer",onPointerOut:()=>document.body.style.cursor="auto",children:[c.jsx("sphereGeometry",{args:[r?.3:.5,32,32]}),c.jsx("meshStandardMaterial",{color:o.color,emissive:o.color,emissiveIntensity:r?1:.5,transparent:!0,opacity:.9})]}),c.jsx(jt,{position:[0,r?-3:-1.2,0],center:!0,distanceFactor:i?10:8,occlude:!0,children:c.jsxs("div",{className:`text-center cursor-pointer transition-all ${r?"scale-125":"hover:scale-110"}`,onClick:()=>f(!r),children:[c.jsx("div",{className:"text-4xl mb-2",children:o.icon}),c.jsx("div",{className:"text-white font-bold text-xl whitespace-nowrap drop-shadow-lg",style:{color:o.color},children:o.name}),c.jsxs("div",{className:"text-base text-gray-300 mt-1",children:[o.skills.length," skills"]}),!r&&c.jsx("div",{className:"text-sm text-cyan-400 mt-2 animate-pulse",children:"Tap to explore"})]})}),r&&o.skills.map((d,x)=>c.jsx(wn,{skill:d,position:g[x],color:o.color,isSelected:(s==null?void 0:s.skill)===d,onSelect:O=>a(O,o.color),reduceMotion:e},d.name)),r&&u.length>0&&c.jsx(vn,{points:u,color:o.color,lineWidth:1,transparent:!0,opacity:.3})]})}function En({selected:o,onClose:t}){return o?c.jsxs(Et.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"absolute bottom-40 md:bottom-20 left-4 right-4 md:left-8 md:right-auto md:max-w-sm z-20 bg-black/90 backdrop-blur border rounded-xl p-4",style:{borderColor:o.color},"data-no-swipe":!0,children:[c.jsxs("div",{className:"flex items-center justify-between mb-2",children:[c.jsx("h3",{className:"text-lg font-bold",style:{color:o.color},children:o.skill.name}),c.jsx("button",{onClick:t,"aria-label":"Close skill details",className:"w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white",style:{touchAction:"manipulation"},children:c.jsx("span",{className:"text-lg leading-none",children:"×"})})]}),c.jsx("div",{className:"flex gap-1 mb-1",children:[...Array(5)].map((i,e)=>c.jsx("span",{className:`text-base ${e<o.skill.level?"text-yellow-400":"text-gray-600"}`,children:"★"},e))}),o.skill.years&&c.jsxs("div",{className:"text-sm text-gray-300",children:[o.skill.years," years experience"]})]}):null}function Mn({open:o,onToggle:t}){return c.jsxs(c.Fragment,{children:[c.jsx("button",{onClick:t,className:"absolute top-28 left-4 z-20 px-3 py-2 rounded-lg bg-black/70 backdrop-blur border border-cyan-500/30 text-cyan-300 text-xs font-mono hover:border-cyan-400 transition-colors min-h-[44px] flex items-center gap-2",style:{touchAction:"manipulation"},children:o?"✕ Hide skills":"☰ All skills"}),o&&c.jsx(Et.div,{initial:{opacity:0,x:-16},animate:{opacity:1,x:0},className:"absolute top-44 left-4 z-20 w-[min(20rem,calc(100vw-2rem))] max-h-[55vh] overflow-y-auto bg-black/90 backdrop-blur border border-cyan-500/30 rounded-xl p-4","data-no-swipe":!0,children:Le.map(i=>c.jsxs("div",{className:"mb-3 last:mb-0",children:[c.jsxs("div",{className:"flex items-center gap-2 mb-1.5",style:{color:i.color},children:[c.jsx("span",{className:"text-base",children:i.icon}),c.jsx("span",{className:"font-bold text-sm",children:i.name})]}),c.jsx("div",{className:"space-y-1 pl-1",children:i.skills.map(e=>c.jsxs("div",{className:"flex items-center justify-between gap-3",children:[c.jsx("span",{className:"text-gray-300 text-sm",children:e.name}),c.jsx("span",{className:"text-xs whitespace-nowrap shrink-0",children:[...Array(5)].map((s,a)=>c.jsx("span",{className:a<e.level?"text-yellow-400":"text-gray-700",children:"★"},a))})]},e.name))})]},i.name))})]})}function Cn({onComplete:o}){const{playClick:t}=Rt(),i=Kt(),e=p.useMemo(()=>typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,[]),[s,a]=p.useState(null),[h,r]=p.useState(!1),f=p.useMemo(()=>{const g=i?4:6,u=i?1:2;return Le.map((d,x)=>{const O=x/Le.length*Math.PI*2,_=g+x%2*u;return[Math.cos(O)*_,Math.sin(x*.5)*(i?1.5:2),Math.sin(O)*_]})},[i]);return c.jsxs("div",{className:"h-dvh w-full bg-black relative",children:[c.jsxs("div",{className:"absolute top-4 left-4 right-14 md:right-auto z-10 text-white pointer-events-none",children:[c.jsx("h2",{className:"text-xl sm:text-2xl md:text-3xl font-bold tracking-wider text-cyan-400",children:"🌌 SKILL GALAXY"}),c.jsx("p",{className:"text-sm md:text-base opacity-80",children:"Tap a constellation, then a star, to read each skill"}),c.jsx("p",{className:"text-xs sm:text-sm text-cyan-400/70 mt-1 hidden sm:block",children:"🖱️ Drag to orbit • Scroll to zoom"}),c.jsx("p",{className:"text-xs text-cyan-400/70 mt-1 sm:hidden",children:"👆 Pinch to zoom • Drag to orbit"})]}),c.jsxs("div",{className:"absolute top-4 right-20 z-10 bg-black/50 backdrop-blur p-3 rounded-lg hidden md:block",children:[c.jsx("div",{className:"text-xs text-gray-400 mb-2",children:"Categories"}),c.jsx("div",{className:"grid grid-cols-2 gap-2",children:Le.map(g=>c.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[c.jsx("div",{className:"w-2 h-2 rounded-full",style:{backgroundColor:g.color}}),c.jsxs("span",{className:"text-white",children:[g.icon," ",g.name]})]},g.name))})]}),c.jsx(Mn,{open:h,onToggle:()=>{t(),r(g=>!g)}}),c.jsx(En,{selected:s,onClose:()=>a(null)}),c.jsx("button",{onClick:()=>{t(),o()},className:"absolute bottom-24 md:bottom-8 right-4 md:right-8 z-10 px-5 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg transition-colors text-sm md:text-base",children:"Continue →"}),c.jsxs(Xt,{dpr:[1,1.5],camera:{position:[0,10,20],fov:60},children:[c.jsx("color",{attach:"background",args:["#000008"]}),c.jsx(qt,{radius:100,depth:50,count:i?2e3:5e3,factor:4,saturation:0,fade:!0,speed:.5}),c.jsx("ambientLight",{intensity:.3}),c.jsx("pointLight",{position:[0,0,0],intensity:2,color:"#4488ff"}),c.jsx(yn,{enablePan:!1,minDistance:10,maxDistance:40,autoRotate:!e&&!s&&!h,autoRotateSpeed:.3}),c.jsxs("mesh",{position:[0,0,0],children:[c.jsx("sphereGeometry",{args:[1.5,32,32]}),c.jsx("meshStandardMaterial",{color:"#4488ff",emissive:"#0044aa",emissiveIntensity:3,transparent:!0,opacity:.8})]}),Le.map((g,u)=>c.jsx(Sn,{category:g,position:f[u],mobile:i,reduceMotion:e,selected:s,onSelect:(d,x)=>{t(),a({skill:d,color:x})}},g.name))]})]})}export{Cn as default};
