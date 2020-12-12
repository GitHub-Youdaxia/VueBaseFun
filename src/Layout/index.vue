<template>
  <div class="body">
      <div>LOGO</div>
      <div>
        <headerNav></headerNav>
        <div>{{num}}<el-button @click="add1" size="small">+1</el-button><el-button @click="add(3)" size="small">+3</el-button></div>
      </div>
      <div>
          <dl v-for="(item, index) in permission_routes" :key="index + 'index'">
              <dt v-if="!item.hidden"><router-link :to="item.path">{{item.name}}</router-link> </dt>
              <template v-if="item.children && !item.hidden">
                <dd v-for="(ele, index) in item.children" :key="'index'+index">
                  <router-link :to="ele.path">{{ele.name}}</router-link> 
                </dd>
              </template>
              <!-- <dd><router-link to="/other">功能Demo</router-link> </dd>
              <dd><router-link to="/order">我的工单</router-link> </dd>
              <dd><router-link to="/todo">我的待办</router-link> </dd>
              <dd><router-link to="/article">我的文章</router-link> </dd> -->
          </dl>
        
      </div>
      <div class="main">
        <div style="line-height:30px;background:#CCC">{{route}}</div>
        <div class="main-box">
          <router-view v-if="!$route.meta.keepAlive"></router-view>
          <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
          </keep-alive>
        </div>          
      </div>
  </div>
</template>

<script>
import headerNav from './headerNav'
import { mapGetters,mapActions } from 'vuex'

export default {
    name:'Layout',
    components:{headerNav},
    data(){
        return {
            route:''
        }
    },
    created () {
      // console.log(this)
      this.$router.push({path:'/other'})
    },
    watch:{
        $route:{
            handler(newVal,oldVal){
                this.route = newVal.name
            },
            deep:true
        }
    },
    computed: {
      ...mapGetters([
        'permission_routes',
        'num'
      ]),        
    },
    methods: {
      add1 () {
        this.$store.dispatch('test/add',1)
      },
      add () {
        // console.log(this['test/add'])
        this['test/add'](3)
      },
      ...mapActions(['test/add'])
    }
}
</script>

<style>
.main{
  min-width: 500px;
}
.body {
    height: 100%;
    display: grid;
    grid-template-rows: 70px 1fr;
    grid-template-columns: 150px 1fr;
}
.main-box {
    padding: 10px;
}
</style>