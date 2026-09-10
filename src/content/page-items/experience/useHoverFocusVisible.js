import {useState} from 'react'

export default function useHoverFocusVisible() {
  const [visible, setVisible] = useState(false)

  return [visible, {
    onMouseEnter: () => setVisible(true),
    onMouseLeave: () => setVisible(false),
    onFocus: () => setVisible(true),
    onBlur: () => setVisible(false),
  }]
}
