import{_ as v,c as I,r as d,o,a as g,w as y,b as a,d as l,t as n,e as u,f as b,p as w,g as T,h as L,i as N,j as D,B as U,k,s as M,l as F,m as h,F as $}from"./index.17a9d8cb.js";import{D as B}from"./dialogBase.1b4790c9.js";const H={components:{DialogBase:B},props:{tradeStatus:{type:Number,default:999},tradeHash:{type:String,default:"N/A"}},emits:["closeBlablaPayStatus"],watch:{tradeStatus(){this.tradeStatus!==999&&(console.log(this.tradeStatusVisible),this.tradeStatusVisible=!0)},tradeStatusVisible(t){t||this.$emit("closeBlablaPayStatus")}},data(){return{tradeStatusVisible:!1}},methods:{copy:I,jumpToTxDetail(){window.open("https://rinkeby.etherscan.io/tx/"+this.tradeHash,"_blank")},jumpToPaymentList(){this.tradeStatusVisible=!1,this.$router.push({name:"PaymentList"})}}},A=t=>(w("data-v-6e5ed611"),t=t(),T(),t),W={class:"status-content"},z={class:"status-text"},j={key:0},x={key:1},E={key:2},O={key:3},R={class:"status-icon"},G={class:"trade-hash"},q={key:0},J=A(()=>a("use",{"xlink:href":"#icon-copy"},null,-1)),K=[J],Q={key:1},X=A(()=>a("span",null,"N/A",-1)),Y=[X];function Z(t,e,s,p,r,i){const _=d("van-loading"),m=d("van-icon"),f=d("DialogBase");return o(),g(f,{class:"trade-box",autoClose:!1,clickOverlayIsClose:!1,visible:r.tradeStatusVisible,"onUpdate:visible":e[3]||(e[3]=c=>r.tradeStatusVisible=c),title:t.$t("transactionDetails"),showConfirmButton:!1,showCancelButton:!1},{default:y(()=>[a("div",W,[a("div",z,[s.tradeStatus==0||s.tradeStatus==3?(o(),l("span",j,n(t.$t("sendingTransactionToBlockchain")),1)):s.tradeStatus==1?(o(),l("span",x,n(t.$t("waitingForServiceSyncronizing")),1)):s.tradeStatus==-1?(o(),l("span",E,n(t.$t("sendTransactionToBlockchainFailed")),1)):s.tradeStatus==-2?(o(),l("span",O,n(t.$t("servicesyncronizingTimeout")),1)):u("",!0)]),a("div",R,[s.tradeStatus==0||s.tradeStatus==1||s.tradeStatus==3?(o(),g(_,{key:0,type:"spinner",size:"48px"})):u("",!0),s.tradeStatus==2||s.tradeStatus==4?(o(),g(m,{key:1,color:"#07c160",size:"40px",name:"checked"})):u("",!0),s.tradeStatus==-1||s.tradeStatus==-2?(o(),g(m,{key:2,color:"#FA5151",size:"40px",name:"clear"})):u("",!0)]),a("div",G,[b(n(t.$t("txHash")+":")+" ",1),s.tradeStatus==1||s.tradeStatus==2||s.tradeStatus==-2||s.tradeStatus==3||s.tradeStatus==4?(o(),l("text",q,[a("span",{onClick:e[0]||(e[0]=(...c)=>i.jumpToTxDetail&&i.jumpToTxDetail(...c))},n(t.$f.formatAddress(s.tradeHash,6)),1),(o(),l("svg",{class:"icon-svg icon-renzheng","aria-hidden":"true",onClick:e[1]||(e[1]=c=>i.copy(s.tradeHash))},K))])):s.tradeStatus==0||s.tradeStatus==-1?(o(),l("text",Q,Y)):u("",!0)]),s.tradeStatus==2||s.tradeStatus==-2?(o(),l("div",{key:0,class:"check-trade-list",onClick:e[2]||(e[2]=(...c)=>i.jumpToPaymentList&&i.jumpToPaymentList(...c))},n(t.$t("goToSeePaymentRecords")),1)):u("",!0)])]),_:1},8,["visible","title"])}const tt=v(H,[["render",Z],["__scopeId","data-v-6e5ed611"]]);const et={name:"BlablaPay",inject:["reload"],components:{DialogBase:B,BlablaPayStatus:tt},data(){return{contractAddress:"0x1BEcc0D044267540e81C1d203Eb7875ED9ff120F",jfTokenAddress:"0xaf22f677373352761b7f8faff4c9ad7bd8b6be42",tradeHash:"N/A",tradeStatus:999,payWay:0,unUsedNum:0,tokenId:"0",isShowApprove:!1,isShowButton:!1,isConfirmLoading:!1,isApproveLoading:!1}},watch:{"$store.state.group.tradeVisable"(t){t&&this.init()}},computed:{tradeVisable:{get(){return this.$store.state.group.tradeVisable},set(t){this.$store.commit("setTradeVisable",t)}},paymentType(){return this.$store.state.group.paymentType}},mounted(){},methods:{async init(){if(this.tradeHash="N/A",this.tradeStatus=999,this.payWay=0,this.unUsedNum=0,this.tokenId="0",this.isShowApprove=!1,this.isShowButton=!1,this.isConfirmLoading=!1,this.isApproveLoading=!1,!await this.$store.dispatch("getPaymentListAction"))this.payWay=2;else{let e=this.$store.state.user.paymentList;if(e.length==0)this.payWay=2;else{let s=0;for(let p of e)this.paymentType==0?p.status==0&&p.paymentType==0&&(s=s+1):this.paymentType==1&&p.status==0&&p.paymentType==1&&(s=s+1);s>0?(this.payWay=1,this.unUsedNum=s):this.payWay=2}}this.isShowButton=!0},async changeTokenId(){this.tokenId==0&&(this.isShowButton=!0,this.isShowApprove=!1)},async payConfirm(){if(this.isConfirmLoading=!0,this.payWay==1){let t=await this.trade();if(t=="fail")this.$toast.fail(this.$t("blablaPayFail"));else if(t=="success"){let e;this.paymentType==0?e=this.$t("blablaPayAdminSuccess"):this.paymentType==1&&(e=this.$t("blablaPayViolationSuccess")),this.$toast.success(e),this.$store.commit("setTradeVisable",!1)}}else{let t=await L();if(t=="netErr"){await N(),this.isConfirmLoading=!1;return}else if(t=="tokenErr"){this.$toast({duration:3e3,message:this.$t("switchAccountWarn")}),this.isConfirmLoading=!1;return}else if(t==!1){this.$store.state.wallet=="WalletConnect"&&await this.$store.state.provider.disconnect(),this.$store.commit("logout"),this.$store.commit("setUserInfo",{}),this.$store.commit("setTradeVisable",!1),this.$store.dispatch("checkLogin"),this.isConfirmLoading=!1;return}if(this.tokenId==1&&!await D({spender:this.contractAddress,tokenAddress:this.jfTokenAddress,account:this.$store.state.user.userAddress})){this.isShowButton=!1,this.isShowApprove=!0,this.$toast(this.$t("approveFirst")),this.isConfirmLoading=!1;return}this.$store.commit("setTradeVisable",!1),this.tradeStatus=0,this.isShowButton=!1;try{let e=await U(this.contractAddress,this.paymentType,parseInt(this.tokenId));e&&(console.log(e),this.tradeHash=e.hash,this.tradeStatus=1,await e.wait(),await this.timeCheckTrade())}catch(e){console.log(e),this.tradeStatus=-1}}this.isConfirmLoading=!1},async trade(){try{if(this.paymentType==0){if((await k.groupMember.buyManager(this.$store.state.group.groupId)).status==1)return await this.$store.dispatch("getGroupDetail",this.$route.params.groupId),this.$store.commit("setCurrentUserRole",1),"success"}else if(this.paymentType==1&&(await k.groupViolation.dealWithViolation(this.$store.state.group.groupId)).status==1)return this.$store.commit("setGroupStatus",0),this.$router.push({name:"GroupDetail",params:{groupId:this.$route.params.groupId}}),"success"}catch(t){console.log(t)}return"fail"},async timeCheckTrade(){console.log("timeCheckTrade");let t=!1,e=setTimeout(async function(){t=!0},2e4);for(;;){try{if(await this.trade()=="success"){this.tradeStatus=2,clearTimeout(e);break}}catch(s){console.log(s)}if(t){this.tradeStatus=-2;break}await M(3e3)}},async approve(){this.isApproveLoading=!0,this.tradeStatus=0;try{let t=await F(this.contractAddress,this.jfTokenAddress);t&&(this.tradeHash=t.hash,this.tradeStatus=3,await t.wait(),this.isShowApprove=!1,this.isShowButton=!0,this.tradeStatus=4)}catch(t){this.tradeStatus=-1,console.log(t)}finally{this.isApproveLoading=!1}},closeBlablaPayStatus(){this.tradeStatus==2&&this.reload(),this.tradeStatus=999,this.tradeHash="N/A"}}},st={key:0,class:"pay-way"},at={key:1,class:"has-unused"},it={key:0},ot={key:1},nt={key:2,class:"no-unused"},rt={key:0},lt={key:1},dt=b("approve");function ct(t,e,s,p,r,i){const _=d("van-loading"),m=d("van-radio"),f=d("van-radio-group"),c=d("van-button"),V=d("DialogBase"),P=d("BlablaPayStatus");return o(),l($,null,[h(V,{class:"trade-box",autoClose:!1,clickOverlayIsClose:!1,visible:i.tradeVisable,"onUpdate:visible":e[1]||(e[1]=S=>i.tradeVisable=S),title:t.$t("tips"),showConfirmButton:r.isShowButton,showCancelButton:r.isShowButton,onOnConfirm:i.payConfirm,confirmLoading:r.isConfirmLoading},{default:y(()=>[r.tradeStatus==999?(o(),l("div",st,[r.payWay==0?(o(),g(_,{key:0,type:"spinner",size:"48px"})):r.payWay==1?(o(),l("div",at,[i.paymentType==1?(o(),l("span",it,n(t.$t("violationPaymentUnused",{num:r.unUsedNum})),1)):i.paymentType==0?(o(),l("span",ot,n(t.$t("adminPaymentUnused",{num:r.unUsedNum})),1)):u("",!0)])):r.payWay==2?(o(),l("div",nt,[a("label",null,[i.paymentType==1?(o(),l("span",rt,n(t.$t("chooseToPayForViolation")),1)):i.paymentType==0?(o(),l("span",lt,n(t.$t("chooseToPayForAmdin")),1)):u("",!0)]),h(f,{modelValue:r.tokenId,"onUpdate:modelValue":e[0]||(e[0]=S=>r.tokenId=S),onChange:i.changeTokenId},{default:y(()=>[h(m,{class:"radio-item","checked-color":"#9505F9","icon-size":"16px",name:"0"},{default:y(()=>[b(n(t.$t("pay"))+" 1 BNB",1)]),_:1}),h(m,{class:"radio-item","checked-color":"#9505F9","icon-size":"16px",name:"1"},{default:y(()=>[b(n(t.$t("pay"))+" 200 JF",1)]),_:1})]),_:1},8,["modelValue","onChange"])])):u("",!0),r.isShowApprove?(o(),g(c,{key:3,class:"approve",round:"",type:"primary",onClick:i.approve,loading:r.isApproveLoading},{default:y(()=>[dt]),_:1},8,["onClick","loading"])):u("",!0)])):u("",!0)]),_:1},8,["visible","title","showConfirmButton","showCancelButton","onOnConfirm","confirmLoading"]),h(P,{onCloseBlablaPayStatus:i.closeBlablaPayStatus,tradeStatus:r.tradeStatus,tradeHash:r.tradeHash},null,8,["onCloseBlablaPayStatus","tradeStatus","tradeHash"])],64)}const ut=v(et,[["render",ct],["__scopeId","data-v-e1d0c4b3"]]);const ht={name:"BecomeManager",props:{visible:Boolean},components:{},data(){return{}},computed:{dialogVisible:{get(){return this.visible},set(t){this.$emit("update:visible",t)}},managerSeat(){return 5-this.$store.state.group.managers.length}},watch:{},methods:{becomeManager(){this.$store.commit("setTradeVisable",!0),this.$store.commit("setPaymentType",0),this.dialogVisible=!1}},created(){},mounted(){}},C=t=>(w("data-v-f4b69b08"),t=t(),T(),t),mt={class:"title"},pt={class:"content"},_t={class:"info"},yt={class:"privilege"},ft={class:"privilege-info"},gt={class:"privilege-list"},bt={class:"item"},vt=C(()=>a("div",{class:"img"},[a("i",{class:"iconfont icon-kick"})],-1)),St={class:"text"},kt={class:"item"},wt=C(()=>a("div",{class:"img"},[a("i",{class:"iconfont icon-zhiding"})],-1)),Tt={class:"text"},$t={class:"item"},Bt={class:"img"},At={class:"text"},Ct={class:"item"},Vt={class:"img"},Pt={class:"text"},It={class:"action-bar"};function Lt(t,e,s,p,r,i){const _=d("van-icon"),m=d("van-button"),f=d("van-popup");return o(),g(f,{show:i.dialogVisible,"onUpdate:show":e[0]||(e[0]=c=>i.dialogVisible=c),closeable:!0,round:"",position:"center",teleport:"#app",class:"become-manager"},{default:y(()=>[a("h3",mt,n(t.$t("becomeAnAdmin")),1),a("div",pt,[a("div",_t,[b(n(t.$t("becomeAnAdminInfo1")),1),a("span",null,n(i.managerSeat),1),b(n(t.$t("becomeAnAdminInfo2")),1)]),a("div",yt,[a("div",ft,n(t.$t("becomeAnAdminInfo3")),1),a("div",gt,[a("div",bt,[vt,a("div",St,n(t.$t("banOrRemove")),1)]),a("div",kt,[wt,a("div",Tt,n(t.$t("pinMessage")),1)]),a("div",$t,[a("div",Bt,[h(_,{class:"icon-svg",size:"1.3em",name:"/assets/images/set.png"})]),a("div",At,n(t.$t("managementGroup")),1)]),a("div",Ct,[a("div",Vt,[h(_,{class:"icon-svg",size:"1.3em",name:"/assets/images/tequan.png"})]),a("div",Pt,n(t.$t("morePrivileges")),1)])])])]),a("div",It,[h(m,{type:"primary",class:"btn",onClick:i.becomeManager},{default:y(()=>[b(n(t.$t("becomeAdmin")),1)]),_:1},8,["onClick"])])]),_:1},8,["show"])}const Nt=v(ht,[["render",Lt],["__scopeId","data-v-f4b69b08"]]),Dt={name:"Group",components:{BlablaPay:ut,BecomeManager:Nt},computed:{becomeManagerVisible:{get(){return this.$store.state.group.becomeManagerVisible},set(t){this.$store.commit("setBecomeManagerVisible",t)}}},mounted(){console.log(this.$route.params.groupId)}};function Ut(t,e,s,p,r,i){const _=d("router-view"),m=d("become-manager"),f=d("BlablaPay");return o(),l($,null,[h(_),h(m,{visible:i.becomeManagerVisible,"onUpdate:visible":e[0]||(e[0]=c=>i.becomeManagerVisible=c)},null,8,["visible"]),h(f)],64)}const Ht=v(Dt,[["render",Ut]]);export{Ht as default};
