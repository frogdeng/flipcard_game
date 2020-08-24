<template>
  <div>
    <header>

      <div class="login_section">
          <a href="http://localhost:3013/auth/" class="go">Google 登入</a> |
          <a href="" class="go" @click.prevent="loginkkbox">kkbox 登入</a>
      </div>

      <div class="login_section">
          <div class="avatar"><img :src="getUserPicture" alt=""></div>
          <div class="name">{{getUserName}}</div>
      </div>
    </header>
      {{token_data}}
  </div>

</template>

<script>
import jwtDecode from 'jwt-decode'
import axios from 'axios'
import qs from 'qs'

export default {

  data () {
    return {
      token_data: '',
      access_token: '',
      token_type: '',
      expires_in: ''
    }
  },

  methods: {
    loginkkbox () {
      const data = qs.stringify({
        grant_type: 'client_credentials&client_id=b508366510546a1a2586ed8f529d6ebd&client_secret=65aac0b58b7f565ac99ab29269d946b5'
      })

      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        withCredentials: true

      }

      axios.post(
        'https://account.kkbox.com/oauth2/token',
        data,
        headers
      ).then((response) => {
        this.token_data = response
      })
    }

  },

  computed: {
    getUserName () {
      return this.$store.state.userName
    },
    getUserPicture () {
      if (!this.$store.state.userPicture) return 'https://bulma.io/images/placeholders/128x128.png'
      return this.$store.state.userPicture
    },
    isUserLoggedIn () {
      return this.$store.state.isUserLoggedIn
    }
  },
  mounted () {
    console.log(this.$route.query.id_token, 'id_token')
    console.log(this.$route.query.refresh_token, 'refresh_token')

    if (this.$route.query.id_token && this.$route.query.refresh_token) {
      const id_token_Decode = jwtDecode(this.$route.query.id_token)
      this.$store.commit('setUserLoggedIn', {
        id_token: this.$route.query.id_token,
        refresh_token: this.$route.query.refresh_token,
        userUid: id_token_Decode.user_id,
        userPicture: id_token_Decode.picture,
        userName: id_token_Decode.name
      })
      window.history.replaceState(null, null, window.location.pathname)
    }
  }
}
</script>
