import { Link } from "react-router-dom"


export const Welcome = () => {
  return (

    <>
    <div className='video'>
        <div className='primer_modal'>
          <div className='card_modal'>
            <img src="../../public/Logo_SUN_TZU-01.png" alt="" />
            <div className='card_modal_box_esc'>
            <h1>Bienvenido</h1>
            <p>&#34; Aprovecha lo que no sabes, especialmente al principio, por que no sabes que 
              puede convertise en tu mayor activo. Te garantiza que haras las cosas de manera 
              diferente a como las hacen los demas &#34;</p>
            <Link to={'/registro'} className='bn-32 bn32' style={{textDecoration:'none',fontWeight:'600', fontSize:'2vw'}}>Registrarse</Link>
            </div>
          </div>
          <Link to={'/login'} className='bn3637 bn38'>Iniciar sesion</Link>
        </div>
          <video src={'../../public/video sun_tzu.mp4'} autoPlay loop muted playsInline width='50' height='50'>
          </video>
    </div>
    </>
  )
}
