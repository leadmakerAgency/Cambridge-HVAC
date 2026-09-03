import { Container } from "@/components/layout/Container";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: React.ReactNode;
}) {
  return (
    <section data-hero className="on-navy relative -mt-20 overflow-hidden bg-ink pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_85%_-20%,#1a4a5a_0%,#132f42_45%,#0e2130_80%)]" />
        <div className="absolute -top-1/2 right-0 h-[60vh] w-[60vh] rounded-full bg-[radial-gradient(circle,rgba(106,33,83,0.3)_0%,rgba(106,33,83,0)_65%)] blur-2xl" />
        <div className="absolute -bottom-1/3 left-0 h-[40vh] w-[40vh] rounded-full bg-[radial-gradient(circle,rgba(106,33,83,0.25)_0%,transparent_60%)] blur-3xl" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(120%_90%_at_50%_0%,#000_35%,transparent_85%)]" />
      </div>

      <Container className="relative">
        <p className="eyebrow text-plum-light">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-hero text-white">{title}</h1>
        {intro && <p className="measure mt-5 text-lg text-white/70">{intro}</p>}
        {children && <div className="mt-8">{children}</div>}
      </Container>
    </section>
  );
}
