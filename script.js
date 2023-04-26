document.addEventListener("DOMContentLoaded", function () {
  const terminal = document.getElementById("terminal");
  let currentIndex = 0;

  function typeText(message, speed, callback) {
    if (currentIndex < message.length) {
      terminal.textContent += message[currentIndex];
      currentIndex++;
      setTimeout(() => typeText(message, speed, callback), speed);
    } else {
      currentIndex = 0;
      if (callback) {
        callback();
      }
    }
  }

  function createInput() {
    const input = document.createElement("input");
    input.type = "text";
    input.classList.add("input-field");
    terminal.appendChild(input);
    return input;
  }
  

  function createCursor() {
    const cursor = document.createElement("span");
    cursor.classList.add("cursor");
    terminal.appendChild(cursor);
  }

  function askForPill() {
  const message = "Type Red or Blue and press Enter.\n";
  resetTerminal();
  typeText(message, 50, () => {
    terminal.textContent += "\n"; // Add a newline character before the input field
    const input = createInput();
    input.addEventListener("keydown", handlePillKeyDown);
    input.addEventListener("keyup", handlePillKeyUp); // Add keyup event listener
    input.focus();
  });
}

// New function to handle keyup events
function handlePillKeyUp(event) {
  const pillChoice = event.target.value.trim().toLowerCase();
  if (pillChoice === "red") {
    event.target.style.color = "red";
  } else if (pillChoice === "blue") {
    event.target.style.color = "blue";
  } else {
    event.target.style.color = "white";
  }
}

  
  
  
  

  function handleWakeUp() {
    const message = "Wake up...";
    typeText(message, 50, function() {
      setTimeout(handleCCGHasYou, 2000);
    });
  }

  function handleCCGHasYou() {
    currentIndex = 0;
    terminal.textContent = "";
    const message = "CCG has you...";
    typeText(message, 50, function() {
      setTimeout(handleChoiceToMake, 2000);
    });
  }

  function handleChoiceToMake() {
    currentIndex = 0;
    terminal.textContent = "";
    const message = "You have a choice to make...\n";
    typeText(message, 50, function() {
      setTimeout(handleBluePill, 2000);
    });
  }

  function handleBluePill() {
    currentIndex = 0;
    terminal.textContent = "";
    const message = "Take the Blue Pill, Enter the matrix and explore our portfolio.\n\n";
    typeText(message, 50, function() {
      setTimeout(handleRedPill, 2000);
    });
  }

  function handleRedPill() {
    currentIndex = 0;
    terminal.textContent = "";
    const message = "Take the Red Pill, see how deep the rabbit hole goes. Create your own reality and a custom project.\n\n";
    typeText(message, 50, function() {
      setTimeout(handleRememberTheTruth, 2000);
    });
  }

  function handleRememberTheTruth() {
    currentIndex = 0;
    terminal.textContent = "";
    typeText("Remember, we only offer the truth.\n\n", 50, function() {
      setTimeout(askForPill, 2000);
    });
  }

  function handlePillKeyDown(event) {
  if (event.key === "Enter") {
    const pillChoice = event.target.value.trim().toLowerCase();
    if (pillChoice === "red") {
      window.location.href = "custom-quote.html";
    } else if (pillChoice === "blue") {
      window.location.href = "portfolio.html";
    } else {
      const message = "Invalid choice. Please try again. (Type 'red' or 'blue')\n";
      typeText(message, 50);
    }
  }
}



  function resetTerminal() {
    terminal.textContent = "";
    createCursor();
  }

  createCursor();
  handleWakeUp();
});
