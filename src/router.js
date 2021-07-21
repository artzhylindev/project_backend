import VueRouter from 'vue-router'
import Home from "./js/components/pages/posts/index"
import Edit from "./js/components/pages/edits/edit"
import AddingPost from "./js/components/pages/adding/addingPost"

export default new VueRouter ({
  routes: [
    {
      path: "",
      component: Home
    },
    {
      path: "/edit",
      component: Edit
    },
    {
      path: "/adding",
      component: AddingPost
    }
  ],
  mode: 'history'
})
