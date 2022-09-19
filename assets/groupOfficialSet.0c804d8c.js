import{_,c as $,k as G,d,b as o,m as s,w as f,F as k,r as a,o as m,ae as y,y as V,t as r,e as h,p as w,g as C}from"./index.e3b8e14c.js";import{D as O}from"./dialogBase.11b6deee.js";const B={name:"OfficialSet",components:{DialogBase:O},computed:{isProvider(){return this.$store.state.group.currentUser.role==2}},watch:{"$store.state.group.groupId"(){this.initOfficialGroupInfo(),this.isFirst=!0},"$store.state.group.currentUser.userAddress"(){this.connectVisible=this.$store.state.group.currentUser.role!==2},officialGroupInfo:{handler:function(t,e){this.isFirst||(this.isEdit=!0),this.isFirst=!1},deep:!0},connectVisible(t){t||this.$router.push({name:"GroupDetail",params:{groupId:this.$route.params.groupId}})}},data(){return{connectVisible:this.$store.state.group.currentUser.role!==2,isEdit:!1,isFirst:!0,officialGroupInfo:{}}},mounted(){this.initOfficialGroupInfo()},methods:{async init(){this.isEdit=!1,this.isFirst=!0;try{await this.$store.dispatch("getGroupDetail",this.$route.params.groupId)}catch(t){console.log(t)}},initOfficialGroupInfo(){this.officialGroupInfo={tokenName:this.$store.state.group.name,chain:this.$store.state.group.chain,tokenAddress:this.$store.state.group.address,nftMintUrl:this.$store.state.group.nftMintUrl,nftTradeUrl:this.$store.state.group.nftTradeUrl,officialWebsiteUrl:this.$store.state.group.officialWebsiteUrl}},copy:$,async submit(){if(!this.isEdit)return;if(!this.isProvider){this.connectVisible=!0;return}let t=this.$toast.loading({message:"Loading...",forbidClick:!0,duration:0});try{let e=await G.group.updateProviderInfo(this.$store.state.group.groupId,this.officialGroupInfo.nftMintUrl,this.officialGroupInfo.nftTradeUrl,this.officialGroupInfo.officialWebsiteUrl);console.log(e),e.status==1&&(await this.init(),this.$router.push({name:"GroupDetail",params:{groupId:this.$route.params.groupId}}))}catch(e){console.log(e)}finally{t.clear()}console.log(this.groupInfo)},completeNftMintUrl(){this.officialGroupInfo.nftMintUrl=this.$f.formatLink(this.officialGroupInfo.nftMintUrl)},completeNftTradeUrl(){this.officialGroupInfo.nftTradeUrl=this.$f.formatLink(this.officialGroupInfo.nftTradeUrl)},completeOfficialWebsiteUrl(){this.officialGroupInfo.officialWebsiteUrl=this.$f.formatLink(this.officialGroupInfo.officialWebsiteUrl)}}},g=t=>(w("data-v-871fefb0"),t=t(),C(),t),T={class:"official-set"},M={class:"set-content"},W={class:"address"},N={class:"form-item"},S={key:0,class:"form-item"},D={key:1,class:"form-item"},E={class:"connect-manager"},F={class:"warn-info"},A={class:"connect-way"},z=g(()=>o("text",null,"https://t.me/blablanetwork",-1)),L={class:"connect-way"},P=g(()=>o("text",null,"business@blabla.network",-1));function j(t,e,q,H,i,l){const v=a("van-nav-bar"),u=a("van-cell"),c=a("van-icon"),b=a("van-cell-group"),p=a("van-field"),I=a("van-form"),U=a("DialogBase");return m(),d(k,null,[o("div",T,[o("div",null,[s(v,{"left-text":t.$t("cancel"),onClickLeft:e[1]||(e[1]=n=>t.$router.push({name:"GroupDetail",params:{groupId:t.$route.params.groupId}})),fixed:"","safe-area-inset-top":"","z-index":"2",title:t.$t("projectOfficialConfiguration")},{right:f(()=>[o("span",{class:"finish",onClick:e[0]||(e[0]=y(n=>t.$refs.form.submit(),["stop"])),style:V({color:i.isEdit?"#9505f9":"#999"})},r(t.$t("done")),5)]),_:1},8,["left-text","title"])]),o("div",M,[s(b,{class:"base-info"},{default:f(()=>[s(u,{title:t.$t("tokenName"),value:i.officialGroupInfo.tokenName},null,8,["title","value"]),s(u,{title:t.$t("chain"),value:i.officialGroupInfo.chain},null,8,["title","value"]),s(u,{title:t.$t("tokenAddress")},{"right-icon":f(()=>[o("div",W,[o("text",null,r(t.$f.formatAddress(i.officialGroupInfo.tokenAddress,4)),1),s(c,{class:"icon",size:"1.1em",name:"/assets/images/copy.png",onClick:e[2]||(e[2]=n=>l.copy(i.officialGroupInfo.tokenAddress))})])]),_:1},8,["title"])]),_:1}),s(I,{class:"form-box",ref:"form",onSubmit:l.submit},{default:f(()=>[o("div",N,[o("label",null,r(t.$t("officialWebsite")),1),s(p,{onBlur:l.completeOfficialWebsiteUrl,maxlength:"300",rules:[{required:!0,message:t.$t("enterOfficialWebsite")}],modelValue:i.officialGroupInfo.officialWebsiteUrl,"onUpdate:modelValue":e[3]||(e[3]=n=>i.officialGroupInfo.officialWebsiteUrl=n)},null,8,["onBlur","rules","modelValue"])]),t.$store.state.group.type=="nft"?(m(),d("div",S,[o("label",null,r(t.$t("nftMintingUrl")),1),s(p,{onBlur:l.completeNftMintUrl,maxlength:"300",modelValue:i.officialGroupInfo.nftMintUrl,"onUpdate:modelValue":e[4]||(e[4]=n=>i.officialGroupInfo.nftMintUrl=n)},null,8,["onBlur","modelValue"])])):h("",!0),t.$store.state.group.type=="nft"?(m(),d("div",D,[o("label",null,r(t.$t("nftTradingUrl")),1),s(p,{onBlur:l.completeNftTradeUrl,maxlength:"300",modelValue:i.officialGroupInfo.nftTradeUrl,"onUpdate:modelValue":e[5]||(e[5]=n=>i.officialGroupInfo.nftTradeUrl=n)},null,8,["onBlur","modelValue"])])):h("",!0)]),_:1},8,["onSubmit"])])]),s(U,{visible:i.connectVisible,"onUpdate:visible":e[8]||(e[8]=n=>i.connectVisible=n),title:t.$t("tips"),showConfirmButton:!0,showCancelButton:!1,onOnConfirm:t.kickConfirm},{default:f(()=>[o("div",E,[o("div",F,r(t.$t("notProjectOwnerTips")),1),o("div",A,[o("div",null,r(t.$t("contractOfficialTelegram")),1),o("div",null,[z,s(c,{class:"icon",size:"1em",name:"/assets/images/copy.png",onClick:e[6]||(e[6]=n=>l.copy("https://t.me/aveglobal"))})])]),o("div",L,[o("div",null,r(t.$t("contractOfficialEmail")),1),o("div",null,[P,s(c,{class:"icon",size:"1em",name:"/assets/images/copy.png",onClick:e[7]||(e[7]=n=>l.copy("business@blabla.network"))})])])])]),_:1},8,["visible","title","onOnConfirm"])],64)}const Q=_(B,[["render",j],["__scopeId","data-v-871fefb0"]]);export{Q as default};
