import { StyleSheet } from 'react-native'

const colors = {
  buttonBackground: '#323232',
  buttonBackgroundHover: '#222222',
  buttonText: '#FF8C00',
  buttonTextHover: '#FF8C00',
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Lucida Console, Courier, monospace',
    fontSize: 28,
  },
})

export { colors, styles }
