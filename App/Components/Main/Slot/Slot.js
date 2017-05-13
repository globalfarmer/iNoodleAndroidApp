import React, {Component} from 'react';
import {
	Text,
	View,
	ListView,
	TextInput,
	TouchableOpacity
} from 'react-native';
import Authentication from '../../Authentication/Authentication.js';
import getCode from '../../../api/getCode.js';
import getTerm from '../../../api/getTerm.js';

class Slot extends Component {
	constructor(props){
		super(props);
		this.state={
			dataSource: new ListView.DataSource({rowHasChanged:(r1, r2)=>r1!=r2}),
			code: "",
			term: ""
		}
		//console.log(this.state.code, this.state.term);
	}


	render() {
		return (
			<View style={{padding: 10}}>
				<Text>{this.state.code}</Text>
	
				<View style={{padding: 20, borderWidth: 1}}>
					<ListView 
					enableEmptySections
					dataSource={this.state.dataSource}
					renderRow={(row) => 
						<View style={{padding:10, borderWidth:1, margin:5}}>
							<Text>{row.course.name}</Text>
						</View>
					}
				/>
				</View>
			</View>
		);
	}

	componentDidMount(){
		fetch("http://188.166.222.158:8080/slot", {
			method: 'POST',
  			headers: {
    			'Content-Type': 'application/json',
  			},
  			body: JSON.stringify({
    			code: '14020190',
    			term: '2016-2017-1'
  			})
		})
		.then((response)=>response.json())
		.then((responseJson)=>{
			//console.log(responseJson);
			this.setState({
				dataSource: this.state.dataSource.cloneWithRows(responseJson.slot),
			});
			//console.log(this.state.dataSource);
		})
		.catch((error)=>{
			console.log(error);
		});
	}
}

export default Slot;