function changeTheme(colouur : string){
    const mainElement = document.querySelector("main") as HTMLElement;
    const headerElement = document.querySelector("header") as HTMLElement;
    const footerElement = document.querySelector("footer") as HTMLElement;
    const sectionElements = document.querySelectorAll(".container") as NodeListOf<HTMLElement>;
    const logoElement = document.querySelector(".Logo") as HTMLElement;
    const buttonElement = document.querySelector(".changecolour") as HTMLElement;
    const buttonElementSec = document.querySelector(".zebatka") as HTMLElement;
    const menu = document.querySelector(".menu") as HTMLElement as HTMLElement;
    const enigmabuttons = document.querySelectorAll(".L_buttons") as NodeListOf<HTMLElement>;
    
    if (colouur === "violet"){
      mainElement.style.borderColor = "violet";
      mainElement.style.boxShadow = "inset 0px 0px 10px 5px rgba(255, 0, 255, 0.5), 0px 2px 50px 10px rgba(255, 0, 255, 0.5)";

      headerElement.style.borderColor = "violet";
      headerElement.style.boxShadow = "inset 0px 0px 10px 5px rgba(255, 0, 255, 0.5), 0px 2px 50px 10px rgba(255, 0, 255, 0.5)";

      footerElement.style.borderColor = "violet";
      footerElement.style.boxShadow = "inset 0px 0px 10px 5px rgba(255, 0, 255, 0.5), 0px 2px 50px 10px rgba(255, 0, 255, 0.5)";

      logoElement.style.color = "violet";
      logoElement.style.textShadow = "0px 2px 50px rgba(255, 0, 255, 0.5)";
      logoElement.style.webkitTextStroke = "solid 3px #ff2e36";

      buttonElement.style.color = "violet";
      buttonElement.style.borderColor = "violet";
      buttonElement.style.boxShadow = "inset 0px 0px 10px 5px rgba(255, 0, 255, 0.5), 0px 2px 50px 10px rgba(255, 0, 255, 0.5)";
      buttonElement.addEventListener("mouseover", () => { buttonElement.style.borderColor = "white" });
      buttonElement.addEventListener("mouseout", () => { buttonElement.style.borderColor = "violet"});

      buttonElementSec.style.color = "violet";
      buttonElementSec.style.borderColor = "violet";
      buttonElementSec.addEventListener("mouseover", () => { buttonElement.style.borderColor = "white" });
      buttonElementSec.addEventListener("mouseout", () => { buttonElement.style.borderColor = "violet"});

      menu.style.boxShadow = "inset 0px 0px 10px 5px rgba(255, 0, 255, 0.5), 0px 2px 50px 10px rgba(255, 0, 255, 0.5)";
      menu.style.borderColor = "violet";
      
      sectionElements.forEach((element) => {
        element.style.borderColor = "violet";
        element.style.boxShadow = "inset 0px 0px 10px 5px rgba(255, 0, 255, 0.5), 0px 2px 50px 10px rgba(255, 0, 255, 0.5)";
        element.addEventListener("mouseover", () => { element.style.animation = "pulse-border-violet 1s infinite"; });
        element.addEventListener("mouseout", () => { element.style.animation = "" });
      });

      enigmabuttons.forEach((element) => {
        element.style.borderColor = "violet";
        element.style.boxShadow = "inset 0px 0px 10px 5px rgba(255, 0, 255, 0.5), 0px 2px 50px 10px rgba(255, 0, 255, 0.5)";
        element.addEventListener("mouseover", () => { element.style.animation = "pulse-border-violet 1s infinite"; });
        element.addEventListener("mouseout", () => { element.style.animation = "" });
        element.style.color = "violet";
      });
      return "violet";
    }
    if (colouur === "red"){
      mainElement.style.borderColor = "#ff000a";
      mainElement.style.boxShadow = "inset 0px 0px 10px 5px rgba(255,0,10,0.5), 0px 2px 50px 10px rgba(255,0,10,0.5)";

      headerElement.style.borderColor = "#ff000a";
      headerElement.style.boxShadow = "inset 0px 0px 10px 5px rgba(255,0,10,0.5), 0px 2px 50px 10px rgba(255,0,10,0.5)";

      footerElement.style.borderColor = "#ff000a";
      footerElement.style.boxShadow = "inset 0px 0px 10px 5px rgba(255,0,10,0.5), 0px 2px 50px 10px rgba(255,0,10,0.5)";

      logoElement.style.color = "#991616";
      logoElement.style.textShadow = "0px 2px 50px #ff000a";
      logoElement.style.webkitTextStroke = "solid 3px #ff2e36";

      buttonElement.style.color = "#ff000a";
      buttonElement.style.borderColor = "#ff2e36";
      buttonElement.style.boxShadow = "inset 0px 0px 5px 5px rgba(255,0,10,0.5), 0px 2px 20px 5px rgba(255,0,10,0.5)";
      buttonElement.addEventListener("mouseover", () => { buttonElement.style.borderColor = "white" });
      buttonElement.addEventListener("mouseout", () => { buttonElement.style.borderColor = "#ff2e36"});

      buttonElementSec.style.color = "#ff000a";
      buttonElementSec.style.borderColor = "#ff2e36";
      buttonElementSec.addEventListener("mouseover", () => { buttonElement.style.borderColor = "white" });
      buttonElementSec.addEventListener("mouseout", () => { buttonElement.style.borderColor = "#ff2e36"});

      menu.style.boxShadow = "inset 0px 0px 5px 5px rgba(255,0,10,0.5), 0px 2px 20px 5px rgba(255,0,10,0.5)";
      menu.style.borderColor = "red";
      
      sectionElements.forEach((element) => {
        element.style.borderColor = "#ff000a";
        element.style.boxShadow = "inset 0px 0px 10px 5px rgba(255,0,10,0.5), 0px 2px 50px 10px rgba(255,0,10,0.5)";
        element.addEventListener("mouseover", () => { element.style.animation = "pulse-border-red 1s infinite"; });
        element.addEventListener("mouseout", () => { element.style.animation = "" });
      });

      enigmabuttons.forEach((element) => {
        element.style.borderColor = "#ff2e36";
        element.style.boxShadow = "inset 0px 0px 5px 5px rgba(255,0,10,0.5), 0px 2px 20px 5px rgba(255,0,10,0.5)";
        element.addEventListener("mouseover", () => { element.style.animation = "pulse-border-red 1s infinite"; });
        element.addEventListener("mouseout", () => { element.style.animation = "" });
        element.style.color = "#ff000a";
      });
      return "red";
    }
}


export default changeTheme;
