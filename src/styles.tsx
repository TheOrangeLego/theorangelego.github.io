import { StyleSheet } from 'react-native'

const colors = {
  button: '#323232',
  buttonHighlight: '#222222',
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#424242',
    height: '100%',
    width: '100%',
    margin: '0em',
    padding: '0em',
  },
  headerContainer: {
    backgroundColor: '#323232',
    height: '80px',
    width: '100%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    justifyContent: 'space-evenly',
    maxWidth: '1800px',
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  leftContainer: {
    flex: 1,
    maxWidth: '300px',
    justifyContent: 'flex-end',
  },
  centerContainer: {
    flex: 3,
    justifyContent: 'center',
    maxWidth: '1500px',
  },
  rightContainer: {
    flex: 1,
    maxWidth: '300px',
    justifyContent: 'flex-start',
  },
  defaultText: {
    color: '#FF8C00',
    fontFamily: 'Lucida Console, Courier, monospace',
    fontSize: 16,
  },
})

export { styles, colors }
