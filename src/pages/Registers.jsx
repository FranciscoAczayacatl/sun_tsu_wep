
import '../css/register.css'
import img from '../../public/pexels-pixabay-159760.jpg'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Registers = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()

  const onSubmit = (data) => {
    axios.post('https://api.sun-ztu.galax-sys.com/api/v1/auth/register', data)
    .then(res=>{
      console.log(res);
      navigate('/newactivity')
    })
  }
  return (
    <div className="register_body">
        <img src={img} alt="" />
      <div className='img'>
        <img  style={{width:'15vw', height:'30vh', margin:'0'}}src="../../public/Logo_SUN_TZU-01.png" alt="" />
        <h1 style={{margin:'0vh'}} >Registro</h1>
        
      </div>
      
      <div className='registro_box'>
        <form className='registro_form' onSubmit={handleSubmit(onSubmit)}>
          <div className='input_title_registro_form'>
            <h3> <i className="fa-regular fa-user icon" > </i>Nombre completo:</h3>
            <input type="text" {...register("nombre_completo")} />
          </div>
          <div className='input_title_registro_form '>
            <h3> <i className="fa-solid fa-phone icon"></i>Numero telefonico:</h3>
            <input type="text" {...register("numero_telefonico")} />
          </div>
          <div className='input_title_registro_form'>
            <h3> <i className="fa-regular fa-envelope icon"></i> Correo:</h3>
            <input type="text" {...register("correo")}/>
          </div>
          <div className='input_title_registro_form icon'>
            <h3> <i className="fa-solid fa-lock"></i> Contraseña:</h3>
            <input type="password" {...register("password")} />
          </div>
          <button><i className="fa-solid fa-check fa-2xl"></i></button>
        </form>
      </div>
    </div>
  )
}

export default Registers