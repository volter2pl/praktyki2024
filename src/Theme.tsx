function changeTheme(){
    const mainElement = document.querySelector("main") as HTMLElement;
    const headerElement = document.querySelector("header") as HTMLElement;
    const footerElement = document.querySelector("footer") as HTMLElement;
    const sectionElements = document.querySelectorAll(".container") as NodeListOf<HTMLElement>;
    const logoElement = document.querySelector(".Logo") as HTMLElement;
    const buttonElement = document.querySelector(".changecolour") as HTMLElement;

    if (mainElement && headerElement && footerElement && sectionElements && logoElement && buttonElement) {
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

      sectionElements.forEach((element) => {
        element.style.borderColor = isViolet ? "" : "violet";
        element.style.boxShadow = isViolet ? "" : "inset 0px 0px 10px 5px rgba(255, 0, 255, 0.5), 0px 2px 50px 10px rgba(255, 0, 255, 0.5)";
      });
      
    }
}

export default changeTheme;