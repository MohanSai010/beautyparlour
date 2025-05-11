import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'telugu' | 'english';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  translate: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  telugu: {
    home: 'హోమ్',
    services: 'సేవలు',
    gallery: 'గ్యాలరీ',
    products: 'ప్రొడక్ట్స్',
    contact: 'కాంటాక్ట్',
    booking: 'బుకింగ్',
    welcomeHeading: 'స్నేహ బ్యూటీ పార్లర్‌కి స్వాగతం',
    welcomeSubheading: 'మీ అందానికి పూర్తి సంరక్షణ',
    bookNow: 'ఇప్పుడే బుక్ చేయండి',
    exploreServices: 'సేవలను అన్వేషించండి',
    aboutUs: 'మా గురించి',
    aboutUsDescription: 'స్నేహ బ్యూటీ పార్లర్ మహిళల అందాన్ని మెరుగుపరిచేందుకు అంకితమైంది. మేము అత్యాధునిక పరికరాలు మరియు నాణ్యమైన ఉత్పత్తులను ఉపయోగిస్తాము.',
    ourServices: 'మా సేవలు',
    testimonials: 'టెస్టిమోనియల్స్',
    latestProducts: 'తాజా ప్రొడక్ట్స్',
    contactUs: 'మమ్మల్ని సంప్రదించండి',
    address: 'చిరునామా',
    phoneNumber: 'ఫోన్ నంబర్',
    email: 'ఇమెయిల్',
    sendMessage: 'సందేశం పంపండి',
    copyright: 'కాపీరైట్ © 2025 స్నేహ బ్యూటీ పార్లర్. అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.',
    // Services
    facial: 'ఫేషియల్',
    manicure: 'మేనిక్యూర్',
    mehendi: 'మెహందీ',
    hairStyles: 'హెయిర్ స్టైల్స్',
    eyebrows: 'ఐబ్రోస్',
    hairCut: 'హెయిర్ కట్',
    makeup: 'మేకప్',
    bodyMassage: 'బాడీ మసాజ్',
    // Form fields
    name: 'పేరు',
    message: 'సందేశం',
    submit: 'సబ్మిట్',
    // Booking
    selectDate: 'తేదీని ఎంచుకోండి',
    selectTime: 'సమయాన్ని ఎంచుకోండి',
    selectService: 'సేవను ఎంచుకోండి',
    confirmBooking: 'బుకింగ్‌ని నిర్ధారించండి',
  },
  english: {
    home: 'Home',
    services: 'Services',
    gallery: 'Gallery',
    products: 'Products',
    contact: 'Contact',
    booking: 'Booking',
    welcomeHeading: 'Welcome to Sneha Beauty Parlour',
    welcomeSubheading: 'Complete care for your beauty',
    bookNow: 'Book Now',
    exploreServices: 'Explore Services',
    aboutUs: 'About Us',
    aboutUsDescription: 'Sneha Beauty Parlour is dedicated to enhancing the beauty of women. We use state-of-the-art equipment and quality products.',
    ourServices: 'Our Services',
    testimonials: 'Testimonials',
    latestProducts: 'Latest Products',
    contactUs: 'Contact Us',
    address: 'Address',
    phoneNumber: 'Phone Number',
    email: 'Email',
    sendMessage: 'Send Message',
    copyright: 'Copyright © 2025 Sneha Beauty Parlour. All rights reserved.',
    // Services
    facial: 'Facial',
    manicure: 'Manicure',
    mehendi: 'Mehendi',
    hairStyles: 'Hair Styles',
    eyebrows: 'Eyebrows',
    hairCut: 'Hair Cut',
    makeup: 'Makeup',
    bodyMassage: 'Body Massage',
    // Form fields
    name: 'Name',
    message: 'Message',
    submit: 'Submit',
    // Booking
    selectDate: 'Select Date',
    selectTime: 'Select Time',
    selectService: 'Select Service',
    confirmBooking: 'Confirm Booking',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('telugu');

  const translate = (key: string): string => {
    return translations[language][key as keyof typeof translations.telugu] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};