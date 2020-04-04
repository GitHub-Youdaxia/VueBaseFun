<template>
  <div>
    <el-input v-model="searchWord" @keyup.enter.native="query"></el-input>
     <el-button @click="query">查询</el-button>
     <!-- 网上有闭合所有节点的方法 -->
     <h4>动态加载</h4>
    <el-tree ref="tree1" :default-expanded-keys="defaultexpandedkeys" :props="props" :load="loadNode" lazy node-key="id"></el-tree>
    <hr>
    <h4>固定数据</h4>
    <p>调用方法把一维数据转成树形</p>
    <el-tree ref="tree2" :props="props" :data="AllData2" node-key="id"></el-tree>
  </div>
</template>
<script>
export default {
  name: "lazyLoadTree",
  title: "树的懒加载",
  data() {
    return {
      searchWord: '',
      defaultexpandedkeys: [],
      props: {
        label: "name",
        children: "children",
        isLeaf: "leaf"
      },
      AllData: [],
      AllData2: [],
    };
  },
  created() {
    // 模拟后台返回的要成为树的数据
    this.getAllData();
    window.aaa = this
  },
  methods: {
    loadNode(node, resolve) {
      if (node.level === 0) {
        return resolve([{ name: "全部", id: '0' }]);
      }
      // if (node.level > 1) return resolve([]);
      setTimeout(() => {
        let data = this.getChildByParentId(node.key)
        resolve(data);
      }, 500);
    },
    query () {
      // let items = this.AllData.filter(item => item.name.includes(this.searchWord))
      // this.defaultexpandedkeys=this.AllData.filter(item => item.name.includes(this.searchWord)).map(item => item.id)
      // 设置这个值可以动态展开树 数组里的值是节点的id值
      // 展开形式 全部-1-2-4
      this.defaultexpandedkeys.push(...['0','1','12','124'])
      // 展开形式 全部-5-2-1
      this.defaultexpandedkeys.push(...['0','5','52','521'])
    },
    // 直接在本文件模拟请求，有数据源
    // 根据parentId返回子节点数据
    getChildByParentId(parentId) {
      return this.AllData.filter(item => item.parentId === parentId)
    },
    // 转成树形数据
    dealData(data) {
      data.forEach(item1 => {
        item1.children = []
        data.forEach(item2 => {
          if (item2.parentId === item1.id ) {
            item1.children.push(item2)
            item2.isChild=true
          }
        })
        // 判断是否是叶子节点
        item1.children.length === 0 ? item1.leaf = true : item1.leaf = false
      });
      return data.filter(item => !item.isChild)
    },
    getAllData () {
      // 第一层级数据
      let level1 = [];
      for (let index = 1; index < 6; index++) {
        let parentId = '0'
        level1.push({
          id: index+'',
          parentId: parentId,
          idPath: parentId + '.' +index,
          name:index+'',
          namePath: parentId + '.' +index,
          shortName: ""
        });
      }
      // 第二层级数据
      let level2 = [];
      for (let i = 0; i < level1.length; i++) {
        for (let j = 1; j < 10; j++) {
          j = j.toString();
          let id = level1[i].id +  j;
          let name = j;
          let idPath = level1[i].idPath +  '.'+  id;
          let namePath = idPath;
          level2.push({
            id: id,
            parentId: level1[i].id,
            idPath: idPath,
            name:name,
            namePath: namePath,
            shortName: ""
          });
        }
      }
      //  第三层数据
      let level3 = [];
      for (let i = 0; i < level2.length; i++) {
        for (let j = 1; j < 10; j++) {
          j = j.toString();
          let id = level2[i].id + j;
          let name = j;
          let idPath = level2[i].idPath +  '.'+  id;
          let namePath = idPath;
          level3.push({
            id: id,
            parentId: level2[i].id,
            idPath: idPath,
            name:name,
            namePath: namePath,
            shortName: ""
          });
        }
      }
      //  第四层数据
      let level4 = [];
      for (let i = 0; i < level3.length; i++) {
        for (let j = 1; j < 10; j++) {
          j = j.toString();
          let id = level3[i].id + j;
          let name = j;
          let idPath = level3[i].idPath +  '.'+  id;
          let namePath = idPath;
          level4.push({
            id: id,
            parentId: level3[i].id,
            idPath: idPath,
            name:+name,
            namePath: namePath,
            shortName: "",
            // leaf: true // 控制源数据最后一层是否有叶子节点标志
          });
        }
      }
      this.AllData = [...level1, ...level2, ...level3, ...level4];
      let AllData2 = [...level1, ...level2, ...level3];
      AllData2 = JSON.parse(JSON.stringify(AllData2))
      this.AllData2 = this.dealData([{ name: "全部", id: '0' },...AllData2])
      // this.AllData = [...level1];
      console.log(this.AllData);
    }
  },
};
</script>