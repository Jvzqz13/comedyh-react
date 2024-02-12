import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Collapse from 'react-bootstrap/Collapse';
import CollapseButton from './CollapseButton';

function SideBar({open}) {
  

  return (

  <Collapse in={!open}  > 
  <Sidebar    
  backgroundColor="rgb(50, 51, 51)"
  rtl={false}   >
    <Menu >
     <CollapseButton />
      <SubMenu label="Charts">
        <MenuItem> Pie charts </MenuItem>
        <MenuItem> Line charts </MenuItem>
      </SubMenu>
      <MenuItem> Documentation </MenuItem>
      <MenuItem> Calendar </MenuItem>
    </Menu>
  </Sidebar>
  </Collapse>
  )
}

export default SideBar
