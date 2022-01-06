import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PropTypes from 'prop-types'
import AppSettingsRoute from './AppSettingsRoute'
import AppRoute from './AppRoute'

export default function AppRoutes(props) {
  const { updateTheme } = props
  return (
    <Routes>
      <Route path="/" element={<AppRoute />} />
      <Route
        path="settings"
        element={<AppSettingsRoute updateTheme={(themeName, options) => updateTheme(themeName, options)} />}
      />
      <Route path="*" element={<AppRoute />} />
    </Routes>
  )
}
AppRoutes.propTypes = {
  updateTheme: PropTypes.func.isRequired,
}

/*
Quality Checked: Brian Francis - 12/27/2021
 */
