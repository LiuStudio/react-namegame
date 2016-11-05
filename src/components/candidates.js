import React from 'react';
import _ from 'lodash';
import Candidate from './candidate';

export default class Candidates extends React.Component{
	constructor(props){
		super(props);
	};

	renderItems(){
		return _.map(this.props.candidatelist, (candidate,index) => <Candidate key={index} candidatename={candidate.name} candidateimg={candidate.url} candidatelocation={index} onClick={this.props.onClick.bind(this)}/>
			);
	};

	// render(){

	// 	return(
	// 		<table>
	// 			<tbody>
	// 			<tr>
	// 				<td>
	// 					<Candidate candidatename={this.props.candidatename} candidateimg={this.props.candidateimg}/>
	// 				</td>
	// 				<td>
	// 					<Candidate candidatename={this.props.candidatename} candidateimg={this.props.candidateimg}/>
	// 				</td>
	// 				<td>
	// 					<Candidate candidatename={this.props.candidatename} candidateimg={this.props.candidateimg}/>
	// 				</td>
	// 				<td>
	// 					<Candidate candidatename={this.props.candidatename} candidateimg={this.props.candidateimg}/>
	// 				</td>
	// 				<td>
	// 					<Candidate candidatename={this.props.candidatename} candidateimg={this.props.candidateimg}/>
	// 				</td>
	// 			</tr>
	// 			</tbody>
	// 		</table>
	// 		);
	// };

	render(){
		return(
		<table>
			<tbody>
				<tr>
					{this.renderItems()};
				</tr>
			</tbody>
		</table>
		)
	}
}