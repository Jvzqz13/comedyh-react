import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

function SideBar() {  

  

  return (
 
  <Sidebar    
  backgroundColor="rgb(50, 51, 51)"
  rtl={false}   
  >
    <Menu >
    <MenuItem>  Home </MenuItem>
      <MenuItem> Shorts </MenuItem>
      <MenuItem> Trending </MenuItem>
      <MenuItem> Podcasts </MenuItem>
      <MenuItem> Explore   </MenuItem>
      <SubMenu label="Your Profile">
        <MenuItem> Subs </MenuItem>
        <MenuItem> Shopping </MenuItem>
        <MenuItem> Watch Later </MenuItem>
        <MenuItem>  History </MenuItem>
      </SubMenu>
      <MenuItem>  Specials </MenuItem>
      <MenuItem>  UpComing Shows </MenuItem>
    </Menu>
  </Sidebar>

  )
}

export default SideBar
