import { StyleSheet } from "react-native";

export const taskStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.06)',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: '#262626',
    padding: 12,
    paddingRight: 8,
    borderRadius: 8,
    borderColor: '#333333',
    borderWidth: 1,
    marginBottom: 8,
  },
  containerCompleted: {
    backgroundColor: '#262626',
    borderColor: '#262626'
  },
  text: {
    textAlign: 'left',
    flex: 1,
    overflow: 'hidden',
    maxWidth: 235,
    color: '#F2F2F2'
  },
  textCompleted: {
    textDecorationLine: 'line-through',
    color: '#808080'
  }
})