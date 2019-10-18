<template>
    <b-navbar class="is-primary" style="padding: 5px 20px;">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://res.cloudinary.com/dx9n8tsyu/image/upload/v1571179436/employee_bbodqj.png"
                    alt="Employees"
                >
                <h1 class="is-size-4" style="margin-left:10px">Employees Manager</h1>
            </b-navbar-item>
        </template>
        <template slot="start">
            <!-- <b-navbar-item tag="router-link" :to="{ path: '/new' }">
                New
            </b-navbar-item> -->
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <router-link to="/singUp" class="button is-primary is-inverted" >
                        <strong>Sign up</strong>
                    </router-link>
                    <router-link to="/login" class="button is-primary is-inverted">
                        <strong>Log in</strong>
                    </router-link>
                    <button @click="logout()" class="button is-primary is-inverted">
                        <strong>Logout</strong>
                    </button>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
import firebase from 'firebase';

export default {
    data() {
        return {
            isOpen: false,
            isLoggedIn:false,
            currentUser:false
        }
    },
    methods: {
        logout(){
            firebase.auth().signOut().then(() => {
                this.$router.push('login');
            })
        }
    },
}
</script>

<style >
</style>