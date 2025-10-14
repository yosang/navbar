import './App.css'

export default function () {
  return (
    <header>
    <a id="hamburger-btn" href="#navbar"><i class="fa-solid fa-bars" aria-hidden="true"></i></a>
    <nav id="navbar">
      <ul>
        <li><a href="#"><i class="fa-solid fa-xmark" aria-hidden="true"></i></a></li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>
    </nav>
    </header>
  );
}
