/* eslint-disable no-unused-vars */
import { useState } from "react";
import ADMDS from '../../../assets/1.0_AUTO DIAGNOSTICO MODO DE SUPERVIVENCIA.pdf'
import GDEEADLG from '../../../assets/1.1_GUIA DE ESTUDIO  EL ARTE DE LA GUERRA.pdf'
import GDEEDLP from '../../../assets/1.2_GUIA DE ESTUDIO EL PODER DE LA PRESENCIA.pdf'
import ZB from '../../../assets/1.3 ZONA BLANDA.pdf';
import GDECC from '../../../assets/1.4 GUÍA DE ESTUDIO CIRCULOS CONCENTRICOS.pdf'
import GDELM from '../../../assets/1.5 GUIA DE ESTUDIO  LA MAESTRIA.pdf'
import DEEDP from '../../../assets/1.6  DOMINAR EL  ESTADO DE PODER.pdf'
// #toolbar=0&navpanes=0&scrollbar=0
export const CourseMain = () => {
  const [lce, setLce] = useState(false);
  const [lceM0, setLceM0] = useState(false);
  const [lceM1, setLceM1] = useState(false);
  const [lceM1Lecturas, setLceM1Lecturas]= useState(false);
  const [lceM1Actividades, setLceM1Actividades]= useState(false);
  const [lceM1Videos, setLceM1Videos] = useState(false);
  const [lceM1PC,setLceM1PC]= useState(false);
  return (
    <div className="main_curser">
      <section className='box_section_course_one' onClick={()=>{setLce(!lce)}}>
        <h1> LIDERAZGO CONSCIENTE EMPRESARIAL</h1>
        <div>
          <i className="fa-solid fa-chevron-down fa-2xl" ></i>
        </div>
      </section>


      <div className='box_course_modules' style={lce===false ?{display:'none'}:{display:'flex'}}>

        <div className="box_module" onClick={()=>{setLceM0(!lceM0)}}>
          <div><h3>Modulo 0</h3></div>
          <i className="fa-solid fa-chevron-down fa-2xl" ></i>
          
        </div>
        <div className='module_course' style={lceM0 === false?{display:'none'}:{display:'flex'}} >
          <h1>Naufragio del Concordia:</h1>
          <iframe src="https://player.vimeo.com/video/201605227" width="740" height="560"  allow=" fullscreen" allowfullscreen></iframe>
        </div>

        {/* sep */}
        <div className="box_module" onClick={()=>{setLceM1(!lceM1)}}>
          <div><h3>Modulo 1</h3></div>
          <i className="fa-solid fa-chevron-down fa-2xl" ></i>
        </div>
        <div className='module_course' style={lceM1 === false?{display:'none'}:{display:'flex'}}  >
          <div className="box_module_separation" onClick={()=>{setLceM1Lecturas(!lceM1Lecturas)}}>
            <h3>Lecturas</h3>
          </div>
          <div className="box_module_separation_panel" style={lceM1Lecturas === false? {display:'none'}:{display:'flex'}}>
            <div className="com_box_module_separation_panel">
              <h4>1.-AUTO DIAGNOSTICO MODO DE SUPERVIVENCIA</h4>
              <iframe src={ADMDS} type="application/pdf" width="90%" height="600px" />
            </div>
            <div className="com_box_module_separation_panel">
              <h4>1.1.-GUIA DE ESTUDIO  EL ARTE DE LA GUERRA</h4>
              <iframe src={GDEEADLG} type="application/pdf" width="90%" height="600px" />
            </div>
            <div className="com_box_module_separation_panel">
              <h4>1.2.-GUIA DE ESTUDIO EL PODER DE LA PRESENCIA</h4>
              <iframe src={GDEEDLP} type="application/pdf" width="90%" height="600px" />
            </div>
            <div className="com_box_module_separation_panel">
              <h4>1.3.-ZONA BLANDA</h4>
              <iframe src={ZB} type="application/pdf" width="90%" height="600px" />
            </div>
            <div className="com_box_module_separation_panel">
              <h4>1.4.-GUÍA DE ESTUDIO CIRCULOS CONCENTRICOS</h4>
              <iframe src={GDECC} type="application/pdf" width="90%" height="600px" />
            </div>
            <div className="com_box_module_separation_panel">
              <h4>1.5.-GUIA DE ESTUDIO  LA MAESTRIA</h4>
              <iframe src={GDELM} type="application/pdf" width="90%" height="600px" />
            </div>
          </div>
          {/* separacion */}

          <div className="box_module_separation" onClick={()=>{setLceM1Videos(!lceM1Videos)}}>
            <h3>Videos</h3>
          </div>
          <div className="box_module_separation_panel" style={lceM1Videos === false ? {display:'none'}:{display:'flex'}} >
            <div className="video_box_module_separation_panel">
              <h3>Tragedia en el everest:</h3>
              <iframe src="https://player.vimeo.com/video/331427900" width="520" height="290"  allow=" fullscreen" ></iframe>
            </div>
            <div className="video_box_module_separation_panel">
              <h3>El Arte de la Guerra:</h3>
              <iframe src="https://player.vimeo.com/video/201241738" width="520" height="350"  allow=" fullscreen" ></iframe>
            </div>
            <div className="video_box_module_separation_panel">
              <h3>Kymatica:</h3>
              <iframe src="https://player.vimeo.com/video/387611533" width="520" height="390"  allow=" fullscreen" ></iframe>
            </div>
            <div className="video_box_module_separation_panel">
              <h3>El Poder de la Presencia.- AMY CUDDY:</h3>
              <iframe src="https://player.vimeo.com/video/512332977" width="520" height="290"  allow=" fullscreen" ></iframe>
            </div>
            <div className="video_box_module_separation_panel">
              <h3>TÉCNICA WIN HOF (ICEMAN):</h3>
              <iframe src="https://player.vimeo.com/video/685220789?h=f885a4e4e2" width="520" height="290"  allow=" fullscreen" ></iframe>
              {/* <iframe src="https://player.vimeo.com/video/685220789?h=f885a4e4e2" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
<p><a href="https://vimeo.com/685220789">T&Eacute;CNICA  WIN HOF (ICEMAN)</a> from <a href="https://vimeo.com/westpointparapymes">Sun Tzu para Directivos</a> on <a href="https://vimeo.com">Vimeo</a>.</p> */}
            </div>
            <div className="video_box_module_separation_panel">
              <h3>Claves para estar en el aquí y ahora:</h3>
              <iframe src="https://player.vimeo.com/video/574287450" width="520" height="290"  allow=" fullscreen" ></iframe>
            </div>
            <div className="video_box_module_separation_panel">
              <h3>Meditacion completa Deja de ser tú:</h3>
              <iframe src="https://player.vimeo.com/video/201620127?h=16081c12ff" width="520" height="390"  allow=" fullscreen" ></iframe>
              {/* <iframe src="https://player.vimeo.com/video/201620127?h=16081c12ff" width="640" height="480" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
<p><a href="https://vimeo.com/201620127">Meditacion completa Deja de ser t&uacute;</a> from <a href="https://vimeo.com/westpointparapymes">Sun Tzu para Directivos</a> on <a href="https://vimeo.com">Vimeo</a>.</p> */}
            </div>
            <div className="video_box_module_separation_panel">
              <h3>No Mente:</h3>
              <iframe src="https://player.vimeo.com/video/243037302" width="520" height="390"  allow=" fullscreen" ></iframe>
            </div>
            <div className="video_box_module_separation_panel">
              <h3>No se trata de fuerza:</h3>
              <iframe src="https://player.vimeo.com/video/243039140" width="520" height="280"  allow=" fullscreen" ></iframe>
            </div>
            <div className="video_box_module_separation_panel">
              <h3>La voluntad lo es todo:</h3>
              <iframe src="https://player.vimeo.com/video/243036819" width="520" height="390"  allow=" fullscreen" ></iframe>
            </div>
            <div className="video_box_module_separation_panel">
              <h3>El hoy es un regalo por eso se le llama presente:</h3>
              <iframe src="https://player.vimeo.com/video/243029570" width="520" height="290"  allow=" fullscreen" ></iframe>
            </div>
            <div className="video_box_module_separation_panel">
              <h3>Tienes que creer:</h3>
              <iframe src="https://player.vimeo.com/video/243030952" width="520" height="230"  allow=" fullscreen" ></iframe>
            </div>
          </div>
                    {/* separacion */}
            <div className="box_module_separation"  onClick={()=>{setLceM1PC(!lceM1PC)}}>
            <h3>Peliculas completas</h3>
          </div>
          <div className="box_module_separation_panel" style={lceM1PC === false? {display:'none'}:{display:'flex'}}>
            <div className="video_box_module_separation_panel">
              <h3>Million Dollar Baby - Golpes del Destino:</h3>
              <iframe src="https://player.vimeo.com/video/451685960" width="520" height="220"  allow=" fullscreen" ></iframe>
            </div>
            <div className="video_box_module_separation_panel">
              <h3>El Camino Del Guerrero:</h3>
              <iframe src="https://player.vimeo.com/video/221167706" width="520" height="350"  allow=" fullscreen" style={{backgroundColor:'white'}}></iframe>
            </div>
            <div className="video_box_module_separation_panel">
              <h3>Kung Fu Panda:</h3>
              <iframe src="https://player.vimeo.com/video/224798210" width="520" height="220"  allow=" fullscreen" style={{backgroundColor:'white'}}></iframe>
            </div>
          </div>

          {/* separacion */}
          <div className="box_module_separation"  onClick={()=>{setLceM1Actividades(!lceM1Actividades)}}>
            <h3>Actividades</h3>
          </div>
          <div className="box_module_separation_panel" style={lceM1Actividades === false? {display:'none'}:{display:'flex'}}>
            <div className="com_box_module_separation_panel">
                <h4>1.6.-DOMINAR EL  ESTADO DE PODER</h4>
                <iframe src={DEEDP} type="application/pdf" width="90%" height="600px" />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
