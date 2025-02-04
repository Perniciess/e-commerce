interface ISidebarItem {
    id: number
    label: string
    icon: () => JSX.Element
    href: string
}

interface ISidebarProps {
    items: ISidebarItem[]
    logo?: string
    sidebar_route: string
}