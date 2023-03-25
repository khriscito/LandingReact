import React from "react";

const Navbar= () =>  
{
    
return(


    <div>

<nav class="navbar navbar-dark bg-dark navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid row">
    <a class="navbar-brand col-9" href="#">Navbar Boostrap</a>
    <div class="collapse" id="navbarToggleExternalContent">
</div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 p-5">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
      

    </div>
  </div>
</nav>
  </div>



)


}

export default Navbar;