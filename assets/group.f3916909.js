import{_ as b,c as L,r as d,o,a as v,w as f,b as a,d as l,t as r,e as u,f as y,p as w,g as B,h as P,i as N,j as x,B as D,k,s as M,l as F,m as h,F as T}from"./index.2fbacc60.js";import{D as C}from"./dialogBase.b4c3c5f9.js";const H={components:{DialogBase:C},props:{tradeStatus:{type:Number,default:void 0},tradeHash:{type:String,default:"N/A"}},emits:["closeBlablaPayStatus"],watch:{tradeStatus(){typeof this.tradeStatus=="number"&&(console.log(this.tradeStatusVisible),this.tradeStatusVisible=!0)},tradeStatusVisible(t){t||this.$emit("closeBlablaPayStatus")}},data(){return{tradeStatusVisible:!1}},methods:{copy:L,jumpToTxDetail(){window.open("https://rinkeby.etherscan.io/tx/"+this.tradeHash,"_blank")},jumpToPaymentList(){this.tradeStatusVisible=!1,this.$router.push({name:"PaymentList"})}}},A=t=>(w("data-v-e460932f"),t=t(),B(),t),U={class:"status-content"},z={class:"status-text"},j={key:0},W={key:1},E={key:2},O={key:3},R={class:"status-icon"},G={class:"trade-hash"},q={key:0},J=A(()=>a("use",{"xlink:href":"#icon-copy"},null,-1)),K=[J],Q={key:1},X=A(()=>a("span",null,"N/A",-1)),Y=[X];function Z(t,e,s,p,n,i){const _=d("van-loading"),m=d("van-icon"),g=d("DialogBase");return o(),v(g,{class:"trade-box",autoClose:!1,clickOverlayIsClose:!1,visible:n.tradeStatusVisible,"onUpdate:visible":e[3]||(e[3]=c=>n.tradeStatusVisible=c),title:"\u4EA4\u6613\u8BE6\u60C5",showConfirmButton:!1,showCancelButton:!1},{default:f(()=>[a("div",U,[a("div",z,[s.tradeStatus==0||s.tradeStatus==3?(o(),l("span",j,r(t.$t("sendingTransactionToBlockchain")),1)):s.tradeStatus==1?(o(),l("span",W,r(t.$t("waitingForServiceSyncronizing")),1)):s.tradeStatus==-1?(o(),l("span",E,r(t.$t("sendTransactionToBlockchainFailed")),1)):s.tradeStatus==-2?(o(),l("span",O,r(t.$t("servicesyncronizingTimeout")),1)):u("",!0)]),a("div",R,[s.tradeStatus==0||s.tradeStatus==1||s.tradeStatus==3?(o(),v(_,{key:0,type:"spinner",size:"48px"})):u("",!0),s.tradeStatus==2||s.tradeStatus==4?(o(),v(m,{key:1,color:"#07c160",size:"40px",name:"checked"})):u("",!0),s.tradeStatus==-1||s.tradeStatus==-2?(o(),v(m,{key:2,color:"#FA5151",size:"40px",name:"clear"})):u("",!0)]),a("div",G,[y(r(t.$t("txHash")+":")+" ",1),s.tradeStatus==1||s.tradeStatus==2||s.tradeStatus==-2||s.tradeStatus==3||s.tradeStatus==4?(o(),l("text",q,[a("span",{onClick:e[0]||(e[0]=(...c)=>i.jumpToTxDetail&&i.jumpToTxDetail(...c))},r(t.$f.formatAddress(s.tradeHash,6)),1),(o(),l("svg",{class:"icon-svg icon-renzheng","aria-hidden":"true",onClick:e[1]||(e[1]=c=>i.copy(s.tradeHash))},K))])):s.tradeStatus==0||s.tradeStatus==-1?(o(),l("text",Q,Y)):u("",!0)]),s.tradeStatus==2||s.tradeStatus==-2?(o(),l("div",{key:0,class:"check-trade-list",onClick:e[2]||(e[2]=(...c)=>i.jumpToPaymentList&&i.jumpToPaymentList(...c))},r(t.$t("goToSeePaymentRecords")),1)):u("",!0)])]),_:1},8,["visible"])}const tt=b(H,[["render",Z],["__scopeId","data-v-e460932f"]]);const et={name:"BlablaPay",inject:["reload"],components:{DialogBase:C,BlablaPayStatus:tt},data(){return{contractAddress:"0x1BEcc0D044267540e81C1d203Eb7875ED9ff120F",jfTokenAddress:"0xaf22F677373352761B7F8FAfF4c9aD7bd8B6Be42",tradeHash:"N/A",tradeStatus:void 0,payWay:0,unUsedNum:0,tokenId:"0",isShowApprove:!1,isShowButton:!1,isConfirmLoading:!1,isApproveLoading:!1}},watch:{"$store.state.group.tradeVisable"(t){t&&this.init()}},computed:{tradeVisable:{get(){return this.$store.state.group.tradeVisable},set(t){this.$store.commit("setTradeVisable",t)}},paymentType(){return this.$store.state.group.paymentType}},mounted(){},methods:{async init(){if(this.tradeHash="N/A",this.tradeStatus=void 0,this.payWay=0,this.unUsedNum=0,this.tokenId="0",this.isShowApprove=!1,this.isShowButton=!1,this.isConfirmLoading=!1,this.isApproveLoading=!1,!await this.$store.dispatch("getPaymentListAction"))this.payWay=2;else{let e=this.$store.state.user.paymentList;if(e.length==0)this.payWay=2;else{let s=0;for(let p of e)this.paymentType==0?p.status==0&&p.paymentType==0&&(s=s+1):this.paymentType==1&&p.status==0&&p.paymentType==1&&(s=s+1);s>0?(this.payWay=1,this.unUsedNum=s):this.payWay=2}}this.isShowButton=!0},async changeTokenId(){this.tokenId==0&&(this.isShowButton=!0,this.isShowApprove=!1)},async payConfirm(){if(this.isConfirmLoading=!0,this.payWay==1){let t=await this.trade();if(t=="fail")this.$toast.fail("\u652F\u4ED8\u5931\u8D25\uFF0C\u8BF7\u91CD\u65B0\u652F\u4ED8");else if(t=="success"){let e;this.paymentType==0?e="\u8D2D\u4E70\u7BA1\u7406\u5458\u6210\u529F":this.paymentType==1&&(e="\u8FDD\u89C4\u5904\u7F5A\u652F\u4ED8\u6210\u529F"),this.$toast.success(e),this.$store.commit("setTradeVisable",!1)}}else{console.log("\u6821\u9A8C\u7F51\u7EDC\u548C\u8D26\u6237");let t=await P();if(t=="netErr"){await N(),this.isConfirmLoading=!1;return}else if(t=="tokenErr"){this.$toast({duration:3e3,message:"\u8BF7\u5C06\u94B1\u5305\u8D26\u6237\u5207\u6362\u5230\u767B\u5F55\u7528\u6237"}),this.isConfirmLoading=!1;return}else if(t==!1){console.log("\u6CA1\u6709\u767B\u5F55\u6216\u8005\u83B7\u53D6\u8D26\u6237\u51FA\u9519\uFF0C\u91CD\u65B0\u767B\u5F55"),this.$store.commit("logout"),this.$store.commit("setUserInfo",{}),this.$store.commit("setTradeVisable",!1),this.$store.dispatch("checkLogin"),this.isConfirmLoading=!1;return}if(this.tokenId==1&&!await x({spender:this.contractAddress,tokenAddress:this.jfTokenAddress,account:this.$store.state.user.userAddress})){this.isShowButton=!1,this.isShowApprove=!0,this.$toast("\u8BF7\u5148\u6388\u6743"),this.isConfirmLoading=!1;return}this.$store.commit("setTradeVisable",!1),this.tradeStatus=0,this.isShowButton=!1;try{let e=await D(this.contractAddress,this.paymentType,parseInt(this.tokenId));e&&(console.log(e),this.tradeHash=e.hash,this.tradeStatus=1,await e.wait(),await this.timeCheckTrade())}catch(e){console.log(e),this.tradeStatus=-1}}this.isConfirmLoading=!1},async trade(){try{if(this.paymentType==0){if((await k.groupMember.buyManager(this.$store.state.group.groupId)).status==1)return await this.$store.dispatch("getGroupDetail",this.$route.params.groupId),this.$store.commit("setCurrentUserRole",1),"success"}else if(this.paymentType==1&&(await k.groupViolation.dealWithViolation(this.$store.state.group.groupId)).status==1)return this.$store.commit("setGroupStatus",0),this.$router.push({name:"GroupDetail",params:{groupId:this.$route.params.groupId}}),"success"}catch(t){console.log(t)}return"fail"},async timeCheckTrade(){console.log("timeCheckTrade");let t=!1,e=setTimeout(async function(){t=!0},6e4);for(;;){try{if(await this.trade()=="success"){this.tradeStatus=2,clearTimeout(e);break}}catch(s){console.log(s)}if(t){this.tradeStatus=-2;break}await M(3e3)}},async approve(){this.isApproveLoading=!0,this.tradeStatus=0;try{let t=await F(this.contractAddress,this.jfTokenAddress);t&&(this.tradeHash=t.hash,this.tradeStatus=3,await t.wait(),this.isShowApprove=!1,this.isShowButton=!0,this.tradeStatus=4),console.log(t)}catch(t){this.tradeStatus=-1,console.log(t)}finally{this.isApproveLoading=!1}},closeBlablaPayStatus(){this.tradeStatus==2&&this.reload(),this.tradeStatus=void 0,this.tradeHash="N/A"}}},st={key:0,class:"pay-way"},at={key:1,class:"has-unused"},it={key:0},ot={key:1},nt={key:2,class:"no-unused"},rt={key:0},lt={key:1},dt=y("\u652F\u4ED8 1 BNB"),ct=y("\u652F\u4ED8 200 JF"),ut=y("approve");function ht(t,e,s,p,n,i){const _=d("van-loading"),m=d("van-radio"),g=d("van-radio-group"),c=d("van-button"),V=d("DialogBase"),I=d("BlablaPayStatus");return o(),l(T,null,[h(V,{class:"trade-box",autoClose:!1,clickOverlayIsClose:!1,visible:i.tradeVisable,"onUpdate:visible":e[1]||(e[1]=S=>i.tradeVisable=S),title:"\u63D0\u793A",showConfirmButton:n.isShowButton,showCancelButton:n.isShowButton,onOnConfirm:i.payConfirm,confirmLoading:n.isConfirmLoading},{default:f(()=>[typeof n.tradeStatus!="number"?(o(),l("div",st,[n.payWay==0?(o(),v(_,{key:0,type:"spinner",size:"48px"})):n.payWay==1?(o(),l("div",at,[i.paymentType==1?(o(),l("span",it," \u4F60\u6709"+r(n.unUsedNum)+"\u6B21\u672A\u4F7F\u7528\u7684\u652F\u4ED8\u8BB0\u5F55\u53EF\u7528\u4E8E\u8FDD\u89C4\u5904\u7F5A\uFF0C\u4E00\u65E6\u4F60\u5904\u7406\u4E86\u8FD9\u6B21\u8FDD\u89C4\uFF0C\u5C31\u4F1A\u4F7F\u7528\u4E00\u6761\u652F\u4ED8\u8BB0\u5F55\u3002 ",1)):i.paymentType==0?(o(),l("span",ot," \u4F60\u6709"+r(n.unUsedNum)+"\u6B21\u672A\u4F7F\u7528\u7684\u652F\u4ED8\u8BB0\u5F55\u53EF\u7528\u4E8E\u7BA1\u7406\u5458\u8D2D\u4E70\uFF0C\u4E00\u65E6\u4F60\u8D2D\u4E70\u4E86\u7BA1\u7406\u5458\uFF0C\u5C31\u4F1A\u4F7F\u7528\u4E00\u6761\u652F\u4ED8\u8BB0\u5F55\u3002 ",1)):u("",!0)])):n.payWay==2?(o(),l("div",nt,[a("label",null,[i.paymentType==1?(o(),l("span",rt,"\u9009\u62E9\u4E00\u79CD\u65B9\u5F0F\u652F\u4ED8\u8FDD\u89C4\u5904\u7F5A")):i.paymentType==0?(o(),l("span",lt,"\u9009\u62E9\u4E00\u79CD\u65B9\u5F0F\u8D2D\u4E70\u7BA1\u7406\u5458")):u("",!0)]),h(g,{modelValue:n.tokenId,"onUpdate:modelValue":e[0]||(e[0]=S=>n.tokenId=S),onChange:i.changeTokenId},{default:f(()=>[h(m,{class:"radio-item","checked-color":"#9505F9","icon-size":"16px",name:"0"},{default:f(()=>[dt]),_:1}),h(m,{class:"radio-item","checked-color":"#9505F9","icon-size":"16px",name:"1"},{default:f(()=>[ct]),_:1})]),_:1},8,["modelValue","onChange"])])):u("",!0),n.isShowApprove?(o(),v(c,{key:3,class:"approve",round:"",type:"primary",onClick:i.approve,loading:n.isApproveLoading},{default:f(()=>[ut]),_:1},8,["onClick","loading"])):u("",!0)])):u("",!0)]),_:1},8,["visible","showConfirmButton","showCancelButton","onOnConfirm","confirmLoading"]),h(I,{onCloseBlablaPayStatus:i.closeBlablaPayStatus,tradeStatus:n.tradeStatus,tradeHash:n.tradeHash},null,8,["onCloseBlablaPayStatus","tradeStatus","tradeHash"])],64)}const mt=b(et,[["render",ht],["__scopeId","data-v-f6a286f1"]]);const pt={name:"BecomeManager",props:{visible:Boolean},components:{},data(){return{}},computed:{dialogVisible:{get(){return this.visible},set(t){this.$emit("update:visible",t)}},managerSeat(){return 5-this.$store.state.group.managers.length}},watch:{},methods:{becomeManager(){this.$store.commit("setTradeVisable",!0),this.$store.commit("setPaymentType",0),this.dialogVisible=!1}},created(){},mounted(){}},$=t=>(w("data-v-f5e51b2d"),t=t(),B(),t),_t={class:"title"},ft={class:"content"},yt={class:"info"},gt={class:"privilege"},vt={class:"privilege-info"},bt={class:"privilege-list"},St={class:"item"},kt=$(()=>a("div",{class:"img"},[a("i",{class:"iconfont icon-kick"})],-1)),wt={class:"text"},Bt={class:"item"},Tt=$(()=>a("div",{class:"img"},[a("i",{class:"iconfont icon-zhiding"})],-1)),Ct={class:"text"},At={class:"item"},$t={class:"img"},Vt={class:"text"},It={class:"item"},Lt={class:"img"},Pt={class:"text"},Nt={class:"action-bar"};function xt(t,e,s,p,n,i){const _=d("van-icon"),m=d("van-button"),g=d("van-popup");return o(),v(g,{show:i.dialogVisible,"onUpdate:show":e[0]||(e[0]=c=>i.dialogVisible=c),closeable:!0,round:"",position:"center",teleport:"#app",class:"become-manager"},{default:f(()=>[a("h3",_t,r(t.$t("becomeAnAdmin")),1),a("div",ft,[y(r(t.$store.state.group.managers.length)+" ",1),a("div",yt,[y(r(t.$t("becomeAnAdminInfo1")),1),a("span",null,r(i.managerSeat),1),y(r(t.$t("becomeAnAdminInfo2")),1)]),a("div",gt,[a("div",vt,r(t.$t("becomeAnAdminInfo3")),1),a("div",bt,[a("div",St,[kt,a("div",wt,r(t.$t("banOrRemove")),1)]),a("div",Bt,[Tt,a("div",Ct,r(t.$t("pinMessage")),1)]),a("div",At,[a("div",$t,[h(_,{class:"icon-svg",size:"1.3em",name:"/assets/images/set.png"})]),a("div",Vt,r(t.$t("managementGroup")),1)]),a("div",It,[a("div",Lt,[h(_,{class:"icon-svg",size:"1.3em",name:"/assets/images/tequan.png"})]),a("div",Pt,r(t.$t("morePrivileges")),1)])])])]),a("div",Nt,[h(m,{type:"primary",class:"btn",onClick:i.becomeManager},{default:f(()=>[y(r(t.$t("confirm")),1)]),_:1},8,["onClick"])])]),_:1},8,["show"])}const Dt=b(pt,[["render",xt],["__scopeId","data-v-f5e51b2d"]]),Mt={name:"Group",components:{BlablaPay:mt,BecomeManager:Dt},computed:{becomeManagerVisible:{get(){return this.$store.state.group.becomeManagerVisible},set(t){this.$store.commit("setBecomeManagerVisible",t)}}},mounted(){console.log(this.$route.params.groupId)}};function Ft(t,e,s,p,n,i){const _=d("router-view"),m=d("become-manager"),g=d("BlablaPay");return o(),l(T,null,[h(_),h(m,{visible:i.becomeManagerVisible,"onUpdate:visible":e[0]||(e[0]=c=>i.becomeManagerVisible=c)},null,8,["visible"]),h(g)],64)}const zt=b(Mt,[["render",Ft]]);export{zt as default};
