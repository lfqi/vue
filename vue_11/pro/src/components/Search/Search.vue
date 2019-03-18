<template lang="html">
   <div>
      <!-- <h1>我是查询</h1> -->
      <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>

      <mt-palette-button content="+" @expand="main_log('expand')" @expanded="main_log('expanded')" @collapse="main_log('collapse')"
         direction="rt" class="pb" :radius="80" ref="target_1" mainButtonStyle="color:#fff;background-color:#26a2ff;"
         style="left:30px;">
         <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(1)"></div>
         <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(2)"></div>
         <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(3)"></div>
      </mt-palette-button>
   </div>
</template>
<script>
   export default {
      // data() {
      //    return {
      //       msg: 'Welcome to Your Vue.js App'
      //    }
      // }
      methods: {
         onValuesChange(picker, values) {
            if (values[0] > values[1]) {
            picker.setSlotValue(1, values[0]);
            }
         },
         main_log(val) {
            console.log('main_log', val);
         },
         sub_log(val) {
            console.log('sub_log', val);
            this.$refs.target_1.collapse();
         }
      },
      data() {
         return {
            slots: [
            {
               flex: 1,
               values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
               className: 'slot1',
               textAlign: 'right'
            }, {
               divider: true,
               content: '-',
               className: 'slot2'
            }, {
               flex: 1,
               values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
               className: 'slot3',
               textAlign: 'left'
            }
            ]
         };
      }
   }
</script>
<style>
</style>
