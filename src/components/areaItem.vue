<template>
    <div class="lis">
        <div class="liebiao">
            <div class="zuo" >
                <span @click="danxuanFn" :class="{active:options.flag}">
                    <i v-if="options.flag">√</i>
                </span>
            </div>
           <div class="you"> 
                <p>{{options.name}}</p>
                <p>{{options.tell}}</p>
                <p>{{options.dizhi}}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props:["options"],
    methods:{
        danxuanFn(){
        
            this.options.flag=!this.options.flag    
            this.$router.push({path:"/home/duodian?"+this.options.dizhi})
            this.options.flag=false
        }
    },
}
</script>

<style scoped>
    .liebiao{
        width: 100%;
        height: 80px;
    }
    .liebiao{
       display: flex;
       border-bottom: 1px solid #ccc;
       margin-top: 10px;
    }
    .zuo{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .zuo>span{
        display: inline-block;
        width: 30px;
        height: 30px;
        border: 1px solid #ccc;
        border-radius: 50%;
        text-align: center;
        line-height: 30px;
    }
    .you{
        flex: 9;
        padding-left: 10px;
        line-height: 23px;
    }
    .active{
        background: orange;
        color: #fff;
    }
    
</style>
