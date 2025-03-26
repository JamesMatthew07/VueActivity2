<template>
  <!-- <el-dialog :model-value="isProfileDialogOpen" title="Shipping address" width="800">
    <el-table :data="gridData">
      <el-table-column property="date" label="Date" width="150" />
      <el-table-column property="name" label="Name" width="200" />
      <el-table-column property="address" label="Address" />
    </el-table>
  </el-dialog> -->
  <div class="dialogContainer">
    <el-dialog
      :model-value="isProfileDialogOpen"
      title="Shipping address"
      width="500"
      :before-close="handleProfileDialogClose"
    >
      <el-form :model="form">
        <el-form-item label="Promotion name">
          <el-input v-model="form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Zones">
          <el-select v-model="form.region" placeholder="Please select a zone">
            <el-option label="Zone No.1" value="shanghai" />
            <el-option label="Zone No.2" value="beijing" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="handleProfileDialogClose">Cancel</el-button>
          <el-button type="primary" @click="dialogFormVisible = false"> Confirm </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { defineProps, defineEmits } from 'vue'

defineProps({
  isProfileDialogOpen: Boolean,
})

const emits = defineEmits(['closerProfileDialog'])

const handleProfileDialogClose = () => {
  emits('closerProfileDialog')
}

// const dialogTableVisible = ref(false)
const dialogFormVisible = ref(false)
// const formLabelWidth = '140px'

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

// const gridData = [
//   {
//     date: '2016-05-02',
//     name: 'John Smith',
//     address: 'No.1518,  Jinshajiang Road, Putuo District',
//   },
//   {
//     date: '2016-05-04',
//     name: 'John Smith',
//     address: 'No.1518,  Jinshajiang Road, Putuo District',
//   },
//   {
//     date: '2016-05-01',
//     name: 'John Smith',
//     address: 'No.1518,  Jinshajiang Road, Putuo District',
//   },
//   {
//     date: '2016-05-03',
//     name: 'John Smith',
//     address: 'No.1518,  Jinshajiang Road, Putuo District',
//   },
// ]
</script>
<style scoped>
:deep(.el-dialog) {
  border: 2px solid red;
}

:deep(.el-dialog__body) {
  height: 50vh;
  width: auto;
}
</style>
