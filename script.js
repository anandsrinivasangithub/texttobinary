window.onload = () => {
  document.getElementById("copy-btn").setAttribute("disabled", "disabled");
};

function convertToText() {
  const binaryValue = document.getElementById("textarea").value;

  function textConverter() {
    var input = binaryValue
    var bob = "";
    for (var i = 0; i < input.length; i++) {
        bob += input[i].charCodeAt(0).toString(2) + " ";
    }
    return bob;
  }
  
  let newString = textConverter(binaryValue);

  document.getElementById("textareayuh").innerHTML = newString;
  document.getElementById("copy-btn").removeAttribute("disabled");
  document
    .getElementById("notacopybtnbutimoitsjustasgoodrightsfornoncopybuttons")
    .removeAttribute("disabled");
}

function copyBinary() {
  var copyBinary = document.getElementById("textareayuh");
  copyBinary.select();
  copyBinary.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyBinary.value);
  document.getElementById("copy-btn").innerHTML = "Copied!";
  document.getElementById("copy-btn").className = "btn btn-success";
  setTimeout(function () {
    document.getElementById("copy-btn").innerHTML = "Copy Binary Numbers";
    document.getElementById("copy-btn").className = "btn btn-secondary";
  }, 5000);
}
