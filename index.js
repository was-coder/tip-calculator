document.getElementById('container').onchange = function () {
    var getTotal = Number(document.getElementById('total').value);
    var getSplit = Number(document.getElementById('split').value);
    var getTip = Number(document.getElementById('tip').value);
    var tipValue = getTotal + getTip - 100;
    var billCalc = (getTotal + tipValue) / getSplit;
    var tipCalc = tipValue / getSplit;

    document.getElementById('split__span').innerHTML = getSplit;
    document.getElementById('tip__span').innerHTML = getTip + "%";
    document.getElementById('get-bill').innerHTML = billCalc.toFixed(0) + " Naira";
    document.getElementById('get-tip').innerHTML = tipCalc.toFixed(0) + " Naira";
}