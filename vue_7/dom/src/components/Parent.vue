<template>
    <div class="parent">
        <h1>我是父组件1</h1>
        <p>my Name Is : {{name}}</p>
        <button @click="change">change</button>
        <hr>

        <!-- <ChildrenOne @pro="name = $event" :myName="name"></ChildrenOne> -->
        <ChildrenOne @pro="cir($event)" :myName="name"></ChildrenOne>
        
        <hr>

        <ChildrenTwo></ChildrenTwo>

    </div>
</template>

<script>
import ChildrenOne from './ChildrenOne.vue'
import ChildrenTwo from './ChildrenTwo.vue'
    export default {
        data : function () {
            return {
                name : "hello"
            }  
        },
        methods : {
            change : function () {
                this.name = "world"
            }
            ,cir : function (data) {
                this.name = data;
            }
        },
        components : {
            ChildrenOne,
            ChildrenTwo
        }
    }
</script>

<style lang="css" scoped>
    .parent{
        font-size: 22px;
    }
</style>
