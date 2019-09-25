import React from 'react';
import RateRow from './RateRow';
import _ from 'underscore';

const EUR = 'EUR';
const GBP = 'GBP';
const CAD = 'CAD';
const MXN = 'MXN';
const JPY = 'JPY';

const predefinedCurrency = [EUR, GBP, CAD, MXN, JPY];

const TodayRates = ({caption, current, rates, ...props}) => {
	const ratesEntries = Object.entries(rates);
	const filtered = _.filter(ratesEntries, item => predefinedCurrency.indexOf(item[0]) > -1);
	const rateRows = _.map(filtered, (currency, index) => <RateRow  key={index} name={currency[0]} value={Number(currency[1].toFixed(2))} />);

	return (
		<div className="today-rates-wrapper">
			<div className="today-rates-header">
				<span>{caption}</span>
				<span>1 {current}</span>
			</div>
			<div className="today-rates-row">
				{rateRows}
			</div>
			
		</div>
	);
}

TodayRates.defaultProps = {
	caption: 'Today\'s Rates',
	current: 'USD',
	rates: {}
};

export default TodayRates;