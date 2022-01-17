import TabItem from "../TabItem/TabItem"

export interface Tab {
    id: number,
    name: string,
    
}
const FilterTabs = (props: any) => {
    const tabs:Tab[] = [
        {
            id: 5,
            name: 'По дням'
        },
        {
            id: 6,
            name: 'Почасово'
        }
    ]
    return (
        <div>
            {
                tabs.map((tab: Tab) => (
                    <TabItem item={tab} key={tab.id}/>
                ))
            }
        </div>
    )
}

export default FilterTabs

