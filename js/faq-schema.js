// faq-schema.js
// JSON-LD FAQ for ATM Simulator System Project

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://atmsimulatorsystem.vercel.app/#faq",
  "url": "https://atmsimulatorsystem.vercel.app/",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the ATM Simulator System Project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ATM Simulator System Project is a mini web application developed using HTML, CSS, and JavaScript. It simulates real banking operations such as cash withdrawal, deposit, balance enquiry, mini statement, and PIN change."
      }
    },
    {
      "@type": "Question",
      "name": "What features does the ATM Simulator offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The main features include Cash Withdrawal, Check Balance, Change PIN, Cash Deposit, Mini Statement, Exit, and No Cash notifications."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use demo accounts to test the ATM Simulator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, demo accounts are available. For example, you can use account number 12345678 to test all operations."
      }
    },
    {
      "@type": "Question",
      "name": "How does Cash Withdrawal work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can withdraw available cash from your account by selecting the Cash Withdrawal option and entering the amount you want to withdraw."
      }
    },
    {
      "@type": "Question",
      "name": "How can I check my account balance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Select the Check Balance option to view your current account balance instantly."
      }
    },
    {
      "@type": "Question",
      "name": "How do I change my ATM PIN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can securely change your ATM PIN by selecting the Change PIN option and following the instructions."
      }
    },
    {
      "@type": "Question",
      "name": "Does the ATM Simulator show mini statements?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you can view recent transaction history by selecting the Mini Statement option."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if there is no cash available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The ATM Simulator will display a 'No Cash' message if there is not enough cash available for withdrawal."
      }
    },
    {
      "@type": "Question",
      "name": "Is the ATM Simulator System free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, this ATM Simulator System is completely free to use online for learning and demonstration purposes."
      }
    }
  ],
  "keywords": [
    "ATM Simulator System",
    "online ATM project",
    "cash withdrawal simulator",
    "ATM mini project",
    "balance enquiry",
    "PIN change",
    "mini statement",
    "JavaScript ATM project"
  ],
  "datePublished": "2026-02-07",
  "dateModified": "2026-02-07"
};

//  JSON-LD <script> 
const script = document.createElement("script");
script.type = "application/ld+json";
script.text = JSON.stringify(faqSchema);

// and append to head
document.head.appendChild(script);


