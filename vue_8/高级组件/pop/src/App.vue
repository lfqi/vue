<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">

                <button class="btn btn-primary" @click="selectedComponent = 'Red'">Load Blue Template</button>
                <button class="btn btn-success" @click="selectedComponent = 'Blue'">Load Green Template</button>
                <button class="btn btn-danger" @click="selectedComponent = 'Yellow'">Load Red Template</button>
                <hr>

                <component :is="selectedComponent">
                    <h1>Hello</h1>
                </component>

            </div>
        </div>
    </div>
</template>

<script>

import Red from './components/Red.vue'
import Blue from './components/Blue.vue'
import Yellow from './components/Yellow.vue'

export default {
    data : function() {
      return {
          selectedComponent : "Red"
      }
    },
    components : {
        Red,
        Blue,
        Yellow
    }
}
</script>

<style lang="css">
    .component{
       height: 80px;
       width: 60%;
       border: 2px solid purple;
       margin: 30px auto;
    }
</style>

