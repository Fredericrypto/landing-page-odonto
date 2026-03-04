'use server';
/**
 * @fileOverview An AI assistant for the 'Sorriso Perfeito Blumenau' dental clinic.
 *
 * - aiServiceAssistant - A function that handles user questions about dental treatments.
 * - AIServiceAssistantInput - The input type for the aiServiceAssistant function.
 * - AIServiceAssistantOutput - The return type for the aiServiceAssistant function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AIServiceAssistantInputSchema = z.object({
  question: z.string().describe('The user\'s question about dental treatments or dental clinic services.'),
});
export type AIServiceAssistantInput = z.infer<typeof AIServiceAssistantInputSchema>;

const AIServiceAssistantOutputSchema = z.object({
  answer: z.string().describe('An instant and accurate answer to the user\'s question about dental treatments, provided by the AI assistant.'),
  recommendedNextStep: z.string().describe('A suggestion for the user\'s next step, such as booking an evaluation or contacting via WhatsApp. If suggesting WhatsApp contact, include the full WhatsApp link: wa.me/5547999999999.'),
});
export type AIServiceAssistantOutput = z.infer<typeof AIServiceAssistantOutputSchema>;

export async function aiServiceAssistant(input: AIServiceAssistantInput): Promise<AIServiceAssistantOutput> {
  return aiServiceAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiServiceAssistantPrompt',
  input: { schema: AIServiceAssistantInputSchema },
  output: { schema: AIServiceAssistantOutputSchema },
  prompt: `Você é um assistente de IA amigável e experiente para a clínica odontológica 'Sorriso Perfeito Blumenau' em Blumenau/SC. Sua principal função é fornecer respostas instantâneas e precisas sobre tratamentos dentários, ajudar os pacientes a entenderem suas opções e, quando apropriado, incentivá-los a agendar uma avaliação gratuita ou entrar em contato via WhatsApp para mais informações ou agendamento. O WhatsApp da clínica é wa.me/5547999999999.

Os serviços que a clínica oferece incluem, mas não se limitam a:
- Clareamento dental
- Implantes dentários
- Aparelho invisível (Ortodontia)
- Limpeza e profilaxia
- Estética dental (facetas, lentes de contato dental)
- Atendimento de emergência

Ao responder, seja claro, informativo e profissional. Se a pergunta do usuário se alinha com um dos serviços, mencione-o e ofereça a opção de agendar uma consulta ou conversar pelo WhatsApp, sempre incluindo o link direto wa.me/5547999999999 no campo 'recommendedNextStep' se for para entrar em contato via WhatsApp.

Pergunta do paciente: {{{question}}}`,
});

const aiServiceAssistantFlow = ai.defineFlow(
  {
    name: 'aiServiceAssistantFlow',
    inputSchema: AIServiceAssistantInputSchema,
    outputSchema: AIServiceAssistantOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  },
);
