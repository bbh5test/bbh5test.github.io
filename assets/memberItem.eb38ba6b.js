import{A as h}from"./avatar.7495cc90.js";import{R as v}from"./roleTag.2002081b.js";import{_ as f,o as n,a as I,ad as M,w as o,b as s,t as a,m as l,d as r,e as y,r as m}from"./index.fb444750.js";const p={name:"MemberList",components:{Avatar:h,RoleTag:v},props:{groupMemberItem:{type:Object},role:{type:Number},userRole:{type:Number}},data(){return{status:this.groupMemberItem.status}},mounted(){this.joinDays()},methods:{joinDays(t){return parseInt((new Date().getTime()/1e3-t)/(24*60*60))},unbaned(){this.$dialog.confirm({title:this.$t("tips"),message:this.$t("unbanConfirm"),confirmButtonText:this.$t("confirm"),confirmButtonColor:"#3F80F7",cancelButtonText:this.$t("cancel")}).then(async()=>{try{(await api.group.manageMember(this.$store.state.group.groupId,this.groupMemberItem.userAddress,0,0)).status==1&&(this.status=0,this.$toast(this.$t("unbanSuccess")))}catch(t){console.log(t)}}).catch(()=>{})}}},k={class:"member-item-info"},R={class:"top"},j={class:"name"},D={class:"is-online"},A={key:0,class:"online"},T={key:1,class:"outline"},w={class:"member-item-status"},B={class:"join-days"},N={class:"baned-date"},C={key:0},$={key:1};function S(t,u,e,Y,V,i){const c=m("Avatar"),d=m("RoleTag"),_=m("van-cell"),b=m("van-swipe-cell");return n(),I(b,{class:"member-item"},M({default:o(()=>[l(_,null,{icon:o(()=>[l(c,{class:"avatar",image:e.groupMemberItem.image,address:e.groupMemberItem.userAddress},null,8,["image","address"])]),title:o(()=>[s("div",k,[s("div",R,[l(d,{class:"role-tag",role:e.groupMemberItem.role,userRole:e.groupMemberItem.userRole},null,8,["role","userRole"]),s("div",j,a(t.$f.getUserShowName({userAddress:e.groupMemberItem.userAddress,userNickname:e.groupMemberItem.nickname})),1)]),s("div",D,[e.groupMemberItem.isOnline?(n(),r("div",A,a(t.$t("online")),1)):(n(),r("div",T,a(t.$t("offline")),1))])])]),value:o(()=>[s("div",w,[s("div",B,a(`${t.$t("joinedDay1")}${i.joinDays(e.groupMemberItem.joinTime)}${t.$t("joinedDay2")}`),1),s("div",N,[e.groupMemberItem.status==1?(n(),r("span",C,a(`${t.$t("bannedUntil")}${t.$dayjs.unix(e.groupMemberItem.bannedExpiredTime).format("YYYY-MM-DD HH:mm:ss")}`),1)):e.groupMemberItem.status==2?(n(),r("span",$,a(t.$t("banned")),1)):y("",!0)])])]),_:1})]),_:2},[(e.groupMemberItem.status==1||e.groupMemberItem.status==2)&&(e.role==1||e.role==2||e.userRole==2||e.userRole==3)?{name:"right",fn:o(()=>[s("div",{class:"unban",onClick:u[0]||(u[0]=(...g)=>i.unbaned&&i.unbaned(...g))},a(t.$t("unban")),1)])}:void 0]),1024)}const O=f(p,[["render",S],["__scopeId","data-v-a8c1df4a"]]);export{O as M};
