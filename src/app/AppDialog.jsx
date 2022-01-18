import * as React from 'react'
import Draggable from 'react-draggable'
import PropTypes from 'prop-types'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import {
  Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Paper,
} from '@mui/material'
import { Link } from 'react-router-dom'

function PaperComponent(props) {
  const nodeRef = React.useRef(null)

  return (
    <Draggable nodeRef={nodeRef} handle="#app-settings-dialog-title" cancel='[class*="MuiDialogContent-root"]'>
      <Paper ref={nodeRef} {...props} />
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
        <Box sx={{ display: 'flex' }}>
          <div>
            {`${label} `}
            Settings
          </div>
          <div style={{ flexGrow: '1' }} />
          <DragHandleIcon />
        </Box>
      </DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
      <DialogActions disableSpacing={false}>
        {
          moreLink && (
            <Button color="inherit" onClick={close} sx={{ mr: 1 }} component={Link} to={moreLink}>More</Button>
          )
        }
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
  Final QA : Brian Francis 01/14/2022
 */
