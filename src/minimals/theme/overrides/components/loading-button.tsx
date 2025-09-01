import type { Theme } from '@mui/material/styles';
import type { LoadingButtonProps } from '@mui/lab/LoadingButton';
import { loadingButtonClasses } from '@mui/lab/LoadingButton';

// ----------------------------------------------------------------------

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function loadingButton(_theme: Theme) {
    return {
        MuiLoadingButton: {
            styleOverrides: {
                root: ({ ownerState }: { ownerState: LoadingButtonProps }) => ({
                    ...(ownerState.variant === 'soft' && {
                        [`& .${loadingButtonClasses.loadingIndicatorStart}`]: {
                            left: 10,
                        },
                        [`& .${loadingButtonClasses.loadingIndicatorEnd}`]: {
                            right: 14,
                        },
                        ...(ownerState.size === 'small' && {
                            [`& .${loadingButtonClasses.loadingIndicatorStart}`]: {
                                left: 10,
                            },
                            [`& .${loadingButtonClasses.loadingIndicatorEnd}`]: {
                                right: 10,
                            },
                        }),
                    }),
                }),
            },
        },
    };
}
