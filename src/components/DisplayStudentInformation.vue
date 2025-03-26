<template>
  <h1 style="margin-top: 20px; margin-bottom: 30px">Student Information</h1>
  <el-row :gutter="20">
    <el-col
      :span="6"
      v-for="student in StudentList"
      :key="student"
      :xs="24"
      :sm="12"
      :md="8"
      :lg="6"
    >
      <el-card>
        <div class="card-content">
          <h3 class="username">{{ student.UserName }}</h3>
          <p class="address">{{ student.Address }}</p>
          <div class="cardButtonContainer" style="margin-top: 20px">
            <el-row :gutter="10">
              <el-col :span="24">
                <el-button @click="openProfileDrawer" style="width: 100%">Update</el-button>
              </el-col>
              <el-col :span="24">
                <el-button style="width: 100%">Delete</el-button>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
  <div class="buttonContainer">
    <el-button type="primary" @click="openDrawer">Add Student</el-button>
    <el-button type="primary" @click="openProfileDialog">Check my Profile</el-button>
  </div>

  <DrawerVuer :isOpen="isDrawerOpen" @closeDrawer="handleCloseDrawer" />
  <OpenProfileDrawer
    :isOpenProfileDrawer="isProfileDrawerOpen"
    @ProfilecloseDrawer="handleProfileCloseDrawer"
  ></OpenProfileDrawer>
  <MyProfileDialog
    :isProfileDialogOpen="isDialogOpen"
    @closerProfileDialog="handleDialogCloser"
  ></MyProfileDialog>
</template>

<script setup lang="ts">
import DrawerVuer from './DraweVuer.vue'
import MyProfileDialog from './MyProfileDialog.vue'
import OpenProfileDrawer from './OpenProfileDrawer.vue'
import { ref } from 'vue'

const StudentList = [
  { UserName: 'James Matthew', Address: 'Sampaloc' },
  { UserName: 'James Matthew', Address: 'Sampaloc' },
  { UserName: 'James Matthew', Address: 'Sampaloc' },
  { UserName: 'James Matthew', Address: 'Sampaloc' },
  { UserName: 'James Matthew', Address: 'Sampaloc' },
  { UserName: 'James Matthew', Address: 'Sampaloc' },
  { UserName: 'James Matthew', Address: 'Sampaloc' },
]

const isDrawerOpen = ref(false)
const isProfileDrawerOpen = ref(false)
const isDialogOpen = ref(false)

const openDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value
  console.log('Open Drawer:', isDrawerOpen.value)
}

const openProfileDrawer = () => {
  isProfileDrawerOpen.value = !isProfileDrawerOpen.value
  console.log('Open Drawer:', isProfileDrawerOpen.value)
}

const openProfileDialog = () => {
  isDialogOpen.value = !isDialogOpen.value
  console.log('Close Drawer:', isDialogOpen.value)
}

const handleCloseDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value
  console.log('Close Drawer:', isDrawerOpen.value)
}

const handleProfileCloseDrawer = () => {
  isProfileDrawerOpen.value = !isProfileDrawerOpen.value
  console.log('Close Drawer:', isProfileDrawerOpen.value)
}

const handleDialogCloser = () => {
  isDialogOpen.value = !isDialogOpen.value
  console.log('Close Drawer:', isDialogOpen.value)
}
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
