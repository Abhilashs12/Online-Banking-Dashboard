// Fetch accounts
if (location.pathname.includes("index")) {
    fetch("http://localhost:5002/api/accounts")
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById("accounts");
            container.innerHTML = data.map(acc => `
                <p>
                    ${acc.name} — ₹${acc.balance}
                    <a href="account.html?id=${acc.id}">View</a>
                </p>
            `).join("");
        });
}

// Fetch account + transactions
if (location.pathname.includes("account")) {
    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    fetch(`http://localhost:5002/api/accounts`)
        .then(res => res.json())
        .then(data => {
            const acc = data.find(a => a.id == id);
            document.getElementById("details").innerHTML = `
                <p><strong>${acc.name}</strong><br>
                Balance: ₹${acc.balance}</p>
            `;
        });

    fetch(`http://localhost:5002/api/transactions/${id}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById("transactions").innerHTML = data.map(tx => `
                <p>${tx.date} — ${tx.type} — ₹${tx.amount}</p>
            `).join("");
        });
}
