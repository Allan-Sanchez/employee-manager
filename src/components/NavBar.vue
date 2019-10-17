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
            <b-navbar-item tag="router-link" :to="{ path: '/new' }">
                New
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-light is-outlined" >
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light is-outlined">
                        <strong>Log in</strong>
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>

export default {
    data() {
        return {
            isOpen: false
        }
    },
}
</script>

<style >
</style>