<template>
	<ul>
		<li v-for="i in conf">
			<router-link :to="i.path" :name="i.name">{{ i.name }}</router-link> 
		</li>
	</ul>
</template>

<script>
export default {
	name: 'router',
	data() {
		return {
			conf: [
				{
					path: '/code',
					name: 'code',
					islink: ''
				},
				{
					path: '/slide',
					name: 'silide',
					islink: ''
				},
				{
					path: '/jump',
					name: 'jump',
					islink: ''
				},
				{
					path: '/select',
					name: 'select'
				}
			]
		}
	}
}
</script>








