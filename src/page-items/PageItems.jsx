import { styled } from '@mui/material/styles'
import { Chip } from '@mui/material'

// eslint-disable-next-line import/prefer-default-export
export const SkillChip = styled(Chip)(({ theme }) => ({
  margin: `0 0 ${theme.spacing(1)} ${theme.spacing(1)}`, height: '20px',
}))
