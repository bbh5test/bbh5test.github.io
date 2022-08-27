import{_ as G,D as y,y as k,a as V,c as d,b as t,d as l,w as f,F as T,r as a,o as m,h as w,n as B,t as $,k as g,p as C,i as N,x as _}from"./index.6be579bd.js";const W={name:"OfficialSet",components:{DialogBase:y},computed:{isProvider(){return this.$store.state.group.currentUser.role==2}},watch:{"$store.state.group.groupId"(){this.initOfficialGroupInfo(),this.isFirst=!0},"$store.state.group.currentUser.userAddress"(){this.connectVisible=this.$store.state.group.currentUser.role!==2},officialGroupInfo:{handler:function(o,e){this.isFirst||(this.isEdit=!0),this.isFirst=!1},deep:!0}},data(){return{connectVisible:this.$store.state.group.currentUser.role!==2,isEdit:!1,isFirst:!0,officialGroupInfo:{}}},mounted(){this.initOfficialGroupInfo()},methods:{async init(){this.isEdit=!1,this.isFirst=!0;try{await this.$store.dispatch("getGroupDetail",this.$route.params.groupId)}catch(o){console.log(o)}},initOfficialGroupInfo(){this.officialGroupInfo={tokenName:this.$store.state.group.name,chain:this.$store.state.group.chain,tokenAddress:this.$store.state.group.address,nftMintUrl:this.$store.state.group.nftMintUrl,nftTradeUrl:this.$store.state.group.nftTradeUrl,officialWebsiteUrl:this.$store.state.group.officialWebsiteUrl}},copy:k,async submit(){if(!this.isEdit)return;if(!this.isProvider){this.connectVisible=!0;return}let o=this.$toast.loading({message:"Loading...",forbidClick:!0,duration:0});try{let e=await V.group.updateProviderInfo(this.$store.state.group.groupId,this.officialGroupInfo.nftMintUrl,this.officialGroupInfo.nftTradeUrl,this.officialGroupInfo.officialWebsiteUrl);console.log(e),e.status==1&&(await this.init(),this.$router.push({name:"GroupDetail",params:{groupId:this.$route.params.groupId}}))}catch(e){console.log(e)}finally{o.clear()}console.log(this.groupInfo)},completeNftMintUrl(){this.officialGroupInfo.nftMintUrl=this.$f.completeWebsite(this.officialGroupInfo.nftMintUrl)},completeNftTradeUrl(){this.officialGroupInfo.nftTradeUrl=this.$f.completeWebsite(this.officialGroupInfo.nftTradeUrl)},completeOfficialWebsiteUrl(){this.officialGroupInfo.officialWebsiteUrl=this.$f.completeWebsite(this.officialGroupInfo.officialWebsiteUrl)}}},n=o=>(C("data-v-5b2f0812"),o=o(),N(),o),F={class:"official-set"},x={class:"address"},M={class:"form-item"},O=n(()=>t("label",null,"\u5B98\u65B9\u7F51\u7AD9",-1)),S={key:0,class:"form-item"},D=n(()=>t("label",null,"NFT\u94F8\u9020URL",-1)),E={key:1,class:"form-item"},L=n(()=>t("label",null,"NFT\u4EA4\u6613URL",-1)),z={class:"connect-manager"},A=n(()=>t("div",{class:"warn-info"},[_(" \u4F60\u76EE\u524D\u8FD8\u4E0D\u662F\u9879\u76EE\u65B9\uFF0C\u8BF7\u9996\u5148\u8054\u7CFBBlabla\u7BA1\u7406\u5458\u6210\u4E3A\u9879\u76EE\u65B9\u3002"),t("br"),_(" \u8BF7\u786E\u4FDD\u4F7F\u7528\u5B98\u65B9\u90AE\u7BB1\u6216\u793E\u533A\u7BA1\u7406\u5458\u8D26\u6237\u8054\u7CFB\u4E0B\u65B9\u7684\u8D26\u6237\u3002 ")],-1)),R={class:"connect-way"},P=n(()=>t("div",null,"\u8054\u7CFB\u5B98\u65B9Telegram\uFF1A",-1)),q=n(()=>t("text",null,"https://t.me/aveglobal",-1)),j={class:"connect-way"},H=n(()=>t("div",null,"\u8054\u7CFB\u5B98\u65B9\u90AE\u7BB1\uFF1A",-1)),J=n(()=>t("text",null,"business@blabla.network",-1));function K(o,e,Q,X,s,r){const v=a("van-nav-bar"),u=a("van-cell"),c=a("van-icon"),b=a("van-cell-group"),p=a("van-field"),U=a("van-form"),I=a("DialogBase");return m(),d(T,null,[t("div",F,[t("div",null,[l(v,{"left-text":"\u53D6\u6D88",onClickLeft:e[1]||(e[1]=i=>o.$router.push({name:"GroupDetail",params:{groupId:o.$route.params.groupId}})),fixed:"",placeholder:"","safe-area-inset-top":"","z-index":"2",title:"\u7FA4\u5B98\u65B9\u914D\u7F6E"},{right:f(()=>[t("span",{class:"finish",onClick:e[0]||(e[0]=w(i=>o.$refs.form.submit(),["stop"])),style:B({color:s.isEdit?"#9505f9":"#999"})},"\u5B8C\u6210",4)]),_:1})]),t("div",null,[l(b,{class:"base-info"},{default:f(()=>[l(u,{title:"Token\u540D\u79F0",value:s.officialGroupInfo.tokenName},null,8,["value"]),l(u,{title:"\u94FE\u540D\u79F0",value:s.officialGroupInfo.chain},null,8,["value"]),l(u,{title:"Token\u5730\u5740"},{"right-icon":f(()=>{var i,h;return[t("div",x,[t("text",null,$((h=(i=o.$f).formatAddress)==null?void 0:h.call(i,s.officialGroupInfo.tokenAddress,4)),1),l(c,{class:"icon",size:"1.1em",name:"/assets/images/copy.png",onClick:e[2]||(e[2]=Y=>r.copy(s.officialGroupInfo.tokenAddress))})])]}),_:1})]),_:1}),l(U,{class:"form-box",ref:"form",onSubmit:r.submit},{default:f(()=>[t("div",M,[O,l(p,{onBlur:r.completeOfficialWebsiteUrl,maxlength:"300",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5B98\u65B9\u7F51\u7AD9"}],modelValue:s.officialGroupInfo.officialWebsiteUrl,"onUpdate:modelValue":e[3]||(e[3]=i=>s.officialGroupInfo.officialWebsiteUrl=i),placeholder:"\u8F93\u5165\u5B98\u65B9\u7F51\u7AD9"},null,8,["onBlur","modelValue"])]),(o.$store.state.group.type="nft")?(m(),d("div",S,[D,l(p,{onBlur:r.completeNftMintUrl,maxlength:"300",modelValue:s.officialGroupInfo.nftMintUrl,"onUpdate:modelValue":e[4]||(e[4]=i=>s.officialGroupInfo.nftMintUrl=i),placeholder:"\u8F93\u5165NFT\u94F8\u9020URL"},null,8,["onBlur","modelValue"])])):g("",!0),(o.$store.state.group.type="nft")?(m(),d("div",E,[L,l(p,{onBlur:r.completeNftTradeUrl,maxlength:"300",modelValue:s.officialGroupInfo.nftTradeUrl,"onUpdate:modelValue":e[5]||(e[5]=i=>s.officialGroupInfo.nftTradeUrl=i),placeholder:"\u8F93\u5165NFT\u4EA4\u6613URL"},null,8,["onBlur","modelValue"])])):g("",!0)]),_:1},8,["onSubmit"])])]),l(I,{visible:s.connectVisible,"onUpdate:visible":e[8]||(e[8]=i=>s.connectVisible=i),title:"\u63D0\u793A",showConfirmButton:!0,showCancelButton:!0,onOnConfirm:o.kickConfirm},{default:f(()=>[t("div",z,[A,t("div",R,[P,t("div",null,[q,l(c,{class:"icon",size:"1em",name:"/assets/images/copy.png",onClick:e[6]||(e[6]=i=>r.copy("https://t.me/aveglobal"))})])]),t("div",j,[H,t("div",null,[J,l(c,{class:"icon",size:"1em",name:"/assets/images/copy.png",onClick:e[7]||(e[7]=i=>r.copy("business@blabla.network"))})])])])]),_:1},8,["visible","onOnConfirm"])],64)}const ee=G(W,[["render",K],["__scopeId","data-v-5b2f0812"]]);export{ee as default};
