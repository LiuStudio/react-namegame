import React from 'react';

const Candidate = ({
		candidateName, 
		candidateImage, 
		onClick
}) =>(
		<td>
			<label className = "hidden"> {candidateName} </label>
			<img className = "img-circle candidate-image" 
				 src = {candidateImage} 
				 onClick={() =>onClick(candidateName)}/>
		</td>
	);

Candidate.propTypes = {
	candidateName: React.PropTypes.string,
	candidateImage: React.PropTypes.string,
	onClick: React.PropTypes.func
};


export default Candidate;