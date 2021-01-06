import { makeStyles, fade } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    form: {
        border: 'none'
    },
    input: {
        display: 'flex',
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 16,
        width: 'auto',
        padding: '10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&.Mui-focused': {
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        },
    },
}));