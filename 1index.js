
// only admin knows
const ADMIN_PIN = "ashlok22082006";

// “Admin PIN is kept in JS for simulation. In real systems, it is server-side.”

document.addEventListener("DOMContentLoaded", () => {

  // DOM helpers
  const $ = id => document.getElementById(id);
// const $= (selector)=>document.querySelector(selector);
  // const $$= (selector)=> document.querySelectorAll(selector);

  // Language Dictionary(js)
  // ================= LANGUAGE DICTIONARY =================
  const LANG = {
    en: {
        // header
      headerTitle: "ATM Simulator System",
      headerDesc: "ATM Simulator System is a mini project developed using HTML, CSS and JavaScript. It simulates real ATM operations in a simple and interactive way.",
      // nav
      featureWithdraw: "Cash Withdrawal",
      featureWithdrawDesc: "– Withdraw available cash from account",
      
      featureBalance: "Check Balance",
      featureBalanceDesc: "– View current account balance",

      featureChangePin: "Change PIN",
      featureChangePinDesc: "– Securely change ATM PIN",

      featureDeposit: "Cash Deposit",
      featureDepositDesc: "– Deposit cash into account",

      featureMiniStmt: "Mini Statement",
      featureMiniStmtDesc: "– View recent transaction history",

      featureExit: "Exit",
      featureExitDesc: "– Safely exit the ATM system",

      featureNoCash: "No Cash",
      featureNoCashDesc: "– Displays message when cash withdraw",


    // General
    welcomeATM: "Welcome to the ATM",
    enterAcc: "Enter your account number",
    insertCard: "Insert Card / Submit",
    chooseAction: "Choose your action",
    back: "Back",
    ok: "OK",
    exit: "Exit",

    // PIN
    enterPin: "Enter PIN",
    submitPin: "Submit PIN",
    eject: "Eject",

    // Menu buttons
    withdraw: "Cash Withdrawal",
    balance: "Check Balance",
    deposit: "Cash Deposit",
    changePin: "Change PIN",
    miniStmt: "Mini Statement",

    // Withdraw
    withdrawTitle: "Withdraw",
    availBalance: "Available balance",
    withdrawBtn: "Withdraw",
    minWithdraw: "Amount must be minimum ₹100",

    // Deposit
    depositTitle: "Deposit",
    depositBtn: "Deposit",

    // Balance
    balanceTitle: "Balance",

    // Success
    txnSuccess: "Transaction Success",
    collectCash: "Collect your cash",

    // Admin
    adminPanel: "Admin Panel",
    unlockAcc: "Unlock Locked Account",
    unlockBtn: "Unlock Account",

    // Errors
    loginFirst: "Please login first",
    wrongPin: "Wrong PIN",
      accLocked: "Account is locked. Contact bank staff.",
    
      //footer
      footerAboutTitle: "ATM Simulator System",
      footerAboutText: "ATM Simulator System is a mini banking project developed using HTML, CSS and JavaScript. It simulates real ATM operations such as cash withdrawal, deposit, balance enquiry, mini statement and PIN change.",
      footerCopyright: "© 2026 Ashlok Kumar. All rights reserved.",
    
      footerProjectsTitle: "Projects",
      footerProject1: "ATM Simulator System",
      footerProject2: "Hazaribagh — Town Guide",
      footerProject3: "My Portfolio - Ashlok Kumar",
      footerProject4: "Currency Convertor",
    
      footerSocialTitle: "Connect with Me",
      footerSocial1: "LinkedIn",
      footerSocial2: "GitHub",
      footerSocial3: "Twitter / X",
      footerSocial4: "Email"
  },

    hi: {
    // header
      headerTitle: "एटीएम सिमुलेटर सिस्टम",
      headerDesc: "एटीएम सिमुलेटर सिस्टम HTML, CSS और JavaScript का उपयोग करके विकसित किया गया एक मिनी प्रोजेक्ट है। यह वास्तविक एटीएम ऑपरेशन को सरल और इंटरैक्टिव तरीके से प्रदर्शित करता है।",
    
      // nav
      featureWithdraw: "नकद निकासी",
      featureWithdrawDesc: "– खाते से नकद निकालें",
      
      featureBalance: "बैलेंस देखें",
      featureBalanceDesc: "– वर्तमान खाता बैलेंस देखें",

      featureChangePin: "पिन बदलें",
      featureChangePinDesc: "– ATM पिन को सुरक्षित रूप से बदलें",

      featureDeposit: "नकद जमा",
      featureDepositDesc: "– खाते में नकद जमा करें",

      featureMiniStmt: "मिनी स्टेटमेंट",
      featureMiniStmtDesc: "– हाल की लेन-देन की जानकारी देखें",

      featureExit: "बाहर जाएँ",
      featureExitDesc: "– एटीएम सिस्टम से सुरक्षित रूप से बाहर निकलें",

      featureNoCash: "कोई नकद नहीं",
      featureNoCashDesc: "– नकद निकालने पर संदेश दिखाता है",


    // General
    welcomeATM: "एटीएम में आपका स्वागत है",
    enterAcc: "अपना खाता नंबर दर्ज करें",
    insertCard: "कार्ड डालें / सबमिट",
    chooseAction: "अपना विकल्प चुनें",
    back: "वापस",
    ok: "ठीक है",
    exit: "बाहर जाएँ",

    // PIN
    enterPin: "पिन दर्ज करें",
    submitPin: "पिन सबमिट करें",
    eject: "कार्ड निकालें",

    // Menu buttons
    withdraw: "नकद निकासी",
    balance: "बैलेंस देखें",
    deposit: "नकद जमा",
    changePin: "पिन बदलें",
    miniStmt: "मिनी स्टेटमेंट",

    // Withdraw
    withdrawTitle: "नकद निकासी",
    availBalance: "उपलब्ध बैलेंस",
    withdrawBtn: "निकालें",
    minWithdraw: "न्यूनतम राशि ₹100 है",

    // Deposit
    depositTitle: "जमा करें",
    depositBtn: "जमा करें",

    // Balance
    balanceTitle: "बैलेंस",

    // Success
    txnSuccess: "लेन-देन सफल",
    collectCash: "कृपया नकद लें",

    // Admin
    adminPanel: "एडमिन पैनल",
    unlockAcc: "लॉक खाता अनलॉक करें",
    unlockBtn: "खाता अनलॉक करें",

    // Errors
    loginFirst: "पहले लॉगिन करें",
    wrongPin: "गलत पिन",
      accLocked: "खाता लॉक है, बैंक स्टाफ से संपर्क करें",
    

      //footer

      footerAboutTitle: "एटीएम सिमुलेटर सिस्टम",
      footerAboutText: "एटीएम सिमुलेटर सिस्टम एक लघु बैंकिंग प्रोजेक्ट है जिसे HTML, CSS और JavaScript का उपयोग करके विकसित किया गया है। यह नकद निकासी, जमा, बैलेंस जाँच, मिनी स्टेटमेंट और PIN परिवर्तन जैसी वास्तविक एटीएम प्रक्रियाओं का अनुकरण करता है।",
      footerCopyright: "© 2026 अशलोक कुमार। सर्वाधिकार सुरक्षित।",
    
      footerProjectsTitle: "प्रोजेक्ट्स",
      footerProject1: "एटीएम सिमुलेटर सिस्टम",
      footerProject2: "हज़ारीबाग — टाउन गाइड",
      footerProject3: "मेरा पोर्टफोलियो - अशलोक कुमार",
      footerProject4: "मुद्रा परिवर्तक",
    
      footerSocialTitle: "मुझसे जुड़ें",
      footerSocial1: "LinkedIn",
      footerSocial2: "GitHub",
      footerSocial3: "Twitter / X",
      footerSocial4: "ईमेल"
    
  }
  };
  

  // Add JS function to apply features
function applyFeaturesLanguage() {
  document.querySelectorAll(".atm-features li").forEach(li => {
    const key = li.dataset.key;
    if (!key) return;

    li.querySelector("strong").textContent = LANG[currentLang][key];
    li.querySelector("span").textContent = LANG[currentLang][key + "Desc"];
  });
  }
  
  // JS function to update footer dynamically
  function applyFooterLanguage() {
    const T = LANG[currentLang];
  
    // About
    document.querySelector(".footer-col.about h2").textContent = T.footerAboutTitle;
    document.querySelector(".footer-col.about p").textContent = T.footerAboutText;
    const copyright = document.getElementById("footer-copy");
    if (copyright) copyright.textContent = T.footerCopyright;


    
  
    // Projects
    const projectLis = document.querySelectorAll(".footer-col:nth-child(2) ul li a");
    if (projectLis.length >= 4) {
      projectLis[0].textContent = T.footerProject1;
      projectLis[1].textContent = T.footerProject2;
      projectLis[2].textContent = T.footerProject3;
      projectLis[3].textContent = T.footerProject4;
    }
  
    // Social
    const socialLis = document.querySelectorAll(".footer-col:nth-child(3) ul li a");
    if (socialLis.length >= 4) {
      socialLis[0].textContent = T.footerSocial1;
      socialLis[1].textContent = T.footerSocial2;
      socialLis[2].textContent = T.footerSocial3;
      socialLis[3].textContent = T.footerSocial4;
    }
  
    // Language / Appearance headings (optional)
    document.querySelector(".mode h3").textContent = currentLang === "en" ? "Appearance" : "अभिव्यक्ती";
    document.querySelector(".lang-box h3").textContent = currentLang === "en" ? "Language" : "भाषा";
  }
  

let currentLang = localStorage.getItem("lang") || "en";

// APPLY LANGUAGE FUNCTION

function applyLanguage() {
  const T = LANG[currentLang];

  // FIRST PAGE
  setText("header-title", null, T.headerTitle);
  setText("header-desc", null, T.headerDesc);

  // FOOTER
  setText("footer-copy", null, T.footerCopyright);


  localStorage.setItem("lang", currentLang);

  // Screen titles
  setText("screen-acc", "h2", T.welcomeATM);
  setText("screen-acc", ".muted", T.enterAcc);
  setBtn("accSubmit", T.insertCard);

  setText("screen-pin", "h2", T.enterPin);
  setBtn("pinSubmit", T.submitPin);
  setBtn("ejectBtn", T.eject);

  setText("screen-menu", ".muted", T.chooseAction);

  setText("screen-withdraw", "h2", T.withdrawTitle);
  setBtn("withdrawSubmit", T.withdrawBtn);

  setText("screen-deposit", "h2", T.depositTitle);
  setBtn("depositSubmit", T.depositBtn);

  setText("screen-balance", "h2", T.balanceTitle);

  setText("screen-success", "h2", T.txnSuccess);
  setText("successText", null, T.collectCash);

  // Side buttons
  setSpan("Withdrawalmsg", T.withdraw);
  setSpan("balencemsg", T.balance);
  setSpan("casedepositemsg", T.deposit);
  setSpan("changepinmsg", T.changePin);
  setSpan("ministatementmsg", T.miniStmt);
  setSpan("exitmsg", T.exit);

  // Admin
  setText("screen-admin", "h2", T.adminPanel);
  setBtn("adminUnlock", T.unlockBtn);

  applyFeaturesLanguage();  // first page features list
  applyFooterLanguage();    // footer

  localStorage.setItem("lang", currentLang);
}

  applyLanguage();
  
  
// /HELPER FUNCTION

function setText(parentId, selector, text) {
  const el = selector
    ? document.querySelector(`#${parentId} ${selector}`)
    : document.getElementById(parentId);
  if (el) el.textContent = text;
}

function setBtn(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function setSpan(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}


//language


$("lang-en").onclick = () => {
  currentLang = "en";
  applyLanguage();
};

$("lang-hi").onclick = () => {
  currentLang = "hi";
  applyLanguage();
};

  /*End of translating proccess*/


  
// Button–Message Mapping
const hoverMap = {
  Withdrawal: "Withdrawalmsg",
  balence: "balencemsg",
  changepin: "changepinmsg",
  casedeposite: "casedepositemsg",
  ministatement: "ministatementmsg",
  exit: "exitmsg",
};

         

                    // DEMO ACCOUNT DATABASE
                        const accounts = {};

  
                    // Transaction History
                    const transactions = {};

  // ELEMENTS 
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


  
                                                    /* dark/light mode  */
  
  const toggleBtn = $("themeToggle");

  // Auto theme (system preference)
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (localStorage.getItem("theme") === "dark" ||(!localStorage.getItem("theme") && prefersDark) ) {
    document.body.classList.add("dark");
  }

                                                      // Toggle manually
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });


  /* screen System*/

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
      // console.log("Loaded Accounts:", accounts);
      // ====================================
    })
    .catch(error => {
      console.error("Error loading JSON:", error);
      // keep accountsLoaded false; user will get message if they try to login
    });

  
    // ATM SCREEN SYSTEM
  // SCREEN HANDLER
  // function show(screenId) {
  //   document.querySelectorAll(".screen-inner")
  //    .forEach(s => s.classList.add("hidden"));
  //     const el = $(screenId);
  //     if (el) el.classList.remove("hidden");
  // }
  
  /*comment part is changed*/
   function show(screenId){
    document.querySelectorAll(".screen-inner")
      .forEach(s => s.classList.add("hidden"));
    const el = $(screenId);
    if(el) el.classList.remove("hidden");
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

  // Login pe lock state LOAD karo

  function loadLockState() {
    const saved = JSON.parse( localStorage.getItem("lock_" + currentAccount));
  
    if (saved) {
      accounts[currentAccount].pinAttempts = saved.pinAttempts;
      accounts[currentAccount].isLocked = saved.isLocked;
    }
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
        // alert("Enter account number!");
        if (pinMsg) pinMsg.textContent = "Enter account number!";
        return;
      }
      if (!accounts[acc]) {
        // alert("Invalid account number!");
        if (pinMsg) pinMsg.textContent = "Invalid account number!";
        return;
      }
      currentAccount = acc;
     
      if (accLabel) accLabel.textContent = acc;

      // Init empty history if not exists
      if (!transactions[currentAccount]) {
       transactions[currentAccount] = [];
        
        // transactions[currentAccount] = transactions[currentAccount] + []; //isase all history load ho jayega
        //localStorage me aur local storage ka memory size bahut kam hota hai
        
      }

      loadLockState();// calling the function for account laoding

      // show process then pin
      show("process-icon");
      setTimeout(() => {
        show("screen-pin");
        $("pinInput").focus();
      }, 800);
    };
  }


  // Save lockState funtion
  function saveLockState() {
    localStorage.setItem("lock_" + currentAccount,
        JSON.stringify({  
          pinAttempts: accounts[currentAccount].pinAttempts,
          isLocked: accounts[currentAccount].isLocked
      })
    );
  }
  

  // PIN SUBMIT
  if (pinSubmit) {
    pinSubmit.onclick = () => {
  
      if (!currentAccount) {
        pinMsg.textContent = "Insert card first.";
        return;
      }
  
      const acc = accounts[currentAccount];
  
      //  checking account locked or not
      if (acc.isLocked) {
        // pinMsg.textContent ="Account locked! Contact bank admin.";
        pinMsg.textContent = LANG[currentLang].accLocked;
        return;
      }
  
      const enteredPin = pinInput.value.trim();
  
      //  correct PIN
      if (enteredPin === acc.pin) {
            acc.pinAttempts = 0; // reset
            saveLockState();
            pinMsg.textContent = "";
            welcomeName.textContent =
              "Welcome, " + acc.name;
            setSideButtonsEnabled(true);
            show("screen-menu");
            
            return;
      }
  
      //  wrong PIN
      acc.pinAttempts++;
  
      if (acc.pinAttempts >= 3) {
          acc.isLocked = true;
          pinMsg.textContent ="Account locked after 3 wrong attempts!";
      } else {
        pinMsg.textContent =`Wrong PIN! Attempts left: ${3 - acc.pinAttempts}`;
      }
  
      saveLockState();
      pinInput.value = "";
      pinInput.focus();
    };
  }

  loadUserLimit();

  /*  EXIT BUTTON */
  $("exit").onclick = () => {
    currentAccount = null;
    show("screen-acc");
  };

  
  // LOGOUT / EJECT/exit
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

  //===================================
  let screenStack = [];

function showScreen(id){
  document.querySelectorAll(".screen-inner").forEach(s => s.classList.add("hidden"));

  if(screenStack[screenStack.length-1] !== id){
    screenStack.push(id);
  }

  document.getElementById(id).classList.remove("hidden");
}

function goBack(){
  screenStack.pop(); // current remove
  const prev = screenStack.pop(); // previous
  if(prev){
    showScreen(prev);
  }
}

  
   /* BACK BUTTONS */
  
  $("withdrawBack").onclick = () => show("screen-menu");
  $("depositBack").onclick  = () => show("screen-menu");
  $("balBack").onclick      = () => show("screen-menu");
  $("changePinBack").onclick= () => show("screen-menu");
  $("miniBack").onclick     = () => show("screen-menu");

// document.getElementById("withdrawBack").onclick = goBack;
// document.getElementById("depositBack").onclick = goBack;
// document.getElementById("balBack").onclick = goBack;
// document.getElementById("changePinBack").onclick = goBack;
// document.getElementById("miniBack").onclick = goBack;
// document.getElementById("adminBack").onclick = goBack;//==========================================

 
  

  // ================== GLOBAL VARIABLES ==================
  let dailyLimit = 25000;

  // let todayWithdraw = Number(localStorage.getItem("todayWithdraw")) || 0;
  // let lastWithdrawDate =
  //   localStorage.getItem("lastWithdrawDate") || new Date().toDateString();
  function loadUserLimit() {
    todayWithdraw = Number(
      localStorage.getItem("todayWithdraw_" + currentAccount)
    ) || 0;
    lastWithdrawDate =
    localStorage.getItem("lastWithdrawDate_" + currentAccount)
    || new Date().toDateString();
}

  // check new day
  // ================== CHECK NEW DAY ==================
  function checkNewDay() {
    const today = new Date().toDateString();
  
    if (today !== lastWithdrawDate) {
      todayWithdraw = 0;
      lastWithdrawDate = today;
  
      localStorage.setItem("todayWithdraw_" + currentAccount, todayWithdraw);
      localStorage.setItem("lastWithdrawDate_" + currentAccount, lastWithdrawDate);
    }
  }
  

  // WITHDRAW
  const WithdrawalBtn = $("Withdrawal");
  if (WithdrawalBtn) {
    WithdrawalBtn.onclick = () => {

      if (adminActive) return;   // 🚫 admin mode me kuchh nahi hoga

      checkNewDay();  // 

      if (!currentAccount) {
        if (withdrawMsg) withdrawMsg.textContent = "Please login first.";
        return;
      }


      if (availBalW) availBalW.textContent = accounts[currentAccount].balance;
      if (withdrawMsg) withdrawMsg.textContent = "";
      if (withdrawAmt) withdrawAmt.value = "";
      setTimeout(() => {
        show("screen-withdraw");
        $("withdrawAmt").focus();
       }, 100);
     }
    };


  // Withdrawn Submit 
  
  if (withdrawSubmit) {
    withdrawSubmit.onclick = () => {
      if (!currentAccount) {
        if (withdrawMsg) withdrawMsg.textContent = "Please login first.";
        return;
      }

      const amt = Number(withdrawAmt ? withdrawAmt.value : 0);

      if (isNaN(amt) || amt < 100 ) {
        if (withdrawMsg)
          withdrawMsg.textContent = "Amount must be minimum ₹100.";
        withdrawAmt.value = "";
        return;
      }

      if (amt > accounts[currentAccount].balance) {
        if (withdrawMsg)
          withdrawMsg.textContent = "Insufficient balance!";
        withdrawAmt.value = "";
        return;
      }

      // DAILY LIMIT CHECK (YAHIN ADD HOGA)
    if (todayWithdraw + amt > dailyLimit) {
      if (withdrawMsg)
        withdrawMsg.textContent = "Daily withdrawal limit exceeded!";
      withdrawAmt.value = "";   // clear input
      return;
      }

      accounts[currentAccount].balance -= amt;

      // todayWithdraw += amt;

      transactions[currentAccount].push({
          type: "Withdraw",
          amount: amt,
          time: new Date().toLocaleString()
        });


      const cashSlot = $("cashSlot");
      if (cashSlot) cashSlot.textContent = "Cash: ₹" + amt;

      const successText = $("successText");
      if (successText) successText.textContent = "Withdrawn ₹" + amt;
      todayWithdraw += amt;

localStorage.setItem(
  "todayWithdraw_" + currentAccount,
  todayWithdraw
);
localStorage.setItem(
  "lastWithdrawDate_" + currentAccount,
  lastWithdrawDate
);
      withdrawAmt.value = ""; // clear after success
      setTimeout(() => show("screen-success"), 100);
    };
  }

  const withdrawBack = $("withdrawBack");
  if (withdrawBack) withdrawBack.onclick = () => show("screen-menu");

  /*
  VIVA READY ONE-LINERS (YAAD RAKHNA 💡)
Daily limit:
“System tracks daily withdrawn amount and restricts excess withdrawal.”
Next day reset:
“Daily withdrawal resets automatically by comparing system date.”
Security:
“Invalid inputs are cleared to avoid user confusion.”
*/

  // DEPOSIT
  const casedepositeBtn = $("casedeposite");
  if (casedepositeBtn) {
    casedepositeBtn.onclick = () => {

      if (adminActive) return;   // 🚫 admin mode me kuchh nahi hoga

      if (!currentAccount) {
        alert("Please login first.");
        return;
      }


      if (depositAmt) depositAmt.value = "";
      if (depositMsg) depositMsg.textContent = "";
      setTimeout(() => {
        show("screen-deposit")
        $("depositAmt").focus();
      }, 100);
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
        type: "Deposit",
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

      if (adminActive) return;   // 🚫 admin mode me kuchh nahi hoga

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

      if (adminActive) return;   // 🚫 admin mode me kuchh nahi hoga

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
      setTimeout(() => {
        show("screen-change-pin");
        $("newPin").focus();
        , 100);
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
      const oldPinVal = accounts[currentAccount].pin; 
      
      if ((newPinVal == oldPinVal )&&(newPinVal.length == 4)&&(newPinVal == confVal)) {
        
        if (changePinMsg) changePinMsg.textContent = "New PIN cannot be same as old PIN";
        newPinEl.value = "";
        confEl.value = "";
        newPinEl.focus();
        return;
      }

      if (newPinVal.length !== 4) {
    
        if (changePinMsg) changePinMsg.textContent = "PIN must be 4 digits";
        newPinEl.value = "";
        confEl.value = "";
        newPinEl.focus();
        return;
      }
      if (newPinVal !== confVal) {
        if (changePinMsg) changePinMsg.textContent = "PIN mismatch!";
        newPinEl.value = "";
        confEl.value = "";
        newPinEl.focus();
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
  
    const last = transactions[currentAccount].slice(-20).reverse();
  
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

      if (adminActive) return;   // 🚫 admin mode me kuchh nahi hoga

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

/*

  // ================== ADMIN / UNLOCK ==================
const adminPanelBtn = document.createElement("button");
adminPanelBtn.textContent = "Admin Panel";
adminPanelBtn.id = "adminPanelBtn"; // for CSS styling
  document.body.appendChild(adminPanelBtn);
  

  const adminAccInput = $("adminAcc");
const adminUnlockBtn = $("adminUnlock");
const adminBackBtn = $("adminBack");
const adminMsg = $("adminMsg");

  
let adminActive = false;

  //===Admin screen system
  function openAdmin(){
    document.getElementById("screen-admin").classList.remove("hidden");
  }
  
  function closeAdmin(){
    document.getElementById("screen-admin").classList.add("hidden");
    document.body.classList.remove("admin-active");
  }

  // document.getElementById("adminBack").onclick = closeAdmin;//================================================




  adminPanelBtn.onclick = () => {
    const pin = prompt("Enter Admin PIN");
  
    if (pin !== ADMIN_PIN) {
      alert("Access Denied! Admin only.");
      return;
    }


    adminActive = true; 

    // 🔒 ATM LOCK
  document.body.classList.add("admin-active");

  show("screen-admin");               // ONLY admin opens
  if (adminMsg) adminMsg.textContent = "";
  if (adminAccInput) adminAccInput.value = "";
};

// Unlock account logic
if(adminUnlockBtn){
  adminUnlockBtn.onclick = () => {
    const acc = adminAccInput ? adminAccInput.value.trim() : "";
    if(!acc){
      if(adminMsg) adminMsg.textContent = "Enter account number!";
      return;
    }
    if(!accounts[acc]){
      if(adminMsg) adminMsg.textContent = "Account does not exist!";
      return;
    }

    accounts[acc].pinAttempts = 0;
    accounts[acc].isLocked = false;

    //  localStorage
    localStorage.setItem("lock_" + acc, JSON.stringify({pinAttempts: 0,isLocked: false }) );

    if(adminMsg) adminMsg.textContent = `Account ${acc} unlocked successfully!`;
    if(adminAccInput) adminAccInput.value = "";
  };
}

// Back button -> return to login screen
  adminBackBtn.onclick = () => {
    adminActive = false;                // 🔓 ATM UNLOCK
    document.body.classList.remove("admin-active");
  
    currentAccount = null;      // 🚫 clear session
    if (accInput) accInput.value = "";
    if (pinInput) pinInput.value = "";
  
    setSideButtonsEnabled(false);
    show("screen-acc");         // ✅ fresh start
  };

*/


  /*  ADMIN PANEL  */
  const adminBtn = document.createElement("button");
  adminBtn.id = "adminPanelBtn";
  adminBtn.textContent = "Admin Panel";
  document.body.appendChild(adminBtn);

  adminBtn.onclick = () => {
    const pin = prompt("Enter Admin PIN");
    // when pin wrong
    if(pin !== ADMIN_PIN){
      alert("Access Denied");
      return;
    }
    // if when pin is corrrect screen admin will be opened
    adminActive = true;
    document.body.classList.add("admin-active");
    $("screen-admin").classList.remove("hidden");
    $("adminAcc").focus();
  };
  
      // for adminBack button
  $("adminBack").onclick = () => {
    adminActive = false;
    document.body.classList.remove("admin-active");
    $("screen-admin").classList.add("hidden");
  };

  $("adminUnlock").onclick = () => {
    const acc = $("adminAcc").value.trim();
    if(!accounts[acc]){
      $("adminMsg").textContent = "Account not found";
      return;
    }

    accounts[acc].isLocked = false;
    accounts[acc].pinAttempts = 0;
    $("adminMsg").textContent = "Account unlocked successfully";
  };

  /*  INIT Initialization (kisi cheez ko shuru me set karna)  */
  show("screen-acc");
  

}); // DOMContentLoaded end





