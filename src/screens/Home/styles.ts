import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  eventName: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate:{
    color: '#6b6b6b',
    fontSize: 16,
  },
  eventInput:{
    height: 56,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    color:'#ffffff',
    padding: 16,
    flex: 1,
    marginRight: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
  buttonTouch:{
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31CF67",
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewForm:{
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42,
  },
  listEmptyText:{
    color: '#fff',
    fontSize:16,
    textAlign: 'center',
  }
})