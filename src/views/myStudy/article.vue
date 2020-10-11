<template>
  <div>
    <p>$route.params.id: {{$route.params.id}}</p>
    <p>props.id: {{id}}</p>
    <p>props.userName: {{userName}}</p>
    <p>props.query: {{query}}</p>
    <p>在组件中使用 $route 会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性。</p>
    <p>使用这个访问路径，http://localhost:8080/article/111?a=b，传值都在props中取到，不用this.$route的方式取值</p>
    <xmp>
      props解耦 
        1、props布尔模式
          var routes = [
              {
                  path: "/one/:id",
                  component: Foo,
                  props: true 
              }
          ];
        组件中通过props:["id"]来使用路由中的传参
        2、props对象模式,传递静态参数
          var routes = [
              {
                  path: "/one/:id",
                  component: Foo,
                  props: {
                    userName:'hahaha'
                  } 
              }
          ];        
        3、props函数模式,传递静态参数和动态参数像结合
        使用场景:一个资源查询功能组件，普通用户和管理员用户都要用，管理员有更高权限，所以调不同的查询接口查的更多，复用此组件，在新的路由下也使用这个组件并传递不同的参数值
        可接收query方式参数的传递
          var routes = [
              {
                  path: "/one/:id",
                  component: Foo,
                  props: ($route) => (
                    {userName:'hahaha',id: $route.params.id,query: $route.query}
                  )
              },
              {
                  path: "myRes",
                  component: myResComponent,
                  props: ($route) => (
                    {category:'myRes'}
                  )
              },
              {
                  path: "adminRes",
                  component: myResComponent,
                  props: ($route) => (
                    {category:'adminRes'}
                  )
              },
          ];                  
     
    </xmp>
  </div>
</template>

<script>
import { fetchList } from "@/api/myStudy/article";
export default {
  name: "article",
  props: ['id', 'userName', 'query'],
  components: {},
  data() {
    return {
      msg: ""
    };
  },
  created() {
    fetchList()
      .then(res => {
        console.log(res);
      })
      .catch(res => {
        console.log(res);
      });
  },
  mounted() {},
  methods: {
    say() {}
  },
  watch: {},
  filters: {}
};
</script>

<style lang="stylus" scoped></style>
