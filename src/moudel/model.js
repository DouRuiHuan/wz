import Vue from "vue"
Vue.directive("gd",(el,binding)=>{
    var dis = Number(el.getAttribute("dis"));
    el.addEventListener("scroll",()=>{
        var str = el.scrollTop;
        if(str>dis){
            binding.value.flag = true;
        }else{
            binding.value.flag = false
        }
    })
})

Vue.filter("time",(value)=>{
    var time1= value;
    var time2=new Date().getFullYear()+"-"+('0'+(new Date().getMonth()+1))+"-"+new Date().getDate()+" "+new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
    var hs = (new Date(time2)-new Date(time1))
    var miao = (hs/1000).toFixed(0);
    var fenzhong = (miao/60).toFixed(0);
    var xiaoshi = (fenzhong/60).toFixed(0);
    var day = (xiaoshi/24).toFixed(0);
    if(time1>time2){
        alert("开始时间不能大于结束时间");
        return false;
    }
    if(fenzhong<60){
        return "刚刚"
    }else{
        if(xiaoshi<24){
            return xiaoshi+"小时前"
        }else{
            return day+"天前";
        }
    } 
})

Vue.directive("animation",(el,binding)=>{
    console.log(this.$refs.animation);
    
})


