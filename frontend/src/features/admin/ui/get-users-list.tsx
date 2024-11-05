import { UiTable } from "@/shared/ui/ui-table";
import { useGetUsers } from "../model/use-get-users";
import { users_headers } from "./config";

export function UserList() {
    const { data: users } = useGetUsers();

    if (!users) return <div>Loading...</div>;

    const tableData = users.map((user) => [
        user.id,
        user.login,
        user.email,
        user.role,
    ]);

    return (
        <div>
            <div className="rounded-lg overflow-x-auto">
                <UiTable
                    headers={users_headers}
                    data={tableData}
                    className=""
                />
            </div>
        </div>
    );
}
