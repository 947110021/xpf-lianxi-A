<template>
    <div class="duodain">
        <div class="swiper">
            <swiper :options="swiperOption">
                <swiper-slide v-for="(item,index) in 5" :key="index"><img src="static/images/swiper.png" alt=""></swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
        <div class="chajian">
            <duodian v-for="(item,index) in duodianJson" :key="index" :options="item"></duodian>
        </div>
        <div class="pinpai">
            <img src="static/images/bingshuang.png" alt="">
            <div class="spans">
                <span><img src="static/images/dl1.png" alt=""></span>
                <span><img src="static/images/dl2.png" alt=""></span>
            </div>
        </div>
       
    </div>
</template>


<script>
import duodian from '../../components/duodianItem'
import {mapState} from 'vuex'

export default {
    data(){
        return{
            swiperOption:{
                autoplat:true,
                pagination:{
                    el:".swiper-pagination"
                }
            }
        }
    },
    computed:{
        ...mapState(["duodianJson"])
    },
    components:{
        duodian
    }
}
</script>

<style scoped>
    .swiper-slide{
        width: 100%;
        height: 100px;
    }
    .swiper-slide>img{
        width: 100%;
        height: 100%;
    }
    .chajian{
        margin-top: 10px;
      height: 100%;
    }
    .pinpai{
        width: 100%;
        height: 50px;
    }
    .pinpai>img{
        width: 100%;
        height: 100%;
    }
    .spans{
        width: 100%;
        height: 150px;
        display: flex;
    }
    .spans>span{
        display: inline-block;
        width: 50%;
        height: 100%;
    }
     .spans>span>img{
         width: 100%;
         height: 100%;
     }
</style>
