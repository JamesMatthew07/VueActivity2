import { defineStore } from 'pinia'

export interface SignUpFormUser {
  UserName: string
  FirstName: string
  MiddleName: string
  LastName: string
  Birthday: Date | string
  Age: string
  Address: string
  Password: string
  ConfirmPassword: string
}

export const InputStoreUser = defineStore('user', {
  state: () => ({
    users: JSON.parse(localStorage.getItem('users') || '[]') as SignUpFormUser[],
    currentUser: localStorage.getItem('currentUser') || null,
  }),

  actions: {
    SignUp(user: SignUpFormUser) {
      this.users.push(user)
      localStorage.setItem('users', JSON.stringify(this.users))
    },

    LogIn(UserName: string, Password: string): boolean {
      const FindUser = this.users.find(
        (user) => user.UserName == UserName && user.Password == Password,
      )
      if (FindUser) {
        this.currentUser = UserName
        localStorage.setItem('currentUser', UserName)
        return true
      }
      return false
    },

    getAllUser() {
      return this.users
    },

    updateStudentInfo(studentData: SignUpFormUser) {
      const index = this.users.findIndex((user) => user.UserName == studentData.UserName)
      if (index !== -1) {
        this.users[index] = studentData
      }
    },

    deleteStudent(index: number) {
      this.users.splice(index, 1)
    },

    logout() {
      this.currentUser = null
      localStorage.removeItem('currentUser')
    },
  },
})
