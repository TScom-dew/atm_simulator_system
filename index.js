// Button–Message Mapping
const hoverMap = {
  Withdrawal: "Withdrawalmsg",
  balence: "balencemsg",
  changepin: "changepinmsg",
  casedeposite: "casedepositemsg",
  ministatement: "ministatementmsg",
  exit: "exitmsg"
};

document.addEventListener("DOMContentLoaded", () => {
  // DEMO ACCOUNT DATABASE
  const accounts = {};

  // DOM helpers
  const $ = id => document.getElementById(id);

  // Transaction History
  const transactions = {};

  // ELEMENTS (may return null if HTML lacks them — we'll guard)
  const accInput = $("accNumber");
  const accSubmit = $("accSubmit");
  const accLabel = $("accLabel");
  const pinInput = $("pinInput");
  const pinSubmit = $("pinSubmit");
  const pinMsg = $("pinMsg");
  const welcomeName = $("welcomeName");

  const withdrawAmt = $("withdrawAmt");
  const availBalW = $("availBalW");
  const withdrawSubmit = $("withdrawSubmit");
  const withdrawMsg = $("withdrawMsg");

  const depositAmt = $("depositAmt");
  const depositSubmit = $("depositSubmit");
  const depositMsg = $("depositMsg");

  const balAcc = $("balAcc");
  const balAmount = $("balAmount");

  let currentAccount = null;
  let accountsLoaded = false;

  // Initially disable side buttons (if present)
  function setSideButtonsEnabled(enabled) {
    for (let btnId in hoverMap) {
      const btn = $(btnId);
      if (btn) {
        btn.disabled = !enabled;
        btn.style.cursor = enabled ? "pointer" : "not-allowed";
      }
    }
  }
  setSideButtonsEnabled(false);

  // Load accounts.json
  fetch("accounts.json")
    .then(result => {
      if (!result.ok) throw new Error("Failed to fetch accounts.json: " + result.status);
      return result.json();
    })
    .then(data => {
      Object.assign(accounts, data);
      accountsLoaded = true;
      console.log("Loaded Accounts:", accounts);
    })
    .catch(error => {
      console.error("Error loading JSON:", error);
      // keep accountsLoaded false; user will get message if they try to login
    });

  // SCREEN HANDLER
  function show(screenId) {
    document.querySelectorAll(".screen-inner").forEach(s => s.classList.add("hidden"));
    const el = $(screenId);
    if (el) el.classList.remove("hidden");
  }

  // Hover messages - only if elements exist
  for (let btnId in hoverMap) {
    const button = $(btnId);
    const msg = $(hoverMap[btnId]);
    if (!button || !msg) continue;

    // show/hide on mouseover/out
    button.addEventListener("mouseover", () => msg.classList.remove("hide"));
    button.addEventListener("mouseout", () => msg.classList.add("hide"));

    // also show on focus/blur for keyboard accessibility
    button.addEventListener("focus", () => msg.classList.remove("hide"));
    button.addEventListener("blur", () => msg.classList.add("hide"));
  }

  // ACCOUNT SUBMIT
  if (accSubmit) {
    accSubmit.onclick = () => {
      if (!accountsLoaded) {
        alert("Accounts are still loading. Please wait a moment and try again.");
        return;
      }
      const acc = accInput ? accInput.value.trim() : "";
      if (acc === "") {
        alert("Enter account number!");
        return;
      }
      if (!accounts[acc]) {
        alert("Invalid account number!");
        return;
      }
      currentAccount = acc;
      if (accLabel) accLabel.textContent = acc;

      // Init empty history if not exists
      if (!transactions[currentAccount]) {
       transactions[currentAccount] = [];
      }

      // show process then pin
      show("process-icon");
      setTimeout(() => show("screen-pin"), 800);
    };
  }

  // PIN SUBMIT
  if (pinSubmit) {
    pinSubmit.onclick = () => {
      if (!currentAccount) {
        if (pinMsg) pinMsg.textContent = "Please insert card (enter account) first.";
        return;
      }
      const pin = pinInput ? pinInput.value.trim() : "";
      if (!accounts[currentAccount]) {
        if (pinMsg) pinMsg.textContent = "Account not found.";
        return;
      }

      if (pin === accounts[currentAccount].pin) {
        if (pinMsg) pinMsg.textContent = "";
        if (welcomeName) welcomeName.textContent = "Welcome,  " + (accounts[currentAccount].name || currentAccount);
        show("screen-menu");

        // ENABLE all ACTION BUTTONS
        setSideButtonsEnabled(true);
      } else {
        if (pinMsg) pinMsg.textContent = "Incorrect PIN!";
        setSideButtonsEnabled(false);
      }
    };
  }

  // LOGOUT / EJECT
  const ejectBtn = $("ejectBtn");
  if (ejectBtn) {
    ejectBtn.onclick = () => {
      currentAccount = null;
      if (accInput) accInput.value = "";
      if (pinInput) pinInput.value = "";
      setSideButtonsEnabled(false);
      show("screen-acc");
    };
  }

  const btnLogout = $("btnLogout");
  if (btnLogout) {
    btnLogout.onclick = () => {
      currentAccount = null;
      if (accInput) accInput.value = "";
      if (pinInput) pinInput.value = "";
      setSideButtonsEnabled(false);
      show("screen-acc");
    };
  }

  // WITHDRAW
  const WithdrawalBtn = $("Withdrawal");
  if (WithdrawalBtn) {
    WithdrawalBtn.onclick = () => {
      if (!currentAccount) {
        alert("Please login first.");
        return;
      }

      if (availBalW) availBalW.textContent = accounts[currentAccount].balance;
      if (withdrawMsg) withdrawMsg.textContent = "";
      if (withdrawAmt) withdrawAmt.value = "";
      setTimeout(() => show("screen-withdraw"), 100);
    };
 
  }

  if (withdrawSubmit) {
    withdrawSubmit.onclick = () => {
      if (!currentAccount) {
        if (withdrawMsg) withdrawMsg.textContent = "Please login first.";
        return;
      }
      const amt = Number(withdrawAmt ? withdrawAmt.value : 0);

      if (isNaN(amt) || amt < 100 ) {
        if (withdrawMsg) withdrawMsg.textContent = "Amount must be minimum ₹100.";
        return;
      }

      if (amt > accounts[currentAccount].balance) {
        if (withdrawMsg) withdrawMsg.textContent = "Insufficient balance!";
        return;
      }

      accounts[currentAccount].balance -= amt;

      transactions[currentAccount].push({
          type: "Withdraw",
          amount: amt,
          time: new Date().toLocaleString()
        });


      const cashSlot = $("cashSlot");
      if (cashSlot) cashSlot.textContent = "Cash: ₹" + amt;

      const successText = $("successText");
      if (successText) successText.textContent = "Withdrawn ₹" + amt;
      setTimeout(() => show("screen-success"), 100);
    };
  }

  const withdrawBack = $("withdrawBack");
  if (withdrawBack) withdrawBack.onclick = () => show("screen-menu");

  // DEPOSIT
  const casedepositeBtn = $("casedeposite");
  if (casedepositeBtn) {
    casedepositeBtn.onclick = () => {
      if (!currentAccount) {
        alert("Please login first.");
        return;
      }


      if (depositAmt) depositAmt.value = "";
      if (depositMsg) depositMsg.textContent = "";
      setTimeout(() => show("screen-deposit"), 100);
    };
  }

  if (depositSubmit) {
    depositSubmit.onclick = () => {
      if (!currentAccount) {
        if (depositMsg) depositMsg.textContent = "Please login first.";
        return;
      }
      const amt = Number(depositAmt ? depositAmt.value : 0);
      if (isNaN(amt) || amt <= 0) {
        if (depositMsg) depositMsg.textContent = "Enter a valid amount";
        return;
      }
      accounts[currentAccount].balance += amt;

      transactions[currentAccount].push({
        type: "Withdraw",
        amount: amt,
        time: new Date().toLocaleString()
      });
      

      const successText = $("successText");
      if (successText) successText.textContent = "Deposited ₹" + amt;
      setTimeout(() => show("screen-success"), 100);
    };
  }

  const depositBack = $("depositBack");
  if (depositBack) depositBack.onclick = () => show("screen-menu");

  // BALANCE
  const balenceBtn = $("balence");
  if (balenceBtn) {
    balenceBtn.onclick = () => {
      if (!currentAccount) {
        alert("Please login first.");
        return;
      }
      if (balAcc) balAcc.textContent = currentAccount;
      if (balAmount) balAmount.textContent = accounts[currentAccount].balance;
      setTimeout(() => show("screen-balance"), 100);
    };
  }

  const balBack = $("balBack");
  if (balBack) balBack.onclick = () => show("screen-menu");

  // CHANGE PIN
  const changepinBtn = $("changepin");
  if (changepinBtn) {
    changepinBtn.onclick = () => {
      if (!currentAccount) {
        alert("Please login first.");
        return;
      }
      const changePinMsg = $("changePinMsg");
      const newPin = $("newPin");
      const confirmPin = $("confirmPin");
      if (changePinMsg) changePinMsg.textContent = "";
      if (newPin) newPin.value = "";
      if (confirmPin) confirmPin.value = "";
      setTimeout(() => show("screen-change-pin"), 100);
    };
  }

  const changePinSubmit = $("changePinSubmit");
  if (changePinSubmit) {
    changePinSubmit.onclick = () => {
      if (!currentAccount) {
        const changePinMsg = $("changePinMsg");
        if (changePinMsg) changePinMsg.textContent = "Please login first.";
        return;
      }
      const newPinEl = $("newPin");
      const confEl = $("confirmPin");
      const changePinMsg = $("changePinMsg");
      const newPinVal = newPinEl ? newPinEl.value : "";
      const confVal = confEl ? confEl.value : "";

      if (newPinVal.length !== 4) {
        if (changePinMsg) changePinMsg.textContent = "PIN must be 4 digits";
        return;
      }
      if (newPinVal !== confVal) {
        if (changePinMsg) changePinMsg.textContent = "PIN mismatch!";
        return;
      }

      accounts[currentAccount].pin = newPinVal;
      const successText = $("successText");
      if (successText) successText.textContent = "PIN changed successfully!";
      setTimeout(() => show("screen-success"), 100);
    };
  }

  const changePinBack = $("changePinBack");
  if (changePinBack) changePinBack.onclick = () => show("screen-menu");

  // ministatement or  history
  document.getElementById("ministatement").onclick = () => {
    const list = document.getElementById("miniList");
    list.innerHTML = "";
  
    const last = transactions[currentAccount].slice(-6).reverse();
  
    if (last.length === 0) {
      list.innerHTML = "<p>No transactions yet.</p>";
    } else {
      last.forEach(t => {
        let item = document.createElement("p");
        item.textContent = `${t.type}: ₹${t.amount} — ${t.time}`;
        list.appendChild(item);
      });
    }
  
    setTimeout(() => show("screen-mini"), 100);
  };
  
  document.getElementById("miniBack").onclick = () => show("screen-menu");


  // EXIT
  const exitBtn = $("exit");
  if (exitBtn) {
    exitBtn.onclick = () => {
      currentAccount = null;
      if (accInput) accInput.value = "";
      if (pinInput) pinInput.value = "";
      setSideButtonsEnabled(false);
      show("screen-acc");
    };
  }



  // SUCCESS OK
  const successOk = $("successOk");
  if (successOk) {
    successOk.onclick = () => {
      const cashSlot = $("cashSlot");
      if (cashSlot) cashSlot.textContent = "No cash";
      show("screen-menu");
    };
  }

  // ERROR OK
  const errOk = $("errOk");
  if (errOk) errOk.onclick = () => show("screen-menu");

  // HELP
  const helpBtn = $("helpBtn");
  if (helpBtn) {
    helpBtn.onclick = () => {
      alert("Demo account: 12345678 / PIN: 1234");
    };
  }


}); // DOMContentLoaded end


