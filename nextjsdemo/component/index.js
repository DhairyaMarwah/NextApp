 import Link from "next/link"
 const Navbar = () => {
   return (
       <nav>

     <div className="logo">
          <h1>Ninja List</h1>
          <Link><a  >Home</a></Link>
          <Link><a  >About</a></Link>
          <Link><a>Ninja Listening</a></Link></div>

           
       </nav>
   )
 }
 
 export default Navbar