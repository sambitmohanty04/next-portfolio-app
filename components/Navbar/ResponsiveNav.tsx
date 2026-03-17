"use client";
import React, { useState } from 'react'
import MobileNav from './MobileNav'
import NavSec from './NavSec'

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  const openNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false)
  return (
    <>
      <NavSec openNav = {openNavHandler} />
      <MobileNav showNav = {showNav} closeNav = {closeNavHandler} />
    </>
  )
}

export default ResponsiveNav