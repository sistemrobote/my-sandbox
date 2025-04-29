import type { MenuItem as MenuItemType } from './data'
import { MenuList } from './MenuList'

export const MenuItem = ({ item }: { item: MenuItemType }) => {

    return (
        <div>
            {item.label}
            <div style={{ paddingLeft: '20px' }}>{(item.children?.length) && <MenuList items={item.children} />}</div>
        </div>)
}