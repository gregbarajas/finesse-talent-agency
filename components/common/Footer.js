import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsFacebook } from "react-icons/bs"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div className='logo'>
              <TitleLogo title='Talent' caption='Finesse' className='logobg' />
              <br />
              <span>
                Have questions? <br /> Reach us Monday – Friday, 9 am to 6 pm
              </span>
              <br />
              <br />
              <h3>+1 001 234 5678</h3>
              <br />
              <button className='button-primary'>Request a Callback</button>
            </div>
            <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href='/'>About Us</Link>
              </li>
              <li>
                <Link href='/'>Our Talent</Link>
              </li>
              <li>
                <Link href='/'>Portfolio</Link>
              </li>
              <li>
                <Link href='/'>News</Link>
              </li>
              <li>
                <Link href='/'>Contact</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href='/'>Talent Booking</Link>
              </li>
              <li>
                <Link href='/'>Brand Partnerships</Link>
              </li>
              <li>
                <Link href='/'>Event Management</Link>
              </li>
              <li>
                <Link href='/'>Media Production</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className='connect'>
                <li>
                  <Link href='/'>
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillTwitterCircle size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span>© 2023 Finesse Talent. All Rights Reserved.</span>
            </div>
            <div className='connect'>
              <span>FINESSE TALENT AGENCY</span>
              <span> &nbsp; | &nbsp; </span>
              <span>TERMS & CONDITIONS</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
