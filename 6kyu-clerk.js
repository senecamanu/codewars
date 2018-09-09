function tickets(line) {
    // ...
    var cashier = 0;
    for (let i = 0; i < line.length; i++) {
        if (line[i] === 25) {
            cashier += line[i];
        }

        else {
            cashier = cashier - line[i];
        }
    }

    if (cashier <= 0) {
        return "NO";
    }

    else {
        return "YES";
    }
}