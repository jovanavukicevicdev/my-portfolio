import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .nonempty('Name is required')
    .refine((value) => value.trim() !== '', 'Name cannot be only whitespace'),
  email: z.string().nonempty('Email is required').email({ message: 'Email is invalid' }),
  subject: z
    .string()
    .nonempty('Subject is required')
    .refine((value) => value.trim() !== '', 'Subject cannot be only whitespace'),
  message: z
    .string()
    .nonempty('Message is required')
    .refine((value) => value.trim() !== '', 'Message cannot be only whitespace'),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const contactDefaultValues = {
  email: '',
  name: '',
  subject: '',
  message: '',
};
