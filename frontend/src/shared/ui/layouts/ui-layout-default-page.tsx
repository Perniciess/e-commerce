import { UiFooter } from "@/widgets/footer/ui-footer";
import { UiHeader } from "@/widgets/header/ui-header";

export function UiDefaultLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <UiHeader />
            <div className="content-container pt-20">{children}</div>

            <UiFooter />
        </>
    );
}
