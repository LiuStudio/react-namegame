import React from 'react';

export default class Candidate extends React.Component{
	constructor(props){
		super(props);
	};

	render(){
		console.log("render in candidate, this is "+this);
		return(
			<td>
				<label className="hidden"> {this.props.candidatename}</label>
				<img className="img-circle candidate-image" src={this.props.candidateimg} onClick={this.props.onClick.bind(this,this.props.candidatelocation)}/>
			</td>
			);
	};
}