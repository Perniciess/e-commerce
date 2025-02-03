import { ROUTES } from '@/shared/routing/routes'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { authService } from '../api/authApi'
import { ISignInForm } from '../api/authTypes'

export function useSignInForm() {
	const router = useRouter()
	const { register, handleSubmit, reset } = useForm<ISignInForm>({
		mode: 'onChange',
	})

	const signInMutation = useMutation({
		mutationKey: ['sign-in'],
		mutationFn: (data: ISignInForm) => authService.signIn(data),
		onSuccess() {
			reset()
			router.push(ROUTES.HOME)
		},
	})

	const errorMessage = signInMutation.error ? 'Ошибка авторизации' : undefined

	return {
		register,
		errorMessage,
		handleSubmit: handleSubmit(data => signInMutation.mutate(data)),
		isPending: signInMutation.isPending,
	}
}
