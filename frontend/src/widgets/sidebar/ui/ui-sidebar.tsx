import { UiLink } from '@/shared/ui/ui-link'
import clsx from 'clsx'


export const UiSidebar = ({ items, logo, sidebar_route }: ISidebarProps) => {
    return (
        <aside className={clsx('flex h-screen w-64 flex-col border-r border-zinc-200 bg-white')}>
            <div className="flex h-16 items-center justify-center border-b border-gray-200">
                <UiLink variant="none" href={sidebar_route}>
                    <p className="items-center text-3xl text-gray-900">ITEMCLUB</p>
                    {logo}
                </UiLink>
            </div>

            <nav className="flex-1 overflow-y-auto">
                <ul className="space-y-2 p-4">
                    {items.map(item => (
                        <UiLink
                            variant="none"
                            key={item.id}
                            href={item.href}
                            className="flex items-center rounded-lg p-2 text-gray-700 hover:bg-gray-100"
                        >
                            <span className="mr-3">{item.icon()}</span>
                            <span>{item.label}</span>
                        </UiLink>
                    ))}
                </ul>
            </nav>
        </aside>
    )
}
