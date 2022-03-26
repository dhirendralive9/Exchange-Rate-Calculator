const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');


//fetch exchange rates and update the dom


calculate = ()=>{
   const currency1 = currencyEl_one.value;
   const currency2 = currencyEl_two.value;
   fetch(`https://v6.exchangerate-api.com/v6/28401b7f6737180bf8c3892f/latest/${currency1}`)
   .then(res => res.json())
   .then(data => {
            console.log(data)
        const rate = data.conversion_rates[currency2];

        console.log(rate);
        rateEl.innerText = `1 ${currency1} = ${rate} ${currency2}`;
        amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
   });
}


// Event listeners 

currencyEl_one.addEventListener('change',calculate);
amountEl_one.addEventListener('input',calculate);
currencyEl_two.addEventListener('change',calculate);
amountEl_two.addEventListener('input',calculate);
swap.addEventListener('click',()=>{
   const temp = currencyEl_one.value;
   currencyEl_one.value = currencyEl_two.value;
   currencyEl_two.value = temp;
   calculate();
});

calculate();