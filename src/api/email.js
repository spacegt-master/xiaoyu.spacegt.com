import axios from '../axios/index.js'

export function send(to, tip, title, messages) {
	return axios({
		url: 'https://message.yigee.cn/email/sendMessage',
		method: 'post',
		headers: {
			"Content-Type": 'multipart/form-data'
		},
		data: {
			to,
			tip,
			title,
			messages
		}
	})
}