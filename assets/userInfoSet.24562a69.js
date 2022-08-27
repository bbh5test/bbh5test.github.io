import{_ as b,D as _,d as c,T as v,g as V,i,j as l,w as d,F as k,r as u,o as y,G as w,p as x,l as E}from"./index.db2949da.js";import{E as F}from"./editAvatar.ff4729d9.js";const U={name:"UserInfoSet",components:{DialogBase:_,EditAvatar:F},setup(){return{formatterSpace:e=>e.replace(/\s+/g,"")}},watch:{"$store.state.user.userAddress"(){this.initUserInfo(),this.isFirst=!0},userInfo:{handler:function(t,e){this.userInfo=t,this.isFirst||(this.isEdit=!0),this.isFirst=!1},deep:!0}},data(){return{isFirst:!0,isEdit:!1,tipVisable:!1,isEditNickname:!1,userInfo:{},imgUrl:"",imgFile:void 0,type:null}},mounted(){this.initUserInfo()},methods:{initUserInfo(){this.userInfo={lastImageNicknameTime:this.$store.state.user.lastImageNicknameTime,userAddress:this.$store.state.user.userAddress,image:this.$store.state.user.image,nickname:this.$store.state.user.nickname,mobile:this.$store.state.user.mobile,website:this.$store.state.user.website,email:this.$store.state.user.email,bio:this.$store.state.user.bio}},emailValidator(t){return t?/^(?:[a-z\d]+[_\-\+\.]?)*[a-z\d]+@(?:([a-z\d]+\-?)*[a-z\d]+\.)+([a-z]{2,})+$/i.test(t):!0},checkIsEdit(){if(!(Date.now()/1e3-this.userInfo.lastImageNicknameTime>7*24*3600)){this.$toast("7\u5929\u5185\u4F60\u53EA\u80FD\u7F16\u8F91\u4E00\u6B21\u6635\u79F0\u548C\u5934\u50CF");return}this.isEditNickname=!0},getImgFile(t){this.imgFile=t,this.tipVisable=!0,this.type=0},async uploadAvatar(){let t=this.$toast.loading({message:"Loading...",forbidClick:!0,duration:0});try{(await c.user.updateLogo(this.imgFile)).status==1&&this.$store.dispatch("getUserInfoAction")}catch(e){console.log(e)}finally{t.clear(),this.tipVisable=!1}},finish(){if(!this.emailValidator(this.userInfo.email)){this.$toast("\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1");return}this.isEdit&&(this.tipVisable=!0,this.type=1)},async uploadInfo(){let t=v.loading({message:"Loading...",forbidClick:!0,duration:0}),e=this.userInfo.nickname;try{let r=await c.user.updateInfo(e,this.userInfo.email,this.userInfo.mobile,this.userInfo.website,this.userInfo.bio);console.log(r),r.status==1&&(this.$store.dispatch("getUserInfoAction"),this.isEdit=!1,this.$router.push({name:"UserInfo"}))}catch(r){console.log(r)}finally{t.clear(),this.tipVisable=!1}},async submit(){this.type==0?this.uploadAvatar():this.type==1&&this.uploadInfo()},completeWebsiteFn(){this.userInfo.website=this.$f.completeWebsite(this.userInfo.website)}}},n=t=>(x("data-v-7874c9eb"),t=t(),E(),t),C={class:"userinfo-set"},A={class:"form-item"},N=n(()=>i("label",null,[i("text",null,"\u7FA4\u6635\u79F0"),i("text",null,"*7\u5929\u5185\u4F60\u53EA\u80FD\u7F16\u8F91\u4E00\u6B21\u6635\u79F0\u548C\u5934\u50CF")],-1)),S={class:"form-item"},B=n(()=>i("label",null,"\u624B\u673A\u53F7",-1)),z={class:"form-item"},T=n(()=>i("label",null,"\u7F51\u7AD9",-1)),D={class:"form-item"},L=n(()=>i("label",null,"\u90AE\u7BB1",-1)),G={class:"form-item"},W=n(()=>i("label",null,"\u4E2A\u4EBA\u7B80\u4ECB",-1)),O=n(()=>i("div",{class:"tip-info"}," \u4E00\u65E6\u4F60\u4FEE\u6539\u4E86\u5934\u50CF\u6216\u6635\u79F0\uFF0C\u4F60\u9700\u8981\u7B49\u5F857\u5929\u540E\u624D\u80FD\u518D\u4FEE\u6539\u5B83\u4EEC\uFF08\u5934\u50CF/\u6635\u79F0\uFF09\u3002 ",-1));function j(t,e,r,f,s,a){const h=u("van-nav-bar"),p=u("EditAvatar"),m=u("van-field"),I=u("van-form"),g=u("DialogBase");return y(),V(k,null,[i("div",C,[i("div",null,[l(h,{"left-text":"\u53D6\u6D88",onClickLeft:e[1]||(e[1]=o=>t.$router.push({name:"UserInfo"})),placeholder:"",fixed:"","safe-area-inset-top":"","z-index":"2",title:"\u4E2A\u4EBA\u7F16\u8F91"},{right:d(()=>[i("span",{class:"finish",onClick:e[0]||(e[0]=(...o)=>a.finish&&a.finish(...o)),style:w({color:s.isEdit?"#9505f9":"#999"})},"\u5B8C\u6210",4)]),_:1})]),i("div",null,[l(p,{image:s.userInfo.image,lastImageNicknameTime:s.userInfo.lastImageNicknameTime,address:s.userInfo.userAddress,onGetImgFile:a.getImgFile},null,8,["image","lastImageNicknameTime","address","onGetImgFile"]),l(I,{class:"form-box"},{default:d(()=>[i("div",A,[N,l(m,{onClick:a.checkIsEdit,readonly:!s.isEditNickname,modelValue:s.userInfo.nickname,"onUpdate:modelValue":e[2]||(e[2]=o=>s.userInfo.nickname=o),maxlength:"50",formatter:f.formatterSpace,placeholder:"\u8F93\u5165\u6635\u79F0"},null,8,["onClick","readonly","modelValue","formatter"])]),i("div",S,[B,l(m,{modelValue:s.userInfo.mobile,"onUpdate:modelValue":e[3]||(e[3]=o=>s.userInfo.mobile=o),type:"number",maxlength:"30",placeholder:"\u8F93\u5165\u624B\u673A\u53F7"},null,8,["modelValue"])]),i("div",z,[T,l(m,{modelValue:s.userInfo.website,"onUpdate:modelValue":e[4]||(e[4]=o=>s.userInfo.website=o),onBlur:e[5]||(e[5]=o=>a.completeWebsiteFn()),maxlength:"300",type:"text",placeholder:"\u8F93\u5165\u7F51\u5740"},null,8,["modelValue"])]),i("div",D,[L,l(m,{modelValue:s.userInfo.email,"onUpdate:modelValue":e[6]||(e[6]=o=>s.userInfo.email=o),maxlength:"100",type:"email",placeholder:"\u8F93\u5165\u90AE\u7BB1",rules:[{validator:a.emailValidator,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u90AE\u7BB1\u5730\u5740"}]},null,8,["modelValue","rules"])]),i("div",G,[W,l(m,{modelValue:s.userInfo.bio,"onUpdate:modelValue":e[7]||(e[7]=o=>s.userInfo.bio=o),formatter:f.formatterSpace,rows:"3",autosize:"",type:"textarea",maxlength:"300",placeholder:"\u4E3B\u4EBA\u6BD4\u8F83\u61D2","show-word-limit":""},null,8,["modelValue","formatter"])])]),_:1})])]),l(g,{visible:s.tipVisable,"onUpdate:visible":e[8]||(e[8]=o=>s.tipVisable=o),title:"\u63D0\u793A",showConfirmButton:!0,showCancelButton:!0,autoClose:!1,onOnConfirm:a.submit},{default:d(()=>[O]),_:1},8,["visible","onOnConfirm"])],64)}const J=b(U,[["render",j],["__scopeId","data-v-7874c9eb"]]);export{J as default};
