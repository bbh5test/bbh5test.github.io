import{C as _}from"./chatItem.1d77ff05.js";import{_ as m,k as v,d,b as c,m as a,w as p,r as i,o as r,F as $,x as L,a as M}from"./index.e3b8e14c.js";import"./avatar.20d1347c.js";import"./roleTag.718897e6.js";import"./dialogBase.11b6deee.js";const B={name:"Pined",components:{ChatItem:_},computed:{title(){return`${this.$t("topMessages")}(${this.$store.state.group.pinedMsgTotal})`}},data(){return{listLoading:!1,listFinished:!1}},methods:{async onLastPage(){let e=-1;this.$store.state.group.pinedMsgList.length>0&&(e=this.$store.state.group.pinedMsgList[0].id);let t=await v.group.getPinedMsgs(this.$store.state.group.groupId,10,e);if(t.status==1){if(t.data.pinMsg.length>0)for(let s=t.data.pinMsg.length-1;s>=0;s--)console.log(t.data.pinMsg[s].id),this.$store.commit("addPinedMsgUnshift",t.data.pinMsg[s]);t.data.pinMsg.length<10&&(this.listFinished=!0)}this.$refs.rightBody.scrollTop=1,this.listLoading=!1},scrollToBottom(){this.$nextTick(()=>{this.$refs.rightBody.scrollTop=this.$refs.rightBody.scrollHeight})}},mounted(){this.scrollToBottom()}},y={class:"container"},k={class:"content",ref:"rightBody"};function x(e,t,s,C,n,l){const g=i("van-nav-bar"),h=i("ChatItem"),f=i("van-cell"),u=i("van-list");return r(),d("section",y,[c("div",null,[a(g,{"left-arrow":"",fixed:"","safe-area-inset-top":"","z-index":"2",title:l.title,onClickLeft:t[0]||(t[0]=o=>e.$router.go(-1))},null,8,["title"])]),c("div",k,[a(u,{class:"chat-list","finished-text":e.$t("noMore"),direction:"up",loading:n.listLoading,"onUpdate:loading":t[1]||(t[1]=o=>n.listLoading=o),finished:n.listFinished,onLoad:l.onLastPage,"immediate-check":!1},{default:p(()=>[(r(!0),d($,null,L(e.$store.state.group.pinedMsgList,o=>(r(),M(f,{key:o.id},{default:p(()=>[a(h,{source:o,type:1},null,8,["source"])]),_:2},1024))),128))]),_:1},8,["finished-text","loading","finished","onLoad"])],512)])}const b=m(B,[["render",x],["__scopeId","data-v-5349cd66"]]);export{b as default};
