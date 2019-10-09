<template>
    <b-navbar class="is-primary" style="padding: 5px 20px;">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="../../public/employee.png"
                    alt="Employees"
                >
                <h1 class="is-size-4" style="margin-left:10px">Employees Manager</h1>
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item tag="router-link" :to="{ path: '/new' }">
                New
            </b-navbar-item>
            <b-navbar-item href="#">
                About
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-info">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                        Log in
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