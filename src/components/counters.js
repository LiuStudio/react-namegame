import React from 'react';
import Counter from './counter';

export default class Counters extends React.Component{
	constructor(props){
		super(props);
	};

	render(){

		return(
			 <table>
			 	<tbody>
			 		<tr>
			 			<td>
			  				<Counter counts={this.props.correctCnt} text="Right" />
			  			</td>
			  			<td>
			  				<Counter counts={this.props.errorCnt} text="Wrong"/>
			  			</td>
			  		</tr>
			  	</tbody>
			 </table> 				
			);	
	};
}