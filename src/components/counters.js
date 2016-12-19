import React from 'react';
import Counter from './counter';

const Counters = ({correctCount, errorCount})=>(
		 <table>
		 	<tbody>
		 		<tr>
		 			<td>
		  				<Counter counts={correctCount} text="Right" />
		  			</td>
		  			 <td>
		  				<Counter counts={errorCount} text="Wrong"/>
		  			</td>
		  		</tr>
		  	</tbody>
		 </table> 
	);

Counters.propTypes = {
	correctCount: React.PropTypes.number,
	errorCount : React.PropTypes.number
};

export default Counters;
					