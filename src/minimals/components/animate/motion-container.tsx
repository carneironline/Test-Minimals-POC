import { m } from 'framer-motion';

import Box, { type BoxProps } from '@mui/material/Box';

import { varContainer } from './variants';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
    animate?: boolean;
    action?: boolean;
    children: React.ReactNode;
}

export default function MotionContainer({ animate, action = false, children, ...other }: Props) {
    if (action) {
        return (
            <Box
                component={m.div}
                initial={false}
                animate={animate ? 'animate' : 'exit'}
                variants={varContainer()}
                {...other}
            >
                {children}
            </Box>
        );
    }

    return (
        <Box
            component={m.div}
            initial='initial'
            animate='animate'
            exit='exit'
            variants={varContainer()}
            {...other}
        >
            {children}
        </Box>
    );
}
