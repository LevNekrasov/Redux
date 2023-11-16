import 'antd/lib/button/style';
import { Button, Input, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
// import './ServiceAdd.css';
import {
  changeInputValue,
  addService,
  resetForm,
  editService
} from '../actions/actionsCreater'

export default function Form() {
  const dispatch = useDispatch();
  const { name, price, clickedId } = useSelector(state => state.item);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    dispatch(changeInputValue(name, value));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!clickedId) {
      dispatch(addService(name, price));
      dispatch(resetForm());
    } else {
      dispatch(editService(name, price, clickedId));
      dispatch(resetForm());
    }
  }

  const handleCancel = (evt) => {
    dispatch(resetForm())
  }

  return(
    <form onSubmit={handleSubmit}>
      <Space style={{ paddingBottom: 20, marginLeft: 40, marginTop: 50 }}>
        <Input
          name="name"
          onChange={handleChange}
          value={name}
          style={{ width: 205}}
          placeholder='Введите наименование услуги'
        />
        <Input
          name="price"
          onChange={handleChange}
          value={price}   
          style={{ width: 205}}
          placeholder='Введите стоимость'
        />              
        <Button onClick={handleSubmit} type="primary">Save</Button>
        {clickedId && <button onClick={handleCancel} className="form__btn">Cancel</button>}
      </Space>
    </form>
  )
}