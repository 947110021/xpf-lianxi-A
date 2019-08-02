<template>
    <div class="dizhi">
        <div class="box">
           <p> <span>联系人</span><input type="text" placeholder="请输入联系人" name="" id="" v-model="lianxi"><br></p>
            <p><span>手机号</span><input type="text" placeholder="请输入手机号 " name="" id="" v-model="shouji"><br></p>
            <p> <span>地址</span><input type="text" placeholder="地址" name="" id=""  v-model="dizhi"><br></p>
            <p><span>详细地址</span><input type="text" name="" placeholder="请输入详细信息" id=""><br></p>
            <button @click="clickFn">完成</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            lianxi:"",
            shouji:"",
            dizhi:""
        }
    },
    methods:{
        clickFn(){
            if(this.lianxi){
                if(this.shouji){
                    if(this.dizhi){
                        localStorage.lianxi=this.lianxi
                        localStorage.shouji=this.shouji
                        localStorage.dizhi=this.dizhi
                        this.$router.push("/area")
                    }else{
                    alert("请输入地址")
                    }
                }else{
                    alert("请输入手机号")
                }
            }else{
                alert("请输入练习人")
            }
        }
    }
}
</script>

<style scoped>
.dizhi{
     width: 100%;
    height: 100%;
}
    .box{
        width: 100%;
        height: 100%;
    }
    .box p{
        width:99%;
        height: 50px;
        line-height: 50px;
        border: 1px solid #ccc;
        display: flex;
    }
    .box p input{
        flex: 8;
        outline: none;
        border:0;
        font-size: 20px;
    }
    .box p span{
        flex: 2
    }
    button{
        width: 100%;
        height: 40px;
        outline: none;
        color: red;
        background: #eee;
        margin-top: 20px;
        border: 0;
        font-size: 20px;
        
    }
</style>
