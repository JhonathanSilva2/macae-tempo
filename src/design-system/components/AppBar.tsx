import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"

import CloudIcon from "@mui/icons-material/Cloud"
import HeaderCustomTabPanel from "@/components/tabs/HeaderCustomTabPanel"
import { ThemeToggleButton } from "@/components/ThemeToggle"

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <CloudIcon />
          <HeaderCustomTabPanel />
          <ThemeToggleButton />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
