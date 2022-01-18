import React from 'react'
import PropTypes from 'prop-types'
import { Route, Routes } from 'react-router-dom'
import AppSettingsRoute from './AppSettingsRoute'
import { appConfig } from './appConfig'

function AppRoute() { return (<>{ appConfig.pageItems.map((item) => item.pageComponent) }</>) }

export default function AppRoutes(props) {
  const { updateTheme } = props
  return (
    <Routes>
      <Route path="/" element={<AppRoute />} />
      <Route
        path="settings"
        element={<AppSettingsRoute updateTheme={(options) => updateTheme(options)} />}
      />
      <Route path="*" element={<AppRoute />} />
    </Routes>
  )
}
AppRoutes.propTypes = {
  updateTheme: PropTypes.func.isRequired,
}
/*
Final QA: Brian Francis - 01/14/2022
 */
