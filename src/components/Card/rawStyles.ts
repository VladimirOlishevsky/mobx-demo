import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    card: {
        width: 26 + 'rem'
    },
    cardBody: {
        padding: 12
    },
    buttonChevron: {
        width: '100%',
        "&:hover, &:focus": {
            outline: 'none'
        }
    },
    fa: {
        fontSize: 'x-large'
    }

  }));