import Button from "."
import { IoReturnDownBack } from "react-icons/io5";

const BackButton = () => {
  return (
    <Button icon={<IoReturnDownBack/>} name={'Back'} style={{color: '#fff', backgroundColor:'#18a558', width:'100px'}}/>
  )
}

export default BackButton