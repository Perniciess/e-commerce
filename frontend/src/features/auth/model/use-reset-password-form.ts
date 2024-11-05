import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { authResetPassword } from '@/shared/api/apiSlice'
import { toast } from 'react-toastify'


export function useSignInForm() {
	const { register, handleSubmit } = useForm<{
		email: string
	}>()

	const signInMutation = useMutation({
		mutationFn: authResetPassword,
		onSuccess() {},
		onError(error) {
			toast.error(error.message)
		}
	})

	const errorMessage = signInMutation.error ? 'Ошибка сброса пароля' : undefined

	return {
		register,
		errorMessage,
		handleSubmit: handleSubmit(data => signInMutation.mutate(data)),
		isPending: signInMutation.isPending,
	}
}
