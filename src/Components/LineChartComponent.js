import React from 'react';
import {LineChart, XAxis, Tooltip, CartesianGrid, Line} from 'recharts';
import _ from 'underscore';

const LineChartComponent = ({data, from, to, ...props}) => {
	
		const lineCaption = `${from}-${to}`;
		const points = _.map(data.rates, (item, index) => {

			return {name:index, [lineCaption]: item[to]};
		});

        return (
            <div>
                <div className="App">
                    <h1>{lineCaption}</h1>
                    <LineChart
					  width={600}
					  height={400}
					  data={points}
					  margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
					>
					  <XAxis dataKey="name" />
					  <Tooltip />
					  <CartesianGrid stroke="#f5f5f5" />
					  <Line type="monotone" dataKey={lineCaption} stroke="#ff7300" yAxisId={0} />
					 
					</LineChart>
                </div>				
            </div>
        );
};

LineChartComponent.defaultProps = {
	data: [],
	from: '',
	to: ''
};

export default LineChartComponent;