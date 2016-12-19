import React from 'react';

const peopleNameLine = ({name})=>(
			  <div>
			  	<h1> Who is {name} ?</h1>
			  </div>
);

peopleNameLine.propTypes = {
	name: React.PropTypes.string
};

export default peopleNameLine;
