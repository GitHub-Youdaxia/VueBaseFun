<template>
  <div class="img-box">
    <img v-for="(item,index) in dataList" v-lazy="item" :key="item+index" alt="">
  </div>
</template>

<script>
let imgSrc1 = `https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605719095355&di=d21e0dc6160f4d6296403b173c19b52a&imgtype=0&src=http%3A%2F%2Fimg66.nipic.com%2Ffile%2F20150702%2F128275_173205865000_1.jpg`
let imgSrc2 = `https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605719095354&di=152249db3930e71f362a3e567aac27e3&imgtype=0&src=http%3A%2F%2Fa1.att.hudong.com%2F57%2F89%2F01300000828258127442898227622_s.jpg`
let imgSrc3 = `https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605719095352&di=95f8ea35645e2701a65bcefd654f0ca4&imgtype=0&src=http%3A%2F%2Fimg.mp.sohu.com%2Fupload%2F20170601%2Faf68bce89ac945e7ad00da688a25fb08.png`
let imgSrc4 = `https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605719095348&di=60d373b27218c31f313e62afda20f47b&imgtype=0&src=http%3A%2F%2Fimg7.nipic.com%2F20090526%2F2671974_185516049_1.gif`
let arr = [imgSrc1,imgSrc2,imgSrc3,imgSrc4]

let arrList = []
for (let index = 0; index < 200; index++) {
  // arrList.push(`https://scpic.chinaz.net/files/pic/pic9/202011/bpic217${index}.jpg`)
  // arrList.push(`https://scpic.chinaz.net/files/pic/pic9/202011/apic289${index}.jpg`)
  // arrList.push(`https://scpic.chinaz.net/files/pic/pic9/202011/bpic217${index}.jpg`)
  arrList.push(...arr)
}
export default {
  name: 'lazyImg',
  title: "图片懒加载",
  data () {
    return {
      dataList: arrList
    }
  }
}
</script>

<style lang="stylus">
.img-box{
  img{
    width 200px
    height 200px
    margin 20px
  }
}
</style>