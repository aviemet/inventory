import { Menu, type MenuProps } from "@mantine/core"

import { MenuItem } from "./MenuItem"
import { MenuLink } from "./MenuLink"
import { MenuTarget } from "./MenuTarget"

const MenuComponentBase = ({ children, ...props }: MenuProps) => {
	return (
		<Menu { ...props }>{ children }</Menu>
	)
}

export const MenuComponent = Object.assign(MenuComponentBase, {
	Target: MenuTarget,
	Dropdown: Menu.Dropdown,
	Label: Menu.Label,
	Item: MenuItem,
	Link: MenuLink,
	Divider: Menu.Divider,
})
