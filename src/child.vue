<template>
<span>孩子</span>
  <div>{{ v }}</div>
  <div>{{ a }}</div>
</template>

<script>
export default {
  name: "child",
  data(){
    return {
      a : 1
    }
  },
  props: {
    v  : {
      type : String,
      default : 'default'
    }
  },
  updated () {
    console.log("子组件更新了")
  }

}
</script>

<style scoped>

</style>
