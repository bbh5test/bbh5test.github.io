import{C as H,R as E}from"./chatItem.f706c636.js";import{_ as x,o as c,d as p,b as r,m as n,t as h,r as d,k as b,T as k,w as l,f as g,F as T,e as _,q as Y,a as v,u as O,v as N,x as S,D as M,s as R,y as A,p as F,g as z}from"./index.cfe576c9.js";import{D as j}from"./dialogBase.19b44cb1.js";import{A as G}from"./avatar.659a9425.js";import"./roleTag.6185e017.js";const J={name:"ChatNotice",props:{content:{type:String,default:""}},emits:["onClose","onPinedClick"],computed:{},methods:{onClose(){this.$emit("onClose")},onPinedClick(){this.$emit("onPinedClick")}}},q={class:"chat-notice"},K={class:"icon-box"};function Q(e,t,a,C,o,s){const u=d("van-icon");return c(),p("div",q,[r("div",K,[n(u,{class:"icon",size:"24px",name:"/assets/images/horn.png"})]),r("div",{class:"text",onClick:t[0]||(t[0]=(...f)=>s.onPinedClick&&s.onPinedClick(...f))},h(a.content),1),r("div",{class:"icon-box",onClick:t[1]||(t[1]=(...f)=>s.onClose&&s.onClose(...f))},[n(u,{class:"icon close",size:"24px",name:"cross"})])])}const W=x(J,[["render",Q],["__scopeId","data-v-bf332d48"]]);const X={name:"ChatBar",props:{reply:{type:Object,default:null},showTools:{type:Boolean,default:!1}},emits:["chatBarToolClick","onFocus","update:reply","update:showTools"],data(){return{text:"",lastSendTime:0,slowSendTimer:0,sendCountdown:"",sendLoading:!1}},computed:{toolList(){let e=[{key:"redPacket",icon:"/assets/images/redPacketRed.png",text:this.$t("redPacket")}];return this.$store.state.group.nftMintUrl&&e.push({key:"mintNft",icon:"/assets/images/nftMint.png",text:this.$t("mintNft")}),this.$store.state.group.nftTradeUrl&&e.push({key:"tradeNft",icon:"/assets/images/nftTrade.png",text:this.$t("tradeNft")}),e},status(){if(this.$store.state.group.isJoined){if(this.$store.state.group.status==0&&this.$store.state.group.currentUser.status==0)return 0;if(this.$store.state.group.status==1||this.$store.state.group.currentUser.status==1)return 1;if(this.$store.state.group.status==2||this.$store.state.group.currentUser.status==2)return 2;if(this.$store.state.group.status==3||this.$store.state.group.currentUser.status==3)return 3}else return-1;return-2},bannedExpiredTime(){return this.$store.state.group.status==1?this.$dayjs.unix(this.$store.state.group.bannedExpiredTime).format("YYYY-MM-DD HH:mm:ss"):this.$dayjs.unix(this.$store.state.group.currentUser.bannedExpiredTime).format("YYYY-MM-DD HH:mm:ss")},replyItem:{get(){return this.reply},set(e){this.$emit("update:reply",e)}},inputPlaceholder(){return this.$store.state.group.tokenPrice.price?`${this.$t("messagePlaceholder")} | $${this.$store.state.group.tokenPrice.price.toFixed(1)}  ${this.$store.state.group.tokenPrice.direction=="up"?"+":""}${this.$store.state.group.tokenPrice.priceChange}%`:this.$t("messagePlaceholder")},inputPlaceholderColor(){return this.$store.state.group.tokenPrice.price?this.$store.state.group.tokenPrice.direction=="up"?"token-price-up":"token-price-down":""}},methods:{showBottomTools(){this.$emit("update:showTools",!this.showTools)},focus(){this.$emit("update:showTools",!1),this.$emit("onFocus")},async onSend(){if(!!this.text.trim()){this.sendLoading=!0;try{(await b.group.sendMsg(this.text,this.$store.state.group.groupId,this.replyItem?this.replyItem.toId:0,1)).status==1&&(this.replyItem=null,this.text="",this.$emit("update:showTools",!1),this.lastSendTime=parseInt(new Date().getTime()/1e3))}catch(e){console.log(e),k(this.$t("sendMsgError"))}finally{this.sendLoading=!1}this.status==3&&(this.sendCountdown=this.calcCountdown(30),this.slowSendTimer=setInterval(()=>{let t=parseInt(new Date().getTime()/1e3),a=this.lastSendTime+30-t;a>0?this.sendCountdown=this.calcCountdown(a):(clearInterval(this.slowSendTimer),this.slowSendTimer=0,this.sendCountdown="")},1e3))}},calcCountdown(e){let t=parseInt(e/60),a=e%60;return t>0?t+":"+(a+"").padStart(2,"0"):a+""},onJoin(){this.$store.dispatch("joinGroup",this.$store.state.group.groupId)},onChatBarToolClick(e){this.$emit("chatBarToolClick",e)}}},Z={class:"chat-bar"},ee={key:0,class:"action-btn"},te={key:0,class:"reply"},se={class:"icon-box"},oe={class:"reply-info"},ie={class:"to"},ne={class:"to-name"},re={class:"msg"},ae={class:"action"},le={class:"tools"},de={key:2,class:"action-btn"},ce={key:3,class:"action-btn"};function he(e,t,a,C,o,s){const u=d("van-button"),f=d("van-icon"),$=d("van-field"),B=d("van-grid-item"),w=d("van-grid");return c(),p("div",Z,[s.status==-1?(c(),p("div",ee,[n(u,{class:"join",type:"default",round:"",block:"",onClick:s.onJoin},{default:l(()=>[g(h(e.$t("join")),1)]),_:1},8,["onClick"])])):s.status==0||s.status==3?(c(),p(T,{key:1},[s.replyItem?(c(),p("div",te,[r("div",se,[n(f,{class:"icon",size:"24px",name:"/assets/images/reply.png"})]),r("div",oe,[r("div",ie,[g(h(e.$t("reply")),1),r("span",ne,h(s.replyItem.toName),1)]),r("div",re,h(s.replyItem.toMsg),1)]),r("div",{class:"icon-box",onClick:t[0]||(t[0]=m=>a.reply=null)},[n(f,{class:"icon close",size:"24px",name:"cross"})])])):_("",!0),r("div",ae,[n(u,{class:"btn",icon:"/assets/images/add.png",onClick:s.showBottomTools},null,8,["onClick"]),n($,{class:Y(["input",s.inputPlaceholderColor]),onFocus:s.focus,modelValue:o.text,"onUpdate:modelValue":t[1]||(t[1]=m=>o.text=m),placeholder:s.inputPlaceholder,type:"textarea",rows:"1",autosize:{maxHeight:100},maxlength:"4096"},null,8,["class","onFocus","modelValue","placeholder"]),s.status==3&&o.sendCountdown?(c(),v(u,{key:0,class:"btn",disabled:""},{default:l(()=>[g(h(o.sendCountdown),1)]),_:1})):(c(),v(u,{key:1,class:"btn",icon:"/assets/images/send.png",onClick:s.onSend,loading:o.sendLoading},null,8,["onClick","loading"]))]),O(r("div",le,[n(w,{"column-num":4,"icon-size":"54px",border:!1},{default:l(()=>[(c(!0),p(T,null,S(s.toolList,m=>(c(),v(B,{key:m.key,icon:m.icon,text:m.text,onClick:U=>e.$emit("chatBarToolClick",m.key)},null,8,["icon","text","onClick"]))),128))]),_:1})],512),[[N,a.showTools]])],64)):s.status==1?(c(),p("div",de,[n(u,{type:"default",disabled:"",round:"",block:""},{default:l(()=>[g(h(e.$t("chatBarBannedTime",{time:s.bannedExpiredTime})),1)]),_:1})])):s.status==2?(c(),p("div",ce,[n(u,{type:"default",disabled:"",round:"",block:""},{default:l(()=>[g(h(e.$store.state.group.status==2?e.$t("chatBarGroupBanned"):e.$t("chatBarBanned")),1)]),_:1})])):_("",!0)])}const ue=x(X,[["render",he],["__scopeId","data-v-bec82ce3"]]);const pe={name:"Chat",components:{ChatItem:H,ChatNotice:W,DialogBase:j,RedPacket:E,ChatBar:ue,Avatar:G},data(){return{showBottomTools:!1,listLoading:!1,listFinished:!1,banVisable:!1,banChecked:"2",banUserAddress:"",selectBanExpiredVisable:!1,banExpired:new Date,banMinTime:new Date,removeVisable:!1,removeChecked:"1",removeUserAddress:"",pinedVisible:!0,reply:null,offset:0,containerHeight:"100vh"}},computed:{group(){return this.$store.state.group},groupTitle(){return this.$f.getGroupShowName({address:this.group.groupId.split("-")[0],name:this.group.name,nickname:this.group.nickname})}},watch:{showBottomTools(e){e&&this.scrollToBottom()},"$store.state.ws.status"(e){let t;e==1?t=k.loading({message:"Loading...",forbidClick:!0}):t&&t.clear()},"$store.state.group.msgList.length":{handler(e,t){this.$refs.rightBody.scrollTop+this.$refs.rightBody.clientHeight>=this.$refs.rightBody.scrollHeight-20&&this.scrollToBottom()},deep:!0},"$store.state.group.status"(e){switch(e){case 1:k(this.$t("groupBannedUtil")+this.$dayjs.unix(this.$store.state.group.bannedExpired).format("YYYY-MM-DD HH:mm:ss"));break;case 2:k(this.$t("groupBannedPermanent"));break;case 3:k(this.$t("groupSlowToast"));break;case 4:M.alert({title:this.$t("tips"),message:this.$t("groupBlockedToast"),confirmButtonText:this.$t("confirm")}).then(()=>{this.$router.push("/chats")});break}},"$store.state.group.currentUser.status"(e){switch(e){case 5:M.alert({title:this.$t("tips"),message:this.$t("kickOutChatToast"),confirmButtonText:this.$t("confirm")}).then(()=>{this.$router.push("/chats")});break}}},methods:{onLoad(){this.offset=-999999,this.loadLastPage()},async loadLastPage(){this.$refs.rightBody.querySelectorAll(".van-cell")[0];let e=-1;this.$store.state.group.msgList.length>0&&(e=this.$store.state.group.msgList[0].id);try{let t=await b.group.getMsgList(this.$store.state.group.groupId,10,e);if(t.status==1){if(t.data.length>0)for(let a=t.data.length-1;a>=0;a--)this.$store.commit("addMsgUnshift",t.data[a]);t.data.length<10&&(this.listFinished=!0)}}catch{}finally{this.$nextTick(()=>{this.listLoading=!1,this.$nextTick(async()=>{await R(500),this.$refs&&this.$refs.rightBody&&(this.$refs.rightBody.scrollTop=1),this.offset=0})})}},onBanUser(e){this.banMinTime=new Date;let t=new Date;this.banExpired=new Date(t.setDate(t.getDate()+1)),this.banUserAddress=e,this.banVisable=!0},clickSelectBanExpired(){this.banChecked="1",this.selectBanExpiredVisable=!0},async banConfirm(){let e=0;this.banChecked=="1"&&(e=this.$dayjs(this.banExpired).unix()),(await b.groupMember.banMember(this.group.groupId,this.banUserAddress,parseInt(this.banChecked),e)).status==1&&k.success(this.$t("userBannedSuccefully")),this.banUserAddress=""},onRemoveUser(e){this.removeUserAddress=e,this.removeVisable=!0},async removeConfirm(){this.removeChecked=="2"?(await b.user.blockUser(this.removeUserAddress)).status==1&&k.success(this.$t("blockUserSuccefully")):(await b.groupMember.removeMember(this.group.groupId,this.removeUserAddress)).status==1&&k.success(this.$t("kickOutUserSuccefully")),this.removeUserAddress=""},onReply(e){this.reply={toId:e.id,toName:this.$f.getUserShowName(e),toMsg:e.content}},onPinedClick(){console.log("onPinedClick"),this.group.pinedMsgList.length==0?this.$router.push("/chatConvention"):this.$router.push("/group/"+this.$route.params.groupId+"/pined")},toChats(){this.$router.push("/chats")},toGroupDetail(){this.$router.push("/group/"+this.$route.params.groupId+"/detail")},onChatBarToolClick(e){switch(this.showBottomTools=!1,e){case"redPacket":this.$router.push("/group/"+this.$route.params.groupId+"/createRedPacket");break;case"mintNft":window.open(this.$store.state.group.nftMintUrl);break;case"tradeNft":window.open(this.$store.state.group.nftTradeUrl);break}},scrollToBottom(){this.$nextTick(()=>{this.$refs.rightBody.scrollTop=this.$refs.rightBody.scrollHeight-this.$refs.rightBody.clientHeight})},addMsgUnshift(e){this.msgList.unshift(e),this.formatMsgList()},formatMsgList(){let e="";for(let t of this.msgList)if(t.type==6)t.redPacket=JSON.parse(t.content);else if(t.type==1){let a=this.$dayjs.unix(t.sendTime),C=a.format("YYYY-MM-DD");e!=C?(t.showSendTime=a.format("YYYY-MM-DD HH:mm"),e=C):t.showSendTime=a.format("HH:mm")}},chagneContainerHeight(){console.log("chagneContainerHeight"),console.log(this.$refs.rightBody.scrollTop);const e=this.$refs.rightBody.scrollTop;this.containerHeight=document.documentElement.clientHeight+"px",console.log(this.$refs.rightBody.scrollTop),this.$nextTick(()=>{this.$refs.rightBody.scrollTop=e})}},mounted(){this.$store.state.group.scrollTop==-1?this.scrollToBottom():this.$refs.rightBody.scrollTo(0,this.$store.state.group.scrollTop),this.$nextTick(()=>{this.chagneContainerHeight(),window.addEventListener("resize",this.chagneContainerHeight)})},unmounted(){window.removeEventListener("resize",this.chagneContainerHeight)},beforeRouteLeave(e,t){this.$refs.rightBody.scrollTop+this.$refs.rightBody.clientHeight>=this.$refs.rightBody.scrollHeight-20?this.$store.commit("setScrollTop",-1):this.$store.commit("setScrollTop",this.$refs.rightBody.scrollTop)}},me=e=>(F("data-v-4416076b"),e=e(),z(),e),ge={ref:"header"},fe={class:"nav-bar"},ke={class:"info"},ve={class:"title-line"},_e={class:"title"},Ce={class:"desc"},be=me(()=>r("i",{class:"iconfont icon-set"},null,-1)),ye={class:"chat-content",ref:"rightBody"};function Te(e,t,a,C,o,s){const u=d("van-icon"),f=d("Avatar"),$=d("van-nav-bar"),B=d("ChatNotice"),w=d("ChatItem"),m=d("van-cell"),U=d("van-list"),V=d("ChatBar"),y=d("van-radio"),I=d("van-radio-group"),L=d("DialogBase"),P=d("van-datetime-picker"),D=d("van-popup");return c(),p(T,null,[r("section",{class:"chat-container",style:A({height:o.containerHeight})},[r("div",ge,[n($,{placeholder:"","safe-area-inset-top":"",onClickLeft:s.toChats,onClickRight:s.toGroupDetail},{left:l(()=>[n(u,{name:"wap-nav"})]),title:l(()=>[r("div",fe,[s.group.groupId?(c(),v(f,{key:0,class:"avatar",image:s.group.image?s.group.image:e.$f.formatIcon(e.$route.params.groupId),address:s.group.address},null,8,["image","address"])):_("",!0),r("div",ke,[r("div",ve,[r("div",_e,h(s.groupTitle),1),e.$store.state.group.providers&&e.$store.state.group.providers.length>0?(c(),v(u,{key:0,size:"0.4rem",name:"/assets/images/certification.png"})):_("",!0)]),r("div",Ce,h(`${s.group.totalMembers} ${e.$t("members")}`),1)])])]),right:l(()=>[be]),_:1},8,["onClickLeft","onClickRight"]),o.pinedVisible?(c(),v(B,{key:0,onOnClose:t[0]||(t[0]=i=>o.pinedVisible=!1),content:s.group.pinedMsgList.length>0?s.group.pinedMsgList[s.group.pinedMsgList.length-1].content:e.$t("chatConventionBodyShort"),onOnPinedClick:s.onPinedClick},null,8,["content","onOnPinedClick"])):_("",!0)],512),r("div",ye,[n(U,{loading:o.listLoading,"onUpdate:loading":t[1]||(t[1]=i=>o.listLoading=i),class:"chat-list",direction:"up",onLoad:s.onLoad,"immediate-check":!1,finished:o.listFinished,"loading-text":e.$t("loading"),offset:o.offset},{default:l(()=>[(c(!0),p(T,null,S(s.group.msgList,i=>(c(),v(m,{key:i.id},{default:l(()=>[n(w,{source:i,onOnReply:$e=>s.onReply(i),onOnRemoveUser:s.onRemoveUser,onOnBanUser:s.onBanUser},null,8,["source","onOnReply","onOnRemoveUser","onOnBanUser"])]),_:2},1024))),128))]),_:1},8,["loading","onLoad","finished","loading-text","offset"])],512),n(V,{reply:o.reply,"onUpdate:reply":t[2]||(t[2]=i=>o.reply=i),showTools:o.showBottomTools,"onUpdate:showTools":t[3]||(t[3]=i=>o.showBottomTools=i),onChatBarToolClick:s.onChatBarToolClick,onOnFocus:s.scrollToBottom},null,8,["reply","showTools","onChatBarToolClick","onOnFocus"])],4),n(L,{visible:o.removeVisable,"onUpdate:visible":t[5]||(t[5]=i=>o.removeVisable=i),title:e.$t("kickedOutOfTheChat"),showConfirmButton:!0,showCancelButton:!0,onOnConfirm:s.removeConfirm},{default:l(()=>[n(I,{modelValue:o.removeChecked,"onUpdate:modelValue":t[4]||(t[4]=i=>o.removeChecked=i)},{default:l(()=>[n(y,{name:"1"},{default:l(()=>[g(h(e.$t("kickOutTheCurrentChat")),1)]),_:1}),e.$store.state.group.currentUser.userRole==2||e.$store.state.group.currentUser.userRole==3?(c(),v(y,{key:0,name:"2"},{default:l(()=>[g(h(e.$t("blockThisUser")),1)]),_:1})):_("",!0)]),_:1},8,["modelValue"])]),_:1},8,["visible","title","onOnConfirm"]),n(L,{visible:o.banVisable,"onUpdate:visible":t[12]||(t[12]=i=>o.banVisable=i),title:e.$t("banTimeLimitSetting"),showConfirmButton:!0,showCancelButton:!0,onOnConfirm:s.banConfirm},{default:l(()=>[n(I,{modelValue:o.banChecked,"onUpdate:modelValue":t[11]||(t[11]=i=>o.banChecked=i)},{default:l(()=>[n(y,{name:"2"},{default:l(()=>[g(h(e.$t("permanentBan")),1)]),_:1}),n(y,{name:"1"},{default:l(()=>[g(h(e.$t("banUntil")),1)]),_:1}),r("div",{class:"ban-date-time",onClick:t[6]||(t[6]=(...i)=>s.clickSelectBanExpired&&s.clickSelectBanExpired(...i))},h(e.$dayjs(o.banExpired).format("YYYY-MM-DD HH:mm:ss")),1),n(D,{show:o.selectBanExpiredVisable,"onUpdate:show":t[10]||(t[10]=i=>o.selectBanExpiredVisable=i),teleport:"#app",position:"bottom"},{default:l(()=>[n(P,{modelValue:o.banExpired,"onUpdate:modelValue":t[7]||(t[7]=i=>o.banExpired=i),type:"datetime","min-date":o.banMinTime,onCancel:t[8]||(t[8]=i=>o.selectBanExpiredVisable=!1),onConfirm:t[9]||(t[9]=i=>o.selectBanExpiredVisable=!1)},null,8,["modelValue","min-date"])]),_:1},8,["show"])]),_:1},8,["modelValue"])]),_:1},8,["visible","title","onOnConfirm"])],64)}const Le=x(pe,[["render",Te],["__scopeId","data-v-4416076b"]]);export{Le as default};
