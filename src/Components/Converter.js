import React from 'react';
import CurrencyConverter from './CurrencyConverter';
import TabsSelector from './TabsSelector';
import ChartsBlock from './ChartsBlock';


const Converter = ({activeTab, converterTabHandler, ...props}) => {
	
		return (
			<div className="converter-wrapper">
				<TabsSelector 
					activeTab={activeTab}
					converterTabHandler={converterTabHandler}
				/>
			{activeTab === 0 && <CurrencyConverter {...props}/>}
			{activeTab === 1 && <ChartsBlock  
				base={props.chosenPair.from} 
				to={props.chosenPair.to}
			/>}
				
			</div>
		);
	
}

export default Converter;