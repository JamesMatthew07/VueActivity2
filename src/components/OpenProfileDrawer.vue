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
                <el-form-item prop="UserName">
                  <el-input v-model="addStudentForm.UserName" placeholder="Username" disabled></el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col>
                <el-form-item prop="FirstName">
                  <el-input v-model="addStudentForm.FirstName" placeholder="Firstname"></el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="10">
              <el-col :span="12">
                <el-form-item prop="MiddleName">
                  <el-input v-model="addStudentForm.MiddleName" placeholder="Middlename"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item prop="LastName">
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
                <el-form-item prop="Address">
                  <el-input v-model="addStudentForm.Address" placeholder="Address"></el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="20">
              <el-col :span="12">
                <el-button type="primary" @click="handleSubmit">Submit</el-button>
              </el-col>
              <el-col :span="12">
                <el-button @click="handleCloseProfileDrawer">Cancel</el-button>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-drawer>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { InputStoreUser } from '@/stores/studentInfo'
import { useWindowSize } from '@vueuse/core'
import type { FormInstance, FormRules } from 'element-plus'
import { defineEmits, defineProps, reactive, ref, watch } from 'vue'

interface AddStudentForm {
  UserName: string
  FirstName: string
  MiddleName: string
  LastName: string
  Birthday: string | Date
  Age: string
  Address: string
}

const AddStudentFormRef = ref<FormInstance>()

const addStudentForm = reactive<AddStudentForm>({
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

const props = defineProps({
  isOpenProfileDrawer: Boolean,
  selectedStudent: Object as () => AddStudentForm,
})

const emits = defineEmits(['ProfilecloseDrawer'])

const inputStore = InputStoreUser()

const handleCloseProfileDrawer = () => {
  emits('ProfilecloseDrawer')
}

const handleSubmit = () => {
  AddStudentFormRef.value?.validate((valid) => {
    if (valid) {
      inputStore.updateStudentInfo(addStudentForm)
      handleCloseProfileDrawer()
    }
  })
}

// Watch for changes in the selected student and update the form with the selected student's data
watch(
  () => props.selectedStudent,
  (newVal) => {
    if (newVal) {
      addStudentForm.UserName = newVal.UserName
      addStudentForm.FirstName = newVal.FirstName
      addStudentForm.MiddleName = newVal.MiddleName
      addStudentForm.LastName = newVal.LastName
      addStudentForm.Birthday = newVal.Birthday
      addStudentForm.Age = newVal.Age
      addStudentForm.Address = newVal.Address
    }
  },
  { immediate: true }
)
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