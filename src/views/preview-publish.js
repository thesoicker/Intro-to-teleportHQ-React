import React from 'react'

import { Helmet } from 'react-helmet'

import Heading from '../components/heading'
import ListItem from '../components/list-item'
import Tip from '../components/tip'
import Navigation from '../components/navigation'
import projectStyles from '../style.module.css'
import styles from './preview-publish.module.css'

const PreviewPublish = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>10 - Preview & Publish - Intro to teleportHQ</title>
        <meta
          name="description"
          content="This project will introduce you to the capabilities of teleportHQ. Learn to navigate around the app and go through the main features with us."
        />
        <meta
          property="og:title"
          content="10 - Preview &amp; Publish - Intro to teleportHQ"
        />
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
        <div className={styles['container2']}>
          <Heading
            text="Preview your project before you publish to see the final result"
            heading1="Preview &amp; Publish"
          ></Heading>
          <div className={styles['container3']}>
            <div className={styles['container4']}>
              <h2
                className={` ${styles['text']} ${projectStyles['subheading']} `}
              >
                Preview
              </h2>
              <div className={styles['ul']}>
                <div className={styles['container5']}>
                  <ListItem text="Click the Preview button in the top right corner of your window"></ListItem>
                  <div className={styles['container6']}>
                    <svg viewBox="0 0 1024 1024" className={styles['icon']}>
                      <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM426 704v-384l256 192z"></path>
                    </svg>
                  </div>
                </div>
                <ListItem text="This will open up a new tab where you can see a full preview of your current page/component"></ListItem>
              </div>
            </div>
          </div>
          <h2 className={` ${styles['text1']} ${projectStyles['subheading']} `}>
            Publish
          </h2>
          <div className={styles['ul1']}>
            <div className={styles['container7']}>
              <ListItem text="Click on the Publish button in the top right corner to see the deploy options"></ListItem>
              <div className={styles['container8']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon2']}>
                  <path d="M725.333 554.667v256c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-469.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-469.333c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v469.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h469.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667zM456.832 627.499l396.501-396.501v153.003c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h153.003l-396.501 396.501c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z"></path>
                </svg>
              </div>
            </div>
            <ListItem text="You can choose to publish through TeleportHQ on one of our subdomains"></ListItem>
            <Tip text="If you want to change the subdomain go to the Project Settings - General from the menu"></Tip>
            <ListItem text="Or you can opt for a custom deploy, using your preferred domain, by setting up a Vercel token"></ListItem>
            <Tip text="To add a Vercel token go to Project Settings - Tokens"></Tip>
          </div>
        </div>
        <Navigation></Navigation>
      </div>
    </div>
  )
}

export default PreviewPublish
