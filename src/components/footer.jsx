import React from "react";
const Footer = () => {
   return (
      <div id="footer">
         <div className="container">
            <div className="footer">
               <div className="top">
                  <div className="logo">
                     <img src="img/logo-white.svg" alt="" />
                  </div>
                  <div className="info">
                     <p>
                        Адрес: г.Астана, микрорайон <br />
                        Шубар, улица Н.Ондасынова 45
                     </p>
                     <p>
                        Телефон:
                        <br />
                        +7 (7172) 24-55-22
                     </p>
                     <p>
                        Электронная почта: <br />
                        info@kazsustaindev.com
                     </p>
                  </div>
               </div>
               <div className="bottom">
                  <div className="links">
                     <a href="#">Facebook</a>
                     <a href="#">Linkedin</a>
                     <a href="#">Instagram</a>
                  </div>
                  <p>© 2024. Все права защищены.</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;
