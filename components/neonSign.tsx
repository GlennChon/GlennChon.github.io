import { Grid, Typography } from '@mui/material'
import { signFlicker, signFlickerOn } from '../styles/animations'
export const NeonSign = () => (
    <Grid
        item
        sx={{
            position: 'relative',
            mb: { xs: 3, sm: 6 },
        }}
    >
        <Typography
            sx={{
                m: 'auto',
                width: { xs: '250px', md: '300px', lg: '350px' },
                fontFamily: "'Neon Tubes 2'",
                textAlign: 'center',
                p: 1,
                color: 'primary.dark',
                border: '.4rem double primary.dark',
                borderRadius: 3,
                fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                animation: `${signFlickerOn} 5s normal 1s 1, ${signFlicker} 8s infinite 6s alternate`,
                textShadow: 'none',
                boxShadow: 'none',
            }}
        >
            Glenn Chon
        </Typography>
    </Grid>
)