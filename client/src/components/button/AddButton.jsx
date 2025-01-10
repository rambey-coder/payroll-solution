import { FaPlus } from 'react-icons/fa'
import Button from '.'

const AddButton = () => {
  return (
    <Button icon={<FaPlus/>} name={'Add'} style={{color: '#fff', backgroundColor:'#2b6ad0', width:'100px'}}/>
  )
}

export default AddButton