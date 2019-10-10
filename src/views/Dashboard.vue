<template>
    <div id="dashboard">
       
        <h1 class="is-size-2 has-text-centered" style="margin-top:60px">Dashboard</h1>

        <!-- <ul>
            <li v-for="employee in employees" :key="employee.id">
                {{employee.name}}
            </li>
        </ul> -->
        <!-- <b-table style="margin-top:40px" :data="employees" :columns="columns"></b-table> -->
            <b-table :data="employees">
                <template slot-scope="props">
                    <b-table-column field="employee_id" label="ID" width="40" numeric>
                        <template slot="header" slot-scope="{ column }">
                            <b-tooltip :label="column.label" dashed>
                                {{ column.label }}
                            </b-tooltip>
                        </template> 
                        {{ props.row.employee_id }}
                    </b-table-column>

                    <b-table-column field="name" label="Name">
                        <template slot="header" slot-scope="{ column }">
                            <b-tooltip :label="column.label" dashed>
                                {{ column.label }}
                            </b-tooltip>
                        </template>
                        {{ props.row.name }}
                    </b-table-column>

                    <b-table-column field="dept" label="Departament">
                        <template slot="header" slot-scope="{ column }">
                            <b-tooltip :label="column.label" dashed>
                                {{ column.label }}
                            </b-tooltip>
                        </template>
                        {{ props.row.dept }}
                    </b-table-column>
                
                    <b-table-column field="position" label="Position">
                        <template slot="header" slot-scope="{ column }">
                            <b-tooltip :label="column.label" dashed>
                                {{ column.label }}
                            </b-tooltip>
                        </template>
                        {{ props.row.position }}
                    </b-table-column>

                    <b-table-column label="Actions">
                        <router-link :to="{ name:'view-employee',params:{employee_id :props.row.employee_id }}">
                            <b-icon
                                pack="fas"
                                icon="eye"
                                type="is-primary"
                                size="is-small">
                            </b-icon>
                        </router-link>
                    </b-table-column>

                </template>
            </b-table>
        <!-- flating button -->
        <div class="btn-float">
            <a class="float" >
                <b-icon class="my-float"
                    pack="fas"
                    icon="plus"
                    size="is-medium"
                    type="is-light">
                </b-icon>

            </a>
           

        </div>
    </div>
</template>

<script>
  import db from '../components/firebaseInit'; 
export default {
    nama:'dashboard',
    data() {
        return {
            employees:[],
            
        }
    },
    created() {
        db.collection("employees").orderBy('dept').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const  data = {
                    'id' : doc.id,
                    'employee_id': doc.data().employee_id,
                    'name': doc.data().name,
                    'dept':doc.data().dept,
                    'position':doc.data().position
                }

                this.employees.push(data);
            });
        });


    },
}
</script>

<style scoped>
.float{
	position:fixed;
	width:60px;
	height:60px;
	bottom:40px;
	right:40px;
	background-color:#7957d5;
	color:#FFF;
	border-radius:50px;
	text-align:center;
	box-shadow: 2px 2px 3px #999;
}
.my-float{
	margin-top:12px;
}

</style>