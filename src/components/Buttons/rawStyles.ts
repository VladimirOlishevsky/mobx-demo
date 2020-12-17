import { makeStyles, Theme } from "@material-ui/core";

export const rawStyles = makeStyles((theme: Theme) => {
    console.log(theme)
    return ({
    iconLike: {
        marginRight: theme.spacing(1.5),
        "&.Mui-focused": {
            outline: 0
        }
    },
    buttonStyle: {
        "&:focus": {
            outline: 'none'
          }
    }
  })});