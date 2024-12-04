import React from "react";const Form = () => {
   return (
      <div id="form">
         <div className="container">
            <div className="form">
               <div className="left">
                  <h1 id="title">
                     Присоединяйтесь к <br />
                     <span>KazSustainDev</span>
                  </h1>
                  <div class="form-container">
                     <form>
                        <input
                           type="text"
                           placeholder="Введите адрес института"
                        />
                        <div class="inline-inputs">
                           <input type="email" placeholder="Введите email" />
                           <input
                              type="tel"
                              placeholder="Введите номер телефона"
                           />
                        </div>
                        <button type="submit">Отправить заявку</button>
                     </form>
                  </div>
                  <p>
                     Нажимая кнопку вы соглашаетесь согласие на обработку
                     персональных данных
                  </p>
               </div>
               <div className="right">
                  <img src="img/element.png" alt="" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Form;
