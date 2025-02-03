import { useResetSession } from '@/entities/user/model/hooks'
import { ROUTES } from '@/shared/routing/routes'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { authService } from '../api/authApi'

export function useSignOut() {
	const resetSession = useResetSession()
	const router = useRouter()

	const singOutMutation = useMutation({
		mutationKey: ['sign-out'],
		mutationFn: () => authService.logout(),
		async onSuccess() {
			router.push(ROUTES.HOME)
			resetSession()
		},
	})

	return {
		isLoading: singOutMutation.isPending,
		signOut: singOutMutation.mutate,
	}
}
