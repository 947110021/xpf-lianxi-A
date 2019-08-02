<template>
    <div class="footer">
        <router-link to="/home" tag="span">配送到家</router-link>
        <router-link to="/fenlei" tag="span">分类</router-link>
        <router-link to="/huiyuan" tag="span">会员</router-link>
        <router-link to="/gouwuche" tag="span">购物车</router-link>
        <router-link to="/my" tag="span">我的</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

    .footer{
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid #ccc;
    }
    .footer>span{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .router-link-active{
        color: red;
    }
</style>
