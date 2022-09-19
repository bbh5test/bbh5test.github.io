import{_ as I,k as d,d as $,b as r,m as a,w as g,r as n,o as v,ae as _,y as b,t as l}from"./index.e3b8e14c.js";import{E as k}from"./editAvatar.9b18a4f2.js";const y={name:"GroupSet",components:{EditAvatar:k},setup(){return{formatterSpace:o=>o.trim()}},watch:{"$store.state.authorization"(){this.init()},"$store.state.group.groupId"(){console.log(2222),this.initGroupInfo(),this.isFirst=!0},"$store.state.group.image"(){this.groupInfo.image=this.$store.state.group.image},groupInfo:{handler:function(t,o){this.isFirst||(this.isEdit=!0),this.isFirst=!1},deep:!0}},data(){return{timer:null,isEdit:!1,isFirst:!0,groupInfo:{},updateLogoLoading:!1}},mounted(){this.$store.state.group.groupId||this.init(),console.log(111),this.initGroupInfo()},methods:{initGroupInfo(){this.groupInfo={groupId:this.$store.state.group.groupId,image:this.$store.state.group.image,address:this.$store.state.group.address,nickname:this.$store.state.group.nickname,description:this.$store.state.group.description}},async init(){this.isEdit=!1,this.isFirst=!0;try{await this.$store.dispatch("getGroupDetail",this.$route.params.groupId)}catch(t){console.log(t)}},async uoloadImg(t){if(this.updateLogoLoading)return;let o=this.$toast.loading({message:"Loading...",forbidClick:!0,duration:0});this.updateLogoLoading=!0;try{(await d.group.updateLogo(this.groupInfo.groupId,t)).status==1&&(console.log(222),await this.init())}catch(e){console.log(e)}finally{o.clear(),this.tipVisable=!1,this.updateLogoLoading=!1}},async submit(){if(!this.isEdit)return;let t=this.groupInfo.nickname,o=this.$toast.loading({message:"Loading...",forbidClick:!0,duration:0});try{let e=await d.group.updateInfo(this.groupInfo.groupId,t,this.groupInfo.description);console.log(e),e.status==1&&(console.log("success"),await this.init(),this.$router.push({name:"GroupDetail",params:{groupId:this.$route.params.groupId}}))}catch(e){console.log(e)}finally{o.clear()}console.log(this.groupInfo)}}},w={class:"group-set"},L={class:"set-content"},S={class:"form-item"},E={class:"form-item"};function G(t,o,e,m,s,u){const f=n("van-nav-bar"),c=n("EditAvatar"),p=n("van-field"),h=n("van-form");return v(),$("div",w,[r("div",null,[a(f,{"left-text":t.$t("cancel"),onClickLeft:o[1]||(o[1]=i=>t.$router.push({name:"GroupDetail",params:{groupId:t.$route.params.groupId}})),fixed:"","safe-area-inset-top":"","z-index":"2",title:t.$t("groupSettings")},{right:g(()=>[r("span",{class:"finish",onClick:o[0]||(o[0]=_(i=>t.$refs.form.submit(),["stop"])),style:b({color:s.isEdit?"#9505f9":"#999"})},l(t.$t("done")),5)]),_:1},8,["left-text","title"])]),r("div",L,[a(c,{image:s.groupInfo.image,defaultImg:t.$f.formatIcon(t.$route.params.groupId),address:s.groupInfo.address,onGetImgFile:u.uoloadImg},null,8,["image","defaultImg","address","onGetImgFile"]),a(h,{class:"form-box",ref:"form",onSubmit:u.submit},{default:g(()=>[r("div",S,[r("label",null,l(t.$t("groupNickname")),1),a(p,{modelValue:s.groupInfo.nickname,"onUpdate:modelValue":o[2]||(o[2]=i=>s.groupInfo.nickname=i),formatter:m.formatterSpace,maxlength:"30",placeholder:t.$t("groupNickname"),rules:[{required:!0,message:t.$t("enterGroupNickname")}]},null,8,["modelValue","formatter","placeholder","rules"])]),r("div",E,[r("label",null,l(t.$t("description")),1),a(p,{modelValue:s.groupInfo.description,"onUpdate:modelValue":o[3]||(o[3]=i=>s.groupInfo.description=i),rows:"3",autosize:"",type:"textarea",maxlength:"500",placeholder:t.$t("description"),"show-word-limit":""},null,8,["modelValue","placeholder"])])]),_:1},8,["onSubmit"])])])}const C=I(y,[["render",G],["__scopeId","data-v-f27f0bd9"]]);export{C as default};
