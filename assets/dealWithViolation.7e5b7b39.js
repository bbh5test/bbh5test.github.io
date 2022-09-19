import{_ as y,k as h,d as g,b as t,m as a,w as u,ae as b,r as n,o as V,t as s,f as w}from"./index.aaced4b0.js";const k={name:"Penalty",data(){return{type:0,violationColumns:[this.$t("groupBan"),this.$t("groupSlow")],description:"",profilePicture:[]}},mounted(){this.init()},methods:{async init(){let o=this.$toast.loading({message:"Loading...",forbidClick:!0,duration:0});try{let e=await h.groupViolation.getCurrentViolation(this.$route.params.groupId);if(console.log(e),e.status==1){this.type=e.data.type,this.description=e.data.description;let r=JSON.parse(e.data.images);if(r.length>0)for(let p of r)this.profilePicture.push({url:p})}}catch(e){console.log(e)}finally{o.clear()}},async dealWithViolation(){this.$store.commit("setTradeVisable",!0),this.$store.commit("setPaymentType",1)}}},$={class:"violation"},C={class:"form-item"},P={class:"form-item"},B={class:"form-item"},T={class:"submit-violation"};function W(o,e,r,p,l,m){const c=n("van-nav-bar"),d=n("van-field"),f=n("van-uploader"),v=n("van-form"),_=n("van-button");return V(),g("div",$,[t("div",null,[a(c,{onClickLeft:e[0]||(e[0]=i=>o.$router.push({name:"GroupDetail",params:{groupId:o.$route.params.groupId}})),"left-arrow":"","safe-area-inset-top":"","z-index":"2",title:o.$t("violationPenalty")},null,8,["title"])]),t("div",null,[a(v,{class:"form-box",ref:"form"},{default:u(()=>[t("div",C,[t("label",null,s(o.$t("penaltyType")),1),a(d,{class:"form-input","model-value":l.violationColumns[l.type],onClick:e[1]||(e[1]=i=>o.showViolationTypePicker=!0),"is-link":"","arrow-direction":"down",readonly:"",name:"picker"},null,8,["model-value"])]),t("div",P,[t("label",null,s(o.$t("penaltyBasis")),1),a(d,{class:"form-input",modelValue:l.description,"onUpdate:modelValue":e[2]||(e[2]=i=>l.description=i),rows:"6",type:"textarea",maxlength:"100","show-word-limit":"",readonly:""},null,8,["modelValue"])]),t("div",B,[t("label",null,s(o.$t("basedOnScreenshots")),1),a(d,{class:"form-upload","lazy-load":"true",name:"uploader"},{input:u(()=>[a(f,{modelValue:l.profilePicture,"onUpdate:modelValue":e[3]||(e[3]=i=>l.profilePicture=i),"max-count":"3",deletable:!1,"show-upload":!1},null,8,["modelValue"])]),_:1})])]),_:1},512)]),t("div",T,[a(_,{class:"btn",round:"",block:"",type:"primary",loading:o.loading,onClick:b(m.dealWithViolation,["stop"]),"native-type":"submit"},{default:u(()=>[w(s(o.$t("dealWithViolation")),1)]),_:1},8,["loading","onClick"])])])}const N=y(k,[["render",W],["__scopeId","data-v-dfebf175"]]);export{N as default};
