import vue from "vue";
import vuex from "vuex";

vue.use(vuex);


const store = new vuex.Store({

    state:{
        datalist:""
    },

    actions:{
        "ADD_SHOPCAR_ACTION":function(store,payload){
            console.log(payload + "222");
            //可以根据这参数去后台请求数据， 也可以在这里对数据进行加工
            //通过commit 方法把数据提交给mutations
            //
            store.commit("ADD_SHOPCAR_MUTATION",payload);
        },

        // "DEL_SHOPCAR_ACTION":function(store,payload){
        //     // console.log(payload);
        //     //可以根据这参数去后台请求数据， 也可以在这里对数据进行加工
        //     //通过commit 方法把数据提交给mutations
        //     //
        //     store.commit("DEL_SHOPCAR_MUTATION",payload);
        // }
    },

    mutations:{
        "ADD_SHOPCAR_MUTATION":function(state,shoplist){
            // console.log(payload);
            // 操作state数据
            state.datalist=shoplist;
            // var datalist = state.datalist.filter(item=>item.id==payload.id);
            // if(datalist.length==0){
            //     state.datalist.push(payload);
            // }else{
            //     //num 加1
            //     datalist[0].num++;
            // }

            // console.log(state.datalist);
        },

        // "DEL_SHOPCAR_MUTATION":function(state,payload){
        //     console.log(payload);

        //     state.datalist.splice(payload,1); //删除数据
        // }
    }
})

export default store;