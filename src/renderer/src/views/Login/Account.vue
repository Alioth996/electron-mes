<template>
    <div flex-1 flex items-center justify-center bg="#ffffff20" p-x-15px>
        <el-form ref="formRef" :model="LoginForm" size="large" w-full>
            <el-form-item prop="employeeID" :rules="[
                { required: true },
                { type: 'number' },
            ]">
                <el-input v-model.number="LoginForm.employeeID" type="text" autocomplete="off" :prefix-icon="User"
                    @input="(v) => (LoginForm.employeeID = v.replace(/[^\d]/g, ''))" maxlength="6" minlength="5"
                    placeholder="工号 5-6位" />
            </el-form-item>

            <el-form-item prop="password" :rules="[
                { required: true },
            ]">
                <el-input v-model.number="LoginForm.password" type="password" autocomplete="off" show-password
                    :prefix-icon="Lock" placeholder="密码 默认666666" maxlength="12" minLength="6" />
            </el-form-item>
            <el-form-item>
                <el-button w-full type="primary" @click="submitForm(formRef)" :disabled="isDisabled">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
  
<script lang="ts" setup>
import { reactive, ref, computed } from 'vue'
import type { FormInstance } from 'element-plus'
import { User, Lock } from '@element-plus/icons-vue'


const formRef = ref<FormInstance>()

const LoginForm = reactive({
    employeeID: '',
    password: ''
})

const isDisabled = computed(() => LoginForm.employeeID.length < 5 || LoginForm.password == '')

const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!')
            return false
        }
    })
}

</script>
  