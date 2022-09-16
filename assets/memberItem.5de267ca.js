import{A as h}from"./avatar.592ca86f.js";import{R as f}from"./roleTag.bb033a76.js";import{_ as v,o as a,a as M,ae as I,w as o,b as s,t as n,m as l,d as r,e as y,r as m}from"./index.779b1636.js";const p={name:"MemberList",components:{Avatar:h,RoleTag:f},props:{groupMemberItem:{type:Object},role:{type:Number},userRole:{type:Number}},data(){return{status:this.groupMemberItem.status}},mounted(){this.joinDays()},methods:{joinDays(t){return parseInt((new Date().getTime()/1e3-t)/(24*60*60))},unbaned(){this.$dialog.confirm({title:this.$t("tips"),message:this.$t("unbanConfirm"),confirmButtonText:this.$t("confirm"),confirmButtonColor:"#3F80F7",cancelButtonText:this.$t("cancel")}).then(async()=>{try{(await api.group.manageMember(this.$store.state.group.groupId,this.groupMemberItem.userAddress,0,0)).status==1&&(this.status=0,this.$toast(this.$t("unbanSuccess")))}catch(t){console.log(t)}}).catch(()=>{})}}},k={class:"member-item-info"},R={class:"top"},j={class:"name"},D={class:"is-online"},A={key:0,class:"online"},T={key:1,class:"outline"},w={class:"member-item-status"},B={class:"join-days"},N={class:"baned-date"},C={key:0},$={key:1};function S(t,c,e,Y,V,i){const u=m("Avatar"),d=m("RoleTag"),_=m("van-cell"),b=m("van-swipe-cell");return a(),M(b,{class:"member-item"},I({default:o(()=>[l(_,null,{icon:o(()=>[l(u,{class:"avatar",image:e.groupMemberItem.image,address:e.groupMemberItem.userAddress},null,8,["image","address"])]),title:o(()=>[s("div",k,[s("div",R,[l(d,{class:"role-tag",role:e.groupMemberItem.role,userRole:e.groupMemberItem.userRole},null,8,["role","userRole"]),s("div",j,n(t.$f.getUserShowName({userAddress:e.groupMemberItem.userAddress,userNickname:e.groupMemberItem.nickname})),1)]),s("div",D,[e.groupMemberItem.isOnline?(a(),r("div",A,n(t.$t("online")),1)):(a(),r("div",T,n(t.$t("offline")),1))])])]),value:o(()=>[s("div",w,[s("div",B,n(`${t.$t("joinedDay1")}${i.joinDays(e.groupMemberItem.joinTime)}${t.$t("joinedDay2")}`),1),s("div",N,[e.groupMemberItem.status==1?(a(),r("span",C,n(`${t.$t("bannedUntil")}${t.$dayjs.unix(e.groupMemberItem.bannedExpiredTime).format("YYYY-MM-DD HH:MM:ss")}`),1)):e.groupMemberItem.status==2?(a(),r("span",$,n(t.$t("banned")),1)):y("",!0)])])]),_:1})]),_:2},[(e.groupMemberItem.status==1||e.groupMemberItem.status==2)&&(e.role==1||e.role==2||e.userRole==2||e.userRole==3)?{name:"right",fn:o(()=>[s("div",{class:"unban",onClick:c[0]||(c[0]=(...g)=>i.unbaned&&i.unbaned(...g))},n(t.$t("unban")),1)])}:void 0]),1024)}const O=v(p,[["render",S],["__scopeId","data-v-f371fcc0"]]);export{O as M};
