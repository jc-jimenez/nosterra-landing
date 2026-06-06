import Image from "next/image";
import { Truck, ShoppingBag } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Contacto } from "@/components/Contacto";

const STORE_URL = "https://www.nosterramezcal.com";

const pasos = [
  { n: "01", title: "Horno cónico de piedra", desc: "Las piñas de agave Espadín se cuecen lentamente bajo tierra, sobre piedra volcánica y leña, ganando su carácter ahumado y dulce." },
  { n: "02", title: "Molienda en tahona", desc: "Una rueda de piedra molida por tracción tradicional exprime el agave cocido, liberando las mieles que darán vida al mezcal." },
  { n: "03", title: "Fermentación natural", desc: "En tinas de madera, las levaduras del ambiente oaxaqueño transforman el mosto a su propio ritmo. Sin prisas, sin atajos." },
  { n: "04", title: "Alambique de cobre", desc: "Doble destilación en cobre que pule el destilado hasta su expresión más limpia y cristalina, fiel a la tradición matatleca." },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Proceso />
        <Edicion />
        <Historia />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <Image src="/images/hero-campo.png" alt="Botella NOSTERRA en un campo de agave al atardecer en Oaxaca" fill priority className="object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/85 to-obsidian/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/60" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-xl fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-obsidian/40 px-4 py-1.5 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="font-body text-[11px] uppercase tracking-[0.25em] text-gold">Mezcal Artesanal · Santiago Matatlán</span>
          </div>

          <h1 className="mt-6 font-display text-6xl font-light leading-[1.05] tracking-tight text-ivory sm:text-7xl">
            El espíritu de
            <span className="block italic text-gradient-gold">nuestra tierra</span>
          </h1>

          <p className="mt-6 max-w-md font-body text-base leading-relaxed text-ivory/80">
            Mezcal joven cristalino de agave Espadín, hecho a mano en Oaxaca con tahona de piedra y alambique de cobre. Llévalo a tu mesa.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <div>
              <p className="font-body text-[11px] uppercase tracking-[0.2em] text-muted">Desde</p>
              <p className="font-display text-4xl font-light text-ivory">$880<span className="ml-1 font-body text-sm text-muted">MXN</span></p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 border border-gold bg-gold px-8 py-3.5 font-body text-sm uppercase tracking-[0.15em] text-obsidian transition-colors hover:bg-gold-light">
                <ShoppingBag className="h-4 w-4" /> Comprar ahora
              </a>
              <a href="#proceso" className="flex items-center justify-center border border-ivory/30 px-8 py-3.5 font-body text-sm uppercase tracking-[0.15em] text-ivory transition-colors hover:border-gold hover:text-gold">
                Conoce más
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-body text-xs text-ivory/60">
            <span className="flex items-center gap-1.5"><Truck className="h-3.5 w-3.5 text-gold" /> Envío a todo México · 3–5 días hábiles</span>
            <span>· 100% agave</span>
            <span>· Hecho en México</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Proceso() {
  return (
    <section id="proceso" className="bg-obsidian py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-gold">Saber hacer ancestral</p>
          <h2 className="mt-4 font-display text-5xl font-light text-ivory">
            El proceso <span className="italic text-gradient-gold">artesanal</span>
          </h2>
          <div className="divider-gold mt-6"><span className="text-gold/70">◆</span></div>
          <p className="mt-6 font-body text-base leading-relaxed text-muted">
            Cuatro etapas que no han cambiado en generaciones. Así nace cada botella de NOSTERRA en Santiago Matatlán, capital mundial del mezcal.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-gold/15 bg-gold/10 sm:grid-cols-2 lg:grid-cols-4">
          {pasos.map((p) => (
            <div key={p.n} className="group h-full bg-smoke p-8 transition-colors hover:bg-agave/20">
              <span className="font-display text-5xl font-light text-gold/40 transition-colors group-hover:text-gold">{p.n}</span>
              <h3 className="mt-4 font-display text-2xl text-ivory">{p.title}</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Edicion() {
  const total = 84;
  const available = 84;
  return (
    <section id="edicion" className="relative overflow-hidden border-y border-gold/15 bg-smoke py-28">
      <div className="absolute left-1/2 top-0 -z-0 h-96 w-96 -translate-x-1/2 rounded-full bg-copper/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <div>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-copper">Edición limitada · {total} botellas</p>
          <h2 className="mt-4 font-display text-5xl font-light leading-tight text-ivory lg:text-6xl">
            Conmemorativa
            <span className="block font-display text-3xl italic text-gold/90">Gral. Artemio Brito Abarca</span>
          </h2>
          <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-muted">
            Una edición limitada de {total} botellas numeradas, homenaje a 84 años de legado. Cada botella lleva su número grabado — una pieza de colección irrepetible.
          </p>

          <div className="mt-10 max-w-md">
            <div className="flex items-end justify-between font-body">
              <span className="text-xs uppercase tracking-[0.2em] text-muted">Botellas disponibles</span>
              <span className="font-display text-2xl text-gold">{available}<span className="text-base text-muted"> / {total}</span></span>
            </div>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-obsidian">
              <div className="h-full rounded-full bg-gradient-to-r from-copper to-gold" style={{ width: "3%" }} />
            </div>
            <p className="mt-2 font-body text-[11px] text-muted/70">Cada botella lleva su número grabado del 1 al {total}.</p>
          </div>

          <div className="mt-10 flex flex-wrap items-end gap-6">
            <p className="font-display text-4xl font-light text-ivory">$2,400<span className="ml-1 font-body text-sm text-muted">MXN</span></p>
            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-copper bg-copper/90 px-9 py-3.5 font-body text-sm uppercase tracking-[0.18em] text-ivory transition-colors hover:bg-copper">
              <ShoppingBag className="h-4 w-4" /> Comprar mi botella
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(155,107,58,0.25),transparent_70%)]" />
          <div className="overflow-hidden rounded-lg border border-gold/20 shadow-2xl">
            <Image src="/images/artemio-etiqueta.png" alt="Etiqueta de la Edición Conmemorativa" width={500} height={700} className="h-auto w-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Historia() {
  return (
    <section id="historia" className="relative overflow-hidden bg-smoke py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <div className="relative">
          <div className="overflow-hidden rounded-xl border border-gold/15 shadow-2xl">
            <Image src="/images/hero-campo.png" alt="Campo de agave al atardecer en Santiago Matatlán, Oaxaca" width={800} height={1000} className="h-[460px] w-full object-cover lg:h-[560px]" />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-lg border border-gold/30 bg-obsidian/95 px-6 py-4 backdrop-blur sm:block">
            <p className="font-display text-3xl text-gold">100%</p>
            <p className="font-body text-[10px] uppercase tracking-[0.2em] text-muted">Agave Espadín</p>
          </div>
        </div>

        <div>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-gold">Nuestra historia</p>
          <h2 className="mt-4 font-display text-5xl font-light leading-tight text-ivory">
            Raíces que el tiempo <span className="italic text-gradient-gold">no separa</span>
          </h2>
          <div className="mt-8 space-y-5 font-body text-base leading-relaxed text-muted">
            <p>
              NOSTERRA nace en Santiago Matatlán, Oaxaca — la capital mundial del mezcal — de la mano de{" "}
              <span className="text-ivory">Casa Jiménez Elixirs &amp; Spirits</span>. Cada botella es un puente entre quienes partieron y la tierra que los vio nacer.
            </p>
            <p>
              Elaborado por maestros mezcaleros que heredaron el oficio de sus abuelos, NOSTERRA honra el agave, el fuego y la piedra. Un mezcal que sabe a origen, a memoria y a comunidad.
            </p>
            <p className="font-display text-xl italic text-gold/90">
              «Su nombre lo dice todo: <span className="not-italic">nos</span> + <span className="not-italic">terra</span> — nuestra tierra.»
            </p>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-gold/15 pt-8">
            {[{ k: "Origen", v: "Matatlán" }, { k: "Tradición", v: "Artesanal" }, { k: "Estado", v: "Oaxaca" }].map((x) => (
              <div key={x.k}>
                <dt className="font-body text-[10px] uppercase tracking-[0.2em] text-muted">{x.k}</dt>
                <dd className="mt-1 font-display text-xl text-ivory">{x.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-obsidian py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center lg:flex-row lg:justify-between lg:text-left lg:px-10">
        <div>
          <p className="font-display text-2xl font-light tracking-[0.2em] text-ivory">NOSTERRA</p>
          <p className="font-body text-[10px] uppercase tracking-[0.4em] text-gold/80">Mezcal</p>
        </div>
        <p className="max-w-md font-body text-xs leading-relaxed text-muted">
          Casa Jiménez Elixirs &amp; Spirits · Santiago Matatlán, Oaxaca, México.<br />
          El abuso en el consumo de este producto es nocivo para la salud. Venta exclusiva a mayores de 18 años.
        </p>
        <p className="font-body text-[11px] text-muted/60">© {new Date().getFullYear()} NOSTERRA</p>
      </div>
    </footer>
  );
}
