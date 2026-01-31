// ================= ADMIN CONFIG =================
const ADMIN_PIN = "ashlok22082006";

document.addEventListener("DOMContentLoaded", () => {

  const $ = id => document.getElementById(id);



  // Language Dictionary(js)
  // ================= LANGUAGE DICTIONARY =================
  const LANG = {
    en: {
        // header
      headerTitle: "ATM Simulator System",
      headerDesc: "ATM Simulator System is a mini project developed using HTML, CSS and JavaScript. It simulates real ATM operations in a simple and interactive way.",
      // nav
      featureWithdraw: "Cash Withdrawal–",
      featureWithdrawDesc: "– Withdraw available cash from account",
      
      featureBalance: "Check Balance",
      featureBalanceDesc: "–View current account balance",

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

    footerConnect: "Connect with Me",
    // footerConnect: "Connect with Me",
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

    footerConnect: "मुझसे जुड़ें",
    footerSocial1: "लिंक्डइन",
    footerSocial2: "गिटहब",
    footerSocial3: "ट्विटर / एक्स",
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
    //   projectLis[4].textContent = T.footerProjectsTitle;
    }
  
    // Social
    const socialLis = document.querySelectorAll(".footer-col:nth-child(3) ul li a");
    if (socialLis.length >= 4) {
      socialLis[0].textContent = T.footerSocial1;
      socialLis[1].textContent = T.footerSocial2;
      socialLis[2].textContent = T.footerSocial3;
      socialLis[3].textContent = T.footerSocial4;
      // socialLis[4].textContent=T.footerConnect
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


  // dark/light mode
  
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


  

  /*  SCREEN SYSTEM  */
  function show(screenId){
    document.querySelectorAll(".screen-inner")
      .forEach(s => s.classList.add("hidden"));

    const el = $(screenId);
    if(el) el.classList.remove("hidden");
  }

  /*  DATA */
  let currentAccount = null;
  let adminActive = false;

  const accounts = {
    "12345678": { name:"Demo User", pin:"1234", balance:10000, pinAttempts:0, isLocked:false }
  };

  /* LOGIN = account submission  */
  $("accSubmit").onclick = () => {
    const acc = $("accNumber").value.trim();
    if(!accounts[acc]){
      alert("Invalid account");
      return;
    }
    currentAccount = acc;
    show("screen-pin");
  };
  

  $("pinSubmit").onclick = () => {
    const acc = accounts[currentAccount];
    const pin = $("pinInput").value.trim();

    if(acc.isLocked){
      alert("Account locked");
      return;
    }

    if(pin === acc.pin){
      acc.pinAttempts = 0;
      show("screen-menu");
    }else{
      acc.pinAttempts++;
      if(acc.pinAttempts >= 3){
        acc.isLocked = true;
        alert("Account locked");
      }else{
        alert("Wrong PIN");
      }
    }
  };

  /* BACK BUTTONS */
  
  $("withdrawBack").onclick = () => show("screen-menu");
  $("depositBack").onclick  = () => show("screen-menu");
  $("balBack").onclick      = () => show("screen-menu");
  $("changePinBack").onclick= () => show("screen-menu");
  $("miniBack").onclick     = () => show("screen-menu");

  
  /*  EXIT BUTTON */
  $("exit").onclick = () => {
    currentAccount = null;
    show("screen-acc");
  };
  

  /*  ADMIN PANEL  */
  const adminBtn = document.createElement("button");
  adminBtn.id = "adminPanelBtn";
  adminBtn.textContent = "Admin Panel";
  document.body.appendChild(adminBtn);

  adminBtn.onclick = () => {
    const pin = prompt("Enter Admin PIN");
    if(pin !== ADMIN_PIN){
      alert("Access Denied");
      return;
    }

    adminActive = true;
    document.body.classList.add("admin-active");
    $("screen-admin").classList.remove("hidden");
  };

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
});






