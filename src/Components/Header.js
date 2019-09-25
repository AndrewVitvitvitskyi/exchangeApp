import React from 'react';

const Header = ({caption, ...props}) => {
	return <div className="header">{caption}</div>
};

Header.defaultProps ={
	caption: 'Your header'
};

export default Header;