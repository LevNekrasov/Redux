import { useDispatch } from 'react-redux';
import { Button } from 'antd';
import { faPen, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { removeService, resetForm, setForm } from '../actions/actionsCreater';

export default function ListItem({element}) {
  const dispatch = useDispatch()
  const { id, name, price } = element;

  const handleRemove = () => {
    dispatch(removeService(id));
    dispatch(resetForm())
  }

  const handleEdit = () => {
    dispatch(setForm(name, price, id));
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <Button onClick={() => handleRemove()}><FontAwesomeIcon icon={faTrashAlt}/></Button>
        <Button onClick={() => handleEdit()}><FontAwesomeIcon icon={faPen}/></Button> 
      </td>
    </tr>
  )
}