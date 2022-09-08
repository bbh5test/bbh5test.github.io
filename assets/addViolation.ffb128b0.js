import{_ as g,k as b,d as w,b as s,m as l,w as r,ae as P,r as i,o as k,t as p,f as V}from"./index.aba98e5f.js";const C={name:"Penalty",setup(){return{formatterSpace:e=>e.trim()}},data(){return{type:0,showViolationTypePicker:!1,violationColumns:[this.$t("groupBan"),this.$t("groupSlow")],description:"",profilePicture:[],loading:!1}},methods:{onConfirmType(o,e){console.log(e),this.type=e,this.showViolationTypePicker=!1},async onSubmit(o){console.log("submit");let e=this.profilePicture.map(a=>a.file),m=this.$route.params.groupId;this.loading=!0;try{let a=await b.groupViolation.add(e,m,this.type,this.description);console.log(a),a.status==1&&(this.$toast.success(this.$t("submitPenaltySuccessfully")),this.$router.push({name:"GroupDetail",params:{groupId:this.$route.params.groupId}}))}catch(a){console.log(a),this.$toast.fail("\u63D0\u4EA4\u5931\u8D25")}finally{this.loading=!1}}}},$={class:"violation"},S={class:"form-item"},T={class:"form-item"},B={class:"form-item"},I={class:"submit-violation"},q=V("\u63D0\u4EA4\u5904\u7F5A");function D(o,e,m,a,t,d){const c=i("van-nav-bar"),u=i("van-field"),f=i("van-picker"),v=i("van-popup"),y=i("van-uploader"),_=i("van-form"),h=i("van-button");return k(),w("div",$,[s("div",null,[l(c,{onClickLeft:e[0]||(e[0]=n=>o.$router.push({name:"GroupDetail",params:{groupId:o.$route.params.groupId}})),"left-arrow":"","safe-area-inset-top":"","z-index":"2",title:o.$t("violationPenalty")},null,8,["title"])]),s("div",null,[l(_,{class:"form-box",ref:"form",onSubmit:d.onSubmit},{default:r(()=>[s("div",S,[s("label",null,p(o.$t("penaltyType")),1),l(u,{class:"form-input","model-value":t.violationColumns[t.type],onClick:e[1]||(e[1]=n=>t.showViolationTypePicker=!0),"is-link":"","arrow-direction":"down",readonly:"",name:"picker",rules:[{required:!0,message:o.$t("selectPenaltyType")}]},null,8,["model-value","rules"]),l(v,{round:"",show:t.showViolationTypePicker,"onUpdate:show":e[3]||(e[3]=n=>t.showViolationTypePicker=n),position:"bottom","safe-area-inset-bottom":""},{default:r(()=>[l(f,{columns:t.violationColumns,onConfirm:d.onConfirmType,onCancel:e[2]||(e[2]=n=>o.showPenaltyTypePicker=!1)},null,8,["columns","onConfirm"])]),_:1},8,["show"])]),s("div",T,[s("label",null,p(o.$t("penaltyBasis")),1),l(u,{class:"form-input",formatter:a.formatterSpace,modelValue:t.description,"onUpdate:modelValue":e[4]||(e[4]=n=>t.description=n),rows:"6",type:"textarea",maxlength:"100",placeholder:o.$t("enterPanaltyBasis"),"show-word-limit":"",rules:[{required:!0,message:o.$t("enterPanaltyBasis")}]},null,8,["formatter","modelValue","placeholder","rules"])]),s("div",B,[s("label",null,p(o.$t("basedOnScreenshots")),1),l(u,{class:"form-upload","lazy-load":"true",name:"uploader",rules:[{required:!0,message:"\u8BF7\u4E0A\u4F20\u4F9D\u636E\u622A\u56FE"}]},{input:r(()=>[l(y,{modelValue:t.profilePicture,"onUpdate:modelValue":e[5]||(e[5]=n=>t.profilePicture=n),"max-count":"3","upload-text":o.$t("max3")},null,8,["modelValue","upload-text"])]),_:1})])]),_:1},8,["onSubmit"])]),s("div",I,[l(h,{class:"btn",round:"",block:"",type:"primary",loading:t.loading,onClick:e[6]||(e[6]=P(n=>o.$refs.form.submit(),["stop"])),"native-type":"submit"},{default:r(()=>[q]),_:1},8,["loading"])])])}const U=g(C,[["render",D],["__scopeId","data-v-96a35123"]]);export{U as default};
