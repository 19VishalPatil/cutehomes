export type ActionFunction<T extends FormState = FormState> = (
  prevState: T,
  formData: FormData
) => Promise<T>;

export interface FormState {
  message?: string;
  error?: string | Record<string, string[]>;
}
