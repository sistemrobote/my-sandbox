import type { MenuItem as MenuItemType } from './data'
import { MenuItem } from './MenuItem'

export const MenuList = ({ items }: { items: MenuItemType[] }) => {
    return (
        <div>
            {items.map((item) => (<MenuItem item={item} />))}
        </div>)
}