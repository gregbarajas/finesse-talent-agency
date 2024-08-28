import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"

const Agency = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='ABOUT FINESSE TALENT' /> <br />
            <br />
            <Title title='Elevating Talent to New Heights' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='Connecting Artists, Comedians, and Actors with Unparalleled Opportunities' />
              <p className='desc-p'>Finesse Talent is more than just a talent agency; it's a launchpad for creative careers. With a dedicated team of industry experts, we've been nurturing and representing top-tier talent for over a decade. From securing roles in blockbuster films to booking sold-out comedy tours, we bring our clients' ambitions to life. Our personalized approach ensures that each artist, comedian, and actor we represent receives the attention and opportunities they deserve.</p>
              <div className='grid-3'>
                <div className='box'>
                  <h1 className='indigo'>10+</h1>
                  <h3>Years of Experience</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>300+</h1>
                  <h3>Talent Represented</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>50+</h1>
                  <h3>Major Industry Awards</h3>
                </div>
              </div>
            </div>
            <div className='right w-40 ml'>
              <img src='/images/s1.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <img src='/images/s4.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
            <div className='right w-60 ml'>
              <TitleSm title='Our Mission' />
              <br />
              <p className='misson-p'>At Finesse Talent, our mission is to amplify the voices of our artists, comedians, and actors, propelling them to the forefront of their industries. We are committed to fostering long-lasting relationships and creating paths to success that are as unique as the talent we represent. Through strategic guidance, extensive networks, and a passion for the arts, we strive to turn dreams into reality.</p>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Agency
