
"use client";

import { useState } from 'react';
import { aiServiceAssistant, AIServiceAssistantOutput } from '@/ai/flows/ai-service-assistant-flow';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { MessageSquare, Send, Bot, User, X, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string, nextStep?: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim() || isLoading) return;

    const userMessage = question;
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setQuestion('');
    setIsLoading(true);

    try {
      const response: AIServiceAssistantOutput = await aiServiceAssistant({ question: userMessage });
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: response.answer, 
        nextStep: response.recommendedNextStep 
      }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Desculpe, ocorreu um erro ao processar sua pergunta. Por favor, tente novamente ou entre em contato via WhatsApp.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <Card className="w-[320px] sm:w-[400px] h-[500px] mb-4 flex flex-col shadow-2xl border-none animate-in slide-in-from-bottom-5 duration-300">
          <CardHeader className="bg-primary text-white p-4 rounded-t-xl flex flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              <CardTitle className="text-lg font-headline">Assistente Virtual</CardTitle>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded transition-colors">
              <X className="w-5 h-5" />
            </button>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/50">
            {messages.length === 0 && (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  Olá! Eu sou o assistente da Sorriso Perfeito. Como posso ajudar com suas dúvidas sobre tratamentos dentários?
                </p>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={cn(
                "flex flex-col gap-2",
                m.role === 'user' ? "items-end" : "items-start"
              )}>
                <div className={cn(
                  "max-w-[85%] p-3 rounded-2xl text-sm shadow-sm",
                  m.role === 'user' ? "bg-primary text-white rounded-tr-none" : "bg-white text-foreground rounded-tl-none"
                )}>
                  {m.content}
                </div>
                {m.nextStep && (
                  <a 
                    href={m.nextStep.includes('wa.me') ? `https://${m.nextStep}` : '#'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-primary underline px-1"
                  >
                    Próximo passo: {m.nextStep.split('wa.me')[0] || 'Falar no WhatsApp'}
                  </a>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm animate-pulse">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="p-4 border-t bg-white rounded-b-xl">
            <form onSubmit={handleSend} className="flex w-full gap-2">
              <Input 
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Pergunte sobre clareamento..."
                className="flex-1"
              />
              <Button type="submit" size="icon" disabled={isLoading}>
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
      
      <Button 
        onClick={() => setIsOpen(!isOpen)}
        size="lg" 
        className={cn(
          "rounded-full w-14 h-14 shadow-2xl transition-all duration-300",
          isOpen ? "bg-red-500 hover:bg-red-600 rotate-90" : "bg-primary hover:bg-primary/90"
        )}
      >
        {isOpen ? <X className="w-7 h-7" /> : <MessageSquare className="w-7 h-7" />}
      </Button>
    </div>
  );
}
