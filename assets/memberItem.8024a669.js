import{A as h}from"./avatar.62b71b95.js";import{R as v}from"./roleTag.cc6d2f09.js";import{_ as M,o as a,f as I,ae as y,w as o,i as t,j as i,t as c,g as n,h as f,r}from"./index.7f34ccfb.js";const p={name:"MemberList",components:{Avatar:h,RoleTag:v},props:{groupMemberItem:{type:Object},role:{type:Number},userRole:{type:Number}},data(){return{status:this.groupMemberItem.status}},mounted(){this.joinDays()},methods:{joinDays(s){return parseInt((new Date().getTime()/1e3-s)/(24*60*60))},unbaned(){this.$dialog.confirm({title:"\u63D0\u793A",message:"\u662F\u5426\u89E3\u9664\u7981\u8A00",confirmButtonText:"\u786E\u8BA4",confirmButtonColor:"#3F80F7",cancelButtonText:"\u53D6\u6D88"}).then(async()=>{try{(await api.group.manageMember(this.$store.state.group.groupId,this.groupMemberItem.userAddress,0,0)).status==1&&(this.status=0,this.$toast("\u89E3\u9664\u7981\u8A00\u6210\u529F"))}catch(s){console.log(s)}}).catch(()=>{})}}},k={class:"member-item-info"},R={class:"top"},j={class:"name"},x={class:"is-online"},A={key:0,class:"online"},T={key:1,class:"outline"},w={class:"member-item-status"},B={class:"join-days"},D={class:"baned-date"},N={key:0},C={key:1};function Y(s,l,e,S,V,m){const u=r("Avatar"),d=r("RoleTag"),_=r("van-cell"),g=r("van-swipe-cell");return a(),I(g,{class:"member-item"},y({default:o(()=>[i(_,null,{icon:o(()=>[i(u,{class:"avatar",image:e.groupMemberItem.image,address:e.groupMemberItem.userAddress},null,8,["image","address"])]),title:o(()=>[t("div",k,[t("div",R,[i(d,{class:"role-tag",role:e.groupMemberItem.role,userRole:e.groupMemberItem.userRole},null,8,["role","userRole"]),t("div",j,c(s.$f.getUserShowName({userAddress:e.groupMemberItem.userAddress,userNickname:e.groupMemberItem.nickname})),1)]),t("div",x,[e.groupMemberItem.isOnline?(a(),n("div",A,"\u5F53\u524D\u5728\u7EBF")):(a(),n("div",T,"\u79BB\u7EBF"))])])]),value:o(()=>[t("div",w,[t("div",B,"\u5DF2\u52A0\u5165"+c(m.joinDays(e.groupMemberItem.joinTime))+"\u5929",1),t("div",D,[e.groupMemberItem.status==1?(a(),n("span",N,"\u7981\u8A00\u81F3"+c(s.$dayjs.unix(e.groupMemberItem.bannedExpiredTime).format("YYYY-MM-DD HH:MM:ss")),1)):e.groupMemberItem.status==2?(a(),n("span",C,"\u6C38\u4E45\u7981\u8A00")):f("",!0)])])]),_:1})]),_:2},[(e.groupMemberItem.status==1||e.groupMemberItem.status==2)&&(e.role==1||e.role==2||e.userRole==2||e.userRole==3)?{name:"right",fn:o(()=>[t("div",{class:"unban",onClick:l[0]||(l[0]=(...b)=>m.unbaned&&m.unbaned(...b))},"\u89E3\u9664\u7981\u8A00")])}:void 0]),1024)}const O=M(p,[["render",Y],["__scopeId","data-v-4aa89b62"]]);export{O as M};
