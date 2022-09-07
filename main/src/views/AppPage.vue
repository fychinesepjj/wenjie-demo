<template>
  <div id="container"></div>
</template>

<script>
import { startApp } from 'wujie'
export default {
  name: 'AppPage',
  watch: {
    ['$route.params.name']: {
      handler(newVal, oldVal){
        if(newVal && oldVal) {
          this.getApp()
        }
      },
      deep: true,
      immediate: true
    }
  },
  beforeRouteEnter(to, from, next){
    next(vm => {
      vm.getApp()
    })
  },
  methods: {
    async getApp(){
      const { name, entry } = await this.get(this.$route.params.name)
      await startApp({
        name,
        url: entry,
        attrs: { src: "/empty.html" },
        sync: true,
        alive: true,
        el: document.getElementById('container')
      })
    },
    // 模拟请求
    async get(name){
      return new Promise(resolve => {
        let result = null
        if(name === 'A') {
          result = {
          name: 'A',
          entry: 'http://localhost:8081'
        }
      }

      if(name === 'B') {
        result =  {
          name: 'B',
          entry: 'http://localhost:8082'
        }
      }
        setTimeout(() => resolve(result), 100)
      })

    }
  }
}
</script>
