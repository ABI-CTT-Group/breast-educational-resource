(window.webpackJsonp=window.webpackJsonp||[]).push([[1,5,7],{531:function(e,t,n){var content=n(538);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(30).default)("66e67831",content,!0,{sourceMap:!1})},532:function(e,t,n){var content=n(542);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(30).default)("2f23ca69",content,!0,{sourceMap:!1})},537:function(e,t,n){"use strict";n(531)},538:function(e,t,n){var d=n(29)((function(i){return i[1]}));d.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap);"]),d.push([e.i,".r_main[data-v-75969408]{background:linear-gradient(81deg,rgba(254,205,211,.8),rgba(253,164,175,.8) 0,rgba(251,113,133,.8));border-radius:5px;box-shadow:5px 5px 10px #e4949e,-5px -5px 10px #ffb4c1}.model-control[data-v-75969408]{padding-top:80px}.model-control span[data-v-75969408]{color:#000;font-size:1rem;height:50px;text-align:center;width:100%}.model-control .mri[data-v-75969408]{height:500px;padding:0;width:500px}.baseDom-md[data-v-75969408]{height:100%;margin:0;padding:0;width:100%}.baseDom-sm[data-v-75969408]{height:100vw;margin:0;padding:0;width:100vw}",""]),d.locals={},e.exports=d},539:function(e,t,n){e.exports=n.p+"img/gestures-icons.c1d6385.png"},540:function(e,t,n){e.exports=n.p+"img/loading.282cccb.svg"},541:function(e,t,n){"use strict";n(532)},542:function(e,t,n){var d=n(29)((function(i){return i[1]}));d.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap);"]),d.push([e.i,".model[data-v-22eeef0e]{background:#fb7185;background:linear-gradient(90deg,#fb7185,#fda4af 48%,#fb7185)}.baseDom-md[data-v-22eeef0e]{height:100vh}.baseDom-md[data-v-22eeef0e],.baseDom-sm[data-v-22eeef0e]{margin:0;padding:0;width:100vw}.baseDom-sm[data-v-22eeef0e]{height:100vw}.baseModelControl[data-v-22eeef0e]{align-content:center;flex-direction:row;height:120px;justify-content:center;width:100vw}.baseModelControl .baseModelCB[data-v-22eeef0e]{height:70px;position:relative;width:240px}.baseModelControl .baseModelCB-md[data-v-22eeef0e]{height:100px;width:280px}.baseModelControl-md[data-v-22eeef0e]{bottom:10px;padding-left:100px;position:fixed}.baseModelControl-sm[data-v-22eeef0e]{height:60px;order:-1}.tab-main[data-v-22eeef0e]{background:#fb7185;background:linear-gradient(90deg,#fb7185,#fda4af 48%,#fb7185)}.tab-sub[data-v-22eeef0e]{background:#fda4af;color:#000!important}.custom-z-index[data-v-22eeef0e]{z-index:9998}",""]),d.locals={},e.exports=d},543:function(e,t,n){"use strict";n.r(t);n(71),n(25),n(37),n(62);var d={data:function(){return{modelControl:"3D MRI",Copper:null,THREE:null,baseRenderer:null,baseContainer:null,nrrdMaxIndex:-1,nrrdSliceZ:null,nrrdMeshes:null,modelData:null,modelToScenes:{},modelName:null,rightPanelText:{},mouseActions:null,modelUrlsArray:{normal:["modelView/density-1/right/mri.nrrd","modelView/density-1/right/mri_view.json"],density_1:["modelView/density-1/right/mri.nrrd","modelView/density-1/right/mri_view.json"],density_2:["modelView/density-2/right/mri.nrrd","modelView/density-2/right/mri_view.json"],density_3:["modelView/density-3/right/mri.nrrd","modelView/density-3/right/mri_view.json"],density_4:["modelView/density-4/right/mri.nrrd","modelView/density-4/right/mri_view.json"],cyst:["modelView/density-4/right/mri.nrrd","modelView/density-4/right/mri_view.json"],fibroadenoma:["modelView/density-1/right/mri.nrrd","modelView/density-1/right/mri_view.json"],calcifications:["modelView/density-1/right/mri.nrrd","modelView/density-1/right/mri_view.json"],dcis:["modelView/density-1/right/mri.nrrd","modelView/density-1/right/mri_view.json"],lobular:["modelView/density-1/right/mri.nrrd","modelView/density-1/right/mri_view.json"],ductal:["modelView/density-1/right/mri.nrrd","modelView/density-1/right/mri_view.json"]}}},computed:{mdAndUp:function(){return this.$vuetify.breakpoint.mdAndUp}},mounted:function(){var e=this;this.Copper=this.$Copper(),this.THREE=this.$three(),this.raycaster=this.$raycaster(),this.modelToScenes=this.$modelToScenes(),this.baseRenderer=this.$baseRightRenderer(),this.baseContainer=this.$baseRightContainer(),this.modelData=this.$modelData(),this.container=this.$refs.rightContainer,this.rightPanelText=this.$rightPanelText(),this.container.appendChild(this.baseContainer),this.modelName=this.$model().name,this.start(),window.addEventListener("resize",(function(){setTimeout((function(){e.scene&&e.scene.onWindowResize()}),500)}))},methods:{start:function(){this.loadNrrd(this.modelUrlsArray[this.modelName][0],this.modelName+"right_mri")},loadNrrd:function(e,t){var n=this,d=this.modelUrlsArray[this.modelName][1],r=this.Copper.loading("loading/loading.svg");this.scene=this.baseRenderer.getSceneByName(t),void 0===this.scene?(this.scene=this.baseRenderer.createScene(t),this.scene.controls.rotateSpeed=3,this.scene.controls.minDistance=500,this.scene.controls.maxDistance=3e3,this.scene.controls.panSpeed=.5,this.baseRenderer.setCurrentScene(this.scene),this.scene.loadNrrd(e,r,!0,(function(e,t,d,r){n.nrrdMeshes=t,n.scene.addObject(t.z);var o=e.header.space_origin.map((function(e){return Number(e)})),l=e.RASDimensions,m=-(2*o[0]+l[0])/2,c=-(2*o[1]+l[1])/2,h=-(2*o[2]+l[2])/2;n.nrrdMaxIndex=d.z.MaxIndex,n.nrrdSliceZ=d.z,n.nrrdBias=new n.THREE.Vector3(m,c,h);var f=new n.THREE.BoxGeometry(l[0],l[1],l[2]),w=new n.THREE.MeshBasicMaterial({color:65280}),v=new n.THREE.Mesh(f,w),y=new n.THREE.BoxHelper(v,16777215);n.scene.scene.add(y),n.modelUrlsArray[n.modelName].length>2&&n.loadModel(n.modelUrlsArray[n.modelName][2]);var data={nrrdSliceZ:n.nrrdSliceZ,nrrdMesh:n.nrrdMeshes.z,nrrdMaxIndex:n.nrrdMaxIndex};void 0===n.modelData[n.modelName]&&(n.modelData[n.modelName]={}),n.modelData[n.modelName].right=data,n.addContainerListener(),n.scene.onWindowResize()}),{openGui:!1}),this.scene.loadViewUrl(d),this.modelToScenes[t]=this.scene):(this.baseRenderer.setCurrentScene(this.scene),this.addContainerListener()),this.scene.onWindowResize()},loadModel:function(e){var t=this;this.scene.loadOBJ(e,(function(content){var e=(new t.THREE.Box3).setFromObject(content);e.getSize(new t.THREE.Vector3).length(),e.getCenter(new t.THREE.Vector3);content.position.set(t.nrrdBias.x,t.nrrdBias.y,t.nrrdBias.z),content.renderOrder=3,content.traverse((function(e){e.isMesh&&(e.material=new t.THREE.MeshPhysicalMaterial({side:t.THREE.DoubleSide,transparent:!0,opacity:.4,color:"#a3932a",wireframe:!1}))}))})),this.scene.onWindowResize()},addContainerListener:function(){var data=this.modelData[this.modelName].right;null===this.mouseActions&&(this.mouseActions=this.raycaster(this.scene,this.container,data.nrrdSliceZ,data.nrrdMesh,data.nrrdMaxIndex)),this.container.addEventListener("pointermove",this.mouseActions.mouseMove)},removeContainerListener:function(){null!==this.mouseActions&&(this.container.removeEventListener("pointermove",this.mouseActions.mouseMove),this.container.removeEventListener("pointerdown",this.mouseActions.mouseDown),this.container.removeEventListener("pointerup",this.mouseActions.mouseUp))}},beforeDestroy:function(){this.removeContainerListener()}},r=(n(537),n(34)),component=Object(r.a)(d,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"w-full h-full r_main relative"},[t("div",{staticClass:"absolute flex justify-center items-center top-0 right-0 w-full h-11 p-1 my-2"},[t("span",{staticClass:"text-black text-base font-thin"},[e._v(e._s(e.modelControl))])]),e._v(" "),t("div",{staticClass:"hidden md:flex absolute w-full top-24 flex justify-center items-center text-gray-950 text-xs"},[t("div",{staticClass:"w-4/5 text-left",domProps:{innerHTML:e._s(e.rightPanelText[e.modelName])}})]),e._v(" "),t("div",{ref:"rightContainer",staticClass:"w-full h-full",class:e.mdAndUp?"baseDom-md":"baseDom-sm"})])}),[],!1,null,"75969408",null);t.default=component.exports},547:function(e,t,n){var content=n(562);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(30).default)("280fdd51",content,!0,{sourceMap:!1})},551:function(e,t,n){"use strict";n.r(t);var d,r=n(583),o=n(518),l=n(582),m=n(584),c=n(20),h=(n(25),n(62),n(76),n(540)),f=n.n(h),w={data:function(){return{Copper:null,THREE:null,baseRenderer:null,baseContainer:null,container:null,modelData:null,nrrdMaxIndex:-1,nrrdSliceZ:null,nrrdMeshes:null,loadFirstTime:!0,tab1:"3D Mammogram",tab2:"2D Mammogram",currentView:"3D Mammogram",mouseActions:null,modelName:null,middlePanelText:{},modelToScenes:{},modelUrlsArray:{normal:["modelView/density-1/middle/m3d.nrrd","modelView/density-1/middle/m_view.json","modelView/density-1/middle/m2d.nrrd"],density_1:["modelView/density-1/middle/m3d.nrrd","modelView/density-1/middle/m_view.json","modelView/density-1/middle/m2d.nrrd"],density_2:["modelView/density-2/middle/m3d.nrrd","modelView/density-2/middle/m_view.json","modelView/density-2/middle/m2d.nrrd"],density_3:["modelView/density-3/middle/m3d.nrrd","modelView/density-3/middle/m_view.json","modelView/density-3/middle/m2d.nrrd"],density_4:["modelView/density-4/middle/m3d.nrrd","modelView/density-4/middle/m_view.json","modelView/density-4/middle/m2d.nrrd"],cyst:["modelView/benign-cyst/middle/m3d.nrrd","modelView/benign-cyst/middle/m_view.json","modelView/benign-cyst/middle/u2d.nrrd","modelView/benign-cyst/middle/u_view.json"],fibroadenoma:["modelView/density-1/middle/m3d.nrrd","modelView/density-1/middle/m_view.json","modelView/density-1/middle/m2d.nrrd"],calcifications:["modelView/density-1/middle/m3d.nrrd","modelView/density-1/middle/m_view.json","modelView/density-1/middle/m2d.nrrd"],dcis:["modelView/density-1/middle/m3d.nrrd","modelView/density-1/middle/m_view.json","modelView/density-1/middle/m2d.nrrd"],lobular:["modelView/density-1/middle/m3d.nrrd","modelView/density-1/middle/m_view.json","modelView/density-1/middle/m2d.nrrd"],ductal:["modelView/density-1/middle/m3d.nrrd","modelView/density-1/middle/m_view.json","modelView/density-1/middle/m2d.nrrd"]}}},created:(d=Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),function(){return d.apply(this,arguments)}),computed:{mdAndUp:function(){return this.$vuetify.breakpoint.mdAndUp}},mounted:function(){var e=this;this.Copper=this.$Copper(),this.baseRenderer=this.$baseRenderer(),this.THREE=this.$three(),this.raycaster=this.$raycaster(),this.modelToScenes=this.$modelToScenes(),this.baseContainer=this.$baseContainer(),this.modelData=this.$modelData(),this.container=this.$refs.baseDomObject,this.modelName=this.$model().name,this.middlePanelText=this.$middlePanelText(),"cyst"===this.modelName?this.tab2="2D Ultrasound":this.tab2="2D Mammogram",this.$nuxt.$emit("onNavChange",this.modelName),this.container.appendChild(this.baseContainer),this.start(),window.addEventListener("resize",(function(){setTimeout((function(){e.mdAndUp?e.baseContainer.style.height="100vh":e.baseContainer.style.height="100vw",e.scene.onWindowResize()}),500)}))},methods:{start:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.loadNrrd(e.modelUrlsArray[e.modelName][0],e.modelName+"middle_3d");case 1:case"end":return t.stop()}}),t)})))()},tabsOnChange:function(a){if(!this.loadFirstTime){var e=this.modelUrlsArray[this.modelName][0];0===a?(this.currentView="3D Mammogram",this.loadNrrd(e,this.modelName+"middle_3d")):(this.currentView="cyst"===this.modelName?"2D Ultrasound":"2D Mammogram",this.loadNrrd(this.modelUrlsArray[this.modelName][2],this.modelName+"middle_2d"))}},loadNrrd:function(e,t){var n=this,d="2D Ultrasound"===this.currentView?this.modelUrlsArray[this.modelName][3]:this.modelUrlsArray[this.modelName][1],r=this.Copper.loading(f.a),o=this.Copper.loading(f.a),l=r.loadingContainer;l.style.position="fixed",l.style.top=0,l.style.left=0,l.style.right=0,l.style.bottom=0,l.style.display="flex",this.baseContainer.appendChild(l),r.progress.innerHTML="Loading image...",this.scene=this.baseRenderer.getSceneByName(t),void 0===this.scene?(this.scene=this.baseRenderer.createScene(t),this.scene.controls.rotateSpeed=3,this.scene.controls.panSpeed=.5,this.baseRenderer.setCurrentScene(this.scene),this.scene.loadNrrd(e,o,!0,(function(e,t,d,r){n.nrrdMeshes=t,n.nrrdMeshes.x.name="x",n.nrrdMeshes.y.name="y",n.nrrdMeshes.z.name="z",n.scene.addObject(t.z),n.nrrdMaxIndex=d.z.MaxIndex,n.nrrdSliceZ=d.z;var o=e.RASDimensions,m=-o[0]/2,c=-o[1]/2,h=-o[2]/2;if(n.nrrdMaxIndex=d.z.MaxIndex,n.nrrdSliceZ=d.z,n.nrrdBias=new n.THREE.Vector3(m,c,h),"2D Mammogram"===n.currentView||"2D Ultrasound"===n.currentView)n.scene.controls.noRotate=!0,n.scene.controls.noPan=!0,n.removeContainerListener();else{var f=new n.THREE.BoxGeometry(o[0],o[1],o[2]),w=new n.THREE.MeshBasicMaterial({color:65280}),v=new n.THREE.Mesh(f,w),y=new n.THREE.BoxHelper(v,16777215);n.scene.scene.add(y);var data={nrrdSliceZ:n.nrrdSliceZ,nrrdMesh:n.nrrdMeshes.z,nrrdMaxIndex:n.nrrdMaxIndex};void 0===n.modelData[n.modelName]&&(n.modelData[n.modelName]={}),n.modelData[n.modelName].middle=data,n.addContainerListener(),n.scene.onWindowResize(),$nuxt.$emit("finishLoad",!0)}l.style.display="none"}),{openGui:!1}),this.scene.loadViewUrl(d),this.modelToScenes[t]=this.scene):(l.style.display="none",this.baseRenderer.setCurrentScene(this.scene),"2D Mammogram"===this.currentView?(this.scene.controls.noRotate=!0,this.scene.controls.noPan=!0,this.removeContainerListener()):this.addContainerListener()),this.loadFirstTime=!1,this.scene.onWindowResize()},addContainerListener:function(){if(this.modelData[this.modelName]){var data=this.modelData[this.modelName].middle;null===this.mouseActions&&(this.mouseActions=this.raycaster(this.scene,this.container,data.nrrdSliceZ,data.nrrdMesh,data.nrrdMaxIndex)),this.container.addEventListener("pointermove",this.mouseActions.mouseMove)}},removeContainerListener:function(){null!==this.mouseActions&&(this.container.removeEventListener("pointermove",this.mouseActions.mouseMove),this.container.removeEventListener("pointerdown",this.mouseActions.mouseDown),this.container.removeEventListener("pointerup",this.mouseActions.mouseUp))},onResetAllModelsView:function(){for(var e in this.modelToScenes)this.modelToScenes.hasOwnProperty(e)&&this.modelToScenes[e].resetView()}},watch:{},beforeDestroy:function(){this.removeContainerListener()}},v=w,y=(n(541),n(34)),component=Object(y.a)(v,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"model h-full relative"},[t(m.a,{staticClass:"absolute flex justify-center tab-main",on:{change:e.tabsOnChange}},[t(l.a,{staticClass:"tab-sub w-40"},[e._v(e._s(e.tab1))]),e._v(" "),t(l.a,{staticClass:"tab-sub w-40"},[e._v(e._s(e.tab2))])],1),e._v(" "),t("div",{staticClass:"hidden md:flex absolute w-full top-24 flex justify-center items-center text-gray-950 text-xs"},[t("div",{staticClass:"w-1/4 text-left",domProps:{innerHTML:e._s(e.middlePanelText[e.modelName])}})]),e._v(" "),t("div",{ref:"baseDomObject",staticClass:"h-full",class:e.mdAndUp?"baseDom-md":"baseDom-sm"}),e._v(" "),t("div",{staticClass:"md:hidden flex fixed bottom-36 right-5 cursor-pointer custom-z-index"},[t("span",{staticClass:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),e._v(" "),t(r.a,{attrs:{color:"pink lighten-2"},on:{click:e.onResetAllModelsView}},[t(o.a,{attrs:{dark:""}},[e._v("\n        mdi-refresh\n      ")])],1)],1),e._v(" "),t("div",{ref:"threeDControls",staticClass:"hidden baseModelControl md:flex",class:e.mdAndUp?"baseModelControl-md":"baseModelControl-sm"},[t("div",{staticClass:"baseModelCB",class:e.mdAndUp?"baseModelCB-md":""},[t("button",{staticClass:"absolute top-0 left-0 w-1/4 h-full hover:bg-zinc-700/30 rounded-lg",on:{click:e.onResetAllModelsView}}),e._v(" "),t("img",{staticClass:"h-full w-full md:object-contain",attrs:{src:n(539)}})])])],1)}),[],!1,null,"22eeef0e",null);t.default=component.exports},561:function(e,t,n){"use strict";n(547)},562:function(e,t,n){var d=n(29)((function(i){return i[1]}));d.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap);"]),d.push([e.i,".right-panel[data-v-500c0533]{background:#fb7185;background:linear-gradient(90deg,#fb7185,#fda4af 48%,#fb7185)}.logo-mdAndUp[data-v-500c0533]{width:50%}.logo-md[data-v-500c0533]{display:block;height:10%}",""]),d.locals={},e.exports=d},580:function(e,t,n){"use strict";n.r(t);var d={data:function(){return{}},mounted:function(){},computed:{mdAndUp:function(){return this.$vuetify.breakpoint.mdAndUp}},components:{PanelControls:n(543).default}},r=(n(561),n(34)),component=Object(r.a)(d,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"w-screen h-screen flex flex-col md:flex-row right-panel"},[t("div",{staticClass:"flex-1"},[t("model")],1),e._v(" "),t("div",{staticClass:"flex-1 flex flex-col justify-center items-center md:fixed md:right-0 md:top-0 md:h-full md:w-1/4"},[t("PanelControls"),e._v(" "),t("div",{staticClass:"hidden md:flex md:fixed md:bottom-0 md:right-0"},[t("logo")],1)],1)])}),[],!1,null,"500c0533",null);t.default=component.exports;installComponents(component,{Model:n(551).default,PanelControls:n(543).default,Logo:n(329).default})}}]);