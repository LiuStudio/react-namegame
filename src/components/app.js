import React from 'react';
import Candidates from './candidates';
import PeopleName from './peoplename';
import Counters from './counters';
//import $ from 'jquery';
import fetch from 'isomorphic-fetch';

const INITIAL_STATE=[
{
    "name": "Abby Cook-",
    "url": "http://willowtreeapps.com/wp-content/uploads/2015/11/headshot_abby_cook-1.jpg"
  },
  {
    "name": "Abdul Yusuf",
    "url": "http://willowtreeapps.com/wp-content/uploads/2016/08/headshot_abdul_yusuf.jpg"
  },
  {
    "name": "Adam Shea",
    "url": "http://willowtreeapps.com/wp-content/uploads/2016/10/headshot_adam_shea.jpg"
  },
  {
    "name": "Adrian Guevara",
    "url": "http://willowtreeapps.com/wp-content/uploads/2016/06/headshot_adrian_guevara.jpg"
  },
  {
    "name": "Alan Hill",
    "url": "http://willowtreeapps.com/wp-content/uploads/2016/09/headshot_alan_hill.jpg"
  }
]


export default class App extends React.Component{
	constructor(){
		super();
		this.state = {
			correctCount : 0,
			errorCount : 0,
			numberOfCandidate: 5,
			peopleIdx: [0,1,2,3,4],
			people: INITIAL_STATE,
			correctPeopleIdx: 3,
			pdata : []
		};
	}

	
	componentDidMount(){

		let that = this;

		fetch('http://api.namegame.willowtreemobile.com')
    	.then((response) =>{
	        if (response.status >= 400) {
	            throw new Error("Bad response from server");
	        }
        	return response.json();
    	})
    	.then((data) => {
          that.setState({pdata:data});
    	});

	}

	selectCorrectPeople(){
		return Math.floor((Math.random()*this.state.numberOfCandidate));
	}
	
	selectPeopleGroup(){
		return this.randomSelectIdxGen(this.state.numberOfCandidate,this.state.pdata.length);
	}
	
	findPeople(){
		const selectedPeople = this.state.peopleIdx.map(x => this.state.pdata[x]);
		return selectedPeople;
	}

	findPeopleName(selectedPeople){
		const peopleName = selectedPeople.map(x => x.name);
		return peopleName;
	}

	findPeopleImg(selectedPeople){
		const peopleImg = selectedPeople.map(x => x.url);
		return peopleImg;
	}

	correctIncrement(){
		const correctCount = this.state.correctCount + 1;
		this.setState({correctCount});
	}

	errorIncrement(){
		const errorCount = this.state.errorCount + 1;
		this.setState({errorCount});
	}

	resetCounter(){
		this.setState({correctCount: 0, 
					   errorCount: 0
		});
	}

	randomSelectIdxGen(n, max){
		let idxArr=[];
		let i = 0;
		while(i<n){
			let curpick = Math.floor(Math.random()*max);
			if (idxArr.indexOf(curpick) === -1){
				idxArr.push(curpick);
				i++;
			}
		}
		return idxArr;
	}

	shuffleCandidate(){
		const selectedPeopleGroupArr = this.selectPeopleGroup();
		const peopleArr = this.findPeople();
		const correctPeopleIdxData = this.selectCorrectPeople();

		this.setState({peopleIdx : selectedPeopleGroupArr,
					   people : peopleArr,
					   correctPeopleIdx : correctPeopleIdxData
		             });
	}

	onClick(name){
		if( name === this.state.people[this.state.correctPeopleIdx].name){
			this.correctIncrement();
			this.shuffleCandidate();
		}else{
			this.errorIncrement();
		}
	}
	
	render(){
		return(
			<div className = "container">
							
					<Counters correctCount = {this.state.correctCount} 
							  errorCount={this.state.errorCount}
					/>
					<button className="btn btn-info btn-lg" 
							onClick={this.resetCounter.bind(this)}> 
					Do IT AGAIN!
					</button>
					<PeopleName name={this.state.people[this.state.correctPeopleIdx].name}/>
					<Candidates candidateList = {this.state.people} 
								onClick={this.onClick.bind(this)}
					/>
				
			</div>
			);
	};
}