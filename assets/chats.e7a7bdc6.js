import{_ as L,e as g,h as d,j as a,k as r,l as N,t as c,w as u,r as o,o as l,F as w,x as T,g as m,i as f}from"./index.c8b8f13a.js";import{A as I}from"./avatar.23786dba.js";const S={name:"Chats",components:{Avatar:I},data(){return{refreshing:!1,loading:!1,finished:!1,chatList:[],pageSize:10,pageNumber:1}},methods:{getGroupTitle(e){return this.$f.getGroupShowName({address:e.groupId.split("-")[0],name:e.name,nickname:e.nickname})},showUnreadmsgCount(e){return e>99?"99+":e},async onNextPage(){console.log("onNextPage"),this.pageNumber++,await this.getChatList()},async onRefresh(){this.pageNumber=1,this.chatList=[],await this.getChatList(),this.refreshing=!1},linkToSearch(){this.$router.push("/search")},async getChatList(){let e=await g.group.getMyGroups(this.pageSize,this.pageNumber);if(e.status==1){this.loading=!1,e.data.total<=this.pageSize*this.pageNumber?this.finished=!0:this.finished=!1;for(let h of e.data.groups)this.chatList.push(h)}},formatTimestamp(e){let s=this.$dayjs.unix(e);return s.isToday()?s.format("HH:mm"):s.isYesterday()?this.$t("yesterday")+" "+s.format("HH:mm"):s.format("YYYY-MM-DD HH:mm")},async exitChat(e){(await g.group.leave(e)).status==1&&(this.chatList=this.chatList.filter(h=>h.groupId!=e))},toChat(e){this.$router.push("/group/"+e+"/chat")}},mounted(){this.getChatList()}},V={class:"myChats-container"},$={class:"chat-content"},H={class:"search-bar"},M={class:"chats-container"},z=["onClick"],Y={class:"avatar"},A={class:"content"},B={class:"left"},G={class:"title"},R={class:"desc"},U={class:"info"},D={key:0,class:"time"},P={key:1,class:"unread"};function j(e,s,h,F,i,n){const p=o("van-nav-bar"),_=o("van-icon"),v=o("Avatar"),C=o("van-button"),k=o("van-swipe-cell"),y=o("van-list"),b=o("van-pull-refresh");return l(),d("section",V,[a("div",null,[r(p,{fixed:"",placeholder:"","safe-area-inset-top":"","z-index":"2",title:e.$t("chats")},null,8,["title"])]),a("div",$,[a("div",H,[a("div",{class:"search",onClick:s[0]||(s[0]=(...t)=>n.linkToSearch&&n.linkToSearch(...t))},[r(_,{name:"search"}),N(" \xA0"+c(e.$t("search")),1)])]),a("div",M,[r(b,{modelValue:i.refreshing,"onUpdate:modelValue":s[2]||(s[2]=t=>i.refreshing=t),onRefresh:n.onRefresh},{default:u(()=>[r(y,{"error-text":" \u8BF7\u6C42\u5931\u8D25\uFF0C\u70B9\u51FB\u91CD\u65B0\u52A0\u8F7D",loading:i.loading,"onUpdate:loading":s[1]||(s[1]=t=>i.loading=t),finished:i.finished,"finished-text":e.$t("noMore"),onLoad:n.onNextPage,"immediate-check":!1},{default:u(()=>[(l(!0),d(w,null,T(i.chatList,t=>(l(),m(k,{key:t.groupId,class:"chat-item-cell"},{right:u(()=>[r(C,{class:"exit-chat",square:"",type:"danger",text:e.$t("exitChat"),onClick:x=>n.exitChat(t.groupId)},null,8,["text","onClick"])]),default:u(()=>[a("div",{class:"chat-item",onClick:x=>n.toChat(t.groupId)},[a("div",Y,[r(v,{class:"avatar",image:t.image?t.image:e.$f.formatIcon(t.groupId),address:t.groupId.split("-")[0]},null,8,["image","address"])]),a("div",A,[a("div",null,[a("div",B,[a("div",G,c(n.getGroupTitle(t)),1),t.providerCount>0?(l(),m(_,{key:0,class:"cert",size:"0.4rem",name:"/assets/images/certification.png"})):f("",!0)]),a("div",R,c(`${t.totalMembers}
                                                                                    ${e.$t("members")}, ${t.onlineMembers} ${e.$t("online")}`),1)]),a("div",U,[t.lastchated?(l(),d("div",D,c(n.formatTimestamp(t.lastchated)),1)):f("",!0),t.unreadmsgCount?(l(),d("div",P,[a("span",null,c(n.showUnreadmsgCount(t.unreadmsgCount)),1)])):f("",!0)])])],8,z)]),_:2},1024))),128))]),_:1},8,["loading","finished","finished-text","onLoad"])]),_:1},8,["modelValue","onRefresh"])])])])}const J=L(S,[["render",j],["__scopeId","data-v-7bf727ff"]]);export{J as default};
