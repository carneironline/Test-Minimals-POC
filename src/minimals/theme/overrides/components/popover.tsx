import type { Theme } from '@mui/material/styles';
import { listClasses } from '@mui/material/List';

import { paper } from '@minimalsTheme/css';

// ----------------------------------------------------------------------

export function popover(theme: Theme) {
    return {
        MuiPopover: {
            styleOverrides: {
                paper: {
                    ...paper({ theme, dropdown: true }),
                    [`& .${listClasses.root}`]: {
                        paddingTop: 0,
                        paddingBottom: 0,
                    },
                },
            },
        },
    };
}
