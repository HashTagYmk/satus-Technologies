function openTab(tabName) {
    // Hide all tab content
    var tabs = document.getElementsByClassName("tab-pane");
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove("active");
    }
  
    // Remove "active" class from all buttons
    var buttons = document.getElementsByClassName("tab-btn");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("active");
    }
  
    // Show the clicked tab content and activate the button
    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active");
  }
  