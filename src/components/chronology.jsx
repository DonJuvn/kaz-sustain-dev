import React, { useState } from "react";

const Chronology = () => {
   const [currentIndex, setCurrentIndex] = useState(0);

   const chronologyItems = [
      {
         year: "1992 г.",
         text: "1992 г. – окончил Университет Дружбы Народов им. П. Лумумбы в Москве, специализация – математика.",
      },
      {
         year: "1992 - 1993 г.",
         text: "Директор ТОО «Салым-Актау».",
      },
      {
         year: "1993 - 1994 г.",
         text: "Финансовый директор ТОО «Далель».",
      },
      {
         year: "1994 - 1997 г.",
         text: "Директор ТОО «Мунай».",
      },
      {
         year: "1997 - 1998 г.",
         text: "Генеральный директор ТОО СП «Oil Co».",
      },
      {
         year: "1998 - 1999 г.",
         text: "Генеральный директор АО «АктауТрансГаз».",
      },
      {
         year: "1999 - 2000 г.",
         text: "Директор ТОО «Мунай».",
      },
      {
         year: "2000 - 2004 г.",
         text: "Президент АО «МПК – РГП «Мангистауский Атомный Энергокомбинат».",
      },
      {
         year: "2008 - 2024 гг.",
         text: "Председатель ОЮЛ и ИП Союза «Группа компаний ИНЖИНИРИНГ».",
      },
      {
         year: "С 2024 года",
         text: "Председатель ОЮЛ и ИП Союза «Казахский институт ESG и Устойчивого Развития».",
      },
   ];

   const handleItemClick = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % chronologyItems.length);
   };

   return (
      <div id="chronology">
         <div className="container">
            <div className="chronology">
               {chronologyItems.map((item, index) => (
                  <div
                     key={index}
                     className={`item ${index === currentIndex ? "active" : ""}`}
                     onClick={index === currentIndex ? handleItemClick : null}
                  >
                     <h1 id="title">
                        <span>{item.year}</span>
                     </h1>
                     <p>{item.text}</p>
                  </div>
               ))}
            </div>
            <div className="controls">
               {chronologyItems.map((_, index) => (
                  <span
                     key={index}
                     className={`control-dot ${
                        index === currentIndex ? "active" : ""
                     }`}
                     onClick={() => setCurrentIndex(index)}
                  ></span>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Chronology;
