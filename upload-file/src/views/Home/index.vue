<template>
  <div class="home">
    <uploader class="uploader"></uploader>
    <selfinput :input="input" @log="log"></selfinput>

    <scqTable class="file-table" :data="data" :tableHeader="tableHeader">
      <template #url="url">
        <div class="option-cell">
          <a
          href="javascript:;"
          data-clipboard-action="copy"
          :data-clipboard-text="url.scope.row.fileurl"
          class="fileurl"
          id="copybtn"
          @click="copy"
        >复制</a>
        <a class="fileurl" target="_blank" :href="url.scope.row.fileurl">预览</a>
        </div>
      </template>
    </scqTable>
  </div>
</template>
<script>
import { scqTable } from "scqnpm";
import uploader from "./components/upload";
import selfinput from "./components/form"

// const btnCopy = new Clipboard("#copybtn");

export default {
  components: {
    scqTable,
    uploader,
    selfinput
  },
  data() {
    return {
      input:{
        in:''
      },
      tableHeader: [
        {
          label: "文件名",
          prop: "filename",
        },
        {
          label: "上传时间",
          prop: "time",
        },
        {
          label: "操作",
          prop: "fileurl",
          slot: "url",
          width:"100",
        },
      ],
      data: [],
    };
  },
  methods: {
    log(){
      console.log(this.input.in);
    },
    copy() {
      let clipboard = new this.$clipboard("#copybtn");
      clipboard.on("success", (e) => {
        this.$message({
          message: `复制成功${e.text}`,
          type: 'success'
        })
        clipboard.destroy();
      });
      clipboard.on('error', function(e) {
        this.$message({
          message: `复制失败`,
          type: 'error'
        })
    });
    },
  },
  async created() {
    this.data = await this.$http["get"]("/api/upload");
  },
};
</script>

<style scoped>
.home {
  max-width: 800px;
  margin: 0 auto;
}
.uploader {
  margin: 20px;
}
.fileurl {
  font-size: 12px;
}
.option-cell{
  display: flex;
  justify-content: space-around;
}
</style>
