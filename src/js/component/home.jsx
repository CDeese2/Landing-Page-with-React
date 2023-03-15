import React from "react";
import Header from "./header.jsx"
import Jumbotron from "./jumbotron.jsx"
import Cards from "./cards.jsx"
import Footer from "./footer.jsx"


//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
	return (
			<>
			<div><Header/></div>		
			<div className="container">
			<p></p>
			<div className="mb-3"><Jumbotron/></div>
			<div className="row">
				<div className="col-sm-4 col-md-3 mb-3"><Cards img="https://bosskitchen.com/wp-content/uploads/2021/02/funny-food-13.jpg" title="Burger Wasssa" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
				</div>
				<div className="col-sm-4 col-md-3 mb-3"><Cards img="https://images.rawpixel.com/image_400/cHJpdmF0ZS9zdGF0aWMvaW1hZ2Uvd2Vic2l0ZS8yMDIyLTA0L2xyL3B4NjA3MDM4LWltYWdlLWt3eXAzdTZ0LmpwZw.jpg" title="SupFry Guy" text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
				</div>
				<div className="col-sm-4 col-md-3 mb-3"><Cards img="https://s3.amazonaws.com/craftfoxes-assets/articles/images/000/002/174/blog.jpg?1375876289" title="Snakeberry" text="Led do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent semper feugiat nibh sed."/>
				</div>
				<div className="col-sm-4 col-md-3 mb-3"><Cards img="https://bosskitchen.com/wp-content/uploads/2021/02/funny-food-14.jpg" title="Banana Spooning" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
				</div>
				<div className="col-sm-4 col-md-3 mb-3"><Cards img="https://media.istockphoto.com/id/1049890848/photo/funny-avocado.jpg?s=612x612&w=0&k=20&c=nAI2527QAT4KElblfvzbMFqbSW35U4-rBSE27jkac3I=" title="Avocad Oh-no"  text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
				</div>
				<div className="col-sm-4 col-md-3 mb-3"><Cards img="https://media.istockphoto.com/id/171223175/photo/broccoli-portrait.jpg?s=612x612&w=0&k=20&c=3mlHoTTUJAZlI2aXMhOLoqHSVEUXFTJYFZIEMmmPM6U=" title="BroccoHair" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
				</div>
				<div className="col-sm-4 col-md-3 mb-3"><Cards img="https://media.istockphoto.com/id/181887901/photo/creative-childrens-food.jpg?s=612x612&w=0&k=20&c=uDIMHvbGTGrJnI99cGRwEOjJv0-3hE3emjO9N-FcAS8=" title="Fish Fruits" text="Led do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent semper feugiat nibh sed."/>
				</div>
				<div className="col-sm-4 col-md-3 mb-3"><Cards img="https://scontent-mia3-1.xx.fbcdn.net/v/t1.18169-9/47672_110068375717726_2039634_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=-kvFA-EMeD8AX8cwt6_&_nc_ht=scontent-mia3-1.xx&oh=00_AfBRr7h0EroAzsuoHYq_FsXK60UsU6sB7zDG58lS7MZT2g&oe=643725A4" title="PizzaCat"  text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
				</div>

			</div>
			{/* <h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p> */}
		</div>
		<Footer/>
		</>
	);
};

export default Home;
