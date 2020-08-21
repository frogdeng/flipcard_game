<template>
  <div>
    <header>

      <div class="login_section">
          <a href="http://localhost:3013/auth/" class="go">Google 登入</a> | 
          <a href="" class="go" @click="loginkkbox">kkbox 登入</a>
      </div>

      <div class="login_section">
          <div class="avatar"><img :src="getUserPicture" alt=""></div>
          <div class="name">{{getUserName}}</div>
      </div>
    </header>
  </div>
</template>

<script>
import jwtDecode from 'jwt-decode'

export default {

  data () {
    return {

    }
  },

  methods: {
    loginkkbox () {
    }

  },

  computed: {
    getUserName () {
      return this.$store.state.userName
    },
    getUserPicture () {
      if (!this.$store.state.userPicture) return "https://bulma.io/images/placeholders/128x128.png"
      return this.$store.state.userPicture
    },
    isUserLoggedIn () {
      return this.$store.state.isUserLoggedIn
    },
  },
  mounted () {
    console.log(this.$route.query.id_token,'id_token')
    console.log(this.$route.query.refresh_token,'refresh_token')

    if (this.$route.query.id_token && this.$route.query.refresh_token) {
      const id_token_Decode = jwtDecode (this.$route.query.id_token)
      this.$store.commit('setUserLoggedIn', {
        id_token: this.$route.query.id_token,
        refresh_token: this.$route.query.refresh_token,
        userUid: id_token_Decode.user_id,
        userPicture: id_token_Decode.picture,
        userName: id_token_Decode.name
      })
      window.history.replaceState(null, null, window.location.pathname)
      return
    }
  }
}
</script>
