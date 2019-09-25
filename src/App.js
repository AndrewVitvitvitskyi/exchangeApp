import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from './Components/Header';
import TodayRates from './Components/TodayRates';
import Converter from './Components/Converter';
import _ from 'underscore';

const ISK = 'ISK';
const USD = 'USD';
const FROM = 'from';
const TO = 'to';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currencyRates: {},
			isRatesLoaded: false,
			from: '',
			to:'',
			amountFrom: 1000,
			amountTo: 0,
			activeTab: 0
		}
	};

	componentDidMount() {
		this.currencyRequest();
		
	}

	currencyRequest = (base, to) => {
		const baseCurrency = base ? base : USD;
		const toCurrency = to ? to : ISK;

		fetch(`https://api.exchangeratesapi.io/latest?base=${baseCurrency}`)
			.then(data => data.json())
			.then(res => {
			
			this.setState((prevState) => {
				
			const rate = res.rates[toCurrency];
			const amountTo = Number((prevState.amountFrom * rate).toFixed(2));
			
			return {
				currencyRates: {...res},
				isRatesLoaded: true,
				from: baseCurrency,
				to: toCurrency,
				amountTo: amountTo
			}
			});
			
			});
	}

	selectChangeHandler = (direction, value) => {
					
			this.setState({
				[direction]: value
			}, () => {

				const amount = direction === FROM ? this.state.amountFrom : this.state.amountTo;
				const toRate = this.state.currencyRates.rates[this.state.to];
				if(direction === FROM) {
					const {to} = this.state;
					this.currencyRequest(value, to);
				
				}
					this.calculate(direction,amount,toRate);
				});

	}

	calculate = (direction, value, rate) => {

			const valueTo = Number((value*rate).toFixed(2));
			const valueFrom = Number((value/rate).toFixed(2));

			if(direction === FROM) {
				this.setState({
					amountFrom: value,
					amountTo: valueTo
				});
			} else if(direction === TO) {
				this.setState({
						amountTo: value,
						amountFrom: valueFrom
					});
			}
	}

	inputChangeHandler = (direction, value) => {
			const toRate = this.state.currencyRates.rates[this.state.to];
			this.calculate(direction, value, toRate);
	}

	converterTabHandler = (value) => {
		this.setState({
			activeTab: value
		});
	}

  render() {
	const rates = !_.isEmpty(this.state.currencyRates) ? this.state.currencyRates.rates : {};
	const {isRatesLoaded, from, to, amountFrom, amountTo, activeTab} = this.state;
	const chosenPair = {from, to};
		
   return (
    <div className="App">
		<Header caption="Your Exchange Rate Application" />
		 <Container maxWidth="md" className="wrapper">
			 <Grid container spacing={3}>
				<Grid item xs={12} sm={8}>
					<Converter 
						rates={ rates}	
						chosenPair={ chosenPair} 
						selectChangeHandler={this.selectChangeHandler}
						inputChangeHandler={this.inputChangeHandler}
						amountFrom={amountFrom}
						amountTo={amountTo}
						activeTab={activeTab}
						converterTabHandler={this.converterTabHandler}
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<TodayRates  
						current={from}
						rates={rates}
					/>
				</Grid>
			  </Grid>
		 </Container>
    </div>
	);
  }
 
}

export default App;
