(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{524:function(e,n,t){var content=t(532);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(25).default)("19167f1c",content,!0,{sourceMap:!1})},531:function(e,n,t){"use strict";t(524)},532:function(e,n,t){var r=t(24)((function(i){return i[1]}));r.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap);"]),r.push([e.i,"",""]),r.locals={},e.exports=r},533:function(e,n,t){"use strict";t.r(n);var r,o=t(22),d=(t(68),t(37),t(62),t(92),{data:function(){return{Copper:null,THREE:null,baseRenderer:null,container:null,nrrdMaxIndex:-1,nrrdSliceZ:null,nrrdMeshes:null}},created:(r=Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.$nuxt.$on("send-emitter-data",(function(data){console.log(data)}));case 1:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)}),computed:{mdAndUp:function(){return this.$vuetify.breakpoint.mdAndUp}},mounted:function(){var e=this;this.Copper=this.$Copper(),this.baseRenderer=this.$baseRenderer(),this.THREE=this.$three();var n=this.$baseContainer();this.container=this.$refs.baseDomObject,setTimeout((function(){e.mdAndUp?n.style.height="100vh":n.style.height="100vw",e.container.appendChild(n),e.start()}),100),window.addEventListener("resize",(function(){setTimeout((function(){e.mdAndUp?n.style.height="100vh":n.style.height="100vw",e.scene.onWindowResize()}),500)})),document.addEventListener("keydown",(function(n){if(null!=e.nrrdSliceZ){var t=n.key;if("ArrowUp"===t||"ArrowDown"===t){var r=Math.ceil(e.nrrdSliceZ.index/e.nrrdSliceZ.volume.spacing[2]);"ArrowUp"===t&&(r+=1)>e.nrrdMaxIndex&&(r=e.nrrdMaxIndex),"ArrowDown"===t&&(r-=1)<0&&(r=0),e.nrrdSliceZ.index=r*e.nrrdSliceZ.volume.spacing[2],e.nrrdSliceZ.repaint.call(e.nrrdSliceZ)}}}))},methods:{start:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.loadNrrd("modelView/breast_14.nrrd","breastnrrd");case 1:case"end":return n.stop()}}),n)})))()},loadNrrd:function(e,n){var t=this,r=this.Copper.loading("loading/loading.svg");this.scene=this.baseRenderer.getSceneByName(n),void 0===this.scene&&(this.scene=this.baseRenderer.createScene(n),this.scene.controls.panSpeed=.5,this.baseRenderer.setCurrentScene(this.scene),this.scene.loadNrrd(e,r,!0,(function(e,n,r,o){t.nrrdMeshes=n,t.scene.addObject(n.z);var d=e.header.space_origin.map((function(e){return Number(e)})),c=e.RASDimensions,l=-(2*d[0]+c[0])/2,h=-(2*d[1]+c[1])/2,f=-(2*d[2]+c[2])/2;t.nrrdMaxIndex=r.z.MaxIndex,t.nrrdSliceZ=r.z,t.nrrdBias=new t.THREE.Vector3(l,h,f),t.loadModel("modelView/prone.obj")}),{openGui:!1}),this.scene.loadViewUrl("modelView/noInfarct_view.json"),this.scene.updateBackground("#f8cdd6","#f8cdd6"),this.Copper.setHDRFilePath("environment/venice_sunset_1k.hdr"),this.baseRenderer.updateEnvironment()),this.scene.onWindowResize()},loadModel:function(e){var n=this;this.scene.loadOBJ(e,(function(content){var e=(new n.THREE.Box3).setFromObject(content),t=(e.getSize(new n.THREE.Vector3).length(),e.getCenter(new n.THREE.Vector3));content.position.x+=content.position.x-t.x,content.position.y+=content.position.y-t.y,content.position.z+=content.position.z-t.z,content.renderOrder=3,content.traverse((function(e){e.isMesh&&(e.material=new n.THREE.MeshPhysicalMaterial({side:n.THREE.DoubleSide,transparent:!0,opacity:.4,color:"#a3932a",wireframe:!1}))}))})),this.scene.onWindowResize()}},watch:{},beforeDestroy:function(){}}),c=d,l=(t(531),t(34)),component=Object(l.a)(c,(function(){var e=this._self._c;return e("div",{staticClass:"model"},[e("div",{ref:"baseDomObject",class:this.mdAndUp?"baseDom-md":"baseDom-sm"})])}),[],!1,null,"6699627d",null);n.default=component.exports}}]);