import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.html',
  styleUrl: './faq.css'
})
export class Faq {
  faqs: FaqItem[] = [
    {
      question: 'How does the Insurance on Wheel process work?',
      answer: 'Fill out our detailed form with your Insurance on Wheel details and requirements. We securely process your data and connect you with trusted insurance providers who will provide personalized quotes.',
      isOpen: false
    },
    {
      question: 'Is my personal information safe?',
      answer: 'Yes, we take privacy seriously. Your information is encrypted and only shared with trusted insurance providers we have verified.',
      isOpen: false
    },
    {
      question: 'How do you select insurance providers?',
      answer: 'We partner only with experienced, licensed Insurance on Wheel companies who have proven track records, positive customer reviews, and meet our quality standards. All providers are verified and regulated.',
      isOpen: false
    },
    {
      question: 'How long does it take to get quotes?',
      answer: 'Most customers receive initial quotes within 24-48 hours. The exact timeline depends on your location and the details provided.',
      isOpen: false
    },
    {
      question: 'What types of Insurance on Wheel coverage do you offer quotes for?',
      answer: 'We provide quotes for all major Insurance on Wheel coverage types including liability, collision, comprehensive, personal injury protection, and uninsured/underinsured motorist coverage.',
      isOpen: false
    },

    {
      question: 'What if I\'m not satisfied with the quotes?',
      answer: 'If you\'re not satisfied with the quotes received, you can request additional providers or modify your details. We\'re committed to finding the right match for your needs.',
      isOpen: false
    },
    {
      question: 'How do I choose the right insurance provider?',
      answer: 'Consider factors like licensing, financial stability, customer service ratings, claim settlement history, and coverage options. We provide provider profiles to help you make an informed decision.',
      isOpen: false
    },
    {
      question: 'What information do I need to provide?',
      answer: 'Basic details such as your location, vehicle information, driving history, coverage preferences, and any specific requirements. More details help providers provide accurate quotes.',
      isOpen: false
    }
  ];

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}