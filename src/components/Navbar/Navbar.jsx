import React, { useEffect, useState } from "react";
import styles from './Navbar.module.css'
import NavbarLinks from "./NavbarLinks/NavbarLinks";

const navlinks  = [
  {id: "home", label:"Home"},
  {id: "about", label:"About"},
  {id: "skills", label:"Skills"},
  {id: "portfolio", label:"Portfolio"},
  {id: "contact", label:"Contact"},
];

const Navbar = () =>{

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showLinks, setShowLinks] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleResize = () =>{
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () =>{
      window.removeEventListener('resize', handleResize)
    }
  }, [windowWidth]);

  useEffect ( () =>{
    const handleScrolled = () =>{
      setIsScrolled(window.scrollY > 0);
      
    };
      window.addEventListener('scroll', handleScrolled);

      return () => {
        window.removeEventListener('scroll', handleScrolled)
            }
    },[]);

    useEffect( () =>{
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.4,
      };

      const handleIntersect = entries => {
        entries.forEach(entry => {
          if(entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      }

      const observer = new IntersectionObserver(handleIntersect, options);

      const sections = document.querySelectorAll('section');

      sections.forEach(section => {
        observer.observe(section);
      })

      return () => {
        sections.forEach(section => {
          observer.unobserve(section);
        })
      }

    }, [])


  const handleSectionClick = (event) =>{
    event.preventDefault();
    const sectionId = event.target.getAttribute('href').substring(1);
    const section = document.getElementById(sectionId);
    if(section){
      const navbarHeight = document.querySelector('nav').offsetHeight;
      console.log(section.offsetTop);
      const sectionTop = section.offsetTop - navbarHeight;
      console.log(sectionTop);
      window.scrollTo(
        {
          top:sectionTop,
          behavior:'smooth'
        }
      )
    }
  }

  const toggleLinks = () =>{
    setShowLinks(!showLinks)
  }

    return (
        <header className={styles.header}>
          <nav className={`${styles.navbar}
           ${isScrolled ?  styles.scrolled:''}`}>
            <div className="conteiner">
              <div className={styles['navbar-wrapper']}>
                <div>
                  <a href="index.html" className={styles.logo}>
                    {/*<img src="./images/logo.jpg"
                     alt="Lorenzo Polverino"></img>*/}
                     <div className={styles['logo-inner']}>
                        <span className={styles.top}>Lorenzo Polverino</span>
                        <br></br>
                        <span className={styles.bottom}>Web Developer</span>
                     </div>
                  </a>
                </div>
                <div className={`${styles['navbar-links']}
                 ${showLinks ? styles.show : ''}`}>
                  <ul>
                    {navlinks.map(link => (
                      <NavbarLinks 
                        key={link.id}
                        href={`#${link.id}`}
                        label={link.label}
                        onClick = {handleSectionClick}
                        active={activeSection === link.id}>
                      </NavbarLinks>
                    ))}
                  </ul>
                </div>
                {windowWidth <= 890 && (
                  <div className={`${styles['toggle-button']}
                  ${showLinks ? styles.open : ''}`}
                  onClick={toggleLinks}>
                    <span className={styles.line}></span>
                    <span className={styles.line}></span>
                    <span className={styles.line}></span>
                  </div>
                )}
                
              </div>
            </div>
          </nav>
        </header>
    )
}

export default Navbar