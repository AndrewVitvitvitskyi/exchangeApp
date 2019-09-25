import React from 'react';

const RateRow = ({name, value, ...props}) => {
	return (
		<div className="rate-row">
			<div>
				<span>{name}</span>
			</div>
			<span>{value}</span>
		</div>
	);
}

RateRow.defaulProps ={
	currencyObj: {name:'Currency', value: 0, flag:''}
};

export default RateRow;