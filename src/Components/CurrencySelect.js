import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import _  from 'underscore';


const CurrencySelect = (props) => {
		
		const currencyOptions = _.map(props.options, (item, index) => {
			return <MenuItem key={index} value={item}>{item}</MenuItem>
		});

		const changeHandler = (e) => {
			props.selectChangeHandler(props.direction, e.target.value);
			
		} 

		const {chosenOption} = props;
	
		return (
			<div className="currency-select-wrapper">
				<FormControl variant="outlined">
					<Select
					  value={chosenOption}
					  onChange={changeHandler}
					>
					  {currencyOptions}
					</Select>
				  </FormControl>
			</div>
		);
};

CurrencySelect.defaultProps = {
	options: {},
	chosenOption: {},
	selectChangeHandler: () => {}
}

export default CurrencySelect;