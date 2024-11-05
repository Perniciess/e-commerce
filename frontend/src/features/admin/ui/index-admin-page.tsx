import { UiCard } from "@/shared/ui/ui-card";

export const IndexAdminPage = () => {
    return (
        <div className="flex flex-row mt-4">
            <UiCard >
                <p>Количество пользователей</p>
				<p>453</p>
            </UiCard>

			<UiCard className='ml-4'>
                <p>Количество товаров</p>
				<p>500</p>
            </UiCard>
        </div>
    );
};
