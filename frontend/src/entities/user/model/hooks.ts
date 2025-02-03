import { userService } from '@/entities/user/api/api'
import { useQuery, useQueryClient } from '@tanstack/react-query'

export function useSessionQuery() {
	const { data, isPending } = useQuery({
		queryKey: ['profile'],
		queryFn: () => userService.getProfile(),
	})

	return { data, isPending }
}

export function useResetSession() {
	const queryClient = useQueryClient()
	return () => queryClient.removeQueries()
}
