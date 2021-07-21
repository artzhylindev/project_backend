<template>
  <div>
    <div class="mcontainer">
      <h1 class="title">
        all entries
      </h1>
    </div>
    
      <posts activeTab="homepage"></posts>

  </div>
</template>

<script>
import posts from '../../parts/postsContainer'

export default {

  components: {
    posts,
  },

  data() {
    return {

    };
  },

  methods: {

  },

  mounted() {

  },

}
</script>