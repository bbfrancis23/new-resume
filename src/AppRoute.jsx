import React from 'react'
import { appConfig } from './appConfig'

export default function AppRoute() {
  return (
    <>
      { appConfig.pageItems.map((item) => item.pageComponent) }
    </>
  )
}

/*
Quality Checked: Brian Francis - 12/27/2021
 */
