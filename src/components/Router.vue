<template>
	<div>
		<h1>欢迎来到VUE的世界</h1>
		<ul>
			<li v-for="i in conf">
				<router-link :to="i.path" :name="i.name">{{ i.name }}</router-link> 
			</li>
		</ul>
	</div>
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
				},
				{
					path: '/grid',
					name: 'grid'
				},
				{
					path: '/elTable',
					name: 'elTable'
				},
				{
					path: '/edit',
					name: 'edit'
				}
			]
		}
	}
}
</script>








