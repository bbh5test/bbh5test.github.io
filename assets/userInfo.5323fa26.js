import{A as B}from"./avatar.969190d1.js";import{_ as L,c as F,d as _,m as n,w as p,b as t,t as d,a as m,e as f,r as c,o,f as S}from"./index.2fbacc60.js";const T={name:"UserInfo",components:{Avatar:B},data(){return{showLanPicker:!1,langObj:{en:"\u82F1\u6587","zh-cn":"\u7B80\u4F53\u4E2D\u6587"}}},computed:{userInfo(){var s;return(s=this.$store.state)==null?void 0:s.user},language(){return this.$store.getters.language},actions(){return[{name:this.$t("common.zh-cn"),value:"zh-cn",color:this.language==="zh-cn"?"#9505F9":"#323233"},{name:this.$t("common.en"),value:"en",color:this.language==="en"?"#9505F9":"#323233"}]}},mounted(){},watch:{},methods:{jumpToEdit(){this.$router.push("/userInfo/set")},copy:F,onSelect(s){this.$store.commit("setLanguage",s.value)},loginOut(){this.$dialog.confirm({title:"\u63D0\u793A",message:"\u662F\u5426\u9000\u51FA\u767B\u5F55",confirmButtonText:this.$t("confirm"),confirmButtonColor:"#3F80F7",cancelButtonText:this.$t("cancel")}).then(()=>{this.$store.commit("logout"),this.$store.commit("setUserInfo",{}),this.$store.dispatch("checkLogin")}).catch(()=>{})}}},j={class:"userinfo"},N={class:"userinfo-content"},O={class:"section-top"},P={class:"nickname"},V={key:0},$={key:1},E={class:"token"},U={class:"section-center"},x={class:"trade-list cell-item"},D={class:"change-lan cell-item"},R={class:"login-out"};function q(s,a,G,H,u,e){var h,g,I,k,b,y;const v=c("van-icon"),A=c("van-nav-bar"),w=c("Avatar"),r=c("van-cell"),C=c("van-action-sheet"),z=c("van-button");return o(),_("div",j,[n(A,{fixed:"",placeholder:"","safe-area-inset-top":"","z-index":"2",title:s.$t("settings")},{right:p(()=>[n(v,{class:"icon",size:"1.6em",name:"/assets/images/edit.png",onClick:e.jumpToEdit},null,8,["onClick"])]),_:1},8,["title"]),t("div",N,[t("div",O,[n(w,{class:"avatar",image:e.userInfo.image,address:e.userInfo.userAddress},null,8,["image","address"]),t("div",P,[(h=e.userInfo)!=null&&h.nickname?(o(),_("span",V,d((g=e.userInfo)==null?void 0:g.nickname),1)):(o(),_("span",$,d(((I=e.userInfo)==null?void 0:I.userAddress)&&s.$f.formatAddress((k=e.userInfo)==null?void 0:k.userAddress,4)),1))]),t("div",E,[t("text",null,d(((b=e.userInfo)==null?void 0:b.userAddress)&&s.$f.formatAddress((y=e.userInfo)==null?void 0:y.userAddress,6)),1),n(v,{class:"icon",size:"1em",name:"/assets/images/copy.png",onClick:a[0]||(a[0]=l=>{var i;return e.copy((i=e.userInfo)==null?void 0:i.userAddress)})})])]),t("div",U,[e.userInfo.mobile?(o(),m(r,{key:0,title:s.$t("mobile")+":",border:!1,value:e.userInfo.countryCode+"-"+e.userInfo.mobile},null,8,["title","value"])):f("",!0),e.userInfo.email?(o(),m(r,{key:1,title:s.$t("email")+":",border:!1,value:e.userInfo.email},null,8,["title","value"])):f("",!0),e.userInfo.website?(o(),m(r,{key:2,title:s.$t("website")+":",border:!1,value:e.userInfo.website},null,8,["title","value"])):f("",!0),e.userInfo.bio?(o(),m(r,{key:3,title:s.$t("bio")+":",border:!1,value:e.userInfo.bio},null,8,["title","value"])):f("",!0)])]),t("div",x,[n(r,{title:s.$t("paymentRecords"),"is-link":"",to:"/userInfo/paymentList"},null,8,["title"])]),t("div",D,[n(r,{"is-link":"",title:s.$t("language"),value:u.langObj[e.language],onClick:a[1]||(a[1]=l=>u.showLanPicker=!0)},null,8,["title","value"]),n(C,{show:u.showLanPicker,"onUpdate:show":a[2]||(a[2]=l=>u.showLanPicker=l),actions:e.actions,"cancel-text":s.$t("cancel"),"close-on-click-action":"",onSelect:e.onSelect},null,8,["show","actions","cancel-text","onSelect"])]),t("div",R,[n(z,{class:"btn",onClick:e.loginOut,size:"large",plain:"",round:"",type:"primary"},{default:p(()=>{var l,i;return[S(d(`${s.$t("disconnectFrom1")}${((l=e.userInfo)==null?void 0:l.userAddress)&&s.$f.formatAddress((i=e.userInfo)==null?void 0:i.userAddress,6)}${s.$t("disconnectFrom2")}`),1)]}),_:1},8,["onClick"])])])}const M=L(T,[["render",q],["__scopeId","data-v-f1845a57"]]);export{M as default};
