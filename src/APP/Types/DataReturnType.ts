export type DataReturnType = {
  id: string;
  title: string;
  description?: string | null;
  alternatives: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
  correct_alternative: string;
};
