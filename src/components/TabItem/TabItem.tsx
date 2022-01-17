import {Tab} from '../FilterTabs/FilterTabs'
import './TabItem.scss'

interface Props {
    item: Tab
}
const TabItem = ({item}: Props) => {
    
    return (
        <button  className='tab_item'>
            {item.name}
        </button>
    )
}

export default TabItem
