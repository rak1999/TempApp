function calculateTemp() {
    const input = document.getElementById("tempNumber").value;
  
    const selectedTemp = document.getElementById("select");
  
    const valueTemp = selectedTemp.options[selectedTemp.selectedIndex].value;
  
    const celToFahr = (cel) => {
      let fahrenheit = Math.round((cel * 9) / 5 + 32);
      return fahrenheit;
    };
  
    const fahrToCel = (fahr) => {
      let celcius = Math.round(((fahr - 32) * 5) / 9);
      return celcius;
    };
  
    let result;
    if (valueTemp === "°Celcius") {
      result = celToFahr(input);
      document.getElementById("result").innerHTML = `=  ${result}°Fahrenheit`;
    } else {
      result = fahrToCel(input);
      document.getElementById("result").innerHTML = `=${result}°Celcius`;
    }
  }
  