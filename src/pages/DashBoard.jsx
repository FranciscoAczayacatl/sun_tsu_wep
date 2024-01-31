/* eslint-disable no-unused-vars */

import { useState } from 'react';
import '../css/dashboar.css'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CourseMain } from '../components/courses/Liderazgo_consciente_Empresarial/CourseMain';


const DashBoard = () => {

  const [scrollY, setScrollY] = useState(-1);
  const [nav, setNav] = useState(false);
  const navigate = useNavigate()
  const nombre = sessionStorage.getItem('nombre_completo');
  const correo = sessionStorage.getItem('correo');
  const numero_tefonico = sessionStorage.getItem('numero_tefonico');

  const handleScroll = () => {
    setScrollY(window.scrollY);
    if(window.scrollY >0){
      setNav(false)
    }else{
      setNav(true)
    }
  };

  const logout = () => {
      
    localStorage.clear();

   
    sessionStorage.clear();
    navigate('/');
  };
  useEffect(() => {
    const clearStorageOnLoad = () => {
      
      localStorage.clear();

     
      sessionStorage.clear();
      navigate('/');
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', clearStorageOnLoad);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', clearStorageOnLoad);
    };
  }, [navigate]); 
  console.log(nav);
  return (
    <div className='body_dashboard'> 
      <header className={nav==true?'header':'header_back'}  >
        
        <img src="../../public/Logo_SUN_TZU-01.png" alt="" />
        <nav>
          <i className="fa-solid fa-house fa-xl"></i>
          <i className="fa-solid fa-user fa-xl"></i>
          <i className="fa-solid fa-circle-exclamation fa-xl"></i>
        </nav>
      </header>
      <div className='body_mani_aside'>
        <main>
          <div className='box_box'>
            <CourseMain/>
          </div>
          
        </main>
        <aside>
          <div className='box_user_dashboard'>
            <div className='usr_icon_dashboard'>
            <i className="fa-regular fa-user fa-8x"></i>
            </div>
            <div className='data_usr_dashboard'>
              <h4>{nombre}</h4>
              <h4>{correo}</h4>
              <h4>{numero_tefonico}</h4> 
              <button onClick={()=>{logout()}}> Cerrar sesion</button>
            </div>
          </div>
        </aside>
      </div>
      <footer>
        <h4 style={{textAlign:'center', marginTop:'10vh', color:'white'}}>Echo con el  &#128150; por GalaxSys </h4>
      </footer>
    </div>
  )
}

export default DashBoard