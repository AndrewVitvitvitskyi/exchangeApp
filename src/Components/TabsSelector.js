import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#326ba8',
	color: 'white',
	fontWeight: 'bold'
  },
}));

const TabsSelector = ({activeTab, converterTabHandler, ...props}) => {

const classes = useStyles();

	const tabHandler = (e,val) => {
		converterTabHandler(val);
	}

	return (
	 <div className={classes.root}>
		 <Tabs value={activeTab} onChange={tabHandler}>
          <Tab label="Converter"  />
          <Tab label="Historical Rates"  />
        </Tabs>
	</div>
	);
}

TabsSelector.defaultProps = {
	activeTab: 0,
	converterTabHandler: () => {}
};

export default TabsSelector;