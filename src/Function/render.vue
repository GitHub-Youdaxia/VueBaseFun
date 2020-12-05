
<script>
import css from './css'
export default {
  name: 'render',
  title: 'rennder创建虚拟节点',
  render: function (createElement) {
    return createElement(
      "div",
      {
        class: {
          child: true,
          more: false,
        },
        attrs: {
          id: "foo",
          name: "child",
        },
        style: {
          // width: '100px',
          height: "auto",
        },
        // domProps: {
        //     innerHTML: '使用render函数渲染的模板<i>child-innerHTML</i>'
        // },
      },
      [
        '先写一些文字',
        createElement('h6', '一则头条'),
        createElement("span", {
          class: {
            "cus-span": true,
          },
        },[
          '文本节点'
        ]),
        createElement(css,{props:{someProp:'other'}})
      
      ]
    );
  },
};
</script>

<style scoped>
.child {
  /* background: pink; */
}
.more {
  background: red;
}
</style>