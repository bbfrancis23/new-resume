import React from 'react'

import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'

export default function AppFooter() {
  const theme = useTheme()
  return (
    <Box sx={{ bgcolor: 'primary.main', textAlign: 'center', height: theme.spacing(5) }}>
      <span style={{ color: theme.palette.primary.contrastText }}>By: Brian Francis</span>
      <span style={{ padding: '5px 10px 0 10px' }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 36 32"
          fill="none"
          className="css-1170n61"
          style={{ position: 'relative', top: '4px', padding: '5px, 5px, 0px 5px' }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d={
                  'M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 '
                  + '011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 '
                  + '01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 '
                  + '.012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 '
                  + '01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 '
                  + '00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 '
                  + '6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 '
                  + '1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 '
                  + '5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z'
                }
            fill="#007FFF"
          />
        </svg>
      </span>
      <img
        style={{ paddingTop: '10px' }}
        src={
              'data:image/svg+xml;base64,'
              + 'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+'
              + 'CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+'
              + 'CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiBye'
              + 'T0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYw'
              + 'KSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'
            }
        alt="React"
        height="25"
      />
    </Box>
  )
}

/* Final QA: Brian Francis - 04/20/2022 */
