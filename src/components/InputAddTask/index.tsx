
import{Feather} from '@expo/vector-icons'
import {InputContainer,Input, InputBotton} from './styles';



export function InputAddTask(){
return(
 <InputContainer>
 
  <Input        
  placeholder='Digite a sua atividade :'
   placeholderTextColor="white"
     keyboardType='default'
          />
          <InputBotton>
          <Feather name='plus-square' size={24} color='white' />
            </InputBotton>
               </InputContainer>
 

);



}