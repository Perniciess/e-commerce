import { ResetPasswordForm } from '@/features/auth/ui/reset-password-form';
import { UiFormPageLayout } from '@/shared/ui/layouts/ui-layout-form-page';

export default function ResetPasswordPage() {
		return (
		<UiFormPageLayout
			title='Сброс пароля'
			form={<ResetPasswordForm />}
		/>
	)
}
