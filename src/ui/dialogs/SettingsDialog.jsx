import * as React from 'react'
import Draggable from 'react-draggable'
import PropTypes from 'prop-types'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import Paper from '@mui/material/Paper'

function PaperComponent(props) {
  return (
    <Draggable handle="#app-settings-dialog-title" cancel='[class*="MuiDialogContent-root"]'>
      <Paper {...props} />
    </Draggable>
  )
}

export default function SettingsDialog(props) {
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
      <DialogActions>
        <Button autoFocus variant="text" color="inherit" onClick={close}>Done</Button>
      </DialogActions>
    </Dialog>
  )
}

SettingsDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}
