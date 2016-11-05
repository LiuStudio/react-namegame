import React from 'react';

export default class PeopleName extends React.Component{
	constructor(){
		super();
	};

	render(){

		return(
			  <div>
			  	<h1> Who is {this.props.peoplename} ?</h1>
			  </div>
			);
	};
}