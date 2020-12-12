var data = [
  {
    id: 1, name: "办公管理", parentId: 0,
    children: [
      {
        id: 2, name: "请假申请", parentId: 1,
        children: [
          { id: 4, name: "请假记录", parentId: 2 }
        ],
      },
      { id: 3, name: "出差申请", parentId: 1 }
    ]
  },
  {
    id: 5, name: "系统设置", parentId: 0,
    children: [
      {
        id: 6, name: "权限管理", parentId: 5,
        children: [
          { id: 7, name: "用户角色", parentId: 6 },
          { id: 8, name: "菜单设置", parentId: 6 }
        ]
      }
    ]
  },
];
// 树形数据转一维
function treeToArr (treeData) {
  var result = []
  var recursion = function (children) {
    children.forEach(item => {
      result.push(item)
      if (item.children && item.children.length > 0) {
        recursion(item.children)
      }
    })
  }
  recursion(treeData)
  return result
}
var yiweiArr = treeToArr(data)
// 根据ID获得IDpath
function getIdPath (yiweiArr, id) {
  var result = []
  result.unshift(id)
  var recusion = function (id) {
    var node = yiweiArr.find(item => item.id === id)
    if (node) {
      result.unshift(node.parentId)
      recusion(node.parentId)
    }
  }
  recusion(id)
  return result
}
console.log(getIdPath(yiweiArr,8));
// 获取指定ID的节点
function getChidlren(data, id) {
  var result = null // 返回节点
  var recursion = function (data) {
    data.forEach(item => {
      if (item.id === id) { 
        result = item;
      } else if (item.children && item.children.length > 0 && !result) {
        recursion(item.children); // 递归调用下边的子项
      }
    })
  }
  recursion(data); // 调用一下
  return result;
}
console.log(getChidlren(data, 3));



var treeData2 = [{ "id": "0000", "text": "R1", "children": [{ "id": "8978", "text": "Aad", "children": [{ "id": "2312", "text": "adaada", "children": [{ "id": "5154", "text": "asdsa" }] }, { "id": "4544", "text": "afasf", "children": [{ "id": "5236", "text": "afasf" }, { "id": "2328", "text": "afasf" }] }] }, { "id": "7867", "text": "R2", "children": [{ "id": "8767", "text": "afasf", "children": [{ "id": "2016", "text": "afafa" }, { "id": "2017", "text": "afasd" }] }, { "id": "7657", "text": "h", "children": [{ "id": "7867", "text": "afras" }] }] }] }];
console.log(treeData2);
function getIdPath (treeData, ) {

}
function buildArray(arrOrigin, id) {
  var arr = [] // 操作数组
    , re = [] // 结果  AND 是否匹配到
    , run = true // 运行

  // arrOrigin 解析
  arrOrigin.map(e => {
    arr.push({
      id: e.parent_id,
      children: [e],
      nextFuncTag: true, // 下一个函数的起点标识
    })
  })

  /**
   * 组查询 (无状态函数）
   * @e{Array} 下一个元素
   */
  function select(e) {
    if (!run) return
    // 截取段落
    e.nextFuncTag && (re = [])
    if (typeof (e.id) != "undefined") {
      re.push(e.id);
    }

    if (e.id == id) {
      run = false
    } else// 下一级查询
      if (e.children && e.children.length != 0) {
        e.children.map(select)
      }
  }

  arr.map(select)

  return re
}
console.log(buildArray(treeData2, 2312));//["0000", "8978", "2312"]