import {useTheme} from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Fab from "@mui/material/Fab";

export default function StainedGlassButton(props) {
  const theme = useTheme();

  return (

    <Tooltip title={props.tooltip ? props.tooltip : ''} onClick={props.onClick} style={props.style}>
      <Fab
          size={props.size}
          sx={{
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, .25)',
          backdropFilter: 'blur(1px)',
          color: 'white', ':hover':{ background: theme.palette.action.hover }}}>
        <IconButton
            size={"large"}
            sx={{ color: '#FFF', ':hover':{ background: theme.palette.action.hover }}} >
          {props.children}
        </IconButton>
      </Fab>
    </Tooltip>
  )
}
