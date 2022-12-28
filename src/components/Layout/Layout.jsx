import { Navigation } from "components/Navigation/Navigation";
import { Outlet , useLocation} from "react-router-dom";
import { Container, Header } from "./Layout.styled";
import { Footer } from "components/Footer/Footer";


export const Layout = () => {
    const location = useLocation()
    return (
        <Container>
            <Header>{!location.pathname.includes('details') && <Navigation />}</Header>
            <main><Outlet /></main>
            <Footer>Footer</Footer>
            
        </Container>
    )
}

export default Layout;