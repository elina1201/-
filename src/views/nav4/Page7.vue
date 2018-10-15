<template>
  <el-transfer v-model="value1" :data="data"></el-transfer>
</template>

<script>
  export default {
    data() {
      const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `备选项 ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      return {
        data: generateData(),
        value1: [1, 4]
      };
    }
  };
</script>
<style scoped>
   .register-box{
      width:400px;
      margin:auto;
      text-align:center;
      position: absolute;
      top:25%;
      bottom:0;
      left:0;
      right:0;
	}
	 .title{
        font-size:28px;
        color:#333;
        margin-bottom:25px;
      }
      .el-input{
        height:40px;
        width:300px;
        margin-bottom:10px;
      }
      .el-input input{
        height:40px;
      }
      .el-button--default{
        width:300px;
        height:40px;
        margin-top:10px;
        background-color:#619ac5;
        border:0;
        color:#333;
        box-shadow:0 0 3px #333;
        font-size:16px;
        letter-spacing: 8px;
      }
      .el-button--text{
        margin-top:10px;
        margin-left:0;
        color:#333;
      }
</style>
