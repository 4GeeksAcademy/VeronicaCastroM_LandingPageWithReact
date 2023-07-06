import React from "react";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { Card } from "./Card";
import '../../styles/Home.css'
import { Button } from "./Button";


//create your first component
const Home = () => {
	return (
		<div className="main-container text-center">
			<Navbar/>
			<Header clase = 'header-container' greeting = 'A Warm Welcome!' text = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius rerum magnam sunt consequuntur eum saepe corrupti nisi aut, molestias libero {n} itaque laudantium voluptate quam esse ipsum totam est velit. Eveniet.' element= {<Button textoBoton='Call to action'/>} />
	        <div className="cards-container">
             <Card title ='Neque porro' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis tortor vitae lectus cursus, vitae egestas lorem pharetra. Etiam commodo non lacus eget dapibus. Vestibulum nisl quam, pretium et fermentum sed' textOfTheButton='Find more'/>
			 <Card title = 'quisquam est qui' text='Maecenas suscipit enim ac sem euismod, in finibus tortor sodales. Phasellus in blandit neque, sed convallis nibh. In libero felis, mattis eget eleifend cursus, vehicula non massa. Pellentesque a convallis ipsum. Donec ac iaculis maur.' textOfTheButton='More info' />
			 <Card title = 'dolorem ipsum' text='Proin sed augue sagittis, molestie nunc id, tincidunt nunc. Fusce lobortis dui lacinia, aliquet arcu eget, rutrum nibh. Maecenas eget mollis sapien. Integer eu vulputate risus. Aenean non purus tincidunt, congue mauris id, pulvinar nunc.' textOfTheButton='Read about'/>
			 <Card title='quia dolor sit' text='Vivamus orci lacus, ornare non urna et, commodo semper ante. Phasellus eu mauris venenatis, commodo est a, commodo velit. Aliquam ultrices tellus massa, et dapibus risus rhoncus ac. Lorem ipsum dolor sit amet, consectetur.' textOfTheButton='I agree'/>
			</div>
			<Header clase = 'footer-container' text ='Copyright Your Website 2019'/>
		</div>
			
	);
};

export default Home;
