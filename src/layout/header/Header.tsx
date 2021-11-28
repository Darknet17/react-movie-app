import {
    Button,
    Classes,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading,
    InputGroup
} from "@blueprintjs/core";

const Header = () => {
    return(
        <>
            <Navbar className="bp3-dark">
                <NavbarGroup>
                    <NavbarHeading><h3>Movie</h3></NavbarHeading>
                    <InputGroup className="bp3-round" leftIcon="search" placeholder="Search movie" type="text"/>
                    <NavbarDivider />
                    <Button className={Classes.MINIMAL} icon="home" text="Home" />
                    <Button className={Classes.MINIMAL} icon="document" text="Files" />
                </NavbarGroup>
            </Navbar>
        </>
    )
};

export default Header;
