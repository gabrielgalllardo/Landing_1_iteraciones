"use client"

import Image from "next/image"
import { ShaderAnimation } from "@/components/ui/shader-lines"
import AnimatedTextCycle from "@/components/ui/animated-text-cycle"
import { Marquee } from "@/components/ui/marquee"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import {
  Code2,
  Cloud,
  Smartphone,
  Link2,
  LayoutDashboard,
  Lightbulb,
  ChevronRight,
  Target,
  Shield,
  Eye,
  Zap,
  Globe,
  HeartHandshake,
  Landmark,
  Stethoscope,
  GraduationCap,
  ShoppingCart,
  Truck,
  Scale,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  Star,
} from "lucide-react"

/* ── marquee data ── */
const marqueeItems = [
  "Finanzas & Banca",
  "Salud",
  "Educación",
  "Retail & eCommerce",
  "Logística",
  "Legal & Compliance",
  "Finanzas & Banca",
  "Salud",
  "Educación",
]

/* ── services data ── */
const services = [
  {
    title: "Software a Medida",
    desc: "Desarrollamos aplicaciones empresariales completamente personalizadas que se adaptan a los procesos únicos de tu negocio.",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    icon: Code2,
  },
  {
    title: "Plataformas SaaS",
    desc: "Construimos productos SaaS escalables con arquitecturas modernas, listos para crecer con tu base de clientes.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    icon: LayoutDashboard,
  },
  {
    title: "Integraciones y APIs",
    desc: "Conectamos tus sistemas existentes con APIs robustas y microservicios que eliminan silos de información.",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    icon: Link2,
  },
  {
    title: "Aplicaciones Móviles",
    desc: "Apps nativas y multiplataforma para iOS y Android que ofrecen experiencias fluidas y de alto rendimiento.",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    icon: Smartphone,
  },
  {
    title: "Cloud & DevOps",
    desc: "Infraestructura en la nube, CI/CD, contenedores y automatización para que tu producto sea confiable y escalable.",
    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
    icon: Cloud,
  },
  {
    title: "Consultoría Digital",
    desc: "Asesoramos a tu equipo en arquitectura, tecnología y estrategia digital para tomar las mejores decisiones.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    icon: Lightbulb,
  },
]

/* ── process data ── */
const steps = [
  {
    step: "PASO 01",
    title: "Descubrimiento",
    desc: "Analizamos tu negocio, mapeamos requisitos y definimos el alcance del proyecto con total claridad.",
    icon: Target,
  },
  {
    step: "PASO 02",
    title: "Diseño",
    desc: "Prototipamos la arquitectura, diseñamos la UX y validamos el enfoque técnico antes de escribir una línea de código.",
    icon: Eye,
  },
  {
    step: "PASO 03",
    title: "Desarrollo",
    desc: "Iteramos en sprints ágiles con entregas continuas, transparencia total y código limpio y bien documentado.",
    icon: Code2,
  },
  {
    step: "PASO 04",
    title: "Despliegue",
    desc: "Llevamos el producto a producción con pipelines CI/CD, monitoreo 24/7 y soporte post-lanzamiento.",
    icon: Cloud,
  },
]

/* ── industries data ── */
const industries = [
  {
    icon: Landmark,
    title: "Finanzas y Banca",
    desc: "Plataformas de pagos, wallets digitales y sistemas de gestión financiera.",
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
  },
  {
    icon: Stethoscope,
    title: "Salud y Bienestar",
    desc: "Historia clínica electrónica, telemedicina y gestión hospitalaria.",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
  },
  {
    icon: GraduationCap,
    title: "Educación",
    desc: "Plataformas LMS, aulas virtuales y sistemas de seguimiento académico.",
    img: "https://images.unsplash.com/photo-1501504905252-473c47e709a3?w=600&h=400&fit=crop",
  },
  {
    icon: ShoppingCart,
    title: "Retail y eCommerce",
    desc: "Tiendas digitales, gestión de inventario y omnicanalidad.",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  },
  {
    icon: Truck,
    title: "Logística",
    desc: "Trazabilidad, ruteo inteligente y gestión de flotas en tiempo real.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
  },
  {
    icon: Scale,
    title: "Legal y Compliance",
    desc: "Gestión documental, firmas digitales y automatización de contratos.",
    img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
  },
]

/* ── why us data ── */
const whyUs = [
  {
    icon: Target,
    title: "Enfoque en tu negocio",
    desc: "No vendemos plantillas. Estudiamos tu modelo de negocio y construimos la solución exacta que necesitas.",
    featured: true,
  },
  {
    icon: Shield,
    title: "Calidad y seguridad",
    desc: "Código revisado, pruebas automatizadas y prácticas de seguridad en cada entrega. Tu producto en las mejores manos.",
    featured: false,
  },
  {
    icon: Eye,
    title: "Transparencia total",
    desc: "Acceso a tableros en tiempo real, reuniones semanales y reportes claros. Sabrás exactamente cómo avanza tu proyecto.",
    featured: false,
  },
  {
    icon: Zap,
    title: "Entrega rápida",
    desc: "Sprints de dos semanas con demos funcionales. Llegas al mercado más rápido sin sacrificar calidad.",
    featured: false,
  },
  {
    icon: Globe,
    title: "Raíces peruanas, alcance global",
    desc: "Basados en Lima, servimos a clientes en todo Latinoamérica. Entendemos el contexto local y pensamos globalmente.",
    featured: false,
  },
  {
    icon: HeartHandshake,
    title: "Soporte continuo",
    desc: "No desaparecemos tras el lanzamiento. Mantenimiento, mejoras y soporte técnico cuando los necesites.",
    featured: false,
  },
]

/* ── testimonials data ── */
const testimonials = [
  {
    name: "Andrés Villanueva",
    role: "CEO, FinTech Startup · Lima, Perú",
    quote:
      "MCGT Solutions transformó nuestra idea en una plataforma robusta en tiempo récord. Su equipo entendió exactamente lo que necesitábamos y entregó más de lo prometido.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Valeria Ramos",
    role: "CTO, HealthTech · Lima, Perú",
    quote:
      "La transparencia durante todo el proceso fue impresionante. Siempre supimos el estado del proyecto y recibimos demos funcionales semana a semana.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Miguel Castro",
    role: "Gerente de Operaciones · Empresa de Logística",
    quote:
      "Nuestro sistema de trazabilidad redujo errores operativos en un 40%. La solución que construyó MCGT se adaptó perfectamente a nuestra operación existente.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
]

/* ── step icon colors (alternating lacre / verde tinta) ── */
const stepColors = [
  { bg: "#A64B34", glow: "rgba(166,75,52,0.30)" },
  { bg: "#1E3A34", glow: "rgba(30,58,52,0.40)" },
  { bg: "#A64B34", glow: "rgba(166,75,52,0.30)" },
  { bg: "#1E3A34", glow: "rgba(30,58,52,0.40)" },
]

export default function Home() {
  return (
    <main className="overflow-x-hidden">

      {/* ━━━━━━━━━━━ HERO ━━━━━━━━━━━ */}
      {/* Sin cambios — perfecto tal cual */}
      <section className="relative flex min-h-screen flex-col items-center justify-center bg-[#0B0F0E] px-6">
        <div className="absolute inset-0 opacity-30">
          <ShaderAnimation />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F0E]/80 via-[#0B0F0E]/30 to-[#0B0F0E]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/50 uppercase backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A64B34] animate-pulse" />
            Software Factory — Lima, Perú
          </div>

          <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[1] tracking-tight text-white">
            Construimos{" "}
            <AnimatedTextCycle
              words={["software", "plataformas", "apps", "APIs"]}
              interval={2500}
              className="text-[#A64B34]"
            />
            <br />
            que escalan tu negocio
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/45">
            Soluciones digitales a medida, plataformas SaaS y aplicaciones
            empresariales para negocios en toda Latinoamérica.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contacto"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-[#A64B34] px-6 text-sm font-semibold text-white transition hover:bg-[#8b3e2b]"
            >
              Iniciar proyecto
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#servicios"
              className="inline-flex h-12 items-center rounded-full px-6 text-sm font-medium text-white/60 transition hover:bg-white/5 hover:text-white"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━ MARQUEE ━━━━━━━━━━━ */}
      {/*
        CAMBIO: bg #FAFAF8 → #1E3A34 (Verde Tinta)
        Actúa como puente visual entre el Hero oscuro (#0B0F0E)
        y las secciones claras. Incorpora el color estructural
        del manual (30% de la regla 60/30/10).
        Texto ajustado a blanco para contraste (ratio 12.28).
      */}
      <section className="border-b border-white/5 bg-[#1E3A34] py-6">
        <div className="mx-auto max-w-7xl">
          <Marquee pauseOnHover className="[--duration:30s]">
            {marqueeItems.map((ind, i) => (
              <span
                key={i}
                className="mx-6 whitespace-nowrap text-sm font-medium text-white/55"
              >
                {ind}
              </span>
            ))}
          </Marquee>
        </div>
      </section>

      {/* ━━━━━━━━━━━ STATS ━━━━━━━━━━━ */}
      {/*
        CAMBIO: números de texto-[#0B0F0E] → text-[#A64B34]
        Manual de marca: "Destacados numéricos: #A64B34"
        Añade acento visual sin cambiar el fondo blanco (respiro).
      */}
      <section className="bg-white py-24 px-6">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-y-12 md:grid-cols-4">
          {[
            { target: 50, suffix: "+", label: "Proyectos" },
            { target: 30, suffix: "+", label: "Clientes" },
            { target: 5,  suffix: "+", label: "Años" },
            { target: 99, suffix: "%", label: "Uptime" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1">
              <AnimatedCounter
                target={s.target}
                suffix={s.suffix}
                className="text-5xl font-bold tracking-tight text-[#A64B34]"
              />
              <span className="text-sm text-black/35">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ━━━━━━━━━━━ SERVICES ━━━━━━━━━━━ */}
      {/* Sin cambios — hueso (#F5F0E8) ya es correcto */}
      <section id="servicios" className="scroll-mt-10 bg-[#F5F0E8] py-28 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="inline-block rounded-full border border-[#A64B34]/20 bg-[#A64B34]/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#A64B34] uppercase">
              Servicios
            </span>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#0B0F0E] md:text-5xl">
              Todo lo que necesitas para crecer
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#0B0F0E]/50">
              Desde el primer wireframe hasta el deploy en producción, somos tu
              equipo técnico de confianza.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl overflow-hidden border border-black/5 bg-white transition-all duration-300 group hover:shadow-lg"
              >
                <div className="h-44 overflow-hidden relative">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#A64B34] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-[#A64B34] flex items-center justify-center text-white">
                    <s.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-[#0B0F0E]">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-[#0B0F0E]/50">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━ PROCESS ━━━━━━━━━━━ */}
      {/*
        CAMBIOS:
        1. Línea conectora: bg-[#A64B34]/20 → bg-[#1E3A34]/25
           Introduce el verde estructural en la sección blanca.
        2. Iconos de pasos: alternan lacre (#A64B34) y verde tinta (#1E3A34)
           Refuerza ambos colores del 30% estructural.
        3. Overlay foto de equipo: from-[#0B0F0E]/70 → from-[#1E3A34]/80
           Tono verde institucional per manual sección "premium".
      */}
      <section id="proceso" className="scroll-mt-10 bg-white py-28 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="inline-block rounded-full border border-[#A64B34]/20 bg-[#A64B34]/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#A64B34] uppercase">
              Cómo trabajamos
            </span>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#0B0F0E] md:text-5xl">
              Un proceso probado, resultados predecibles
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#0B0F0E]/50">
              Metodología ágil con comunicación clara en cada etapa del proyecto.
            </p>
          </div>

          <div className="mt-16 relative">
            {/* Connecting line — verde tinta para cohesión con el Marquee */}
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-[#1E3A34]/25 mx-24" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {steps.map((s, i) => (
                <div key={s.step} className="flex flex-col items-center text-center">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 text-white"
                    style={{
                      backgroundColor: stepColors[i].bg,
                      boxShadow: `0 0 30px ${stepColors[i].glow}`,
                    }}
                  >
                    <s.icon className="h-8 w-8" />
                  </div>
                  <p className="text-xs font-bold tracking-widest mb-2 text-[#A64B34] uppercase">
                    {s.step}
                  </p>
                  <h3 className="font-bold text-xl mb-3 text-[#0B0F0E]">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-[#0B0F0E]/50">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Team image — overlay verde tinta (institucional premium) */}
          <div className="mt-20 rounded-2xl overflow-hidden h-64 relative border border-black/5">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=500&fit=crop"
              alt="Nuestro equipo"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A34]/85 via-[#1E3A34]/35 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center p-10">
              <p className="text-xs font-bold tracking-widest text-[#D4735E] uppercase mb-2">
                Nuestro equipo
              </p>
              <h3 className="text-2xl font-bold text-white md:text-3xl">
                Profesionales apasionados<br />por la tecnología
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━ INDUSTRIES ━━━━━━━━━━━ */}
      {/* Sin cambios — off-white funciona bien aquí */}
      <section className="bg-[#FAFAF8] py-28 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="inline-block rounded-full border border-[#A64B34]/20 bg-[#A64B34]/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#A64B34] uppercase">
              Industrias
            </span>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#0B0F0E] md:text-5xl">
              Experiencia en múltiples sectores
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#0B0F0E]/50">
              Entendemos los desafíos particulares de cada industria y construimos
              soluciones que realmente impactan.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <div
                key={ind.title}
                className="group relative rounded-2xl overflow-hidden h-56 cursor-default border border-black/5"
              >
                <Image
                  src={ind.img}
                  alt={ind.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0E]/80 via-[#0B0F0E]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-lg font-bold text-white mb-1">{ind.title}</h3>
                  <p className="text-sm leading-relaxed text-white/70">
                    {ind.desc}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A64B34] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━ WHY US ━━━━━━━━━━━ */}
      {/*
        CAMBIO: card destacada de gradiente lacre → gradiente verde tinta
        Manual: "Institucional premium — Fondo #1E3A34, Texto #FFFFFF,
        Acento #D4735E (solo títulos o iconos)".
        Introduce variedad cromática y refuerza el verde estructural.
      */}
      <section className="bg-white py-28 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="inline-block rounded-full border border-[#A64B34]/20 bg-[#A64B34]/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#A64B34] uppercase">
              Por qué elegirnos
            </span>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#0B0F0E] md:text-5xl">
              Somos más que una agencia de desarrollo
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#0B0F0E]/50">
              Somos tu socio tecnológico estratégico comprometido con el éxito de
              tu empresa.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className={`rounded-2xl p-6 border transition-all duration-300 group ${
                  item.featured
                    ? "bg-gradient-to-br from-[#1E3A34] to-[#0f2520] border-[#1E3A34]/30 text-white"
                    : "border-black/5 bg-white hover:shadow-lg"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                    item.featured
                      ? "bg-white/15 text-[#D4735E]"
                      : "bg-[#A64B34]/10 text-[#A64B34]"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                </div>
                <h3
                  className={`font-bold text-lg mb-2 ${
                    item.featured ? "text-white" : "text-[#0B0F0E]"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    item.featured ? "text-white/75" : "text-[#0B0F0E]/50"
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Quote / image block */}
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden h-72 relative border border-black/5">
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop"
                alt="Developer trabajando"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0E]/20 to-transparent" />
            </div>

            <div>
              <span className="text-6xl font-bold text-[#A64B34] leading-none">&ldquo;</span>
              <blockquote className="mt-2 text-lg italic leading-relaxed text-[#0B0F0E]/70">
                En MCGT Solutions creemos que cada empresa merece software que
                realmente resuelva sus problemas — no soluciones genéricas que se
                adaptan a medias.
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1E3A34] flex items-center justify-center text-sm font-bold text-white">
                  M
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0B0F0E]">
                    Equipo MCGT Solutions
                  </p>
                  <p className="text-xs text-[#0B0F0E]/40">Lima, Perú</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━ TESTIMONIALS ━━━━━━━━━━━ */}
      {/*
        CAMBIO: bg-[#FAFAF8] → bg-[#F5F0E8] (Hueso)
        Añade calidez y diferencia visualmente esta sección
        del off-white de Industries. Consistente con el manual:
        "Fondos de sección y docs — color Hueso".
      */}
      <section className="bg-[#F5F0E8] py-28 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="inline-block rounded-full border border-[#A64B34]/20 bg-[#A64B34]/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#A64B34] uppercase">
              Testimonios
            </span>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#0B0F0E] md:text-5xl">
              Lo que dicen nuestros clientes
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#0B0F0E]/50">
              Empresas que confiaron en MCGT Solutions para transformar su negocio.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl p-6 flex flex-col border border-black/5 bg-white transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[#A64B34] text-[#A64B34]"
                    />
                  ))}
                </div>
                <blockquote className="text-sm leading-relaxed text-[#0B0F0E]/60 flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="pt-4 border-t border-black/5 flex items-center gap-3">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-[#0B0F0E]">
                      {t.name}
                    </p>
                    <p className="text-xs text-[#0B0F0E]/40">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━ CTA ━━━━━━━━━━━ */}
      {/*
        CAMBIO: outer bg-[#FAFAF8] → bg-[#F5F0E8] (Hueso)
        Continuidad cálida con sección Testimonios.
        Card interior mantiene #0B0F0E — receta "CTA de conversión" del manual.
      */}
      <section id="contacto" className="scroll-mt-10 bg-[#F5F0E8] py-28 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#A64B34]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1E3A34]/5 rounded-full blur-3xl" />

        <div className="mx-auto max-w-4xl relative z-10">
          <div className="rounded-3xl overflow-hidden border border-black/5 relative">
            <Image
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&h=600&fit=crop"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#0B0F0E]/90" />
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#A64B34]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#1E3A34]/15 rounded-full blur-3xl" />

            <div className="relative z-10 py-20 px-8 text-center">
              <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-white/50 uppercase backdrop-blur-sm">
                Disponible para nuevos proyectos
              </span>
              <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
                ¿Listo para construir tu{" "}
                <span className="bg-gradient-to-r from-[#A64B34] to-[#D4735E] bg-clip-text text-transparent">
                  solución personalizada
                </span>
                ?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base text-white/45">
                Cuéntanos tu idea. Nuestro equipo en Lima está listo para analizar tu
                caso y proponerte el mejor camino tecnológico.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="mailto:hola@mcgtsolutions.com"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold bg-[#A64B34] text-white transition hover:bg-[#8b3e2b]"
                >
                  <Mail className="h-4 w-4" />
                  Enviar mensaje
                </a>
                <a
                  href="https://wa.me/51999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold border border-white/15 text-white transition hover:bg-white/5"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-white/30">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" /> Lima, Perú
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5" /> hola@mcgtsolutions.com
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" /> Lun – Vie, 9 am – 6 pm PET
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━ FOOTER ━━━━━━━━━━━ */}
      {/*
        CAMBIO MAYOR: bg-white → bg-[#0B0F0E]
        Espeja el Hero — cierra la página con el mismo color oscuro
        que la abre. Crea un "bookend" visual que unifica toda la
        experiencia. Todo el texto ajustado a blanco/opacidades blancas.
        Social icons con border blanco sutil.
      */}
      <footer className="border-t border-white/5 bg-[#0B0F0E] pt-16 pb-8 px-6">
        <div className="mx-auto max-w-6xl">
          {/* top grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            {/* col 1 — brand (span 2) */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#A64B34] flex items-center justify-center text-white font-bold text-lg">
                  M
                </div>
                <span className="text-lg font-bold tracking-wide text-white">
                  MCGT Solutions
                </span>
              </div>
              <p className="text-sm leading-relaxed text-white/45 max-w-sm">
                Software factory especializada en soluciones B2B a medida.
                Transformamos visiones en productos digitales que generan impacto
                real.
              </p>
              <div className="mt-4 flex flex-col gap-2 text-xs text-white/30">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3 w-3" /> Lima, Perú
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Mail className="h-3 w-3" /> hola@mcgtsolutions.com
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3 w-3" /> Lun – Vie, 9 am – 6 pm PET
                </span>
              </div>
              <div className="mt-4 flex gap-2">
                {[Globe, MessageCircle, Mail].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/35 transition hover:text-[#A64B34] hover:border-[#A64B34]/40"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* col 2 — servicios */}
            <div>
              <h4 className="mb-4 text-xs font-semibold tracking-widest text-white/40 uppercase">
                Servicios
              </h4>
              <ul className="flex flex-col gap-2 text-sm text-white/35">
                {[
                  "Software a Medida",
                  "Plataformas SaaS",
                  "Integraciones y APIs",
                  "Aplicaciones Móviles",
                  "Cloud & DevOps",
                  "Consultoría Digital",
                ].map((s) => (
                  <li key={s}>
                    <a href="#servicios" className="transition hover:text-white/65">
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* col 3 — empresa */}
            <div>
              <h4 className="mb-4 text-xs font-semibold tracking-widest text-white/40 uppercase">
                Empresa
              </h4>
              <ul className="flex flex-col gap-2 text-sm text-white/35">
                <li><a href="#servicios" className="transition hover:text-white/65">Sobre nosotros</a></li>
                <li><a href="#proceso" className="transition hover:text-white/65">Proceso</a></li>
                <li><a href="#" className="transition hover:text-white/65">Industrias</a></li>
                <li><a href="#" className="transition hover:text-white/65">Blog</a></li>
              </ul>
            </div>

            {/* col 4 — legal */}
            <div>
              <h4 className="mb-4 text-xs font-semibold tracking-widest text-white/40 uppercase">
                Legal
              </h4>
              <ul className="flex flex-col gap-2 text-sm text-white/35">
                <li><a href="#" className="transition hover:text-white/65">Términos de uso</a></li>
                <li><a href="#" className="transition hover:text-white/65">Política de privacidad</a></li>
              </ul>
            </div>
          </div>

          {/* bottom bar */}
          <div className="border-t border-white/5 pt-8 flex flex-col items-center justify-between gap-3 text-xs text-white/25 sm:flex-row">
            <span>
              &copy; {new Date().getFullYear()} MCGT Solutions S.A.C. · Lima,
              Perú. Todos los derechos reservados.
            </span>
            <span>Hecho con pasión en Lima</span>
          </div>
        </div>
      </footer>

    </main>
  )
}
