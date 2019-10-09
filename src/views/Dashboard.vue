<template>
    <div id="dashboard">
       
        <h1>Dashboard</h1>

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
   
export default {
    nama:'dashboard',
    data() {
        return {
            
        }
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