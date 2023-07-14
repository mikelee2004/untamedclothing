import './Footer.css';
import logo from './../../img/svgs/logo.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <a id='footer'></a>
            <div className="container">
                <div className="heading">
                    <h1>About Us</h1>
                </div>
                <div className="ft-section">
                    <div className="ft-element">
                        <div className="logo">
                            <a href="@"><img src={logo} alt="" /></a>
                        </div>
                    </div>
                    <div className="ft-element">
                        <div className="contact-title">
                            <p>Contact Us</p>
                        </div>
                        <br />
                        <div className="contact-info">
                            <p>Phone: +7 123 456 78 90</p>
                            <br />
                            <p>E-Mail: qwiziyt2004@gmail.com</p>
                            <br />
                        </div>
                    </div>
                    <div className="ft-element">
                        <div className="terms">
                            <a href="https://vk.com/o.strober"><p>VK</p></a>
                            <br />
                            <a href="https://instagram.com/mike.leeeeee?igshid=MjEwN2IyYWYwYw=="><p>Instagram</p></a>
                            <br />
                            <a href="https://www.healthline.com/nutrition/best-ways-to-burn-fat"><p>For You</p></a>
                            <br />
                        </div>
                    </div>
                    <div className="ft-element">
                        <div className="discount-title">
                            <p>Subscribe on our news to get 10% discount!</p>
                        </div>
                        <div className='mail-input'>
                            <input type="text" id="usermail" autoComplete='off'
                                placeholder='Enter your E-Mail here!' className='email-input' />
                            <button className='sub-btn'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer