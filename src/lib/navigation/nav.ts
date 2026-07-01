import { PressedKeys } from "runed";

export type ParticleCategoryRouteId =
	| "accordion"
	| "alert-dialog"
	| "avatars"
	| "banner"
	| "button"
	| "input"
	| "input-group"
	| "input-otp"
	| "menu"
	| "tabs"
	| "table";

export type ParticleCategoryNavItem = {
	id: ParticleCategoryRouteId;
	href: `/particles/${ParticleCategoryRouteId}`;
	label: string;
};

export type NavItem =
	| {
			href: "/";
			label: "Home";
	  }
	| ParticleCategoryNavItem;

export const particleCategoryNavItems: ParticleCategoryNavItem[] = [
	{ id: "accordion", href: "/particles/accordion", label: "Accordion" },
	{ id: "alert-dialog", href: "/particles/alert-dialog", label: "Alert Dialog" },
	{ id: "avatars", href: "/particles/avatars", label: "Avatars" },
	{ id: "banner", href: "/particles/banner", label: "Banner" },
	{ id: "button", href: "/particles/button", label: "Buttons" },
	{ id: "input", href: "/particles/input", label: "Input" },
	{ id: "input-group", href: "/particles/input-group", label: "Input Group" },
	{ id: "input-otp", href: "/particles/input-otp", label: "Input OTP" },
	{ id: "menu", href: "/particles/menu", label: "Menu" },
	// { id: 'tabs', href: '/particles/tabs', label: 'Tabs' },
	{ id: "table", href: "/particles/table", label: "Table" },
];

export const particleCategoryRouteIds = particleCategoryNavItems.map((item) => item.id);

export const navItems: NavItem[] = [{ href: "/", label: "Home" }, ...particleCategoryNavItems];

export const navigationKeys = new PressedKeys();

export function getParticleCategoryDirectionTarget(
	pathname: string,
	direction: "next" | "prev"
): ParticleCategoryNavItem | null {
	const currentIndex = particleCategoryNavItems.findIndex((item) => item.href === pathname);

	if (currentIndex === -1) {
		return null;
	}

	const offset = direction === "next" ? 1 : -1;
	const targetIndex =
		(currentIndex + offset + particleCategoryNavItems.length) % particleCategoryNavItems.length;

	return particleCategoryNavItems[targetIndex];
}

type DesktopNavItem = {
	name: string;
	href: string;
};
export const desktopNav: DesktopNavItem[] = [
	{
		name: "Home",
		href: "/",
	},
	{
		name: "Components",
		href: "/particles/accordion",
	},
	{
		name: "Demo",
		href: "/demo",
	},
];
