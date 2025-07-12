import "./index.css";
import Movie from "./assets/felix-mooneeram-evlkOfkQ5rE-unsplash.jpg";
import Agro from "./assets/fitnish-media-mQ2mZMcI1dc-unsplash.jpg";
import Portfolio from "./assets/joshua-aragon-BMnhuwFYr7w-unsplash.jpg";
import Candle from "./assets/rebecca-peterson-hall-aN-zGYlxiCI-unsplash.jpg";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import ParticlesComponent from "./components/particle";

function App() {
  return (
    <BrowserRouter>
      <ParticlesComponent id="particles" />
      <div className="">
        <div className="relative w-full">
          <div className="absolute top-0 "> </div>
        </div>
        <section className="snap-y snap-mandatory ">
          <div className="h-64 whitesmoke"></div>
          <section className=" snap-always snap-center container mx-auto mt-6 text-bold flex flex-col ">
            <Link to="#/">
              <h1 className="text-3xl" id="/">
                {" "}
                Hello!
              </h1>
            </Link>
            <h1 className="text-7xl mb-6 mt-5 ">Angela Teyvi</h1>
            <p className="ibm-regular font-bold">
              I'm a Web Developer with interests and proven records in both
              Frontend and Backend technologies. My work revolves around
              bringing clients' ideas to life in a clean and intuitive manner. I
              have extensive experience collaborating in the geospatial arena,
              transcending borders and seamlessly working with diverse teams
              across continents. With a demonstrated ability to excel in any
              global setting, I am adept at thriving in diverse environments.
            </p>
          </section>
          <div className="w-full h-40 whitesmoke"></div>

          <section className="snap-always snap-center container mx-auto mt-6 text-bold section flex flex-col text-3xl leading-normal ">
            <Link to="#experience">
              <h1 className=" hover:bg-red-200 "> Experience</h1>
            </Link>
            <Link to="#projects">
              <h1 className=" hover:bg-red-200"> Projects</h1>
            </Link>

            <Link to="#skills">
              <h1 className=" hover:bg-red-200"> Skills</h1>
            </Link>
            <Link to="#blog">
              <h1 className=" hover:bg-red-200"> Blog</h1>
            </Link>
            <Link to="#contact">
              <h1 className=" hover:bg-red-200"> Contact</h1>
            </Link>
            <a href="/AngelaTeyvi_CV.pdf" download>
              <button className=" hover:bg-red-200"> Download CV</button>
            </a>
          </section>
          <div className="w-full h-40 whitesmoke"></div>

          <section
            className="snap-always snap-center container mx-auto mt-6 "
            id="experience"
          >
            <h1 className="text-3xl">Experience</h1>
            <hr className="w-full h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 " />
            <div className="mt-6 mb-6 ibm-extrathin">
              <div className="mt-6 mb-6 ">
                <h2 className="text-xl mb-3 ibm-regular">
                  FrontEnd Developer - Tendo: July 2024 - Present
                </h2>
                <ul className="text-left list-disc ibm-regular">
                  <li className="mb-3">
                    Built and shipped high-impact frontend features that boosted
                    operations team efficiency by 20×, significantly
                    streamlining internal workflows.
                  </li>
                  <li className="mb-3">
                    Developed a comprehensive frontend user manual, reducing
                    training and onboarding time for non-technical staff by over
                    60%.
                  </li>
                  <li>
                    Evaluated and enforced consistent use of libraries and React
                    best practices, improving codebase scalability, readability,
                    and team collaboration.
                  </li>
                  <li className="mb-3">
                    Refactoring and redesigning Tendo’s core web platform using
                    React, TypeScript, and modern architecture principles, in
                    preparation for a projected 30% increase in user traffic.
                  </li>
                </ul>
              </div>
              <div className="mt-6 mb-6 ">
                <h2 className="text-xl mb-3 ibm-regular">
                  BackEnd Developer - CoreXtreme: April 2024 - May 2024
                </h2>
                <ul className="text-left list-disc ibm-regular">
                  <li className="mb-3">
                    Developed and integrated Firebase Authentication for secure
                    user sign-up and login, supporting both email/password and
                    Google OAuth methods.
                  </li>
                  <li className="mb-3">
                    Configured and deployed Firebase services including
                    Firestore, Authentication, and Storage to support real-time
                    data flow and media uploads.
                  </li>
                  <li>
                    Integrated Firebase Storage into the frontend interface,
                    ensuring smooth and secure file handling between users and
                    the UI.
                  </li>
                  <li className="mb-3">
                    Led internal debugging and code review sessions, guiding
                    peers and proactively resolving backend issues to improve
                    development velocity.
                  </li>
                </ul>
              </div>
              <div className="mt-6 mb-6 ">
                <h2 className="text-xl mb-3 ibm-regular">
                  {" "}
                  Web Developer: February 2024 - Present
                </h2>
                <ul className="text-left list-disc ibm-regular">
                  <li className="mb-3">
                    Engineered the backend infrastructure for a portfolio
                    project, leveraging Express.js, Render, and Swagger for
                    efficient endpoint management and documentation
                  </li>
                  <li className="mb-3">
                    Led the development of a full-stack e-commerce platform,
                    utilizing localStorage for optimized asset storage and
                    JavaScript to deliver seamless user experiences.
                  </li>
                  <li>
                    Developed a custom movie API to integrate data from the TMDP
                    API, enhancing website functionality and enriching user
                    interactions.
                  </li>
                  <li className="mb-3">
                    Designed and implemented a visually engaging landing page
                    for a candle business, featuring product showcases and
                    immersive video descriptions to amplify brand engagement.
                  </li>
                </ul>
              </div>

              <div className="mt-6 ibm-regular">
                <h2 className="text-xl mb-3 ">
                  Geospatial Specialist:2020 - 2024
                </h2>
                <p>
                  My geospatial experience spans from working in transport and
                  humanitarian sectors. Over the years I have worked with
                  developing partners, International NGOs, local government to
                  create geospatial data and communities. Below are some
                  Highlights.
                </p>
                <div className=" mt-6 mb-6">
                  <li className="mb-3 ibm-regular list-disc">
                    Trufi Association eV - Volunteer and Admin Coordinator
                  </li>

                  <li className=" mb-3 ibm-regular list-disc">
                    Transitec Engineers - Geospatial Data Lead{" "}
                  </li>

                  <li className="mb-3 ibm-regular list-disc">
                    UKAID High Volume Transport - Data Collection Lead{" "}
                  </li>

                  <li className="mb-3 ibm-regular list-disc">
                    SECO Ghana Urban Mobility Project- Research Coordinator
                  </li>

                  <li className="mb-3 ibm-regular list-disc">
                    Trufi Association eV - Volunteer and Admin Coordinator
                  </li>

                  {/* <ul className="text-left list-disc">
                <li>
                  Developed 50 hours of Public Transport Mapping tutorials for
                  the Global South using QGIS, JOSM, and <br/> Remote Sensing
                  technologies.
                </li>
                <li>
                  Coordinated with three crowdsourcing organizations to
                  integrate public transport mapping into their software
                </li>
                <li>
                  Utilized JOSM and remote sensing to correct public transport
                  routes in Accra
                </li>
              </ul> */}
                </div>
                {/* 
            <div className="mb-6">
              <h1>SECO Ghana Urban Mobility Project (2021 - 2022) </h1>
              <ul>
                <li>
                  Managed 18 volunteers to collect onboard and frequency route
                  data across 9 assemblies
                </li>
                <li>
                  Optimized delivery timelines by 35% through proactive
                  assessment and milestone planning
                </li>
                <li>
                  Conducted sessions with local authorities to inform transport
                  decisions.
                </li>
              </ul>
            </div> */}
                {/* 
            <div className="mb-6">
              <h1> UKAID High Volume Transport Data Collection Lead (2022)</h1>
              <ul>
                <li>
                  Managed end-to-end data collection process for 24 transport
                  operators
                </li>
                <li>
                  Established strong relationships with stakeholders to
                  facilitate successful data collection
                </li>
                <li>Defined milestone criteria to measure progress </li>
              </ul>
            </div> */}
                {/* 
            <div className="mb-6">
              <h1>
                GIZ Ghana Mobility Study Geospatial Data Lead (2022 to 2023)
              </h1>
              <ul>
                <li>
                  Led a team of 5 data collectors to gather MAAS transport
                  indicator data at 5 commuter hotspots, resulting in 100 data
                  points.
                </li>
                <li>
                  Conducted stakeholder surveys to understand mobility
                  perspectives
                </li>
                <li>
                  Utilized QGIS and Open Data Kit for data visualization and
                  analysis
                </li>
              </ul>
            </div> */}
              </div>
            </div>
          </section>
          <div className="w-full h-40 whitesmoke"></div>

          <section
            className="snap-always snap-center container mx-auto mt-6"
            id="projects"
          >
            <h1 className="text-3xl">Projects</h1>
            <hr className="w-full h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 " />

            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
              <div>
                <a
                  href="https://opalflix.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Movie}
                    alt="movie"
                    className="64 h-40 bg-slate-200 m-4 rounded-2xl"
                  />
                  <h1 className="mx-4 px-6"> MOVIE API </h1>
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/Opal-Organic-Market/Portfolio_api"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Portfolio}
                    alt="portfolio"
                    className="64 h-40 bg-slate-200 m-4 rounded-2xl"
                  />
                  <h1 className="mx-4 px-6"> PORTFOLIO API</h1>
                </a>
              </div>

              <div>
                <a
                  href="https://stellular-cheesecake-2e1c23.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Candle}
                    alt="candle"
                    className="64 h-40 bg-slate-200 m-4 rounded-2xl"
                  />
                  <h1 className="mx-4 px-6"> LANDING PAGE</h1>
                </a>
              </div>
              <div>
                <a
                  href="https://opalfoodcart.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Agro}
                    alt="agro"
                    className="64 h-40 bg-slate-200 m-4 rounded-2xl"
                  />
                  <h1 className="mx-6 px-6">ECOMMERCE</h1>
                </a>
              </div>
            </div>
          </section>
          <div className="w-full h-64 whitesmoke"></div>

          <section
            className="snap-always snap-center container mx-auto mt-6"
            id="skills"
          >
            <h1 className="text-3xl ">Skills</h1>
            <hr className="w-full h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 " />
            <div>
              <h1 className="text-2xl m-1 mt-6"> Languages</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 font-bold">
                <div>
                  <h2 className=" text-cyan-300 ">HTML </h2>
                </div>

                <div>
                  <h4 className=" text-blue-300 ">CSS </h4>
                </div>

                <div>
                  <h1 className=" text-red-400 ">JAVASCRIPT</h1>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl m-1 mt-6"> Frameworks</h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3  gap-4 font-bold">
                <div>
                  <h3 className=" text-green-400 "> REACT</h3>
                </div>

                <div>
                  <h3 className=" text-red-400 "> TAILWIND</h3>
                </div>

                <div>
                  <h3 className=" text-blue-400 ">EXPRESS JS </h3>
                </div>

                <div>
                  <h3 className=" text-yellow-400 "> MATERIAL UI </h3>
                </div>

                <div>
                  <h3 className=" text-green-400 ">BOOTSTRAP </h3>
                </div>
              </div>
            </div>
            <h3 className="text-2xl m-1 mt-6"> Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 font-bold">
              <div>
                <h3 className=" text-purple-400"> MONGO DB</h3>
              </div>

              <div>
                <h3 className=" text-green-400 "> GITHUB</h3>
              </div>

              <div>
                <h3 className=" text-red-400 "> FIGMA</h3>
              </div>
            </div>
          </section>

          <div className="w-full h-40 whitesmoke"></div>

          <section
            className="snap-always snap-center container mx-auto mt-6"
            id="blog"
          >
            <h1 className="text-3xl">Blog</h1>
            <hr className="w-full h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 " />
            <div className="ibm-regular font-bold ">
              {/* <div> sample for other blogs
            <h1> title</h1>
            <h3> Month,year</h3>
          </div> */}

              <div className="mb-4 mt-6">
                <a
                  href="https://medium.com/@angelateyvi/formatted-input-be8f859ea719"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 className="underline underline-offset-4 hover:text-red-900 hover:-translate-y-1 hover:scale-11">
                    Formatted Input
                  </h1>
                </a>
                <h3> Dec 13, 2023</h3>
              </div>

              <div className="mb-4">
                <a
                  href="https://medium.com/@angelateyvi/exceptions-try-except-in-python-0cafb21ce713"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 className="underline underline-offset-4   hover:text-red-900 hover:-translate-y-1 hover:scale-110">
                    {" "}
                    Exceptions try..except in Python
                  </h1>
                </a>
                <h3> Nov 27, 2023</h3>
              </div>

              <div className="mb-4">
                <a
                  href="https://medium.com/@angelateyvi/simple-boolean-function-and-conditional-statements-in-real-life-f65656a90378"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 className="underline underline-offset-4  hover:text-red-900 hover:-translate-y-1 hover:scale-110">
                    Boolean, Functions, and Conditional Statements
                  </h1>
                </a>
                <h3> Nov 19, 2023</h3>
              </div>

              <div className="mb-4">
                <a
                  href="https://medium.com/@angelateyvi/tutorial-hell-4e0dea583872"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 className="underline underline-offset-4  hover:text-red-900 hover:-translate-y-1 hover:scale-110">
                    {" "}
                    TUTORIAL HELL
                  </h1>
                </a>

                <h3> Aug 14, 2023</h3>
              </div>

              <div className="mb-4">
                <a
                  href="https://medium.com/@angelateyvi/housing-in-ghana-c0b705631ec"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 className="underline underline-offset-4  hover:text-red-900 hover:-translate-y-1 hover:scale-110">
                    Housing in Ghana
                  </h1>
                </a>
                <h3> Aug 29, 2021</h3>
              </div>
            </div>
          </section>

          <div className="w-full h-40 whitesmoke"></div>
          <section
            className="snap-always snap-center container mx-auto mt-6"
            id="contact"
          >
            <h1 className="text-3xl">Contact</h1>
            <hr className="w-full h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 " />

            <ul className="mb-4 mt-6 ibm-regular">
              <a
                href="mailto:angelateyvi@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="mb-4">Mail: angelateyvi@gmail.com</li>
              </a>

              <a
                href="https://www.linkedin.com/in/angela-teyvi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="mb-4">LinkedIn: Angela Teyvi</li>
              </a>

              <a
                href="https://twitter.com/AngelaTeyvi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="mb-4">Twitter: @AngelaTeyvi</li>
              </a>

              <a
                href="https://github.com/teyvi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="mb-4">GitHub: teyvi</li>
              </a>
            </ul>

            {/* <a
            href="./assets/docs/WebDeveloper-AngelaTeyvi.pdf"
            download="WebDeveloper-AngelaTeyvi.pdf"
          >
            <button className="rounded-full bg-gradient-to-r from-slate-300 via-slate-100 to-slate-300 h-10 w-40  girdo">
              Download CV
            </button>
          </a> */}
          </section>
          <div className="w-full h-40 whitesmoke"></div>
        </section>
      </div>
      {/* </ParticlesComponent> */}
    </BrowserRouter>
  );
}

export default App;
