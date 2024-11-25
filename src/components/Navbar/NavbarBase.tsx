/**
 *
 * @jsxImportSource react
 */

import GDPS_Icon from '@assets/gdps_icon.png'

export default function NavbarBase({ menuIcon, navContent }: any) {
  return (
    <nav className="top-0 w-full bg-transparent">
      <div className="grid grid-cols-2">
        <div>
          <a href="/" className="inline-block">
            <img
              className="pointer-events-none rounded-2xl"
              src={GDPS_Icon.src}
              alt="VNGDPS's logo"
              loading="eager"
              width={55}
              height={55}
            />
          </a>
        </div>
        <div className="flex">
          <button
            type="button"
            className="inline-flex items-center gap-x-2 rounded-lg border border-transparent px-4 py-4"
          >
            {menuIcon}
          </button>
        </div>
      </div>

      {navContent}
    </nav>
  )
}
