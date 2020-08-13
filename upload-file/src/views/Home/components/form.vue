<template>
  <div>
    <input type="text" v-model="input.in">
    <button @click="test()">test</button>
  </div>
</template>

<script>
export default {
  props:["input","log"],
  data() {
    return {
      userid: "alksjdkj"
    }
  },
  methods: {
    test(){
      console.log(this.input.in);
      this.$emit("log")
      this.$router.push(`/hello/${this.userid}`)
    }
  },
}
</script>

<style scoped>

</style>