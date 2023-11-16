// import './List.scss';
import { useSelector } from 'react-redux';
import ListItem from './ListItem';

export default function List() {
  const { list } = useSelector(state => state);
  const { filter } = useSelector(state => state);

  const getList = (value, array) => {
    if (value) {
      const filteredArr = array.filter((el) => el.name.toLowerCase().includes(value.toLowerCase()));
      return filteredArr;
    }
    return array;
  }

  return (
    <table className="app__table table">
      <thead className="table__thead">
        <tr>
          <th className="thead__item">Наименование услуги</th>
          <th className="thead__item">Стоимость</th>
          <th className="thead__item">Действия</th>
        </tr>
      </thead>
      <tbody className="table__tbody">
        {list && getList(filter, list).map((el) => <ListItem key={el.id} element={el} />)}
      </tbody>
    </table>
  )
}