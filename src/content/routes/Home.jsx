import React from 'react'
import { appConfig } from '../../AppConfig'

export default function Home() {
  return (
    <>
      { appConfig.pageItems.map((item) => item.pageComponent) }
    </>
  )
}

/*
Quality Checked: Brian Francis - 12/27/2021
 */
