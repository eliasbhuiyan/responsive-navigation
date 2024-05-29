import Navbar from './components/MegaMenu';
import NavItem from './components/NavItem';

function App() {
    return (
        <div className="App">
            <Navbar>
                <NavItem>Home</NavItem>
                <NavItem>About</NavItem>
                <NavItem>Contact</NavItem>
            </Navbar>
        </div>
    );
}

export default App;
