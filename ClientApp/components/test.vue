<template>
    <div>
        <h1>Counter</h1>

        <p>This is a simple example of a Vue.js component & Vuex</p>

        <p>
            Current count (Vuex): <strong>{{ currentCount }}</strong>
        </p>
        <p>
            Auto count: <strong>{{ autoCount }}</strong>
        </p>

        <button @click="incrementCounter()">Increment</button>
        <button @click="resetCounter()">Reset</button>
    </div>
</template>
<script src="../components/testTemplate.js"></script>
