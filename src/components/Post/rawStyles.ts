import { makeStyles } from "@material-ui/core";
import { appWidth } from './constants';

export const useStyles = makeStyles((theme) => ({
    mainContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    content: {
        maxWidth: appWidth
    }
  }));