import * as React from 'react'

import {
  Box,
  Card, CardContent, CardHeader, Chip,
} from '@mui/material'
import experience from '../../data'

export default function ExpMobile() {
  return (
    <Box sx={{ display: { xs: 'block', md: 'none' } }}>
      {
        experience.map((item, index) => (

          <Card raised sx={{ mt: 5 }} key={`${item.label}-mobilecard`}>
            <CardHeader
              title={item.label}
              subheader={item.title}
              sx={{ flexDirection: index % 2 === 1 ? 'row-reverse' : 'row' }}
            />
            <CardContent>
              {
                      item.relevantSkills.map((rSkill) => (
                        <Chip variant="skill" label={rSkill} size="small" color="primary" key={rSkill} />
                      ))
                    }
              <br />
              {
                      item.otherSkills.map((oSkill) => (
                        <Chip variant="skill" label={oSkill} size="small" color="secondary" key={oSkill} />
                      ))
                    }
            </CardContent>
          </Card>
        ))
      }

    </Box>
  )
}
