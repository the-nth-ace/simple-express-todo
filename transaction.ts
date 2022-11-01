const dataToOtherBank: Record<any, any> = {
  requestRef: "0000000000",
  requestType: "local-transfer",
  auth: {
    type: "account",
    secure: "{{account-number-kind-of}}",
  },
  transaction: {
    amount: 1000,
    transactionRef: "0000000032",
    transactionRefParent: "",
    transactionDescription: "Payment for services",
    channel: "string",
    destinationCurrency: "NGN",
    destinationAccount: "string",
    destinationAccountName: "string",
    destinationBankCode: "string",
    destinationNarration: "string",
    latitude: 0,
    longitude: 0,
    customer: {
      accountNumber: "{{accountNumber}}",
      firstname: "Ope",
      surname: "Adeoye",
      email: "opeadeoye@gmail.com",
      mobileNumber: "2348022221412",
      sourceAccount: "string",
      sourceAccountName: "string",
      sourceCurrency: "NGN",
    },
  },
  statusWebHook:
    "https://merchantfeedback.merchant.com/status/ABCD12345678901234567890/",
};

const dataWithin: Record<any, any> = {
  requestRef: "0000000000",
  requestType: "local-transfer",
  auth: {
    type: "account",
    secure: "{{account-number-kind-of}}",
  },
  transaction: {
    amount: 1000,
    transactionRef: "0000000032",
    transactionRefParent: "",
    transactionDescription: "Payment for services",
    channel: "string",
    destinationCurrency: "NGN",
    destinationAccount: "string",
    destinationAccountName: "string",
    destinationBankCode: "string", // not necessary
    destinationNarration: "string",
    latitude: 0,
    longitude: 0,
    customer: {
      accountNumber: "{{accountNumber}}",
      firstname: "Ope",
      surname: "Adeoye",
      email: "opeadeoye@gmail.com",
      mobileNumber: "2348022221412",
      sourceAccount: "string",
      sourceAccountName: "string",
      sourceCurrency: "NGN",
    },
  },
  statusWebHook:
    "https://merchantfeedback.merchant.com/status/ABCD12345678901234567890/",
};

const withinBankResp = {
  status: "00",
  message: "Kindly enter the OTP sent to ****1412 to complete the transaction",
  data: {
    errors: null,
    error: null,
    transactionRef: "0000000000",
    validTill: "yyyyMMddhhttss",
    expiryMinutes: 9,
    statusWebHook: "00",
    authDetails: [
      {
        type: "otp",
        label: "6-digit OTP",
        Message:
          "Kindly enter the OTP sent to ****1412 to complete the transaction",
      },
      {
        type: "password",
        label: "internet banking password",
        Message: "Kindly enter your internet banking password",
      },
    ],
  },
};
