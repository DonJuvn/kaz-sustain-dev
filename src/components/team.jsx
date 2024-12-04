import React from "react";const Team = () => {
   return (
      <div id="team">
         <div className="container">
            <div className="team">
               <div className="container">
                  <div className="left">
                     <div className="who">
                        <div className="lines">
                           <div className="grey-line"></div>
                           <div className="black-line"></div>
                        </div>
                        <div className="guide">
                           <p>Руководство</p>
                           <p id="active">Команда экспертов</p>
                        </div>
                     </div>
                     <p>
                        Наша команда объединяет профессионалов с обширным опытом
                        в экологии, социальных науках и управлении
                     </p>
                     <div className="info">
                        <a href="#">KazSustainDev</a>
                        <a href="#">Команда Экспертов</a>
                     </div>
                  </div>
                  <div className="right">
                     <img src="img/team.png" alt="" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Team;
