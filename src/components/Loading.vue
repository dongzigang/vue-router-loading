<template>
  <div class="loading">
    <p>loading...</p>
  </div>
</template>

<script>
import {mapState} from "vuex";
export default {
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.loading{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		text-align: center;
		padding-top: 200px;
		background:rgba(0,0,0,0.5);
		color: #fff;
	}
</style>