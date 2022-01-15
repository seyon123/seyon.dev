import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import ReactNotification from "react-notifications-component";

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<link
					rel="stylesheet"
					async
					href="https://use.fontawesome.com/releases/v5.13.1/css/all.css"
					integrity="sha384-xxzQGERXS00kBmZW/6qxqJPyxW3UR0BPsL4c8ILaIWXva5kFi7TxkIIaMiKtqV1Q"
					crossOrigin="anonymous"
				/>
				<script async src="https://documentcloud.adobe.com/view-sdk/main.js"></script>
			</Head>

			<Header />
			<ReactNotification className="notifications" />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
