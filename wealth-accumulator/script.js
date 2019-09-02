function calculate() {
    let monthlyAmount = Number(document.getElementById("monthly-saving").value);
    let roi = Number(document.getElementById("interest").value);
    let years = Math.floor(Number(document.getElementById("time").value));
    let incrementPerAnnum = Number(document.getElementById("annual-increment").value);

    let total = 0;
    let permonth_roi = roi/1200;

    for(let i=0; i<years; i++) {
        for(j=0; j<12; j++) {
            total = total * (1 + permonth_roi) + monthlyAmount;
        }
        monthlyAmount+= incrementPerAnnum;
    }

    document.getElementById("final-amount").innerHTML = (() => {
        let [wholeNum, floatNum] = String(total.toFixed(2)).split(".");
        let wholeNumString = "";
        for(let i=1; i<=wholeNum.length; i++) {
            wholeNumString = wholeNum[wholeNum.length - i] + wholeNumString;
            if(i-3 >=0 && (i-3) % 2 ==0 && i+1 <= wholeNum.length) {
                wholeNumString = "," + wholeNumString;
            }
        }
        return wholeNumString+"."+floatNum;
    })(total);
    return;
}

document.addEventListener("DOMContentLoaded", () => {
    calculate();
});