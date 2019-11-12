import React, {useEffect} from 'react';
import logo from './img/Asset 2.png';
import flor from './img/flor.svg';
import flor1 from './img/flor.svg';
import flor2 from './img/flor.svg';
import flor3 from './img/flor.svg';
import flor4 from './img/flor.svg';
import flor5 from './img/flor.svg';
import flor6 from './img/flor.svg';
import github from './img/github.png';
import linkedin from './img/linkedin.png';
import img1 from './img/pagper.png';
import img2 from './img/crypto.png';
import img3 from './img/ontech.png';
import img4 from './img/d3.png'
import './App.css';

function App() {
	
	useEffect(() => {
		window.onscroll = () => {
			console.log(window.scrollY);
		}
	})

	return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
		<img src={flor} alt="flor" className='flor'/>
		<img src={flor1} alt="flor" className='flor'/>
		<img src={flor2} alt="flor" className='flor'/>
		<img src={flor3} alt="flor" className='flor'/>
		<img src={flor4} alt="flor" className='flor'/>
		<img src={flor5} alt="flor" className='flor'/>
		{/* <img src={flor6} alt="flor" className='flor'/> */}
        <h1>
			Desarrollo Web
        </h1>        
      	</header>

		<div className='parallax'>

				<div className='home' ></div>

				<div className='inicio' >
					<h1>Mi nombre es Federico Gómez</h1>
					<p>
						Soy una persona autodidacta que se especializa en los lenguajes de programación Javascript, para el lado del cliente, y python para el lado de servidor. Cuento con experiencia y conocimientos en diferentes disciplinas que me permiten tener una amplia perspectiva de los problemas y proponer soluciones.
					</p>
					<p>Entre los temas que más me interesan se encuentran el desarrollo de aplicaciones web y mobile, así como la tecnología blockchain, desarrollo de video juegos.</p>
				</div>
			<section>
				<div className='firstSec'>
					<div>
						<h3>Stack</h3>
					</div>
					<ul>
						<li>HTML</li>
						<li>CSS</li>
						<li>Javascript</li>
						<li>Illustrator</li>
						<li>React</li>
						<li>Mysql</li>
						<li>REST API</li>
					</ul>
				</div>
			</section>
			<section className='transparente' ></section>
			<section>
				<div className='stack'>
					<h1>Portafolio</h1>
					<div className='row'>
						<div className='col' >
							<img src={img4} alt="pendiente" className='people'/>
							Población de México
							<div>
								<a href="#top">Demo</a>
								<span>-</span>
								<a href="https://github.com/FedeSabaiz/graficod3PobMex">Code</a>
							</div>
						</div>
						<div className='col' >
							<img src={img2} alt="proyecto cryptomonedas" className='crypto'/>
							Cryptomonedas
							<div>
								<a href="https://cryptomonedas.herokuapp.com/">Demo</a>
								<span>-</span>
								<a href="https://github.com/FedeSabaiz/crypto">Code</a>
							</div>
						</div>
						<div className='col' >
							<img src={img3} alt="proyecto ontech" className='ontech'/>
							Página ONTECH
							<div>
								<a href="https://ontech.herokuapp.com/">Demo</a>
								<span>-</span>
								<a href="#top">Code</a>
							</div>
						</div>
						<div className='col' >
							<img src={img1} alt="página personal" className='personal'/>
							Web personal anterior
							<div>
								<a href="https://fede-gomez.herokuapp.com/">Demo</a>
								<span>-</span>
								<a href="https://github.com/FedeSabaiz/pagpersonal">Code</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='final' >
				
				<footer>
							<div className='network'>
								<p>
									Redes Sociales
								</p>
								<div>
									 <a href="https://github.com/FedeSabaiz"> <img src={github} alt="github" className='social' /> </a>
									<a href="https://www.linkedin.com/in/federico-g%C3%B3mez-80bb05191/"><img src={linkedin} alt="github" className='social' /></a>
								</div>
							</div>
						</footer>
				
			</section>
		</div>
    </div>
  );
}

export default App;
