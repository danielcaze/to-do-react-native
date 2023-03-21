import { Alert, FlatList, Image, Keyboard, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useState, useReducer, useRef, useEffect } from 'react'
import { Task } from "../../components/Task";
import { homeStyles } from "./styles";
import Logo from '../../../assets/logo.png'
import Plus from '../../../assets/plus.png'
import Clipboard from '../../../assets/clipboard.png'
import { TasksReducer, TaskType } from "../../reducers/Tasks/reducer";
import { handleAddNewTaskAction, handleCompleteTaskAction, handleDeleteTaskAction, handleSetInitialState } from "../../reducers/Tasks/actions";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Home() {
  const [taskList, dispatch] = useReducer(
    TasksReducer,
    [],
    () => []
  )
  const [newTaskName, setNewTaskName] = useState('')
  const firstRender = useRef(true)

  const taskLists = taskList.sort((taskA, taskB) => {
    if (taskA.task.toLowerCase() > taskB.task.toLowerCase()) {
      return 1
    }
    if (taskA.task.toLowerCase() < taskB.task.toLowerCase()) {
      return -1
    }
    return 0
  }).sort((taskA, taskB) => {
    if (taskA.isCompleted && !taskB.isCompleted) {
      return 1
    }
    if (!taskA.isCompleted && taskB.isCompleted) {
      return -1
    }
    return 0
  })

  const tasksFinished = taskList.reduce((acc, val) => {
    if (val.isCompleted) return ++acc
    return acc
  }, 0)

  function handleAddNewTask() {
    if (newTaskName.length === 0) return Alert.alert('', 'Nome de tarefa inválido', [
      {
        text: 'OK'
      }
    ])

    const newTask: TaskType = {
      id: String(taskList.length + 1),
      isCompleted: false,
      task: newTaskName,
    }

    dispatch(handleAddNewTaskAction(newTask))
    setNewTaskName('')
    Keyboard.dismiss()
  }

  function handleDeleteTask(id: string) {
    return () => {
      dispatch(handleDeleteTaskAction(id))
    }
  }

  function handleCompleteTask(id: string) {
    return () => {
      dispatch(handleCompleteTaskAction(id))
    }
  }

  function handleNewTaskChange(e: string) {
    setNewTaskName(e)
  }

  useEffect(() => {
    if (firstRender.current) {
      AsyncStorage.getItem('todo@tasks:v1.0.0').then(item => dispatch(handleSetInitialState(item ? JSON.parse(item) : [])))
      firstRender.current = false
      return
    }
    async function saveTasksOnStorage() {
      try {
        await AsyncStorage.setItem('todo@tasks:v1.0.0', JSON.stringify(taskList))
      } catch (error) {
        console.error(error)
      }
    }
    saveTasksOnStorage()
  }, [taskList])

  return (
    <View style={homeStyles.container}>

      <View style={homeStyles.header}>
        <Image source={Logo} />
      </View>
      <View style={homeStyles.body}>
        <View style={homeStyles.form}>
          <TextInput
            style={homeStyles.input}
            placeholderTextColor='#808080'
            placeholder='Adicione uma nova tarefa'
            onChangeText={handleNewTaskChange}
            value={newTaskName}
          />
          <TouchableOpacity style={homeStyles.button} onPress={handleAddNewTask}>
            <Image style={homeStyles.plus} source={Plus} />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1 }}>
          <View style={homeStyles.headerItems}>
            <View style={homeStyles.headerItemsDiv}>
              <Text style={{ ...homeStyles.headerText }}>Criadas</Text>
              <Text style={homeStyles.headerNumber}>{taskList.length}</Text>
            </View>
            <View style={homeStyles.headerItemsDiv}>
              <Text style={{ ...homeStyles.headerText, ...homeStyles.purpleHeaderText }}>Concluidas</Text>
              <Text style={homeStyles.headerNumber}>{tasksFinished}</Text>
            </View>
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={taskLists}
            keyExtractor={task => task.id}
            renderItem={({ item }) => (
              <Task
                deleteTask={handleDeleteTask(item.id)}
                completeTask={handleCompleteTask(item.id)}
                key={item.id}
                task={item.task}
                isCompleted={item.isCompleted}
              />
            )}
            ListEmptyComponent={() => (
              <View style={homeStyles.noTasksDiv}>
                <Image source={Clipboard} />
                <Text style={{ ...homeStyles.noTasksHeadline }}>Você ainda não tem tarefas cadastradas</Text>
                <Text style={{ ...homeStyles.noTasksHeadline, ...homeStyles.noTasksSubtitle }}>Crie tarefas e organize seus itens a fazer</Text>
              </View>
            )}
          />


        </View>
      </View>
    </View>
  )
}