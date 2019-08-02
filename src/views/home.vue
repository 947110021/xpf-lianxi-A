<template>
    <div>
        <div class="top">
            <router-link to="/home/duodian" tag="span">多点超市</router-link>
            <router-link to="/home/quanqiu" tag="span">全球精选</router-link>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

    .top{
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        position: sticky;
        top: 0;
        background: #fff;
        z-index: 2;
    }
    .top span{
        display: flex;
        height: 30px;
        font-weight: bolder;
        margin-left: 20px;
    }
    .router-link-active{
        color: red;
        border-bottom: 1px solid red;
    }
</style>
