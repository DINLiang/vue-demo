<template>
	<div>
		<p @click="showName">this is show a demo : {{ name }}</p>
	</div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
	computed: mapGetters([
		'name'
	]),
	methods: mapActions([
     'showName'
  ]),
}

</script>

<style scoped>
	p {
		font-size: 20px;
		color: blue;
	}
</style>