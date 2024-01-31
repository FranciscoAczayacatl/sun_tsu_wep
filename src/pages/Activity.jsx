import '../css/activacion.css'

const Activity = () => {
  return (
    <div className='box_activiti'>
      <img src="../../public/Logo_SUN_TZU-01.png" alt="" style={{width:'20vw', height:'40vh'}} />
      <div className='text_activity'>
      <p>Estimado/a.</p>
      <p>Lamentamos informarte que tu cuenta no esta activada. Nuestro equipo de soporte 
        está trabajando en ello y se espera que se complete en las próximas 48 horas.</p>
      <p>Si después de este plazo no recibes ninguna notificación o tu cuenta sigue inactiva, 
        por favor, contáctanos a través de: <a href="mailto:suntzusoporte@gmail.com" style={{color: 'blue'}}>suntzusoporte@gmail.com</a> para una asistencia inmediata.</p>
      <p>Agradecemos tu comprensión y paciencia.</p>
      <p>Atentamente,</p>
      <p>Equipo de soporte</p>
      <h4>SUN TZU.</h4>
      </div>
    </div>
  )
}

export default Activity