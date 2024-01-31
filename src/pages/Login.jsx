import { Link, useNavigate } from 'react-router-dom'
import '../css/login.css'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()
  const isloging= sessionStorage.getItem('isloging');
  const onSubmit = (data) => {
    axios.post("https://api.sun-ztu.galax-sys.com/api/v1/auth/login", data)
    .then((res)=>{
      if (res.data?.result.user.activo===true) {
        navigate('/dashboard') 
        sessionStorage.setItem('isloging', true);
        sessionStorage.setItem('correo', res.data?.result.user.correo);
        sessionStorage.setItem('nombre_completo', res.data?.result.user.nombre_completo);
        sessionStorage.setItem('numero_tefonico', res.data?.result.user.numero_telefonico);
      } else {
        navigate('/activity')
      }
    })
  }
//d8XC5EYR5GRm7lE
//suntzusoporte@gmail.com
  const login =() =>{
    return(
      <div className='body_box_login'>
      <div className='box_login'>
        <div className='img_box'>
          <img src="../../public/Logo_SUN_TZU-01.png" alt="" />
        </div>
        <form className='box_data_login' onSubmit={handleSubmit(onSubmit)}>
          <h1>Inicia sesion</h1>
          <div className='data_login_input'>
            <p>Correo:</p>
            <input type="text" {...register("correo")} />
          </div>
          <div className='data_login_input'>
            <p>Contraseña:</p>
            <input type="password" {...register("password")}/>
          </div>
          <button>Entrar</button>
        </form>
      </div>
      <div className='box_register'>
        <h1> ¿Eres Nuevo?</h1>
        <p>Descubre el aprendizaje en línea: flexibilidad, contenido de calidad y sin restricciones
           de tiempo. ¡Inscríbete ahora para impulsar tu crecimiento!</p>
        <Link className='bn5' to={'/registro'} style={{textDecoration:'none'}}>Crear cuenta</Link>
      </div>
    </div>
    )
  }
  return (
    <div>
    {
      isloging ? navigate('/user') :login()
    }
    
  </div>
  )
}

export default Login