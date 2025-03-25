<template>
  <el-row :gutter="20">
    <el-col :span="6" v-for="student in StudentList" :key="student">
      <el-card class="cardContainer">
        {{ student.UserName }}
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
const StudentList = [
  { UserName: 'James Matthew', Address: 'Sampaloc' },
  { UserName: 'James Matthew', Address: 'Sampaloc' },
  { UserName: 'James Matthew', Address: 'Sampaloc' },
  { UserName: 'James Matthew', Address: 'Sampaloc' },
]
</script>

<style>
.cardContainer {
  display: flex;
  flex-wrap: wrap;
}

.studentCard {
  display: flex;
  background-color: white;
  color: black;
  height: 20vh;
  width: 20vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid black;
  padding: 100px;
}
</style>
