import{_ as B,k as b,c as V,d as n,b as r,m as s,ad as N,w as p,a as m,e as l,t as d,u as _,v as k,r as g,o as a,f as v,F as T,x as j,p as S,g as G}from"./index.7651113b.js";import{M as z}from"./memberItem.b8a36a51.js";import{A as D}from"./avatar.766fe2de.js";import"./roleTag.5aa9d426.js";const U={name:"GroupDetail",inject:["reload"],components:{MemberItem:z,Avatar:D},watch:{},computed:{groupInfo(){var t;return(t=this.$store.state)==null?void 0:t.group}},mounted(){console.log(this.pageNumber),this.init()},data(){return{becomeManagerVisible:!1,groupMemberList:[],loading:!1,finished:!1,error:!1,pageSize:50,pageNumber:1}},methods:{async init(){let t=this.$toast.loading({message:"Loading...",forbidClick:!0,duration:0});this.loading=!1,this.finished=!1,this.error=!1,this.pageNumber=1;try{await this.getMemberList()}catch(o){console.log(o)}finally{t.clear()}},async getMemberList(){this.loading=!0;try{let t=this.groupInfo.groupId;if(!t)return;let o=await b.groupMember.getMemberList(t,this.pageSize,this.pageNumber,[0,1,2]);console.log(o),this.pageNumber==1&&(this.groupMemberList=[]),o.status==1?(this.groupMemberList=this.groupMemberList.concat(o.data.list),o.data.list.length<this.pageSize||this.groupMemberList.length>=this.groupInfo.totalMembers?this.finished=!0:(this.pageNumber++,console.log(this.pageNumber))):this.error=!0}catch{this.error=!0}finally{setTimeout(()=>{this.loading=!1},1e3)}},editGroup(){this.$router.push({name:"GroupSet",params:{groupId:this.groupInfo.groupId}})},shareLink(){let t=window.document.location.host+"/group/"+this.groupInfo.groupId+"/chat";V(t)},openBecomeManager(){this.$store.commit("setBecomeManagerVisible",!0)},jumpToViolation(){(this.groupInfo.status==2||this.groupInfo.status==3)&&this.$router.push({name:"DealWithViolation",params:{groupId:this.groupInfo.groupId}})},jumpToEditOfficial(){this.$router.push({name:"GroupOfficialSet",params:{groupId:this.groupInfo.groupId}})},jumpToBanned(){this.$router.push({name:"Banned",params:{groupId:this.groupInfo.groupId}})},jumpAddViolation(){this.$router.push({name:"AddViolation",params:{groupId:this.groupInfo.groupId}})},leaveGroup(){this.$dialog.confirm({title:"\u63D0\u793A",message:"\u662F\u5426\u9000\u51FA\u7FA4\u804A",confirmButtonText:this.$t("confirm"),confirmButtonColor:"#3F80F7",cancelButtonText:this.$t("cancel")}).then(async()=>{try{(await b.group.leave(this.groupInfo.groupId)).status==1&&this.$router.push("/chats")}catch(t){console.log(t)}}).catch(()=>{})}}},A=t=>(S("data-v-ac5b814f"),t=t(),G(),t),F={class:"group-detail"},J={class:"group-content-box"},O={class:"group-content"},E={class:"section-top"},W={class:"nickname"},R={key:0,class:"svg-box"},q={key:1,class:"svg-box"},H={class:"members"},K={class:"section-center"},P={class:"chain-name"},Q={key:0,class:"section-btn"},X={key:0,class:"weigui-handle"},Y={key:1,class:"official-renzheng"},Z={class:"left-title"},x={class:"custom-title"},$={class:"svg-box"},ee={class:"member-box"},te={class:"member-list"},oe={key:2,class:"bottom-operate"},re={key:0,class:"type-1"},se=A(()=>r("div",null,"\u5904\u7F5A\u8FDD\u89C4",-1)),ae=[se],ie={key:1,class:"type-2"};function ne(t,o,le,ue,u,e){const f=g("van-icon"),y=g("van-nav-bar"),M=g("Avatar"),h=g("van-image"),c=g("van-cell"),I=g("van-button"),C=g("MemberItem"),L=g("van-empty"),w=g("van-list");return a(),n("div",F,[r("div",null,[s(y,{onClickLeft:o[0]||(o[0]=i=>t.$router.push({name:"Chat",params:{groupId:t.$route.params.groupId}})),"left-arrow":"",fixed:"","safe-area-inset-top":"","z-index":"2",title:t.$t("groupDetails")},N({_:2},[e.groupInfo.currentUser.role==1||e.groupInfo.currentUser.role==2?{name:"right",fn:p(()=>[e.groupInfo.currentUser.role==1||e.groupInfo.currentUser.role==2?(a(),m(f,{key:0,class:"icon",size:"1.6em",name:"/assets/images/edit.png",onClick:e.editGroup},null,8,["onClick"])):l("",!0)])}:void 0]),1032,["title"])]),r("div",J,[r("div",O,[r("div",E,[e.groupInfo.groupId?(a(),m(M,{key:0,class:"avatar",image:e.groupInfo.image?e.groupInfo.image:t.$f.formatIcon(t.$route.params.groupId),address:e.groupInfo.address},null,8,["image","address"])):l("",!0),r("div",W,[r("span",null,d(t.$f.getGroupShowName({address:e.groupInfo.groupId.split("-")[0],name:e.groupInfo.name,nickname:e.groupInfo.nickname})),1),e.groupInfo.providers.length>0?(a(),n("div",R,[s(h,{class:"img","lazy-load":"",src:"/assets/images/certification.png"})])):l("",!0),e.groupInfo.type=="nft"?(a(),n("div",q,[s(h,{class:"img","lazy-load":"",src:"/assets/images/NFT.png"})])):l("",!0)]),r("div",H,d(e.groupInfo.totalMembers+" "+t.$t("members")),1)]),r("div",K,[s(c,{title:t.$t("tokenName")+":",border:!1,value:e.groupInfo.name},null,8,["title","value"]),s(c,{title:t.$t("chain")+":",border:!1},{value:p(()=>[r("div",P,[e.groupInfo.chain?(a(),m(f,{key:0,class:"chain-icon",name:`https://ave.s3.ap-east-1.amazonaws.com/chain/${e.groupInfo.chain}.png`},null,8,["name"])):l("",!0),r("span",null,d(e.groupInfo.chain),1)])]),_:1},8,["title"]),s(c,{title:t.$t("officialWebsite")+":",border:!1,value:e.groupInfo.officialWebsiteUrl},null,8,["title","value"]),s(c,{title:t.$t("description")+":",border:!1,value:e.groupInfo.description||""},null,8,["title","value"])]),e.groupInfo.isJoined?(a(),n("div",Q,[s(I,{class:"share-btn btn",round:"",block:"","native-type":"submit",type:"default",onClick:e.shareLink},{default:p(()=>[v(d(t.$t("shareLink")),1)]),_:1},8,["onClick"]),_(s(I,{class:"admin-btn btn",round:"",block:"","native-type":"submit",onClick:e.openBecomeManager,type:"primary"},{default:p(()=>[v(d(t.$t("admin")),1)]),_:1},8,["onClick"]),[[k,e.groupInfo.managers.length<5&&e.groupInfo.currentUser.role==0]])])):l("",!0)]),e.groupInfo.isJoined?(a(),n("div",X,[s(c,{title:t.$t("groupViolation"),"is-link":"","value-class":e.groupInfo.status==2||e.groupInfo.status==3?"active":"",value:e.groupInfo.status==2||e.groupInfo.status==3?"\u6709\u5904\u7F5A\uFF0C\u53BB\u5904\u7406":t.$t("noViolation"),onClick:e.jumpToViolation},null,8,["title","value-class","value","onClick"])])):l("",!0),e.groupInfo.isJoined?(a(),n("div",Y,[e.groupInfo.providers.length==0||e.groupInfo.currentUser.role==2?(a(),m(c,{key:0,"is-link":"",onClick:e.jumpToEditOfficial},{title:p(()=>[r("div",Z,[r("span",x,d(t.$t("projectOfficialConfiguration")),1),r("div",$,[s(h,{class:"img","lazy-load":"",src:"/assets/images/certification.png"})])])]),_:1},8,["onClick"])):l("",!0)])):l("",!0),r("div",ee,[s(c,{title:`${t.$t("groupMembers")}(${e.groupInfo.totalMembers})`,border:!1},{"right-icon":p(()=>[r("span",{onClick:o[1]||(o[1]=(...i)=>e.jumpToBanned&&e.jumpToBanned(...i))},[v(d(t.$t("viewBanList"))+" ",1),s(f,{name:"arrow",class:"arrow-icon"})])]),_:1},8,["title"]),r("div",te,[s(w,{loading:u.loading,"onUpdate:loading":o[2]||(o[2]=i=>u.loading=i),offset:"100","loading-text":t.$t("loading"),finished:u.finished,"finished-text":t.$t("noMore"),error:u.error,"onUpdate:error":o[3]||(o[3]=i=>u.error=i),"error-text":t.$t("errorText"),onLoad:e.getMemberList,"immediate-check":!1},{default:p(()=>[(a(!0),n(T,null,j(u.groupMemberList,(i,de)=>(a(),m(C,{groupMemberItem:i,role:t.$store.state.user.role,userRole:t.$store.state.user.role},null,8,["groupMemberItem","role","userRole"]))),256)),_(s(L,{class:"empty",description:t.$t("emptyData")},null,8,["description"]),[[k,u.groupMemberList&&u.groupMemberList.length===0&&!u.loading]])]),_:1},8,["loading","loading-text","finished","finished-text","error","error-text","onLoad"])])]),e.groupInfo.isJoined?(a(),n("div",oe,[t.$store.state.user.role==2||t.$store.state.user.role==3?(a(),n("div",re,[r("div",{class:"weigui",onClick:o[4]||(o[4]=(...i)=>e.jumpAddViolation&&e.jumpAddViolation(...i))},ae),r("div",{class:"out",onClick:o[5]||(o[5]=(...i)=>e.leaveGroup&&e.leaveGroup(...i))},[r("div",null,d(t.$t("exitChat")),1)])])):(a(),n("div",ie,[r("div",{class:"out",onClick:o[6]||(o[6]=(...i)=>e.leaveGroup&&e.leaveGroup(...i))},d(t.$t("exitChat")),1)]))])):l("",!0)])])}const fe=B(U,[["render",ne],["__scopeId","data-v-ac5b814f"]]);export{fe as default};
