<template>
  <el-row>
    <el-col :xs="24">
      <el-drawer
        :model-value="isOpenProfileDrawer"
        :before-close="handleCloseProfileDrawer"
        direction="ltr"
        class="demo-drawer"
        :size="drawerSize"
      >
        <div class="demo-drawer__content">
          <el-row>
            <el-col>
              <h1 :span="24">My Profile</h1>
            </el-col>
          </el-row>

          <el-form ref="AddStudentFormRef" :model="addStudentForm" :rules="AddStudentFormRules">
            <el-row>
              <el-col>
                <el-form-item props="FirstName">
                  <el-input v-model="addStudentForm.FirstName" placeholder="Firstname"></el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="10">
              <el-col :span="12">
                <el-form-item props="MiddleName">
                  <el-input v-model="addStudentForm.MiddleName" placeholder="Middlename"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item props="LastName">
                  <el-input v-model="addStudentForm.LastName" placeholder="Lastname"></el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="20">
              <el-col :span="12">
                <el-form-item prop="Birthday">
                  <el-date-picker
                    v-model="addStudentForm.Birthday"
                    type="date"
                    placeholder="Birth Date"
                    style="width: 100%"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item prop="Age">
                  <el-input v-model="addStudentForm.Age" placeholder="Age" type="number"></el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col>
                <el-form-item props="Address">
                  <el-input v-model="addStudentForm.Address" placeholder="Address"></el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="20">
              <el-col :span="12">
                <el-button>Submit</el-button>
              </el-col>
              <el-col :span="12">
                <el-button @click="handleCloseProfileDrawer">Cancel</el-button>
              </el-col>
            </el-row>
          </el-form>

          <!-- <el-form :model="form">
              <el-form-item label="Name" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off" />
              </el-form-item>
              <el-form-item label="Area" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="Please select activity area">
                  <el-option label="Area1" value="shanghai" />
                  <el-option label="Area2" value="beijing" />
                </el-select>
              </el-form-item>
            </el-form> -->
          <!-- <div class="demo-drawer__footer">
          <el-button @click="cancelForm">Cancel</el-button>
          <el-button type="primary" :loading="loading">
            {{ loading ? 'Submitting ...' : 'Submit' }}
          </el-button>
        </div> -->
        </div>
      </el-drawer>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { reactive, watch, ref } from 'vue'
import { defineProps, defineEmits } from 'vue'
import { useWindowSize } from '@vueuse/core'
import type { FormRules, FormInstance } from 'element-plus'

interface AddStudentForm {
  UserName: string
  FirstName: string
  MiddleName: string
  LastName: string
  Birthday: ''
  Age: string
  Address: string
}

const AddStudentFormRef = ref<FormInstance>()

const addStudentForm = reactive(<AddStudentForm>{
  UserName: '',
  FirstName: '',
  MiddleName: '',
  LastName: '',
  Birthday: '',
  Age: '',
  Address: '',
})

const AddStudentFormRules = reactive<FormRules<AddStudentForm>>({
  UserName: [{ required: true, message: 'Please input username', trigger: 'blur' }],
  FirstName: [{ required: true, message: 'Please input firstname', trigger: 'blur' }],
  MiddleName: [{ required: true, message: 'Please input middlename', trigger: 'blur' }],
  LastName: [{ required: true, message: 'Please input lastname', trigger: 'blur' }],
  Birthday: [{ required: true, message: 'Please pick a date', trigger: 'blur' }],
  Age: [{ required: true, message: 'Please input age', trigger: 'blur' }],
  Address: [{ required: true, message: 'Please input address', trigger: 'blur' }],
})

const { width } = useWindowSize()
const drawerSize = ref()

watch(width, (newWidth) => {
  drawerSize.value = newWidth <= 768 ? '100%' : '30%'
})

defineProps({
  isOpenProfileDrawer: Boolean,
})

const emits = defineEmits(['ProfilecloseDrawer'])

const handleCloseProfileDrawer = () => {
  emits('ProfilecloseDrawer')
}

// const formLabelWidth = '80px'
</script>

<style scoped>
.buttonContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}

:deep(.el-button) {
  width: 100%;
}
</style>
