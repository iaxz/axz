---
home: true
heroImage: '/vuepress/topic.png'
faceImage: '/vuepress/head.png'
heroImageStyle: {
  maxWidth: '680px',
  width: '100%',
  display: block,
  margin: '14% auto -16% auto',
  //border: '1px dashed #000',
  box-shadow: '8px 8px 20px #022',
  borderRadius: '10px',
}
isShowTitleInHome: true
actionText: '开启进阶之路'
actionLink: /views/
features:
- title: 
  details: 把所有的不快给昨天
- title: 
  details: 把所有的努力给今天
- title: 
  details: 把所有的希望给明天
footer: MIT Licensed | Copyright © 2018-present Evan You
---

<Clock/>

::: tip 积极 向上 努力
当你手中抓住一件东西不放时， <br/>
你只能拥有一件东西， <br/>

如果你肯放手， <br/>
你就有机会选择更多。 <br/>
与其在别人的生活里跑龙套， <br/>

不如精彩做自己。 <br/>
没有特别幸运， <br/>
那么请先特别努力， <br/>

别因为懒惰而失败， <br/>
还矫情地将原因归于自己倒霉。 <br/>
你必须特别努力， <br/>

才能显得毫不费力。 <br/>
在犹豫要不要放弃时， <br/>

就别放弃， <br/>
因为你要是真的不想再坚持就不会犹豫， <br/>
犹豫就是舍不得。
:::

<!-- <CanvasNest color='0,23,255' zIndex='-2'></CanvasNest> -->

<script>
  
</script>

<style lang="stylus">
.home .content__default:not(.custom) {
  max-width: 100% !important;
  margin: 0  !important;
  padding: 0 !important;
}
.home .hero h1 {
    display: none;
}
.home img {
   transform: scale(0.8,0.8) !important;
   transition: all 1s!important;
}
.home img:hover {
   //transform: scale(1)!important;
   transition:all 2s !important;
}
.home .features {
    text-align: center;
}
.home .feature p {
    color: #476582 !important;
}
.home .hero .description {
    color: #476582 !important;
}
.wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    min-height: 10vh;
    position: fixed;
    top: -120%;
    left: -1%;
    /*设置标星图*/
    /*background: url(#) right,url(#) right;*/
    background-repeat: no-repeat, no-repeat;
    background-position-y: 20%, 20%;
    background-position-x: 86%, 98%;
}

@media screen and (max-width: 780px) and (min-width: 541px){
  .wrap {
    background: none;
  }
  .clock {
    max-width: 230px !important;
    max-height: 230px !important;
    margin-top: 33% !important;
  }
  .home img {
    max-width: 520px !important;
  }
}

@media screen and (max-width: 540px) and (min-width: 481px){
  .wrap {
    background: none;
  }
  .clock {
    max-width: 200px !important;
    max-height: 200px !important;
    margin-top: -10% !important;
  }
  .home img {
    margin: 24% auto -6% auto !important;
    max-width: 380px !important;
  }
}

@media screen and (max-width: 480px) and (min-width: 0px){
  .wrap {
    top:-107%;
    transform: scale(0.68,0.58);
    background: none;
  }
  .home img {    
    margin: 24% auto -6% auto !important;
  }
  .home .feature {
    width: 100%;
    text-align: center;
    color: rgb(71, 101, 130) !important;
    padding: 5px !important;
    margin: -12px;
    margin-left: 0px;
  }
  .clock {
    background: rgba(0, 0, 0, 0) none repeat scroll !important;
    background-image: url() !important;
  }
}
.clock {
  width: 300px !important;
  height: 300px !important;
  margin-top: 12%;
  transition: all 2s;
}
.clock:hover {
  transform: scale(0.55) !important;
  transition: all 2s;
}
/*
.wrap {
  transition: all 2s;
}
.wrap:hover {
  transform: scale(1.05) !important;
  transition: all 2s;
}
*/

</style>

