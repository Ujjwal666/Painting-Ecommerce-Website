import React from 'react'
import './Banner.css'
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
	return (
		<div className="banner">
			<div className="gradient"/>
			<Carousel
				className="carousel"
			 	autoPlay
			 	infiniteLoop
			 	showStatus={false}
			 	showIndicators={false}
			 	showThumbs={false}
			 	interval={5000}
			>
				<div>
					<img loading="lazy" src="https://lh3.googleusercontent.com/YaLjYEg-t80ZZ0g5IJMeX6_MCeooSvFxt27J8ydlBSiPqEnohqXAV1N_zLfKQwPg5XIlaXA0Pm_Dzw0fA5ED23wTBguJN72rYc7copvfHNIldeeeP09-n6j_Wws5_821uPkvvO272EIgKjlE5FDWi3ME3-cofQYJgL1Ajm-rA0uEblcnnsgWsMQeSE9vBB76ebKDWrdiNLtc_L_-TgiD0qleiBH1_cmSabZoec0HsQjKyge8RTv87mV57JFm5c2n9-lxkXjoBgYNj7PhPSJpwf8Ih73wqs2mCtc_SSb0pWTdQ2NScZGLVcRFXxtm37dEbVECKf-iXKs67iFTHfYNsWsSdON1Wg0SiGJSztZHF6k9bZPneIrWz-g_jhWVyKrZtI_cJRUBEbPznDDAVZgFjaekwrt40tOq6Wsxqi6i5IO_r1wSfiupPukRx8Z1HUSqAl67fejuKK19InangOP4T02S9c4QF-4OhKpJqdw0XzGuksDquRj7i42LvonovC2owxKat7oWyfr490QSmYzf2nOWXNN-BXy9YCNAlqYV-MDlHbN7dIAs5QO7asnTE74BYA8ejU65OfOmzmuxepdADNXZxHnATLLkVHK_zM4Qz3nY9dli_QATcCI9Z4S6aBqjFTe5r4WFgR51jVPGCwxC_qK_ntRA1NQyKlg-9pla5VsoTzgCxUqEponMKzUbwdGluf8QnOSy_ID87tZTrwFZtPJb=w970-h600-no?authuser=0" alt="" />
				</div> 	
				<div>
					<img loading="lazy" src="https://i.pinimg.com/originals/f6/c3/eb/f6c3eb801088777dde6a8f69ed852626.jpg" alt="" />
				</div>
				<div>
					<img loading="lazy" src="https://www.gartgallery.com.np/storage/images/art/photo-1586490713.jpg" alt="" />
				</div> 	  	
			</Carousel>
		</div>
	)
}

export default Banner