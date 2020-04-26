let errorCollection =  (function (){

  onInit = () => {
    'use strict';

    let htmlBody = document.getElementById("root");
    let connection =
      window.navigator.connection ||
      window.navigator.mozConnection ||
      window.navigator.webkitConnection;
    let type = connection.effectiveType;
  }

  detectNetwork = () => {
    let isOnline = window.navigator.onLine;
    if (isOnline) {
      console.log(isOnline);
    } else {
      createModal();
    }
  }

  return {
    detectNetwork,

  }

})()

{










const detectNetwork = () => {
  let isOnline = window.navigator.onLine;
  if (isOnline) {
    console.log(isOnline);
  } else {
    createModal();
  }
};

function updateConnectionStatus() {
  if (!window.navigator.onLine) {
    createModal();
  } else {
    const modalDiv = document.getElementsByClassName("networkDetector");
    console.log(modalDiv);
  }
  console.log(
    "Connection type changed from " + type + " to " + connection.effectiveType
  );
  type = connection.effectiveType;
}


//TODO: accept an object as the parameter for the createModal 
//making it easier to create a dom element
function createModal() {
  const modalDiv = document.createElement("div");
  const modalTitle = document.createElement("h1");
  const modalTitleText = document.createTextNode("Network Error!");
  const modalSubTitle = document.createElement("p");
  const modalSubTitleText = document.createTextNode(
    "You are currently not connected to any network, check your network and retry"
  );

  modalTitle.appendChild(modalTitleText);
  modalSubTitle.appendChild(modalSubTitleText);
  modalSubTitle.append(modalSubTitleText)

  modalDiv.append()
  modalDiv.append(modalTitle, modalSubTitle)
  
  modalDiv.classList.add("networkDetector");
  htmlBody.appendChild(modalDiv);
}

connection.addEventListener("change", updateConnectionStatus, false);
window.addEventListener("load", detectNetwork, false);
