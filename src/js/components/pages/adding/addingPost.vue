<template>
  <div>
    <div class="mcontainer">
      <h1 class="title">
        adding posts
      </h1>
    </div>

    <posts activeTab="adding"></posts>

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