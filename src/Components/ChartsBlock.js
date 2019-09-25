import React, {Component, Fragment} from 'react';
import LineChartComponent from './LineChartComponent';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const dateFunc = () => {
		const nowDate = new Date();
		const monthAgo = `${nowDate.getFullYear()}-${nowDate.getMonth()}-${nowDate.getDate()}`;
		const threeMonthAgo = `${nowDate.getFullYear()}-${nowDate.getMonth()-2}-${nowDate.getDate()}`;
		const sixMonthAgo = `${nowDate.getFullYear()}-${nowDate.getMonth()-5}-${nowDate.getDate()}`;
		const twelveMonthAgo = `${nowDate.getFullYear() - 1}-${nowDate.getMonth()+1}-${nowDate.getDate()}`;

		return [monthAgo, threeMonthAgo, sixMonthAgo, twelveMonthAgo];
}

class ChartsBlock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			history: {},
			isLoaded: false,
			periodTab: 0
		};
	}

	componentDidMount() {
		const {base} = this.props;
		const nowDate = new Date();
		
		const formatedNowDateString = `${nowDate.getFullYear()}-${nowDate.getMonth()+1}-${nowDate.getDate()}`;
		const monthAgo = `${nowDate.getFullYear()}-${nowDate.getMonth()}-${nowDate.getDate()}`;

		this.getHistory(monthAgo, formatedNowDateString, base);

	}
	
	chartPeriodHandler = (e, val) => {
		
		const {base} = this.props;
		const nowDate = new Date();
		const formatedNowDateString = `${nowDate.getFullYear()}-${nowDate.getMonth()+1}-${nowDate.getDate()}`;

		this.setState({
			periodTab: val
		});

		const periods = dateFunc();

		this.getHistory(periods[val], formatedNowDateString, base);
		


		
	
	} 

	getHistory(start, end, base) {

		this.setState({
			isLoaded: false
		});

		fetch(`https://api.exchangeratesapi.io/history?start_at=${start}&end_at=${end}&base=${base}`)
			.then(data => data.json())
			.then(res => this.setState({
				history: res,
				isLoaded: true
			}))
			.catch();
	}

	render() {
		const {history, isLoaded, periodTab} = this.state;
		const {base, to} = this.props;

		return(
			<div>
				{isLoaded && 
				<Fragment>
					  <Tabs
						  value={periodTab}
						  onChange={this.chartPeriodHandler}
						  indicatorColor="primary"
						  textColor="primary"
						  variant="fullWidth"
						  className="period-tab"
						  aria-label="full width tabs example"
						>
						  <Tab label="Last Month" />
						  <Tab label="Last 3 Month" />
						  <Tab label="Last 6 Month"/>
						   <Tab label="Last 12 Month"/>
					</Tabs>
					<LineChartComponent data={history} from={base} to={to} />
				</Fragment>
				}
			</div>
		);
	};

}

ChartsBlock.defaultProps = {
	base: ''
};

export default ChartsBlock;