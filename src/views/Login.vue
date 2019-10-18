<template>
    <div id="login-employee">
         <h1  class="is-size-2 has-text-centered has-text-primary" style="margin-top:60px ">Login</h1>

        <div class="columns " style="margin-top:20px" >
          <div class="column is-half is-offset-one-quarter">
          <!-- card -->
            <div class="card shadow-card" style="padding:20px;"> 
                <form @submit.prevent="login()">
                    <!-- <div class="card-image is-flex is-horizontal-center">
                      <figure class="image is-128x128">
                        <img src="https://res.cloudinary.com/dx9n8tsyu/image/upload/v1571179377/photo_qcal36.jpg" alt="Placeholder image">
                      </figure>
                    </div> -->

                    <div class="content" style="padding:20px">
                      <!-- <h1 class="is-size-3 has-text-centered has-text-primary">{{name}}</h1> -->

                      <div class="columns is-centered">
                        <div class="column is-half">
                        
                          <b-field label="Email">
                              <b-input type="email"
                                  required
                                  v-model="user_name"
                                  icon-pack="fa"
                                  icon="envelope"
                                  placeholder="type your email"
                                  maxlength="40">
                              </b-input>
                          </b-field>

                          <b-field label="Password">
                              <b-input type="password"
                                  required
                                  placeholder="type you password"
                                  icon-pack="fa"
                                  icon="lock"
                                  v-model="password"
                                  password-reveal>
                              </b-input>
                          </b-field>

                          
                        </div>
                      </div>

                    </div>

                    <!-- buttons -->
                    <div class="">
                      <div class="buttons is-flex is-horizontal-center">
                       <button  type="submit" class="button is-primary is-rounded is-block">
                         <b-icon style="margin: 0px 5px 0px 0px"
                              pack="fas"
                              icon="check"
                              size="is-small">
                          </b-icon>Send
                       </button>
                          <router-link to="/" class="button is-danger is-rounded">
                            <b-icon style="margin: 0px 5px 0px 0px"
                                pack="fas"
                                icon="times"
                                size="is-small">
                            </b-icon>
                              Cancel
                          </router-link>
                      </div>
                    </div>
                </form>
            </div>
          <!-- </div> -->
            <!-- end card -->
          </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase';
export default {
    name:'login-employee', 
    data() {
        return {
            user_name: null,
            password:null,
        }
    },
    methods: {
        login(){
                // console.log(`Esto son los campos user name ${this.user_name} , password ${this.password}`)
          firebase.auth().signInWithEmailAndPassword(this.user_name,this.password)
                  .then( (user) => {
                    this.$buefy.toast.open({
                        message: 'Successful login!',
                        type: 'is-success'
                    })
                    this.$router.push('/')
                  },err =>{
                      this.$buefy.toast.open({
                          message: err.message,
                          type: 'is-danger'
                      })
                  })

        }
    },
}
</script>

<style scoped >
.is-horizontal-center{
justify-content: center;
align-items: center;
}
.shadow-card{
    box-shadow: 0px 6px 19px 0px rgba(193,193,193,1);
}
</style>