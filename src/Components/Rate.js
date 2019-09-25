import React from 'react';

const Rate = ({from, to, rate}) => {
	return (
		<div className="rate-info">
			<div className="rate-info-caption">
				Your Rate:
			</div>
			<div>
				{`${from} 1 = ${to} ${Number(rate.toFixed(2))}`}
			</div>
		</div>
	);
}

Rate.defaultProps = {
	from: '',
	to: '',
	rate: 0
}

export default Rate;