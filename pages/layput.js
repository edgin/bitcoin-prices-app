import Navbar from '../components/navbar.js';


const Layout = (props) => (
	<div>
		<Navbar/>
		{props.children}
	</div>
);

export default Layout;