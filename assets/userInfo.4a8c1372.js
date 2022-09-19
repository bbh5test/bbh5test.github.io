import{A as $}from"./avatar.1126d917.js";import{_ as B,c as L,d as _,m as n,w as p,b as s,t as d,a as m,e as f,r as i,o as a,f as F}from"./index.aaced4b0.js";const O={name:"UserInfo",components:{Avatar:$},data(){return{showLanPicker:!1,langObj:{en:"English","zh-cn":"\u7B80\u4F53\u4E2D\u6587"}}},computed:{userInfo(){var t;return(t=this.$store.state)==null?void 0:t.user},language(){return this.$store.state.lang.language},actions(){return[{name:this.$t("common.zh-cn"),value:"zh-cn",color:this.language==="zh-cn"?"#9505F9":"#323233"},{name:this.$t("common.en"),value:"en",color:this.language==="en"?"#9505F9":"#323233"}]}},mounted(){},watch:{},methods:{jumpToEdit(){this.$router.push("/userInfo/set")},copy:L,onSelect(t){this.$store.commit("setLanguage",t.value)},loginOut(){this.$dialog.confirm({title:this.$t("tips"),message:this.$t("logOutWarn"),confirmButtonText:this.$t("confirm"),confirmButtonColor:"#3F80F7",cancelButtonText:this.$t("cancel")}).then(async()=>{this.$store.state.wallet=="WalletConnect"&&await this.$store.state.provider.disconnect(),this.$store.commit("logout"),this.$store.commit("setUserInfo",{}),this.$store.dispatch("checkLogin")}).catch(()=>{})}}},S={class:"userinfo"},T={class:"userinfo-content"},j={class:"section-top"},E={class:"nickname"},N={key:0},P={key:1},V={class:"token"},U={class:"section-center"},W={class:"trade-list cell-item"},x={class:"change-lan cell-item"},D={class:"login-out"};function R(t,o,q,G,u,e){var v,g,I,k,b,y;const h=i("van-icon"),w=i("van-nav-bar"),A=i("Avatar"),r=i("van-cell"),C=i("van-action-sheet"),z=i("van-button");return a(),_("div",S,[n(w,{fixed:"","safe-area-inset-top":"","z-index":"2",title:t.$t("settings")},{right:p(()=>[n(h,{class:"icon",size:"1.6em",name:"/assets/images/edit.png",onClick:e.jumpToEdit},null,8,["onClick"])]),_:1},8,["title"]),s("div",T,[s("div",j,[n(A,{class:"avatar",image:e.userInfo.image,address:e.userInfo.userAddress},null,8,["image","address"]),s("div",E,[(v=e.userInfo)!=null&&v.nickname?(a(),_("span",N,d((g=e.userInfo)==null?void 0:g.nickname),1)):(a(),_("span",P,d(((I=e.userInfo)==null?void 0:I.userAddress)&&t.$f.formatAddress((k=e.userInfo)==null?void 0:k.userAddress,4)),1))]),s("div",V,[s("text",null,d(((b=e.userInfo)==null?void 0:b.userAddress)&&t.$f.formatAddress((y=e.userInfo)==null?void 0:y.userAddress,6)),1),n(h,{class:"icon",size:"1em",name:"/assets/images/copy.png",onClick:o[0]||(o[0]=l=>{var c;return e.copy((c=e.userInfo)==null?void 0:c.userAddress)})})])]),s("div",U,[e.userInfo.mobile?(a(),m(r,{key:0,title:t.$t("mobile")+":",border:!1,value:e.userInfo.countryCode+"-"+e.userInfo.mobile},null,8,["title","value"])):f("",!0),e.userInfo.email?(a(),m(r,{key:1,title:t.$t("email")+":",border:!1,value:e.userInfo.email},null,8,["title","value"])):f("",!0),e.userInfo.website?(a(),m(r,{key:2,title:t.$t("website")+":",border:!1,value:e.userInfo.website},null,8,["title","value"])):f("",!0),e.userInfo.bio?(a(),m(r,{key:3,title:t.$t("bio")+":",border:!1,value:e.userInfo.bio},null,8,["title","value"])):f("",!0)])]),s("div",W,[n(r,{title:t.$t("paymentRecords"),"is-link":"",to:"/userInfo/paymentList"},null,8,["title"])]),s("div",x,[n(r,{"is-link":"",title:t.$t("language"),value:u.langObj[e.language],onClick:o[1]||(o[1]=l=>u.showLanPicker=!0)},null,8,["title","value"]),n(C,{show:u.showLanPicker,"onUpdate:show":o[2]||(o[2]=l=>u.showLanPicker=l),actions:e.actions,"cancel-text":t.$t("cancel"),"close-on-click-action":"",onSelect:e.onSelect},null,8,["show","actions","cancel-text","onSelect"])]),s("div",D,[n(z,{class:"btn",onClick:e.loginOut,size:"large",plain:"",round:"",type:"primary"},{default:p(()=>{var l,c;return[F(d(`${t.$t("disconnectFrom1")}${((l=e.userInfo)==null?void 0:l.userAddress)&&t.$f.formatAddress((c=e.userInfo)==null?void 0:c.userAddress,6)}${t.$t("disconnectFrom2")}`),1)]}),_:1},8,["onClick"])])])}const K=B(O,[["render",R],["__scopeId","data-v-012092b6"]]);export{K as default};
