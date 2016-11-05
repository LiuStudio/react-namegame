import React from 'react';

export default class Counter extends React.Component{
	constructor(props){
		super(props);
	};


	render(){

		return(
			  
			  	<div className="btn btn-success btn-lg">
					  	  <label> {this.props.text}</label>
					      <p>{this.props.counts}</p>
				</div>
			  
			);
	};
}