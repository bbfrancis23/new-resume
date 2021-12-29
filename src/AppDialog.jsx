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
    open, close, label, children, moreLink,
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
        { moreLink && <Button color="inherit" onClick={close} to={moreLink} component={Link} sx={{ mr: 1 }}>More</Button>}
        <Button autoFocus variant={moreLink ? 'outlined' : 'text'} onClick={close} color={moreLink ? 'success' : 'inherit'}>
          Done
        </Button>
      </DialogActions>
    </Dialog>
  )
}
AppDialog.defaultProps = {
  moreLink: undefined,
}
AppDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  moreLink: PropTypes.string,
}

/*
Quality Checked: Brian Francis - 12/29/2021
 */
