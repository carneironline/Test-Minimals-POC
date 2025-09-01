import { forwardRef } from 'react';
import { Link as ReactRouterLink, type LinkProps } from 'react-router-dom';

// ----------------------------------------------------------------------

export interface RouterLinkProps extends Omit<LinkProps, 'to'> {
    href: string;
    to?: string;
}

export const RouterLink = forwardRef<HTMLAnchorElement, RouterLinkProps>(({ href, to, ...other }, ref) => {
    // Use 'to' prop if provided, otherwise use 'href'
    const linkTo = to || href;

    return <ReactRouterLink ref={ref} to={linkTo} {...other} />;
});

RouterLink.displayName = 'RouterLink';
