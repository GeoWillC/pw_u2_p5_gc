<template>
    <div class="option-container"></div>
    <ul>
        <li v-for="n in 4">nombre</li>
    </ul>
</template>
<script>

export default {

    data() {
        return {

        }
    }
}
</script>

<style scoped>
ul {
    list-style-type: none;
    align-items: center;
}

li {
    cursor: pointer;
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgb(204, 200, 200);
    width: 120px;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
}

li:hover {
    background-color: rgb(0, 0, 0, 0.1);
}

.option-container {
    display: flex;
    justify-content: center;
}
</style>