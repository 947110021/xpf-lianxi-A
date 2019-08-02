<template>
    <div class="header" v-if="$route.meta.flag">
        <div @click="areaFn" >送至：<span>{{$router.erary}}</span> ></div>
    </div>
</template>

<script>
export default {
    methods:{
        areaFn(){
            this.$router.push("/area")
        }
    }
}
</script>

<style scoped>

    .header{
        width: 100%;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #ccc;
    }

</style>
