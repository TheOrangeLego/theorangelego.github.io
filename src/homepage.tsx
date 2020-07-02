import React from 'react'
import { Text, View } from 'react-native'

import { styles } from 'styles'

const Homepage = () => (
  <View style={styles.contentContainer}>
    <View style={styles.leftContainer}>
    </View>

    <View style={styles.centerContainer}>
      <Text style={styles.defaultText}>
        Hello world!!
      </Text>
    </View>

    <View style={styles.rightContainer}>
    </View>
  </View>
)

export default Homepage
