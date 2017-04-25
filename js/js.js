// 动态时间
function dateTime() {
    var da = new Date();
    var year = da.getFullYear();
    var month = da.getMonth() + 1;
    var day = da.getDate();

    var hour = da.getHours();
    var minute = da.getMinutes();
    var second = da.getSeconds();

    if(month<10){
        month = "0" + month;
    }
    if(hour<10){
        hour = "0" + hour;
    }
    if(minute<10){
        minute = "0" + minute;
    }
    if(second<10){
        second = "0" + second;
    }
    var currentTime = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
    document.getElementById("datetime").innerText = currentTime;
}
dateTime();
setInterval(dateTime, 500);

// 欢迎李磊
function welCome() {
    var text = document.getElementById("welcome").innerText;
    var a = text.charAt(0);
    var b = text.substring(1, text.length);
    var new_text = b + a;
    document.getElementById("welcome").innerText = new_text;
}
setInterval(welCome, 500);

// 搜索功能
function searchClick() {
    document.getElementById("search").submit();
}
document.getElementById("searchSubmit").onclick = searchClick;

function keyFocus(){
    var val = document.getElementById("searchKey").value;
    if(val == "请输入关键字"){
        document.getElementById("searchKey").value = "";
    }
}
function keyBlur() {
    var val = document.getElementById("searchKey").value;
    if(val.length<=0){
        document.getElementById("searchKey").value = "请输入关键字"
    }
}
document.getElementById("searchKey").onfocus = keyFocus;
document.getElementById("searchKey").onblur = keyBlur;

// 菜单动态效果
function changeMenu(currentTag) {
    var contentTag = currentTag.nextElementSibling;
    contentTag.classList.remove("hide");
    var itemList = contentTag.parentElement.parentElement.children;
    for(var i=0; i<itemList.length; i++){
        var loopItem = itemList[i];
        if(loopItem != contentTag.parentElement){
            loopItem.lastElementChild.classList.add("hide")
        }
    }
}

var menus = document.getElementsByClassName("title");
for(var i=0; i<menus.length ;i++){
    menus[i].onclick = function(){
        changeMenu(this);
    }
}


// 全选 反选 取消
function checkAll() {
    var trList = document.getElementById("tb").children;
    for(var i=0; i<trList.length; i++){
        var tr = trList[i];
        tr.firstElementChild.firstElementChild.checked = true;
    }
}
function reverseAll() {
    var trList = document.getElementById("tb").children;
    for(var i=0; i<trList.length; i++){
        var tr = trList[i];
        if(tr.firstElementChild.firstElementChild.checked){
            tr.firstElementChild.firstElementChild.checked = false;
        }else {
            tr.firstElementChild.firstElementChild.checked = true;
        }
    }
}
function removeAll() {
    var trList = document.getElementById("tb").children;
    for(var i=0; i<trList.length; i++){
        var tr = trList[i];
        tr.firstElementChild.firstElementChild.checked = false;
    }
}
document.getElementById("checkall").onclick = checkAll;
document.getElementById("removeall").onclick = removeAll;
document.getElementById("reverseall").onclick = reverseAll;

// 添加元素
function addElement() {
    var val = document.getElementById("inp").value;
    if(val){
        var tag = document.createElement("li");
        tag.innerText = val;
        document.getElementById("container").appendChild(tag);
        document.getElementById("inp").value = "";
    }

}
document.getElementById("addElement").onclick = addElement;

// 删除元素
function delElement() {
    document.getElementById("container").lastElementChild.remove();
    document.getElementById("deleted").innerText = "删除成功";
    function del() {
        document.getElementById("deleted").innerText = "";
    }
    setTimeout(del, 2000);
}
document.getElementById("delElement").onclick = delElement;

// 模态对话框
function showLayer() {
    document.getElementById("MiddleLayer").classList.remove("hide");
    document.getElementById("TopLayer").classList.remove("hide");
}
function hideLayer() {
    document.getElementById("MiddleLayer").classList.add("hide");
    document.getElementById("TopLayer").classList.add("hide");
}
document.getElementById("showLayer").onclick = showLayer;
document.getElementById("hideLayer").onclick = hideLayer;