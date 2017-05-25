import vue from "vue";
import vuex from "vuex";

vue.use(vuex);


const store = new vuex.Store({

    state:{
        BrandIndex:"",//一类商品的下标
        shoplist:[],
        sizeIndex:[],
    },

    actions:{
        //接受从页面发的数据
        "BRAND_INDEX":function(store,payload){
            // console.log(payload + "商品下标");
            store.commit("BRAND_INDEX_MUTATION",payload);
        },

        "SIZE_INDEX":function(store,payload){
            console.log(payload + "尺码");
            store.commit("BRAND_INDEX_MUTATION",payload);
        },

        "ADD_SHOPCAR_ACTION":function(store,payload){
            // console.log(payload);
            store.commit("ADD_SHOPCAR_MUTATION",payload);

        },

        "DEL_SHOPCAR_ACTION":function(store,payload){
            // console.log(payload);
            //可以根据这参数去后台请求数据， 也可以在这里对数据进行加工
            //通过commit 方法把数据提交给mutations
            //
            store.commit("DEL_SHOPCAR_MUTATION",payload);
        },


    },

    mutations:{
        "BRAND_INDEX_MUTATION":function(state,payload){
            state.BrandIndex=payload;
        },

        "SIZE_INDEX_MUTATION":function(state,payload){
            state.sizeIndex.push(payload);
            // console(payload);
        },

        "ADD_SHOPCAR_MUTATION":function(state,payload){
            // state.shoplist.push(payload);
            console.log(payload);
            console.log(payload.brandLogoUrl);
            console.log(state.shoplist[0]);
             var shoplist = state.shoplist.filter(item=>item.image==payload.image);
            if(shoplist.length==0){
                state.shoplist.push(payload);
            }else{
                //num 加1
                shoplist[0].buyPeople++;
            }
        },
        "DEL_SHOPCAR_MUTATION":function(state,payload){
            // console.log(payload);
            // state.shoplist.splice(payload,1); //删除数据
            console.log(payload);
            state.shoplist.forEach((item,index)=>{
                if(item.image==payload.image){
                    state.shoplist.splice(index,1);
                    // state.shoplist[item].buyPeople=-1;
                }
            })
        },

    }
})

export default store;