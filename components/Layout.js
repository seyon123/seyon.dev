import Header from "./Header";
import Footer from "./Footer";
import ReactNotification from "react-notifications-component";

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<ReactNotification className="notifications" />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
