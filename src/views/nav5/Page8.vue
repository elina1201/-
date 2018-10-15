<template>
      <el-upload
    class="upload-demo"
    action="https://jsonplaceholder.typicode.com/posts/"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    multiple
    :limit="3"
    :on-exceed="handleExceed"
    :file-list="fileList">
    <el-button size="small" type="primary">点击上传</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
</template>
<script>
 export default {
    data() {
      return {
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    }
  }
</script>
<style scoped>
.register-box {
  width: 400px;
  margin: auto;
  text-align: center;
  position: absolute;
  top: 25%;
  bottom: 0;
  left: 0;
  right: 0;
}
.title {
  font-size: 28px;
  color: #333;
  margin-bottom: 25px;
}
.el-input {
  height: 40px;
  width: 300px;
  margin-bottom: 10px;
}
.el-input input {
  height: 40px;
}
.el-button--default {
  width: 300px;
  height: 40px;
  margin-top: 10px;
  background-color: #619ac5;
  border: 0;
  color: #333;
  box-shadow: 0 0 3px #333;
  font-size: 16px;
  letter-spacing: 8px;
}
.el-button--text {
  margin-top: 10px;
  margin-left: 0;
  color: #333;
}
</style>
