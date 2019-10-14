<template>
    <div id="new-employee">
        <h1  class="is-size-2 has-text-centered has-text-primary" style="margin-top:60px ">New Employee</h1>

        <div class="columns" style="margin-top:20px">
          <div class="column is-half is-offset-one-quarter">
          <!-- card -->
            <div class="card" style="padding:20px"> 
                <form @submit.prevent="addEmployee">
                    <div class="card-image is-flex is-horizontal-center">
                      <figure class="image is-128x128">
                        <img src="../../public/photo.jpg" alt="Placeholder image">
                      </figure>
                    </div>

                    <div class="content" style="padding:20px">
                      <!-- <h1 class="is-size-3 has-text-centered has-text-primary">{{name}}</h1> -->

                      <div class="columns is-centered">
                        <div class="column is-half">
                        
                          <div class="field">
                            <label class="label">ID</label>
                            <div class="control">
                              <input class="input" required type="text" v-model="employee_id"  placeholder="Type your ID">
                            </div>
                          </div>

                          <div class="field">
                            <label class="label">Nombre</label>
                            <div class="control">
                              <input class="input" required type="text" v-model="name"  placeholder="Type your Name">
                            </div>
                          </div>

                          <div class="field">
                            <label class="label">Departament</label>
                            <div class="control">
                              <input class="input" required type="text" v-model="dept"  placeholder="Type your Departament">
                            </div>
                          </div>

                           <div class="field">
                            <label class="label">Position</label>
                            <div class="control">
                              <input class="input" required type="text" v-model="position"  placeholder="Type your Position">
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>

                    <!-- buttons -->
                    <div class="">
                      <div class="buttons is-flex is-horizontal-center">
                       <button  type="submit" class="button is-primary is-rounded is-block">
                         <b-icon style="margin: 0px 5px 0px 0px"
                              pack="fas"
                              icon="save"
                              size="is-small">
                          </b-icon>Guardar
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
import db from '@/components/firebaseInit';
export default {
    nama:'new-employee',
    data() {
        return {
            employee_id : null,
            name: null,
            dept: null,
            position:null
        }
    },
    methods: {
        addEmployee(){
           db.collection('employees').add({
               employee_id:this.employee_id,
               name : this.name,
               dept : this.dept,
               position : this.position
           })
           .then(docRef =>{
               this.$router.push('/');
               this.$buefy.toast.open('Employee add successful!')
           })
           .catch(error => console.log(`Error ${error}`))
        }
    },
}
</script>


<style scoped >
.is-horizontal-center{
justify-content: center;
align-items: center;
}
</style>