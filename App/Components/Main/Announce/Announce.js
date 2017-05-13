import React, {Component} from 'react';
import {
	Text,
	View,
	ListView,
	TextInput,
	TouchableOpacity,
	RefreshControl
} from 'react-native';
import Authentication from '../../Authentication/Authentication.js';

class Announce extends Component {
	constructor(props){
		super(props);
		this.state={
			refreshing: false,
			dataSource: new ListView.DataSource({rowHasChanged:(r1, r2)=>r1!=r2}),
			page:1
		}
	}

	loadNewData(){

	}

	render() {
		return (
			<View style={{padding: 10}}>
				<View style={{padding: 20}}>
					<ListView 
					refreshControl={
						<RefreshControl
							refreshing={this.state.refreshing}
							onRefresh={this.loadNewData.bind(this)}
						/>
					}
					dataSource={this.state.dataSource}
					renderRow={(row) => 
						<View style={{padding:10, borderWidth:1, margin:5}}>
							<TouchableOpacity>
								<Text>{row.name}</Text>
							</TouchableOpacity>
						</View>
					}
				/>
				</View>
			</View>
		);
	}

	componentDidMount(){
		fetch("http://188.166.222.158:8080/announce", {
			method: 'POST',
  			headers: {
    			'Content-Type': 'application/json',
  			},
  			body: JSON.stringify({
    			page: 1
  			})
		})
		.then((response)=>response.json())
		.then((responseJson)=>{
			//console.log(responseJson);
			this.setState({
				dataSource: this.state.dataSource.cloneWithRows(responseJson.announce),
			});
			//console.log(this.state.dataSource);
		})
		.catch((error)=>{
			console.log(error);
		});
	}
}

export default Announce;