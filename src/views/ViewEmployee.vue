<template>
    <div id="view-employee">
        <h1  class="is-size-2 has-text-centered has-text-primary" style="margin-top:60px ">View Employee</h1>

        <div class="columns" style="margin-top:20px">
          <div class="column is-half is-offset-one-quarter">
          <!-- card -->
            <div class="card" style="padding:20px"> 
                <div class="card-image is-flex is-horizontal-center">
                  <figure class="image is-128x128">
                    <img src="https://res.cloudinary.com/dx9n8tsyu/image/upload/v1571179377/photo_qcal36.jpg" alt="Placeholder image">
                  </figure>
                </div>

                <div class="content" style="padding:20px">
                  <h1 class="is-size-3 has-text-centered has-text-primary">{{name}}</h1>
                  
                  <div class="columns is-centered">
                    <div class="column is-half">
                      <div class="field">
                        <label class="label">Departament</label>
                        <div class="control">
                          <input class="input" type="text" v-model="dept" disabled placeholder="Text input">
                        </div>
                      </div>

                       <div class="field">
                        <label class="label">Position</label>
                        <div class="control">
                          <input class="input" type="text" v-model="position" disabled placeholder="Text input">
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>

                <!-- buttons -->
                <div class="">
                  <div class="buttons is-flex is-horizontal-center">
                   <router-link :to="{name:'edit-employee', params:{employee_id : employee_id }}" class="button is-primary is-rounded is-block">
                     <b-icon style="margin: 0px 5px 0px 0px"
                          pack="fas"
                          icon="edit"
                          size="is-small">
                      </b-icon>Edit
                   </router-link>
                      <button class="button is-danger is-rounded" @click="alertCustomError">
                        <b-icon style="margin: 0px 5px 0px 0px"
                            pack="fas"
                            icon="trash"
                            size="is-small">
                        </b-icon>
                          Delete
                      </button>
                  </div>
                </div>
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
    nama:'view-employee',
    data() {
        return {
            employee_id : null,
            name: null,
            dept: null,
            position:null
        }
    },
    beforeRouteEnter (to, from, next) {
        db.collection('employees').where('employee_id','==',to.params.employee_id).get()
            .then((querySnapshot) => {
                querySnapshot.forEach(doc => {
                     next(vm => {
                         vm.employee_id = doc.data().employee_id
                         vm.name = doc.data().name
                         vm.dept = doc.data().dept
                         vm.position = doc.data().position
                        })
                });
            })
    },
    methods: {
      alertCustomError(){

        this.$buefy.dialog.confirm({
                    title: 'Information',
                    message: 'Are you sure to <b>delete user</b>',
                    confirmText: 'Delete Account',
                    type: 'is-danger',
                    hasIcon: true,
                    icon: 'times-circle',
                    iconPack: 'fa',
                    onConfirm: () => {

                      db.collection('employees').where('employee_id','==',this.$route.params.employee_id).get()
                        .then((querySnapshot) => {
                          querySnapshot.forEach((doc) => {
                            doc.ref.delete()
                            this.$router.push('/')
                            this.$buefy.toast.open('Employee deleted!')
                          })
                        })


                      }
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
</style>