import React from "react";
const Guide = () => {
   return (
      <div id="guide">
         <div className="container">
            <div className="guide1">
               <div className="container">
                  <div className="left">
                     <div className="who">
                        <div className="lines">
                           <div className="grey-line"></div>
                           <div className="black-line"></div>
                        </div>
                        <div className="guide">
                           <p id="active">Руководство</p>
                           <p>Команда экспертов</p>
                        </div>
                     </div>
                     <p>
                        Наша команда руководителей определяет стратегическое
                        направление института и ведет нас к достижению целей в
                        области ESG и устойчивого развития.
                     </p>
                     <div className="info">
                        <a href="#">KazSustainDev</a>
                        <a href="#">Руководство</a>
                     </div>
                  </div>
                  <div className="right">
                     <img src="img/guide.png" alt="" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Guide;
