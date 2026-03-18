interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
}

export function SectionTitle({ title, subtitle, alignment = 'left' }: SectionTitleProps) {
  const isCenter = alignment === 'center';

  return (
    <div className={`mb-14 ${isCenter ? 'text-center' : 'text-left'}`} data-aos="fade-up" data-aos-duration="600">
      <div className="inline-flex items-center gap-3 mb-2">
        {isCenter && <div className="h-px w-10 bg-gradient-to-r from-transparent to-cyan-500/60 hidden sm:block" />}
        <span className="text-xs font-bold text-cyan-500 uppercase tracking-[0.2em]">
          {title}
        </span>
        {isCenter && <div className="h-px w-10 bg-gradient-to-l from-transparent to-cyan-500/60 hidden sm:block" />}
      </div>

      <h2
        className={`text-3xl md:text-5xl font-display font-bold text-foreground ${isCenter ? 'mx-auto' : ''}`}
        style={{ maxWidth: isCenter ? '700px' : undefined }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          data-aos="fade-up"
          data-aos-delay="80"
          className={`text-slate-400 text-lg mt-4 leading-relaxed ${isCenter ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
