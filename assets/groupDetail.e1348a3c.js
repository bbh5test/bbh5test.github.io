import{_ as B,k as b,c as V,d as n,b as r,m as s,ad as N,w as p,a as m,e as l,t as u,u as _,v as k,r as g,o as a,f as v,F as T,x as j}from"./index.10c3bac0.js";import{M as G}from"./memberItem.186f6e3a.js";import{A as z}from"./avatar.c46e8228.js";import"./roleTag.5773d3ac.js";const D={name:"GroupDetail",inject:["reload"],components:{MemberItem:G,Avatar:z},watch:{},computed:{groupInfo(){var t;return(t=this.$store.state)==null?void 0:t.group}},mounted(){this.init()},data(){return{becomeManagerVisible:!1,groupMemberList:[],loading:!1,finished:!1,error:!1,pageSize:50,pageNumber:1}},methods:{async init(){let t=this.$toast.loading({message:"Loading...",forbidClick:!0,duration:0});this.loading=!1,this.finished=!1,this.error=!1,this.pageNumber=1;try{await this.getMemberList()}catch(o){console.log(o)}finally{t.clear()}},async getMemberList(){this.loading=!0;try{let t=this.groupInfo.groupId;if(!t)return;let o=await b.groupMember.getMemberList(t,this.pageSize,this.pageNumber,[0,1,2]);console.log(o),this.pageNumber==1&&(this.groupMemberList=[]),o.status==1?(this.groupMemberList=this.groupMemberList.concat(o.data.list),o.data.list.length<this.pageSize||this.groupMemberList.length>=this.groupInfo.totalMembers?this.finished=!0:(this.pageNumber++,console.log(this.pageNumber))):this.error=!0}catch{this.error=!0}finally{setTimeout(()=>{this.loading=!1},1e3)}},editGroup(){this.$router.push({name:"GroupSet",params:{groupId:this.groupInfo.groupId}})},shareLink(){let t=window.document.location.host+"/group/"+this.groupInfo.groupId+"/chat";V(t)},openBecomeManager(){this.$store.commit("setBecomeManagerVisible",!0)},jumpToViolation(){(this.groupInfo.status==2||this.groupInfo.status==3)&&this.$router.push({name:"DealWithViolation",params:{groupId:this.groupInfo.groupId}})},jumpToEditOfficial(){this.$router.push({name:"GroupOfficialSet",params:{groupId:this.groupInfo.groupId}})},jumpToBanned(){this.$router.push({name:"Banned",params:{groupId:this.groupInfo.groupId}})},jumpAddViolation(){this.$router.push({name:"AddViolation",params:{groupId:this.groupInfo.groupId}})},leaveGroup(){this.$dialog.confirm({title:this.$t("tips"),message:this.$t("exitChatWarn"),confirmButtonText:this.$t("confirm"),confirmButtonColor:"#3F80F7",cancelButtonText:this.$t("cancel")}).then(async()=>{try{(await b.group.leave(this.groupInfo.groupId)).status==1&&this.$router.push("/chats")}catch(t){console.log(t)}}).catch(()=>{})}}},S={class:"group-detail"},U={class:"group-content-box"},A={class:"group-content"},F={class:"section-top"},J={class:"nickname"},O={key:0,class:"svg-box"},W={key:1,class:"svg-box"},E={class:"members"},P={class:"section-center"},R={class:"chain-name"},q={key:0,class:"section-btn"},H={key:0,class:"weigui-handle"},K={key:1,class:"official-renzheng"},Q={class:"left-title"},X={class:"custom-title"},Y={class:"svg-box"},Z={class:"member-box"},x={class:"member-list"},$={key:2,class:"bottom-operate"},ee={key:0,class:"type-1"},te={key:1,class:"type-2"};function oe(t,o,re,se,d,e){const f=g("van-icon"),y=g("van-nav-bar"),M=g("Avatar"),h=g("van-image"),c=g("van-cell"),I=g("van-button"),C=g("MemberItem"),L=g("van-empty"),w=g("van-list");return a(),n("div",S,[r("div",null,[s(y,{onClickLeft:o[0]||(o[0]=i=>t.$router.push({name:"Chat",params:{groupId:t.$route.params.groupId}})),"left-arrow":"",fixed:"","safe-area-inset-top":"","z-index":"2",title:t.$t("groupDetails")},N({_:2},[e.groupInfo.currentUser.role==1||e.groupInfo.currentUser.role==2?{name:"right",fn:p(()=>[e.groupInfo.currentUser.role==1||e.groupInfo.currentUser.role==2?(a(),m(f,{key:0,class:"icon",size:"1.6em",name:"/assets/images/edit.png",onClick:e.editGroup},null,8,["onClick"])):l("",!0)])}:void 0]),1032,["title"])]),r("div",U,[r("div",A,[r("div",F,[e.groupInfo.groupId?(a(),m(M,{key:0,class:"avatar",image:e.groupInfo.image?e.groupInfo.image:t.$f.formatIcon(t.$route.params.groupId),address:e.groupInfo.address},null,8,["image","address"])):l("",!0),r("div",J,[r("span",null,u(t.$f.getGroupShowName({address:e.groupInfo.groupId.split("-")[0],name:e.groupInfo.name,nickname:e.groupInfo.nickname})),1),e.groupInfo.providers.length>0?(a(),n("div",O,[s(h,{class:"img","lazy-load":"",src:"/assets/images/certification.png"})])):l("",!0),e.groupInfo.type=="nft"?(a(),n("div",W,[s(h,{class:"img","lazy-load":"",src:"/assets/images/NFT.png"})])):l("",!0)]),r("div",E,u(e.groupInfo.totalMembers+" "+t.$t("members")),1)]),r("div",P,[s(c,{title:t.$t("tokenName")+":",border:!1,value:e.groupInfo.name},null,8,["title","value"]),s(c,{title:t.$t("chain")+":",border:!1},{value:p(()=>[r("div",R,[e.groupInfo.chain?(a(),m(f,{key:0,class:"chain-icon",name:`https://ave.s3.ap-east-1.amazonaws.com/chain/${e.groupInfo.chain}.png`},null,8,["name"])):l("",!0),r("span",null,u(e.groupInfo.chain),1)])]),_:1},8,["title"]),s(c,{title:t.$t("officialWebsite")+":",border:!1,value:e.groupInfo.officialWebsiteUrl},null,8,["title","value"]),s(c,{title:t.$t("description")+":",border:!1,value:e.groupInfo.description||""},null,8,["title","value"])]),e.groupInfo.isJoined?(a(),n("div",q,[s(I,{class:"share-btn btn",round:"",block:"","native-type":"submit",type:"default",onClick:e.shareLink},{default:p(()=>[v(u(t.$t("shareLink")),1)]),_:1},8,["onClick"]),_(s(I,{class:"admin-btn btn",round:"",block:"","native-type":"submit",onClick:e.openBecomeManager,type:"primary"},{default:p(()=>[v(u(t.$t("admin")),1)]),_:1},8,["onClick"]),[[k,e.groupInfo.managers.length<5&&e.groupInfo.currentUser.role==0]])])):l("",!0)]),e.groupInfo.isJoined?(a(),n("div",H,[s(c,{title:t.$t("groupViolation"),"is-link":"","value-class":e.groupInfo.status==2||e.groupInfo.status==3?"active":"",value:e.groupInfo.status==2||e.groupInfo.status==3?t.$t("hasPenalty"):t.$t("noViolation"),onClick:e.jumpToViolation},null,8,["title","value-class","value","onClick"])])):l("",!0),e.groupInfo.isJoined?(a(),n("div",K,[e.groupInfo.providers.length==0||e.groupInfo.currentUser.role==2?(a(),m(c,{key:0,"is-link":"",onClick:e.jumpToEditOfficial},{title:p(()=>[r("div",Q,[r("span",X,u(t.$t("projectOfficialConfiguration")),1),r("div",Y,[s(h,{class:"img","lazy-load":"",src:"/assets/images/certification.png"})])])]),_:1},8,["onClick"])):l("",!0)])):l("",!0),r("div",Z,[s(c,{title:`${t.$t("groupMembers")}(${e.groupInfo.totalMembers})`,border:!1},{"right-icon":p(()=>[r("span",{onClick:o[1]||(o[1]=(...i)=>e.jumpToBanned&&e.jumpToBanned(...i))},[v(u(t.$t("viewBanList"))+" ",1),s(f,{name:"arrow",class:"arrow-icon"})])]),_:1},8,["title"]),r("div",x,[s(w,{loading:d.loading,"onUpdate:loading":o[2]||(o[2]=i=>d.loading=i),offset:"100","loading-text":t.$t("loading"),finished:d.finished,"finished-text":t.$t("noMore"),error:d.error,"onUpdate:error":o[3]||(o[3]=i=>d.error=i),"error-text":t.$t("errorText"),onLoad:e.getMemberList,"immediate-check":!1},{default:p(()=>[(a(!0),n(T,null,j(d.groupMemberList,(i,ae)=>(a(),m(C,{groupMemberItem:i,role:t.$store.state.user.role,userRole:t.$store.state.user.role},null,8,["groupMemberItem","role","userRole"]))),256)),_(s(L,{class:"empty",description:t.$t("emptyData")},null,8,["description"]),[[k,d.groupMemberList&&d.groupMemberList.length===0&&!d.loading]])]),_:1},8,["loading","loading-text","finished","finished-text","error","error-text","onLoad"])])]),e.groupInfo.isJoined?(a(),n("div",$,[t.$store.state.user.role==2||t.$store.state.user.role==3?(a(),n("div",ee,[r("div",{class:"weigui",onClick:o[4]||(o[4]=(...i)=>e.jumpAddViolation&&e.jumpAddViolation(...i))},[r("div",null,u(t.$t("violationPenalty")),1)]),r("div",{class:"out",onClick:o[5]||(o[5]=(...i)=>e.leaveGroup&&e.leaveGroup(...i))},[r("div",null,u(t.$t("exitChat")),1)])])):(a(),n("div",te,[r("div",{class:"out",onClick:o[6]||(o[6]=(...i)=>e.leaveGroup&&e.leaveGroup(...i))},u(t.$t("exitChat")),1)]))])):l("",!0)])])}const de=B(D,[["render",oe],["__scopeId","data-v-871181d6"]]);export{de as default};
