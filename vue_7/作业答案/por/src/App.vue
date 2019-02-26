<template>
      <div class="container">
          <app-header></app-header>
          <hr>
          <div class="row">
              <Servers></Servers>
              <ServerDetails></ServerDetails>
          </div>
          <hr>
          <app-footer></app-footer>
      </div>
</template>

<script>

import Header from './Header.vue'
import Footer from './Footer.vue'
import Servers from './Servers.vue'
import ServerDetails from './ServerDetails.vue'

export default {
    components : {
        "app-header" : Header,
        "app-footer" : Footer,
        Servers,
        ServerDetails
    }
}
</script>

<style >

</style>
