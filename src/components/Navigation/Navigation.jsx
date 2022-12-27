
import { Nav,Header,HomeLink,List,Item } from "./Navigation.styled"

export const Navigation = () => {
    return (
        <Header>
            <Nav>
                <List>
                    <Item>
                        <HomeLink to='/' end>Home</HomeLink>
                    </Item>
                    <Item>
                <HomeLink to='/movies'>Movies</HomeLink>
                </Item>
                </List>
                </Nav>
        </Header>
    )
} 