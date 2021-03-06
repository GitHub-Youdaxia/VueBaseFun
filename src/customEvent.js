// 自定义事件
function EventTarget() {
    //事件处理程序数组集合
    this.handlers = {};
}

//自定义事件的原型对象
EventTarget.prototype = {
    //设置原型构造函数链
    constructor: EventTarget,
    //注册给定类型的事件处理程序
    //type->自定义事件类型，如click,handler->自定义事件回调函数
    addEvent: function (type, handler) {
        //判断事件处理函数中是否有该类型事件
        if (this.handlers[type] == undefined) {
            this.handlers[type] = [];
        }
        this.handlers[type].push(handler);
    },

    //触发事件
    //event为一个js对象，属性中至少包含type属性。
    fireEvent: function (event) {
        //模拟真实事件的event
        if (!event.target) {
            event.target = this;
        }
        //判断是否存在该事件类型
        if (this.handlers[event.type] instanceof Array) {
            var items = this.handlers[event.type];
            //在同一事件类型下可能存在多个事件处理函数，依次触发
            //执行触发
            items.forEach(function (item) {
                item(event);
            })
        }
    },

    //删除事件
    removeEvent: function (type, handler) {
        //判断是否存在该事件类型
        if (this.handlers[type] instanceof Array) {
            var items = this.handlers[type];
            //在同一事件类型下可能存在多个处理事件
            for (var i = 0; i < items.length; i++) {
                if (items[i] == handler) {
                    //从该类型的事件数组中删除该事件
                    items.splice(i, 1);
                    break;
                }
            }
        }
    }
}
var customEvent = new EventTarget();
export default customEvent
/*
//调用方法
function fun() {
    console.log('执行该方法');
}

function fun1(obj) {
    console.log('run ' + obj.min + 's');
}
var customEvent = new EventTarget();
customEvent.addEvent("run", fun); //添加事件
customEvent.addEvent("run", fun1); //添加事件

customEvent.fireEvent({
    type: "run",
    min: "30"
}); //执行该方法   123

customEvent.removeEvent("run", fun); //移除事件

customEvent.fireEvent({
    type: "run",
    min: "20"
}); //123  
*/