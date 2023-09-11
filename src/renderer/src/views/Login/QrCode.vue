<template>
    <div flex-1 flex items-center justify-center>
        <div w="150px" h="150px" flex items-center justify-center rd-3px border="1px dotted #eee">
            <el-image style="width: 140px; height: 140px;" />
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { loadQrcode } from '../../api'

const imgUrl = ref('')

type TQrcodeRes = {
    code: number,
    message: string,
    qrcode_id: string,
    qrcode_img: string
}

const loadQrcodeImg = async () => {
    const { qrcode_img }: TQrcodeRes = await loadQrcode()

    imgUrl.value = qrcode_img

}

loadQrcodeImg()

</script>

<style scoped></style>