import React, {Fragment} from 'react';
import CurrencyInput from './CurrencyInput';
import CurrencySelect from './CurrencySelect';
import Grid from '@material-ui/core/Grid';
import Rate from './Rate';

const ISK = 'ISK';
const USD = 'USD';



const CurrencyConverter = ({rates, chosenPair, selectChangeHandler, inputChangeHandler,amountTo, amountFrom, ...props}) => {
		const options = Object.keys(rates);
	
		return (
		<Fragment>
			<Grid container className="currency-converter-wrapper">
					<div className="inputs-row">
						<span className="inputs-block-label">From</span>
						<CurrencyInput 
							amount={amountFrom}
							inputChangeHandler={inputChangeHandler}
							direction={'from'}
						/>
					
					
						<CurrencySelect
							direction={'from'}
							options={options} 
							chosenOption={chosenPair.from} 
							selectChangeHandler={selectChangeHandler}	
						/>
					</div>
			
					<div className="inputs-row">
						<span className="inputs-block-label">To</span>
						<CurrencyInput 
							direction={'to'}
							amount={amountTo}
							inputChangeHandler={inputChangeHandler}
						/>
				
					
						<CurrencySelect  
							options={options}
							direction={'to'}
							chosenOption={chosenPair.to} 
							selectChangeHandler={selectChangeHandler}	
						/>
					</div>
			</Grid>
			<Rate from={chosenPair.from} to={chosenPair.to} rate={rates[chosenPair.to]}/>
		</Fragment>
		);
}

export default CurrencyConverter;