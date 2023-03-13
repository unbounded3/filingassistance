<template>
  <el-icon :size="size" :color="color">
    <component :is="name"></component>
  </el-icon>
</template>

<script>
import * as Icons from '@element-plus/icons-vue';
export default {
  name: "MyIcons",
  components: Icons,
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "",
    },
  },
}
</script>

<style scoped>

</style>