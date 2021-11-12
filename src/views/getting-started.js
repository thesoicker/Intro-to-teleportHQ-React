import React from 'react'

import { Helmet } from 'react-helmet'

import Heading from '../components/heading'
import ListItem from '../components/list-item'
import Next from '../components/next'
import projectStyles from '../style.module.css'
import styles from './getting-started.module.css'

const GettingStarted = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Intro to teleportHQ</title>
        <meta
          name="description"
          content="This project will introduce you to the capabilities of teleportHQ. Learn to navigate around the app and go through the main features with us."
        />
        <meta property="og:title" content="Intro to teleportHQ" />
        <meta
          property="og:description"
          content="This project will introduce you to the capabilities of teleportHQ. Learn to navigate around the app and go through the main features with us."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c555eb30-1c66-4959-bd00-c268e52b0946/8615b01c-77df-49d1-89ab-bbcb403499dd?org_if_sml=1"
        />
      </Helmet>
      <div className={styles['container1']}>
        <Heading heading1="Welcome to teleportHQ!"></Heading>
        <div className={styles['ul']}>
          <ListItem></ListItem>
          <ListItem text="Your progress is saved automatically"></ListItem>
          <ListItem text="Don't worry if you make mistakes. Just undo with Ctrl/Cmd + Z"></ListItem>
        </div>
        <div className={styles['footer']}>
          <span
            className={` ${styles['text']} ${projectStyles['subheading']} `}
          >
            Let&apos;s do this!
          </span>
          <Next
            text="Hit Ctrl/Cmd + Arrow Down for the next step"
            rootClassName="rootClassName"
          ></Next>
        </div>
      </div>
      <div className={styles['container2']}>
        <div className={styles['container3']}>
          <div className={styles['container4']}></div>
        </div>
      </div>
    </div>
  )
}

export default GettingStarted
