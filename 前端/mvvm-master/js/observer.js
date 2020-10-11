// 传给Observer的是一个对象，new Observer会遍历整个对象属性，每一个key拥有一个dep
function Observer(data) {
    this.data = data;
    this.walk(data);
}

Observer.prototype = {
    constructor: Observer,
    walk: function(data) {
        var me = this;
        Object.keys(data).forEach(function(key) {
            me.convert(key, data[key]);
        });
    },
    convert: function(key, val) {
        this.defineReactive(this.data, key, val);
    },

    defineReactive: function(data, key, val) {
        var dep = new Dep();
        dep.key = key
        DepArr.push(dep)
        var childObj = observe(val);

        Object.defineProperty(data, key, {
            enumerable: true, // 可枚举
            configurable: false, // 不能再define
            get: function() {
                if (Dep.target) {
                    dep.depend();
                }
                return val;
            },
            set: function(newVal) {
                if (newVal === val) {
                    return;
                }
                val = newVal;
                // 新的值是object的话，进行监听
                childObj = observe(newVal);
                // 通知订阅者
                dep.notify();
            }
        });
    }
};

function observe(value, vm) {
    if (!value || typeof value !== 'object') {
        return;
    }

    return new Observer(value);
};


var uid = 0;

function Dep() {
    this.id = uid++;
    this.subs = [];
}

Dep.prototype = {
    addSub: function(sub) {
        this.subs.push(sub);
    },

    depend: function() {
        Dep.target.addDep(this);
    },

    removeSub: function(sub) {
        var index = this.subs.indexOf(sub);
        if (index != -1) {
            this.subs.splice(index, 1);
        }
    },

    notify: function() {
        this.subs.forEach(function(sub) {
            sub.update();
        });
    }
};

Dep.target = null;
// this.$set原理
// <p>{{cusForm.name}}</p>
// 初始化时 this下的cusForm 设置为{},在模板中却用到了cusForm.name,但是这个并没有双向绑定，因为初始化时，cusForm.name并没有经过get和set劫持
// 编译过程中调用了this.cusForm.name，this.cusForm.age都会触发cusForm属性劫持get，在这个劫持中
// 在模板编译过程中会创建了cusForm.name所对应更新dom的watcher，cusForm.name会触发cusForm属性劫持get，这时候把watcher依赖依赖添加到cusForm所对应Observer实例,即childOb.dep.depend()
// 在调用this.$set(cusform,'name','小明')后
// 核心是执行了  
// defineReactive(ob.value, key, val) // 对属性进行劫持
// ob.dep.notify() // 发布后会更新dom,更新dom的watcher在之前编译过程中收集了 // name属性所对应的对象cusForm，cusForm.__ob__是其所对应的的Observer,ob是Observer的实例化对象，ob.dep收集了cusForm.name等在模板中使用时创建的watcher
// 自己的理解
// Observer给一个对象值value进行数据劫持,value.__ob__=Observer的实例化对象this,this.dep


/*
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};
*/
// src/core/observer/index.js
/*
export function set (target: Array<any> | Object, key: any, val: any): any {
    if (process.env.NODE_ENV !== 'production' &&
      (isUndef(target) || isPrimitive(target))
    ) {
      warn(`Cannot set reactive property on undefined, null, or primitive value: ${(target: any)}`)
    }
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.length = Math.max(target.length, key)
      target.splice(key, 1, val)
      return val
    }
    if (key in target && !(key in Object.prototype)) {
      target[key] = val
      return val
    }
    const ob = (target: any).__ob__
    if (target._isVue || (ob && ob.vmCount)) {
      process.env.NODE_ENV !== 'production' && warn(
        'Avoid adding reactive properties to a Vue instance or its root $data ' +
        'at runtime - declare it upfront in the data option.'
      )
      return val
    }
    if (!ob) {
      target[key] = val
      return val
    }
    defineReactive(ob.value, key, val)
    ob.dep.notify()
    return val
  }

  */