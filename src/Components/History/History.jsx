import React, { Component } from 'react';

class History extends Component {
	render() {
		return (
			<div className="Content History">
				<div className="logo"></div>
				<div className="history-header"></div>
				<div className="history-content">
					<div className="history-content-title">The History of Coffee</div>
					<div className="history-content-picture-and-text-container">
						<div className="history-content-picture"></div>
						<div className="history-content-text">
							<p>
								Coffee grown worldwide can trace its heritage back centuries to the ancient coffee
								forests on the Ethiopian plateau. There, legend says the goat herder Kaldi first discovered the
								potential of these beloved beans.
							</p>
							<p>
								The story goes that that Kaldi discovered coffee after he noticed that after eating the
								berries from a certain tree, his goats became so energetic that they did not want to sleep at
								night.
							</p>
							<p>
								Kaldi reported his findings to the abbot of the local monastery, who made a drink with the
								berries and found that it kept him alert through the long hours of evening prayer. The abbot
								shared his discovery with the other monks at the monastery, and knowledge of the energizing
								berries began to spread.
							</p>
							<p>
								As word moved east and coffee reached the Arabian peninsula, it began a journey
								which would bring these beans across the globe.
							</p>
							<p>
								Coffee cultivation and trade began on the Arabian Peninsula. By the 15th century,
								coffee was being grown in the Yemeni district of Arabia and by the 16th century it was
								known in Persia, Egypt, Syria, and Turkey.
							</p>
							<p>
								With thousands of pilgrims visiting the holy city of Mecca each year from all over the
								world, knowledge of this “wine of Araby” began to spread.
							</p>
							<p>
								European travelers to the Near East brought back stories of an unusual dark black
								beverage. By the 17th century, coffee had made its way to Europe and was becoming popular
								across the continent.
							</p>
							<p>
								As demand for the beverage continued to spread, there was fierce competition to
								cultivate coffee outside of Arabia.
							</p>
							<p>
								Missionaries and travelers, traders and colonists continued to carry coffee seeds to
								new lands, and coffee trees were planted worldwide. Plantations were established in
								magnificent tropical forests and on rugged mountain highlands. Some crops flourished, while
								others were short-lived. New nations were established on coffee economies. Fortunes were
								made and lost. By the end of the 18th century, coffee had become one of the world's most
								profitable export crops. After crude oil, coffee is the most sought commodity in the world.
							</p>
						</div>
					</div>
				</div>
				<div className="history-footer">
					"Coffee - the favorite drink of the civilized world." - Thomas Jefferson
				</div>
			</div>
		);
	}
}

export default History;