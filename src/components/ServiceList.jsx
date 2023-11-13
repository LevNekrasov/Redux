import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../store/serviceList';
import { edit } from '../store/serviceAdd';
import { faPen, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ServiceList() {
  const items = useSelector((state) => state.serviceList)
  const dispatch = useDispatch()

  const handleRemove = (id) => {
    dispatch(remove(id))
  }

  const handleEdit = (id, name, price) => {
    dispatch(edit({ id, name, price }))
  }

  return(
    <ul style={{ listStyle: "none" }}>
      {items.map((o) => (
        <li key={o.id} style={{ marginTop: 10}}>
          <div style={{ display: "inline-block", width: 200 }}> {o.name} </div>
          <div style={{ display: "inline-block", width: 200 }}> {o.price} </div>
          <Button onClick={() => handleRemove(o.id)}><FontAwesomeIcon icon={faTrashAlt}/></Button>
          <Button onClick={() => handleEdit(o.id, o.name, o.price)}><FontAwesomeIcon icon={faPen}/></Button>          
        </li>
      ))}
    </ul>
  );
}