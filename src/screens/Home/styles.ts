import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  header: {
    backgroundColor: '#0D0D0D',
    width: '100%',
    height: 173,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  form: {
    flexDirection: 'row',
    items: 'center',
    marginTop: -31,
  },
  input: {
    flex: 1,
    borderRadius: 6,
    borderColor: '#0D0D0D',
    borderWidth: 1,
    padding: 16,
    color: '#F2F2F2',
    backgroundColor: '#262626',
    marginRight: 4,
  },
  button: {
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
    padding: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus: {
    width: 16,
    height: 16,
  },
  headerItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 33,
    marginBottom: 20,
  },
  headerItemsDiv: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  headerText: {
    fontWeight: '700',
    fontSize: 14,
    color: '#4EA8DE'
  },
  purpleHeaderText: {
    color: '#8284FA'
  },
  headerNumber: {
    fontWeight: '700',
    color: '#D9D9D9',
    backgroundColor: '#333333',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
  },
  noTasksDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 208,
    borderTopWidth: 1,
    borderTopColor: '#333333'
  },
  noTasksHeadline: {
    color: '#808080',
    fontWeight: '700',
    fontSize: 14,
    marginTop: 16,
  },
  noTasksSubtitle: {
    fontWeight: '400',
    marginTop: 0
  }
});
