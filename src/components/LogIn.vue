<template>
  <section>
    <el-row>
      <el-col>
        <div class="Container">
          <h1>Log In</h1>
        </div>
      </el-col>
      <el-col>
        <el-form ref="LogInFormRef" :model="logInForm" :rules="LogInFormRules">
          <el-form-item prop="UserName">
            <el-input
              v-model="logInForm.UserName"
              placeholder="Username"
              :prefix-icon="User"
            ></el-input>
          </el-form-item>
          <el-form-item prop="Password">
            <el-input
              v-model="logInForm.Password"
              placeholder="Password"
              :prefix-icon="Lock"
            ></el-input>
          </el-form-item>
          <el-button type="primary" @click="goToDisplayStudentInformation">Log In</el-button>
          <p>Don't have an account? <a>Sign Up</a></p>
        </el-form>
      </el-col>
    </el-row>
  </section>
</template>

<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { User, Lock } from '@element-plus/icons-vue'

interface LogInForm {
  UserName: string
  Password: string
}

const LogInFormRef = ref<FormInstance>()
const logInForm = reactive<LogInForm>({
  UserName: '',
  Password: '',
})

const LogInFormRules = reactive<FormRules<LogInForm>>({
  UserName: [{ required: true, message: 'Please input Username', trigger: 'blur' }],
  Password: [{ required: true, message: 'Please input Password', trigger: 'blur' }],
})

const router = useRouter()
const goToDisplayStudentInformation = () => {
  router.push('/goToDisplayStudentInformation')
}
</script>

<style>
body {
  height: 100%;
  width: 100%;
  background-image: url('src/assets/BackgroundImage.png');
  background-size: cover;
  background-color: #2148c0;
}

.Container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2vh;
  font-size: 25px;
  color: white;
}

.el-input__wrapper,
.el-button {
  width: 300px;
  height: 45px;
  background-color: transparent;
  border: 1px;
}

.el-button {
  background-color: white;
  color: black;
  /* margin-top: 2vh; */
  width: 300px;
}

.el-input::placeholder,
.el-button::placeholder {
  font-size: 14px !important;
  font-weight: 300;
}

.el-input__inner {
  color: white;
  font-size: 14px !important;
}
</style>
