import React from 'react';
import _ from 'lodash';
import Candidate from './candidate';

const Candidates = ({
		candidateList,
		onClick
})=>{
	    const renderCandidate = ()=>( _.map(candidateList, (candidate,index) => <Candidate 
															key={candidate.name} 
															candidateName={candidate.name} 
															candidateImage={candidate.url} 
															onClick={onClick}
														/>
											 ));
			
	    
	return (	
		<table>
			<tbody>
				<tr>
				{renderCandidate()}
				</tr>
			</tbody>
		</table>
		);
};

	Candidates.propTypes = {
		candidateList: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
		onClick: React.PropTypes.func
	};

	export default Candidates;