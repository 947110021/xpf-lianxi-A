<template>
    <div class="area">
        <header>
            请选择
        </header>
        <div class="search">
            <input type="text" placeholder="小区、街道、大厦">
            <button>取消</button>
        </div>
        <div class="ding">
            定位到当前地址
        </div>
        <div class="history">
            <h3>历史地址</h3>
            <areaItem v-for="(item,index) in areaJson" :key="index" :options="item"></areaItem>
        </div>
        <button @click="newFn"> 新增地址</button>
     
    </div>
</template>

<script>
import areaItem from '../components/areaItem'
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return {
            dataJson:{}
        }
    },
    components:{
        areaItem,
        
    },
    computed:{
        ...mapState(["list",'areaJson'])
    },
    created(){
        this.getareaJson
        
        if(this.dataJson){
            this.dataJson.name=localStorage.lianxi,
            this.dataJson.tell=localStorage.shouji,
            this.dataJson.dizhi=localStorage.dizhi,
            this.areaJson.push(this.dataJson)
        }
    },
    methods:{
        ...mapActions(["getareaJson"]),
        newFn(){
            this.$router.push("/dizhi")
        }
    }
}
</script>

<style>
.area{
    width: 100%;
    height: 100%;
   overflow: auto;
}
    header{
  
        height: 40px;
        line-height: 40px;
        font-weight: bold;
        padding-left: 20%;
        border-bottom: 1px solid #ccc;
    }
    .search{
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
    }
    .search>input{
        flex: 8;
        height: 30px;
        margin-right: 10px;
           outline: none;
    }
    .search>button{
        flex: 2;
        height: 100%;
        border: 0;
        border-radius: 5px;
        color: #fff;
        outline: none;
        background: #ccc;
        font-size: 20px;
    }
    .ding{
   
        height: 50px;
        line-height: 50px;
        background: #eee;
        margin-top: 10px;
        padding-left: 20px;
    }
    .history h3{
        height: 40px;
        line-height: 40px;
        background:#ccc;
        padding-left: 20px;
    }
    button{
        width: 100%;
        height: 40px;
        outline: none;
        border: 0;
        color: red;
        font-size: 25px;
    }
</style>
