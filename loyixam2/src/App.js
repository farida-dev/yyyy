import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <header>
      <div className="container">
        <h2>Company name</h2>
        <ul>
          <li><a href="#">Features</a></li>
          <li><a href="#">Enterprise</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Pricing</a></li>
        </ul>
        <button className="btn "> Sign up</button>
      </div>
    </header>
    <section className="text">
      <div className="container">
        <p>Pricing</p>
      </div>
      <p className="text2">Quickly build an effective pricing table for your potential customers with this <br></br>Bootstrap example. It's built with default Bootstrap components and utilities with<br></br><span className="text3"> little customization.</span></p>

    </section>
    <section className="aside">
      <div className="container">
      
      <p>Free</p>
      
        </div>
        <div className="tepa">
          <div className="text4">
          <p className="text5" >$0 / mo</p>
          <p className="text6">10 users included</p>
          <p className="text7">2 GB of storage</p>
          <p className="text8">Email support</p>
          <p className="text9">Help center access</p>
          
          <div className="btn2">
            <button className="btn3">Sign up for free</button>
          </div>
          </div>
        </div>
        

    </section>


    <section className="aside2">
      <div className="container2">
      
      <p>Pro</p>
      
        </div>
        <div className="tepaa">
          <div className="text10">
          <p className="text11" >$15 / mo</p>
          <p className="text12">20 users included</p>
          <p className="text13">10 GB of storage</p>
          <p className="text14">Priority email support</p>
          <p className="text15">Help center access</p>
          
          <div className="">
            <button className="btn4">Get started</button>
          </div>
          </div>
        </div>
        

    </section>
    <section className="aside3">
      <div className="container3">
      
      <p>Enterprise</p>
      
        </div>
        <div className="tepaaa">
          <div className="text16">
          <p className="text17" >$29 / mo</p>
          <p className="text18">30 users included</p>
          <p className="text19">15 GB of storage</p>
          <p className="text20">Phone and email support</p>
          <p className="text21">Help center access</p>
          
          <div className="">
            <button className="btn5">Contact Us</button>
          </div>
          </div>
        </div>
        

    </section>
    <hr className='hr'></hr>
    <div>
      <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" className='bost'></img>
      <p className='text22'>© 2017-2018</p>
    </div>
    <div className='menu'>
      <p className='featur'>Features</p>
      <p>Cool stuff</p>
      <p>Random feature</p>
      <p>Team feature</p>
      <p>Stuff for developers</p>
      <p>Another one</p>
      <p>Last time</p>
    </div>

    <div className='menu2'>
      <p className='resou'>Resources</p>
      <p>Resource</p>
      <p>Resource name</p>
      <p>Another resource</p>
      <p>Final resource</p>
    </div>
    <div className='menu3'>
      <p className='abut'>About</p>
      <p>Team</p>
      <p>Locations</p>
      <p>Privacy</p>
      <p>Terms</p>
    </div>
    
  </div>
  
);
}

export default App;
