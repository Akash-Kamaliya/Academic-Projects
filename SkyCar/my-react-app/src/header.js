function Header(){
    return(
        <header>
      <div class="container">
        <div class="logo">
          <i class="fas fa-car"></i>
          <span>SkyCar</span>
          <div><a href="#">Carpool</a></div>
          <div><a href="#">Bus</a></div>
        </div>
        <div class="dropdown">
          <div><a href="#">About us</a></div>
          <div><a href="#">Contect Us</a></div>
          <a
            class="btn dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <button class="temp1">
              <i class="fa-solid fa-user temp2"></i>
            </button>
          </a>

          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#"
                ><div class="temp">
                  <p>Login</p>
                  <i class="fa-solid fa-chevron-right"></i></div
              ></a>
            </li>
            <li>
              <a class="dropdown-item" href="#"
                ><div class="temp">
                  <p>Sign Up</p>
                  <i class="fa-solid fa-chevron-right"></i></div
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    )
}
export default Header