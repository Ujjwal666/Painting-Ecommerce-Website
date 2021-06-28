import React from 'react'
import "./About.css"

function About() {
	return (
		<div className="about">
			<div className="first txt">
				<h1>For a New Journey</h1>
				<p>Nepalinters, a group of painters from Nepal, is a new 
					journey initiated by the students who wants to promote their
					culture and traditions through the colors and the talent they
					possess. 
				</p>
			</div>
			<div className="second txt">
				<h1>What can be found?</h1>
				<p>Nepalinters lets its customer to find what they are looking for
					and provides best posibile user experience and satisfacttion on 
					their paintings.You can also further contact us if you like anything
					or didn't found on the site to potray it in the form of paintings.
					We also feature and promote the largest selection of nepali
					artists along with international artists.
				</p>
			</div>	
			<div className="third txt">
				<h1>Nepalinters Specialist</h1>
				<div className="thi txt">
					<div className="im">
						<img 
							src="https://media-exp3.licdn.com/dms/image/C4D03AQFCCvWTDalsww/profile-displayphoto-shrink_800_800/0/1600013378951?e=1629331200&v=beta&t=lEJ8eNqpLPW-wfbpabDPZRH2MtvV1usgYTPv1RKbxRw"	
							alt=""
						/>
						<p>Ujjwal Adhikari</p>
					</div>	
					<p>We are all here to help you find the art you love Nepalinters
						members are always there for anykind of help needed to its
						customers.Wherever you are in you want to immerse in this 
						journey our specialists are there to help you.
					</p>
				</div>	
			</div>			
		</div>
	)
}

export default About