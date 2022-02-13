<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <el-form :model="formData">
      <el-form-item prop="test">
        <el-table :data="tableData">
          <el-table-column>
              <div>value: {{ isOnModification }}</div>
          </el-table-column>
        </el-table>
      </el-form-item>
    </el-form>
    <div> {{ isOnModification }} </div>
    <el-button @click="isOnModification = !isOnModification">
      change
    </el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const isOnModification = ref(false)

  const formData = { test: '' }

    const tableData = [
      { test: '' }
    ]

    return {
      isOnModification,
      formData,
      tableData
    }
  },
})
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.hidden-columns {
  display: none;
}
</style>
