<template>
  <div class="custom-tree-container">
    <div class="block">
      <p>当文本节点过长时，显示省略号，不影响右侧操作按钮的布局</p>
      <p>使用 render-content</p>
      <el-tree
        :data="data"
        show-checkbox
        node-key="id"
        default-expand-all
        :expand-on-click-node="false"
        :render-content="renderContent"
      ></el-tree>
    </div>
    <div class="block">
      <p>使用 scoped slot</p>
      <el-tree
        :data="data"
        show-checkbox
        node-key="id"
        default-expand-all
        :expand-on-click-node="false"
      >
        <span class="custom-tree-node" slot-scope="{ node, data }">
          <span>{{ node.label }}</span>
          <span>
            <el-button type="text" size="mini" @click="() => append(data)">Append</el-button>
            <el-button type="text" size="mini" @click="() => remove(node, data)">Delete</el-button>
          </span>
        </span>
      </el-tree>
    </div>
  </div>
</template>

<script>
let id = 1000;

export default {
  name: "elementUITree",
  title: 'tree组件',
  data() {
    const data = [
      {
        id: 1,
        label: "一级 1",
        children: [
          {
            id: 4,
            label: "二级 1-1",
            children: [
              {
                id: 9,
                label: "三级 1-1-1"
              },
              {
                id: 10,
                label: "三级 1-1-2"
              }
            ]
          }
        ]
      },
      {
        id: 2,
        label: "一级 2",
        children: [
          {
            id: 5,
            label: "二级 2-1"
          },
          {
            id: 6,
            label: "二级 2-2"
          }
        ]
      },
      {
        id: 3,
        label: "一级 3",
        children: [
          {
            id: 7,
            label: "二级 3-1"
          },
          {
            id: 8,
            label: "二级 3-2"
          }
        ]
      }
    ];
    return {
      data: JSON.parse(JSON.stringify(data)),
      data: JSON.parse(JSON.stringify(data))
    };
  },

  methods: {
    append(data) {
      const newChild = { id: id++, label: "testtest", children: [] };
      if (!data.children) {
        this.$set(data, "children", []);
      }
      data.children.push(newChild);
    },

    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex(d => d.id === data.id);
      children.splice(index, 1);
    },

    renderContent(h, { node, data, store }) {
      return (
        <span class="custom-tree-node">
          <span>{node.label}</span>
          <span>
            <el-button
              size="mini"
              type="text"
              on-click={() => this.append(data)}
            >
              Append
            </el-button>
            <el-button
              size="mini"
              type="text"
              on-click={() => this.remove(node, data)}
            >
              Delete
            </el-button>
          </span>
        </span>
      );
    }
  }
};
</script>

<style>
/* custom-tree-node 的父元素display:flex */
.custom-tree-node {
  flex: 1;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 100px;
  font-size: 14px;
  padding-right: 8px;
}
.custom-tree-node span:first-child {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/* 
  <span class="custom-tree-node">
    <span>{node.label}</span>
    <span>
      <el-button size="mini" type="text" on-click={ () => this.append(data) }>Append</el-button>
      <el-button size="mini" type="text" on-click={ () => this.remove(node, data) }>Delete</el-button>
    </span>
  </span>);  
*/
</style>