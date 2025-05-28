export interface IFAQ {
  data: {
    title: string;
    subtitle: string;
    faqItem: IFAQItem[];
  };
}

interface IFAQItem {
  id: number;
  answer: string;
  question: string;
}
