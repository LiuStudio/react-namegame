import React from 'react';

const Counter = ({
		text,
		counts
	})=> (

		<div className="btn btn-success btn-lg">
		  	  <label> {text}</label>
		      <p>{counts}</p>
		</div>
	);

Counter.propTypes = {
	text : React.PropTypes.string,
	counts: React.PropTypes.number
}

export default Counter;