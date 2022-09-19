import{A as T}from"./avatar.20d1347c.js";import{_ as I,k as b,d as m,b as t,m as u,a as h,e as _,t as n,w as p,f as L,r as d,o as l,F as R,x as C,p as w,g as N}from"./index.e3b8e14c.js";import{R as $}from"./roleTag.718897e6.js";const P={name:"RedPacketRecord",components:{Avatar:T,RoleTag:$},data(){return{type:0,status:2,count:0,receiveList:[],symbol:"",totalAmount:0,creatorNickname:"",creatorImage:"",creatorUserAddress:"",remark:"",luckyUserAddress:"",sendTime:0,contractChain:"",contractAddress:"",finishTime:0}},methods:{formatTimestamp(e){let o=this.$dayjs.unix(e);return o.isToday()?o.format("HH:mm"):o.format("YYYY-MM-DD HH:mm")},async getDetail(e,o){let a=await b.redPacket.detail(e,o);if(console.dir(a),a.status==1){this.status=a.data.status,this.count=a.data.redpacket.count,this.creatorNickname=a.data.creatorNickname,this.creatorImage=a.data.creatorImage,this.creatorUserAddress=a.data.redpacket.creatorAddress,this.symbol=a.data.redpacket.symbol,this.totalAmount=a.data.redpacket.totalAmount,this.remark=a.data.redpacket.remark,this.sendTime=a.data.redpacket.sendTime,this.contractAddress=a.data.redpacket.contractAddress,this.contractChain=a.data.redpacket.contractChain,this.receiveList=a.data.receiveList;for(let i of this.receiveList)i.amount=Number(i.amount);if(this.status==1||this.status==5){let i=0,s=0;for(let c of this.receiveList)c.amount>i&&(i=c.amount,this.luckyUserAddress=c.userAddress),c.time>s&&(s=c.time);s>0&&(this.finishTime=s-this.sendTime)}}}},mounted(){const e=this.$route.params.groupId,o=this.$route.params.redPacketId;this.getDetail(e,o)}},U=e=>(w("data-v-c64dd84e"),e=e(),N(),e),x={class:"container"},D={class:"content"},S={class:"red-packet"},B=U(()=>t("div",{class:"red"},null,-1)),H={class:"icon"},V={class:"desc"},Y={class:"amount"},z={class:"remark"},F={class:"bottom"},M={class:"explain"},j=L("\xA0"),q={key:0},E={class:"list-item"},O={class:"info"},Q={class:"user"},W={class:"username"},G={class:"time"},J={class:"desc"},K={key:0,class:"lucky"};function X(e,o,a,i,s,c){const v=d("van-nav-bar"),k=d("van-image"),f=d("Avatar"),g=d("RoleTag"),A=d("van-cell"),y=d("van-list");return l(),m("section",x,[t("div",null,[u(v,{fixed:"","left-arrow":"","safe-area-inset-top":"","z-index":"2",title:e.$t("seeLuck"),onClickLeft:o[0]||(o[0]=r=>e.$router.push({name:"Chat",params:{groupId:e.$route.params.groupId}}))},null,8,["title"])]),t("div",D,[t("div",S,[B,t("div",H,[s.contractAddress?(l(),h(k,{key:0,class:"img","lazy-load":"","show-loading":"",src:`https://ave.s3.ap-east-1.amazonaws.com/token_icon/${s.contractChain.toLowerCase()}/${s.contractAddress.toLowerCase()}.png`,"error-icon":"/assets/images/groupAvatar.png"},null,8,["src"])):_("",!0)]),t("div",V,[t("div",Y,n(`${s.totalAmount} ${s.symbol}`),1),t("div",z,n(s.remark?s.remark:e.$t("bestWishes")),1)])]),t("div",F,[t("div",M,[t("span",null,n(e.$t("redPackQty",{qty:s.count})),1),j,s.finishTime?(l(),m("span",q,n(e.$t("redPackOverTime",{s:s.finishTime})),1)):_("",!0)]),u(y,{class:"list","finished-text":e.$t("noMore")},{default:p(()=>[(l(!0),m(R,null,C(s.receiveList,r=>(l(),h(A,null,{default:p(()=>[t("div",E,[u(f,{class:"avatar",image:r.userImage,address:r.userAddress},null,8,["image","address"]),t("div",O,[t("div",Q,[u(g,{class:"role",role:r.groupRole,userRole:r.userRole},null,8,["role","userRole"]),t("div",W,n(e.$f.getUserShowName({userAddress:r.userAddress,nickname:r.userNickname})),1)]),t("div",G,n(c.formatTimestamp(r.time)),1)]),t("div",J,[t("div",null,n(`${r.amount.toFixed(4)} ${s.symbol}`),1),s.luckyUserAddress==r.userAddress?(l(),m("div",K,n(e.$t("bestLuck")),1)):_("",!0)])])]),_:2},1024))),256))]),_:1},8,["finished-text"])])])])}const te=I(P,[["render",X],["__scopeId","data-v-c64dd84e"]]);export{te as default};
