import { Text, TouchableOpacity, View, Image } from "react-native";
import Trash from '../../../assets/trash.png'
import Check from '../../../assets/check.png'
import Checked from '../../../assets/checked.png'
import { taskStyles } from "./styles";
import { TaskType } from "../../reducers/Tasks/reducer";

type TaskProps = Omit<TaskType, 'id'> & {
  completeTask(): void
  deleteTask(): void
}

export function Task({ isCompleted, task, completeTask, deleteTask }: TaskProps) {
  return (
    <TouchableOpacity style={{
      ...taskStyles.container,
      ...(isCompleted && taskStyles.containerCompleted)
    }} onPress={completeTask}>
      <View>
        {isCompleted ? <Image source={Checked} /> : <Image source={Check} />}
      </View>
      <Text style={{
        ...taskStyles.text,
        ...(isCompleted && taskStyles.textCompleted)
      }} numberOfLines={2}>
        {task}
      </Text>
      <TouchableOpacity onPress={(e) => {
        e.preventDefault()
        deleteTask()
      }}>
        <Image source={Trash} />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}
