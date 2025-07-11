let bt = document.querySelectorAll(".btn")
const res = document.querySelector(".resu")
let exp = "0"
console.dir(res)
console.dir(bt)


bt.forEach((btn) => {
  btn.addEventListener("click", () => {
    let val = btn.innerText

    if (val === "AC") {
      exp = "0";
    } else if (btn.innerText === 'c') {
      exp = exp.slice(0, -1);
      if(exp ===""){
        exp = "0"
      }
    } else if (btn.innerText === "=") {
      exp = exp.replaceAll('×', '*').replaceAll('÷', '/')
      try {
        let result = eval(exp)
        if (!Number.isInteger(result)) {
          result = parseFloat(result.toFixed(8));
        }

        if (result.toString().length > 10) {
          result = result.toExponential(3);
        }

        exp = result
      } catch (e) {
        exp = `Error`
      }
    } else {
      if (exp === "0" || exp ==="00") {
        exp = val
      } else {
        exp += val
      }

    }



    res.innerText = exp
  })
})