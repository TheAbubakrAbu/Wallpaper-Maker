// This app was developed by Abubakr Elmallah in Fall 2021.
// Credit for "assets/ButtonClick1.mp3" goes to ZAPSPLAT and its creators (https://www.zapsplat.com/sound-effect-category/button-clicks/).

var ButtonClick1 = "assets/ButtonClick1.mp3";
var ButtonClick3 = "assets/category_app/snap.mp3";
var ButtonClick4 = "assets/category_app/perfect_clean_app_button_click.mp3";

var Hide = false;
var First = false;

var shapeList = [
  "icon://fa-heart", 
  "icon://fa-smile-o", 
  "icon://fa-globe", 
  "icon://fa-tree", 
  "icon://fa-bolt", 
  "icon://fa-moon-o",
  "icon://fa-star",
  "icon://fa-rebel",
  "icon://fa-empire"
];
function ShapeDropdown() {
  if(Shape == "icon://fa-heart") {
    Shape = "Heart";
  } else if(Shape == "icon://fa-smile-o") {
    Shape = "Smile";
  } else if(Shape == "icon://fa-globe") {
    Shape = "Globe";
  } else if(Shape == "icon://fa-bolt") {
    Shape = "Lightning";
  } else if(Shape == "icon://fa-moon-o") {
    Shape = "Moon";
  } else if(Shape == "icon://fa-tree") {
    Shape = "Tree";
  } else if(Shape == "icon://fa-star") {
    Shape = "Star";
  } else if(Shape == "icon://fa-rebel") {
    Shape = "Rebellion";
  } else if(Shape == "icon://fa-empire") {
    Shape = "Empire";
  }
}
function RandomShape() {return shapeList[Math.floor(Math.random() * shapeList.length)]}
var Shape;

var RandomSize;
var Random;

var Colors = [
  "white",
  "black",
  "lightblue",
  "red",
  "lightgreen",
  "yellow",
  "orange",
  "#CBC3E3", // Purple
  "pink",
];
function ColorDropdown() {
  if(Color == "black") {
    Color = "Black";
  } else if(Color == "white") {
    Color = "White";
  } else if(Color == "lightblue") {
    Color = "Blue";
  } else if(Color == "red") {
    Color = "Red";
  } else if(Color == "lightgreen") {
    Color = "Green";
  } else if(Color == "yellow") {
    Color = "Yellow";
  } else if(Color == "orange") {
    Color = "Orange";
  } else if(Color == "#CBC3E3") {
    Color = "Purple";
  } else if(Color == "pink") {
    Color = "Pink";
  }
}
function RandomColor() {return Colors[Math.floor(Math.random() * Colors.length)]}
var Color;

var BackgroundColors = [
  "black",
  "white",
  "#8b0000", // Dark Red
  "#ffcccb", // Light Red
  "#00008b", // Dark Blue
  "#add8e6", // Light Blue
  "#013220", // Dark Green
  "#90EE90", // Light Green
  "#ffffe0", // Yellow
  "#6a0dad", // Purple
  "Star Wars",
  "Darth Vader",
  "Falcon",
  "Insignias",
];
function BackgroundDropdown() {
  if(BackgroundColor == "Star Wars") {
    setProperty("HomeScreen", "image", "assets/Star-Wars.jpg");
  } else if(BackgroundColor == "Darth Vader") {
    setProperty("HomeScreen", "image", "assets/Darth-Vader.jpg");
  } else if(BackgroundColor == "Falcon") {
    setProperty("HomeScreen", "image", "assets/Millenium-Falcon.png");
  } else if(BackgroundColor == "Insignias") {
    setProperty("HomeScreen", "image", "assets/Insignias.jpg");
  } else {
    setProperty("HomeScreen", "background-color", BackgroundColor);
    setProperty("HomeScreen", "image", "");
  }
  
  if(BackgroundColor == "black") {
    BackgroundColor = "Black";
  } else if(BackgroundColor == "white") {
    BackgroundColor = "White";
  } else if(BackgroundColor == "#8b0000") {
    BackgroundColor = "Dark Red";
  } else if(BackgroundColor == "#ffcccb") {
    BackgroundColor = "Light Red";
  } else if(BackgroundColor == "#00008b") {
    BackgroundColor = "Dark Blue";
  } else if(BackgroundColor == "#add8e6") {
    BackgroundColor = "Light Blue";
  } else if(BackgroundColor == "#013220") {
    BackgroundColor = "Dark Green";
  } else if(BackgroundColor == "#90EE90") {
    BackgroundColor = "Light Green";
  } else if(BackgroundColor == "#ffffe0") {
    BackgroundColor = "Yellow";
  } else if(BackgroundColor == "#6a0dad") {
    BackgroundColor = "Purple";
  }
}
function RandomBackgroundColor() {return BackgroundColors[Math.floor(Math.random() * BackgroundColors.length)]}
var BackgroundColor;

onEvent("HideButton", "click", function() {
  playSound(ButtonClick3);
  if(!Hide) {
    hideElement("LocationButton");
    hideElement("BackgroundLabel");
    hideElement("ShapeColorLabel");
    hideElement("ShapeTypeLabel");
    hideElement("IconSizeDropdown");
    hideElement("SizeSlider");
    hideElement("BackgroundDropdown");
    hideElement("ColorDropdown");
    hideElement("ShapeDropdown");
    hideElement("BlackBackground");
    setProperty("HideButton", "image", "icon://fa-picture-o");
    Hide = true;
  } else {
    showElement("LocationButton");
    showElement("BackgroundLabel");
    showElement("ShapeColorLabel");
    showElement("ShapeTypeLabel");
    showElement("IconSizeDropdown");
    showElement("SizeSlider");
    showElement("BackgroundDropdown");
    showElement("ColorDropdown");
    showElement("ShapeDropdown");
    showElement("BlackBackground");
    setProperty("HideButton", "image", "icon://fa-eye-slash");
    Hide = false;
  }
});

onEvent("LocationButton", "click", function() {
  playSound(ButtonClick1);
  if(First == false) {
    Shape = RandomShape();
    showElement("AllRandomButton");
    setProperty("LocationButton", "width", 170);
    setProperty("LocationButton", "x", 145);
    setProperty("LocationButton","text", "Location");
    showElement("BackgroundLabel");
    showElement("ShapeColorLabel");
    showElement("ShapeTypeLabel");
    showElement("IconSizeDropdown");
    showElement("SizeSlider");
    showElement("BackgroundDropdown");
    showElement("ColorDropdown");
    showElement("ShapeDropdown");
    for(var i = 0; i < 20; i++) {
      showElement("icon" + i);
      setImageURL("icon" + i, Shape);
      setProperty("icon" + i, "icon-color", "white");
      setPosition("icon" + i, randomNumber(0, 300), randomNumber(0, 400));
    }
    setProperty("IconSizeDropdown", "options", [20, "Random Size", "Random Sizes"]);
    setProperty("BackgroundDropdown", "options", ["Black"]);
    setProperty("BackgroundDropdown", "options", [
      "Black",
      "Random",
      "White",
      "Dark Red",
      "Light Red",
      "Dark Blue",
      "Light Blue",
      "Dark Green",
      "Light Green",
      "Yellow",
      "Purple",
      "Star Wars",
      "Darth Vader",
      "Falcon",
      "Insignias",
    ]);
    setProperty("HomeScreen", "background-color", "black");
    
    setProperty("ColorDropdown", "options", ["White"]);
    setProperty("ColorDropdown", "options", [
      "White",
      "Random Color",
      "Random Colors",
      "Black",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Orange",
      "Purple",
      "Pink",
    ]);
    for(var l = 0; l < 20; l++) {
      setProperty("icon" + l, "icon-color", "white");
    }
    
    ShapeDropdown();
    
    setProperty("ShapeDropdown", "options", [Shape]);
    setProperty("ShapeDropdown", "options", [
      Shape,
      "Random Shape",
      "Random Shapes",
      "Heart",
      "Smile",
      "Globe",
      "Tree",
      "Lightning",
      "Moon",
      "Star",
      "Rebellion",
      "Empire",
    ]);
    First = true;
  } else {
    for(var j = 0; j < 20; j++) {
      setPosition("icon" + j, randomNumber(0, 300), randomNumber(0, 400));
    }
  }
});

onEvent("AllRandomButton", "click", function() {
  BackgroundColor = RandomBackgroundColor();
  Shape = RandomShape();
  Color = RandomColor();
  RandomSize = randomNumber(20, 100);
  Random = randomNumber(0, 7);
  playSound(ButtonClick4);
  setText("LocationButton", "Location");
  if(getImageURL("icon0") == "") {
    showElement("IconSizeDropdown");
    showElement("SizeSlider");
    showElement("BackgroundDropdown");
    showElement("ColorDropdown");
    showElement("ShapeDropdown");
  }

  if(Random == 0) {
    for(var i = 0; i < 20; i++) {
      showElement("icon" + i);
      setImageURL("icon" + i, RandomShape());
      setProperty("icon" + i, "icon-color", RandomColor());
      setProperty("icon" + i, "width", randomNumber(20, 100));
      setProperty("icon" + i, "height", randomNumber(20, 100));
      setPosition("icon" + i, randomNumber(0, 300), randomNumber(0, 400));
    }
    setProperty("IconSizeDropdown", "options", ["Random"]);
    setProperty("IconSizeDropdown", "options", ["Random", "Random Size", "Random Sizes"]);
    setProperty("SizeSlider", "value", 20);
    
    setProperty("ColorDropdown", "options", ["Random"]);
    setProperty("ColorDropdown", "options", [
      "Random",
      "Random Color",
      "Random Colors",
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Orange",
      "Purple",
      "Pink",
    ]);
    
    setProperty("ShapeDropdown", "options", ["Random"]);
    setProperty("ShapeDropdown", "options", [
      "Random",
      "Random Shape",
      "Random Shapes",
      "Heart",
      "Smile",
      "Globe",
      "Tree",
      "Lightning",
      "Moon",
      "Star",
      "Rebellion",
      "Empire",
    ]);
  } else if(Random == 1) {
    for(var j = 0; j < 20; j++) {
      showElement("icon" + j);
      setImageURL("icon" + j, RandomShape());
      setProperty("icon" + j, "icon-color", RandomColor());
      setProperty("icon" + j, "width", RandomSize);
      setProperty("icon" + j, "height", RandomSize);
      setPosition("icon" + j, randomNumber(0, 300), randomNumber(0, 400));
    }
    setProperty("SizeSlider", "value", RandomSize);
    setProperty("IconSizeDropdown", "options", [RandomSize]);
    setProperty("IconSizeDropdown", "options", [RandomSize, "Random Size", "Random Sizes"]);
    
    setProperty("ColorDropdown", "options", ["Random"]);
    setProperty("ColorDropdown", "options", [
      "Random",
      "Random Color",
      "Random Colors",
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Orange",
      "Purple",
      "Pink",
    ]);
    
    setProperty("ShapeDropdown", "options", ["Random"]);
    setProperty("ShapeDropdown", "options", [
      "Random",
      "Random Shape",
      "Random Shapes",
      "Heart",
      "Smile",
      "Globe",
      "Tree",
      "Lightning",
      "Moon",
      "Star",
      "Rebellion",
      "Empire",
    ]);
  } else if(Random == 2) {
    for(var h = 0; h < 20; h++) {
      showElement("icon" + h);
      setImageURL("icon" + h, RandomShape());
      setProperty("icon" + h, "icon-color", Color);
      setProperty("icon" + h, "width", RandomSize);
      setProperty("icon" + h, "height", RandomSize);
      setPosition("icon" + h, randomNumber(0, 300), randomNumber(0, 400));
    }
    setProperty("SizeSlider", "value", RandomSize);
    setProperty("IconSizeDropdown", "options", [RandomSize]);
    setProperty("IconSizeDropdown", "options", [RandomSize, "Random Size", "Random Sizes"]);
    
    ColorDropdown();
    
    setProperty("ColorDropdown", "options", [Color]);
    setProperty("ColorDropdown", "options", [
      Color,
      "Random Color",
      "Random Colors",
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Orange",
      "Purple",
      "Pink",
    ]);
    
    setProperty("ShapeDropdown", "options", ["Random"]);
    setProperty("ShapeDropdown", "options", [
      "Random",
      "Random Shape",
      "Random Shapes",
      "Heart",
      "Smile",
      "Globe",
      "Tree",
      "Lightning",
      "Moon",
      "Star",
      "Rebellion",
      "Empire",
    ]);
  } else if(Random == 3) {
    for(var g = 0; g < 20; g++) {
      showElement("icon" + g);
      setImageURL("icon" + g, Shape);
      setProperty("icon" + g, "icon-color", RandomColor());
      setProperty("icon" + g, "width", RandomSize);
      setProperty("icon" + g, "height", RandomSize);
      setPosition("icon" + g, randomNumber(0, 300), randomNumber(0, 400));
    }
    setProperty("SizeSlider", "value", RandomSize);
    setProperty("IconSizeDropdown", "options", [RandomSize]);
    setProperty("IconSizeDropdown", "options", [RandomSize, "Random Size", "Random Sizes"]);
    
    setProperty("ColorDropdown", "options", ["Random"]);
    setProperty("ColorDropdown", "options", [
      "Random",
      "Random Color",
      "Random Colors",
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Orange",
      "Purple",
      "Pink",
    ]);
    
    ShapeDropdown();
    
    setProperty("ShapeDropdown", "options", [Shape]);
    setProperty("ShapeDropdown", "options", [
      Shape,
      "Random Shape",
      "Random Shapes",
      "Heart",
      "Smile",
      "Globe",
      "Tree",
      "Lightning",
      "Moon",
      "Star",
      "Rebellion",
      "Empire",
    ]);
  } else if(Random == 4) {
    for(var k = 0; k < 20; k++) {
      showElement("icon" + k);
      setImageURL("icon" + k, RandomShape());
      setProperty("icon" + k, "icon-color", Color);
      setProperty("icon" + k, "width", randomNumber(20,100));
      setProperty("icon" + k, "height", randomNumber(20,100));
      setPosition("icon" + k, randomNumber(0, 300), randomNumber(0, 400));
    }
    setProperty("IconSizeDropdown", "options", ["Random"]);
    setProperty("IconSizeDropdown", "options", ["Random", "Random Size", "Random Sizes"]);
    setProperty("SizeSlider", "value", 20);
    
    ColorDropdown();
    
    setProperty("ColorDropdown", "options", [Color]);
    setProperty("ColorDropdown", "options", [
      Color,
      "Random Color",
      "Random Colors",
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Orange",
      "Purple",
      "Pink",
    ]);
    
    setProperty("ShapeDropdown", "options", ["Random"]);
    setProperty("ShapeDropdown", "options", [
      "Random",
      "Random Shape",
      "Random Shapes",
      "Heart",
      "Smile",
      "Globe",
      "Tree",
      "Lightning",
      "Moon",
      "Star",
      "Rebellion",
      "Empire",
    ]);
  } else if(Random == 5) {
    for(var m = 0; m < 20; m++) {
      showElement("icon" + m);
      setImageURL("icon" + m, Shape);
      setProperty("icon" + m, "icon-color", RandomColor());
      setProperty("icon" + m, "width", randomNumber(20,100));
      setProperty("icon" + m, "height", randomNumber(20,100));
      setPosition("icon" + m, randomNumber(0, 300), randomNumber(0, 400));
    }
    setProperty("IconSizeDropdown", "options", ["Random"]);
    setProperty("IconSizeDropdown", "options", ["Random", "Random Size", "Random Sizes"]);
    setProperty("SizeSlider", "value", 20);
    
    setProperty("ColorDropdown", "options", ["Random"]);
    setProperty("ColorDropdown", "options", [
      "Random",
      "Random Color",
      "Random Colors",
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Orange",
      "Purple",
      "Pink",
    ]);
    
    ShapeDropdown();
    
    setProperty("ShapeDropdown", "options", [Shape]);
    setProperty("ShapeDropdown", "options", [
      Shape,
      "Random Shape",
      "Random Shapes",
      "Heart",
      "Smile",
      "Globe",
      "Tree",
      "Lightning",
      "Moon",
      "Star",
      "Rebellion",
      "Empire",
    ]);
  } else if(Random == 6) {
    for(var z = 0; z < 20; z++) {
      showElement("icon" + z);
      setImageURL("icon" + z, Shape);
      setProperty("icon" + z, "icon-color", Color);
      setProperty("icon" + z, "width", RandomSize);
      setProperty("icon" + z, "height", RandomSize);
      setPosition("icon" + z, randomNumber(0, 300), randomNumber(0, 400));
    }
    setProperty("SizeSlider", "value", RandomSize);
    setProperty("IconSizeDropdown", "options", [RandomSize]);
    setProperty("IconSizeDropdown", "options", [RandomSize, "Random Size", "Random Sizes"]);
    
    ColorDropdown();
    
    setProperty("ColorDropdown", "options", [Color]);
    setProperty("ColorDropdown", "options", [
      Color,
      "Random Color",
      "Random Colors",
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Orange",
      "Purple",
      "Pink",
    ]);
    
    ShapeDropdown();
    
    setProperty("ShapeDropdown", "options", [Shape]);
    setProperty("ShapeDropdown", "options", [
      Shape,
      "Random Shape",
      "Random Shapes",
      "Heart",
      "Smile",
      "Globe",
      "Tree",
      "Lightning",
      "Moon",
      "Star",
      "Rebellion",
      "Empire",
    ]);
  } else if(Random == 7) {
    for(var x = 0; x < 20; x++) {
      showElement("icon" + x);
      setImageURL("icon" + x, Shape);
      setProperty("icon" + x, "icon-color", Color);
      setProperty("icon" + x, "width", randomNumber(20,100));
      setProperty("icon" + x, "height", randomNumber(20,100));
      setPosition("icon" + x, randomNumber(0, 300), randomNumber(0, 400));
    }
    setProperty("IconSizeDropdown", "options", ["Random"]);
    setProperty("IconSizeDropdown", "options", ["Random", "Random Size", "Random Sizes"]);
    setProperty("SizeSlider", "value", 20);
    
    ColorDropdown();
    
    setProperty("ColorDropdown", "options", [Color]);
    setProperty("ColorDropdown", "options", [
      Color,
      "Random Color",
      "Random Colors",
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Orange",
      "Purple",
      "Pink",
    ]);
    
    ShapeDropdown();
    
    setProperty("ShapeDropdown", "options", [Shape]);
    setProperty("ShapeDropdown", "options", [
      Shape,
      "Random Shape",
      "Random Shapes",
      "Heart",
      "Smile",
      "Globe",
      "Tree",
      "Lightning",
      "Moon",
      "Star",
      "Rebellion",
      "Empire",
    ]);
  }
  
  BackgroundDropdown();
  
  setProperty("BackgroundDropdown", "options", [BackgroundColor]);
  setProperty("BackgroundDropdown", "options", [
    BackgroundColor,
    "Random",
    "Black",
    "White",
    "Dark Red",
    "Light Red",
    "Dark Blue",
    "Light Blue",
    "Dark Green",
    "Light Green",
    "Yellow",
    "Purple",
    "Star Wars",
    "Darth Vader",
    "Falcon",
    "Insignias",
  ]);
});

onEvent("SizeSlider", "input", function() {
  playSound(ButtonClick1);
  for(var j = 0; j < 20; j++) {
    setProperty("icon" + j, "width", getProperty("SizeSlider", "value"));
    setProperty("icon" + j, "height", getProperty("SizeSlider", "value"));
  }
  setProperty("IconSizeDropdown", "options", [getProperty("SizeSlider", "value")]);
  setProperty("IconSizeDropdown", "options", [getProperty("SizeSlider", "value"), "Random Size", "Random Sizes"]);
});

onEvent("IconSizeDropdown", "input", function() {
  playSound(ButtonClick1);
  RandomSize = randomNumber(20,100);
  if(getText("IconSizeDropdown") == "Random Size") {
    for(var i = 0; i < 20; i++) {
      setProperty("icon" + i, "width", RandomSize);
      setProperty("icon" + i, "height", RandomSize);
    }
    setProperty("SizeSlider", "value", RandomSize);
    setProperty("IconSizeDropdown", "options", [RandomSize]);
    setProperty("IconSizeDropdown", "options", [RandomSize, "Random Size", "Random Sizes"]);
  } else if(getText("IconSizeDropdown") == "Random Sizes") {
    for(var j = 0; j < 20; j++) {
      setProperty("icon" + j, "width", randomNumber(20,100));
      setProperty("icon" + j, "height", randomNumber(20,100));
    }
    setProperty("IconSizeDropdown", "options", ["Random"]);
    setProperty("IconSizeDropdown", "options", ["Random", "Random Size", "Random Sizes"]);
    setProperty("SizeSlider", "value", 20);
  }
});

onEvent("BackgroundDropdown", "input", function() {
  playSound(ButtonClick1);
  BackgroundColor = RandomBackgroundColor();
  
  if(getText("BackgroundDropdown") == "Random") {
    BackgroundDropdown();
    
    setProperty("BackgroundDropdown", "options", [BackgroundColor]);
    setProperty("BackgroundDropdown", "options", [
      BackgroundColor,
      "Random",
      "Black",
      "White",
      "Dark Red",
      "Light Red",
      "Dark Blue",
      "Light Blue",
      "Dark Green",
      "Light Green",
      "Yellow",
      "Purple",
      "Star Wars",
      "Darth Vader",
      "Falcon",
      "Insignias",
    ]);
  }
  
  if(getText("BackgroundDropdown") == "Background") {
    setProperty("HomeScreen", "background-color", "black");
  } else if(getText("BackgroundDropdown") == "Black") {
    setProperty("HomeScreen", "image", "");
    setProperty("HomeScreen", "background-color", "black");
  } else if(getText("BackgroundDropdown") == "White") {
    setProperty("HomeScreen", "image", "");
    setProperty("HomeScreen", "background-color", "white");
  } else if(getText("BackgroundDropdown") == "Dark Red") {
    setProperty("HomeScreen", "image", "");
    setProperty("HomeScreen", "background-color", "#8b0000");
  } else if(getText("BackgroundDropdown") == "Light Red") {
    setProperty("HomeScreen", "image", "");
    setProperty("HomeScreen", "background-color", "#ffcccb");
  } else if(getText("BackgroundDropdown") == "Dark Blue") {
    setProperty("HomeScreen", "image", "");
    setProperty("HomeScreen", "background-color", "#00008b");
  } else if(getText("BackgroundDropdown") == "Light Blue") {
    setProperty("HomeScreen", "image", "");
    setProperty("HomeScreen", "background-color", "#add8e6");
  } else if(getText("BackgroundDropdown") == "Dark Green") {
    setProperty("HomeScreen", "image", "");
    setProperty("HomeScreen", "background-color", "#013220");
  } else if(getText("BackgroundDropdown") == "Light Green") {
    setProperty("HomeScreen", "image", "");
    setProperty("HomeScreen", "background-color", "#90EE90");
  } else if(getText("BackgroundDropdown") == "Yellow") {
    setProperty("HomeScreen", "image", "");
    setProperty("HomeScreen", "background-color", "#ffffe0");
  } else if(getText("BackgroundDropdown") == "Purple") {
    setProperty("HomeScreen", "image", "");
    setProperty("HomeScreen", "background-color", "#6a0dad");
  } else if(getText("BackgroundDropdown") == "Star Wars") {
    setProperty("HomeScreen", "image", "assets/Star-Wars.jpg");
  } else if(getText("BackgroundDropdown") == "Darth Vader") {
    setProperty("HomeScreen", "image", "assets/Darth-Vader.jpg");
  } else if(getText("BackgroundDropdown") == "Falcon") {
    setProperty("HomeScreen", "image", "assets/Millenium-Falcon.png");
  } else if(getText("BackgroundDropdown") == "Insignias") {
    setProperty("HomeScreen", "image", "assets/Insignias.jpg");
  }
});

onEvent("ColorDropdown", "input", function() {
  playSound(ButtonClick1);
  Color = RandomColor();
  if(getText("ColorDropdown") == "Random Color") {
    for(var l = 0; l < 20; l++) {
      setProperty("icon" + l, "icon-color", Color);
    }
    
    ColorDropdown();
    
    setProperty("ColorDropdown", "options", [Color]);
    setProperty("ColorDropdown", "options", [
      Color,
      "Random Color",
      "Random Colors",
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Orange",
      "Purple",
      "Pink",
    ]);
  } else if(getText("ColorDropdown") == "Random Colors") {
    for(var m = 0; m < 20; m++) {
      setProperty("icon" + m, "icon-color", RandomColor());
    }
    setProperty("ColorDropdown", "options", ["Random"]);
    setProperty("ColorDropdown", "options", [
      "Random",
      "Random Color",
      "Random Colors",
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Orange",
      "Purple",
      "Pink",
    ]);
  }
  var SetColor;
  getText("ColorDropdown") == "Black" ? SetColor = "black" : {};
  getText("ColorDropdown") == "White" ? SetColor = "white" : {};
  getText("ColorDropdown") == "Blue" ? SetColor = "lightblue" : {};
  getText("ColorDropdown") == "Red" ? SetColor = "red" : {};
  getText("ColorDropdown") == "Green" ? SetColor = "lightgreen" : {};
  getText("ColorDropdown") == "Yellow" ? SetColor = "yellow" : {};
  getText("ColorDropdown") == "Orange" ? SetColor = "orange" : {};
  getText("ColorDropdown") == "Purple" ? SetColor = "#CBC3E3" : {};
  getText("ColorDropdown") == "Pink" ? SetColor = "pink" : {};
  for(var b = 0; b < 20; b++) {
    setProperty("icon" + b, "icon-color", SetColor);
  }
});

onEvent("ShapeDropdown", "input", function() {
  playSound(ButtonClick1);
  Shape = RandomShape();
  if(getText("ShapeDropdown") == "Random Shape") {
    for(var l = 0; l < 20; l++) {
      showElement("icon" + l);
      setImageURL("icon" + l, Shape);
    }
    
    ShapeDropdown();
    
    setProperty("ShapeDropdown", "options", [Shape]);
    setProperty("ShapeDropdown", "options", [
      Shape,
      "Random Shape",
      "Random Shapes",
      "Heart",
      "Smile",
      "Globe",
      "Tree",
      "Lightning",
      "Moon",
      "Star",
      "Rebellion",
      "Empire",
    ]);
  } else if(getText("ShapeDropdown") == "Random Shapes") {
    for(var m = 0; m < 20; m++) {
      setImageURL("icon" + m, RandomShape());
    }
    setProperty("ShapeDropdown", "options", ["Random"]);
    setProperty("ShapeDropdown", "options", [
      "Random",
      "Random Shape",
      "Random Shapes",
      "Heart",
      "Smile",
      "Globe",
      "Tree",
      "Lightning",
      "Moon",
      "Star",
      "Rebellion",
      "Empire",
    ]);
  }
  
  var SetImage;
  getText("ShapeDropdown") == "Heart" ? SetImage = "icon://fa-heart" : {};
  getText("ShapeDropdown") == "Smile" ? SetImage = "icon://fa-smile-o" : {};
  getText("ShapeDropdown") == "Globe" ? SetImage = "icon://fa-globe" : {};
  getText("ShapeDropdown") == "Tree" ? SetImage = "icon://fa-tree" : {};
  getText("ShapeDropdown") == "Lightning" ? SetImage = "icon://fa-bolt" : {};
  getText("ShapeDropdown") == "Moon" ? SetImage = "icon://fa-moon-o" : {};
  getText("ShapeDropdown") == "Star" ? SetImage = "icon://fa-star" : {};
  getText("ShapeDropdown") == "Rebellion" ? SetImage = "icon://fa-rebel" : {};
  getText("ShapeDropdown") == "Empire" ? SetImage = "icon://fa-empire" : {};
  for(var b = 0; b < 20; b++) {
    showElement("icon" + b);
    setImageURL("icon" + b, SetImage);
  }
});