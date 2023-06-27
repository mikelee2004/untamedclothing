import React from 'react'
import './Main.css';
import mainpagejpg from './../../img/imgs/part1.jpg'
import female from './../../img/imgs/female.jpg'
import male from './../../img/imgs/male.jpg'
import sneakersm from './../../img/imgs/sneaksforhim.jpg'
import tees from './../../img/imgs/ts.jpg'
import pants from './../../img/imgs/pants.jpg'
import tees2 from './../../img/imgs/ts2.jpg'
import hoodie from './../../img/imgs/hoodie.jpg'
import sneakerf from './../../img/imgs/sneaks for her.jpg'
import hoodie1 from './../../img/imgs/hoodie1.jpg'
import duty from './../../img/imgs/duty.jpg'
import duty1 from './../../img/imgs/duty2.jpg'
import tshirt from './../../img/imgs/tshirt1.jpg'
import beenie from './../../img/imgs/beenie.jpg'
import glasses from './../../img/imgs/glasses.jpg'


const Main = () => {
    return (
        <div className='main'>
            <div className="mainimg">
                <img src={mainpagejpg} />
            </div>
            <div className='container'>
                <div className="mainpart">
                    <div className="maininfo">
                        <h1>NEW ERA <span className='spanwhite'>OF STREETWEAR</span></h1>
                        <p>new option for you to look different! <br />
                            what else we can say? probably nothing <br />
                            check out our catalog <br />
                            you’ll buy half of it guaranteed!
                        </p>
                        <a href="#" className="btn">CHECK OUT</a>
                    </div>
                </div>
                <div className="shop">
                    <div className="shopcontainer">
                        <div className="box">
                            <img src={female} />
                            <h1>FOR HER</h1>
                            <a href="#">check out</a>
                        </div>
                        <div className="box">
                            <img src={male} />
                            <h1>FOR HIM</h1>
                            <a href="#">check out</a>
                        </div>
                    </div>
                    <div className="heading">
                        <a id='categories'></a>
                        <h1>FAMOUS CATEGORIES</h1>
                    </div>
                    <div className="categories">
                        <a href="#"><img src={sneakersm} alt="" /></a>
                        <a href="#"><img src={tees} alt="" /></a>
                        <a href="#"><img src={pants} alt="" /></a>
                    </div>
                    <div className="categories2">
                        <a href="#"><img src={tees2} alt="" /></a>
                        <a href="#"><img src={hoodie} alt="" /></a>
                        <a href="#"><img src={sneakerf} alt="" /></a>
                    </div>
                    <a id='drops'></a>
                    <div className="heading">
                        <h1>DROPPED OUT</h1>
                    </div>
                    <div className="new-items">
                        <div className="item">
                            <a href="@"><img src={tshirt} alt="T-shirt" /></a>
                            <p><s>4 999&#8381;</s>&nbsp;&nbsp;3 599&#8381;</p>
                            <p>Armed & Dangerous</p>
                            <p>T-Shirt</p>
                        </div>
                        <div className="item">
                            <a href="@"><img src={hoodie1} alt="Hoodie" /></a>
                            <p>7 990&#8381;</p>
                            <p>Armed & Dangerous</p>
                            <p>Hoodie</p>
                        </div>
                        <div className="item">
                            <a href="@"><img src={beenie} alt="Beenie" /></a>
                            <p>2 699&#8381;</p>
                            <p>Armed & Dangerous</p>
                            <p>Beenie</p>
                        </div>
                        <div className="item">
                            <a href="@"><img src={duty} alt="" /></a>
                            <p>SOLD OUT</p>
                            <p>Untamed Duty</p>
                            <p>Shoes</p>
                        </div>
                        <div className="item">
                            <a href="@"><img src={duty1} alt="" /></a>
                            <p>8 990&#8381;</p>
                            <p>Untamed Duty</p>
                            <p>Shoes</p>
                        </div>
                        <div className="item">
                            <a href="@"><img src={glasses} alt="" /></a>
                            <p>2 499&#8381;</p>
                            <p>Armed & Dangerous</p>
                            <p>T-Shirt</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main