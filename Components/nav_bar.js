const Nav_Bar = () =>{
    return `<header>
                <div class="nav-wrapper">
                    <div class="logo-container">
                        <a href="/index.html"><img class="logo" src="https://i.postimg.cc/nVQpKM28/istockphoto-1218232134-612x612-removebg-preview.png" alt="Logo">
                        </a>
                    </div>
                    <nav>
                        <input class="hidden" type="checkbox" id="menuToggle">
                        <label class="menu-btn" for="menuToggle">
                            <div class="menu"></div>
                            <div class="menu"></div>
                            <div class="menu"></div>
                        </label>
                        <div class="nav-container">
                            <ul class="nav-tabs">
                                <li class="nav-tab">
                                    <a href="/index.html" class="text-decoration-none">Home</a>
                                </li>
                                <li class="nav-tab">
                                    <a href="/Pages/product.html" class="text-decoration-none">Product</a>
                                </li>
                                <li class="nav-tab">
                                    <a href="/Pages/cart.html" class="text-decoration-none">Cart</a>
                                </li>
                                <li class="nav-tab">
                                    <a href="/Pages/admin.html" class="text-decoration-none">Admin</a>
                                </li>
                                <li class="nav-tab">
                                    <a href="/Pages/login.html" class="text-decoration-none">Login</a>
                                </li>
                                <li class="nav-tab">
                                    <a href="/Pages/signup.html" class="text-decoration-none">SignUp</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>`
}

export default Nav_Bar()