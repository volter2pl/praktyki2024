function changeTheme(){
    const mainElement = document.querySelector("main") as HTMLElement;
    const headerElement = document.querySelector("header") as HTMLElement;
    const footerElement = document.querySelector("footer") as HTMLElement;
    const sectionElements = document.querySelectorAll(".container") as NodeListOf<HTMLElement>;
    const logoElement = document.querySelector(".Logo") as HTMLElement;
    const buttonElement = document.querySelector(".changecolour") as HTMLElement;
    const buttonElementSec = document.querySelector(".zebatka") as HTMLElement;
    const menu = document.querySelector(".menu") as HTMLElement;
    const enigmabuttons = document.querySelectorAll(".L_buttons") as NodeListOf<HTMLElement>;
    
    if (mainElement && headerElement && footerElement && sectionElements && logoElement && buttonElement && buttonElementSec && menu && sapper) {
      const isViolet = mainElement.style.borderColor === "violet";

      mainElement.style.borderColor = isViolet ? "" : "violet";
      mainElement.style.boxShadow = isViolet ? "" : "inset 0px 0px 10px 5px rgba(255, 0, 255, 0.5), 0px 2px 50px 10px rgba(255, 0, 255, 0.5)";

      headerElement.style.borderColor = isViolet ? "" : "violet";
      headerElement.style.boxShadow = isViolet ? "" : "inset 0px 0px 10px 5px rgba(255, 0, 255, 0.5), 0px 2px 50px 10px rgba(255, 0, 255, 0.5)";

      footerElement.style.borderColor = isViolet ? "" : "violet";
      footerElement.style.boxShadow = isViolet ? "" : "inset 0px 0px 10px 5px rgba(255, 0, 255, 0.5), 0px 2px 50px 10px rgba(255, 0, 255, 0.5)";

      logoElement.style.color = isViolet ? "" : "violet";
      logoElement.style.textShadow = isViolet ? "" : "0px 2px 50px rgba(255, 0, 255, 0.5)";
      logoElement.style.webkitTextStroke = isViolet ? "" : "solid 3px #ff2e36";

      buttonElement.style.color = isViolet ? "" : "violet";
      buttonElement.style.borderColor = isViolet ? "" : "violet";
      buttonElement.style.boxShadow = isViolet ? "" : "inset 0px 0px 10px 5px rgba(255, 0, 255, 0.5), 0px 2px 50px 10px rgba(255, 0, 255, 0.5)";
      buttonElement.addEventListener("mouseover", () => { buttonElement.style.borderColor = "white" });
      buttonElement.addEventListener("mouseout", () => { isViolet ? buttonElement.style.borderColor = "#ff2e36" : buttonElement.style.borderColor = "violet"});

      buttonElementSec.style.color = isViolet ? "" : "violet";
      buttonElementSec.style.borderColor = isViolet ? "" : "violet";
      buttonElementSec.addEventListener("mouseover", () => { buttonElement.style.borderColor = "white" });
      buttonElementSec.addEventListener("mouseout", () => { isViolet ? buttonElement.style.borderColor = "#ff2e36" : buttonElement.style.borderColor = "violet"});

      menu.style.boxShadow = isViolet ? "" : "inset 0px 0px 10px 5px rgba(255, 0, 255, 0.5), 0px 2px 50px 10px rgba(255, 0, 255, 0.5)";
      menu.style.borderColor = isViolet ? "" : "violet";

      sapper.forEach((element) => {
        element.style.borderColor = isViolet ? "" : "violet";
      });
      
      
      sectionElements.forEach((element) => {
        element.style.borderColor = isViolet ? "" : "violet";
        element.style.boxShadow = isViolet ? "" : "inset 0px 0px 10px 5px rgba(255, 0, 255, 0.5), 0px 2px 50px 10px rgba(255, 0, 255, 0.5)";
        element.addEventListener("mouseover", () => { element.style.animation = isViolet ? "" : "pulse-border-violet 1s infinite"; });
        element.addEventListener("mouseout", () => { element.style.animation = "" });
      });

      enigmabuttons.forEach((element) => {
        element.style.borderColor = isViolet? "" : "violet";
        element.style.boxShadow = isViolet? "" : "inset 0px 0px 10px 5px rgba(255, 0, 255, 0.5), 0px 2px 50px 10px rgba(255, 0, 255, 0.5)";
        element.addEventListener("mouseover", () => { element.style.animation = isViolet? "" : "pulse-border-violet 1s infinite"; });
        element.addEventListener("mouseout", () => { element.style.animation = "" });
        element.style.color = isViolet ? "" : "violet";
      });
    }
};

export default changeTheme;