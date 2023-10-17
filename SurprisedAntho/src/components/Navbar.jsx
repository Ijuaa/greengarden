function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbarContent">
                <img className="logoOff" src="/assets/Logo2.png" alt="" />
                <img className="textGreenGarden" src="/assets/NavText2.png" alt="Green Garden" />
                <div className="liNav">
                    <h1 className="navbarBrand">My Brand</h1>
                    <h1 className="navbarContact">Contact</h1>
                    <img className="logoShoppingcart" src="/assets/navShoppingCart.png" alt="" />                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar;