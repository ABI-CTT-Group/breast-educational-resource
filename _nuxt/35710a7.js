(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{530:function(e,t,n){var content=n(537);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(30).default)("06602652",content,!0,{sourceMap:!1})},536:function(e,t,n){"use strict";n(530)},537:function(e,t,n){var r=n(29)((function(i){return i[1]}));r.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap);"]),r.push([e.i,".r_main[data-v-c616a92a]{background:linear-gradient(81deg,rgba(254,205,211,.8),rgba(253,164,175,.8) 0,rgba(251,113,133,.8));border-radius:5px;box-shadow:5px 5px 10px #e4949e,-5px -5px 10px #ffb4c1}.model-control[data-v-c616a92a]{padding-top:80px}.model-control span[data-v-c616a92a]{color:#000;font-size:1rem;height:50px;text-align:center;width:100%}.model-control .mri[data-v-c616a92a]{height:500px;padding:0;width:500px}.baseDom-md[data-v-c616a92a]{height:100%;margin:0;padding:0;width:100%}.baseDom-sm[data-v-c616a92a]{height:100vw;margin:0;padding:0;width:100vw}",""]),r.locals={},e.exports=r},542:function(e,t,n){"use strict";n.r(t);n(59),n(71),n(25),n(37),n(62);var r={data:function(){return{modelControl:"3D MRI",Copper:null,THREE:null,baseRenderer:null,baseContainer:null,nrrdMaxIndex:-1,nrrdSliceZ:null,nrrdMeshes:null,modelData:null,modelToScenes:{},modelName:null,mouseActions:null,modelUrlsArray:{normal:["modelView/density-1/right/mri.nrrd","modelView/density-1/right/mri_view.json"],density_2:["modelView/density-2/right/mri.nrrd","modelView/density-2/right/mri_view.json"],density_3:["modelView/density-3/right/mri.nrrd","modelView/density-3/right/mri_view.json"],density_4:["modelView/density-4/right/mri.nrrd","modelView/density-4/right/mri_view.json"],cyst:["modelView/density-4/right/mri.nrrd","modelView/density-4/right/mri_view.json"]}}},computed:{mdAndUp:function(){return this.$vuetify.breakpoint.mdAndUp}},mounted:function(){var e=this;this.Copper=this.$Copper(),this.THREE=this.$three(),this.raycaster=this.$raycaster(),this.modelToScenes=this.$modelToScenes(),this.baseRenderer=this.$baseRightRenderer(),this.baseContainer=this.$baseRightContainer(),this.modelData=this.$modelData(),this.container=this.$refs.rightContainer,this.container.appendChild(this.baseContainer),this.modelName=this.$model().name,["cyst","fibroadenoma","calcifications","fat_necrosis","dcis","lobular","ductal"].includes(this.modelName)&&(this.modelName="normal"),this.start(),window.addEventListener("resize",(function(){setTimeout((function(){e.scene&&e.scene.onWindowResize()}),500)}))},methods:{start:function(){this.loadNrrd(this.modelUrlsArray[this.modelName][0],this.modelName+"right_mri")},loadNrrd:function(e,t){var n=this,r=this.modelUrlsArray[this.modelName][1],o=this.Copper.loading("loading/loading.svg");this.scene=this.baseRenderer.getSceneByName(t),void 0===this.scene?(this.scene=this.baseRenderer.createScene(t),this.scene.controls.rotateSpeed=3,this.scene.controls.minDistance=500,this.scene.controls.maxDistance=3e3,this.scene.controls.panSpeed=.5,this.baseRenderer.setCurrentScene(this.scene),this.scene.loadNrrd(e,o,!0,(function(e,t,r,o){n.nrrdMeshes=t,n.scene.addObject(t.z);var d=e.header.space_origin.map((function(e){return Number(e)})),l=e.RASDimensions,c=-(2*d[0]+l[0])/2,h=-(2*d[1]+l[1])/2,m=-(2*d[2]+l[2])/2;n.nrrdMaxIndex=r.z.MaxIndex,n.nrrdSliceZ=r.z,n.nrrdBias=new n.THREE.Vector3(c,h,m);var w=new n.THREE.BoxGeometry(l[0],l[1],l[2]),v=new n.THREE.MeshBasicMaterial({color:65280}),f=new n.THREE.Mesh(w,v),x=new n.THREE.BoxHelper(f,16777215);n.scene.scene.add(x),n.modelUrlsArray[n.modelName].length>2&&n.loadModel(n.modelUrlsArray[n.modelName][2]);var data={nrrdSliceZ:n.nrrdSliceZ,nrrdMesh:n.nrrdMeshes.z,nrrdMaxIndex:n.nrrdMaxIndex};void 0===n.modelData[n.modelName]&&(n.modelData[n.modelName]={}),n.modelData[n.modelName].right=data,n.addContainerListener(),n.scene.onWindowResize()}),{openGui:!1}),this.scene.loadViewUrl(r),this.modelToScenes[t]=this.scene):(this.baseRenderer.setCurrentScene(this.scene),this.addContainerListener()),this.scene.onWindowResize()},loadModel:function(e){var t=this;this.scene.loadOBJ(e,(function(content){var e=(new t.THREE.Box3).setFromObject(content);e.getSize(new t.THREE.Vector3).length(),e.getCenter(new t.THREE.Vector3);content.position.set(t.nrrdBias.x,t.nrrdBias.y,t.nrrdBias.z),content.renderOrder=3,content.traverse((function(e){e.isMesh&&(e.material=new t.THREE.MeshPhysicalMaterial({side:t.THREE.DoubleSide,transparent:!0,opacity:.4,color:"#a3932a",wireframe:!1}))}))})),this.scene.onWindowResize()},addContainerListener:function(){var data=this.modelData[this.modelName].right;null===this.mouseActions&&(this.mouseActions=this.raycaster(this.scene,this.container,data.nrrdSliceZ,data.nrrdMesh,data.nrrdMaxIndex)),this.container.addEventListener("pointermove",this.mouseActions.mouseMove)},removeContainerListener:function(){null!==this.mouseActions&&(this.container.removeEventListener("pointermove",this.mouseActions.mouseMove),this.container.removeEventListener("pointerdown",this.mouseActions.mouseDown),this.container.removeEventListener("pointerup",this.mouseActions.mouseUp))}},beforeDestroy:function(){this.removeContainerListener()}},o=(n(536),n(34)),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"w-full h-full r_main"},[t("div",{staticClass:"absolute flex justify-center items-center top-0 right-0 w-full h-11 p-1 my-2"},[t("span",{staticClass:"text-black text-base font-thin"},[e._v(e._s(e.modelControl))])]),e._v(" "),t("div",{ref:"rightContainer",staticClass:"w-full h-full",class:e.mdAndUp?"baseDom-md":"baseDom-sm"})])}),[],!1,null,"c616a92a",null);t.default=component.exports}}]);