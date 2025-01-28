import 'bootstrap/dist/css/bootstrap.min.css';
import '../presentation/styles/globals.scss';
import '../presentation/styles/styles.scss';
import '../presentation/styles/_markdown.scss';
import type {AppProps} from 'next/app';
import NavBar from "@/presentation/components/navBar";
import Footer from "@/presentation/components/footer";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <NavBar />
        <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;