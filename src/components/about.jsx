import React from "react";

const About = () => {
   return(
      <div id="about">
         <div className="container">
            <div className="about">
               <div className="text">
                  <div className="inner">
                     <h1 id="title"><span>Казахский институт ESG</span> <br/>и устойчивого развития</h1>
                     <p>Создаём устойчивое будущее для Казахстана, объединяя лидеров и идеи для заботы о планете и обществе. Вместе к процветанию и стабильности!</p>
                  </div>
                  <div className="links">
                     <a href="#">Whatsapp<img src="img/link.png" alt="" /></a>
                     <a href="#">Linked in<img src="img/link.png" alt="" /></a>
                     <a href="#">Instagram<img src="img/link.png" alt="" /></a>
                  </div>
               </div>
               
            </div>
         </div>
      </div>
   )
}

export default About;