import { useEffect } from 'react'
import ReactDOM from 'react-dom'

const portalRoot =
  typeof window.document !== 'undefined'
    ? document.getElementById('portal')
    : null

const Portal = ({ children }) => {
  const el =
    typeof window.document !== 'undefined'
      ? window.document.createElement('div')
      : null

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    el.classList.add('portal-content')
    portalRoot.appendChild(el)

    return () => {
      portalRoot.appendChild(el)
    }
  }, [el])

  return ReactDOM.createPortal(children, el)
}

export default Portal
