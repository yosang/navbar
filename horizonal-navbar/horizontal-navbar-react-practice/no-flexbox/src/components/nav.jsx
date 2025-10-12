function Nav() {
    return (
        <nav>
            <ul>
                <li><a href="/"><i class="fa-solid fa-house" aria-hidden="true"></i> Home</a></li>
                <li><a href="/network"><i class="fa-solid fa-network-wired" aria-hidden="true"></i>Network</a></li>
                <li><a href="/jobs"><i class="fa-solid fa-briefcase" aria-hidden="true"></i> Jobs</a></li>
                <li><a href="/messaging"><i class="fa-solid fa-comments" aria-hidden="true"></i> Messaging</a></li>
                <li><a href="/notifications"><i class="fa-solid fa-bell" aria-hidden="true"></i> Notifications</a></li>
            </ul>
        </nav>
    )
}

export default Nav