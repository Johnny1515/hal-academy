<script setup>
import { useStore } from 'vuex'
import { reactive } from 'vue';
const store = useStore()
const user = reactive({
    username: "",
    lastname: ""
})
function handleMore() {
    store.dispatch('changeName', user)
    user.username = ""
    user.lastname = ""
}

</script>
<template>
    <div class="Card">
        <div class="head">Component C </div>
        <div class="content">
            <div style="display: flex;gap:8px;">
                <input v-model="user.username" type="text" placeholder="Username">
                <input v-model="user.lastname" type="text" placeholder="Lastname">
            </div>
            Myname : {{ store.state.user.username }} - {{ store.state.user.lastname }}<br>

            <button @click="handleMore">Update</button>
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
    gap: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.content button {
    width: 100px;
    height: 40px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    color: white;
    background: hsl(120, 100%, 25%);
}

.content button:hover {
    color: black;
    background: hsl(120, 40%, 55%);
}

input {
    border-radius: 4px;
    border: 1px solid gray;
    padding: 10px;
    width: 200px;
    background-color: #f2f2f2;
    font-size: 16px;

}

input:focus {
    border: none;
}

input::placeholder {
    color: #aaa;


}
</style>