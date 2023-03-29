<script setup>
import ComA from '../components/ComA.vue';
import ComB from '../components/ComB.vue';
import ComC from '../components/ComC.vue';
import ComStore from '../components/ComStore.vue';
</script>
<template>
    <div class="container">
        <ComStore class="col-12"></ComStore>
        <ComA class="col-4" />
        <ComB class="col-4" />
        <ComC class="col-4" />
    </div>
</template>


<style scoped>
.container {
    width: 1000px;
    margin: 10rem auto;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 12px
}

.col-12 {
    grid-column: span 12;
}

.col-4 {
    height: 200px;
    grid-column: span 6;
}
</style>