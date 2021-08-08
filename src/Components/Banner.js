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
					<img loading="lazy" src="https://lh3.googleusercontent.com/lU9t9WLelFFriUgE9awbkvH98dIfkrH4nQMB_yiPszsfJwQns1p03ime5UV_OubAjRc9ppQtw7VqmmA-FdAr3W7sI1EOFuuwG6Vslk84Bbohf4pOF9COBkFqnD1KHs7wyqToK4rqUI1i9HwcfZWcePvqeo8WlxSjmoNN7ZATC68iyLWq-iL6ByJc04GbvI-PRDDJHYvU35BfSul_wrIkHtt9n8WKQi3UWpn5DMTxe0A0-SMWOY314sWOrpmSQu7NQthlyeL74aTqT_-Ic2jZ1yNrbzU9e2q-tiz7gcTl8bIbB1V30Y2qbVPWMDVxvTOL3lr7yy4M1jh42Pj5Xhu_x6VFNfJiybLljuH0R_3NKDEx_EVC4DWMQj6D8WfpL_3pwchpFETbyZllgM2wdQwdzy6PTU3I8-djc74OfDx2YleIm7FRD2KM1RL-TDjFksVCOIid5zIKmJkkcdz7OhQ5yJsNJ-NIdh14a0RhNeYlF3rsxocPi3tPyyjefVjA0yFPt5vBZfYHN8CnJHKAz0FYUIMrtWO5khJwE4v3i6CrsweFOsZPA07HSnN2DFktJ9vxN6E2fk6U7DIocuieYUZJFAYiT23aYXJ6kkOc_lvoADXr1DKECWjpKDkiu_wnu2id0UF3uS7LC4QI1BwoPTnUYIFvMttio1mtT49RLNz2y4Sy7oRgd-DrgG-83w_lR6uGUzK-bPawOdY7pGLnBFW5qv_h=w853-h663-no?authuser=0" alt="" />
				</div> 	
				<div>
					<img loading="lazy" src="https://lh3.googleusercontent.com/y7HL8rX024AfmIagLri5KhDVcsw-gE3ZLKOoJztal8UBz9Z_iGo6zz_Nh6bL8A_m25TpdJAltZkCowCd2BUmHnMDPeRmPxopr7Z0-BBW4_zK7bWmbag3nzOnlKhVPlDF6SHRITZWAbJExNMmH-CG0av3LAzcGOan1y3yrf5O6UBpcbd1qQDW1JUz2wkxwPvbXfBC3f-oILv1McCquxV8YazoxEQpkySRSNBMf-CZ9UVFC06vRYmh8Jlj50K5H-lGyAM2FdUrJvNasnP8O0vnZO58uvIN8hiNUjMU5RccIbsgGcKZZAbQS_S7hFFxxy7FAfMljOb8DVpyF4XYcpyED9EDjaBAlNwrJFvkvwMDu-PZ6oIHCh4srJVfcmkQoOIq6Bd-B4lHRYtMktjR27HzcT_mMAHW4kw06eF7Z6l_2qXEsrnXCXJSh7udlLmFb7SfxtcNTIPfetmQ_fQXtQFeOvgSsrRqzi3k-hu2bS07TVM1XxSEGHph0FRLtcE7gAejVKt1ShaV7lf2bpTVEyUfwcecpbM0vLAlnU6xZNBCHoKgFXk8HC2z0sNkIPsJbUrx4U_wu1AqIF7tF8JB3wY_IFC0CEG2zYtYCa3uD5f3ydCQH5uiiE8HJQGOH4mOtEDbdXfb31_Aw_Uxyu1JdXNB9Lc9tQ8KsFeqFLxRC4jcOms9TT7eTDsdD0PMD_edG-SWmoMAuWeO7U2Ks7LGA1LLWJjm=w860-h663-no?authuser=0" alt="" />
				</div>
			</Carousel>
		</div>
	)
}

export default Banner