import React from 'react';
import Candidates from './candidates';
import PeopleName from './peoplename';
import Counters from './counters';
import $ from 'jquery';
//const data=require('../../db.json');


//setTimeout(()=>{console.log('data is '+JSON.stringify(data[0]));}, 3000);

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

//console.log(JSON.stringify(data));


export default class App extends React.Component{
	constructor(){
		super();
		console.log("in constructor");
		this.state = {
			correctCnt : 0,
			errorCnt : 0,
			numberofcandidate: 5,
			peopleidx: [0,1,2,3,4],
			people: INITIAL_STATE,
			correctpeopleidx: 3,
			pdata : []
		}
	};

	// componentwillmount(){
	// 	let data=[];
	// 	$.ajax({
	// 		dataType: "json",
	// 		url: "http://api.namegame.willowtreemobile.com",
	// 		success: (people)=>{
	// 		console.log(people[0]);
	// 		data = people;
	// 	}
	// });
	// }
	
	componentDidMount(){
		console.log("in didmount");
		let mydata = [];
		$.get('db.txt', function(file) {
		  console.log('get db.txt data is');
		  let mydata=$.parseJSON(file);
          console.log(mydata[0]);
          this.state.pdata=mydata;
          console.log(this.state.pdata[1]);
        }.bind(this)); 
        
	}

	SelectCorrectPeople(){
		return Math.floor((Math.random()*this.state.numberofcandidate)+1);
	}
	SelectPeopleGroup(){
		return this.randomSelectIdxGen(this.state.numberofcandidate,this.state.pdata.length);
	}
	FindPeople(){
		let selectedpeople=[];
		console.log(this.state.peopleidx);
		selectedpeople=this.state.peopleidx.map((x)=>{return this.state.pdata[x];});
		return selectedpeople;
		console.log(selectpeople);
	};

	FindPeopleName(selectedpeople){
		let peoplename=[];
		peoplename=selectedpeople.map((x)=>{return x.name});
	};

	FindPeopleImg(selectedpeople){
		let peopleimg=[];
		peopleimg=selectedpeople.map((x)=>{return x.url});
	};

	CorrectIncrement(){
		this.state.correctCnt++;
		this.setState({correctCnt: this.state.correctCnt});

		//this.state.correctCnt++;
	};

	ErrorIncrement(){
//		this.state.errorCnt++;
		console.log('increment error counter, errorcounter is '+this.state.errorCnt);
		//this.setState({errorCnt: this.state.errorCnt+1})
		this.state.errorCnt++;
		this.setState({errorCnt: this.state.errorCnt});
		console.log('increment error counter, errorcounter is '+this.state.errorCnt);
		console.log("peopleidx is "+this.state.peopleidx);
		console.log("people is "+this.state.people);
		console.log("correctpeopleidx is "+this.state.correctpeopleidx);

	};

	ResetCounter(){
		this.state.correctCnt = 0;
		this.state.errorCnt = 0;

		this.setState({correctCnt: this.state.correctCnt, 
					   errorCnt: this.state.errorCnt});

//		this.state.correctCnt=0;
//		this.state.errorCnt=0;
	};

	randomSelectIdxGen(n, max){
		let idxArr=[];
		for (let i = 0; i<n; i++){
			idxArr.push(Math.floor((Math.random() * max) + 1));
		}
		return idxArr;
	}


	shuffleCandidate(){
		this.state.peopleidx= this.SelectPeopleGroup();
		this.state.people=this.FindPeople();
		this.state.correctpeopleidx = this.SelectCorrectPeople();
		console.log("peopleidx is "+this.state.peopleidx);
		console.log("people is "+this.state.people);
		console.log("correctpeopleidx is "+this.state.correctpeopleidx);
		this.setState({peopleidx:this.state.peopleidx});
		this.setState({people:this.state.people});
		this.setState({correctpeopleidx: this.state.correctpeopleidx});
	}

	onClick(itemidx){
		console.log("calling onclick itemidx is "+itemidx);
		console.log("calling onclick correctpeopleidx is "+this.state.correctpeopleidx);
		if( itemidx === this.state.correctpeopleidx){
			console.log('choose the right people');
			this.CorrectIncrement();
			this.shuffleCandidate();
		}else{
			console.log('choose the wrong people');
			this.ErrorIncrement();
		}
	}
	
	render(){

		return(
			<div className = "container">
				    
					<Counters correctCnt = {this.state.correctCnt} errorCnt={this.state.errorCnt}/>
					<button className="btn btn-info btn-lg" onClick={this.ResetCounter.bind(this)}> Do IT AGAIN!</button>
					<PeopleName peoplename={this.state.people[this.state.correctpeopleidx].name}/>
					<Candidates candidatelist = {this.state.people} onClick={this.onClick.bind(this)}/>
				
			</div>
			);
	};
}