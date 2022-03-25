import config from '#config'

export default async (ops) => await $fetch(config.BASE_URL + ops.url, {
	headers: {
		Authorization: `Bearer ${config.API_SECRET}`
	}
})
