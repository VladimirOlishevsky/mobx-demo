import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    buttonChevron: {
        width: '100%',
        "&:hover, &:focus": {
            outline: 'none'
        }
    },
  }));