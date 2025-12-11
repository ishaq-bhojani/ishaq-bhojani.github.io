import{r as o,j as e}from"./index-DUjezpEW.js";import{c as P,e as C,j as M,V as b,_ as k,i as v,u as E,w as _,M as w,C as z}from"./extends-D2_nY6Nc.js";import{C as F,H as S,P as I,B as y}from"./shapes-DggS-XMy.js";import{v as D}from"./constants-BrGeUwdl.js";import{F as A}from"./Float-CInPZGGP.js";function O(r,a="pointer",t="auto",s=document.body){o.useEffect(()=>{if(r)return s.style.cursor=a,()=>void(s.style.cursor=t)},[r])}class R extends P{constructor(){super({uniforms:{depth:{value:null},opacity:{value:1},attenuation:{value:2.5},anglePower:{value:12},spotPosition:{value:new b(0,0,0)},lightColor:{value:new M("white")},cameraNear:{value:0},cameraFar:{value:1},resolution:{value:new C(0,0)}},transparent:!0,depthWrite:!1,vertexShader:`
        varying vec3 vNormal;
        varying float vViewZ;
        varying float vIntensity;
        uniform vec3 spotPosition;
        uniform float attenuation;

        #include <common>
        #include <logdepthbuf_pars_vertex>

        void main() {
          // compute intensity
          vNormal = normalize(normalMatrix * normal);
          vec4 worldPosition = modelMatrix * vec4(position, 1);
          vec4 viewPosition = viewMatrix * worldPosition;
          vViewZ = viewPosition.z;

          vIntensity = 1.0 - saturate(distance(worldPosition.xyz, spotPosition) / attenuation);

          gl_Position = projectionMatrix * viewPosition;

          #include <logdepthbuf_vertex>
        }
      `,fragmentShader:`
        varying vec3 vNormal;
        varying float vViewZ;
        varying float vIntensity;

        uniform vec3 lightColor;
        uniform float anglePower;
        uniform sampler2D depth;
        uniform vec2 resolution;
        uniform float cameraNear;
        uniform float cameraFar;
        uniform float opacity;

        #include <packing>
        #include <logdepthbuf_pars_fragment>

        float readDepth(sampler2D depthSampler, vec2 uv) {
          float fragCoordZ = texture(depthSampler, uv).r;

          // https://github.com/mrdoob/three.js/issues/23072
          #ifdef USE_LOGDEPTHBUF
            float viewZ = 1.0 - exp2(fragCoordZ * log(cameraFar + 1.0) / log(2.0));
          #else
            float viewZ = perspectiveDepthToViewZ(fragCoordZ, cameraNear, cameraFar);
          #endif

          return viewZ;
        }

        void main() {
          #include <logdepthbuf_fragment>

          vec3 normal = vec3(vNormal.x, vNormal.y, abs(vNormal.z));
          float angleIntensity = pow(dot(normal, vec3(0, 0, 1)), anglePower);
          float intensity = vIntensity * angleIntensity;

          // fades when z is close to sampled depth, meaning the cone is intersecting existing geometry
          bool isSoft = resolution[0] > 0.0 && resolution[1] > 0.0;
          if (isSoft) {
            vec2 uv = gl_FragCoord.xy / resolution;
            intensity *= smoothstep(0.0, 1.0, vViewZ - readDepth(depth, uv));
          }

          gl_FragColor = vec4(lightColor, intensity * opacity);

          #include <tonemapping_fragment>
          #include <${D>=154?"colorspace_fragment":"encodings_fragment"}>
        }
      `})}}function V({opacity:r=1,radiusTop:a,radiusBottom:t,depthBuffer:s,color:u="white",distance:i=5,angle:p=.15,attenuation:x=5,anglePower:l=5}){const d=o.useRef(null),n=v(f=>f.size),m=v(f=>f.camera),c=v(f=>f.viewport.dpr),[h]=o.useState(()=>new R),[g]=o.useState(()=>new b);a=a===void 0?.1:a,t=t===void 0?p*7:t,E(()=>{h.uniforms.spotPosition.value.copy(d.current.getWorldPosition(g)),d.current.lookAt(d.current.parent.target.getWorldPosition(g))});const N=o.useMemo(()=>{const f=new _(a,t,i,128,64,!0);return f.applyMatrix4(new w().makeTranslation(0,-i/2,0)),f.applyMatrix4(new w().makeRotationX(-Math.PI/2)),f},[i,a,t]);return o.createElement(o.Fragment,null,o.createElement("mesh",{ref:d,geometry:N,raycast:()=>null},o.createElement("primitive",{object:h,attach:"material","uniforms-opacity-value":r,"uniforms-lightColor-value":u,"uniforms-attenuation-value":x,"uniforms-anglePower-value":l,"uniforms-depth-value":s,"uniforms-cameraNear-value":m.near,"uniforms-cameraFar-value":m.far,"uniforms-resolution-value":s?[n.width*c,n.height*c]:[0,0]})))}const Z=o.forwardRef(({opacity:r=1,radiusTop:a,radiusBottom:t,depthBuffer:s,color:u="white",distance:i=5,angle:p=.15,attenuation:x=5,anglePower:l=5,volumetric:d=!0,debug:n=!1,children:m,...c},h)=>{const g=o.useRef(null);return o.useImperativeHandle(h,()=>g.current,[]),o.createElement("group",null,n&&g.current&&o.createElement("spotLightHelper",{args:[g.current]}),o.createElement("spotLight",k({ref:g,angle:p,color:u,distance:i,castShadow:!0},c),d&&o.createElement(V,{debug:n,opacity:r,radiusTop:a,radiusBottom:t,depthBuffer:s,color:u,distance:i,angle:p,attenuation:x,anglePower:l})),m&&o.cloneElement(m,{spotlightRef:g,debug:n}))});function j({position:r,label:a,isLocked:t,onOpen:s,type:u}){const[i,p]=o.useState(!1);O(i);const x=o.useRef(null);return e.jsxs("group",{position:r,ref:x,children:[e.jsx(A,{speed:2,rotationIntensity:.2,floatIntensity:.5,children:e.jsxs("group",{onClick:l=>{l.stopPropagation(),s()},onPointerOver:()=>p(!0),onPointerOut:()=>p(!1),children:[e.jsx(y,{args:[1.5,1,1],position:[0,0,0],children:e.jsx("meshStandardMaterial",{color:t?u==="edu"?"#8B4513":"#5D4037":"#FFD700",roughness:.3,metalness:.4})}),e.jsx(y,{args:[1.5,.4,1],position:[0,.7,0],children:e.jsx("meshStandardMaterial",{color:t?u==="edu"?"#654321":"#3E2723":"#FFAA00",roughness:.3,metalness:.4})}),e.jsx(y,{args:[.3,.4,.1],position:[0,.5,.51],children:e.jsx("meshStandardMaterial",{color:t?"silver":"black",metalness:.8,roughness:.2})})]})}),e.jsx(S,{position:[0,2,0],center:!0,distanceFactor:12,zIndexRange:[100,0],children:e.jsx("div",{className:`pointer-events-none transition-all duration-300 ${i?"scale-110":"scale-100"}`,children:e.jsxs("div",{className:`
                    px-3 py-2 rounded-lg text-center min-w-[150px] shadow-lg border
                    ${t?"bg-gray-900/90 text-gray-300 border-gray-600":"bg-yellow-900/90 text-yellow-100 border-yellow-500"}
                `,children:[e.jsx("div",{className:"font-bold text-sm leading-tight mb-1",children:a}),e.jsx("div",{className:`text-[10px] uppercase tracking-wider ${t?"text-red-400":"text-green-400"}`,children:t?"LOCKED":"OPEN"})]})})})]})}function L(){return e.jsxs("group",{children:[e.jsx("gridHelper",{args:[60,60,3355443,1118481],position:[0,-2,0]}),e.jsx(I,{args:[100,100],rotation:[-Math.PI/2,0,0],position:[0,-2.01,0],children:e.jsx("meshStandardMaterial",{color:"#050505",roughness:.8})}),e.jsx("ambientLight",{intensity:.5}),e.jsx("pointLight",{position:[10,20,10],intensity:1.5,color:"#ffaa00",castShadow:!0}),e.jsx("pointLight",{position:[-10,5,-10],intensity:.5,color:"#0044ff"}),e.jsx(Z,{position:[0,10,0],angle:.2,penumbra:1,intensity:2,castShadow:!0}),e.jsx("fog",{attach:"fog",args:["#000000",5,30]})]})}function G({type:r,onClose:a,onSolve:t}){const s=()=>{t()};return e.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/90 z-50 p-4 backdrop-blur-sm",children:e.jsxs("div",{className:"bg-gray-900 border border-yellow-600 p-8 rounded-lg max-w-md w-full shadow-[0_0_50px_rgba(255,165,0,0.3)]",children:[e.jsx("h3",{className:"text-2xl font-bold mb-2 text-yellow-500 font-mono",children:r==="quiz"?"Knowledge Check":"Skill Challenge"}),e.jsx("p",{className:"mb-6 text-gray-300",children:"To open this chest, you must prove your worth."}),e.jsxs("div",{className:"flex justify-end gap-3",children:[e.jsx("button",{onClick:a,className:"px-4 py-2 text-gray-400 hover:text-white transition-colors",children:"Retreat"}),e.jsx("button",{onClick:s,className:"px-6 py-2 bg-yellow-700 hover:bg-yellow-600 text-white font-bold rounded shadow-lg transition-all",children:"UNLOCK"})]})]})})}function K({data:r,onComplete:a}){const[t,s]=o.useState([]),[u,i]=o.useState(null),p=(n,m)=>{if(t.includes(n)){const c=r.certificates.find(h=>h.name===n);c&&c.link&&window.open(c.link,"_blank");return}i({id:n,type:m})},x=()=>{u&&(s([...t,u.id]),i(null))},l=t.length>=r.certificates.length+r.education.length;o.useEffect(()=>{l&&a()},[l,a]);const d=4;return e.jsxs("div",{className:"h-screen w-full bg-black relative",children:[e.jsxs("div",{className:"absolute top-4 left-4 z-10 text-white pointer-events-none",children:[e.jsx("h2",{className:"text-2xl font-bold tracking-wider text-yellow-500",children:"VAULT OF KNOWLEDGE"}),e.jsx("p",{className:"text-sm opacity-70",children:"Unlock chests to view credentials. (Click chests)"})]}),e.jsxs(z,{camera:{position:[0,8,12],fov:45},children:[e.jsx(L,{}),e.jsxs("group",{position:[-d/2*2+1,0,-2],children:[r.education.map((n,m)=>{const c=Math.floor(m/d),h=m%d;return e.jsx(j,{position:[h*4,0,c*4],label:n.degree,type:"edu",isLocked:!t.includes(n.degree),onOpen:()=>p(n.degree,"quiz")},n.degree)}),r.certificates.map((n,m)=>{const c=m+r.education.length,h=Math.floor(c/d),g=c%d;return e.jsx(j,{position:[g*4,0,h*4],label:n.name,type:"cert",isLocked:!t.includes(n.name),onOpen:()=>p(n.name,"code")},n.name)})]}),e.jsxs("group",{position:[8,0,-5],rotation:[0,-.8,0],children:[e.jsxs("mesh",{position:[0,1.5,0],children:[e.jsx("boxGeometry",{args:[1.5,2,2]}),e.jsx("meshStandardMaterial",{color:l?"#228b22":"#8b0000",roughness:.2})]}),e.jsxs("mesh",{position:[0,3,.5],children:[e.jsx(F,{args:[.3,.6,1.5]}),e.jsx("meshStandardMaterial",{color:l?"#32cd32":"#a52a2a"})]}),e.jsxs("mesh",{position:[0,4,1],children:[e.jsx("boxGeometry",{args:[.8,.8,1.2]}),e.jsx("meshStandardMaterial",{color:l?"#32cd32":"#a52a2a"})]}),e.jsxs("mesh",{position:[1.5,2.5,0],rotation:[0,0,-.5],children:[e.jsx("boxGeometry",{args:[2,.1,1]}),e.jsx("meshStandardMaterial",{color:"black",transparent:!0,opacity:.8})]}),e.jsxs("mesh",{position:[-1.5,2.5,0],rotation:[0,0,.5],children:[e.jsx("boxGeometry",{args:[2,.1,1]}),e.jsx("meshStandardMaterial",{color:"black",transparent:!0,opacity:.8})]}),e.jsx(S,{position:[0,5,0],center:!0,children:e.jsx("div",{className:`px-2 py-1 rounded font-bold whitespace-nowrap ${l?"bg-green-900 text-green-300":"bg-red-900 text-red-300"}`,children:l?"ACCESS GRANTED":"HALT! I AM WATCHING"})})]})]}),u&&e.jsx(G,{type:u.type,onClose:()=>i(null),onSolve:x})]})}export{K as default};
