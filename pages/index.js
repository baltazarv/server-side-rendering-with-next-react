import React, { Component } from 'react';
import MainLayout from '../components/layouts/MainLayout';
import Link from 'next/link';
import axios from 'axios';

class Home extends Component {
	static async getInitialProps({ pathname, query, asPath, req, res }) {
		let userData;
		try {
			const response = await axios.get('https://jsonplaceholder.typicode.com/users/');
			userData = response.data;
		} catch {
			console.log('error')
		}

		console.log('pathname:', pathname, 'query:', query, 'asPath:', asPath)
		// console.log('req', req)

		return {
			userData
		}
	}

	constructor(props) {
		super(props);
		// this.state = {
		// 	userData: this.props.userData,
		// }
	}

	renderUserList = users => (
		users.map((user, index) => {
			return <li className="list-group-item" key={index}>
				<Link href={{
					pathname: '/users/profile',
					query: {
						userId: user.id,
					},
				}}>
					<a>{user.name}</a>
				</Link> (params)
			</li >
		})
	);

	render() {
		return (
			<>
				<MainLayout>
					<h2>Welcome</h2>
					<h3>Pick a user</h3>
					<ul className="list-group">
						{this.renderUserList(this.props.userData)}
					</ul>

					<div style={{ color: 'red' }}>
						inline styles
					</div>
					<div className="jsxStyles">
						JSX styles
					</div>
					<style jsx>
						{`
							.jsxStyles {
								color: salmon;
							}
						`}
					</style>
					<div className="stylesheet">
						CSS stylesheet in /public
					</div>
				</MainLayout>
			</>
		)
	}
}

export default Home;
