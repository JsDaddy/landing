<extend src="layout.jl">
  <block name="content">
    <header id="home">
      <div class="container">
        <div class="row content-header-wrapper">
          <div class="logo"><a href="#banner"><img src="img/logo.png" alt="js daddy"></a></div>
          <div class="navigation-wrapper">
            <nav>
              <ul id="menu">
                <li for-each=menu as="m"><a class="active" href=m['link']>{{m['title']}}</a></li>
              </ul>
            </nav>
            <div class="right-header-block">
              <div class="tel-wrapper">
                <a for-each=phones as="phone" href="tel:+"+phone>{{phone}}</a>
              </div>
              <div class="contact-btn-wrapper">
                <a class="contact-btn scroll" href="#contacts">Записаться</a>
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
            <h1>JAVASCRIPT</h1>
            <p>Jsdaddy cares about you</p>
            <a class="contact-btn" href="#contacts">Contact us</a>
          </div>
        </div>
      </div>
    </section>
    <section class="about-school">
      <div class="container">
        <div class="header-section-wrapper">
          <h3>Немного о нас</h3>
          <div class="background-section-text">About school</div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <img src="img/about-school.png" alt="">
          </div>
          <div class="col-lg-8">
            <p>
              На протяжении последних нескольких лет IT-индустрия является одной из самых прибыльных сфер во всем
              мире. Учитывая то, доступ к Интернету сегодня имеется практически в любой точке мира, а современный
              смартфон и страница в социальных сетях есть у каждого второго, возникает потребность в самых
              разнообразных программных продуктах.
            </p>
            <p>
              В конце курсов мы приглашаем HR специалиста, который помогает вам правильно составить резюме и
              готовит вас к собеседованию. На этом занятии вы разберете все нюансы, возникающие при приеме на
              работу. Будете готовы к самым неожиданным вопросам HRов. Узнаете как превратить свои недостатки в
              преимущества и подать свою кандидатуру в выгодном свете.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="courses">
      <div class="container">
        <div class="header-section-wrapper">
          <h3>Курсы</h3>
          <div class="background-section-text">Our Curses</div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <div class="item-wrapper">
              <div class="start-course">Старат 2 марта!</div>
              <img src="img/angular-logo.png" alt="angular">
              <h3 class="name">Angular</h3>
              <div class="button-block">
                <h4>Подробный курс Angular JS</h4>
                <span class="prices">Стоимость: 3000грн</span>
                <div class="duration">Продолжительность 10 занятий (1 месяц)</div>
              </div>
              <a class="link" href="#">Узнать больше<i class="fa fa-arrow-right" aria-hidden="true"></i></a>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="item-wrapper">
              <div class="start-course">Старат 2 марта!</div>
              <img src="img/html-css-logo.jpg" alt="markup">
              <h3 class="name">Верстка</h3>
              <div class="button-block">
                <h4>Экспресс курс HTML&CSSS</h4>
                <span class="prices">Стоимость: 3000грн</span>
                <div class="duration">Продолжительность 10 занятий (1 месяц)</div>
              </div>
              <a class="link" href="#">Узнать больше<i class="fa fa-arrow-right" aria-hidden="true"></i></a>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="item-wrapper">
              <div class="start-course">Старат 2 марта!</div>
              <img src="img/photoshop.png" alt="web design">
              <h3 class="name">WEB дизайн</h3>
              <div class="button-block">
                <h4>WEB дизайн - быстрый старт</h4>
                <div class="prices">Стоимость: 3000грн (экв ~ $100)</div>
                <div class="duration">Продолжительность 10 занятий (1 месяц)</div>
              </div>
              <a class="link" href="#">Узнать больше<i class="fa fa-arrow-right" aria-hidden="true"></i></a>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="item-wrapper">
              <div class="start-course">Старат 2 марта!</div>
              <img src="img/react-icon.png" alt="angular">
              <h3 class="name">React JS</h3>
              <div class="button-block">
                <h4>Экспресс курс React JS</h4>
                <span class="prices">Стоимость: 3000грн</span>
                <div class="duration">Продолжительность 10 занятий (1 месяц)</div>
              </div>
              <a class="link" href="#">Узнать больше<i class="fa fa-arrow-right" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="our-teaches">
      <div class="container">
        <div class="header-section-wrapper">
          <h3>Наши преподы</h3>
          <div class="background-section-text">Our teaches</div>
        </div>
        <div class="slider-teaches">
          <div class="item-wrapper">
            <div class="photo-wrapper">
              <img src="https://previews.123rf.com/images/martinussumbaji/martinussumbaji1608/martinussumbaji160800009/62244413-jesus-face-silhouette-art-design.jpg" alt="">
            </div>
            <div class="name">Лимаренко Денис</div>
            <div class="position">Front-end developer</div>
            <div class="about">
              <p>
                В разработке более 3.5 лет. Опыт в верстке сайтов различной сложности от лендингов и
                одностраничных сайтов до интернет-магазинов. Разработка сайтов с использованием
                СМS/Wordpress.
              </p>
            </div>
          </div>
          <div class="item-wrapper">
            <div class="photo-wrapper">
              <img src="https://previews.123rf.com/images/martinussumbaji/martinussumbaji1608/martinussumbaji160800009/62244413-jesus-face-silhouette-art-design.jpg" alt="">
            </div>
            <div class="name">Лимаренко Денис</div>
            <div class="position">Front-end developer</div>
            <div class="about">
              <p>
                В разработке более 3.5 лет. Опыт в верстке сайтов различной сложности от лендингов и
                одностраничных сайтов до интернет-магазинов. Разработка сайтов с использованием
                СМS/Wordpress.
              </p>
            </div>
          </div>
          <div class="item-wrapper">
            <div class="photo-wrapper">
              <img src="https://previews.123rf.com/images/martinussumbaji/martinussumbaji1608/martinussumbaji160800009/62244413-jesus-face-silhouette-art-design.jpg" alt="">
            </div>
            <div class="name">Лимаренко Денис</div>
            <div class="position">Front-end developer</div>
            <div class="about">
              <p>
                В разработке более 3.5 лет. Опыт в верстке сайтов различной сложности от лендингов и
                одностраничных сайтов до интернет-магазинов. Разработка сайтов с использованием
                СМS/Wordpress.
              </p>
            </div>
          </div>
          <div class="item-wrapper">
            <div class="photo-wrapper">
              <img src="https://previews.123rf.com/images/martinussumbaji/martinussumbaji1608/martinussumbaji160800009/62244413-jesus-face-silhouette-art-design.jpg" alt="">
            </div>
            <div class="name">Лимаренко Денис</div>
            <div class="position">Front-end developer</div>
            <div class="about">
              <p>
                В разработке более 3.5 лет. Опыт в верстке сайтов различной сложности от лендингов и
                одностраничных сайтов до интернет-магазинов. Разработка сайтов с использованием
                СМS/Wordpress.
              </p>
            </div>
          </div>
          <div class="item-wrapper">
            <div class="photo-wrapper">
              <img src="https://previews.123rf.com/images/martinussumbaji/martinussumbaji1608/martinussumbaji160800009/62244413-jesus-face-silhouette-art-design.jpg" alt="">
            </div>
            <div class="name">Лимаренко Денис</div>
            <div class="position">Front-end developer</div>
            <div class="about">
              <p>
                В разработке более 3.5 лет. Опыт в верстке сайтов различной сложности от лендингов и
                одностраничных сайтов до интернет-магазинов. Разработка сайтов с использованием
                СМS/Wordpress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="contacts" class="contacts">
      <div class="container">
        <div class="header-section-wrapper">
          <h3>Контакты</h3>
          <div class="background-section-text">Contacts school</div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="map-wrapper"></div>
          </div>
        </div>
        <div class="row">
          <div class="contact-form-wrapper">
            <h6>СВЯЗАТЬСЯ С НАМИ</h6>
            <form action="">
              <div class="input-top-wrapper">
                <div class="input-wrapper">
                  <input placeholder="Имя" type="text">
                  <span class="valid-message">sadasdas sadadsad asdasdasas</span>
                </div>
                <div class="input-wrapper">
                  <input placeholder="E-mail" type="email">
                </div>
                <div class="input-wrapper">
                  <input placeholder="Телефон" type="tel">
                </div>
              </div>
              <textarea placeholder="Сообщение"></textarea>
              <button class="contact-btn">Send a message</button>
            </form>
          </div>
        </div>
        <div class="row">
          <div class="contact-details">
            <div class="email-block">
              <ul>
                <li class="email"><a href="mailto:hello@jsdaddy.com">hello@jsdaddy.com</a></li>
                <li class="email"><a href="mailto:hello@jsdaddy.com">hello@jsdaddy.com</a></li>
              </ul>
              <div class="social">
                <ul>
                  <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                  <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
                  <li><a class="github" href="#"><i class="fa fa-github"></i></a></li>
                </ul>
              </div>
            </div>
            <div class="tel-block">
              <ul>
                <li class="tel"><a href="tel:+35623157586">+38 (096) 226 40 32</a></li>
                <li class="tel"><a href="tel:+35623157586">+38 (095) 202 46 03</a></li>
              </ul>
            </div>
            <div class="address-block">
              <ul>
                <li>Kharkiv, Ukraine</li>
                <li>67 Highhill Street., Apt. 20</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </block>
</extend>