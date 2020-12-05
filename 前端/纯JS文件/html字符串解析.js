var str = "<span id='detail' style='color:red;'>查看详情</span>";
// 思路：利用正则表达式，找出标签，然后用空字符串替换。
var pattern = /<[^>]+>/g;
str.match(pattern ); // 返回匹配到的标签数组 ["<span id='detail' style='color:red;'>", "</span>"]

// 判断是否有标签，完成替换取值
var str2= str.match(pattern ) && str.match(pattern ).length > 0 ? str.replace(/<[^>]+>/g, "") : str;//str2 = "查看详情"  

var pattern = /<[^>]+>/g;
var htmlStr = `<div id="asideProfile" class="aside-box">
<div class="profile-intro d-flex">
    <div class="avatar-box d-flex justify-content-center flex-column">
        <a href="https://blog.csdn.net/Zhang_h_" data-report-click="{&quot;mod&quot;:&quot;popu_379&quot;,&quot;spm&quot;:&quot;1001.2101.3001.4121&quot;,&quot;dest&quot;:&quot;https://blog.csdn.net/Zhang_h_&quot;,&quot;ab&quot;:&quot;new&quot;}">
            <img src="https://profile.csdnimg.cn/F/5/8/3_zhang_h_" class="avatar_pic" username="Zhang_h_">
        </a>
    </div>
</div>
<div class="aside-box-footer">
    <div class="badge-box d-flex">
        <div class="badge d-flex">
            <div class="icon-badge" title="签到新秀">
                <div class="mouse-box">
                    <img class="medal-img" data-report-click="{&quot;spm&quot;:&quot;3001.4296&quot;}" src="https://csdnimg.cn/medal/qiandao1@240.png" alt="签到新秀">
                </div>
            </div>
        </div>
    </div>
</div>
</div>`
htmlStr.match(pattern)










