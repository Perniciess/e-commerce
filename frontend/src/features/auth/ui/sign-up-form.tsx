import { useSignUpForm } from '@/features/auth/lib/use-sign-up-form'
import { ROUTES } from '@/shared/routing/routes'
import { UiButton } from '@/shared/ui/ui-button'
import { UiLink } from '@/shared/ui/ui-link'
import { UiTextField } from '@/shared/ui/ui-text-field'

export function SignUpForm() {
	const { handleSubmit, isPending, register, errorMessage } = useSignUpForm()
	return (
		<form className='flex flex-col gap-3 text-center' onSubmit={handleSubmit}>
			<UiTextField
				label='Электронная почта'
				inputProps={{
					type: 'email',
					autoComplete: 'off',
					...register('email', { required: true }),
					className: 'rounded-md',
				}}
			/>
			<UiTextField
				label='Логин'
				inputProps={{
					type: 'login',
					autoComplete: 'off',
					...register('login', { required: true }),
					className: 'rounded-md',
				}}
			/>
			<UiTextField
				label='Пароль'
				inputProps={{
					type: 'password',
					autoComplete: 'off',
					...register('password', { required: true }),
					className: 'rounded-md',
				}}
			/>
			<UiButton disabled={isPending} variant='black' className='self-center'>
				Зарегистрироваться
			</UiButton>

			<p className='mt-3'>
				Уже есть аккаунт?
				<UiLink variant='gray' href={ROUTES.SIGNIN}>
					Вход
				</UiLink>
			</p>
			{errorMessage && <div className='text-rose-600'>{errorMessage}</div>}
		</form>
	)
}
