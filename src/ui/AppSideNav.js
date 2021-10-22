import * as React from 'react';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Fab from "@mui/material/Fab";
import StainedGlassButton from "./buttons/StainedGlassButton";

const drawerWidth = 225;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }),
    }),
);





const Monogram = styled('div')(({ theme}) =>
    ({
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      outline: `${theme.palette.primary.contrastText} solid 10px`,
      height: drawerWidth,
      width: drawerWidth,
      lineHeight: '300%',
      verticalAlign: 'middle',
      textAlign: 'center',
       fontSize: '75px',
      outlineOffset: '-40px'
    })
);

const SideNavButton = styled('div', {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  top: theme.spacing(3),
  left: theme.spacing(3),
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function AppSideNav() {
  let [open, setOpen] = React.useState(false);

  const handleToggleSideNav = () => {
    setOpen((!open))
  };


  return (
      <div>




        <SideNavButton sx={{position: "fixed",  }} open={open}>
          <StainedGlassButton onClick={handleToggleSideNav} tooltip={'Menu'}>
            {open ? <CloseIcon/> : <MenuIcon />}
          </StainedGlassButton>
        </SideNavButton>
        <Drawer variant={"persistent"} open={open}>
          <div>

            <Monogram>
              BF
            </Monogram>
          </div>
        </Drawer>
        <Main open={open}>
          <DrawerHeader />

        </Main>
      </div>
  );
}

