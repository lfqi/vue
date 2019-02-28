<template>
    <div class="container">
      <div class="container_1">
          <div class="from1">
            <h2>First Name</h2>
            <input
                    type="text"
                    class="form-control"
                    v-model="First">
          </div>
          <div class="from1">
              <h2>Last Name</h2>
              <input
                      type="text"
                      class="form-control"
                      v-model="Last">
          </div>
          <div class="from1">
              <h2>Mail</h2>
              <input
                      type="text"
                      class="form-control"
                      v-model="Mail">
          </div>
          <div class="from1">
              <h2>Password</h2>
              <input
                      type="text"
                      class="form-control"
                      v-model="Password">
          </div>
          <div class="from2">
              <label for="male">
                  <input
                          type="radio"
                          id="male"
                          value="Male"> Yes
              </label>
              <label for="female">
                  <input
                          type="radio"
                          id="female"
                          value="Female"> No
              </label>
          </div>
          <button class="btn">Submit the Form</button>
      </div>
      <div class="container_2">
          <p>First Name : {{First}}</p>
          <p>Last Name : {{Last}}</p>
          <p>Mail : {{Mail}}</p>
          <p>Password : {{Password}}</p>
          <p>Gender : </p>
      </div>
    </div>
</template>

<script>
export default {
    data : function () {
        return {
            First : "",
            Last : "",
            Mail : "",
            Password : ""
        }
    }
}
</script>

<style>
    .from1 h2{
        padding: 0 200px;
    }
    .from1 .form-control{
        width: 60%;
        height: 40px;
        border: 1px solid #cccccc;
        margin: 0 200px;
        font-size: 20px;
    }
    .from2{
        padding: 30px 200px;
    }
    .btn {
        width: 200px;
        height: 50px;
        background: purple;
        border-radius: 7px;
        border: none;
        cursor: pointer;
        font-size: 20px;
        color: #ffffff;
        margin: 0 200px;
    }
    .container_1{
        display: block;
    }
    .container_2{
        margin: 100px 500px;
        display: block;
    }
    .container_2 p{
        font-size: 20px;
        font-weight: bold;
    }
</style>
