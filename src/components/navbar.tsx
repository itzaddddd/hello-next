import { NavSearch } from "./nav-search"
import { NavLink } from "./nav-links"

export const NavBar = () => {
  
  console.log('NavBar rendered')

  return (
    <div>
      <NavLink />
      <NavSearch />
    </div>
  )
}