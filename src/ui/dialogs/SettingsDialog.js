import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';

function PaperComponent(props) {
  return (
      <Draggable
          handle="#app-settings-dialog-title"
          cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>
  );
}

export default function SettingsDialog(props) {

  return (

    <Dialog
        open={props.open}
        onClose={props.close}
        PaperComponent={PaperComponent}
        aria-labelledby="app-settings-dialog-title"
    >
      <DialogTitle style={{ cursor: 'move' }} id="app-settings-dialog-title">
        <div style={{display: 'flex'}}>
          <div>Settings</div> <div style={{flexGrow: '1'}} /><div> <DragHandleIcon /></div>
        </div>
      </DialogTitle>
      <DialogContent>
        {props.children}
      </DialogContent>
      <DialogActions>
        <Button autoFocus variant={'contained'} color={'secondary'} onClick={props.close} >
          Done
        </Button>
      </DialogActions>
    </Dialog>
  );
}

