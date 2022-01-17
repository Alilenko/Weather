import s from './DayInfoItem.module.scss';
import { GlobalSvgSelector } from '../../assets/icon/global/GlobalSvgSelector';
import { Item } from '../DayInfo/DayInfo';

interface Props {
    item: Item
}

export const DayInfoItem = ({item}: Props) => {
    return (
        <div className={s.info__item}>
        <div className={s.item__logo}>
        <GlobalSvgSelector id={item.id}/>
        </div>
        <div className={s.item__name}>{item.name}</div>
        <div className={s.item__deckr}>{item.value}</div>
    </div>
    )
}
