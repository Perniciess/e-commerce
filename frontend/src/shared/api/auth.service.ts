import { removeFromStorage, saveTokenStorage } from './auth-token.service'
import { axiosClassic } from './interceptors'
import { IAuthForm, IAuthResponse } from './types/auth.types'

class AuthService {
	private SIGNIN_URL = '/auth/sign-in/'
	private SIGNUP_URL = '/auth/sign-up/'
	private REFRESH_TOKEN_URL = '/auth/refresh/'
	private LOGOUT_URL = '/auth/sign-out/'

	async signUp(data: IAuthForm) {
		const response = await axiosClassic.post<IAuthResponse>(
			this.SIGNUP_URL,
			data
		)

		if (response.data.accessToken) saveTokenStorage(response.data.accessToken)

		return response
	}

	async signIn(data: IAuthForm) {
		const response = await axiosClassic.post<IAuthResponse>(
			this.SIGNIN_URL,
			data
		)

		if (response.data.accessToken) saveTokenStorage(response.data.accessToken)

		return response
	}

	async getNewTokens() {
		const response = await axiosClassic.post<IAuthResponse>(
			this.REFRESH_TOKEN_URL
		)

		if (response.data.accessToken) saveTokenStorage(response.data.accessToken)

		return response
	}

	async logout() {
		const response = await axiosClassic.post<boolean>(this.LOGOUT_URL)

		if (response.data) removeFromStorage()

		return response
	}
}

export const authService = new AuthService()
