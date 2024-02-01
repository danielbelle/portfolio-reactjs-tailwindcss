import React, { useState } from 'react'
import { HiOutlineBars3 } from "react-icons/hi2"
import { Box, Drawer, ListItem, ListItemButton, ListItemText, List } from "@mui/material"
import { Link } from 'react-scroll'
import './Styles/Nav.css'

function Nav() {

  const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = [
    {
      text: "Saiba +",
      to: "about"
    },
    {
      text: "Projetos",
      to: "projects"
    },
    /*{
      text: "Jobs",
      to: "experience"
    },*/
    {
      text: "Bora Conversar?",
      to: "contact"
    }
  ]

  return (
    <nav id='nav'>
      <div className="logo">Daniel Henrique Bellé</div>
      <div>
        <ul className="nav-links">
          <li><Link to='about' spy={true} smooth={true} offset={0} duration={300}>Saiba +</Link></li>
          <li><Link to='projects' spy={true} smooth={true} offset={0} duration={300}>Projetos</Link></li>
          {/*<li><Link to='experience' spy={true} smooth={true} offset={0} duration={300}>Jobs</Link></li>*/}
          <li><Link to='contact' spy={true} smooth={true} offset={0} duration={300}>Bora Conversar?</Link></li>
        </ul>
      </div>

      <div className='navbar-menu-container'>
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor='right'>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          {menuOptions.map((item) => (
            <List key={item}>
              <Link to={(item.to)} spy={true} smooth={true} offset={0} duration={500}>
                <ListItem key={item.text} disablePadding>
                  <ListItemButton>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              </Link>
            </List>
          ))}
        </Box>
      </Drawer>
    </nav>
  )
}

export default Nav