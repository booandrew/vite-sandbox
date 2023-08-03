import { PlanFeatureIconKey } from './service-consts';

export const PRICING_PLANS_FEATURES = {
  basic: [
    {
      description:
        'Automated AI voiceover: *25 minutes* for dubbing are included (monthly)',
      iconKey: PlanFeatureIconKey.voice,
      tooltipText:
        '1 minute of AI voiceover is equal to 1 min of final translated video. For example, if you have a five-minute video that needs to be translated into two new languages, you will need 10 minutes of voiceover.',
      tooltipTitle: 'What does dubbing minute mean?',
      isParsingRequire: true,
    },
    {
      description: 'Translate your video & audio into 60+ languages',
      iconKey: PlanFeatureIconKey.translate,
    },
    {
      description: 'Automated speech-to-text transcription',
      iconKey: PlanFeatureIconKey.textInput,
    },
    {
      description: 'Automated machine translation',
      iconKey: PlanFeatureIconKey.translate,
    },
    {
      description: 'You can add extra voiceover minutes for $1/min',
      iconKey: PlanFeatureIconKey.starsExtra,
    },
    {
      description:
        'Voice Cloning for 8 languages (English, Portuguese, French, Spanish, Italian, German, Polish, Hindi)',
      iconKey: PlanFeatureIconKey.grid,
    },
  ],
  pro: [
    {
      description:
        'Automated AI voiceover: *100 minutes* for dubbing are included (monthly)',
      iconKey: PlanFeatureIconKey.voice,
      tooltipText:
        '1 minute of AI voiceover is equal to 1 min of final translated video. For example, if you have a five-minute video that needs to be translated into two new languages, you will need 10 minutes of voiceover.',
      tooltipTitle: 'What does dubbing minute mean?',
      isParsingRequire: true,
    },
    {
      description: 'Translate your video & audio into 60+ languages',
      iconKey: PlanFeatureIconKey.translate,
    },
    {
      description: 'Automated speech-to-text transcription',
      iconKey: PlanFeatureIconKey.textInput,
    },
    {
      description: 'Automated machine translation',
      iconKey: PlanFeatureIconKey.translate,
    },
    {
      description: 'You can add extra voiceover minutes for $1/min',
      iconKey: PlanFeatureIconKey.starsExtra,
    },
    {
      description:
        'Voice Cloning for 8 languages (English, Portuguese, French, Spanish, Italian, German, Polish, Hindi)',
      iconKey: PlanFeatureIconKey.grid,
    },

    // pro-plan features
    {
      description: '*AI-rewriter for shorten fast speech.*',
      iconKey: PlanFeatureIconKey.edit,
      link: 'https://intercom.help/rask/en/articles/8155373-what-is-ai-rewriter-feature',
      isParsingRequire: true,
    },
    //TODO: эти фичи пока не доступны
    // {
    //   description: '*SRT upload support.*',
    //   iconKey: PlanFeatureIconKey.file,
    //   link: 'https://intercom.help/rask/en/articles/8155405-what-is-srt-upload-support',
    //   isParsingRequire: true,
    // },
    // {
    //   description: '*Multilingual projects: translate into up to 3 languages at once.*',
    //   iconKey: PlanFeatureIconKey.starsExtra,
    //   link: 'https://intercom.help/rask/en/articles/8155410-introducing-the-multilingual-projects-feature',
    //   isParsingRequire: true,
    // },
    {
      description: '*Early access to Lip Sync feature soon*',
      iconKey: PlanFeatureIconKey.checkMark,
      isParsingRequire: true,
    },
  ],
  business: [
    {
      description:
        'Automated AI voiceover: *500 minutes* for dubbing are included (monthly)',
      iconKey: PlanFeatureIconKey.voice,
      tooltipText:
        '1 minute of AI voiceover is equal to 1 min of final translated video. For example, if you have a five-minute video that needs to be translated into two new languages, you will need 10 minutes of voiceover.',
      tooltipTitle: 'What does dubbing minute mean?',
      isParsingRequire: true,
    },
    {
      description: 'Translate your video & audio into 60+ languages',
      iconKey: PlanFeatureIconKey.translate,
    },
    {
      description: 'Automated speech-to-text transcription',
      iconKey: PlanFeatureIconKey.textInput,
    },
    {
      description: 'Automated machine translation',
      iconKey: PlanFeatureIconKey.translate,
    },
    {
      description: 'You can add extra voiceover minutes for $1/min',
      iconKey: PlanFeatureIconKey.starsExtra,
    },
    {
      description:
        'Voice Cloning for 8 languages (English, Portuguese, French, Spanish, Italian, German, Polish, Hindi)',
      iconKey: PlanFeatureIconKey.grid,
    },

    // business-plan features
    {
      description: '*AI-rewriter for shorten fast speech.*',
      iconKey: PlanFeatureIconKey.edit,
      link: 'https://intercom.help/rask/en/articles/8155373-what-is-ai-rewriter-feature',
      isParsingRequire: true,
    },
    //TODO: эти фичи пока не доступны
    // {
    //   description: '*SRT upload support.*',
    //   iconKey: PlanFeatureIconKey.file,
    //   link: 'https://intercom.help/rask/en/articles/8155405-what-is-srt-upload-support',
    //   isParsingRequire: true,
    // },
    // {
    //   description: '*Multilingual projects: translate into up to 3 languages at once.*',
    //   iconKey: PlanFeatureIconKey.starsExtra,
    //   link: 'https://intercom.help/rask/en/articles/8155410-introducing-the-multilingual-projects-feature',
    //   isParsingRequire: true,
    // },
    {
      description: '*Early access to Lip Sync feature soon*',
      iconKey: PlanFeatureIconKey.checkMark,
      isParsingRequire: true,
    },
  ],
  enterprise: [
    {
      description: '*All Business features are included*',
      iconKey: PlanFeatureIconKey.checkMark,
      isParsingRequire: true,
    },
    {
      description: '*Custom price for minutes*',
      iconKey: PlanFeatureIconKey.checkMark,
      isParsingRequire: true,
    },
    {
      description: '*API access*',
      iconKey: PlanFeatureIconKey.checkMark,
      isParsingRequire: true,
    },
    {
      description: '*Custom features*',
      iconKey: PlanFeatureIconKey.checkMark,
      isParsingRequire: true,
    },
    {
      description: '*Personal Customer Manager*',
      iconKey: PlanFeatureIconKey.checkMark,
      isParsingRequire: true,
    },
  ],
};

export const FAQ_ITEMS = [
  {
    question: `What does a minute of voiceover (dubbing) mean?`,
    answer: `1 minute of AI voiceover equals 1 minute of final translated video/audio. For example, if you have a five-minute video that needs to be translated into two new languages, you will need 10 minutes of voiceover. Depending on your pricing plan, you will automatically receive a specific number of minutes added to your account monthly.
    
    If you run out of the allocated minutes, you can purchase additional minutes at $1 per minute.`,
  },
  {
    question: `How many minutes do I need?`,
    answer: `The number of minutes required for the AI dubbing tool depends on your needs. For example, if you have a five-minute video that needs to be translated into two new languages, you will need 10 minutes of voiceover. If you have a 1-hour video you need to translate into 3 languages, you will need 180 minutes.
    
    If you run out of the allocated minutes, you can purchase additional minutes at $1 per minute.
    `,
  },

  {
    question: `Can I use the remaining minutes from the current month of my subscription in the following months?`,
    answer: `Yes, you can. We will save the remaining minutes in your account; you can use them as long as your subscription is active.`,
  },

  {
    question: `Is it a one-time payment or a recurring payment?`,
    answer: `We offer two types of subscriptions: monthly and annual. The monthly subscription involves a recurring payment that is billed every month. The annual subscription is a recurring payment billed annually and automatically renews yearly. After paying a subscription, you will be charged until you cancel your subscription. You can cancel your subscription anytime.`,
  },

  {
    question: `Can I change my plan?`,
    answer: `Yes, of course. To upgrade your subscription, you can click on the circle in the right corner and follow these steps: "Manage Subscription" -> "Manage Subscription" -> "Upgrade". This will enable you to change your current plan and select a different subscription tier that better aligns with your needs.`,
  },

  {
    question: `Can I cancel my subscription anytime?`,
    answer: `Yes, you can cancel your subscription anytime. To do that, you can click on the circle in the right corner, select the "Manage Subscription" option, and choose to cancel your subscription.`,
  },

  {
    question: `What is your refund policy?`,
    answer: `We are committed to refunding the minutes you have used if the creation of your video failed to complete due to a technical error on our end. To request a refund of minutes, please get in touch with our support service. We will review your request, and if it is confirmed that there was a technical error on our end, we will return the used minutes to your account. 
    
    Please note that refunds are not provided in the following cases:
    
    • More than 25% of the subscription plan has been used.
    • More than 14 days have passed since the activation of the subscription.
    • The client received an expected, technically high-quality result but simply changed their mind about using the service.
    
    Each refund request will be considered individually. You can learn more about our refund policy in our terms of service by following (this link)[https://www.rask.ai/terms-of-service]`,
    isParsingRequire: true,
  },

  {
    question: `What payment methods do you accept?`,
    answer: `We support various payment methods, including credit/debit cards (Visa, Mastercard, American Express, UnionPay, and others) and payments through Apple Pay, Cash App Pay, Google Pay, Link, WeChat Pay. All payments are securely processed through Stripe, a trusted payment platform.`,
  },

  {
    question: `Can I include company information on my invoice?`,
    answer: `The invoices are automatically sent to your email after the payment is processed. You can learn how to make adjustments to your future invoices by following (this link)[https://intercom.help/rask/en/articles/8159139-i-need-to-add-information-about-my-company-to-the-invoice].
    
    If you need to make changes to invoices created in the past, please contact us via the support chat, and we will assist you with the necessary modifications.`,
    isParsingRequire: true,
  },

  {
    question: `How do you ensure the security of my payment information?`,
    answer: `We take the security of our customer's payment information very seriously. To protect your payment information, we use Stripe, one of the world's leading payment processors. Stripe is certified as a PCI Level 1 Service Provider, the highest security certification in the payment industry.
    
    Stripe encrypts your payment information using industry-standard SSL/TLS technology and stores it on their secure servers. We never store any payment information on our servers.
    
    By using Stripe, we can ensure that your payment information is always safe and secure.`,
  },

  {
    question: `How many languages do you currently support?`,
    answer: `With Rask AI, you can translate from nearly any language to over (130 languages)[https://intercom.help/rask/en/articles/8177323-to-which-languages-can-i-translate-my-video]. Our Voice Cloning feature offers a human-like experience, and it is currently available when dubbing from any source language to the following 8 languages: English, German, Polish, Spanish, Italian, French, Portuguese, and Hindi.`,
    isParsingRequire: true,
  },

  {
    question: `Is it possible to add subtitles or captions to the dubbed video?`,
    answer: `Currently, you can only download subtitles for the dubbed video in SRT format. However, we are developing the feature to add subtitles directly within our product.`,
  },

  {
    question: `Are there any limitations on the duration and size of uploaded videos?`,
    answer: `For users with subscriptions, there are no specific limitations on the duration and size of uploaded videos. However, if you encounter any issues with videos longer than 1.5 hours, we recommend dividing them into two parts and translating them separately. This approach ensures smoother processing and helps maintain optimal performance.`,
  },

  {
    question: `What should I do if 500 minutes per month are insufficient for my needs?`,
    answer: `Our regular pricing plans provide up to 500 minutes per month. If you need more minutes, you can buy them for $1 each. We can create a custom plan for you if you require a larger volume of minutes regularly. To discuss your needs and explore these options, book a call with our partnership specialist using the (Calendly link)[https://calendly.com/d/yrv-cpn-ydd/rask-ai-enterprise-call]`,
    isParsingRequire: true,
  },

  {
    question: `How can you contact us?`,
    answer: `Support chat is available within the product for users with subscriptions. Alternatively, you can also send any questions to *info@rask.ai*`,
    isParsingRequire: true,
  },
];
