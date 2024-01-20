<template>
    <div class="container">
        <div class="imagen"><img :src="urlImg" alt="No se puede"></div>
        <label for="">{{ texto }}</label>
    </div>
   
</template>
<script>
export default {
    props: {
        texto: {
            type: String
        },
        urlImg: {
            type: String
        }
    }
}
</script>

<style >
img {
    width: 200px;
    height: 200px;
}
</style>