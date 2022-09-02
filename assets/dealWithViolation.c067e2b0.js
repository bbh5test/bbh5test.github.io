import{_ as h,e as y,h as g,j as t,k as a,w as d,ae as V,r as n,o as b,l as w,p as k,m as C}from"./index.84cb370a.js";const x={name:"Penalty",data(){return{type:0,violationColumns:["\u7FA4\u7981\u8A00","\u7FA4\u6162\u901F"],description:"",profilePicture:[]}},mounted(){this.init()},methods:{async init(){let o=this.$toast.loading({message:"Loading...",forbidClick:!0,duration:0});try{let e=await y.groupViolation.getCurrentViolation(this.$route.params.groupId);if(console.log(e),e.status==1){this.type=e.data.type,this.description=e.data.description;let s=JSON.parse(e.data.images);if(s.length>0)for(let c of s)this.profilePicture.push({url:c})}}catch(e){console.log(e)}finally{o.clear()}},async dealWithViolation(){this.$store.commit("setTradeVisable",!0),this.$store.commit("setPaymentType",1)}}},p=o=>(k("data-v-188c722c"),o=o(),C(),o),I={class:"violation"},P={class:"form-item"},$=p(()=>t("label",null,"\u5904\u7F5A\u7C7B\u578B",-1)),N={class:"form-item"},S=p(()=>t("label",null,"\u5904\u7F5A\u4F9D\u636E",-1)),T={class:"form-item"},W=p(()=>t("label",null,"\u4F9D\u636E\u622A\u56FE",-1)),B={class:"submit-violation"},z=w("\u5904\u7406\u8FDD\u89C4");function L(o,e,s,c,i,u){const m=n("van-nav-bar"),r=n("van-field"),_=n("van-uploader"),f=n("van-form"),v=n("van-button");return b(),g("div",I,[t("div",null,[a(m,{onClickLeft:e[0]||(e[0]=l=>o.$router.push({name:"GroupDetail",params:{groupId:o.$route.params.groupId}})),"left-arrow":"","safe-area-inset-top":"","z-index":"2",title:"\u8FDD\u89C4\u5904\u7F5A"})]),t("div",null,[a(f,{class:"form-box",ref:"form"},{default:d(()=>[t("div",P,[$,a(r,{class:"form-input","model-value":i.violationColumns[i.type],onClick:e[1]||(e[1]=l=>o.showViolationTypePicker=!0),"is-link":"","arrow-direction":"down",readonly:"",name:"picker"},null,8,["model-value"])]),t("div",N,[S,a(r,{class:"form-input",modelValue:i.description,"onUpdate:modelValue":e[2]||(e[2]=l=>i.description=l),rows:"6",type:"textarea",maxlength:"100",placeholder:"\u8BF7\u8F93\u5165\u7559\u8A00","show-word-limit":"",readonly:""},null,8,["modelValue"])]),t("div",T,[W,a(r,{class:"form-upload","lazy-load":"true",name:"uploader"},{input:d(()=>[a(_,{modelValue:i.profilePicture,"onUpdate:modelValue":e[3]||(e[3]=l=>i.profilePicture=l),"max-count":"3","upload-text":"\u6700\u591A3\u5F20",deletable:!1,"show-upload":!1},null,8,["modelValue"])]),_:1})])]),_:1},512)]),t("div",B,[a(v,{class:"btn",round:"",block:"",type:"primary",loading:o.loading,onClick:V(u.dealWithViolation,["stop"]),"native-type":"submit"},{default:d(()=>[z]),_:1},8,["loading","onClick"])])])}const j=h(x,[["render",L],["__scopeId","data-v-188c722c"]]);export{j as default};
