<template>
  <div>
    <el-tabs v-model="activeName" class="nav-tabs" @tab-click="handleClick">
      <el-tab-pane label="first" name="first"></el-tab-pane>
      <el-tab-pane label="second" name="second"></el-tab-pane>
      <el-tab-pane label="third" name="third"></el-tab-pane>
      <el-tab-pane label="fourth" name="fourth"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const activeName = ref('first')
const handleClick = (tab: string, event: Event) => {
  console.log(tab, event)
}
</script>

<style scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
