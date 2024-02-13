import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom'

function SideBar() {  

  

  return (
 
  <Sidebar    
  backgroundColor="rgb(50, 51, 51)"
  rtl={false}   
  >
    <Menu >
    <MenuItem component={ <Link to='/home' /> } >  Home </MenuItem>
      <MenuItem component={ <Link to='/shorts' /> } > Shorts </MenuItem>
      <MenuItem component={ <Link to='/trending' /> } > Trending </MenuItem>
      <MenuItem component={ <Link to='/podcast' /> } > Podcasts </MenuItem>
      <MenuItem component={ <Link to='/explore' /> } > Explore   </MenuItem>
      <SubMenu label="Your Profile">
        <MenuItem component={ <Link to='/subs' /> } > Subs </MenuItem>
        <MenuItem component={ <Link to='/Shopping' /> } > Shopping </MenuItem>
        <MenuItem component={ <Link to='/watchlater' /> } > Watch Later </MenuItem>
        <MenuItem component={ <Link to='/history' /> } >  History </MenuItem>
      </SubMenu>
      <MenuItem component={ <Link to='/specials' /> } >  Specials </MenuItem>
      <MenuItem component={ <Link to='/UpcomingShows' /> } >  UpComing Shows </MenuItem>
    </Menu>
  </Sidebar>

  )
}

export default SideBar
