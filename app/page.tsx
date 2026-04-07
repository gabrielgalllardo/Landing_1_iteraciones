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
  ArrowUpRight,
} from "lucide-react"

/* ─────────────────────── DATA ─────────────────────── */

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

const stats = [
  { target: 50, suffix: "+", label: "Proyectos entregados",  sub: "Soluciones B2B a medida" },
  { target: 30, suffix: "+", label: "Clientes activos",       sub: "En toda Latinoamérica" },
  { target: 5,  suffix: "+", label: "Años en el mercado",     sub: "Experiencia comprobada" },
  { target: 99, suffix: "%", label: "Uptime en producción",   sub: "Infraestructura confiable" },
]

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

const steps = [
  { step: "01", title: "Descubrimiento", desc: "Analizamos tu negocio, mapeamos requisitos y definimos el alcance del proyecto con total claridad.", icon: Target },
  { step: "02", title: "Diseño",         desc: "Prototipamos la arquitectura, diseñamos la UX y validamos el enfoque técnico antes de escribir una línea de código.", icon: Eye },
  { step: "03", title: "Desarrollo",     desc: "Iteramos en sprints ágiles con entregas continuas, transparencia total y código limpio y bien documentado.", icon: Code2 },
  { step: "04", title: "Despliegue",     desc: "Llevamos el producto a producción con pipelines CI/CD, monitoreo 24/7 y soporte post-lanzamiento.", icon: Cloud },
]

const stepAccents = [
  { bg: "#A64B34", glow: "rgba(166,75,52,0.35)" },
  { bg: "#1E3A34", glow: "rgba(30,58,52,0.50)"  },
  { bg: "#A64B34", glow: "rgba(166,75,52,0.35)" },
  { bg: "#1E3A34", glow: "rgba(30,58,52,0.50)"  },
]

const industries = [
  { icon: Landmark,    title: "Finanzas y Banca",  desc: "Plataformas de pagos, wallets digitales y sistemas de gestión financiera.",       img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop" },
  { icon: Stethoscope, title: "Salud y Bienestar", desc: "Historia clínica electrónica, telemedicina y gestión hospitalaria.",              img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop" },
  { icon: GraduationCap, title: "Educación",       desc: "Plataformas LMS, aulas virtuales y sistemas de seguimiento académico.",           img: "https://images.unsplash.com/photo-1501504905252-473c47e709a3?w=600&h=400&fit=crop" },
  { icon: ShoppingCart, title: "Retail y eCommerce", desc: "Tiendas digitales, gestión de inventario y omnicanalidad.",                    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop" },
  { icon: Truck,       title: "Logística",         desc: "Trazabilidad, ruteo inteligente y gestión de flotas en tiempo real.",            img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop" },
  { icon: Scale,       title: "Legal y Compliance", desc: "Gestión documental, firmas digitales y automatización de contratos.",           img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop" },
]

const whyUs = [
  { icon: Target,       title: "Enfoque en tu negocio",        desc: "No vendemos plantillas. Estudiamos tu modelo de negocio y construimos la solución exacta que necesitas.",                          featured: true  },
  { icon: Shield,       title: "Calidad y seguridad",          desc: "Código revisado, pruebas automatizadas y prácticas de seguridad en cada entrega. Tu producto en las mejores manos.",             featured: false },
  { icon: Eye,          title: "Transparencia total",          desc: "Acceso a tableros en tiempo real, reuniones semanales y reportes claros. Sabrás exactamente cómo avanza tu proyecto.",           featured: false },
  { icon: Zap,          title: "Entrega rápida",               desc: "Sprints de dos semanas con demos funcionales. Llegas al mercado más rápido sin sacrificar calidad.",                            featured: false },
  { icon: Globe,        title: "Raíces peruanas, alcance global", desc: "Basados en Lima, servimos a clientes en todo Latinoamérica. Entendemos el contexto local y pensamos globalmente.",          featured: false },
  { icon: HeartHandshake, title: "Soporte continuo",           desc: "No desaparecemos tras el lanzamiento. Mantenimiento, mejoras y soporte técnico cuando los necesites.",                          featured: false },
]

const testimonials = [
  {
    name: "Andrés Villanueva",
    role: "CEO, FinTech Startup · Lima, Perú",
    quote: "MCGT Solutions transformó nuestra idea en una plataforma robusta en tiempo récord. Su equipo entendió exactamente lo que necesitábamos y entregó más de lo prometido.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Valeria Ramos",
    role: "CTO, HealthTech · Lima, Perú",
    quote: "La transparencia durante todo el proceso fue impresionante. Siempre supimos el estado del proyecto y recibimos demos funcionales semana a semana.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Miguel Castro",
    role: "Gerente de Operaciones · Empresa de Logística",
    quote: "Nuestro sistema de trazabilidad redujo errores operativos en un 40%. La solución que construyó MCGT se adaptó perfectamente a nuestra operación existente.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
]

/* ─────────────────────── TECH DATA ─────────────────────── */

const techStack = [
  { name: "React / Next.js", color: "#61DAFB" },
  { name: "TypeScript",      color: "#3178C6" },
  { name: "Node.js",         color: "#68A063" },
  { name: "Python",          color: "#FFD845" },
  { name: "PostgreSQL",      color: "#336791" },
  { name: "MongoDB",         color: "#47A248" },
  { name: "Docker",          color: "#2496ED" },
  { name: "Kubernetes",      color: "#326CE5" },
  { name: "AWS",             color: "#FF9900" },
  { name: "Redis",           color: "#DC382D" },
  { name: "GraphQL",         color: "#E535AB" },
  { name: "Terraform",       color: "#7B42BC" },
]

const integrations = [
  { name: "Stripe",             color: "#635BFF" },
  { name: "WhatsApp Business",  color: "#25D366" },
  { name: "Twilio",             color: "#F22F46" },
  { name: "Shopify",            color: "#7AB55C" },
  { name: "Salesforce",         color: "#00A1E0" },
  { name: "HubSpot",            color: "#FF7A59" },
  { name: "Google APIs",        color: "#4285F4" },
  { name: "Firebase",           color: "#FFCA28" },
  { name: "Zapier",             color: "#FF4A00" },
  { name: "OpenAI",             color: "#00A67E" },
  { name: "Supabase",           color: "#3ECF8E" },
  { name: "Slack",              color: "#9B59B6" },
]

const techHighlights = [
  { icon: Code2,  title: "Arquitectura moderna",    desc: "Microservicios, API-first y cloud-native para sistemas que escalan sin fricción ni límites." },
  { icon: Shield, title: "Seguridad by design",     desc: "OWASP Top 10, encriptación end-to-end y auditorías de seguridad integradas desde el día uno." },
  { icon: Zap,    title: "Performance garantizado", desc: "Core Web Vitals, caching estratégico y monitoreo en tiempo real para experiencias ultrarrápidas." },
]

/* ─────────────────────── INLINE STYLE TOKENS ─────────────────────── */

const dotGrid = {
  backgroundImage: "radial-gradient(rgba(255,255,255,0.055) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
} as const

const dotGridSubtle = {
  backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
  backgroundSize: "32px 32px",
} as const

/* ─────────────────────── COMPONENT ─────────────────────── */

export default function Home() {
  return (
    <main className="overflow-x-hidden">

      {/* ══════════════════════════════════════════════════
          HERO  — sin cambios, perfecto tal cual
      ══════════════════════════════════════════════════ */}
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
              className="btn-lacre-glow group inline-flex h-12 items-center gap-2 rounded-full bg-[#A64B34] px-6 text-sm font-semibold text-white transition-all hover:bg-[#8b3e2b]"
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

      {/* ══════════════════════════════════════════════════
          MARQUEE — verde tinta + edge fades + dot separators
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-[#1E3A34] border-y border-white/5 py-5 overflow-hidden">
        {/* Edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#1E3A34] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#1E3A34] to-transparent z-10" />
        <div className="mx-auto max-w-7xl">
          <Marquee pauseOnHover className="[--duration:35s]">
            {marqueeItems.map((ind, i) => (
              <span
                key={i}
                className="mx-8 flex items-center gap-3 whitespace-nowrap"
              >
                <span className="h-1 w-1 rounded-full bg-[#A64B34] shrink-0" />
                <span className="text-[11px] font-semibold tracking-[0.18em] text-white/45 uppercase">
                  {ind}
                </span>
              </span>
            ))}
          </Marquee>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          STATS — BLANCO LIMPIO  (por pedido del usuario)
          Gap-px trick: el contenedor tiene color de divisor
          y cada celda bg-white → los gaps actúan como bordes
      ══════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-black/[0.06]">
        <div className="mx-auto max-w-5xl">
          {/* gap-px + bg del divisor = bordes pixel entre celdas */}
          <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-px"
            style={{ background: "rgba(0,0,0,0.055)" }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white flex flex-col gap-1.5 p-10 group hover:bg-[#FAFAF8] transition-colors"
              >
                <div className="flex items-baseline gap-0.5">
                  <AnimatedCounter
                    target={s.target}
                    suffix=""
                    className="text-[3.25rem] font-bold leading-none tracking-tighter text-[#0B0F0E]"
                  />
                  <span className="text-[2rem] font-bold text-[#A64B34] leading-none">{s.suffix}</span>
                </div>
                <p className="text-sm font-semibold text-[#0B0F0E]">{s.label}</p>
                <p className="text-xs text-[#0B0F0E]/35">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SERVICES — DARK + dot grid + glass cards
      ══════════════════════════════════════════════════ */}
      <section
        id="servicios"
        className="relative scroll-mt-10 bg-[#0B0F0E] py-28 px-6 overflow-hidden"
      >
        {/* Texture */}
        <div className="absolute inset-0" style={dotGrid} />
        {/* Gradient glows */}
        <div className="absolute -top-60 -right-20 w-[700px] h-[700px] rounded-full bg-[#A64B34]/[0.07] blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-10 w-[500px] h-[500px] rounded-full bg-[#1E3A34]/[0.25] blur-[120px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-white/45 uppercase backdrop-blur-sm">
              <span className="h-1 w-1 rounded-full bg-[#A64B34]" />
              Servicios
            </span>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-white md:text-5xl tracking-tight">
              Todo lo que necesitas para{" "}
              <span className="text-gradient-lacre">crecer</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/40">
              Desde el primer wireframe hasta el deploy en producción, somos tu
              equipo técnico de confianza.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="glass-card group relative rounded-2xl overflow-hidden transition-all duration-300"
              >
                {/* Image area */}
                <div className="h-44 overflow-hidden relative">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover opacity-55 group-hover:opacity-75 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0E] via-[#0B0F0E]/45 to-[#0B0F0E]/10" />
                  {/* Lacre shimmer on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "linear-gradient(135deg, rgba(166,75,52,0.1) 0%, transparent 65%)" }}
                  />
                  {/* Top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#A64B34]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Icon badge */}
                  <div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-[#0B0F0E]/70 border border-[#A64B34]/30 flex items-center justify-center text-[#A64B34] backdrop-blur-sm">
                    <s.icon className="h-4 w-4" />
                  </div>
                </div>
                {/* Body */}
                <div className="p-6">
                  <h3 className="font-bold text-base mb-2 text-white">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-white/45">{s.desc}</p>
                  <div className="mt-5 flex items-center gap-1 text-[#A64B34] text-xs font-semibold opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Explorar <ArrowUpRight className="h-3 w-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          TECH STACK & INTEGRATIONS — bi-directional marquee + glass cards
      ══════════════════════════════════════════════════ */}
      <section
        id="tecnologias"
        className="relative scroll-mt-10 bg-[#070C0A] py-28 px-6 overflow-hidden border-t border-white/[0.04]"
      >
        <div className="absolute inset-0" style={dotGrid} />
        {/* Ambient glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full bg-[#1E3A34]/40 blur-[130px] pointer-events-none" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[280px] rounded-full bg-[#A64B34]/[0.07] blur-[110px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-white/45 uppercase backdrop-blur-sm">
              <span className="h-1 w-1 rounded-full bg-[#A64B34] animate-pulse" />
              Stack & Integraciones
            </span>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-white md:text-5xl tracking-tight">
              Tecnología de{" "}
              <span className="text-gradient-lacre">primer nivel mundial</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/40">
              Usamos el ecosistema moderno más sólido para construir productos
              robustos, escalables y preparados para el futuro.
            </p>
          </div>

          {/* Row 1 — Tech Stack → forward */}
          <div className="relative mb-4 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#070C0A] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#070C0A] to-transparent z-10" />
            <Marquee pauseOnHover className="[--duration:30s]">
              {techStack.map((t, i) => (
                <div
                  key={i}
                  className="mx-2.5 flex items-center gap-2.5 rounded-full border border-white/[0.09] bg-white/[0.04] px-5 py-2.5 backdrop-blur-sm hover:border-white/20 hover:bg-white/[0.08] transition-all cursor-default group"
                >
                  <span
                    className="h-2 w-2 rounded-full shrink-0 transition-all duration-300 group-hover:scale-125"
                    style={{ backgroundColor: t.color, boxShadow: `0 0 8px ${t.color}80` }}
                  />
                  <span className="text-sm font-medium text-white/65 group-hover:text-white transition-colors whitespace-nowrap">
                    {t.name}
                  </span>
                </div>
              ))}
            </Marquee>
          </div>

          {/* Row 2 — Integrations ← reverse */}
          <div className="relative mb-16 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#070C0A] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#070C0A] to-transparent z-10" />
            <Marquee reverse pauseOnHover className="[--duration:36s]">
              {integrations.map((t, i) => (
                <div
                  key={i}
                  className="mx-2.5 flex items-center gap-2.5 rounded-full border border-white/[0.09] bg-white/[0.04] px-5 py-2.5 backdrop-blur-sm hover:border-[#A64B34]/40 hover:bg-white/[0.08] transition-all cursor-default group"
                >
                  <span
                    className="h-2 w-2 rounded-full shrink-0 transition-all duration-300 group-hover:scale-125"
                    style={{ backgroundColor: t.color, boxShadow: `0 0 8px ${t.color}80` }}
                  />
                  <span className="text-sm font-medium text-white/65 group-hover:text-white transition-colors whitespace-nowrap">
                    {t.name}
                  </span>
                </div>
              ))}
            </Marquee>
          </div>

          {/* Feature highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {techHighlights.map((h) => (
              <div
                key={h.title}
                className="glass-card group rounded-2xl p-7 transition-all duration-300"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 text-white transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: "#A64B34", boxShadow: "0 0 24px rgba(166,75,52,0.35)" }}
                >
                  <h.icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-base text-white mb-2">{h.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          PROCESS — VERDE TINTA #1E3A34  (premium institucional)
      ══════════════════════════════════════════════════ */}
      <section
        id="proceso"
        className="relative scroll-mt-10 bg-[#1E3A34] py-28 px-6 overflow-hidden"
      >
        <div className="absolute inset-0" style={dotGridSubtle} />
        {/* Center amber glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] rounded-full bg-[#A64B34]/[0.07] blur-[110px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-white/55 uppercase">
              <span className="h-1 w-1 rounded-full bg-[#D4735E]" />
              Cómo trabajamos
            </span>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-white md:text-5xl tracking-tight">
              Un proceso probado,{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #D4735E 0%, #A64B34 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                resultados predecibles
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/45">
              Metodología ágil con comunicación clara en cada etapa del proyecto.
            </p>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Connecting line */}
            <div
              className="hidden lg:block absolute top-10 left-0 right-0 h-px mx-16"
              style={{ background: "linear-gradient(90deg, transparent 0%, rgba(166,75,52,0.35) 20%, rgba(166,75,52,0.35) 80%, transparent 100%)" }}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {steps.map((s, i) => (
                <div key={s.step} className="group flex flex-col items-center text-center">
                  {/* Step icon with decorative number */}
                  <div className="relative mb-6">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[5.5rem] font-black leading-none text-white/[0.05] select-none pointer-events-none">
                      {s.step}
                    </span>
                    <div
                      className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center text-white transition-all duration-300 group-hover:scale-105"
                      style={{
                        backgroundColor: stepAccents[i].bg,
                        boxShadow: `0 0 35px ${stepAccents[i].glow}`,
                      }}
                    >
                      <s.icon className="h-8 w-8" />
                    </div>
                  </div>
                  <p className="text-[10px] font-bold tracking-[0.2em] mb-2 text-[#D4735E] uppercase">
                    PASO {s.step}
                  </p>
                  <h3 className="font-bold text-xl mb-3 text-white">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-white/50">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team image */}
          <div className="mt-20 rounded-2xl overflow-hidden h-64 relative border border-white/[0.12] shimmer-scan">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=500&fit=crop"
              alt="Nuestro equipo"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F0E]/85 via-[#0B0F0E]/30 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center p-10">
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#D4735E] uppercase mb-2">
                Nuestro equipo
              </p>
              <h3 className="text-2xl font-bold text-white md:text-3xl">
                Profesionales apasionados<br />por la tecnología
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          INDUSTRIES — DARK + dot grid + enhanced photo cards
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-[#0B0F0E] py-28 px-6 overflow-hidden">
        <div className="absolute inset-0" style={dotGrid} />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#A64B34]/[0.06] rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-white/45 uppercase backdrop-blur-sm">
              <span className="h-1 w-1 rounded-full bg-[#A64B34]" />
              Industrias
            </span>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-white md:text-5xl tracking-tight">
              Experiencia en{" "}
              <span className="text-gradient-lacre">múltiples sectores</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/40">
              Entendemos los desafíos particulares de cada industria y construimos
              soluciones que realmente impactan.
            </p>
          </div>

          {/* Industry photo cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((ind) => (
              <div
                key={ind.title}
                className="group relative rounded-2xl overflow-hidden h-56 cursor-default border border-white/[0.08] transition-all duration-300 hover:border-[#A64B34]/35"
              >
                <Image
                  src={ind.img}
                  alt={ind.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover opacity-65 transition-all duration-500 group-hover:opacity-85 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0E]/92 via-[#0B0F0E]/40 to-transparent" />
                {/* Hover lacre wash */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(135deg, rgba(166,75,52,0.1) 0%, transparent 60%)" }}
                />
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#A64B34]/55 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2 mb-1">
                    <ind.icon className="h-3.5 w-3.5 text-[#A64B34] shrink-0" />
                    <h3 className="text-base font-bold text-white">{ind.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-white/55">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          WHY US — BLANCO LIMPIO + gradient border en featured card
      ══════════════════════════════════════════════════ */}
      <section className="bg-white py-28 px-6">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#A64B34]/20 bg-[#A64B34]/[0.07] px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-[#A64B34] uppercase">
              <span className="h-1 w-1 rounded-full bg-[#A64B34]" />
              Por qué elegirnos
            </span>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-[#0B0F0E] md:text-5xl tracking-tight">
              Más que una agencia —{" "}
              <span className="text-gradient-green">tu socio tecnológico</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#0B0F0E]/45">
              Comprometidos con el éxito real de tu empresa, no solo con la entrega de código.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map((item) =>
              item.featured ? (
                /* ─ Featured: gradient border + verde bg ─ */
                <div
                  key={item.title}
                  className="relative rounded-2xl p-px"
                  style={{ background: "linear-gradient(135deg, rgba(30,58,52,0.9) 0%, rgba(166,75,52,0.45) 100%)" }}
                >
                  <div className="rounded-2xl bg-[#1E3A34] p-6 h-full flex flex-col">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.1] flex items-center justify-center mb-4 text-[#D4735E]">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-white">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-white/65 flex-1">{item.desc}</p>
                    <div className="mt-6 h-px w-full bg-gradient-to-r from-[#A64B34]/40 to-transparent" />
                  </div>
                </div>
              ) : (
                /* ─ Regular: white card ─ */
                <div
                  key={item.title}
                  className="group rounded-2xl p-6 border border-black/[0.07] bg-white transition-all duration-300 hover:border-[#A64B34]/20 hover:shadow-lg"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#A64B34]/[0.08] flex items-center justify-center mb-4 text-[#A64B34] transition-colors group-hover:bg-[#A64B34]/[0.14]">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-[#0B0F0E]">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[#0B0F0E]/50">{item.desc}</p>
                </div>
              )
            )}
          </div>

          {/* Quote block */}
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden h-72 relative border border-black/5">
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop"
                alt="Developer trabajando"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0E]/15 to-transparent" />
            </div>
            <div>
              <span className="text-8xl font-black text-[#A64B34]/15 leading-none select-none">
                &ldquo;
              </span>
              <blockquote className="mt-0 text-lg italic leading-relaxed text-[#0B0F0E]/65">
                En MCGT Solutions creemos que cada empresa merece software que
                realmente resuelva sus problemas — no soluciones genéricas que se
                adaptan a medias.
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1E3A34] flex items-center justify-center text-sm font-bold text-white shrink-0">
                  M
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0B0F0E]">Equipo MCGT Solutions</p>
                  <p className="text-xs text-[#0B0F0E]/40">Lima, Perú</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          TESTIMONIALS — DARK + glass cards
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-[#0B0F0E] py-28 px-6 overflow-hidden">
        <div className="absolute inset-0" style={dotGrid} />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#1E3A34]/[0.35] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#A64B34]/[0.07] rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-white/45 uppercase backdrop-blur-sm">
              <span className="h-1 w-1 rounded-full bg-[#A64B34]" />
              Testimonios
            </span>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-white md:text-5xl tracking-tight">
              Lo que dicen nuestros{" "}
              <span className="text-gradient-lacre">clientes</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/40">
              Empresas que confiaron en MCGT Solutions para transformar su negocio.
            </p>
          </div>

          {/* Glass cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="glass-card group rounded-2xl p-6 flex flex-col transition-all duration-300"
              >
                {/* Decorative quote mark */}
                <div
                  className="text-6xl font-black leading-none mb-2 select-none"
                  style={{ color: "rgba(166,75,52,0.22)" }}
                >
                  &ldquo;
                </div>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-[#A64B34] text-[#A64B34]" />
                  ))}
                </div>
                <blockquote className="text-sm leading-relaxed text-white/55 flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div
                  className="pt-4 flex items-center gap-3"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover opacity-90"
                    style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.1)" }}
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-white/35">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CTA — hueso outer + dark card premium
      ══════════════════════════════════════════════════ */}
      <section
        id="contacto"
        className="scroll-mt-10 bg-[#F5F0E8] py-28 px-6 relative overflow-hidden"
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#A64B34]/[0.06] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1E3A34]/[0.07] rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-4xl relative z-10">
          {/* Gradient border around the card */}
          <div
            className="rounded-3xl p-px"
            style={{ background: "linear-gradient(135deg, rgba(166,75,52,0.4) 0%, rgba(30,58,52,0.3) 50%, rgba(255,255,255,0.05) 100%)", boxShadow: "0 40px 80px rgba(11,15,14,0.22)" }}
          >
            <div className="rounded-3xl overflow-hidden relative">
              <Image
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&h=600&fit=crop"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#0B0F0E]/93" />
              <div className="absolute inset-0" style={dotGridSubtle} />
              {/* Corner glows */}
              <div className="absolute top-0 left-0 w-80 h-80 bg-[#A64B34]/[0.12] rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#1E3A34]/[0.22] rounded-full blur-[80px] pointer-events-none" />

              <div className="relative z-10 py-20 px-8 text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-white/45 uppercase backdrop-blur-sm">
                  <span className="h-1 w-1 rounded-full bg-[#A64B34] animate-pulse" />
                  Disponible para nuevos proyectos
                </span>

                <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl tracking-tight">
                  ¿Listo para construir tu{" "}
                  <span className="text-gradient-lacre">solución personalizada</span>?
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-base text-white/45">
                  Cuéntanos tu idea. Nuestro equipo en Lima está listo para analizar
                  tu caso y proponerte el mejor camino tecnológico.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href="mailto:hola@mcgtsolutions.com"
                    className="btn-lacre-glow group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold bg-[#A64B34] text-white transition-all hover:bg-[#8b3e2b]"
                  >
                    <Mail className="h-4 w-4" />
                    Iniciar proyecto
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a
                    href="https://wa.me/51999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold border border-white/15 text-white transition hover:bg-white/[0.07]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-white/25">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" /> Lima, Perú
                  </span>
                  <span className="hidden sm:block h-3 w-px bg-white/10" />
                  <span className="inline-flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5" /> hola@mcgtsolutions.com
                  </span>
                  <span className="hidden sm:block h-3 w-px bg-white/10" />
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" /> Lun – Vie, 9 am – 6 pm PET
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FOOTER — #0B0F0E  (bookend del Hero)
      ══════════════════════════════════════════════════ */}
      <footer className="bg-[#0B0F0E] border-t border-white/[0.06] pt-16 pb-8 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            {/* Brand col */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#A64B34] flex items-center justify-center text-white font-bold text-lg">
                  M
                </div>
                <span className="text-lg font-bold tracking-wide text-white">
                  MCGT Solutions
                </span>
              </div>
              <p className="text-sm leading-relaxed text-white/40 max-w-sm">
                Software factory especializada en soluciones B2B a medida.
                Transformamos visiones en productos digitales que generan impacto real.
              </p>
              <div className="mt-4 flex flex-col gap-2 text-xs text-white/25">
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
              <div className="mt-5 flex gap-2">
                {[Globe, MessageCircle, Mail].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/30 transition hover:text-[#A64B34] hover:border-[#A64B34]/40"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Servicios */}
            <div>
              <h4 className="mb-4 text-[10px] font-semibold tracking-[0.18em] text-white/35 uppercase">
                Servicios
              </h4>
              <ul className="flex flex-col gap-2 text-sm text-white/30">
                {["Software a Medida","Plataformas SaaS","Integraciones y APIs","Aplicaciones Móviles","Cloud & DevOps","Consultoría Digital"].map((s) => (
                  <li key={s}>
                    <a href="#servicios" className="transition hover:text-white/60">{s}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Empresa */}
            <div>
              <h4 className="mb-4 text-[10px] font-semibold tracking-[0.18em] text-white/35 uppercase">
                Empresa
              </h4>
              <ul className="flex flex-col gap-2 text-sm text-white/30">
                <li><a href="#servicios" className="transition hover:text-white/60">Sobre nosotros</a></li>
                <li><a href="#proceso"   className="transition hover:text-white/60">Proceso</a></li>
                <li><a href="#"          className="transition hover:text-white/60">Industrias</a></li>
                <li><a href="#"          className="transition hover:text-white/60">Blog</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="mb-4 text-[10px] font-semibold tracking-[0.18em] text-white/35 uppercase">
                Legal
              </h4>
              <ul className="flex flex-col gap-2 text-sm text-white/30">
                <li><a href="#" className="transition hover:text-white/60">Términos de uso</a></li>
                <li><a href="#" className="transition hover:text-white/60">Política de privacidad</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/[0.05] pt-8 flex flex-col items-center justify-between gap-3 text-xs text-white/20 sm:flex-row">
            <span>
              &copy; {new Date().getFullYear()} MCGT Solutions S.A.C. · Lima, Perú. Todos los derechos reservados.
            </span>
            <span>Hecho con pasión en Lima</span>
          </div>
        </div>
      </footer>

    </main>
  )
}
