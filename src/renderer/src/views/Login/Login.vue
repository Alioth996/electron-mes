<template>
    <div bg="#34495e" h-full flex items-center justify-center>
        <div w-600px h-400px rd-5px bg="#00000030" flex="col" box-border>
            <h2 h="60px" text-center style="line-height: 60px; letter-spacing: 3px;" bg="#2980b9" rd-2px color-white
                text-24px>
                登录MES系统</h2>
            <div flex flex-1 h-340px>
                <QrCode />
                <Account />
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import Account from './Account.vue';
import QrCode from './QrCode.vue';




</script>

<style scoped></style>