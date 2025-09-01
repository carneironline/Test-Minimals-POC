import type { Theme } from '@mui/material/styles';

import { menuItem } from '@minimalsTheme/css';

// ----------------------------------------------------------------------

export function menu(theme: Theme) {
    return {
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    ...menuItem(theme),
                },
            },
        },
    };
}
