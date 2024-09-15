

import{Feather} from '@expo/vector-icons'
import { Container, TaskText, TaskDone, TaskDelet}from './styles'

export function Task(){

return(
<Container>


  <TaskDone>
<Feather name="square" size={24} color="white"
/>
 </TaskDone>
  <TaskDelet>
     <Feather name="trash-2" size={24} color="white"
       />
      </TaskDelet>


</Container>


);

}