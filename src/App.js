import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <header class="header">
        <a href="#" class="logo">
          <img src="../public/home-img.jpeg" alt="" />
        </a>

        <nav class="navbar">
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#menu">menu</a>
          <a href="#products">products</a>
          <a href="#review">review</a>
          <a href="#contact">contact</a>
          <a href="#blogs">blogs</a>
        </nav>

        <div class="icons">
          <div class="fas fa-search" id="search-btn"></div>
          <div class="fas fa-shopping-cart" id="cart-btn"></div>
          <div class="fas fa-bars" id="menu-btn"></div>
        </div>

        <div class="search-form">
          <input type="search" id="search-box" placeholder="search here..." />
          <label for="search-box" class="fas fa-search"></label>
        </div>

        <div class="cart-items-container">
          <div class="cart-item">
            <span class="fas fa-times"></span>
            <img src="../public/cart-item-1.png" alt="" />
            <div class="content">
              <h3>fresh beer</h3>
              <div class="price">₹1599/-</div>
            </div>
          </div>
          <div class="cart-item">
            <span class="fas fa-times"></span>
            <img src="../public/cart-item-2.png" alt="" />
            <div class="content">
              <h3>budweiser hops</h3>
              <div class="price">₹1599/-</div>
            </div>
          </div>
          <div class="cart-item">
            <span class="fas fa-times"></span>
            <img src="../public/cart-item-3.png" alt="" />
            <div class="content">
              <h3>woodcreek</h3>
              <div class="price">₹1499/-</div>
            </div>
          </div>
          <div class="cart-item">
            <span class="fas fa-times"></span>
            <img src="../public/cart-item-4.png" alt="" />
            <div class="content">
              <h3>pepsi</h3>
              <div class="price">₹199/-</div>
            </div>
          </div>
          <a href="#" class="btn">
            checkout now
          </a>
        </div>
      </header>
      {/* 
<!-- header section ends -->

<!-- home section starts  --> */}

      <section class="home" id="home">
        <div class="content">
          <h3>fresh food delivered, anywhere</h3>
          <p>
            welcome to the best restaurant in the world, we offer best services
            to our customers.
          </p>
          <a href="#" class="btn">
            get yours now
          </a>
        </div>
      </section>
      {/* 
<!-- home section ends -->

<!-- about section starts  --> */}

      <section class="about" id="about">
        <h1 class="heading">
          {" "}
          <span>about</span> us{" "}
        </h1>

        <div class="row">
          <div class="image">
            <img src="../public/about-img.jpeg" alt="" />
          </div>

          <div class="content">
            <h3>what makes our food special?</h3>
            <p>
              So we serve fresh food directly from the farms to your dining
              table. we take care of hygine in our kitchen. and also we are
              having best chefs in our kitchen.
            </p>
            <p>
              we do not support frozen food hence don't serve it too, we take
              our vegetables in the farms of ourselves and also cook fresh meet
              like bacon, pork, and etc. we are having more than 15+ branches
              all over the world which are serving best to our customers.
            </p>
            <a href="#" class="btn">
              learn more
            </a>
          </div>
        </div>
      </section>

      {/* <!-- about section ends -->

<!-- menu section starts  --> */}

      <section class="menu" id="menu">
        <h1 class="heading">
          {" "}
          our <span>menu</span>{" "}
        </h1>

        <div class="box-container">
          <div class="box">
            <img src="../public/menu-1.png" alt="" />
            <h3>bacon salad!</h3>
            <div class="price">
              ₹259/- <span>399</span>
            </div>
            <a href="#" class="btn">
              add to cart
            </a>
          </div>

          <div class="box">
            <img src="../public/menu-2.png" alt="" />
            <h3>pork with ham and vegies!</h3>
            <div class="price">
              ₹579/- <span>639</span>
            </div>
            <a href="#" class="btn">
              add to cart
            </a>
          </div>

          <div class="box">
            <img src="../public/menu-3.png" alt="" />
            <h3>avocardo salad with olive!</h3>
            <div class="price">
              ₹149/- <span>219</span>
            </div>
            <a href="#" class="btn">
              add to cart
            </a>
          </div>

          <div class="box">
            <img src="../public/menu-4.png" alt="" />
            <h3>chicken wraps</h3>
            <div class="price">
              ₹259/- <span>359</span>
            </div>
            <a href="#" class="btn">
              add to cart
            </a>
          </div>

          <div class="box">
            <img src="../public/menu-5.png" alt="" />
            <h3>burger burst with chill coke</h3>
            <div class="price">
              ₹579/- <span>659</span>
            </div>
            <a href="#" class="btn">
              add to cart
            </a>
          </div>

          <div class="box">
            <img src="../public/menu-6.png" alt="" />
            <h3>royal biriyani</h3>
            <div class="price">
              ₹799/- <span>899</span>
            </div>
            <a href="#" class="btn">
              add to cart
            </a>
          </div>
          <div class="box">
            <img src="../public/menu-7.png" alt="" />
            <h3>chicken afgani</h3>
            <div class="price">
              ₹479/- <span>559</span>
            </div>
            <a href="#" class="btn">
              add to cart
            </a>
          </div>

          <div class="box">
            <img src="../public/menu-8.png" alt="" />
            <h3>chicken brest</h3>
            <div class="price">
              ₹799/- <span>899</span>
            </div>
            <a href="#" class="btn">
              add to cart
            </a>
          </div>
        </div>
      </section>
      {/* 
<!-- menu section ends --> */}

      <section class="products" id="products">
        <h1 class="heading">
          {" "}
          Take <span>Away</span>{" "}
        </h1>

        <div class="box-container">
          <div class="box">
            <div class="icons">
              <a href="#" class="fas fa-shopping-cart"></a>
              <a href="#" class="fas fa-heart"></a>
              <a href="#" class="fas fa-eye"></a>
            </div>
            <div class="image">
              <img src="../public/product-1.png" alt="" />
            </div>
            <div class="content">
              <h3>Bundaberg Ginger Beer</h3>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
              <div class="price">
                ₹1599/- <span>₹2000</span>
              </div>
            </div>
          </div>

          <div class="box">
            <div class="icons">
              <a href="#" class="fas fa-shopping-cart"></a>
              <a href="#" class="fas fa-heart"></a>
              <a href="#" class="fas fa-eye"></a>
            </div>
            <div class="image">
              <img src="../public/product-2.png" alt="" />
            </div>
            <div class="content">
              <h3>Schweppers</h3>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
              <div class="price">
                ₹1499/-<span>₹2099</span>
              </div>
            </div>
          </div>

          <div class="box">
            <div class="icons">
              <a href="#" class="fas fa-shopping-cart"></a>
              <a href="#" class="fas fa-heart"></a>
              <a href="#" class="fas fa-eye"></a>
            </div>
            <div class="image">
              <img src="../public/product-3.png" alt="" />
            </div>
            <div class="content">
              <h3>Crabbies</h3>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
              <div class="price">
                ₹1699/- <span>₹2299</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 
<!-- review section starts  --> */}

      <section class="review" id="review">
        <h1 class="heading">
          {" "}
          customer's <span>review</span>{" "}
        </h1>

        <div class="box-container">
          <div class="box">
            <img src="../public/quote-img.png" alt="" class="quote" />
            <p>
              Hey! this is dwayne Johnson,The type of food is Indian. It has
              only one waitress wich makes the service too slow. There are tow
              chiefs that I saw and I'm not sure if there is more. The Indian
              songs are available. You can get one vegetables plate as a free
              with your order.
              https://www.tripadvisor.in/ShowUserReviews-g294197-d1176237-r428736693-Foreign_Restaurant-Seoul.html#{" "}
            </p>
            <img src="../public/pic-1.png" class="user" alt="" />
            <h3>Dwayne Johnson</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
          </div>

          <div class="box">
            <img src="../public/quote-img.png" alt="" class="quote" />
            <p>
              Visited as a guest in the Echo restaurant for lunch just today. We
              were entertaining friends from California, and enjoyed our ocean
              side table. We chose to stay indoors - to enjoy the air
              conditioning 😊. I just want to say that, in addition to a nice
              meal, we had a delightful waitress, Jackie. She had just the right
              balance of friendliness and efficiency. She recognized that we
              wanted time to visit and did not rush us. She and other staff
              members made certain that we had everything we needed. Kudos!
            </p>
            <img src="../public/pic-2.png" class="user" alt="" />
            <h3>Elon Musk</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
          </div>

          <div class="box">
            <img src="../public/quote-img.png" alt="" class="quote" />
            <p>
              I had lunch with some of my colleagues at Echo on Day 1. I had the
              wedge salad - it was delicious. On Night 2, I enjoyed a drink at
              the bar. I had a Margarita. The service was excellent.Although we
              didn't go into the onsite restaurant, we ordered some food at the
              bar a few times and it was delicious. The bar area and lobby were
              nice and open, good place to relax and meet friends.
            </p>
            <img src="../public/pic-3.png" class="user" alt="" />
            <h3>Jeff Bezoz</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
          </div>
        </div>
      </section>
      {/* 
<!-- review section ends -->

<!-- contact section starts  --> */}

      <section class="contact" id="contact">
        <h1 class="heading">
          {" "}
          <span>contact</span> us{" "}
        </h1>

        <div class="row">
          <form action="">
            <h3>order now!</h3>
            <div class="inputBox">
              <span class="fas fa-user"></span>
              <input type="text" placeholder="Tell Us Your Name" />
            </div>
            <div class="inputBox">
              <span class="fas fa-envelope"></span>
              <input type="email" placeholder="Write Your Email-Id" />
            </div>
            <div class="inputBox">
              <span class="fas fa-phone"></span>
              <input type="number" placeholder="Your Contact Number" />
            </div>
            <input type="submit" value="order now" class="btn" />
          </form>
        </div>
      </section>
      {/* 
<!-- contact section ends -->

<!-- blogs section starts  --> */}

      <section class="blogs" id="blogs">
        <h1 class="heading">
          {" "}
          our <span>blogs</span>{" "}
        </h1>

        <div class="box-container">
          <div class="box">
            <div class="image">
              <img src="../public/blog-1.jpeg" alt="" />
            </div>
            <div class="content">
              <a href="#" class="title">
                delicious meal ever!
              </a>
              <span>by masterchef!</span>
              <p>
                Delicious food ever tasted in my life, Highly recommend this!.
              </p>
              <a href="#" class="btn">
                read more
              </a>
            </div>
          </div>

          <div class="box">
            <div class="image">
              <img src="../public/blog-2.jpeg" alt="" />
            </div>
            <div class="content">
              <a href="#" class="title">
                fresh herbs with vegies!
              </a>
              <span>by owner of the corporatin</span>
              <p>
                it's the perfact combination of refreshing herbs with
                mind-blowing taste
              </p>
              <a href="#" class="btn">
                read more
              </a>
            </div>
          </div>

          <div class="box">
            <div class="image">
              <img src="../public/blog-3.jpeg" alt="" />
            </div>
            <div class="content">
              <a href="#" class="title">
                Royal burger inside!
              </a>
              <span>by prime customer</span>
              <p>
                my daughter tasted this and just kissed me and said Thanks
                popsy!
              </p>
              <a href="#" class="btn">
                read more
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- blogs section ends -->

<!-- footer section starts  --> */}

      <section class="footer">
        <div class="share">
          <a href="#" class="fab fa-facebook-f"></a>
          <a href="#" class="fab fa-twitter"></a>
          <a href="#" class="fab fa-instagram"></a>
          <a href="#" class="fab fa-linkedin"></a>
          <a href="#" class="fab fa-pinterest"></a>
        </div>

        <div class="links">
          <a href="#">home</a>
          <a href="#">about</a>
          <a href="#">menu</a>
          <a href="#">products</a>
          <a href="#">review</a>
          <a href="#">contact</a>
          <a href="#">blogs</a>
        </div>

        <div class="credit">
          created by <span>kvofficialx</span> | © all rights reserved ®
        </div>
      </section>
    </div>
  );
}

export default App;
