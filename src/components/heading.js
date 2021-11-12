import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './heading.module.css'

const Heading = (props) => {
  return (
    <div className={styles['container']}>
      <img
        alt="image"
        src="/playground_assets/logo.svg"
        className={styles['image']}
      />
      <h1 className={` ${styles['text']} ${projectStyles['heading']} `}>
        {props.heading1}
      </h1>
      <span className={` ${styles['text1']} ${projectStyles['subheading']} `}>
        {props.text}
      </span>
    </div>
  )
}

Heading.defaultProps = {
  heading1: 'Heading',
  text: 'Letâs walk through this tutorial together to get you ready for building your next projects',
}

Heading.propTypes = {
  heading1: PropTypes.string,
  text: PropTypes.string,
}

export default Heading
