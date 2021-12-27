import * as React from 'react'
import Draggable from 'react-draggable'
import PropTypes from 'prop-types'

import {
  Button, Dialog, DialogActions, DialogContent, DialogTitle, Paper,
} from '@mui/material'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import { Link } from 'react-router-dom'

function PaperComponent(props) {
  return (
    <Draggable handle="#app-settings-dialog-title" cancel='[class*="MuiDialogContent-root"]'>
      <Paper {...props} />
    </Draggable>
  )
}

export default function AppDialog(props) {
  const {
    open, close, label, children,
  } = props

  return (
    <Dialog
      open={open}
      onClose={close}
      PaperComponent={PaperComponent}
      aria-labelledby="app-settings-dialog-title"
    >
      <DialogTitle style={{ cursor: 'move' }} id="app-settings-dialog-title">
        <div style={{ display: 'flex' }}>
          <div>
            {`${label} `}
            Settings
          </div>
          <div style={{ flexGrow: '1' }} />
          <div>
            <DragHandleIcon />
          </div>
        </div>
      </DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
      <DialogActions disableSpacing={false}>
        <Button color="inherit" onClick={close} to="/settings" component={Link} sx={{ mr: 1 }}>More</Button>
        <Button autoFocus variant="outlined" color="success">Done</Button>
      </DialogActions>
    </Dialog>
  )
}

AppDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}
/*
Quality Checked: Brian Francis - 12/22/2021
 */
