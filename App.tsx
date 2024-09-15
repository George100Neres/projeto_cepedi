import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Task } from './src/components/Task';
import { CardNumber } from './src/components/CardNumber';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';

export default function App() {
  const [tasks, setTasks] = useState<{ description: string; check: boolean }[]>([]);
  const [taskText, setTaskText] = useState("");

  function handleTaskAdd() {
    if (taskText.length === 0) {
      console.log('Campo de texto vazio!');
      return;
    }
    if (tasks.some((task) => task.description === taskText)) {
      console.log('Tarefa já cadastrada!');
      return;
    }

    const newTask = { description: taskText, check: false };
    setTasks([...tasks, newTask]);
    setTaskText('');
  }


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.InputContainer}>
        <TextInput
          style={styles.Input}
          placeholder="Digite a sua atividade:"
          placeholderTextColor="white"
          keyboardType="default"
          onChangeText={setTaskText}
          value={taskText}
        />

        <TouchableOpacity style={styles.InputButton} onPress={handleTaskAdd}>
          <Feather name="plus-square" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', gap: 16 }}>
        <CardNumber />
        <CardNumber />
        <CardNumber />
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Task task={item} />}
        ListEmptyComponent={() => (
          <View>
            <Text>Você ainda não cadastrou tarefas!</Text>
            <Text>Crie uma tarefa para iniciar</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28385e',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    gap: 16,
    paddingTop: 64,
  },

  InputContainer: {
    flexDirection: 'row',
    width: '100%',
  },

  Input: {
    flex: 1,
    padding: 16,
    color: '#fff',
    backgroundColor: '#444',
    borderRadius: 4,
  },

  InputButton: {
    backgroundColor: '#1E1E1E',
    padding: 16,
    borderRadius: 4,
  },
});