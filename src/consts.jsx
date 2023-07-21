import { PlanFeatureIconKey } from './service-consts';

export const PRICING_PLANS_FEATURES = {
  basic: [
    {
      description: `Automated AI voiceover: *25 minutes* for dubbing are included (monthly)`,
      iconKey: PlanFeatureIconKey.voice,
      tooltipText: `1 minute of AI voiceover is equal to 1 min of final translated video. For example, if you have a five-minute video that needs to be translated into two new languages, you will need 10 minutes of voiceover.`,
      hasHighlitedText: true,
    },
    {
      description: `Translate your video & audio into 60+ languages`,
      iconKey: PlanFeatureIconKey.translate,
    },
    {
      description: `Automated speech-to-text transcription`,
      iconKey: PlanFeatureIconKey.textInput,
    },
    {
      description: `Automated machine translation`,
      iconKey: PlanFeatureIconKey.translate,
    },
    {
      description: `You can add extra voiceover minutes for $1/min`,
      iconKey: PlanFeatureIconKey.starsExtra,
    },
    {
      description: `Voice Cloning for 8 languages (English, Portuguese, French, Spanish, Italian, German, Polish, Hindi)`,
      iconKey: PlanFeatureIconKey.grid,
    },
  ],
  pro: [
    {
      description: `Automated AI voiceover: *100 minutes* for dubbing are included (monthly)`,
      iconKey: PlanFeatureIconKey.voice,
      tooltipText: `1 minute of AI voiceover is equal to 1 min of final translated video. For example, if you have a five-minute video that needs to be translated into two new languages, you will need 10 minutes of voiceover.`,
      hasHighlitedText: true,
    },
    {
      description: `Translate your video & audio into 60+ languages`,
      iconKey: PlanFeatureIconKey.translate,
    },
    {
      description: `Automated speech-to-text transcription`,
      iconKey: PlanFeatureIconKey.textInput,
    },
    {
      description: `Automated machine translation`,
      iconKey: PlanFeatureIconKey.translate,
    },
    {
      description: `You can add extra voiceover minutes for $1/min`,
      iconKey: PlanFeatureIconKey.starsExtra,
    },
    {
      description: `Voice Cloning for 8 languages (English, Portuguese, French, Spanish, Italian, German, Polish, Hindi)`,
      iconKey: PlanFeatureIconKey.grid,
    },

    // pro-plan features
    {
      description: `*AI-rewriter for shorten fast speech.*`,
      iconKey: PlanFeatureIconKey.translate,
      link: `https://intercom.help/rask/en/articles/8155373-what-is-ai-rewriter-feature`,
      hasHighlitedText: true,
    },
    //TODO: эти фичи пока не доступны
    // {
    //   description: `*SRT upload support.*`,
    //   iconKey: PlanFeatureIconKey.file,
    //   link: `https://intercom.help/rask/en/articles/8155405-what-is-srt-upload-support`,
    //   hasHighlitedText: true,
    // },
    // {
    //   description: `*Multilingual projects: translate into up to 3 languages at once.*`,
    //   iconKey: PlanFeatureIconKey.starsExtra,
    //   link: `https://intercom.help/rask/en/articles/8155410-introducing-the-multilingual-projects-feature`,
    //   hasHighlitedText: true,
    // },
  ],
  business: [
    {
      description: `Automated AI voiceover: *500 minutes* for dubbing are included (monthly)`,
      iconKey: PlanFeatureIconKey.voice,
      tooltipText: `1 minute of AI voiceover is equal to 1 min of final translated video. For example, if you have a five-minute video that needs to be translated into two new languages, you will need 10 minutes of voiceover.`,
      hasHighlitedText: true,
    },
    {
      description: `Translate your video & audio into 60+ languages`,
      iconKey: PlanFeatureIconKey.translate,
    },
    {
      description: `Automated speech-to-text transcription`,
      iconKey: PlanFeatureIconKey.textInput,
    },
    {
      description: `Automated machine translation`,
      iconKey: PlanFeatureIconKey.translate,
    },
    {
      description: `You can add extra voiceover minutes for $1/min`,
      iconKey: PlanFeatureIconKey.starsExtra,
    },
    {
      description: `Voice Cloning for 8 languages (English, Portuguese, French, Spanish, Italian, German, Polish, Hindi)`,
      iconKey: PlanFeatureIconKey.grid,
    },

    // business-plan features
    {
      description: `*AI-rewriter for shorten fast speech.*`,
      iconKey: PlanFeatureIconKey.translate,
      link: `https://intercom.help/rask/en/articles/8155373-what-is-ai-rewriter-feature`,
      hasHighlitedText: true,
    },
    //TODO: эти фичи пока не доступны
    // {
    //   description: `*SRT upload support.*`,
    //   iconKey: PlanFeatureIconKey.file,
    //   link: `https://intercom.help/rask/en/articles/8155405-what-is-srt-upload-support`,
    //   hasHighlitedText: true,
    // },
    // {
    //   description: `*Multilingual projects: translate into up to 3 languages at once.*`,
    //   iconKey: PlanFeatureIconKey.starsExtra,
    //   link: `https://intercom.help/rask/en/articles/8155410-introducing-the-multilingual-projects-feature`,
    //   hasHighlitedText: true,
    // },
    {
      description: `*Early access to Lip Sync feature soon*`,
      iconKey: PlanFeatureIconKey.checkMark,
      hasHighlitedText: true,
    },
  ],
  enterprise: [
    {
      description: `*All Business features are included*`,
      iconKey: PlanFeatureIconKey.checkMark,
      hasHighlitedText: true,
    },
    {
      description: `*Custom price for minutes*`,
      iconKey: PlanFeatureIconKey.checkMark,
      hasHighlitedText: true,
    },
    {
      description: `*API access*`,
      iconKey: PlanFeatureIconKey.checkMark,
      hasHighlitedText: true,
    },
    {
      description: `*Custom features*`,
      iconKey: PlanFeatureIconKey.checkMark,
      hasHighlitedText: true,
    },
    {
      description: `*Personal Customer Manager*`,
      iconKey: PlanFeatureIconKey.checkMark,
      hasHighlitedText: true,
    },
  ],
};

export const FAQ_ITEMS = [
  {
    question: `What are the main features of Rask?`,
    answer: `*Automated speech-to-text and translation:* Create a transcript, translation, and voice-over for your video.
      *Voice cloning:* Copy the voice from the original video to the translated version.
      *Multiple speakers:* Assign a unique voice to each speaker in the video.
      *Subtitles:* Download the transcript and translation in SRT format.
      *AI rewriting:* Adjust the speed of speech by rewriting segments that are too long or too short in the translation.`,
    hasBoldText: true,
  },

  {
    question: `How many languages do you currently support?`,
    answer: `With Rask AI, you can translate from nearly any language to over 60 languages. Our Voice Cloning feature offers a human-like experience and is currently available when dubbing from any source language to the following 8 languages: English, German, Polish, Spanish, Italian, French, Portuguese, and Hindi.`,
  },

  {
    question: `What does a minute of voiceover (dubbing) refer to?`,
    answer: `One minute of voiceover equals one minute of your video's or audio's duration. By purchasing a subscription, you gain access to our service. Depending on your pricing plan, you will automatically receive a specific number of minutes added to your account every month. We charge minutes from your balance each time you click the "Dub video" button. For example, if you have a five-minute video that needs to be translated into two new languages, you will need 10 minutes of voiceover.`,
  },

  {
    question: `Can other info be added to an invoice?`,
    answer: `The number of minutes required for the AI dubbing tool depends on your specific needs.If you are interested in testing our product or dubbing short videos for platforms like TikTok or Reels, the 25 minutes included in the Basic plan might be sufficient for you.
    If you plan to dub several videos with durations of 10-20 minutes within a month, the Pro Plan with 100 minutes could be a suitable choice for your needs.
    For those who produce a large number of videos per month, the Business plan, offering 500 minutes, might be more suitable.
    Please keep in mind that if you run out of the allotted minutes, you have the option to purchase additional minutes at a rate of $1 per minute.`,
  },

  {
    question: `Do you provide a free trial?`,
    answer: `Yes, we provide a free trial. During the trial period, you have the opportunity to upload up to 4 videos and receive a 1-minute clip from each of them. Additionally, if you complete the "tell us about yourself" survey, you can receive 2 additional videos to try out the dubbing capabilities of our tool.`,
  },

  {
    question: `Is it a one-time payment or a recurring payment?`,
    answer: `We offer two types of subscriptions: monthly and annual. The monthly subscription involves a recurring payment that is billed every month. The annual subscription is a recurring payment that is billed annually and automatically renews each year.`,
  },

  {
    question: `Can I modify my plan?`,
    answer: `Yes, you have the option to modify your plan in Rask. To upgrade your subscription, you can click on the circle in the right corner and follow these steps: "Manage Subscription" -> "Manage Subscription" -> "Upgrade". This will enable you to make changes to your current plan and select a different subscription tier that better aligns with your needs.`,
  },

  {
    question: `Can I cancel my subscription anytime?`,
    answer: `Yes, you can cancel your subscription anytime for the AI dubbing tool product. To initiate the cancellation process, you can click on the circle located in the right corner, then select the "Manage Subscription" option, and choose to cancel your subscription.`,
  },

  {
    question: `What is your refund policy?`,
    answer: `We are committed to refunding the minutes you have used if the creation of your video failed to complete due to a technical error on our end. To request a refund of minutes, please contact our support service. We will review your request, and if it is confirmed that there was a technical error on our end, we will return the used minutes to your account.

    Please note that refunds are not provided in the following cases:

    •  More than 25% of the subscription plan has been used.
    •  More than 14 days have passed since the activation of the subscription.
    •  The client received an expected, technically high-quality result but simply changed their mind about using the service.

    Each refund request will be considered individually. You can learn more about our refund policy in our terms of service by following this link: [https://www.rask.ai/terms-of-service]`,
    hasLink: true,
  },

  {
    question: `What payment methods do you accept?`,
    answer: `We support various payment methods, including credit/debit cards (Visa, Mastercard, American Express, UnionPay, and others), as well as payments through Cash App. All payments are securely processed through Stripe, a trusted payment platform.`,
  },

  {
    question: `How can I obtain a receipt for my transaction and include company information on it?`,
    answer: `The invoices are automatically sent to your email after the payment is processed. You can learn how to make adjustments to your future invoices by following this link: [https://intercom.help/rask/en/articles/8159139-i-need-to-add-information-about-my-company-to-the-invoice].
    If you need to make changes to invoices that were created in the past, please contact us via the support chat, and we will assist you with the necessary modifications.`,
    hasLink: true,
  },

  {
    question: `How do you ensure the security of my payment information?`,
    answer: `We take the security of our customers' payment information very seriously. To ensure that your payment information is protected, we use Stripe, one of the world's leading payment processors. Stripe is certified as a PCI Level 1 Service Provider, the highest level of security certification in the payment industry.
    Stripe encrypts your payment information using industry-standard SSL/TLS technology and stores it on their secure servers. We never store any payment information on our own servers.
    By using Stripe, we can ensure that your payment information is always safe and secure.`,
  },

  {
    question: `What does the free trial version of the product include?`,
    answer: `By purchasing a subscription, you gain access to our service. Depending on your pricing plan, you will receive a specific number of minutes added to your account automatically every month. We offer two types of subscriptions: monthly and annual. Currently, we have four pricing plans available.`,
  },

  {
    question: `Are there any limitations on the duration and size of uploaded videos?`,
    answer: `For users with subscriptions, there are no specific limitations on the duration and size of uploaded videos. However, if you encounter any issues with videos longer than 1 hour, we recommend dividing them into two parts and translating them separately. This approach ensures smoother processing and helps maintain optimal performance.`,
  },

  {
    question: `What should I do if 500 minutes per month are not sufficient for my needs?`,
    answer: `Our regular pricing plans provide up to 500 minutes per month. If you need more minutes, you can buy them for $1 each. If you require a larger volume of minutes on a regular basis, we can create a custom plan just for you. To discuss your needs and explore these options, book a call with our partnership specialist using the Calendly link: [https://calendly.com/julia-agnes]`,
    hasLink: true,
  },

  {
    question: `How can you contact us?`,
    answer: `Support chat is available within the product for users with subscriptions. Alternatively, you can also send any questions to info@rask.ai.`,
  },
];
