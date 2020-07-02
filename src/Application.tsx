import { registerRootComponent } from 'expo'
import React from 'react'
import { View } from 'react-native'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { styles } from 'styles'
import Homepage from 'homepage'
import { Button } from 'components'

const homepageLink = '/'
const guidesLink   = '/guides'
const papersLink   = '/papers'
const projectsLink = '/projects'

const Application = () => (
  <View style={styles.rootContainer}>
    <BrowserRouter>
      <View style={styles.headerContainer}>
        <View style={styles.buttonContainer}>
          <Button link={homepageLink} title={"homepage"} />
          <Button link={guidesLink} title={"guides"} />
          <Button link={papersLink} title={"papers"} />
          <Button link={projectsLink} title={"projects"} />
        </View>
      </View>
      <Switch>
        <Route path={homepageLink} component={Homepage} exact />
      </Switch>
    </BrowserRouter>
  </View>
)

export default registerRootComponent( Application )
