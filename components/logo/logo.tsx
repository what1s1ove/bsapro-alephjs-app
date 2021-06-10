import React from 'react'

const Logo = ({ size = 75 }: { size?: number }) => (
  <img src="/logo.svg" height={size} title="Aleph.js" />
)

export default Logo
