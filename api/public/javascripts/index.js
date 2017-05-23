/**
 * Created by Administrator on 2017/4/17.
 */
$.ajax({
    url:"/api/restaurant",
    data:{id:"all"},
    dataType:"json",
    success:function(result){
        //console.log(result);
        //for(i = 0; i < result.length; i++){
        //    var oa = $("<a></a>");
        //    //$("merchant-ul").append("<li>result[i].name</li>");
        //    oa.append(result[i].name);
        //    $(".merchant-ul").append(oa);
        //     //console.log(result[i].name);
        //}
    }
})
$.ajax({
    url:"/api/category",
    data:{},
    dataType:"json",
    success:function(result){
        console.log(result);
        for(i = 0; i < result.length; i++){
            var oa = $("<a></a>");
            oa.append(result[i].name);
            $(".merchant-ul").append(oa);
            //console.log(result[i].name);
        }
    }
})