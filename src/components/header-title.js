import React from 'react'

import PropTypes from 'prop-types'

import './header-title.css'

const HeaderTitle = (props) => {
  return (
    <div className={`header-title-container ${props.rootClassName} `}>
      <div className="header-title-headertitle">
        <span className="header-title-text Epilogue-36Light">{props.text}</span>
      </div>
    </div>
  )
}

HeaderTitle.defaultProps = {
  text: 'Projects',
  rootClassName: '',
}

HeaderTitle.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default HeaderTitle
