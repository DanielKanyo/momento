import React, { Component } from 'react';
import { FacebookProvider, Like } from 'react-facebook';

class Home extends Component {
	render() {
		return (
			<div className="Home">
				<div className="site-header">
					<div className="logo"></div>
					<div className="social-container">
						<FacebookProvider appId="">
							<Like href="https://www.facebook.com/coffee.momento/" layout="button_count" share />
						</FacebookProvider>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;