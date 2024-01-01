class HeaderElement extends HTMLElement {
	constructor() {
		super();

		// Create the navigation bar structure
		// 	this.innerHTML = `
		//   <ul id="navigation">
		//     <li><a id="home" href="#home">Home</a></li>
		//     <li><a id="news" href="#news">News</a></li>
		//     <li><a id="contact" href="#contact">Contact</a></li>
		//     <li><a id="about" href="#about">About</a></li>
		//   </ul>
		// `;

		// Attach shadow DOM for scoped styles
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.innerHTML = `
      <style>
        /* Navigation bar styles go here */

        .header {
          background-color: var(--header-color);
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 9999;
        }

        .header_content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 30px;
          min-height: 60px;
        }

        .logo {
          font-size: 26px;
          font-weight: 700;
          letter-spacing: 1px;
          animation: topToBottom 1s ease forwards;
          padding-left: 48px;
        }
        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          overflow: hidden;
          // background-color: #333; /* Example background color */
        }
        li {
          font-size: var(--p-font);
          font-weight: 600;
          padding: 10px 27px;
          animation: slideAnimate 1s ease forwards;
          animation-delay: calc(0.2s * var(--a));
          align-content: center;
          display: grid;
        }

        li a {
          text-decoration: none;
          color: var(--header-li-color);
        }

        li a:hover {
          color: var(--hover-color);
          text-shadow: 0 0 10px rgba(18, 247, 255, 0.6),
            0 0 20px rgba(18, 247, 255, 0.6), 0 0 30px rgba(18, 247, 255, 0.6),
            0 0 40px rgba(18, 247, 255, 0.6), 0 0 70px rgba(18, 247, 255, 0.6),
            0 0 80px rgba(18, 247, 255, 0.6), 0 0 100px rgba(18, 247, 255, 0.6),
            0 0 150px rgba(18, 247, 255, 0.6);
        }

        li a.active {
          color: var(--hover-color);
        }

        ul {
          display: flex;
          column-gap: 35px;
          list-style-type: none;
        }

        .hamburger {
          display: none;
          cursor: pointer;
        }

        .bar {
          height: 2px;
          width: 27px;
          background: #fff;
          margin: 5px 0;
          opacity: 0.8;
          transition: all 0.3s ease-in-out;
        }

        .home--down {
          transform: translateY(200px);
          transition: all 0.3s;
          overflow: hidden;
          margin-top: 90px;
          padding-top: 0px;
        }

        .nav--open {
          transform: translate(0) !important;
          z-index: 1000;
          overflow: hidden;
        }

        .hamburger--open .bar:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .hamburger--open .bar:nth-child(2) {
          opacity: 0;
        }
        .hamburger--open .bar:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        @media (max-width: 650px) {
          .nav {
            position: fixed;
            top: 60px;
            left: 0;
            background-color: rgb(19, 22, 26);
            width: 100%;
            padding: 10px 0 25px;
            transform: translateX(-100%);
          }

          ul {
            flex-direction: column;
            align-items: center;
            row-gap: 20px;
          }
          .hamburger {
            display: block;
          }

          .logo {
            padding-left: 0;
          }
        }
      </style>

      <div>
        <div class="header">
          <div class="header_content">
            <div class="logo"><span>A</span>kthab</div>
            <nav class="nav">
              <ul>
                <li class="active"><a id="#index" href="index.html#index">Home</a></li>
                <li><a id="#projects" href="projects.html#project">Projects</a></li>
                <li><a id="#experience" href="experience.html#experience">Experience</a></li>
                <li><a id="about" href="about.html#about">About</a></li>
                <li><slot name="theme"></slot</li>
              </ul>
            </nav>
            <div class="hamburger">
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
            </div>
          </div>
        </div>
      </div>
    `;

		// JavaScript functionality
		const navEl = this.shadowRoot.querySelector('.nav');
		const hamburgerEl = this.shadowRoot.querySelector('.hamburger');
		// const homeEl = this.shadowRoot.querySelector('.home');

		hamburgerEl.addEventListener('click', () => {
			navEl.classList.toggle('nav--open');
			hamburgerEl.classList.toggle('hamburger--open');
			// homeEl.classList.toggle('home--down');
		});

		navEl.addEventListener('click', () => {
			navEl.classList.remove('nav--open');
			hamburgerEl.classList.remove('hamburger--open');
			// homeEl.classList.remove('home--down');
		});

		const navLinks = this.shadowRoot.querySelectorAll('a');

		function updateActiveLink() {
			const hash = window.location.hash;
			navLinks.forEach((navLink) => {
				navLink.classList.remove('active');
				if (navLink.hash === hash) {
					navLink.classList.add('active');
				}
			});
		}
		window.addEventListener('hashchange', updateActiveLink);
		updateActiveLink(); // Call initially to set the active link

		// Add other event listeners as needed, e.g., for dropdowns or interactive elements
	}
}

customElements.define('header-component', HeaderElement);
