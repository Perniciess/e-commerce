import { UiLayoutUserPage } from "@/shared/ui/layouts/ui-layout-user-page";
import { UiTable } from "@/shared/ui/ui-table";

export default function UserHistoryPage() {
    const headers = ["Название", "Тип", "Бренд", "Стоимость", "Статус"];
    const data = [
        ["Air Force 1", "Кроссовки", "Nike", "9 929 ₽", "Доставлен"],
        ["Хлопковая футболка", "Футболка", "BALENCIAGA", "65 099 ₽", "Отменен"],
        ["Брюки из вискозы", "Брюки", "THEAMCO", "99 999 ₽", "Оформляется"],
    ];

    return (
        <UiLayoutUserPage
            title="История заказов"
            description="Отслеживайте все Ваши покупки."
        >
            <div className="rounded-lg overflow-x-auto">
                <UiTable headers={headers} data={data} className="" />
            </div>
        </UiLayoutUserPage>
    );
}
