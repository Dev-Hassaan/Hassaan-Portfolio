import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { insertMessageSchema, type InsertMessage } from '@shared/schema';
import { useCreateMessage } from '../hooks/use-messages';
import { SectionTitle } from './SectionTitle';
import { Github, Mail, Phone, MapPin, Loader2, Send, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function Footer() {
  const { mutate: createMessage, isPending, isSuccess } = useCreateMessage();
  const { contact } = portfolioData;

  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: { name: '', email: '', message: '' },
  });

  const onSubmit = (data: InsertMessage) => {
    createMessage(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <footer id="contact" className="relative pt-28 pb-12 section-divider overflow-hidden">
      {/* Bg glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 mb-20">

          {/* Left: contact info */}
          <div data-aos="fade-right" data-aos-duration="700">
            <SectionTitle
              title="Get In Touch"
              subtitle="Open for new opportunities, collaborations, and interesting projects. Let's build something great together."
            />

            <div className="mt-10 space-y-5">
              {/* Email */}
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-4 group w-fit"
                data-testid="contact-email-link"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/40 group-hover:text-cyan-400 transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-0.5">Email</p>
                  <p className="text-slate-300 font-medium group-hover:text-cyan-400 transition-colors">
                    {contact.email}
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-4 group w-fit"
                data-testid="contact-phone-link"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/40 group-hover:text-cyan-400 transition-all duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-0.5">Phone</p>
                  <p className="text-slate-300 font-medium group-hover:text-cyan-400 transition-colors">
                    {contact.phone}
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-0.5">Location</p>
                  <p className="text-slate-300 font-medium">{contact.location}</p>
                </div>
              </div>
            </div>

            {/* GitHub CTA */}
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-10 px-6 py-3 rounded-xl border border-slate-700 text-slate-300 hover:border-slate-500 hover:bg-slate-800/60 hover:text-white transition-all duration-300 group"
              data-testid="contact-github-link"
            >
              <Github size={20} />
              <span className="font-medium">@{contact.githubHandle}</span>
              <ArrowUpRight size={14} className="text-slate-500 group-hover:text-slate-300 transition-colors" />
            </a>
          </div>

          {/* Right: form */}
          <div data-aos="fade-left" data-aos-duration="700">
            <div className="bg-slate-800/25 border border-slate-700/50 rounded-2xl p-8 md:p-10">
              <h3 className="text-xl font-display font-bold text-slate-100 mb-6">Send a Message</h3>

              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-4" data-testid="contact-success">
                  <div className="w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Send size={24} />
                  </div>
                  <div>
                    <p className="text-lg font-display font-bold text-slate-100">Message sent!</p>
                    <p className="text-slate-400 text-sm mt-1">I'll get back to you as soon as possible.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" data-testid="contact-form">

                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-slate-400">Your Name</label>
                    <input
                      id="name"
                      {...form.register('name')}
                      className="w-full bg-slate-900/50 border border-slate-700 text-foreground px-4 py-3 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/15 transition-all placeholder:text-slate-600 text-sm"
                      placeholder="John Doe"
                      data-testid="input-name"
                    />
                    {form.formState.errors.name && (
                      <p className="text-red-400 text-xs mt-1">{form.formState.errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-slate-400">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      {...form.register('email')}
                      className="w-full bg-slate-900/50 border border-slate-700 text-foreground px-4 py-3 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/15 transition-all placeholder:text-slate-600 text-sm"
                      placeholder="john@example.com"
                      data-testid="input-email"
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-400 text-xs mt-1">{form.formState.errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm font-medium text-slate-400">Message</label>
                    <textarea
                      id="message"
                      {...form.register('message')}
                      rows={5}
                      className="w-full bg-slate-900/50 border border-slate-700 text-foreground px-4 py-3 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/15 transition-all resize-none placeholder:text-slate-600 text-sm"
                      placeholder="Tell me about your project or idea..."
                      data-testid="input-message"
                    />
                    {form.formState.errors.message && (
                      <p className="text-red-400 text-xs mt-1">{form.formState.errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full py-3.5 rounded-xl font-semibold bg-gradient-primary text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex justify-center items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none text-sm"
                    data-testid="button-submit"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="animate-spin" size={18} />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-800/60 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Hassaan Arshad. Built with React & Tailwind CSS.</p>
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors font-medium"
            data-testid="footer-back-to-top"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
