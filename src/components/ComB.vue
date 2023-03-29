<script setup>
import { useStore } from 'vuex'
const store = useStore()
function handleMore() {
    store.dispatch('decrement')
}
</script>
<template>
    <div class="Card">
        <div class="head">Component B</div>
        <div class="content">


            <button @click="handleMore">Decrement {{ store.state.count }}</button>
        </div>
    </div>
</template>
<style scoped>
.Card {
    width: 100%;
    height: 100%;
    margin: 12px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.head {
    padding: 8px 18px;
    background: green;
    text-align: center;
    color: white;
    font-size: 24px;

}

.content {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content button {
    width: 100px;
    height: 40px;
    border-radius: 4px;
    border: none;
    color: white;
    background: hsl(120, 100%, 25%);
    cursor: pointer;
}

.content button:hover {
    color: black;
    background: hsl(120, 40%, 55%);
}
</style>