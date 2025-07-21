"use client"
import * as React from "react"
import Box from "@mui/material/Box"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import { useState } from "react"

export default function HeaderCustomTabPanel() {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: "100%", bgcolor: "background.transparent" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="inherit"
        centered
      >
        <Tab label="GERAL" />
        <Tab label="ESTAÇÃO" />
      </Tabs>
    </Box>
  )
}
