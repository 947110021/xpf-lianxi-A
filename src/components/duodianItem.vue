<template>
  <div class="dls">
    <dl>
      <dt><img :src='"static/images/"+options.img' alt=""></dt>
      <dd>{{options.name}}</dd>
    </dl>
  </div>
</template>

<script>
export default {
    props:["options"]
};
</script>

<style scoped>
.dls {
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
}
dl {
  width: 15%;
  height: 100px;
  display: flex;
  float: left;
  flex-direction: column;
  text-align: center;
  margin-left: 15px;
}
dl dt {
  width: 100%;
  height: 60px;
  background: red;
}
dl dt img {
  width: 100%;
  height: 100%;
}
dl dd {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ccc;
  font-weight: bold;
  font-size: 14px;
}
</style>
