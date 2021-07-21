<template>
  <div>
    <div class="mcontainer">
      <div class="wrapper_forms" v-show="formShow">
        <form @submit.prevent="addPost" class="post_form">
          <div class="form-group">
            <label for="title">title</label>
            <input id="title" v-model="post.title" autocomplete="off">
          </div>
          <div class="form-group">
            <label for="description">description</label>
            <textarea id="description" v-model="post.description" autocomplete="off"></textarea>
          </div>
          <button type="submit" class="btn_submit_form"> submit data</button>
        </form>
      </div>

      <div v-if="errored" class="alert alert-danger">
        the table has not loaded
      </div>

      <div v-else class="wrap_table_post" v-show="tablePosts">

        <div class="table_head">
          <div class="mcol col_id">#</div>
          <div class="mcol col_title">title</div>
          <div class="mcol col_description">description</div>
<!--          <div class="mcol col_btn" v-if="editingPost"></div>-->
        </div>

        <div class="table_body">
          <div v-for="post in posts" :key="post.id" class="table_row">
            <div class="mrow col_id">{{ post.id }}</div>
            <div class="mrow col_title">{{ post.title}}</div>

            <div class="description_wrapper">
              <div class="mrow col_description">{{ post.description }}</div>
              <div class="mrow col_btn" v-if="editingPost">
                <button @click="editPost(post)"
                        v-if="editingPost"
                        class="btn btn-success">
                  <img src="/dist/img/pen-solid.svg">
                </button>
                <button @click="deletePost(post.id)"
                        v-if="editingPost"
                        class="btn btn-danger">
                  <img src="/dist/img/trash-solid.svg">
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>

      <nav aria-label="..."  v-show="tablePosts">
        <ul class="pagination">

          <li :class="{disabled: !pagination.prev_page_url}"
              @click.prevent="getPosts(pagination.prev_page_url)"
              class="page-item">
            <a href="#" class="page-link">Prev</a>
          </li>


          <li :class="{disabled: !pagination.next_page_url}"
              @click.prevent="getPosts(pagination.next_page_url)"
              class="page-item">
            <a href="#" class="page-link" >Next</a>
          </li>

        </ul>
      </nav>
    </div>

  </div>
</template>


<script>
// import {api} from '../../../api/axiosService';
import axios from 'axios';


export default {

  data() {
    return {
      posts: [],
      post: {
        id: "",
        title: "",
        description: ""
      },
      post_id: "",
      pagination: {},
      edit: false,
      loading: true,
      errored: false,
      formShow: false,
      tablePosts: true,
      editingPost: false
    };
  },

  props: ['activeTab'],

  methods: {

    makePagination(response) {
      let pagination = {
        current_page: response.current_page,
        last_page: response.last_page,
        prev_page_url: response.prev_page_url,
        next_page_url: response.next_page_url
      }
      this.pagination = pagination
      console.log(response)
    },

    getPosts(page_url) {
      page_url = page_url || "http://127.0.0.1:8000/api/posts/"

      axios
        .get(page_url)
        .then(response => {
          console.log(response)
          this.posts = response.data.data
          this.makePagination(response.data)
        })
        .catch(error => {
          console.log(error)
          this.errored = true;
        })
        .finally(() => this.loading = false)
    },

    editPost(post) {
      this.formShow = true
      this.edit = true
      this.post.id = post.id
      this.post.title = post.title
      this.post.description = post.description
    },

    deletePost(id) {
      let a = id
      console.log(a)
      axios
        .delete(`http://127.0.0.1:8000/api/posts/${id}`)

        .then(response => {
          this.getPosts()
          console.log(response)
        })
        .catch(error => console.log(error))
    },

    addPost() {
      if (this.edit === false) {
        // console.log("this.post.description",this.post.description)
         axios
           .post("http://127.0.0.1:8000/api/posts/",{

              title: this.post.title,
              description: this.post.description
            })
            .then(response => {
              this.post.title = ""
              this.post.description = ""
              this.getPosts()

              console.log(response)
            })
            .catch(error => console.log(error))
      } else {
        console.log("this.post.description",this.post.id)
        axios
          .put(`http://127.0.0.1:8000/api/posts/${this.post.id}`, {
            title: this.post.title,
            description: this.post.description
          })
          .then(response => {
            this.post.title = ''
            this.post.description = ''
            this.edit = false
            this.getPosts()
            console.log(response)
          })
          .catch(error => {
            if (error.response.status === 422) {
              this.validationErrors = error.response.data.errors;
            }
            console.log(error)
          })
      }

    },

    handlerTab() {
      if (this.activeTab === "homepage") {
        this.formShow = false
      }
      if (this.activeTab === "edit") {
        this.formShow = false
        this.editingPost = true
      }
      if (this.activeTab === "adding") {
        this.formShow = true
        this.tablePosts = false
      }
    }
  },

  mounted() {
    this.getPosts()
    this.handlerTab()
  },

}
</script>
