import './styles.css'
import { MenuList } from './MenuList'
import { menus } from './data'

export const TreeView = () => {
    return (<div><h2>Tree view</h2><MenuList items={menus} /></div>)
}