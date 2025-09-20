const display = document.getElementById("display");

function clickvalue(value)
{  
  if (display.textContent === "0") {
    display.textContent = value;  
  } else {
    display.textContent += value;  
  }
}

function cleardisplay()
 {
  display.textContent = "0"; 
}

function deletelast()
{
  display.textContent = display.textContent.slice(0, -1);
  if (display.textContent === "") 
  {
    display.textContent = "0";
  }
}

function calculate() {
  try 
  {
    display.textContent = eval(display.textContent);
  } 
  catch 
  {
    display.textContent = "ERROR";
  }
}


function percentage() {
  let value = parseFloat(display.textContent);
  if (!isNaN(value)) 
  {
    display.textContent = value / 100;
  }
}

function square() 
{
  let value = parseFloat(display.textContent);
  if (!isNaN(value)) 
  {
    display.textContent = value * value;
  }
}

function squareroot() 
{
  let value = parseFloat(display.textContent);
  if (!isNaN(value)) 
    {
    if (value < 0) 
    {
      display.textContent = "ERROR"; 
    } 
    else
    {
      display.textContent =Math.sqrt(value);
    }
  }
}

function inverse() 
{
  let value = parseFloat(display.textContent);
  if (!isNaN(value)) 
    {
    if (value === 0)
    {
      display.textContent = "ERROR"; 
    }
    else 
    {
      display.textContent = 1 / value;
    }
  }
}

function minus()
 {
  let value = parseFloat(display.textContent);
  if (!isNaN(value)) 
  {
    display.textContent = -value;
  }
}