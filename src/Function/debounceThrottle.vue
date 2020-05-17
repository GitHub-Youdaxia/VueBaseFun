<template>
	<div>
    <a href="https://www.jianshu.com/p/c8b86b09daf0">函数防抖和节流</a>
    <div>防抖是控制次数，节流是控制频率</div>
    <p>防抖，事件触发多次，控制想要的执行方法短时间只运行一次，控制次数(远程搜索输入框，输入触发请求可以用，短时间内输入多个字，最终只发一个请求)</p>
    <p>节流，事件触发多次，控制想要执行的方法，固定时间（比如1s内）只能只执行一次，控制频率</p>
	  <div>在前端开发的过程中，我们经常会需要绑定一些持续触发的事件，如 resize、scroll、mousemove 等等，但有些时候我们并不希望在事件持续触发的过程中那么频繁地去执行函数。</div>
    不防抖
    <div id="content1" class="test"></div>
    防抖
    <div id="content2" class="test" ></div>
    防抖 立即版
    <div id="content3" class="test" ></div>
    节流 时间戳版
    <div id="content4" class="test" ></div>
    节流 定时器版
    <div id="content5" class="test" ></div>
	</div>
</template>

<script>
/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
function debounce(func,wait,immediate) {
    let timeout;

    return function () {
        let context = this;
        let args = arguments;

        if (timeout) clearTimeout(timeout);
        if (immediate) {
            var callNow = !timeout;
            timeout = setTimeout(() => {
                timeout = null;
            }, wait)
            if (callNow) func.apply(context, args)
        }
        else {
            timeout = setTimeout(function(){
                func.apply(context, args)
            }, wait);
        }
    }

}
/**
 * @desc 函数节流
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param type 1 表时间戳版，2 表定时器版
 */
function throttle(func, wait ,type) {
  let previous,timeout
    if(type===1){
      previous = 0;
    }else if(type===2){
      timeout;
    }
    return function() {
        let context = this;
        let args = arguments;
        if(type===1){
            let now = Date.now();
            if (now - previous > wait) {
                func.apply(context, args);
                previous = now;
            }
        }else if(type===2){
            if (!timeout) {
                timeout = setTimeout(() => {
                    timeout = null;
                    func.apply(context, args)
                }, wait)
            }
        }
    }
}
export default {
	name: "debounceThrottle",
	title: '防抖和节流',
  data() {
    return {
      introduction: "",
      data: ""
    };
  },
  mounted() {
    this.bufangdou()
    this.fangdou()
    this.lijidebounce()
    this.shijianchuoThrottle()
    this.dingshiqiThrottle()
	},
  methods: {
		bufangdou(){
      let num = 1;
      let content = document.getElementById('content1');

      function count() {
          content.innerHTML = num++;
      };
      content.onmousemove = count;					
		},
		fangdou(){
      let num = 1;
      let content = document.getElementById('content2');

      function count() {
          content.innerHTML = num++;
      };
      content.onmousemove = debounce(count, 1000, false);					
		},
		lijidebounce(){
      let num = 1;
      let content = document.getElementById('content3');

      function count() {
          content.innerHTML = num++;
      };
      content.onmousemove = debounce(count, 1000,true);					
		},
		shijianchuoThrottle(){
      let num = 1;
      let content = document.getElementById('content4');

      function count() {
          content.innerHTML = num++;
      };
      content.onmousemove = throttle(count, 1000,1);					
		},
		dingshiqiThrottle(){
      let num = 1;
      let content = document.getElementById('content5');

      function count() {
          content.innerHTML = num++;
      };
      
      content.onmousemove = throttle(count, 1000,2);					
		},
	}
};
</script>

<style scoped>
.test {
  height:150px;line-height:150px;text-align:center; color: #fff;background-color:#ccc;font-size:80px;
}
  
</style>