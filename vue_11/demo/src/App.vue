<template>
   <div id="app">
      <p>
         <input v-model="user.username" type="text" name="name" value="">
      </p>
      <p>
         <input v-model="user.userpass" type="text" name="name" value="">
      </p>
      <p>
         <button @click="submit">提交</button>
      </p>
      <hr>
      <p>
         <button @click="fetchData">Get Data</button>
      </p>
      <ul>
         <li v-for="item in users">{{item.username}} --- {{item.userpass}}</li>
      </ul>
   </div>
</template>

<script>
   export default {
      data: function() {
         return {
            user: {
               username: "",
               userpass: ""
            },
            users: []
         }
      },
      methods: {
         submit: function() {
            this.$http.post("https://fir-9f54b.firebaseio.com/user.json", this.user).then(function(response) {
               console.log(response.data);
            }, function(error) {
               console.log(error);
            })
         },
         fetchData: function() {
            console.log("111");
            this.$http.get("https://fir-9f54b.firebaseio.com/user.json").then(response => {
               const data = response.json();
               return data;
               console.log(data);
            }).then(data => {
               const resultArray = [];
               for (let key in data) {
                  resultArray.push(data[key])
               }
               this.users = resultArray;
               console.log(data);
            })
         }
      }
   }
</script>

<style>
   #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
   }

   h1,
   h2 {
      font-weight: normal;
   }

   ul {
      list-style-type: none;
      padding: 0;
   }

   li {
      display: inline-block;
      margin: 0 10px;
   }

   a {
      color: #42b983;
   }

   p input {
      width: 300px;
      height: 30px;
      border: 2px solid black;
   }

   p button {
      width: 100px;
      height: 30px;
      font-size: 20px;
      font-weight: bold;
   }
</style>
