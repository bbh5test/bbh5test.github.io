import{D as F}from"./dialogBase.b2426d80.js";import{_ as I,c as U,o as d,f as V,w as l,i,g as h,h as w,t as g,k as y,r as c,p as S,l as H,d as b,T as C,s as B,j as n,F as z}from"./index.7f34ccfb.js";const E={name:"ChainTrade",components:{DialogBase:F},props:{tradeVisable:{type:Boolean,default:!1},status:{type:Number,default:0},tradeHash:{type:String,default:""}},emits:["update:tradeVisable"],methods:{copy:U}},N=s=>(S("data-v-ae393e90"),s=s(),H(),s),M={class:"status-content"},R={class:"status-text"},j={key:0},q={key:1},L={key:2},J={key:3},O={key:4},G={class:"status-icon"},K={class:"trade-hash"},Q=y(" \u4EA4\u6613Hash: "),W={key:0},X=N(()=>i("use",{"xlink:href":"#icon-copy"},null,-1)),Y=[X],Z={key:1},$=N(()=>i("span",null,"N/A",-1)),ee=[$];function te(s,e,a,f,t,m){const k=c("van-loading"),u=c("van-icon"),_=c("DialogBase");return d(),V(_,{class:"trade-box",visible:a.tradeVisable,"onUpdate:visible":e[2]||(e[2]=r=>a.tradeVisable=r),autoClose:!1,closeable:!1,clickOverlayIsClose:!1,title:"\u4EA4\u6613\u8BE6\u60C5",showConfirmButton:!1,showCancelButton:!1},{default:l(()=>[i("div",M,[i("div",R,[a.status==0?(d(),h("span",j,"\u53D1\u9001\u4EA4\u6613\u5230\u533A\u5757\u94FE...")):a.status==1?(d(),h("span",q,"\u7B49\u5F85\u670D\u52A1\u5668\u540C\u6B65...")):a.status==2?(d(),h("span",L,"\u4EA4\u6613\u6210\u529F")):a.status==-1?(d(),h("span",J,"\u4E0A\u94FE\u4EA4\u6613\u53D1\u9001\u5931\u8D25")):a.status==-2?(d(),h("span",O,"\u670D\u52A1\u5668\u540C\u6B65\u8D85\u65F6")):w("",!0)]),i("div",G,[a.status==0||a.status==1?(d(),V(k,{key:0,type:"spinner",size:"48px"})):w("",!0),a.status==2?(d(),V(u,{key:1,color:"#07c160",size:"40px",name:"checked"})):w("",!0),a.status==-1||a.status==-2?(d(),V(u,{key:2,color:"#FA5151",size:"40px",name:"clear"})):w("",!0)]),i("div",K,[Q,a.status==1||a.status==2||a.status==-2?(d(),h("text",W,[i("span",{onClick:e[0]||(e[0]=(...r)=>s.jumpToTxDetail&&s.jumpToTxDetail(...r))},g(s.$f.formatAddress(a.tradeHash,6)),1),(d(),h("svg",{class:"icon-svg icon-renzheng","aria-hidden":"true",onClick:e[1]||(e[1]=r=>m.copy(a.tradeHash))},Y))])):a.status==0||a.status==-1?(d(),h("text",Z,ee)):w("",!0)])])]),_:1},8,["visible"])}const se=I(E,[["render",te],["__scopeId","data-v-ae393e90"]]),oe="/assets/svg/redPacket/luck.svg",ne="/assets/svg/redPacket/redPacket.svg";const ae={name:"CreateRedPacket",components:{ChainTrade:se},computed:{totalAmount(){if(this.type=="0")return this.amount?parseInt(this.amount):0;if(this.type=="1")return this.amount&&this.count?parseInt(this.amount)*parseInt(this.count):0}},data(){return{tradeVisable:!1,tradeStatus:0,tradeHash:"",type:"0",result:"",showTokenPicker:!1,count:"",tokenType:["JF"],amount:"",symbol:"JF",showDeadlinePicker:!1,deadlineList:[{text:"5 Min",value:5*60},{text:"10 Min",value:10*60},{text:"30 Min",value:30*60},{text:"1 H",value:1*60*60},{text:"12 H",value:12*60*60},{text:"24 H",value:24*60*60}],deadline:{text:"5 Min",value:5*60},remark:"",balance:0,tokenAddress:"0xaf22F677373352761B7F8FAfF4c9aD7bd8B6Be42",contractAddress:"0xad3f6E6d8B3D08Ed7d46988fDb4a324e6F6006C6"}},methods:{onTokenConfirm(s){this.balance=0,this.symbol=s,this.showTokenPicker=!1,this.getBalance()},onDeadlineConfirm(s){this.deadline=s,this.showDeadlinePicker=!1},async getBalance(){try{this.balance=await b.contract.getBalance(this.tokenAddress,this.$store.state.user.userAddress)}catch{this.$store.commit("logout")}},async sendRedPacket(){const s=Number(this.amount),e=Number(this.count);if(s<=0){C("\u6570\u91CF\u4E0D\u80FD\u5C0F\u4E8E\u7B49\u4E8E0");return}if(e<1){C("\u6570\u91CF\u4E0D\u80FD\u5C0F\u4E8E1");return}if(e>this.$store.state.group.totalMembers){C("\u6570\u91CF\u4E0D\u80FD\u8D85\u8FC7\u672C\u7FA4\u4EBA\u6570");return}if(Number(this.totalAmount)>this.balance){C("\u4F59\u989D\u4E0D\u8DB3");return}this.tradeStatus=0,this.tradeVisable=!0;try{let f=this.deadline.value;if(console.log("\u53D1\u9001\u7EA2\u5305"),!await this.auth())throw"not auth";console.log("auth");const m={_owner:this.$store.state.user.userAddress,token:this.tokenAddress,amount:s,unlockDate:f,quantity:e,kind:this.type};let k=await b.contract.lock(this.contractAddress,m);console.dir(k);let u=await k.wait();this.tradeStatus=1,this.tradeHash=u.transactionHash,this.tradeVisable=!0,console.dir(u);let _=u==null?void 0:u.events,r={};for(let p=_.length-1;p>=0;p--){let P=_[p].topics.some(o=>o==="0x694af1cc8727cdd0afbdd53d9b87b69248bd490224e9dd090e788546506e076f");if(_[p].address==this.contractAddress&&P){r=_[p];break}}let A=r.data.slice(-128,-64);const x=await b.contract.getDecimal(this.tokenAddress),v=await b.contract.getAmount(this.tokenAddress,"0x"+A),D={groupId:this.$route.params.groupId,contractAddress:this.tokenAddress,contractChain:"eth",contractDecimal:x,count:e,endTime:f,redPacketId:r.topics[1],remark:this.remark,singleAmount:s,symbol:this.symbol,totalAmount:Number(this.totalAmount),tx:u.transactionHash,type:Number(this.type)};await b.redPacket.send(D),this.tradeStatus=2,await B(1e3),this.$router.push({name:"Chat",params:{groupId:this.$route.params.groupId}})}catch(f){console.log(f),this.tradeStatus=-1,await B(1e3),this.tradeVisable=!1}},async auth(){let s=await this.allowance();if(!s){const e=await this.approve(this.contractAddress,this.tokenAddress);console.log("approve",e),e&&(s=await this.allowance())}return s},async allowance(){const s=await b.contract.allowanceSend({spender:this.contractAddress,tokenAddress:this.tokenAddress,account:this.$store.state.user.userAddress});return console.log("allowanceSend",s),s}},mounted(){this.getBalance()}},T=s=>(S("data-v-ce13291a"),s=s(),H(),s),ie={class:"myChats-container"},le={class:"body"},re=y("\u62FC\u624B\u6C14\u7EA2\u5305"),de=y("\u666E\u901A\u7EA2\u5305"),ce=T(()=>i("img",{class:"left-icon",src:oe,alt:"",srcset:""},null,-1)),ue={class:"right-text"},me={class:"desc-text margin-bottom"},he=T(()=>i("img",{class:"left-icon",src:ne,alt:"",srcset:""},null,-1)),_e=T(()=>i("div",{class:"right-text"},"\u4E2A",-1)),pe={class:"desc-text margin-bottom"},fe={class:"total"},ke=y("\u7EA2\u5305\u603B\u989D"),ve={class:"amount"},be={style:{margin:"16px"}},ge=y(" \u585E\u5E01\u8FDB\u7EA2\u5305 "),ye=T(()=>i("div",{class:"bottom"},"\u672A\u9886\u53D6\u7684\u7EA2\u5305, \u5C06\u572824\u5C0F\u65F6\u540E\u9000",-1));function we(s,e,a,f,t,m){const k=c("van-nav-bar"),u=c("van-radio"),_=c("van-radio-group"),r=c("van-field"),A=c("van-picker"),x=c("van-popup"),v=c("van-cell-group"),D=c("van-button"),p=c("van-form"),P=c("ChainTrade");return d(),h(z,null,[i("section",ie,[n(k,{fixed:"",placeholder:"","left-arrow":"","safe-area-inset-top":"","z-index":"2",title:"\u521B\u5EFA\u7EA2\u5305",onClickLeft:e[0]||(e[0]=o=>s.$router.push({name:"Chat",params:{groupId:s.$route.params.groupId}}))}),i("div",le,[n(p,{onSubmit:m.sendRedPacket},{default:l(()=>[n(r,{name:"type",class:"red-packet-type"},{input:l(()=>[n(_,{modelValue:t.type,"onUpdate:modelValue":e[1]||(e[1]=o=>t.type=o),direction:"horizontal"},{default:l(()=>[n(u,{"checked-color":"#ED4A4A",name:"0"},{default:l(()=>[re]),_:1}),n(u,{"checked-color":"#ED4A4A",name:"1"},{default:l(()=>[de]),_:1})]),_:1},8,["modelValue"])]),_:1}),n(v,{inset:"",class:"margin-bottom"},{default:l(()=>[n(r,{modelValue:t.symbol,"onUpdate:modelValue":e[2]||(e[2]=o=>t.symbol=o),"is-link":"",readonly:"",name:"picker",label:"\u5E01\u79CD",placeholder:"\u70B9\u51FB\u9009\u62E9\u5E01\u79CD",onClick:e[3]||(e[3]=o=>t.showTokenPicker=!0),"input-align":"right"},null,8,["modelValue"]),n(x,{show:t.showTokenPicker,"onUpdate:show":e[5]||(e[5]=o=>t.showTokenPicker=o),position:"bottom"},{default:l(()=>[n(A,{columns:t.tokenType,onCancel:e[4]||(e[4]=o=>t.showTokenPicker=!1),onConfirm:m.onTokenConfirm},null,8,["columns","onConfirm"])]),_:1},8,["show"])]),_:1}),n(v,{inset:""},{default:l(()=>[n(r,{label:"\u91D1\u989D",class:"ipt-num"},{"left-icon":l(()=>[ce]),input:l(()=>[n(r,{"input-align":"right",modelValue:t.amount,"onUpdate:modelValue":e[6]||(e[6]=o=>t.amount=o),type:"number",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u91D1\u989D"}]},null,8,["modelValue"]),i("div",ue,g(t.symbol),1)]),_:1})]),_:1}),i("div",me,"\u53EF\u7528\u4F59\u989D "+g((t.balance?t.balance:"--")+" "+t.symbol),1),n(v,{inset:""},{default:l(()=>[n(r,{label:"\u7EA2\u5305\u4E2A\u6570",class:"ipt-num"},{"left-icon":l(()=>[he]),input:l(()=>[n(r,{"input-align":"right",modelValue:t.count,"onUpdate:modelValue":e[7]||(e[7]=o=>t.count=o),type:"digit",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7EA2\u5305\u4E2A\u6570"}]},null,8,["modelValue"]),_e]),_:1})]),_:1}),i("div",pe,"\u672C\u7FA4\u5171 "+g(s.$store.state.group.totalMembers)+" \u4EBA",1),n(v,{inset:"",class:"margin-bottom"},{default:l(()=>[n(r,{modelValue:t.deadline.text,"onUpdate:modelValue":e[8]||(e[8]=o=>t.deadline.text=o),"is-link":"",readonly:"",name:"picker",label:"\u8FC7\u671F\u65F6\u95F4",placeholder:"\u8BBE\u7F6E\u8FC7\u671F\u65F6\u95F4",onClick:e[9]||(e[9]=o=>t.showDeadlinePicker=!0),"input-align":"right"},null,8,["modelValue"]),n(x,{show:t.showDeadlinePicker,"onUpdate:show":e[11]||(e[11]=o=>t.showDeadlinePicker=o),position:"bottom"},{default:l(()=>[n(A,{columns:t.deadlineList,onCancel:e[10]||(e[10]=o=>t.showDeadlinePicker=!1),onConfirm:m.onDeadlineConfirm},null,8,["columns","onConfirm"])]),_:1},8,["show"])]),_:1}),n(v,{inset:""},{default:l(()=>[n(r,{modelValue:t.remark,"onUpdate:modelValue":e[12]||(e[12]=o=>t.remark=o),rows:"3",autosize:"",placeholder:"\u606D\u559C\u53D1\u8D22\uFF0C\u9886\u53D6\u7A7A\u6295",type:"textarea",maxlength:"32"},null,8,["modelValue"])]),_:1}),i("div",fe,[ke,i("span",ve,g(m.totalAmount?m.totalAmount:"--"),1),y(g(t.symbol),1)]),i("div",be,[n(D,{round:"",block:"",type:"default","native-type":"submit"},{default:l(()=>[ge]),_:1})])]),_:1},8,["onSubmit"]),ye])]),n(P,{tradeVisable:t.tradeVisable,"onUpdate:tradeVisable":e[13]||(e[13]=o=>t.tradeVisable=o),status:t.tradeStatus,tradeHash:t.tradeHash},null,8,["tradeVisable","status","tradeHash"])],64)}const Ve=I(ae,[["render",we],["__scopeId","data-v-ce13291a"]]);export{Ve as default};
