import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">Portfolio</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#projects">Projects</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        
        <header className="masthead">
            <div className="container d-flex h-100 align-items-center">
                <div className="mx-auto text-center">
                    <h1 className="mx-auto my-0 text-uppercase">Christopher Covarrubias</h1>
                    <h2 className="text-white-50 mx-auto mt-2 mb-5">Hi! I'm a Fullstack Developer</h2>
                    <a className="btn btn-primary js-scroll-trigger" href="https://www.linkedin.com/in/christopher-covarrubias-6645ba175/">Linked<i className="fab fa-linkedin"></i></a>
                </div>
            </div>
        </header>
        
        <section className="about-section text-center" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <h2 className="text-white mb-4">About Me</h2>
                        <p className="text-white-50">
                            I am currently enrolled to a Coding Bootcamp at University of CA- Riverside. My goal is to become a Fullstack Developer. Please check out some examples of how I've developed and more on my Github Repositories.<br/>
                            <a className="btn btn-primary js-scroll-trigger" href="https://github.com/covo40?tab=repositories" href="#about">GitHub</a>
                        </p>
                    </div>
                </div>
                <img className="img-fluid" src="" alt="" />
            </div>
        </section>
        
        <section className="projects-section bg-light" id="projects">
            <div className="container">
                
                <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
                    <div className="col-xl-8 col-lg-7"><img className="img-fluid" src="https://user-images.githubusercontent.com/67557233/94036568-49d83e00-fd79-11ea-85d8-a68c46333fca.png" alt="" /></div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="featured-text text-center text-lg-left">
                            <h4>Group Project 1</h4>
                            <p className="text-black-50 mb-0">Dinner and a Movie. This API driven project shows the user a selection of restaurants based on type of cuisine preferred. Check it out
                                <a href="https://covo40.github.io/projectbf/">Dinner and a Movie</a>
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
                    <div className="col-lg-6"><img className="img-fluid" src="https://user-images.githubusercontent.com/68724921/94892028-802c5200-0438-11eb-87a7-8cffd1fbae23.png" alt="" /></div>
                    <div className="col-lg-6">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 className="text-white">Weather Dashboard</h4>
                                    <p className="mb-0 text-white-50">This app is designed to show current weather information, based on City. Check it out
                                        <a href="https://covo40.github.io/weather-dashboard/">Weather Dashboard</a>
                                    </p>
                                    
                                    <hr className="d-none d-lg-block mb-0 ml-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row justify-content-center no-gutters">
                    <div className="col-lg-6"><img className="img-fluid" src="https://user-images.githubusercontent.com/68724921/100533907-99464a80-31be-11eb-9b57-9905837f6290.png" alt="" /></div>
                    <div className="col-lg-6 order-lg-first">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 className="text-white">Group Project 2</h4>
                                    <p className="mb-0 text-white-50">This application was built to set appointments for Band Practices in designated spaces. Check it out 
                                        <a href="http://w14project2.herokuapp.com/">Snare</a>
                                    </p>
                                    <hr className="d-none d-lg-block mb-0 mr-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        
        <section className="contact-section bg-black" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Location</h4>
                                <hr className="my-4" />
                                <div className="small text-black-50">Moreno Valley, Ca</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-envelope text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Email</h4>
                                <hr className="my-4" />
                                <div className="small text-black-50"><a href="#!">chris.covarrubias40@gmail.com</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-mobile-alt text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Phone</h4>
                                <hr className="my-4" />
                                <div className="small text-black-50">+1 (760) 881-7560</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="social d-flex justify-content-center">
                    <a className="mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                    <a className="mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                    <a className="mx-2" href="#!"><i className="fab fa-github"></i></a>
                </div>
            </div>
        </section>

        <footer className="footer bg-black small text-center text-white-50"><div className="container"></div></footer>
    </div>
  );
}

export default App;
