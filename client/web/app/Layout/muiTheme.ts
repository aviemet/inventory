import { createMuiTheme } from '@material-ui/core/styles';
import { grey, green } from '@material-ui/core/colors';

const muiTheme = createMuiTheme({
	palette: {
		primary: grey,
		secondary: green
	}
});

export default muiTheme;