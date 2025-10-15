import './App_desktop.css'
import './App_mobile.css'

export default () => {
    return (
        <>
        <header>
            <a id="hamburger-btn" href="#navbar"><i class="fa-solid fa-bars" aria-hidden="true"></i></a>
            <nav id="navbar">
                <ul>
                    <a id="close-btn" href="#"><i class="fa-solid fa-xmark" aria-hidden="true"></i></a>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li class="dropdown"><a href="#">Resources</a>
                        <ul class="dropdown-menu">
                            <li><a href="#">JavaScript</a></li>
                            <li><a href="#">NodeJs</a></li>
                            <li><a href="#">ExpressJs</a></li>
                            <li><a href="#">Docker</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}