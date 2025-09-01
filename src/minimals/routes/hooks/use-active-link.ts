import { usePathname } from '../hooks';

// ----------------------------------------------------------------------

export function useActiveLink(path: string, deep?: boolean) {
    const pathname = usePathname();

    const checkPath = path.startsWith('#') ? pathname : path;

    const currentPath = pathname === '/' ? pathname : pathname;

    const normalActive = checkPath === currentPath;

    const deepActive = checkPath !== currentPath && currentPath.includes(checkPath);

    return deep ? deepActive : normalActive;
}
