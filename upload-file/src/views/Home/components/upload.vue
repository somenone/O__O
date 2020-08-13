<template>
  <div>
    <el-upload
      class="upload"
      action="http://localhost:3001/api/upload"
      :show-file-list="false"
      @on-success="upSuccess"
      @on-error="upError"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <!-- <div slot="tip" class="el-upload__tip"></div> -->
    </el-upload>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
    };
  },
  methods: {
    upSuccess(res,file,fileList){
      console.log(res);
    },
    upError(err, file, fileList){
      console.log(err);
    }
    // handleRemove(file, fileList) {
    //   console.log(file, fileList);
    // },
    // handlePreview(file) {
    //   console.log(file);
    // },
    // beforeRemove(file, fileList) {
    //   return this.$confirm(`确定移除 ${file.name}？`);
    // },
  },
};
</script>

<style scoped>
.upload{
  width: 200px;
}
</style>