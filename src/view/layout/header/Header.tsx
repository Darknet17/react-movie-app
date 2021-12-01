import {
    Classes,
    Button,
    InputGroup
} from "@blueprintjs/core";

const Header = () => {
    return(
        <>
            <nav className="bp3-navbar bp3-dark">
                <div>
                    <div className="bp3-navbar-group bp3-align-left">
                        <div className="bp3-navbar-heading" style={{width: "25%"}}>Movie</div>
                        <InputGroup
                            className="bp3-round"
                            leftIcon="search"
                            placeholder="Search movie"
                            type="text"
                            rightElement={<Button className={Classes.MINIMAL} text="Buscar" />}
                        />
                    </div>
                    <div className="bp3-navbar-group bp3-align-right">
                        <Button className={Classes.MINIMAL} icon="film" text="Movies" />
                        <Button className={Classes.MINIMAL} icon="desktop" text="Tv Shows" />
                        <Button className={Classes.MINIMAL} icon="star" text="People" />
                    </div>
                </div>
            </nav>
        </>
    )
};

export default Header;
