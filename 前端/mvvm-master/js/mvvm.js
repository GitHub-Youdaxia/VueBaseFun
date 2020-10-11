function MVVM(options) {
    this.$options = options || {};
    // 把options里的data赋值给this._data
    // 
    var data = this._data = this.$options.data;
    var me = this;

    // 数据代理
    // 实现 vm.xxx -> vm._data.xxx
    Object.keys(data).forEach(function(key) {
        me._proxyData(key);
    });
    // 初始化计算属性劫持，
    this._initComputed();

    observe(data, this);

    this.$compile = new Compile(options.el || document.body, this)
}

MVVM.prototype = {
    constructor: MVVM,
    $watch: function(key, cb, options) {
        // Watcher的作用是当this上的key发生变化时调用回调cb
        // 原本key已经在observe中遍历已经属性劫持了，这里再watcher一下，起到的效果是给该key的属性劫持所对应的的dep.subs.push(这个new Watcher)，
        // 当key值发生改变会，会调用dep.subs中的所有watcher里的cb，其他的cb是用来更新视图的，而这个cb里一般会修改this下的属性，触发这些属性的get，触发其对应的dep去发布消息，然后更新视图
        new Watcher(this, key, cb);
    },
    // 实现用this.someStr='aaa'就能相当于this._data.someStr = 'aaa',然后this._data 等同于this.$options.data
    // 遍历this._data里的key值，定义this[key]的get和set劫持，获取this[key]返回this._data[key],设置this[key]相当于设置this._data[key]
    _proxyData: function(key, setter, getter) {
        var me = this;
        setter = setter || 
        Object.defineProperty(me, key, {
            configurable: false,
            enumerable: true,
            get: function proxyGetter() {
                return me._data[key];
            },
            set: function proxySetter(newVal) {
                me._data[key] = newVal;
            }
        });
    },
    // 
    _initComputed: function() {
        var me = this;
        var computed = this.$options.computed;
        if (typeof computed === 'object') {
            Object.keys(computed).forEach(function(key) {
                Object.defineProperty(me, key, {
                    // 获取计算属性值时,会调用定义计算属性的get方法来返回值，而方法里会用到this._data里的其他值，触发其对应的get劫持
                    get: typeof computed[key] === 'function' 
                            ? computed[key] 
                            : computed[key].get,
                    set: function() {}
                });
            });
        }
    }
};