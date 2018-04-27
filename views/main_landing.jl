<extend src="layout.jl">
  <block name="content">
    <header id="home">
      <div class="container">
        <div class="row content-header-wrapper">
          <div class="logo">
            <a href="/#banner">
              <img src="img/logo.png" alt="js daddy">
            </a>
          </div>
          <div class="navigation-wrapper">
            <nav>
              <ul id="menu">
                <li for-each=menu as="m"><a class="active" href=m['link']>{{m['title']}}</a></li>
              </ul>
            </nav>
            <div class="right-header-block">
              <div class="social">
                <ul>
                  <li for-each=social as="s"><a class=s['soc'] href=s['link']><i class="fa " + s['icon']></i></a></li>
                </ul>
              </div>
              <div class="contact-btn-wrapper">
                <a for-each=btn as="b" class="contact-btn scroll">{{b['text']}}</a>
              </div>
            </div>
          </div>
          <div class="nav-burger">
            <div class="line"></div>
            <div class="text">Menu</div>
            <div class="line"></div>
          </div>
        </div>
      </div>
    </header>
    <section id="banner" class="banner">
      <div class="container">
        <div class="banner-content-wrapper">
          <div class="banner-content">
            <h1>JSDADDY</h1>
            <p>Your software under our care</p>
            <a class="contact-btn" href="#contacts">Contact us</a>
          </div>
        </div>
      </div>
    </section>
    <section id="services" class="services">
      <div class="container">
        <div class="header-section-wrapper">
          <h3>Ways to work with us</h3>
          <div class="background-section-text">Ways to work with us</div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="item-content-block">
              <div class="icon">
                <img src="img/ico-complex-web.png" alt="complex-web">
              </div>
              <h5>Complex Web developement</h5>
              <p>
                JSDaddy offers you a quality, modern and unique product. In the design, we follow the principle of
                purity and reasonable space,examine the trends and implement them in solutions.
              </p>
              <div class="more-info">
                <a class="more-info-btn">More info<i class="fa fa-angle-down" aria-hidden="true"></i></a>
                <div class="more-info-form-wrapper">
                  <form>
                    <input placeholder="Name" type="text">
                    <input placeholder="Email" type="email">
                    <button>Request more info</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="item-content-block">
              <div class="icon">
                <img src="img/consulting.png" alt="complex-web">
              </div>
              <h5>Consulting</h5>
              <p>
                We have experience and skills in software development. Providing of consulting services is one of
                aspects of our job, executing with various JavaScript frameworks and libraries including AngularJS,
                ReactJS, NodeJS.
              </p>
              <div class="more-info">
                <a class="more-info-btn">More info
                  <i class="fa fa-angle-down" aria-hidden="true"></i>
                </a>
                <div class="more-info-form-wrapper">
                  <form>
                    <input placeholder="Name" type="text">
                    <input placeholder="Email" type="email">
                    <button>Request more info</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="item-content-block">
              <div class="icon">
                <img src="img/support.png" alt="complex-web">
              </div>
              <h5>Migration and Support</h5>
              <p>
                Your solution will be migrate to the JavaScript based, using best practice, easily scalable
                and maintainable technology. Usually we use NodeJs and AngularJS.
              </p>
              <div class="more-info">
                <a class="more-info-btn">More info
                  <i class="fa fa-angle-down" aria-hidden="true"></i>
                </a>
                <div class="more-info-form-wrapper">
                  <form>
                    <input placeholder="Name" type="text">
                    <input placeholder="Email" type="email">
                    <button>Request more info</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="technologies" class="technologies">
      <div class="container">
        <div class="header-section-wrapper">
          <h3>We use</h3>
          <div class="background-section-text">We use</div>
        </div>
        <div class="technologies-wrapper">
          <div class="row">
            <div class="col-6 col-sm-4 col-md-2">
              <div class="img-wrapper">
                <img src="img/img1.png" alt="">
              </div>
            </div>
            <div class="col-6 col-sm-4 col-md-2">
              <div class="img-wrapper">
                <img src="img/img2.png" alt="">
              </div>
            </div>
            <div class="col-6 col-sm-4 col-md-2">
              <div class="img-wrapper">
                <img src="img/img3.png" alt="">
              </div>
            </div>
            <div class="col-6 col-sm-4 col-md-2">
              <div class="img-wrapper">
                <img src="img/img4.png" alt="">
              </div>
            </div>
            <div class="col-6 col-sm-4 col-md-2">
              <div class="img-wrapper">
                <img src="img/img5.png" alt="">
              </div>
            </div>
            <div class="col-6 col-sm-4 col-md-2">
              <div class="img-wrapper">
                <img src="img/img6.png" alt="">
              </div>
            </div>
            <div class="col-6 col-sm-4 col-md-2">
              <div class="img-wrapper">
                <img src="img/img7.png" alt="">
              </div>
            </div>
            <div class="col-6 col-sm-4 col-md-2">
              <div class="img-wrapper">
                <img src="img/img8.png" alt="">
              </div>
            </div>
            <div class="col-6 col-sm-4 col-md-2">
              <div class="img-wrapper">
                <img src="img/img9.png" alt="">
              </div>
            </div>
            <div class="col-6 col-sm-4 col-md-2">
              <div class="img-wrapper">
                <img src="img/img10.png" alt="">
              </div>
            </div>
            <div class="col-6 col-sm-4 col-md-2">
              <div class="img-wrapper">
                <img src="img/img11.png" alt="">
              </div>
            </div>
            <div class="col-6 col-sm-4 col-md-2">
              <div class="img-wrapper">
                <img src="img/img12.png" alt="">
              </div>
            </div>
            <div class="col-6 col-sm-4 col-md-2">
              <div class="img-wrapper">
                <img src="img/img13.png" alt="">
              </div>
            </div>
            <div class="col-6 col-sm-4 col-md-2">
              <div class="img-wrapper">
                <img src="img/img14.png" alt="">
              </div>
            </div>
            <div class="col-6 col-sm-4 col-md-2">
              <div class="img-wrapper">
                <img src="img/img15.png" alt="">
              </div>
            </div>
            <div class="col-6 col-sm-4 col-md-2">
              <div class="img-wrapper">
                <img src="img/img16.png" alt="">
              </div>
            </div>
            <div class="col-6 col-sm-4 col-md-2">
              <div class="img-wrapper">
                <img src="img/img17.png" alt="">
              </div>
            </div>
            <div class="col-6 col-sm-4 col-md-2">
              <div class="img-wrapper">
                <img src="img/img18.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="advantages">
      <div class="container">
        <div class="header-section-wrapper">
          <h3>Why you choose us</h3>
          <div class="background-section-text">Why you choose us</div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="item-content-block">
              <div class="icon">
                <img src="img/ico-tailor.png" alt="complex-web">
              </div>
              <h5>Tailor made</h5>
              <p>
                Custom software are contrived by utilising the latest up-to-date technology. The system are developed
                exceptionally to satisfy the client’sbusiness requirements. Any discontent or difficulty of the client
                that appear during the development process can be improved while the formulation of the software with
                customer permission and that is the most significant benefit of the custom software development.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="item-content-block">
              <div class="icon">
                <img src="img/ico-integration.png" alt="integration">
              </div>
              <h5>Integration</h5>
              <p>
                Custom software is a great solution for program integration. Businesses in need of numerous software
                programs can enjoy the benefits of operating on one custom software application designed to integrate
                multiple processes. Custom software in this respect helps you to accomplish more of what you need.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="item-content-block">
              <div class="icon">
                <img src="img/ico-support.png" alt="support">
              </div>
              <h5>Support</h5>
              <p>
                A major benefit you get with custom business applications is an efficient and reliable technical support
                plan. You will have full access to a technical support team that was involved in the development process
                of your application, so all your encountered problems are resolved in an efficient manner.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="item-content-block">
              <div class="icon">
                <img src="img/ico-cost.png" alt="Minimal cost">
              </div>
              <h5>Price formation</h5>
              <p>
                Sometimes the costs associated with developing custom business applications for your business are
                higher than purchasing a ready-made product, and sometimes they are not. The long-term benefits of
                investing in developing custom business applications are far more valuable than purchasing a ready-made
                product. Plus imagine the additional cost you would incur when paying for licences, be it short or long
                term or implementation when you buy off the shelf products.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="item-content-block">
              <div class="icon">
                <img src="img/ico-maintenance.png" alt="Maintenance">
              </div>
              <h5>Maintenance</h5>
              <p>
                With custom application development, your software is maintained for as long as you require it to be.
                With off-the-shelf software, your business is at the mercy of the software developer you are purchasing
                from.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="item-content-block">
              <div class="icon">
                <img src="img/ico-quality.png" alt="quality">
              </div>
              <h5>Quality</h5>
              <p>
                We create stable and scalable applications. Using test coverage is part of our daily work. High quality
                of the solution is one of the things that we care more than our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="about" class="why-we-are">
      <div class="container">
        <div class="header-section-wrapper">
          <h3>Who we are</h3>
          <div class="background-section-text">Who we are</div>
        </div>
        <div class="why-we-are-wrapper">
          <div class="text-block">
            <h5>About us</h5>
            <p>
              We are the team of experienced javascript developers, who decided to make better service for customers.
              Beginning of our developing way started in 2015 and have grown into a full-cycle software development
              company. During development process we use cutting age technologies, such as ES6, Angular, React, Node,
              Docker.
            </p>
          </div>
          <div class="img-block">
            <img src="img/office-img.png" alt="">
          </div>
        </div>
      </div>
    </section>
    <section id="contacts" class="contacts">
      <div class="container">
        <div class="header-section-wrapper">
          <h3>JSDaddy contacts</h3>
          <div class="background-section-text">JSDaddy contacts</div>
        </div>
        <div class="row">
          <div class="contact-form-wrapper">
            <h6>fill out an application</h6>
            <form>
              <div class="input-top-wrapper">
                <div class="input-wrapper">
                  <input placeholder="Your name" type="text">
                  <span class="valid-message">sadasdas sadadsad asdasdasas</span>
                </div>
                <div class="input-wrapper">
                  <input placeholder="E-mail" type="email">
                </div>
                <div class="input-wrapper">
                  <input placeholder="Telephone" type="tel">
                </div>
              </div>
              <textarea placeholder="Message"></textarea>
              <button class="contact-btn">Send a message</button>
            </form>
          </div>
        </div>
        <div class="row">
          <div class="contact-details">
            <div class="email-block">
              <ul>
                <li class="email">
                  <a href="mailto:hello@jsdaddy.com">hello@jsdaddy.com</a>
                </li>
                <li class="email">
                  <a href="mailto:hello@jsdaddy.com">hello@jsdaddy.com</a>
                </li>
              </ul>
              <div class="social">
                <ul>
                  <li>
                    <a class="facebook" href="#"><i class="fa fa-facebook"></i></a>
                  </li>
                  <li>
                    <a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a>
                  </li>
                  <li>
                    <a class="github" href="#"><i class="fa fa-github"></i></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="tel-block">
              <ul>
                <li class="tel">
                  <p>Skype:</p>
                </li>
                <li class="tel">
                  <p>juncker8888</p>
                </li>
              </ul>
            </div>
            <div class="address-block">
              <ul>
                <li>Kharkiv, Ukraine</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </block>
</extend>