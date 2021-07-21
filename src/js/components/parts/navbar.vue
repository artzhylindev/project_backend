<template>
  <div>
    <header class="mainHeader">
      <div class="mcontainer">
        <nav class="nav_bar">
          <ul class="nav_list">

            <li class="tab_navigation">
              <router-link
                to="/"
                tag="button"
                class="link_navigation"
              >home
              </router-link>
            </li>

            <li class="tab_navigation">
              <router-link
                to="/edit"
                tag="button"
                class="link_navigation"
              >edit
              </router-link>
            </li>

            <li class="tab_navigation">
              <router-link
                to="/adding"
                tag="button"
                class="link_navigation"
              >add post
              </router-link>
            </li>

          </ul>
        </nav>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>


<script>
  export default {

  }
</script>