async function convertCurrency() {
  const amount = document.getElementById("amount").value;
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  if (!amount || isNaN(amount)) {
    document.getElementById("result").innerText = "Please enter a valid amount.";
    return;
  }

  if (from === to) {
    document.getElementById("result").innerText = `${amount} ${from} = ${amount} ${to}`;
    return;
  }

  try {
    const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`);
    const data = await res.json();
    const rate = data.rates[to];
    document.getElementById("result").innerText = `${amount} ${from} = ${rate} ${to}`;
  } catch (error) {
    document.getElementById("result").innerText = "Error fetching conversion rate.";
    console.error(error);
  }
}

