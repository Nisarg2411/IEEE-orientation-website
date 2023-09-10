import React from 'react'
import './Ecards.css'
import figma from '../../Assets/events-image/figma.jpg'
import isro from '../../Assets/events-image/isro.jpeg'
import orientation from '../../Assets/events-image/orientation.jpg'
import pagya from '../../Assets/events-image/pagya.jpeg'
import sight from '../../Assets/events-image/sight.jpg'
import startup from '../../Assets/events-image/starup.jpg'
const Ecards = () => {
  return (
	<div id="wrapper">
	<div class="container">
		<h1 class="h1">Moments in Time</h1>
		<div class="Gallery">

			<figure class="card">
				<img src={orientation} alt=""/>
				<figcaption><a className='caption' href="https://www.vgecg.ac.in/EventView.php?id=208">Gate to Gather2023
				</a>
				</figcaption>
			</figure>
			<figure class="card">
				<img src={figma} alt="" />
				<figcaption><a href='https://www.vgecg.ac.in/EventView.php?id=237'>Figma Unleashed </a></figcaption>
			</figure>

			<figure class="card">
				<img src={isro} alt="" />
				<figcaption><a href="https://www.vgecg.ac.in/EventView.php?id=255">INDUSTRIAL VISIT TO VSSE</a></figcaption>
			</figure>
			<figure class="card">
				<img src={startup} alt=""/>
				<figcaption><a href='/'>Startup 360 : stone to empire</a></figcaption>
			</figure>
			<figure class="card">
				<img src={pagya} alt=""/>
				<figcaption><a href="https://www.vgecg.ac.in/EventView.php?id=132">Project Pragya</a></figcaption>
			</figure>
			<figure class="card">
				<img src={sight} alt=""/>
				<figcaption><a href="https://www.vgecg.ac.in/EventView.php?id=262">SIGHT IEEE</a></figcaption>
			</figure>
		</div>
	</div>
</div>

  )
}

export default Ecards
