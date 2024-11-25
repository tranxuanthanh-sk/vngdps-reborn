/**
 *
 * @jsxImportSource react
 */

import NavbarBase from './NavbarBase.tsx'
import NavbarItems from './NavbarItems.tsx'
import { Icon } from '@iconify/react'

export default function Navbar() {
  return <NavbarBase menuIcon={<Icon icon="solar:hamburger-menu-outline" />} navContent={<NavbarItems />} />;
}
