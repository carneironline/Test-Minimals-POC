import { Link, LinkProps } from 'react-router-dom';

// ----------------------------------------------------------------------

export interface RouterLinkProps extends LinkProps {
    href?: string;
}

export function RouterLink({ href, to, ...other }: RouterLinkProps) {
    return <Link to={to || href || '#'} {...other} />;
}
