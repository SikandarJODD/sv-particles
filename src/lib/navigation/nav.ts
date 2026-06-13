import { PressedKeys } from 'runed';

export type ParticleCategoryRouteId =
	| 'alert-dialog'
	| 'avatars'
	| 'button'
	| 'input'
	| 'input-group'
	| 'input-otp'
	| 'menu';

export type ParticleCategoryNavItem = {
	id: ParticleCategoryRouteId;
	href: `/particles/${ParticleCategoryRouteId}`;
	label: string;
};

export type NavItem =
	| {
			href: '/';
			label: 'home';
	  }
	| ParticleCategoryNavItem;

export const particleCategoryNavItems: ParticleCategoryNavItem[] = [
	{ id: 'alert-dialog', href: '/particles/alert-dialog', label: 'alert-dialog' },
	{ id: 'avatars', href: '/particles/avatars', label: 'avatars' },
	{ id: 'button', href: '/particles/button', label: 'buttons' },
	{ id: 'input', href: '/particles/input', label: 'input' },
	{ id: 'input-group', href: '/particles/input-group', label: 'input-group' },
	{ id: 'input-otp', href: '/particles/input-otp', label: 'input-otp' },
	{ id: 'menu', href: '/particles/menu', label: 'menu' }
];

export const particleCategoryRouteIds = particleCategoryNavItems.map((item) => item.id);

export const navItems: NavItem[] = [{ href: '/', label: 'home' }, ...particleCategoryNavItems];

export const navigationKeys = new PressedKeys();

export function getParticleCategoryDirectionTarget(
	pathname: string,
	direction: 'next' | 'prev'
): ParticleCategoryNavItem | null {
	const currentIndex = particleCategoryNavItems.findIndex((item) => item.href === pathname);

	if (currentIndex === -1) {
		return null;
	}

	const offset = direction === 'next' ? 1 : -1;
	const targetIndex =
		(currentIndex + offset + particleCategoryNavItems.length) % particleCategoryNavItems.length;

	return particleCategoryNavItems[targetIndex];
}
