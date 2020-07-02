import React from 'react'
import { TouchableHighlight, Text } from 'react-native'

import { colors, styles } from './styles'
import { Link } from 'react-router-dom'

interface Props {
  link: string,
  title: string,
}

const linkStyles = {
  color: colors.buttonText,
  textDecoration : 'none',
}

const Button = ( props: Props ) => (
  <TouchableHighlight style={styles.container}>
    <Text style={styles.text}>
      <Link to={props.link} style={linkStyles}>
        {props.title.toUpperCase()}
      </Link>
    </Text>
  </TouchableHighlight>
)

export default Button
