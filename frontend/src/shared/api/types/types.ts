export interface IAuthResponse {
	accessToken: string
	user: {
		id: string
		login: string
		email: string
	}
}
