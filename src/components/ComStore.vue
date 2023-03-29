<script setup>
import { useStore } from 'vuex';

const store = useStore()

</script>
<template>
    <div class="Card">
        <div class="head">Store Vuex Data</div>
        <div class="content">
            Myname : {{ store.state.user.username }} - {{ store.state.user.lastname }}<br>
            Count : {{ store.state.count }}
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
    font-size: 28px;

    height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>