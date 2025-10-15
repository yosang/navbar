import './App_desktop.css'

export default () => {
    return (
        <>
        <header>
            <nav>
                <ul>
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