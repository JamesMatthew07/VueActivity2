<template>
  <h1 style="margin-top: 20px; margin-bottom: 30px;">Student Information</h1>
  <el-row :gutter="20">
    <el-col :span="6" v-for="student in StudentList" :key="student"       
      :xs="24" 
      :sm="12" 
      :md="8" 
      :lg="6">
      <el-card>
        <div class="card-content">
          <h3 class="username">{{ student.UserName }}</h3>
          <p class="address">{{ student.Address }}</p>
        </div>
      </el-card>
    </el-col>
  </el-row>
  <div class="buttonContainer">
    <el-button type="primary" @click="openDrawer">Add Student</el-button> 
  </div>


  <!-- <DrawerVuer 
    v-if="isDrawerOpen" 
    :student="selectedStudent"
    @close="closeDrawer"
  /> -->
</template>

<script setup lang="ts">
// import DrawerVuer from './DraweVuer.vue'

const StudentList = [
  { UserName: 'James Matthew', Address: 'Sampaloc' },
  { UserName: 'James Matthew', Address: 'Sampaloc' },
  { UserName: 'James Matthew', Address: 'Sampaloc' },
  { UserName: 'James Matthew', Address: 'Sampaloc' },
  { UserName: 'James Matthew', Address: 'Sampaloc' },
  { UserName: 'James Matthew', Address: 'Sampaloc' },
  { UserName: 'James Matthew', Address: 'Sampaloc' },
]

// const isDrawerOpen = ref(false)
// const selectedStudent = ref(null)

// const openDrawer = (student) => {
//   selectedStudent.value = student
//   isDrawerOpen.value = true
// }

// const closeDrawer = () => {
//   isDrawerOpen.value = false
// }
</script>

<style scoped>
:deep(.el-card) {
  display: flex;
  height: 250px;
  margin: 10px;
  border: 2px solid red;
  justify-content: center;
  align-items: center;
}

:deep(.el-card__body) {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.buttonContainer {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

/* :deep(.el-button) {
  display: flex;
  justify-content: center;
  align-items: center;
} */

.card-content {
  text-align: center;
}

.username {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #303133;
}

.address {
  font-size: 1rem;
  color: #606266;
}
</style>
