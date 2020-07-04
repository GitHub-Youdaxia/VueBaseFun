
<script>
  export default {
      render: function(createElement) {
          return createElement(
              'div', {
                  class: {
                      child: true,
                      more: false
                  },
                  attrs: {
                      id: 'foo',
                      name: 'child'
                  },
                  style: {
                      // width: '100px',
                      height: '50px'
                  },
                  domProps: {
                      innerHTML: '使用render函数渲染的模板<i>child-innerHTML</i>'
                  }
              }, 
          )
      }
  }
</script>

<style scoped>
.child {
    background: pink
}
.more {
    background: red
}
</style>