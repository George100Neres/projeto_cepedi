

import styled from 'styled-components/native';




export const Container = styled.TouchableOpacity`

width: 100%;
height: 56px;
flex-direction: row;
justify-content: space-between;
align-items: center;
background-color:#304163;
border-radius:4px ;
overflow:hidden;
`;


export const TaskText =styled.Text`
 color:#fff;
 font-size: 16px;
 font-weight: 500;
`;
export const TaskDone =styled.TouchableOpacity`
width: 56PX;
height: 56px;
background-color: #E88A1A;
justify-content: center;
align-items: center;
`;
export const TaskDelet =styled.TouchableOpacity`
width: 56px;
height: 56px;
background-color: red;
justify-content:center;
align-items:center ;

`;