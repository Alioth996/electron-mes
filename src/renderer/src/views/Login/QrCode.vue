<template>
    <div flex-1 flex="~ col" items-center justify-center>
        <div w="150px" h="150px" flex items-center justify-center rd-3px border="1px dotted #eee">
            <el-image style="width: 140px; height: 140px;" :src="imgUrl" alt="二维码登录" />
        </div>
        <div text-white text-16px p-t-10px style="letter-spacing: 2px;">扫码登录</div>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { loadQrcode } from '@/api'

const imgUrl = ref('')

const loadQrcodeImg = async () => {
    const { data } = await loadQrcode()
    imgUrl.value = data.result.qrcode_img

}

loadQrcodeImg()

</script>
