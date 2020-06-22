import React from 'react'
import PropTypes from 'prop-types'

import Portal from '../portal/portal'

import styles from './overlay.module.scss'

const Overlay = ({ zIndex }) => (
  <Portal>
    <div className={styles.overlay} styles={{ zIndex: zIndex || 10 }} />
  </Portal>
)

Overlay.propTypes = {
  zIndex: PropTypes.number,
}
export default Overlay
