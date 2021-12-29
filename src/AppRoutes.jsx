import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PropTypes from 'prop-types'
import Settings from './content/routes/Settings'
import Home from './content/routes/Home'

export default function AppRoutes(props) {
  const { updateTheme } = props
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="settings"
        element={<Settings updateTheme={(themeName, options) => updateTheme(themeName, options)} />}
      />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}
AppRoutes.propTypes = {
  updateTheme: PropTypes.func.isRequired,
}

/*
Quality Checked: Brian Francis - 12/27/2021
 */
