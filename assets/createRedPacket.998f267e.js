import{D as E}from"./dialogBase.b3ddbbd3.js";import{_ as H,c as F,o as c,a as b,w as i,b as r,d as f,t as u,e as $,f as w,r as h,p as R,g as U,ag as N,k as p,s as D,T as _,ah as W,i as q,m as o,F as P,x as M}from"./index.0a30982c.js";const j={name:"ChainTrade",components:{DialogBase:E},props:{tradeVisable:{type:Boolean,default:!1},status:{type:Number,default:0},tradeHash:{type:String,default:""}},emits:["update:tradeVisable","close"],methods:{copy:F,close(){this.$emit("close")}}},x=e=>(R("data-v-c3eca6bd"),e=e(),U(),e),G={class:"status-content"},J={class:"status-text"},K={key:0},O={key:1},Q={key:2},X={key:3},Y={key:4},Z={class:"status-icon"},ee={class:"trade-hash"},te={key:0},se=x(()=>r("use",{"xlink:href":"#icon-copy"},null,-1)),ae=[se],ne={key:1},oe=x(()=>r("span",null,"N/A",-1)),ie=[oe];function le(e,t,n,T,s,m){const g=h("van-loading"),l=h("van-icon"),k=h("DialogBase");return c(),b(k,{class:"trade-box",visible:n.tradeVisable,"onUpdate:visible":t[2]||(t[2]=d=>n.tradeVisable=d),autoClose:!1,closeable:n.status==2,clickOverlayIsClose:!1,title:e.$t("transactionDetails"),showConfirmButton:!1,showCancelButton:!1,onClose:m.close},{default:i(()=>[r("div",G,[r("div",J,[n.status==0?(c(),f("span",K,u(e.$t("sendingTransactionToBlockchain")),1)):n.status==1?(c(),f("span",O,u(e.$t("waitingForServiceSyncronizing")),1)):n.status==2?(c(),f("span",Q,u(e.$t("transactionSuccess")),1)):n.status==-1?(c(),f("span",X,u(e.$t("sendTransactionToBlockchainFailed")),1)):n.status==-2?(c(),f("span",Y,u(e.$t("servicesyncronizingTimeout")),1)):$("",!0)]),r("div",Z,[n.status==0||n.status==1?(c(),b(g,{key:0,type:"spinner",size:"48px"})):$("",!0),n.status==2?(c(),b(l,{key:1,color:"#07c160",size:"40px",name:"checked"})):$("",!0),n.status==-1||n.status==-2?(c(),b(l,{key:2,color:"#FA5151",size:"40px",name:"clear"})):$("",!0)]),r("div",ee,[w(u(e.$t("txHash")+":")+" ",1),n.status==1||n.status==2||n.status==-2?(c(),f("text",te,[r("span",{onClick:t[0]||(t[0]=(...d)=>e.jumpToTxDetail&&e.jumpToTxDetail(...d))},u(e.$f.formatAddress(n.tradeHash,6)),1),(c(),f("svg",{class:"icon-svg icon-renzheng","aria-hidden":"true",onClick:t[1]||(t[1]=d=>m.copy(n.tradeHash))},ae))])):n.status==0||n.status==-1?(c(),f("text",ne,ie)):$("",!0)])])]),_:1},8,["visible","closeable","title","onClose"])}const re=H(j,[["render",le],["__scopeId","data-v-c3eca6bd"]]),de="/assets/svg/redPacket/luck.svg",ce="/assets/svg/redPacket/redPacket.svg";const ue={name:"CreateRedPacket",components:{ChainTrade:re},computed:{totalAmount(){if(this.type=="0")return this.amount?this.amount:0;if(this.type=="1")if(this.amount&&this.count){const e=Number(this.amount),t=Number(this.count);return N(e).multipliedBy(t).toNumber()}else return 0}},data(){return{sendLoading:!1,approveTradeVisable:!1,approveTradeStatus:0,approveTradeHash:"",sendTradeVisable:!1,sendTradeStatus:0,sendTradeHash:"",type:"0",result:"",showTokenSelect:!1,count:"",chain:"",amount:"",symbol:"",showDeadlinePicker:!1,deadlineList:[{text:this.$t("deadlineList.300"),value:300,showText:this.$t("deadlineList.300Show")},{text:this.$t("deadlineList.600"),value:600,showText:this.$t("deadlineList.600Show")},{text:this.$t("deadlineList.1800"),value:1800,showText:this.$t("deadlineList.1800Show")},{text:this.$t("deadlineList.3600"),value:3600,showText:this.$t("deadlineList.3600Show")},{text:this.$t("deadlineList.43200"),value:43200,showText:this.$t("deadlineList.43200Show")},{text:this.$t("deadlineList.86400"),value:86400,showText:this.$t("deadlineList.86400Show")}],deadline:{text:this.$t("deadlineList.300"),value:300,showText:this.$t("deadlineList.300Show")},remark:"",tokenAddress:"",contractAddress:"0x466b0dBB81d2b2Fdd0565C9e7E652c4B10D6A4B8",tokenList:[],balance:-1,needApprove:!1}},methods:{async test111(){await p.contract.approveTest(this.contractAddress,this.tokenAddress)},sendTradeClose(){this.$router.push({name:"Chat",params:{groupId:this.$route.params.groupId}})},async approve(){if(!!await this.checkNetAndToken()){this.approveTradeStatus=0,this.approveTradeVisable=!0,this.approveTradeHash="";try{const t=await p.contract.approve(this.contractAddress,this.tokenAddress);console.log("approve",t),t?(this.approveTradeHash=t.hash,this.approveTradeStatus=1,await t.wait(),this.approveTradeStatus=2,this.needApprove=!1):(this.approveTradeStatus=-1,await D(1e3),this.approveTradeVisable=!1)}catch{this.approveTradeStatus=-1,await D(1e3),this.approveTradeVisable=!1}}},async selectToken(e){if(!await this.checkNetAndToken())return;this.showTokenSelect=!1,this.tokenAddress=e.address,this.symbol=e.symbol,this.chain=e.chain,this.balance=-1;let n=_.loading();await this.getBalance(),console.log("allowance");const T=await this.allowance();this.needApprove=!T,n.clear()},async getTokenList(){this.tokenList=[];const e=this.$store.state.user.userAddress,t=this.$store.state.chainId;if(t==4){this.tokenList=[{address:"0xaf22f677373352761b7f8faff4c9ad7bd8b6be42",tokenId:"0xaf22f677373352761b7f8faff4c9ad7bd8b6be42-eth",chain:"eth",symbol:"JF",decimals:18,image:"/assets/images/groupAvatar.png",amount:0}];return}const n=_.loading();let s=(await p.user.getUserTokenList(e,W[t])).data.filter(l=>new RegExp("^0x.*$","gi").test(l.id)).map(l=>({address:l.id.toLowerCase(),tokenId:`${l.id}-${l.chain}`.toLowerCase(),chain:l.chain.toLowerCase(),symbol:l.symbol,decimals:l.decimals,image:l.logo_url,amount:l.amount})),m=s.map(l=>l.tokenId),g=await p.redPacket.tokenlistcheck(m);this.tokenList=s.filter(l=>g.data[l.tokenId].riskScore<60),n.clear()},onDeadlineConfirm(e){this.deadline=e,this.showDeadlinePicker=!1},async getBalance(){try{this.balance=await p.contract.getBalance(this.tokenAddress,this.$store.state.user.userAddress)}catch(e){console.log(e),this.$store.state.wallet=="WalletConnect"&&await this.$store.state.provider.disconnect(),this.$store.commit("logout"),this.$store.dispatch("checkLogin")}},async checkNetAndToken(){let e=await p.contract.checkNetAndToken();return console.log(e),e=="netErr"?(this.sendLoading=!1,await q(),!1):e=="tokenErr"?(this.sendLoading=!1,this.$toast({duration:3e3,message:this.$t("switchAccountWarn")}),!1):e==!1?(this.$store.state.wallet=="WalletConnect"&&await this.$store.state.provider.disconnect(),this.$store.commit("logout"),this.$store.commit("setUserInfo",{}),this.$store.commit("setTradeVisable",!1),this.$store.dispatch("checkLogin"),!1):!0},async sendRedPacket(){this.sendLoading=!0;const e=Number(this.amount),t=Number(this.count);let n=0;if(this.type=="0"?n=N(e).toNumber():n=N(e).multipliedBy(t).toNumber(),!this.tokenAddress){_(this.$t("selectTokenFirst")),this.sendLoading=!1;return}if(e<=0){_(this.$t("amountWarn")),this.sendLoading=!1;return}if(t<1){_(this.$t("countWarn")),this.sendLoading=!1;return}if(t>this.$store.state.group.totalMembers){_(this.$t("countGroupWarn")),this.sendLoading=!1;return}if(n>this.balance){_(this.$t("blanceSlow")),this.sendLoading=!1;return}let T=this.deadline.value;if(!await this.checkNetAndToken())return;if(!await this.allowance()){this.needApprove=!0,_("need approve"),this.sendLoading=!1;return}console.log(n),this.sendTradeStatus=0,this.sendTradeVisable=!0;try{console.log("\u53D1\u9001\u7EA2\u5305");const g={_owner:this.$store.state.user.userAddress,token:this.tokenAddress,amount:n,unlockDate:T,quantity:t,kind:this.type};let l=await p.contract.lock(this.contractAddress,g);console.dir(l);let k=await l.wait();this.sendTradeStatus=1,this.sendTradeHash=k.transactionHash,this.sendTradeVisable=!0,console.dir(k);let d=k==null?void 0:k.events,A={};for(let y=d.length-1;y>=0;y--){let V=d[y].topics.some(S=>S==="0x694af1cc8727cdd0afbdd53d9b87b69248bd490224e9dd090e788546506e076f");if(d[y].address==this.contractAddress&&V){A=d[y];break}}let C=A.data.slice(-128,-64);const v=await p.contract.getDecimal(this.tokenAddress),B=await p.contract.getAmount(this.tokenAddress,"0x"+C),L={groupId:this.$route.params.groupId,contractAddress:this.tokenAddress,contractChain:this.chain,contractDecimal:v,count:t,endTime:T,redPacketId:A.topics[1],remark:this.remark,singleAmount:e,symbol:this.symbol,totalAmount:n,tx:k.transactionHash,type:Number(this.type)};await p.redPacket.send(L),this.sendTradeStatus=2,this.sendLoading=!1}catch(g){console.log(g),this.sendTradeStatus=-1,await D(1e3),this.sendTradeVisable=!1,this.sendLoading=!1}},async auth(){let e=await this.allowance();if(!e){const t=await p.contract.approve(this.contractAddress,this.tokenAddress);console.log("approve",t),t&&(e=await this.allowance())}return e},async allowance(){return await p.contract.allowanceSend({spender:this.contractAddress,tokenAddress:this.tokenAddress,account:this.$store.state.user.userAddress})}},mounted(){this.getTokenList()}},z=e=>(R("data-v-0a32ea24"),e=e(),U(),e),he={class:"myChats-container"},me={class:"body"},pe={class:"token"},ke={class:"token-symbol"},fe=w("\xA0\xA0 "),ge=z(()=>r("img",{class:"left-icon",src:de,alt:"",srcset:""},null,-1)),ve={class:"desc-text margin-bottom"},be=z(()=>r("img",{class:"left-icon",src:ce,alt:"",srcset:""},null,-1)),_e={class:"desc-text margin-bottom"},we={class:"total"},Te={class:"amount"},ye={style:{margin:"16px"}},Ae=w("Approve"),$e={class:"bottom"};function Ve(e,t,n,T,s,m){const g=h("van-nav-bar"),l=h("van-radio"),k=h("van-radio-group"),d=h("van-field"),A=h("van-image"),C=h("van-cell"),v=h("van-cell-group"),B=h("van-action-sheet"),L=h("van-picker"),y=h("van-popup"),V=h("van-button"),S=h("van-form"),I=h("ChainTrade");return c(),f(P,null,[r("section",he,[o(g,{fixed:"","left-arrow":"","safe-area-inset-top":"","z-index":"2",title:e.$t("createRedPacket"),onClickLeft:t[0]||(t[0]=a=>e.$router.push({name:"Chat",params:{groupId:e.$route.params.groupId}}))},null,8,["title"]),r("div",me,[o(S,null,{default:i(()=>[o(d,{name:"type",class:"red-packet-type"},{input:i(()=>[o(k,{modelValue:s.type,"onUpdate:modelValue":t[1]||(t[1]=a=>s.type=a),direction:"horizontal"},{default:i(()=>[o(l,{"checked-color":"#ED4A4A",name:"0"},{default:i(()=>[w(u(e.$t("randomAmount")),1)]),_:1}),o(l,{"checked-color":"#ED4A4A",name:"1"},{default:i(()=>[w(u(e.$t("identicalAmount")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1}),o(v,{inset:"",class:"margin-bottom"},{default:i(()=>[o(d,{modelValue:s.symbol,"onUpdate:modelValue":t[2]||(t[2]=a=>s.symbol=a),"is-link":"",readonly:"",name:"picker",label:e.$t("token"),onClick:t[3]||(t[3]=a=>s.showTokenSelect=!0),"input-align":"right"},null,8,["modelValue","label"]),o(B,{show:s.showTokenSelect,"onUpdate:show":t[4]||(t[4]=a=>s.showTokenSelect=a),title:e.$t("settingToken")},{default:i(()=>[r("div",pe,[o(v,{inset:""},{default:i(()=>[(c(!0),f(P,null,M(s.tokenList,a=>(c(),b(C,{key:a.address,clickable:"",onClick:Ce=>m.selectToken(a)},{title:i(()=>[r("div",ke,[o(A,{class:"symbol-icon",round:"",width:"0.4rem",height:"0.4rem","icon-size":"0.4rem","lazy-load":"","show-loading":"",src:a.image,"error-icon":"/assets/images/groupAvatar.png"},null,8,["src"]),r("span",null,u(a.symbol),1)])]),value:i(()=>[r("div",null,[r("span",null,u(e.$t("balance"))+": "+u(e.$f.formatNumUnit(a.amount)),1),fe])]),_:2},1032,["onClick"]))),128))]),_:1})])]),_:1},8,["show","title"])]),_:1}),s.type=="0"?(c(),b(v,{key:0,inset:""},{default:i(()=>[o(d,{label:e.$t("totalAmount2"),class:"ipt-num"},{"left-icon":i(()=>[ge]),input:i(()=>[o(d,{"input-align":"right",modelValue:s.amount,"onUpdate:modelValue":t[5]||(t[5]=a=>s.amount=a),type:"number",maxlength:"10","error-message-align":"right",rules:[{required:!0,message:e.$t("enterAmount")}]},null,8,["modelValue","rules"])]),_:1},8,["label"])]),_:1})):(c(),b(v,{key:1,inset:""},{default:i(()=>[o(d,{label:e.$t("singleAmount"),class:"ipt-num"},{input:i(()=>[o(d,{"input-align":"right",modelValue:s.amount,"onUpdate:modelValue":t[6]||(t[6]=a=>s.amount=a),type:"number",maxlength:"10","error-message-align":"right",rules:[{required:!0,message:e.$t("enterAmount")}]},null,8,["modelValue","rules"])]),_:1},8,["label"])]),_:1})),r("div",ve,u(`${e.$t("availableBalance")} ${s.balance>0?s.balance:"--"} ${s.symbol} `),1),o(v,{inset:""},{default:i(()=>[o(d,{label:e.$t("quantity"),class:"ipt-num"},{"left-icon":i(()=>[be]),input:i(()=>[o(d,{"input-align":"right",modelValue:s.count,"onUpdate:modelValue":t[7]||(t[7]=a=>s.count=a),type:"digit",maxlength:"10","error-message-align":"right",rules:[{required:!0,message:e.$t("enterNumber")}]},null,8,["modelValue","rules"])]),_:1},8,["label"])]),_:1}),r("div",_e,u(`${e.$t("totalMembers1")} ${e.$store.state.group.totalMembers} ${e.$t("totalMembers2")}`),1),o(v,{inset:"",class:"margin-bottom"},{default:i(()=>[o(d,{modelValue:s.deadline.text,"onUpdate:modelValue":t[8]||(t[8]=a=>s.deadline.text=a),"is-link":"",readonly:"",name:"picker",label:e.$t("deadline"),onClick:t[9]||(t[9]=a=>s.showDeadlinePicker=!0),"input-align":"right"},null,8,["modelValue","label"]),o(y,{show:s.showDeadlinePicker,"onUpdate:show":t[11]||(t[11]=a=>s.showDeadlinePicker=a),position:"bottom"},{default:i(()=>[o(L,{columns:s.deadlineList,onCancel:t[10]||(t[10]=a=>s.showDeadlinePicker=!1),onConfirm:m.onDeadlineConfirm,title:e.$t("settingDeadline"),"confirm-button-text":e.$t("confirm"),"cancel-button-text":e.$t("cancel")},null,8,["columns","onConfirm","title","confirm-button-text","cancel-button-text"])]),_:1},8,["show"])]),_:1}),o(v,{inset:""},{default:i(()=>[o(d,{modelValue:s.remark,"onUpdate:modelValue":t[12]||(t[12]=a=>s.remark=a),rows:"2",autosize:"",placeholder:e.$t("bestWishes"),type:"textarea",maxlength:"20","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1}),r("div",we,[w(u(e.$t("totalAmount")),1),r("span",Te,u(m.totalAmount?m.totalAmount:"--"),1),w(u(s.symbol),1)]),r("div",ye,[s.needApprove?(c(),b(V,{key:0,round:"",block:"",type:"default","native-type":"submit",onClick:m.approve},{default:i(()=>[Ae]),_:1},8,["onClick"])):(c(),b(V,{key:1,round:"",block:"",type:"default","native-type":"submit",loading:s.sendLoading,onClick:m.sendRedPacket},{default:i(()=>[w(u(e.$t("send")),1)]),_:1},8,["loading","onClick"]))])]),_:1}),r("div",$e,u(`${e.$t("createRedPacketTips1")} ${s.deadline.showText} ${e.$t("createRedPacketTips2")}`),1)])]),r("div",{onClick:t[13]||(t[13]=(...a)=>m.test111&&m.test111(...a))},"111111"),o(I,{tradeVisable:s.approveTradeVisable,"onUpdate:tradeVisable":t[14]||(t[14]=a=>s.approveTradeVisable=a),status:s.approveTradeStatus,tradeHash:s.approveTradeHash},null,8,["tradeVisable","status","tradeHash"]),o(I,{tradeVisable:s.sendTradeVisable,"onUpdate:tradeVisable":t[15]||(t[15]=a=>s.sendTradeVisable=a),status:s.sendTradeStatus,tradeHash:s.sendTradeHash,onClose:m.sendTradeClose},null,8,["tradeVisable","status","tradeHash","onClose"])],64)}const Ne=H(ue,[["render",Ve],["__scopeId","data-v-0a32ea24"]]);export{Ne as default};
