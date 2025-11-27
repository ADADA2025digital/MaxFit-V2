// Gallery Images Data
import gallery1 from '../assets/Images/gallery-1.jpg';
import gallery2 from '../assets/Images/gallery-2.jpg';
import gallery3 from '../assets/Images/gallery-3.jpg';
import gallery4 from '../assets/Images/gallery-4.jpg';
import gallery5 from '../assets/Images/gallery-5.jpg';
import gallery6 from '../assets/Images/gallery-6.jpg';

// Review Data
import author1 from '../assets/Images/author-1.jpg';
import author2 from '../assets/Images/author-2.jpg';
import author3 from '../assets/Images/author-3.jpg';
import author4 from '../assets/Images/author-4.jpg';

import pain1 from '../assets/Images/icon-need-attention-1.svg'
import pain2 from '../assets/Images/icon-need-attention-2.svg'
import pain3 from '../assets/Images/icon-need-attention-3.svg'
import pain4 from '../assets/Images/icon-need-attention-4.svg'
import pain5 from '../assets/Images/icon-need-attention-5.svg'
import pain6 from '../assets/Images/icon-need-attention-6.svg'
import pain7 from '../assets/Images/icon-need-attention-7.svg'
import pain8 from '../assets/Images/icon-need-attention-8.svg'
import pain9 from '../assets/Images/icon-need-attention-9.svg'

// Blog Images Data
import post1 from '../assets/Images/post-1.jpg';
import post2 from '../assets/Images/post-2.jpg';
import post3 from '../assets/Images/post-3.jpg';

// Hero Icons Data
import IconHero1 from '../assets/Images/icon-1.svg';
import IconHero2 from '../assets/Images/icon-2.svg';
import IconHero3 from '../assets/Images/icon-3.svg';

export const galleryData = [
  {
    id: 1,
    image: gallery1,
    alt: "Gallery 1"
  },
  {
    id: 2,
    image: gallery2,
    alt: "Gallery 2"
  },
  {
    id: 3,
    image: gallery3,
    alt: "Gallery 3"
  },
  {
    id: 4,
    image: gallery4,
    alt: "Gallery 4"
  },
  {
    id: 5,
    image: gallery5,
    alt: "Gallery 5"
  },
  {
    id: 6,
    image: gallery6,
    alt: "Gallery 6"
  }
];

// Statistics Banner Data
import iconSolutionCounter1 from '../assets/Images/icon-solution-counter-1.svg';
import iconSolutionCounter2 from '../assets/Images/icon-solution-counter-2.svg';
import iconSolutionCounter3 from '../assets/Images/icon-solution-counter-3.svg';
import iconSolutionCounter4 from '../assets/Images/icon-solution-counter-4.svg';
import Therapist from '../Pages/Therapist';

export const statisticsData = [
  {
    id: 1,
    icon: iconSolutionCounter1,
    targetValue: 78,
    suffix: "+",
    label: "skilled therapist"
  },
  {
    id: 2,
    icon: iconSolutionCounter2,
    targetValue: 98,
    suffix: "%",
    label: "success rate"
  },
  {
    id: 3,
    icon: iconSolutionCounter3,
    targetValue: 950,
    suffix: "+",
    label: "patients treated"
  }
];

// Data for statistics banner
export const statisticsBannerData = [
  {
    id: 1,
    number: "500+",
    label: "Happy Patients",
    icon: iconSolutionCounter1
  },
  {
    id: 2,
    number: "25+",
    label: "Expert Therapists",
    icon: iconSolutionCounter2
  },
  {
    id: 3,
    number: "15+",
    label: "Years Experience",
    icon: iconSolutionCounter3
  },
  {
    id: 4,
    number: "98%",
    label: "Success Rate",
    icon: iconSolutionCounter4
  }
];
// Pain Types Data for Need Attention Section
export const painTypesData = [
  {
    id: 1,
    icon: pain1,
    title: "Neck Pain",
    alt: "Neck Pain"
  },
  {
    id: 2,
    icon: pain2,
    title: "Shoulder Pain",
    alt: "Shoulder Pain"
  },
  {
    id: 3,
    icon: pain3,
    title: "Hip Pain",
    alt: "Hip Pain"
  },
  {
    id: 4,
    icon: pain4,
    title: "Knee Pain",
    alt: "Knee Pain"
  },
  {
    id: 5,
    icon: pain5,
    title: "Elbow Pain",
    alt: "Elbow Pain"
  },
  {
    id: 6,
    icon: pain6 ,
    title: "Tricep Pain",
    alt: "Tricep Pain"
  },
  {
    id: 7,
    icon: pain7,
    title: "Hand Pain",
    alt: "Hand Pain"
  },
  {
    id: 8,
    icon: pain8,
    title: "Foot Pain",
    alt: "Foot Pain"
  },
  {
    id: 9,
    icon: pain9,
    title: "Ankle Pain",
    alt: "Ankle Pain"
  }
];

// Scrolling Info Data
export const scrollingInfoData = [
  {
    id: 1,
    text: "Book Appointment: (+01) 879 678 678 567"
  },
  {
    id: 2,
    text: "Working Hours: Mon to Fri 10:00 To 6:00"
  },
  {
    id: 3,
    text: "Emergency No: (+01) 879 678 678 567"
  },
  {
    id: 4,
    text: "For Any Additional Inquiries: info@domainname.com"
  }
];
// Page Banner Data
export const pageBannerData = {
  home: {
    breadcrumb: {
      home: "Home",
      current: "Home"
    },
    pageTitle: "Welcome to MaxFit Physiotherapy",
    bannerSubtitle: "Your trusted partner in physical wellness and recovery",
    bannerDescription: "Experience world-class physiotherapy services with our expert team of therapists dedicated to your health and well-being."
  },
  about: {
    breadcrumb: {
      home: "Home",
      current: "About Us"
    },
    pageTitle: "About Us",

  },
  contact: {
    breadcrumb: {
      home: "Home",
      current: "Contact Us"
    },
    pageTitle: "Contact Us",

  },
  blog: {
    breadcrumb: {
      home: "Home",
      current: "Blog"
    },
    pageTitle: "Blog",

  },
  therapist: {
    breadcrumb: {
      home: "Home",
      current: "Our Therapist"
    },
    pageTitle: "Dr. Emily Brown",

  }
};

// Review Data
export const reviewData = [
  {
    id: 1,
    reviewText: "The physiotherapy sessions at MaxFit have been life-changing. The therapists are incredibly knowledgeable and caring. My back pain has significantly improved after just a few sessions.",
    profileImg: author1,
    name: "Sarah Johnson",
    work: "Marketing Manager"
  },
  {
    id: 2,
    reviewText: "Excellent service and professional staff. They helped me recover from my sports injury much faster than expected. The personalized treatment plan made all the difference.",
    profileImg: author2,
    name: "Michael Chen",
    work: "Software Engineer"
  },
  {
    id: 3,
    reviewText: "I've been coming to MaxFit for over a year now. The team is amazing and the facilities are top-notch. Highly recommend their services to anyone needing physiotherapy.",
    profileImg: author3,
    name: "Emily Rodriguez",
    work: "Teacher"
  },
  {
    id: 4,
    reviewText: "Outstanding care and attention to detail. The therapists took time to understand my specific needs and created a treatment plan that worked perfectly for me.",
    profileImg: author4,
    name: "David Thompson",
    work: "Business Owner"
  },


];

export const blogData = [
  {
    id: 1,
    image: post1,
    alt: "Physiotherapy benefits",
    title: "10 Essential Benefits of Regular Physiotherapy",
    readMoreText: "Read More",
    category: "Health & Wellness",
    para1: "Physiocare encompasses a range of specialized therapies and treatments aimed at restoring physical function, alleviating pain, and promoting overall wellness. It combines elements of physiotherapy, chiropractic care, and rehabilitative exercises to address musculoskeletal issues, injuries, and chronic conditions.",
    para2: "Central to physiocare is the hands-on approach of physiotherapists and chiropractors who assess, diagnose, and treat patients using manual techniques such as joint mobilization, soft tissue manipulation, and corrective exercises. These professionals tailor treatment plans to individual needs, considering factors like age, medical history, and specific goals for recovery.",
    para3: "Physiocare blends advanced therapies with personalized attention to enhance mobility, alleviate pain, and promote holistic wellness. It integrates manual techniques, modalities like ultrasound and electrical stimulation.",
    para4: "Physiocare often includes modalities like ultrasound, electrical stimulation, and heat therapy to complement manual techniques and enhance healing. It focuses not only on symptom relief but also on correcting underlying issues to prevent recurrence and improve long-term function.",
    subtitle: "We understand injuries and pain happen unexpectedly.",
    list1: "Physiocare offers customized rehabilitation programs tailored.",
    list2: "Highly trained and certified physiotherapists provide expert care.",
    list3: "Physiotherapy techniques effectively manage and reduce pain without relying.",
    list4: "Specialized programs are available to aid in quicker and safer recovery.",
    list5: "argeted therapy for athletes to recover from sports injuries.",
    para5: "Education and guidance are integral Components of physiocare, empowering patients with knowledge about their conditions and teaching them self-management techniques to maintain progress between sessions.",
    para6: "This combination of benefits makes yoga a Yoga offers a wide array of benefits that encompass versatile and accessible practice, suitable for individuals of all ages and fitness levels, contributing to a healthier, more fulfilled life.In essence, physiocare is a holistic approach to health that promotes mobility, reduces pain, and enhances overall quality of life through personalized, evidence-based treatments and comprehensive patient education."
  },
  {
    id: 2,
    image: post2,
    alt: "Choosing physiotherapist",
    title: "How to Choose the Right Physiotherapist for You",
    readMoreText: "Read More",
    category: "Healthcare Tips",
    para1: "Physiocare encompasses a range of specialized therapies and treatments aimed at restoring physical function, alleviating pain, and promoting overall wellness. It combines elements of physiotherapy, chiropractic care, and rehabilitative exercises to address musculoskeletal issues, injuries, and chronic conditions.",
    para2: "Central to physiocare is the hands-on approach of physiotherapists and chiropractors who assess, diagnose, and treat patients using manual techniques such as joint mobilization, soft tissue manipulation, and corrective exercises. These professionals tailor treatment plans to individual needs, considering factors like age, medical history, and specific goals for recovery.",
    para3: "Physiocare blends advanced therapies with personalized attention to enhance mobility, alleviate pain, and promote holistic wellness. It integrates manual techniques, modalities like ultrasound and electrical stimulation.",
    para4: "Physiocare often includes modalities like ultrasound, electrical stimulation, and heat therapy to complement manual techniques and enhance healing. It focuses not only on symptom relief but also on correcting underlying issues to prevent recurrence and improve long-term function.",
    subtitle: "We understand injuries and pain happen unexpectedly.",
    list1: "Physiocare offers customized rehabilitation programs tailored.",
    list2: "Highly trained and certified physiotherapists provide expert care.",
    list3: "Physiotherapy techniques effectively manage and reduce pain without relying.",
    list4: "Specialized programs are available to aid in quicker and safer recovery.",
    list5: "argeted therapy for athletes to recover from sports injuries.",
    para5: "Education and guidance are integral Components of physiocare, empowering patients with knowledge about their conditions and teaching them self-management techniques to maintain progress between sessions.",
    para6: "This combination of benefits makes yoga a Yoga offers a wide array of benefits that encompass versatile and accessible practice, suitable for individuals of all ages and fitness levels, contributing to a healthier, more fulfilled life.In essence, physiocare is a holistic approach to health that promotes mobility, reduces pain, and enhances overall quality of life through personalized, evidence-based treatments and comprehensive patient education."
  },
  {
    id: 3,
    image: post3,
    alt: "Correct posture importance",
    title: "Importance of Correct Posture and How to Improve It",
    readMoreText: "Read More",
    category: "Posture & Ergonomics",
    para1: "Physiocare encompasses a range of specialized therapies and treatments aimed at restoring physical function, alleviating pain, and promoting overall wellness. It combines elements of physiotherapy, chiropractic care, and rehabilitative exercises to address musculoskeletal issues, injuries, and chronic conditions.",
    para2: "Central to physiocare is the hands-on approach of physiotherapists and chiropractors who assess, diagnose, and treat patients using manual techniques such as joint mobilization, soft tissue manipulation, and corrective exercises. These professionals tailor treatment plans to individual needs, considering factors like age, medical history, and specific goals for recovery.",
    para3: "Physiocare blends advanced therapies with personalized attention to enhance mobility, alleviate pain, and promote holistic wellness. It integrates manual techniques, modalities like ultrasound and electrical stimulation.",
    para4: "Physiocare often includes modalities like ultrasound, electrical stimulation, and heat therapy to complement manual techniques and enhance healing. It focuses not only on symptom relief but also on correcting underlying issues to prevent recurrence and improve long-term function.",
    subtitle: "We understand injuries and pain happen unexpectedly.",
    list1: "Physiocare offers customized rehabilitation programs tailored.",
    list2: "Highly trained and certified physiotherapists provide expert care.",
    list3: "Physiotherapy techniques effectively manage and reduce pain without relying.",
    list4: "Specialized programs are available to aid in quicker and safer recovery.",
    list5: "argeted therapy for athletes to recover from sports injuries.",
    para5: "Education and guidance are integral Components of physiocare, empowering patients with knowledge about their conditions and teaching them self-management techniques to maintain progress between sessions.",
    para6: "This combination of benefits makes yoga a Yoga offers a wide array of benefits that encompass versatile and accessible practice, suitable for individuals of all ages and fitness levels, contributing to a healthier, more fulfilled life.In essence, physiocare is a holistic approach to health that promotes mobility, reduces pain, and enhances overall quality of life through personalized, evidence-based treatments and comprehensive patient education."
  },
  {
    id: 4,
    image: post1,
    alt: "Physiotherapy benefits",
    title: "10 Essential Benefits of Regular Physiotherapy",
    readMoreText: "Read More",
    category: "Health & Wellness",
    para1: "Physiocare encompasses a range of specialized therapies and treatments aimed at restoring physical function, alleviating pain, and promoting overall wellness. It combines elements of physiotherapy, chiropractic care, and rehabilitative exercises to address musculoskeletal issues, injuries, and chronic conditions.",
    para2: "Central to physiocare is the hands-on approach of physiotherapists and chiropractors who assess, diagnose, and treat patients using manual techniques such as joint mobilization, soft tissue manipulation, and corrective exercises. These professionals tailor treatment plans to individual needs, considering factors like age, medical history, and specific goals for recovery.",
    para3: "Physiocare blends advanced therapies with personalized attention to enhance mobility, alleviate pain, and promote holistic wellness. It integrates manual techniques, modalities like ultrasound and electrical stimulation.",
    para4: "Physiocare often includes modalities like ultrasound, electrical stimulation, and heat therapy to complement manual techniques and enhance healing. It focuses not only on symptom relief but also on correcting underlying issues to prevent recurrence and improve long-term function.",
    subtitle: "We understand injuries and pain happen unexpectedly.",
    list1: "Physiocare offers customized rehabilitation programs tailored.",
    list2: "Highly trained and certified physiotherapists provide expert care.",
    list3: "Physiotherapy techniques effectively manage and reduce pain without relying.",
    list4: "Specialized programs are available to aid in quicker and safer recovery.",
    list5: "argeted therapy for athletes to recover from sports injuries.",
    para5: "Education and guidance are integral Components of physiocare, empowering patients with knowledge about their conditions and teaching them self-management techniques to maintain progress between sessions.",
    para6: "This combination of benefits makes yoga a Yoga offers a wide array of benefits that encompass versatile and accessible practice, suitable for individuals of all ages and fitness levels, contributing to a healthier, more fulfilled life.In essence, physiocare is a holistic approach to health that promotes mobility, reduces pain, and enhances overall quality of life through personalized, evidence-based treatments and comprehensive patient education."
  },
  {
    id: 5,
    image: post2,
    alt: "Choosing physiotherapist",
    title: "How to Choose the Right Physiotherapist for You",
    readMoreText: "Read More",
    category: "Healthcare Tips",
    para1: "Physiocare encompasses a range of specialized therapies and treatments aimed at restoring physical function, alleviating pain, and promoting overall wellness. It combines elements of physiotherapy, chiropractic care, and rehabilitative exercises to address musculoskeletal issues, injuries, and chronic conditions.",
    para2: "Central to physiocare is the hands-on approach of physiotherapists and chiropractors who assess, diagnose, and treat patients using manual techniques such as joint mobilization, soft tissue manipulation, and corrective exercises. These professionals tailor treatment plans to individual needs, considering factors like age, medical history, and specific goals for recovery.",
    para3: "Physiocare blends advanced therapies with personalized attention to enhance mobility, alleviate pain, and promote holistic wellness. It integrates manual techniques, modalities like ultrasound and electrical stimulation.",
    para4: "Physiocare often includes modalities like ultrasound, electrical stimulation, and heat therapy to complement manual techniques and enhance healing. It focuses not only on symptom relief but also on correcting underlying issues to prevent recurrence and improve long-term function.",
    subtitle: "We understand injuries and pain happen unexpectedly.",
    list1: "Physiocare offers customized rehabilitation programs tailored.",
    list2: "Highly trained and certified physiotherapists provide expert care.",
    list3: "Physiotherapy techniques effectively manage and reduce pain without relying.",
    list4: "Specialized programs are available to aid in quicker and safer recovery.",
    list5: "argeted therapy for athletes to recover from sports injuries.",
    para5: "Education and guidance are integral Components of physiocare, empowering patients with knowledge about their conditions and teaching them self-management techniques to maintain progress between sessions.",
    para6: "This combination of benefits makes yoga a Yoga offers a wide array of benefits that encompass versatile and accessible practice, suitable for individuals of all ages and fitness levels, contributing to a healthier, more fulfilled life.In essence, physiocare is a holistic approach to health that promotes mobility, reduces pain, and enhances overall quality of life through personalized, evidence-based treatments and comprehensive patient education."
  },
  {
    id: 6,
    image: post3,
    alt: "Correct posture importance",
    title: "Importance of Correct Posture and How to Improve It",
    readMoreText: "Read More",
    category: "Posture & Ergonomics",
    para1: "Physiocare encompasses a range of specialized therapies and treatments aimed at restoring physical function, alleviating pain, and promoting overall wellness. It combines elements of physiotherapy, chiropractic care, and rehabilitative exercises to address musculoskeletal issues, injuries, and chronic conditions.",
    para2: "Central to physiocare is the hands-on approach of physiotherapists and chiropractors who assess, diagnose, and treat patients using manual techniques such as joint mobilization, soft tissue manipulation, and corrective exercises. These professionals tailor treatment plans to individual needs, considering factors like age, medical history, and specific goals for recovery.",
    para3: "Physiocare blends advanced therapies with personalized attention to enhance mobility, alleviate pain, and promote holistic wellness. It integrates manual techniques, modalities like ultrasound and electrical stimulation.",
    para4: "Physiocare often includes modalities like ultrasound, electrical stimulation, and heat therapy to complement manual techniques and enhance healing. It focuses not only on symptom relief but also on correcting underlying issues to prevent recurrence and improve long-term function.",
    subtitle: "We understand injuries and pain happen unexpectedly.",
    list1: "Physiocare offers customized rehabilitation programs tailored.",
    list2: "Highly trained and certified physiotherapists provide expert care.",
    list3: "Physiotherapy techniques effectively manage and reduce pain without relying.",
    list4: "Specialized programs are available to aid in quicker and safer recovery.",
    list5: "argeted therapy for athletes to recover from sports injuries.",
    para5: "Education and guidance are integral Components of physiocare, empowering patients with knowledge about their conditions and teaching them self-management techniques to maintain progress between sessions.",
    para6: "This combination of benefits makes yoga a Yoga offers a wide array of benefits that encompass versatile and accessible practice, suitable for individuals of all ages and fitness levels, contributing to a healthier, more fulfilled life.In essence, physiocare is a holistic approach to health that promotes mobility, reduces pain, and enhances overall quality of life through personalized, evidence-based treatments and comprehensive patient education."
  },
  {
    id: 7,
    image: post1,
    alt: "Physiotherapy benefits",
    title: "10 Essential Benefits of Regular Physiotherapy",
    readMoreText: "Read More",
    category: "Health & Wellness",
    para1: "Physiocare encompasses a range of specialized therapies and treatments aimed at restoring physical function, alleviating pain, and promoting overall wellness. It combines elements of physiotherapy, chiropractic care, and rehabilitative exercises to address musculoskeletal issues, injuries, and chronic conditions.",
    para2: "Central to physiocare is the hands-on approach of physiotherapists and chiropractors who assess, diagnose, and treat patients using manual techniques such as joint mobilization, soft tissue manipulation, and corrective exercises. These professionals tailor treatment plans to individual needs, considering factors like age, medical history, and specific goals for recovery.",
    para3: "Physiocare blends advanced therapies with personalized attention to enhance mobility, alleviate pain, and promote holistic wellness. It integrates manual techniques, modalities like ultrasound and electrical stimulation.",
    para4: "Physiocare often includes modalities like ultrasound, electrical stimulation, and heat therapy to complement manual techniques and enhance healing. It focuses not only on symptom relief but also on correcting underlying issues to prevent recurrence and improve long-term function.",
    subtitle: "We understand injuries and pain happen unexpectedly.",
    list1: "Physiocare offers customized rehabilitation programs tailored.",
    list2: "Highly trained and certified physiotherapists provide expert care.",
    list3: "Physiotherapy techniques effectively manage and reduce pain without relying.",
    list4: "Specialized programs are available to aid in quicker and safer recovery.",
    list5: "argeted therapy for athletes to recover from sports injuries.",
    para5: "Education and guidance are integral Components of physiocare, empowering patients with knowledge about their conditions and teaching them self-management techniques to maintain progress between sessions.",
    para6: "This combination of benefits makes yoga a Yoga offers a wide array of benefits that encompass versatile and accessible practice, suitable for individuals of all ages and fitness levels, contributing to a healthier, more fulfilled life.In essence, physiocare is a holistic approach to health that promotes mobility, reduces pain, and enhances overall quality of life through personalized, evidence-based treatments and comprehensive patient education."
  },
  {
    id: 8,
    image: post2,
    alt: "Choosing physiotherapist",
    title: "How to Choose the Right Physiotherapist for You",
    readMoreText: "Read More",
    category: "Healthcare Tips",
    para1: "Physiocare encompasses a range of specialized therapies and treatments aimed at restoring physical function, alleviating pain, and promoting overall wellness. It combines elements of physiotherapy, chiropractic care, and rehabilitative exercises to address musculoskeletal issues, injuries, and chronic conditions.",
    para2: "Central to physiocare is the hands-on approach of physiotherapists and chiropractors who assess, diagnose, and treat patients using manual techniques such as joint mobilization, soft tissue manipulation, and corrective exercises. These professionals tailor treatment plans to individual needs, considering factors like age, medical history, and specific goals for recovery.",
    para3: "Physiocare blends advanced therapies with personalized attention to enhance mobility, alleviate pain, and promote holistic wellness. It integrates manual techniques, modalities like ultrasound and electrical stimulation.",
    para4: "Physiocare often includes modalities like ultrasound, electrical stimulation, and heat therapy to complement manual techniques and enhance healing. It focuses not only on symptom relief but also on correcting underlying issues to prevent recurrence and improve long-term function.",
    subtitle: "We understand injuries and pain happen unexpectedly.",
    list1: "Physiocare offers customized rehabilitation programs tailored.",
    list2: "Highly trained and certified physiotherapists provide expert care.",
    list3: "Physiotherapy techniques effectively manage and reduce pain without relying.",
    list4: "Specialized programs are available to aid in quicker and safer recovery.",
    list5: "argeted therapy for athletes to recover from sports injuries.",
    para5: "Education and guidance are integral Components of physiocare, empowering patients with knowledge about their conditions and teaching them self-management techniques to maintain progress between sessions.",
    para6: "This combination of benefits makes yoga a Yoga offers a wide array of benefits that encompass versatile and accessible practice, suitable for individuals of all ages and fitness levels, contributing to a healthier, more fulfilled life.In essence, physiocare is a holistic approach to health that promotes mobility, reduces pain, and enhances overall quality of life through personalized, evidence-based treatments and comprehensive patient education."
  },
  {
    id: 9,
    image: post3,
    alt: "Correct posture importance",
    title: "Importance of Correct Posture and How to Improve It",
    readMoreText: "Read More",
    category: "Posture & Ergonomics",
    para1: "Physiocare encompasses a range of specialized therapies and treatments aimed at restoring physical function, alleviating pain, and promoting overall wellness. It combines elements of physiotherapy, chiropractic care, and rehabilitative exercises to address musculoskeletal issues, injuries, and chronic conditions.",
    para2: "Central to physiocare is the hands-on approach of physiotherapists and chiropractors who assess, diagnose, and treat patients using manual techniques such as joint mobilization, soft tissue manipulation, and corrective exercises. These professionals tailor treatment plans to individual needs, considering factors like age, medical history, and specific goals for recovery.",
    para3: "Physiocare blends advanced therapies with personalized attention to enhance mobility, alleviate pain, and promote holistic wellness. It integrates manual techniques, modalities like ultrasound and electrical stimulation.",
    para4: "Physiocare often includes modalities like ultrasound, electrical stimulation, and heat therapy to complement manual techniques and enhance healing. It focuses not only on symptom relief but also on correcting underlying issues to prevent recurrence and improve long-term function.",
    subtitle: "We understand injuries and pain happen unexpectedly.",
    list1: "Physiocare offers customized rehabilitation programs tailored.",
    list2: "Highly trained and certified physiotherapists provide expert care.",
    list3: "Physiotherapy techniques effectively manage and reduce pain without relying.",
    list4: "Specialized programs are available to aid in quicker and safer recovery.",
    list5: "argeted therapy for athletes to recover from sports injuries.",
    para5: "Education and guidance are integral Components of physiocare, empowering patients with knowledge about their conditions and teaching them self-management techniques to maintain progress between sessions.",
    para6: "This combination of benefits makes yoga a Yoga offers a wide array of benefits that encompass versatile and accessible practice, suitable for individuals of all ages and fitness levels, contributing to a healthier, more fulfilled life.In essence, physiocare is a holistic approach to health that promotes mobility, reduces pain, and enhances overall quality of life through personalized, evidence-based treatments and comprehensive patient education."
  },
  {
    id: 10,
    image: post1,
    alt: "Physiotherapy benefits",
    title: "10 Essential Benefits of Regular Physiotherapy",
    readMoreText: "Read More",
    category: "Health & Wellness",
    para1: "Physiocare encompasses a range of specialized therapies and treatments aimed at restoring physical function, alleviating pain, and promoting overall wellness. It combines elements of physiotherapy, chiropractic care, and rehabilitative exercises to address musculoskeletal issues, injuries, and chronic conditions.",
    para2: "Central to physiocare is the hands-on approach of physiotherapists and chiropractors who assess, diagnose, and treat patients using manual techniques such as joint mobilization, soft tissue manipulation, and corrective exercises. These professionals tailor treatment plans to individual needs, considering factors like age, medical history, and specific goals for recovery.",
    para3: "Physiocare blends advanced therapies with personalized attention to enhance mobility, alleviate pain, and promote holistic wellness. It integrates manual techniques, modalities like ultrasound and electrical stimulation.",
    para4: "Physiocare often includes modalities like ultrasound, electrical stimulation, and heat therapy to complement manual techniques and enhance healing. It focuses not only on symptom relief but also on correcting underlying issues to prevent recurrence and improve long-term function.",
    subtitle: "We understand injuries and pain happen unexpectedly.",
    list1: "Physiocare offers customized rehabilitation programs tailored.",
    list2: "Highly trained and certified physiotherapists provide expert care.",
    list3: "Physiotherapy techniques effectively manage and reduce pain without relying.",
    list4: "Specialized programs are available to aid in quicker and safer recovery.",
    list5: "argeted therapy for athletes to recover from sports injuries.",
    para5: "Education and guidance are integral Components of physiocare, empowering patients with knowledge about their conditions and teaching them self-management techniques to maintain progress between sessions.",
    para6: "This combination of benefits makes yoga a Yoga offers a wide array of benefits that encompass versatile and accessible practice, suitable for individuals of all ages and fitness levels, contributing to a healthier, more fulfilled life.In essence, physiocare is a holistic approach to health that promotes mobility, reduces pain, and enhances overall quality of life through personalized, evidence-based treatments and comprehensive patient education."
  },
  {
    id: 11,
    image: post2,
    alt: "Choosing physiotherapist",
    title: "How to Choose the Right Physiotherapist for You",
    readMoreText: "Read More",
    category: "Healthcare Tips",
    para1: "Physiocare encompasses a range of specialized therapies and treatments aimed at restoring physical function, alleviating pain, and promoting overall wellness. It combines elements of physiotherapy, chiropractic care, and rehabilitative exercises to address musculoskeletal issues, injuries, and chronic conditions.",
    para2: "Central to physiocare is the hands-on approach of physiotherapists and chiropractors who assess, diagnose, and treat patients using manual techniques such as joint mobilization, soft tissue manipulation, and corrective exercises. These professionals tailor treatment plans to individual needs, considering factors like age, medical history, and specific goals for recovery.",
    para3: "Physiocare blends advanced therapies with personalized attention to enhance mobility, alleviate pain, and promote holistic wellness. It integrates manual techniques, modalities like ultrasound and electrical stimulation.",
    para4: "Physiocare often includes modalities like ultrasound, electrical stimulation, and heat therapy to complement manual techniques and enhance healing. It focuses not only on symptom relief but also on correcting underlying issues to prevent recurrence and improve long-term function.",
    subtitle: "We understand injuries and pain happen unexpectedly.",
    list1: "Physiocare offers customized rehabilitation programs tailored.",
    list2: "Highly trained and certified physiotherapists provide expert care.",
    list3: "Physiotherapy techniques effectively manage and reduce pain without relying.",
    list4: "Specialized programs are available to aid in quicker and safer recovery.",
    list5: "argeted therapy for athletes to recover from sports injuries.",
    para5: "Education and guidance are integral Components of physiocare, empowering patients with knowledge about their conditions and teaching them self-management techniques to maintain progress between sessions.",
    para6: "This combination of benefits makes yoga a Yoga offers a wide array of benefits that encompass versatile and accessible practice, suitable for individuals of all ages and fitness levels, contributing to a healthier, more fulfilled life.In essence, physiocare is a holistic approach to health that promotes mobility, reduces pain, and enhances overall quality of life through personalized, evidence-based treatments and comprehensive patient education."
  },
  {
    id: 12,
    image: post3,
    alt: "Correct posture importance",
    title: "Importance of Correct Posture and How to Improve It",
    readMoreText: "Read More",
    category: "Posture & Ergonomics",
    para1: "Physiocare encompasses a range of specialized therapies and treatments aimed at restoring physical function, alleviating pain, and promoting overall wellness. It combines elements of physiotherapy, chiropractic care, and rehabilitative exercises to address musculoskeletal issues, injuries, and chronic conditions.",
    para2: "Central to physiocare is the hands-on approach of physiotherapists and chiropractors who assess, diagnose, and treat patients using manual techniques such as joint mobilization, soft tissue manipulation, and corrective exercises. These professionals tailor treatment plans to individual needs, considering factors like age, medical history, and specific goals for recovery.",
    para3: "Physiocare blends advanced therapies with personalized attention to enhance mobility, alleviate pain, and promote holistic wellness. It integrates manual techniques, modalities like ultrasound and electrical stimulation.",
    para4: "Physiocare often includes modalities like ultrasound, electrical stimulation, and heat therapy to complement manual techniques and enhance healing. It focuses not only on symptom relief but also on correcting underlying issues to prevent recurrence and improve long-term function.",
    subtitle: "We understand injuries and pain happen unexpectedly.",
    list1: "Physiocare offers customized rehabilitation programs tailored.",
    list2: "Highly trained and certified physiotherapists provide expert care.",
    list3: "Physiotherapy techniques effectively manage and reduce pain without relying.",
    list4: "Specialized programs are available to aid in quicker and safer recovery.",
    list5: "argeted therapy for athletes to recover from sports injuries.",
    para5: "Education and guidance are integral Components of physiocare, empowering patients with knowledge about their conditions and teaching them self-management techniques to maintain progress between sessions.",
    para6: "This combination of benefits makes yoga a Yoga offers a wide array of benefits that encompass versatile and accessible practice, suitable for individuals of all ages and fitness levels, contributing to a healthier, more fulfilled life.In essence, physiocare is a holistic approach to health that promotes mobility, reduces pain, and enhances overall quality of life through personalized, evidence-based treatments and comprehensive patient education."
  },
  {
    id: 13,
    image: post1,
    alt: "Physiotherapy benefits",
    title: "10 Essential Benefits of Regular Physiotherapy",
    readMoreText: "Read More",
    category: "Health & Wellness",
    para1: "Physiocare encompasses a range of specialized therapies and treatments aimed at restoring physical function, alleviating pain, and promoting overall wellness. It combines elements of physiotherapy, chiropractic care, and rehabilitative exercises to address musculoskeletal issues, injuries, and chronic conditions.",
    para2: "Central to physiocare is the hands-on approach of physiotherapists and chiropractors who assess, diagnose, and treat patients using manual techniques such as joint mobilization, soft tissue manipulation, and corrective exercises. These professionals tailor treatment plans to individual needs, considering factors like age, medical history, and specific goals for recovery.",
    para3: "Physiocare blends advanced therapies with personalized attention to enhance mobility, alleviate pain, and promote holistic wellness. It integrates manual techniques, modalities like ultrasound and electrical stimulation.",
    para4: "Physiocare often includes modalities like ultrasound, electrical stimulation, and heat therapy to complement manual techniques and enhance healing. It focuses not only on symptom relief but also on correcting underlying issues to prevent recurrence and improve long-term function.",
    subtitle: "We understand injuries and pain happen unexpectedly.",
    list1: "Physiocare offers customized rehabilitation programs tailored.",
    list2: "Highly trained and certified physiotherapists provide expert care.",
    list3: "Physiotherapy techniques effectively manage and reduce pain without relying.",
    list4: "Specialized programs are available to aid in quicker and safer recovery.",
    list5: "argeted therapy for athletes to recover from sports injuries.",
    para5: "Education and guidance are integral Components of physiocare, empowering patients with knowledge about their conditions and teaching them self-management techniques to maintain progress between sessions.",
    para6: "This combination of benefits makes yoga a Yoga offers a wide array of benefits that encompass versatile and accessible practice, suitable for individuals of all ages and fitness levels, contributing to a healthier, more fulfilled life.In essence, physiocare is a holistic approach to health that promotes mobility, reduces pain, and enhances overall quality of life through personalized, evidence-based treatments and comprehensive patient education."
  },
  {
    id: 14,
    image: post2,
    alt: "Choosing physiotherapist",
    title: "How to Choose the Right Physiotherapist for You",
    readMoreText: "Read More",
    category: "Healthcare Tips",
    para1: "Physiocare encompasses a range of specialized therapies and treatments aimed at restoring physical function, alleviating pain, and promoting overall wellness. It combines elements of physiotherapy, chiropractic care, and rehabilitative exercises to address musculoskeletal issues, injuries, and chronic conditions.",
    para2: "Central to physiocare is the hands-on approach of physiotherapists and chiropractors who assess, diagnose, and treat patients using manual techniques such as joint mobilization, soft tissue manipulation, and corrective exercises. These professionals tailor treatment plans to individual needs, considering factors like age, medical history, and specific goals for recovery.",
    para3: "Physiocare blends advanced therapies with personalized attention to enhance mobility, alleviate pain, and promote holistic wellness. It integrates manual techniques, modalities like ultrasound and electrical stimulation.",
    para4: "Physiocare often includes modalities like ultrasound, electrical stimulation, and heat therapy to complement manual techniques and enhance healing. It focuses not only on symptom relief but also on correcting underlying issues to prevent recurrence and improve long-term function.",
    subtitle: "We understand injuries and pain happen unexpectedly.",
    list1: "Physiocare offers customized rehabilitation programs tailored.",
    list2: "Highly trained and certified physiotherapists provide expert care.",
    list3: "Physiotherapy techniques effectively manage and reduce pain without relying.",
    list4: "Specialized programs are available to aid in quicker and safer recovery.",
    list5: "argeted therapy for athletes to recover from sports injuries.",
    para5: "Education and guidance are integral Components of physiocare, empowering patients with knowledge about their conditions and teaching them self-management techniques to maintain progress between sessions.",
    para6: "This combination of benefits makes yoga a Yoga offers a wide array of benefits that encompass versatile and accessible practice, suitable for individuals of all ages and fitness levels, contributing to a healthier, more fulfilled life.In essence, physiocare is a holistic approach to health that promotes mobility, reduces pain, and enhances overall quality of life through personalized, evidence-based treatments and comprehensive patient education."
  },
  {
    id: 15,
    image: post3,
    alt: "Correct posture importance",
    title: "Importance of Correct Posture and How to Improve It",
    readMoreText: "Read More",
    category: "Posture & Ergonomics",
    para1: "Physiocare encompasses a range of specialized therapies and treatments aimed at restoring physical function, alleviating pain, and promoting overall wellness. It combines elements of physiotherapy, chiropractic care, and rehabilitative exercises to address musculoskeletal issues, injuries, and chronic conditions.",
    para2: "Central to physiocare is the hands-on approach of physiotherapists and chiropractors who assess, diagnose, and treat patients using manual techniques such as joint mobilization, soft tissue manipulation, and corrective exercises. These professionals tailor treatment plans to individual needs, considering factors like age, medical history, and specific goals for recovery.",
    para3: "Physiocare blends advanced therapies with personalized attention to enhance mobility, alleviate pain, and promote holistic wellness. It integrates manual techniques, modalities like ultrasound and electrical stimulation.",
    para4: "Physiocare often includes modalities like ultrasound, electrical stimulation, and heat therapy to complement manual techniques and enhance healing. It focuses not only on symptom relief but also on correcting underlying issues to prevent recurrence and improve long-term function.",
    subtitle: "We understand injuries and pain happen unexpectedly.",
    list1: "Physiocare offers customized rehabilitation programs tailored.",
    list2: "Highly trained and certified physiotherapists provide expert care.",
    list3: "Physiotherapy techniques effectively manage and reduce pain without relying.",
    list4: "Specialized programs are available to aid in quicker and safer recovery.",
    list5: "argeted therapy for athletes to recover from sports injuries.",
    para5: "Education and guidance are integral Components of physiocare, empowering patients with knowledge about their conditions and teaching them self-management techniques to maintain progress between sessions.",
    para6: "This combination of benefits makes yoga a Yoga offers a wide array of benefits that encompass versatile and accessible practice, suitable for individuals of all ages and fitness levels, contributing to a healthier, more fulfilled life.In essence, physiocare is a holistic approach to health that promotes mobility, reduces pain, and enhances overall quality of life through personalized, evidence-based treatments and comprehensive patient education."
  }
];

export const heroFeaturesData = [
  {
    id: 1,
    icon: IconHero1,
    alt: "Expert Therapists",
    title: "Expert Therapists",
    description: "Professional care from certified physiotherapists",
    hasBorder: true,
    marginClass: "ms-0 ms-md-0 p-4"
  },
  {
    id: 2,
    icon: IconHero2,
    alt: "Flexible Hours",
    title: "Emergency Service",
    description: "Professional care from certified physiotherapists ",
    hasBorder: true,
    marginClass: "ms-0 ms-md-4 p-4"
  },
  {
    id: 3,
    icon: IconHero3,
    alt: "Personalized Care",
    title: "Free Consultant",
    description: "Professional care from certified physiotherapists",
    hasBorder: false,
    marginClass: "ms-0 ms-md-4 p-4"
  }
];

// Why Us Section Data
export const whyUsLeftData = [
  {
    id: 1,
    icon: IconHero1,
    title: "Experienced Team",
    description: "We understand that injuries and acute \n pain can unexpectedly.",
    hasBorder: true,
    delay: 0
  },
  {
    id: 2,
    icon: IconHero2,
    title: "Modern Equipment",
    description: "We understand that injuries and acute \n pain can unexpectedly.",
    hasBorder: true,
    delay: 0.2
  },
  {
    id: 3,
    icon: IconHero3,
    title: "Personalized Care",
    description: "We understand that injuries and acute \n pain can unexpectedly.",
    hasBorder: false,
    delay: 0.4
  }
];

export const whyUsRightData = [
  {
    id: 1,
    icon: IconHero1,
    title: "Advanced Technology",
    description: "We understand that injuries and acute \n pain can unexpectedly.",
    hasBorder: true,
    delay: 0
  },
  {
    id: 2,
    icon: IconHero2,
    title: "Convenient And Accessible",
    description: "We understand that injuries and acute \n pain can unexpectedly.",
    hasBorder: true,
    delay: 0.2
  },
  {
    id: 3,
    icon: IconHero3,
    title: "Community Involvement",
    description: "We understand that injuries and acute \n pain can unexpectedly.",
    hasBorder: false,
    delay: 0.4
  }
];
