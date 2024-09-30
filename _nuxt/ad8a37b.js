(window.webpackJsonp=window.webpackJsonp||[]).push([[7,4,6],{528:function(e,t,n){var content=n(534);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(30).default)("01fc15c6",content,!0,{sourceMap:!1})},529:function(e,t,n){var content=n(539);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(30).default)("cd76b2ce",content,!0,{sourceMap:!1})},530:function(e,t,n){"use strict";n.r(t);n(59),n(71),n(25),n(37),n(62);var o={data:function(){return{modelControl:"MRI",Copper:null,THREE:null,baseRenderer:null,baseContainer:null,nrrdMaxIndex:-1,nrrdSliceZ:null,nrrdMeshes:null,modelData:null,modelToScenes:{},modelName:null,mouseActions:null,modelUrlsArray:{normal:["modelView/density-1/right/mri.nrrd","modelView/density-1/right/mri_view.json"],density_2:["modelView/density-2/right/mri.nrrd","modelView/density-2/right/mri_view.json"],density_3:["modelView/density-3/right/mri.nrrd","modelView/density-3/right/mri_view.json"],density_4:["modelView/density-4/right/mri.nrrd","modelView/density-4/right/mri_view.json"]}}},mounted:function(){var e=this;this.Copper=this.$Copper(),this.THREE=this.$three(),this.raycaster=this.$raycaster(),this.modelToScenes=this.$modelToScenes(),this.baseRenderer=this.$baseRightRenderer(),this.baseContainer=this.$baseRightContainer(),this.modelData=this.$modelData(),this.container=this.$refs.rightContainer,this.container.appendChild(this.baseContainer),this.modelName=this.$model().name,["cyst","fibroadenoma","calcifications","fat_necrosis","dcis","lobular","ductal"].includes(this.modelName)&&(this.modelName="normal"),this.start(),window.addEventListener("resize",(function(){setTimeout((function(){e.scene&&e.scene.onWindowResize()}),500)}))},methods:{start:function(){this.loadNrrd(this.modelUrlsArray[this.modelName][0],this.modelName+"right_mri")},loadNrrd:function(e,t){var n=this,o=this.modelUrlsArray[this.modelName][1],r=this.Copper.loading("loading/loading.svg");this.scene=this.baseRenderer.getSceneByName(t),void 0===this.scene?(this.scene=this.baseRenderer.createScene(t),this.scene.controls.panSpeed=.5,this.baseRenderer.setCurrentScene(this.scene),this.scene.loadNrrd(e,r,!0,(function(e,t,o,r){n.nrrdMeshes=t,n.scene.addObject(t.z);var d=e.header.space_origin.map((function(e){return Number(e)})),l=e.RASDimensions,m=-(2*d[0]+l[0])/2,c=-(2*d[1]+l[1])/2,h=-(2*d[2]+l[2])/2;n.nrrdMaxIndex=o.z.MaxIndex,n.nrrdSliceZ=o.z,n.nrrdBias=new n.THREE.Vector3(m,c,h),n.modelUrlsArray[n.modelName].length>2&&n.loadModel(n.modelUrlsArray[n.modelName][2]);var data={nrrdSliceZ:n.nrrdSliceZ,nrrdMesh:n.nrrdMeshes.z,nrrdMaxIndex:n.nrrdMaxIndex};void 0===n.modelData[n.modelName]&&(n.modelData[n.modelName]={}),n.modelData[n.modelName].right=data,n.addContainerListener(),n.scene.onWindowResize()}),{openGui:!1}),this.scene.loadViewUrl(o),this.scene.updateBackground("#f8cdd6","#f8cdd6"),this.Copper.setHDRFilePath("environment/venice_sunset_1k.hdr"),this.baseRenderer.updateEnvironment(),this.modelToScenes[t]=this.scene):(this.baseRenderer.setCurrentScene(this.scene),this.addContainerListener()),this.scene.onWindowResize()},loadModel:function(e){var t=this;this.scene.loadOBJ(e,(function(content){var e=(new t.THREE.Box3).setFromObject(content);e.getSize(new t.THREE.Vector3).length(),e.getCenter(new t.THREE.Vector3);content.position.set(t.nrrdBias.x,t.nrrdBias.y,t.nrrdBias.z),content.renderOrder=3,content.traverse((function(e){e.isMesh&&(e.material=new t.THREE.MeshPhysicalMaterial({side:t.THREE.DoubleSide,transparent:!0,opacity:.4,color:"#a3932a",wireframe:!1}))}))})),this.scene.onWindowResize()},addContainerListener:function(){var data=this.modelData[this.modelName].right;null===this.mouseActions&&(this.mouseActions=this.raycaster(this.scene,this.container,data.nrrdSliceZ,data.nrrdMesh,data.nrrdMaxIndex)),this.container.addEventListener("mousemove",this.mouseActions.mouseMove)},removeContainerListener:function(){null!==this.mouseActions&&(this.container.removeEventListener("mousemove",this.mouseActions.mouseMove),this.container.removeEventListener("mousedown",this.mouseActions.mouseDown),this.container.removeEventListener("mouseup",this.mouseActions.mouseUp))}},beforeDestroy:function(){this.removeContainerListener()}},r=(n(533),n(34)),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"w-full h-1/2"},[t("span",{staticClass:"font-bold",staticStyle:{color:"rgb(244, 55, 149)"}},[e._v("\n    "+e._s(e.modelControl)+"\n  ")]),e._v(" "),t("div",{ref:"rightContainer",staticClass:"w-full h-full"})])}),[],!1,null,"3462b723",null);t.default=component.exports},533:function(e,t,n){"use strict";n(528)},534:function(e,t,n){var o=n(29)((function(i){return i[1]}));o.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap);"]),o.push([e.i,".model-control[data-v-3462b723]{padding-top:80px}.model-control span[data-v-3462b723]{color:#f43795;font-size:1rem;font-weight:700}.model-control .mri[data-v-3462b723]{height:500px;padding:0;width:500px}",""]),o.locals={},e.exports=o},535:function(e,t,n){var content=n(545);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(30).default)("2022b7ac",content,!0,{sourceMap:!1})},536:function(e,t,n){e.exports=n.p+"img/gestures-icons.c1d6385.png"},537:function(e,t,n){e.exports=n.p+"img/loading.282cccb.svg"},538:function(e,t,n){"use strict";n(529)},539:function(e,t,n){var o=n(29)((function(i){return i[1]}));o.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap);"]),o.push([e.i,".baseModelControl[data-v-42e833d9]{align-content:center;display:flex;flex-direction:row;height:120px;justify-content:center;width:100vw}.baseModelControl .baseModelCB[data-v-42e833d9]{height:70px;position:relative;width:240px}.baseModelControl .baseModelCB-md[data-v-42e833d9]{height:100px;width:280px}.baseModelControl-md[data-v-42e833d9]{bottom:10px;padding-left:100px;position:fixed}.baseModelControl-sm[data-v-42e833d9]{height:60px;order:-1}.tab-main[data-v-42e833d9]{background-color:#ef9baa!important;color:#000!important}",""]),o.locals={},e.exports=o},540:function(e,t,n){"use strict";n.r(t);var o,r=n(577),d=n(578),l=n(20),m=(n(59),n(25),n(62),n(76),n(537)),c=n.n(m),h={data:function(){return{Copper:null,THREE:null,baseRenderer:null,baseContainer:null,container:null,modelData:null,nrrdMaxIndex:-1,nrrdSliceZ:null,nrrdMeshes:null,loadFirstTime:!0,currentView:"3D Mammogram",mouseActions:null,modelToScenes:{},modelUrlsArray:{normal:["modelView/density-1/middle/m3d.nrrd","modelView/density-1/middle/m_view.json","modelView/density-1/middle/m2d.nrrd"],density_2:["modelView/density-2/middle/m3d.nrrd","modelView/density-2/middle/m_view.json","modelView/density-2/middle/m2d.nrrd"],density_3:["modelView/density-3/middle/m3d.nrrd","modelView/density-3/middle/m_view.json","modelView/density-3/middle/m2d.nrrd"],density_4:["modelView/density-4/middle/m3d.nrrd","modelView/density-4/middle/m_view.json","modelView/density-4/middle/m2d.nrrd"]}}},created:(o=Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),function(){return o.apply(this,arguments)}),computed:{mdAndUp:function(){return this.$vuetify.breakpoint.mdAndUp}},mounted:function(){var e=this;this.Copper=this.$Copper(),this.baseRenderer=this.$baseRenderer(),this.THREE=this.$three(),this.raycaster=this.$raycaster(),this.modelToScenes=this.$modelToScenes(),this.baseContainer=this.$baseContainer(),this.modelData=this.$modelData(),this.container=this.$refs.baseDomObject,this.modelName=this.$model().name,["cyst","fibroadenoma","calcifications","fat_necrosis","dcis","lobular","ductal"].includes(this.modelName)&&(this.modelName="normal"),this.$nuxt.$emit("onNavChange",this.modelName),this.container.appendChild(this.baseContainer),this.start(),window.addEventListener("resize",(function(){setTimeout((function(){e.mdAndUp?e.baseContainer.style.height="100vh":e.baseContainer.style.height="100vw",e.scene.onWindowResize()}),500)}))},methods:{start:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.loadNrrd(e.modelUrlsArray[e.modelName][0],e.modelName+"middle_3d");case 1:case"end":return t.stop()}}),t)})))()},tabsOnChange:function(a){if(!this.loadFirstTime){var e=this.modelUrlsArray[this.modelName][0];0===a?(this.currentView="3D Mammogram",this.loadNrrd(e,this.modelName+"middle_3d")):(this.currentView="2D Mammogram",this.loadNrrd(this.modelUrlsArray[this.modelName][2],this.modelName+"middle_2d"))}},loadNrrd:function(e,t){var n=this,o=this.modelUrlsArray[this.modelName][1],r=this.Copper.loading(c.a),d=this.Copper.loading(c.a),l=r.loadingContainer;l.style.position="fixed",l.style.top=0,l.style.left=0,l.style.right=0,l.style.bottom=0,l.style.display="flex",this.baseContainer.appendChild(l),r.progress.innerHTML="Loading image...",this.scene=this.baseRenderer.getSceneByName(t),void 0===this.scene?(this.scene=this.baseRenderer.createScene(t),this.scene.controls.panSpeed=.5,this.baseRenderer.setCurrentScene(this.scene),this.scene.loadNrrd(e,d,!0,(function(e,t,o,r){if(n.nrrdMeshes=t,n.nrrdMeshes.x.name="x",n.nrrdMeshes.y.name="y",n.nrrdMeshes.z.name="z",n.scene.addObject(t.z),n.nrrdMaxIndex=o.z.MaxIndex,n.nrrdSliceZ=o.z,"2D Mammogram"===n.currentView)n.scene.controls.noRotate=!0,n.scene.controls.noPan=!0,n.removeContainerListener();else{var data={nrrdSliceZ:n.nrrdSliceZ,nrrdMesh:n.nrrdMeshes.z,nrrdMaxIndex:n.nrrdMaxIndex};void 0===n.modelData[n.modelName]&&(n.modelData[n.modelName]={}),n.modelData[n.modelName].middle=data,n.addContainerListener()}l.style.display="none"}),{openGui:!1}),this.scene.loadViewUrl(o),this.scene.updateBackground("#f8cdd6","#f8cdd6"),this.Copper.setHDRFilePath("environment/venice_sunset_1k.hdr"),this.baseRenderer.updateEnvironment(),this.modelToScenes[t]=this.scene):(l.style.display="none",this.baseRenderer.setCurrentScene(this.scene),"2D Mammogram"===this.currentView?(this.scene.controls.noRotate=!0,this.scene.controls.noPan=!0,this.removeContainerListener()):this.addContainerListener()),this.loadFirstTime=!1,this.scene.onWindowResize()},addContainerListener:function(){var data=this.modelData[this.modelName].middle;null===this.mouseActions&&(this.mouseActions=this.raycaster(this.scene,this.container,data.nrrdSliceZ,data.nrrdMesh,data.nrrdMaxIndex)),this.container.addEventListener("mousemove",this.mouseActions.mouseMove)},removeContainerListener:function(){null!==this.mouseActions&&(this.container.removeEventListener("mousemove",this.mouseActions.mouseMove),this.container.removeEventListener("mousedown",this.mouseActions.mouseDown),this.container.removeEventListener("mouseup",this.mouseActions.mouseUp))},onResetAllModelsView:function(){for(var e in this.modelToScenes)this.modelToScenes.hasOwnProperty(e)&&this.modelToScenes[e].resetView()}},watch:{},beforeDestroy:function(){this.removeContainerListener()}},f=h,v=(n(538),n(34)),component=Object(v.a)(f,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"model"},[t(d.a,{staticClass:"fixed flex justify-center tab-main",on:{change:e.tabsOnChange}},[t(r.a,{staticClass:"tab-main"},[e._v("3D Mammogram")]),e._v(" "),t(r.a,{staticClass:"tab-main"},[e._v("2D Mammogram")])],1),e._v(" "),t("div",{ref:"baseDomObject",class:e.mdAndUp?"baseDom-md":"baseDom-sm"}),e._v(" "),t("div",{ref:"threeDControls",staticClass:"baseModelControl",class:e.mdAndUp?"baseModelControl-md":"baseModelControl-sm"},[t("div",{staticClass:"baseModelCB",class:e.mdAndUp?"baseModelCB-md":""},[t("button",{staticClass:"absolute top-0 left-0 w-1/4 h-full hover:bg-zinc-700/30 rounded-lg",on:{click:e.onResetAllModelsView}}),e._v(" "),t("img",{staticClass:"h-full w-full md:object-contain",attrs:{src:n(536)}})])])],1)}),[],!1,null,"42e833d9",null);t.default=component.exports},544:function(e,t,n){"use strict";n(535)},545:function(e,t,n){var o=n(29)((function(i){return i[1]}));o.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap);"]),o.push([e.i,".parent[data-v-314264ca]{display:flex;height:100vh;width:100vw}.model-panel[data-v-314264ca]{flex:1}.model-rate[data-v-314264ca]{position:relative;text-align:center;width:100%}.rate-mdAndUp[data-v-314264ca]{align-items:center;display:flex;justify-content:center;max-height:20%;width:100%}.rate-mdAndUp .heart-rate[data-v-314264ca]{height:100px;margin-top:10px;width:60%}.logo-mdAndUp[data-v-314264ca]{width:50%}.logo-md[data-v-314264ca]{display:block;height:10%}.trace-main[data-v-314264ca]{align-items:center;display:flex;flex-direction:column;justify-content:space-around;padding:25px 3px}.tracePanel-md[data-v-314264ca]{height:100%;max-width:25vw;min-width:280px;position:fixed;right:0;top:0}.tracePanel-sm[data-v-314264ca]{height:auto;width:100vw}.trace-md[data-v-314264ca]{min-height:60%}.trace-sm[data-v-314264ca]{margin-bottom:100px;padding-right:10px;width:100%}",""]),o.locals={},e.exports=o},552:function(e,t,n){"use strict";n.r(t);var o={data:function(){return{}},mounted:function(){},computed:{mdAndUp:function(){return this.$vuetify.breakpoint.mdAndUp}},components:{PanelControls:n(530).default}},r=(n(544),n(34)),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"parent"},[t("div",{staticClass:"model-panel"},[t("model")],1),e._v(" "),t("div",{staticClass:"flex flex-col justify-center items-center md:fixed md:right-0 md:top-0 md:h-full md:w-1/4"},[t("PanelControls"),e._v(" "),t("div",{staticClass:"fixed md:bottom-0 md:right-0"},[t("logo")],1)],1)])}),[],!1,null,"314264ca",null);t.default=component.exports;installComponents(component,{Model:n(540).default,PanelControls:n(530).default,Logo:n(324).default})}}]);