import './Header.css';

export const Header = ()=>{
  return(
    <>
<nav class="navbar" >
  <div class="navbar-brand">Toko Buku Asadel</div>
  <div class="navbarbar" id="navbarNav">
    <ul>
      <li>
        <a href="/">New Arrival</a>
      </li>
      <li>
        <a href="/Search/Books">Search</a>
      </li>
    </ul>
  </div>
</nav>
    </> 
  )
}