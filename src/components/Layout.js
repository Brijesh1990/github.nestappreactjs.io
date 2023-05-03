import React from 'react';
import {Outlet,Link} from 'react-router-dom';
import { MDBContainer,MDBCard, MDBBtn, MDBRow, MDBNavbar } from 'mdb-react-ui-kit';
// const Layout=()=>{
function Layout()
{
    return (
        <>
           {/* navbar start here */}
 <MDBNavbar  className="navbar navbar-expand-lg p-2">

<MDBBtn type='button' className='ms-5 btn btn-sm btn-outline-dark'>Nest All Categories</MDBBtn>

<MDBBtn type='button' className='navbar-toggler ms-5 btn btn-outline-btn-dark' data-bs-toggle="collapse" data-bs-target="#btnColl">
   <i className='bi bi-grid-3x3'></i>
</MDBBtn>
<div className='collapse navbar-collapse' id='btnColl'>
<ul className='navbar-link'>
   <li><Link to=''>Hot Delas</Link></li>
   <li><Link to='/'>Home</Link></li>
   <li className='dropdown'><Link to="#" className='dropdown-toggle' data-bs-toggle="dropdown">About</Link>
   <ul className='dropdown-menu'>
   <li><Link to=''>Who we are ?</Link></li>
   <li><Link to=''>Chairman Messages</Link></li>
   <li><Link to=''>About Us</Link></li>
   <li><Link to=''>Our Locations</Link></li>
   </ul>
   </li>
   <li><Link to=''>Vendors</Link></li>
   <li><Link to=''>OurMenu</Link></li>
   <li><Link to=''>Blogs</Link></li>
   <li><Link to=''>Contact</Link></li>
   <li><Link to=''>Ourservices</Link></li>
   <li className='ms-5'><b><i className='bi bi-phone'></i>1800-95955</b></li>
</ul>
</div>
<hr className='border border-1 border-dark mt-1' />
</MDBNavbar>

<Outlet />
        
        </>
    )
}
export default Layout;