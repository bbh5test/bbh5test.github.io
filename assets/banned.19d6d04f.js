import{_ as h,d as f,g as p,i as o,j as a,t as c,w as b,r as i,o as l,F as _,x as v,u as M,v as I,f as L}from"./index.7f34ccfb.js";import{M as y}from"./memberItem.8024a669.js";import"./avatar.62b71b95.js";import"./roleTag.cc6d2f09.js";const x={name:"banned",components:{MemberItem:y},computed:{groupInfo(){var e;return(e=this.$store.state)==null?void 0:e.group}},data(){return{groupMemberList:[],loading:!1,finished:!1,error:!1,pageSize:1,pageNumber:1}},mounted(){this.init()},methods:{getRole(e){return this.$store.state.group.providers.includes(e)?2:this.$store.state.group.managers.includes(e)?1:0},async init(){this.loading=!1,this.finished=!1,this.error=!1,this.pageSize=20,this.pageNumber=1;try{this.$store.state.group.groupId||await this.$store.dispatch("getGroupDetail",this.$route.params.groupId),await this.getMemberList()}catch(e){console.log(e)}},async getMemberList(){this.loading=!0;try{let e=this.groupInfo.groupId;if(console.log(e),!e)return;let t=await f.groupMember.getMemberList(e,this.pageSize,this.pageNumber,[1,2]);console.log(t),this.pageNumber==1&&(this.groupMemberList=[]),t.status==1?(this.groupMemberList=this.groupMemberList.concat(t.data),t.data.length<this.pageSize||this.groupMemberList.length>=this.groupInfo.totalMembers?(console.log(222),this.finished=!0):(this.pageNumber++,console.log(this.pageNumber))):this.error=!0}catch{this.error=!0}finally{setTimeout(()=>{this.loading=!1},1e3)}}}},w={class:"banned"},N={class:"member-box"},$={class:"member-number"};function S(e,t,k,z,r,n){const u=i("van-nav-bar"),g=i("MemberItem"),m=i("van-empty"),d=i("van-list");return l(),p("div",w,[o("div",null,[a(u,{"left-arrow":"",onClickLeft:t[0]||(t[0]=s=>e.$router.push({name:"GroupDetail",params:{groupId:e.$route.params.groupId}})),fixed:"",placeholder:"","safe-area-inset-top":"","z-index":"2",title:"\u7981\u8A00\u5217\u8868"})]),o("div",null,[o("div",N,[o("div",$,"\u7FA4\u6210\u5458("+c(n.groupInfo.totalMembers)+")",1),a(d,{loading:r.loading,"onUpdate:loading":t[1]||(t[1]=s=>r.loading=s),offset:"100","loading-text":e.$t("loading"),finished:r.finished,"finished-text":e.$t("noMore"),error:r.error,"onUpdate:error":t[2]||(t[2]=s=>r.error=s),"error-text":e.$t("errorText"),onLoad:n.getMemberList,"immediate-check":!1},{default:b(()=>[(l(!0),p(_,null,v(r.groupMemberList,(s,D)=>(l(),L(g,{groupMemberItem:s,role:n.getRole(e.$store.state.user.userAddress),userRole:e.$store.state.user.role},null,8,["groupMemberItem","role","userRole"]))),256)),M(a(m,{class:"empty",description:e.$t("emptyData")},null,8,["description"]),[[I,r.groupMemberList&&r.groupMemberList.length===0&&!r.loading]])]),_:1},8,["loading","loading-text","finished","finished-text","error","error-text","onLoad"])])])])}const G=h(x,[["render",S],["__scopeId","data-v-40a34304"]]);export{G as default};
