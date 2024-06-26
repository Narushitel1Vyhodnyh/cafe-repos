const axios = require('axios');
// вызываем переменную с токенном из .env
const API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
// создаем подключение клиента
const axiosClient = axios.create({
	baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL + '/api',
	headers: {
		Authorization: 'Bearer ' + API_TOKEN,
	},
});

const getMenu = () => axiosClient.get('/menyus?populate=*');
const getLink = () => axiosClient.get('/links?populate=*');

export default {
	getMenu,
	getLink,
};
