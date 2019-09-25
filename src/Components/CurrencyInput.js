import React from 'react';
import TextField from '@material-ui/core/TextField';

const CurrencyInput = (props) => {

		const changeHandler = (e) => {
			props.inputChangeHandler(props.direction, e.target.value);
		}
	
		return (
			<div className="currency-inputs-wrapper">
				<TextField
					id="outlined-number"
					value={props.amount}
					onChange={changeHandler}
					type="number"
					InputLabelProps={{
					  shrink: true,
					}}
					margin="normal"
					variant="outlined"
			  />
			</div>
		);
};

CurrencyInput.defaultProps = {
	direction: '',
	amount: 0
}

export default CurrencyInput;