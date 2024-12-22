export type QuestionType = {
  id: string;
  title: string;
  description?: string | null;
  alternativeA: string;
  alternativeB: string;
  alternativeC: string;
  alternativeD: string;
  correctAlternative: string;
  createdAt: Date;
  updatedAt: Date;
};