import React, {Component} from "react";
// import React-dom from "react";
import PostItem from './postItem';
class PostList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			news: [{
				"id": 10000,
				"name": "taohaidi",
				"age": 18,
				"gender": "女"
			}
			]
		}
	}
	// 192.168.155.1
	handle_click = () => {
		let t = this;
		fetch("http://localhost:3000/user", {
			method: "GET"
		}).then(
			function(res) {
				res.json().then(function(data) {
					t.setState({
						news: data
					})
				})
			}
		)
	};
	render() {
		return (
			<div>
				<button onClick={this.handle_click}>button</button>
				<br/>
				信息列表:
				{this.state.news.map((item, i) => 
					<div key={i}>
						<PostItem 
						id = {item.id}
						age = {item.age}
						name = {item.name}
						gender = {item.gender}
						/>
					</div>
				)}
			</div>
		)
	}
}
export default PostList;