import 'antd/lib/button/style';
import { Input, Space } from 'antd';
import { useDispatch } from 'react-redux';
import { filterList } from '../actions/actionsCreater';
import './ServiceFilter.css'

export default function AddForm() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(filterList(value));
  }

  return(
    <>
      <Space style={{ paddingBottom: 20, marginLeft: 40 }}>
        <Input
        name="filter"
        onChange={handleChange}
        placeholder='Фильтр по наименованию услуги'
        style={{ width: 490}}
        /> 
      </Space>
    </>
  )
}