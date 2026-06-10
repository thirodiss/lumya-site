"use client";

import { useState } from "react";

const services = [
  {
    title: "Lumya Agency",
    subtitle: "Gestão com presença, cuidado e direção.",
    desc: "Acompanhamos creators, streamers e apresentadores digitais com estratégia, posicionamento e suporte para que cada história encontre espaço, voz e oportunidade.",
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

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          <a href="#inicio" onClick={closeMenu}>
            <img
              src="/lumya/logo-lumya.png"
              alt="Lumya"
              className="h-20 w-auto transition duration-300 hover:scale-[1.02] md:h-24"
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

            <h1 className="mt-4 max-w-xl text-[38px] font-black leading-[1.03] tracking-[-0.04em] md:text-[52px]">
              O mundo precisa ouvir histórias como a sua.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-[#355070] md:text-lg md:leading-8">
              A Lumya conecta creators, streamers e apresentadores PCD a oportunidades reais de crescimento,
              visibilidade e impacto. Aqui, sua história não é detalhe. É potência.
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
                A Lumya apoia creators PCD que desejam crescer nas plataformas digitais através
                de conteúdo, lives, entretenimento e conexão humana.
              </p>
              <p>
                Nossa missão vai além da gestão de talentos. Criamos um ecossistema onde histórias
                reais tenham reconhecimento, preparo e potência.
              </p>
              <p className="font-bold text-[#071b3a]">
                Quando existe oportunidade, histórias comuns se tornam extraordinárias.
              </p>
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

<section className="bg-[#f7faff] py-12">
  <div className="mx-auto max-w-7xl px-6 md:px-8">

    <div className="max-w-3xl">
      <p className="text-xs font-black uppercase tracking-[0.32em] text-[#2378ff]">
        Quem está por trás
      </p>

      <h2 className="mt-3 text-[30px] font-black leading-tight tracking-[-0.03em] md:text-[42px]">
        Pessoas reais construindo um movimento real.
      </h2>

      <p className="mt-5 text-base leading-7 text-[#355070] md:text-lg md:leading-8">
        A Lumya nasceu da vontade de criar oportunidades, inclusão e visibilidade
        para creators que merecem ser vistos, ouvidos e valorizados.
      </p>
    </div>

    <div className="mt-10 grid gap-6 md:grid-cols-2">

      <article className="overflow-hidden rounded-[32px] border border-[#e8eef9] bg-white shadow-[0_18px_55px_rgba(7,27,58,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(7,27,58,0.10)]">

        <img
          src="/lumya/founder-01.png"
          alt="Aline"
          className="h-[420px] w-full object-cover"
        />

        <div className="p-7">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#2378ff]">
            Criadora
          </p>

          <h3 className="mt-2 text-[30px] font-black leading-tight">
            A mente por trás da Lumya.
          </h3>

          <p className="mt-4 text-base leading-7 text-[#355070]">
            Responsável pela estrutura, direção e construção do ecossistema da Lumya,
            conectando propósito, acolhimento e oportunidade em um movimento feito para transformar histórias.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://www.instagram.com/alinemendes/"
              target="_blank"
              className="rounded-full border border-[#dce6f6] bg-white px-5 py-3 text-sm font-black transition hover:border-[#2378ff]"
            >
              Instagram
            </a>

            <a
              href="https://www.tiktok.com/@ali.nneee?lang=pt-BR"
              target="_blank"
              className="rounded-full bg-[#2378ff] px-5 py-3 text-sm font-black text-white transition hover:bg-[#1667e8]"
            >
              TikTok
            </a>
          </div>
        </div>
      </article>

      <article className="overflow-hidden rounded-[32px] border border-[#e8eef9] bg-white shadow-[0_18px_55px_rgba(7,27,58,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(7,27,58,0.10)]">

        <img
          src="/lumya/founder-02.png"
          alt="Thi_rodiss"
          className="h-[420px] w-full object-cover"
        />

        <div className="p-7">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#2378ff]">
            Thi_rodiss
          </p>

          <h3 className="mt-2 text-[30px] font-black leading-tight">
            Creator e idealizador do movimento.
          </h3>

          <p className="mt-4 text-base leading-7 text-[#355070]">
            Apaixonado por comunicação, creators e transformação digital,
            ajuda a construir uma comunidade onde pessoas reais possam crescer com apoio, visibilidade e propósito.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://www.instagram.com/thi_rodiss/"
              target="_blank"
              className="rounded-full border border-[#dce6f6] bg-white px-5 py-3 text-sm font-black transition hover:border-[#2378ff]"
            >
              Instagram
            </a>

            <a
              href="https://www.tiktok.com/@thi_rodiss?lang=pt-BR"
              target="_blank"
              className="rounded-full bg-[#2378ff] px-5 py-3 text-sm font-black text-white transition hover:bg-[#1667e8]"
            >
              TikTok
            </a>
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