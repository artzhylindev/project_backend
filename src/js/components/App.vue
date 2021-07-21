<template>
  <div>
    <div class="mainWrapper">
      <div class="contentWrapper">
        <mainHeader></mainHeader>
      </div>
    </div>
  </div>
</template>


<script>
import mainHeader from './header/mainHeader.vue'

export default {

  components: {
    mainHeader,

  },

  data() {
    return {

    }
  },

  methods: {

  },
}
</script>

<style lang="scss">
@import "./src/scss/app";
</style>
