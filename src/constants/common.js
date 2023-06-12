const constants = {
  TAGLINE: " मकान आपका जिम्मेदारी हमारी",
  COMPANY_NAME_SHORT: "MEAC",
  ALT_DEFULT: `MEAC | मकान आपका जिम्मेदारी हमारी`,
  PHONE_NUMBER_1: "+91-8562839349",
  PHONE_NUMBER_2: "+91-9414189180",
  EMAIL_ID_1: "meacdesigns@gmail.com",
  EMAIL_ID_2: "mohinieac@gmail.com",
  CONTACT_INFO: [
    {
      title: "Discuss on Phone",
      type: "PHONE",
      items: [
        {
          display: "+91-8562839349",
          whatsapp: "+918562839349",
          action: "tel:+918562839349",
        },
        {
          display: "+91-9414189180",
          whatsapp: "+919414189180",
          action: "tel:+919414189180",
        },
      ],
    },
    {
      title: "Office Location",
      type: "LOCATION",
      items: [
        {
          display: "Mohini Engineers and Consultant",
          action: null,
        },
        {
          display: "Opposite Kamdar Company, Laxmipura",
          action: null,
        },
        {
          display: "Barmer (Rajasthan) - 344001",
          action: null,
        },
      ],
    },
    {
      title: "Send Email",
      type: "EMAIL",
      items: [
        {
          display: "meacdesigns@gmail.com",
          action: "mailto:meacdesigns@gmail.com",
        },
        {
          display: "mohinieac@gmail.com",
          action: "mailto:mohinieac@gmail.com",
        },
      ],
    },
  ],
};

export default constants;
