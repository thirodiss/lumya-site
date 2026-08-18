"use client";

import { useState } from "react";

const services = [
  {
    title: "Lumya Agency",
    subtitle: "O núcleo estratégico do Ecossistema Lumya.",
    desc: "A frente responsável por gestão, posicionamento, direcionamento estratégico, desenvolvimento de creators e conexão com oportunidades reais de crescimento.",
    img: "/lumya/servico-agency.png",
  },
  {
    title: "Lumya Podcast",
    subtitle: "Conversas acessíveis, humanas e inspiradoras.",
    desc: "Um espaço para ouvir histórias reais, abrir caminhos e mostrar que representatividade também nasce quando alguém tem a chance de ser escutado.",
    img: "/lumya/podcast-lumya.png",
  },
  {
    title: "Lumya Academy",
    subtitle: "Cursos, mentorias e desenvolvimento.",
    desc: "Formação prática para creators que desejam evoluir em comunicação, live, presença, monetização e construção de comunidade.",
    img: "/lumya/academy-workshop.png",
  },
  {
    title: "Lumya Creators",
    subtitle: "Uma comunidade que cresce junto.",
    desc: "Conectamos talentos a uma rede de apoio, troca e visibilidade, onde cada pessoa pode evoluir sem precisar caminhar sozinha.",
    img: "/lumya/servico-creators.png",
  },
];

const courses = [
  "Como crescer no TikTok LIVE",
  "Como virar presenteador forte",
  "Como ganhar dinheiro em batalha",
  "Oratória",
  "Criação de personagem",
  "Retenção de live",
  "Storytelling emocional",
  "Setup barato",
  "Como fechar publis",
];

const stats = [
  { number: "+100", label: "creators em desenvolvimento" },
  { number: "+50", label: "horas de mentorias e treinamentos" },
  { number: "+1M", label: "potencial de alcance em campanhas" },
  { number: "4", label: "frentes: Agency, Academy, Podcast e Creators" },
];

const steps = [
  {
    title: "Você se inscreve",
    desc: "Creators, streamers e parceiros contam sua história para a Lumya.",
  },
  {
    title: "A gente entende seu momento",
    desc: "Analisamos perfil, objetivos e potencial.",
  },
  {
    title: "Criamos direção",
    desc: "Posicionamento, conteúdo, lives, cursos e oportunidades.",
  },
  {
    title: "Você cresce com estrutura",
    desc: "Acompanhamento, comunidade e desenvolvimento.",
  },
];

const partners = [
  "TikTok LIVE",
  "Instagram",
  "YouTube",
  "Spotify",
  "Discord",
  "Marcas Parceiras",
];

const stories = [
  {
    type: "Creator",
    name: "A próxima história pode ser a sua",
    tag: "Conteúdo • Presença • Comunidade",
    desc: "A Lumya ajuda creators a transformarem vivência, autenticidade e comunicação em presença digital com direção.",
  },
  {
    type: "Streamer",
    name: "Toda voz merece oportunidade",
    tag: "Lives • Audiência • Monetização",
    desc: "Apoiamos streamers na construção de rotina, personagem, posicionamento e conexão com uma comunidade real.",
  },
  {
    type: "Apresentador",
    name: "Representatividade transforma futuros",
    tag: "Podcast • Eventos • Campanhas",
    desc: "Criamos espaço para histórias serem ouvidas, valorizadas e conectadas a marcas, projetos e novas oportunidades.",
  },
];

const imageClass =
  "w-full rounded-[32px] object-cover shadow-[0_18px_55px_rgba(7,27,58,0.08)] transition duration-500 hover:scale-[1.02]";

export default function HomePage() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <main className="bg-white text-[#071b3a]">
      <header className="sticky top-0 z-50 border-b border-[#e8eef9] bg-white/92 backdrop-blur-xl">
        <div className="border-b border-[#edf3ff] bg-[#f8fbff]">
          <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-2 text-center text-[11px] font-bold uppercase tracking-[0.22em] text-[#2378ff]">
            Inclusão • Conteúdo • Oportunidade • Transformação
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 md:px-8">
          <a href="#inicio" onClick={closeMenu}>
            <img
              src="/lumya/logo-lumya.png"
              alt="Lumya"
              className="h-14 w-auto transition duration-300 hover:scale-[1.02] md:h-16"
            />
          </a>

          <nav className="hidden items-center gap-10 text-[15px] font-bold text-[#183457] md:flex">
            <a href="#quem-somos" className="transition hover:text-[#2378ff]">Nossa História</a>
            <a href="#servicos" className="transition hover:text-[#2378ff]">Ecossistema</a>
            <a href="#academy" className="transition hover:text-[#2378ff]">Academy</a>
            <a href="#creators" className="transition hover:text-[#2378ff]">Creators</a>
            <a href="#podcast" className="transition hover:text-[#2378ff]">Podcast</a>
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <div className="text-right leading-tight">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#2378ff]">
                Movimento Lumya
              </p>
              <p className="text-sm font-semibold text-[#355070]">
                Histórias que inspiram
              </p>
            </div>

            <a
              href="#contato"
              className="rounded-full bg-[#2378ff] px-7 py-3 text-sm font-black text-white shadow-[0_12px_30px_rgba(35,120,255,0.28)] transition duration-300 hover:-translate-y-[1px] hover:bg-[#1667e8]"
            >
              Quero fazer parte
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="rounded-full border border-[#dbe5f5] bg-white px-4 py-3 text-sm font-black text-[#071b3a] md:hidden"
          >
            Menu
          </button>
        </div>

        {open && (
          <div className="border-t border-[#e8eef9] bg-white px-6 py-5 md:hidden">
            <div className="flex flex-col gap-4 text-base font-bold text-[#183457]">
              <a onClick={closeMenu} href="#quem-somos">Nossa História</a>
              <a onClick={closeMenu} href="#servicos">Ecossistema</a>
              <a onClick={closeMenu} href="#academy">Academy</a>
              <a onClick={closeMenu} href="#creators">Creators</a>
              <a onClick={closeMenu} href="#podcast">Podcast</a>
              <a
                onClick={closeMenu}
                href="#contato"
                className="mt-2 rounded-full bg-[#2378ff] px-6 py-3 text-center text-white"
              >
                Quero fazer parte
              </a>
            </div>
          </div>
        )}
      </header>

      <section
        id="inicio"
        className="relative overflow-hidden bg-gradient-to-br from-[#f6f9ff] via-white to-[#eef6ff] py-12"
      >
        <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[#d8ebff] opacity-70 blur-3xl" />
        <div className="absolute right-[-100px] top-[120px] h-[260px] w-[260px] rounded-full bg-[#c5f4ff] opacity-60 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-[0.78fr_1.22fr] md:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.32em] text-[#2378ff]">
              Transformando histórias em potência
            </p>

            <h1 className="mt-4 max-w-xl text-[36px] font-black leading-[1.03] tracking-[-0.04em] md:text-[52px]">
              Toda grande trajetória começa quando alguém acredita em você.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-[#355070] md:text-lg md:leading-8">
              Unimos gestão, capacitação, conteúdo, comunidade e oportunidades para creators, streamers e apresentadores que desejam transformar talento em carreira e representatividade em impacto.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#contato"
                className="rounded-full bg-[#2378ff] px-7 py-3 font-black text-white shadow-[0_12px_30px_rgba(35,120,255,0.22)] transition duration-300 hover:-translate-y-[1px] hover:bg-[#1667e8]"
              >
                Quero fazer parte
              </a>

              <a
                href="#academy"
                className="rounded-full border border-[#dce6f6] bg-white px-7 py-3 font-black transition duration-300 hover:-translate-y-[1px] hover:border-[#2378ff]"
              >
                Ver cursos
              </a>
            </div>
          </div>

          <img
            src="/lumya/hero-principal.png"
            alt="Creator Lumya em estúdio acessível e moderno"
            className={`${imageClass} h-[420px] md:h-[520px]`}
          />
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 md:grid-cols-4 md:px-8">
          {stats.map((item) => (
            <div
              key={item.label}
              className="group rounded-[30px] border border-[#e8eef9] bg-gradient-to-br from-white to-[#f3f8ff] p-8 shadow-[0_18px_45px_rgba(7,27,58,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(35,120,255,0.14)]"
            >
              <p className="text-[54px] font-black leading-none tracking-[-0.06em] text-[#2378ff] transition duration-300 group-hover:scale-105">
                {item.number}
              </p>
              <p className="mt-4 text-base font-black leading-6 text-[#071b3a]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f7faff] py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.32em] text-[#2378ff]">
              Como funciona
            </p>

            <h2 className="mt-3 text-[30px] font-black leading-tight tracking-[-0.03em] md:text-[42px]">
              Da história ao crescimento: a Lumya cria o caminho.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="rounded-[30px] border border-[#e8eef9] bg-white p-7 shadow-[0_18px_45px_rgba(7,27,58,0.05)] transition duration-300 hover:-translate-y-1">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2378ff] text-2xl font-black text-white">
                    {["✍️", "🔎", "🚀", "🌟"][index]}
                  </div>

                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#2378ff]">
                    Etapa {index + 1}
                  </p>

                  <h3 className="mt-3 text-xl font-black leading-tight">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#355070]">
                    {step.desc}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="absolute right-[-18px] top-1/2 hidden -translate-y-1/2 text-3xl font-black text-[#2378ff] md:block">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="rounded-[34px] border border-[#e8eef9] bg-[#071b3a] p-8 text-white shadow-[0_22px_70px_rgba(7,27,58,0.16)] md:p-10">
            <p className="text-xs font-black uppercase tracking-[0.32em] text-[#7db4ff]">
              Presença digital
            </p>

            <h2 className="mt-3 max-w-3xl text-[30px] font-black leading-tight tracking-[-0.03em] md:text-[42px]">
              Um ecossistema preparado para conectar creators, marcas, plataformas e comunidades.
            </h2>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-6">
              {partners.map((partner, index) => (
                <div
                  key={partner}
                  className="rounded-2xl border border-white/10 bg-white/10 px-4 py-5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition duration-300 hover:-translate-y-1 hover:bg-white/15"
                >
    <div className="flex justify-center">
  <img
    src={[
      "/lumya/icons/tiktok.svg",
      "/lumya/icons/instagram.svg",
      "/lumya/icons/youtube.svg",
      "/lumya/icons/spotify.svg",
      "/lumya/icons/discord.svg",
      "/lumya/icons/partners.svg",
    ][index]}
    alt={partner}
    className="h-10 w-10 object-contain"
  />
</div>
                  <p className="mt-3 text-sm font-black text-white/90">
                    {partner}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="quem-somos" className="py-12">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-[1.15fr_0.85fr] md:px-8">
          <img
            src="/lumya/sobre-podcast.png"
            alt="Equipe Lumya construindo estratégia para creators"
            className={`${imageClass} h-[360px] md:h-[430px]`}
          />

          <div>
            <p className="text-xs font-black uppercase tracking-[0.32em] text-[#2378ff]">
              Nossa História
            </p>

            <h2 className="mt-3 text-[30px] font-black leading-tight tracking-[-0.03em] md:text-[40px]">
              Uma agência criada para transformar visibilidade em oportunidade.
            </h2>

            <div className="mt-5 space-y-4 text-base leading-7 text-[#355070] md:text-lg md:leading-8">
              <p>
                A Lumya apoia creators com ampla acessibilidade que desejam crescer nas plataformas digitais através
                de conteúdo, lives, entretenimento e conexão humana.
              </p>
              <p>
                Nossa missão vai além da gestão de talentos. Criamos um ecossistema onde histórias
                reais tenham reconhecimento, preparo e potência.
              </p>
              <p className="font-bold text-[#071b3a]">
                Quando existe oportunidade, histórias comuns se tornam extraordinárias.
              </p>

              <div className="mt-6 rounded-[24px] bg-gradient-to-r from-[#2378ff] to-[#1ea7e9] p-6 text-white shadow-[0_18px_45px_rgba(35,120,255,0.25)]">
                <p className="text-lg font-black leading-8">
                  Nossa missão não é apenas gerenciar creators.
                  É construir um movimento capaz de abrir portas para milhares de histórias que ainda não tiveram a oportunidade de ser vistas.
                </p>
              </div>
                        </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="bg-[#f7faff] py-12">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.32em] text-[#2378ff]">
              Ecossistema Lumya
            </p>

            <h2 className="mt-3 text-[30px] font-black leading-tight tracking-[-0.03em] md:text-[40px]">
              Estrutura, desenvolvimento e conexão para creators.
            </h2>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="overflow-hidden rounded-[28px] border border-[#e8eef9] bg-white shadow-[0_18px_45px_rgba(7,27,58,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(7,27,58,0.10)]"
              >
                <img
                  src={service.img}
                  alt={service.subtitle}
                  className="h-80 w-full object-cover"
                />

                <div className="p-7">
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-[#2378ff]">
                    {service.title}
                  </p>
                  <h3 className="mt-2 text-2xl font-black">{service.subtitle}</h3>
                  <p className="mt-3 text-base leading-7 text-[#355070]">{service.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="academy" className="py-12">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-[0.9fr_1.1fr] md:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.32em] text-[#2378ff]">
              Lumya Academy
            </p>

            <h2 className="mt-3 text-[30px] font-black leading-tight tracking-[-0.03em] md:text-[42px]">
              Cursos para transformar presença digital em oportunidade real.
            </h2>

            <p className="mt-5 text-base leading-7 text-[#355070] md:text-lg md:leading-8">
              A Academy nasce para preparar creators com linguagem prática, acolhedora e direta.
              Do primeiro setup até a construção de personagem, live, retenção e publis.
            </p>

            <a
              href="#contato"
              className="mt-7 inline-flex rounded-full bg-[#2378ff] px-7 py-3 font-black text-white shadow-[0_12px_30px_rgba(35,120,255,0.22)] transition duration-300 hover:-translate-y-[1px] hover:bg-[#1667e8]"
            >
              Tenho interesse nos cursos
            </a>
          </div>

          <div className="grid gap-3 rounded-[32px] border border-[#e8eef9] bg-[#f8fbff] p-5 shadow-[0_18px_55px_rgba(7,27,58,0.06)] sm:grid-cols-2">
            {courses.map((course) => (
              <div
                key={course}
                className="rounded-2xl border border-[#e1ebfb] bg-white px-5 py-4 text-sm font-black text-[#183457] shadow-[0_10px_24px_rgba(7,27,58,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#2378ff]"
              >
                {course}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7faff] py-12">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-[0.85fr_1.15fr] md:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.32em] text-[#2378ff]">
              Movimento
            </p>

            <h2 className="mt-3 text-[30px] font-black leading-tight tracking-[-0.03em] md:text-[40px]">
              Criamos conexões e transformamos histórias em potência.
            </h2>

            <p className="mt-5 text-base leading-7 text-[#355070] md:text-lg md:leading-8">
              A Lumya é parceria, direção e presença. Caminhamos junto com cada creator para que
              sua voz encontre público, sua história encontre valor e seu talento encontre futuro.
            </p>

            <div className="mt-5 rounded-[24px] border border-[#e8eef9] bg-white p-6 text-base leading-7 text-[#355070] shadow-[0_12px_35px_rgba(7,27,58,0.04)]">
              <strong className="text-[#071b3a]">Aqui, inclusão não é discurso.</strong>
              <br />
              É estrutura. É oportunidade. É escuta. É futuro.
            </div>
          </div>

          <img
            src="/lumya/evento-lumya.png"
            alt="Evento Lumya"
            className={`${imageClass} h-[360px] md:h-[430px]`}
          />
        </div>
      </section>

      <section id="creators" className="py-12">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-[1.2fr_0.8fr] md:px-8">
          <img
            src="/lumya/creators-juntos.png"
            alt="Creators Lumya reunidos em conversa"
            className={`${imageClass} h-[360px] md:h-[460px]`}
          />

          <div>
            <p className="text-xs font-black uppercase tracking-[0.32em] text-[#2378ff]">
              Creators
            </p>

            <h2 className="mt-3 text-[30px] font-black leading-tight tracking-[-0.03em] md:text-[40px]">
              Pessoas reais, jornadas reais e impacto real.
            </h2>

            <p className="mt-5 text-base leading-7 text-[#355070] md:text-lg md:leading-8">
              Cada creator carrega uma história, uma potência e uma forma única de se comunicar.
              A Lumya ajuda essa potência a chegar mais longe com apoio, estratégia e comunidade.
            </p>

            <p className="mt-4 text-base font-bold leading-7 text-[#071b3a] md:text-lg md:leading-8">
              Ninguém cresce sozinho. A gente cria junto, aprende junto e transforma junto.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
  <div className="mx-auto max-w-7xl px-6 md:px-8">
    <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.32em] text-[#2378ff]">
          Histórias que inspiram
        </p>

        <h2 className="mt-3 text-[30px] font-black leading-tight tracking-[-0.03em] md:text-[42px]">
          A Lumya existe para transformar potencial em oportunidade.
        </h2>
      </div>

      <p className="text-base leading-7 text-[#355070] md:text-lg md:leading-8">
        Cada pessoa chega com uma história, um sonho e uma forma única de se comunicar.
        Nosso papel é criar direção, estrutura e visibilidade para que essa história encontre público.
      </p>
    </div>

    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {stories.map((story, index) => (
        <article
          key={story.name}
          className="group overflow-hidden rounded-[32px] border border-[#e8eef9] bg-[#f8fbff] shadow-[0_18px_45px_rgba(7,27,58,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(35,120,255,0.12)]"
        >
          <div className="relative flex h-[180px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#071b3a] via-[#123f78] to-[#2378ff] text-white">
            <div className="absolute left-[-40px] top-[-40px] h-32 w-32 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute bottom-[-50px] right-[-30px] h-40 w-40 rounded-full bg-[#1ea7e9]/30 blur-2xl" />

            <div className="relative text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-white/15 text-3xl shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]">
                {["✨", "🎥", "🎙️"][index]}
              </div>

              <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-white/75">
                {story.type}
              </p>
            </div>
          </div>

          <div className="p-7">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#2378ff]">
              {story.tag}
            </p>

            <h3 className="mt-3 text-2xl font-black leading-tight text-[#071b3a]">
              {story.name}
            </h3>

            <p className="mt-4 text-base leading-7 text-[#355070]">
              {story.desc}
            </p>

            <a
              href="#contato"
              className="mt-6 inline-flex rounded-full border border-[#dce6f6] bg-white px-5 py-3 text-sm font-black text-[#071b3a] transition hover:border-[#2378ff] hover:text-[#2378ff]"
            >
              Quero contar minha história
            </a>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

      <section id="podcast" className="bg-[#f7faff] py-12">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-[0.85fr_1.15fr] md:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.32em] text-[#2378ff]">
              Lumya Podcast
            </p>

            <h2 className="mt-3 text-[30px] font-black leading-tight tracking-[-0.03em] md:text-[40px]">
              Conversas que acolhem, inspiram e abrem caminhos.
            </h2>

            <p className="mt-5 text-base leading-7 text-[#355070] md:text-lg md:leading-8">
              O podcast da Lumya é um espaço de escuta e representatividade. Cada conversa nasce
              para aproximar pessoas, fortalecer talentos e mostrar que toda história pode inspirar transformação.
            </p>
          </div>

          <img
            src="/lumya/podcast-lumya.png"
            alt="Lumya Podcast em entrevista"
            className={`${imageClass} h-[360px] md:h-[430px]`}
          />
        </div>
      </section>

      <section className="bg-[#f7faff] py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-10 md:grid-cols-[0.82fr_1.18fr] md:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.32em] text-[#2378ff]">
                Quem está por trás
              </p>

              <h2 className="mt-3 text-[30px] font-black leading-tight tracking-[-0.03em] md:text-[42px]">
                Visão, propósito e execução para transformar histórias em potência.
              </h2>

              <p className="mt-5 text-base leading-7 text-[#355070] md:text-lg md:leading-8">
                A Lumya nasce com a missão de ampliar oportunidades, fortalecer talentos e criar
                caminhos reais para creators que desejam crescer com estrutura, identidade e propósito.
              </p>

              <div className="mt-6 rounded-[26px] border border-[#dbe9ff] bg-white p-6 shadow-[0_14px_35px_rgba(7,27,58,0.05)]">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#2378ff]">
                  Direção Lumya
                </p>
                <p className="mt-3 text-base leading-7 text-[#355070]">
                  Estratégia, posicionamento, tecnologia e comunidade reunidos em um ecossistema
                  criado para transformar potencial em oportunidade real.
                </p>
              </div>
            </div>

            <article className="overflow-hidden rounded-[34px] border border-[#e8eef9] bg-white shadow-[0_20px_65px_rgba(7,27,58,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(35,120,255,0.13)]">
              <div className="grid md:grid-cols-[0.72fr_1.28fr] md:items-stretch">
                <div className="flex items-end justify-center bg-gradient-to-br from-[#eef6ff] via-[#f8fbff] to-white px-6 pt-6">
                  <img
                    src="/lumya/founder-02.png"
                    alt="Thi_rodiss, fundador da Lumya"
                    className="h-[320px] w-full object-contain object-bottom"
                  />
                </div>

                <div className="p-7 md:p-9">
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-[#2378ff]">
                    Thi_rodiss
                  </p>

                  <h3 className="mt-2 text-[30px] font-black leading-tight md:text-[34px]">
                    Fundador da Lumya.
                  </h3>

                  <p className="mt-4 text-base leading-7 text-[#355070]">
                    Responsável pela visão estratégica e pela construção do ecossistema Lumya,
                    conectando comunicação, tecnologia, desenvolvimento de creators e oportunidades
                    para transformar boas histórias em projetos capazes de crescer e gerar impacto.
                  </p>

                  <p className="mt-4 text-base font-bold leading-7 text-[#071b3a]">
                    A ideia é simples: talento precisa de oportunidade, mas também precisa de direção,
                    estrutura e alguém disposto a acreditar antes de todo mundo.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href="https://www.instagram.com/thi_rodiss/"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-[#dce6f6] bg-white px-5 py-3 text-sm font-black transition hover:border-[#2378ff] hover:text-[#2378ff]"
                    >
                      Instagram
                    </a>

                    <a
                      href="https://www.tiktok.com/@thi_rodiss?lang=pt-BR"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-[#2378ff] px-5 py-3 text-sm font-black text-white shadow-[0_10px_25px_rgba(35,120,255,0.22)] transition hover:-translate-y-[1px] hover:bg-[#1667e8]"
                    >
                      TikTok
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="contato" className="py-12">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 rounded-[36px] border border-[#dbe9ff] bg-white p-6 shadow-[0_18px_55px_rgba(7,27,58,0.06)] md:grid-cols-[1.12fr_0.88fr] md:items-center md:p-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.32em] text-[#2378ff]">
                Faça parte
              </p>

              <h2 className="mt-3 text-[30px] font-black leading-tight tracking-[-0.03em] md:text-[44px]">
                Sua história pode inspirar o mundo.
              </h2>

              <p className="mt-5 text-base leading-7 text-[#355070] md:text-lg md:leading-8">
                A Lumya acredita que toda pessoa merece espaço, oportunidade e visibilidade para
                transformar sua trajetória através do universo digital.
              </p>

              <p className="mt-4 text-base leading-7 text-[#355070] md:text-lg md:leading-8">
                Se você deseja crescer como creator, streamer, apresentador ou parceiro da comunidade
                Lumya, queremos conhecer sua história.
              </p>

              <img
                src="/lumya/cta-lumya.png"
                alt="Equipe Lumya"
                className={`${imageClass} mt-7 h-[320px]`}
              />
            </div>

            <form
              action="https://formspree.io/f/xvznqong"
              method="POST"
              className="rounded-[30px] border border-[#e8eef9] bg-[#f8fbff] p-6 shadow-[0_14px_35px_rgba(7,27,58,0.04)]"
            >
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#2378ff]">
                Formulário Lumya
              </p>

              <h3 className="mt-3 text-[26px] font-black leading-tight">
                Vamos construir isso juntos.
              </h3>

              <div className="mt-6 space-y-4">
                <input required type="text" name="nome" placeholder="Seu nome" className="w-full rounded-2xl border border-[#dbe5f5] bg-white px-5 py-3 outline-none focus:border-[#2378ff]" />
                <input required type="email" name="email" placeholder="Seu e-mail" className="w-full rounded-2xl border border-[#dbe5f5] bg-white px-5 py-3 outline-none focus:border-[#2378ff]" />
                <input type="text" name="whatsapp" placeholder="WhatsApp" className="w-full rounded-2xl border border-[#dbe5f5] bg-white px-5 py-3 outline-none focus:border-[#2378ff]" />

                <select name="perfil" className="w-full rounded-2xl border border-[#dbe5f5] bg-white px-5 py-3 outline-none focus:border-[#2378ff]">
                  <option>Creator</option>
                  <option>Streamer</option>
                  <option>Apresentador(a)</option>
                  <option>Interessado(a) nos cursos</option>
                  <option>Parceiro</option>
                  <option>Patrocinador</option>
                  <option>Outro</option>
                </select>

                <textarea
                  name="mensagem"
                  rows={4}
                  placeholder="Conte um pouco sobre você, seus sonhos e como a Lumya pode caminhar ao seu lado."
                  className="w-full resize-none rounded-2xl border border-[#dbe5f5] bg-white px-5 py-3 outline-none focus:border-[#2378ff]"
                />

                <button type="submit" className="w-full rounded-full bg-[#2378ff] px-8 py-4 text-sm font-black text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-[1px] hover:bg-[#1667e8]">
                  Enviar minha história
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#e8eef9] bg-[#071b3a] px-6 py-12 text-white md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <img src="/lumya/logo-lumya.png" alt="Lumya" className="h-20 w-auto rounded-2xl bg-white p-2" />
            <p className="mt-5 max-w-md text-sm leading-7 text-white/75">
              A Lumya é um ecossistema inclusivo criado para dar visibilidade,
              estrutura e oportunidade a creators, streamers e apresentadores digitais.
            </p>
          </div>

          <div>
            <h4 className="font-black">Ecossistema</h4>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
              <a href="#servicos">Agency</a>
              <a href="#academy">Academy</a>
              <a href="#podcast">Podcast</a>
              <a href="#creators">Creators</a>
            </div>
          </div>

          <div>
            <h4 className="font-black">Comunidade</h4>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
              <a href="#contato">Fazer parte</a>
              <a href="#academy">Cursos</a>
              <a href="#quem-somos">Nossa História</a>
              <a href="#inicio">Manifesto</a>
            </div>
          </div>

          <div>
            <h4 className="font-black">Contato</h4>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
              <a href="mailto:contato@agencialumya.com.br">contato@agencialumya.com.br</a>
              <span>São Paulo • Brasil</span>
              <span>Transformando histórias em potência.</span>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/55 md:flex-row">
          <p>© 2026 Lumya Agency. Todos os direitos reservados.</p>
          <p>Inclusão • Criatividade • Oportunidade • Futuro</p>
        </div>
      </footer>
    </main>
  );
}