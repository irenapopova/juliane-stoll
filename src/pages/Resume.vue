<script setup>
import s from "../styles/pages/resume.module.css";
import portrait from "../assets/images/julia-profile.jpg";

const person = {
  name: "Juliane Stoll",
  note: "1 Tochter (Luise, 18 Jahre)",
  currentRole: {
    title: "Waldläuferin",
    org: "Naturpark Barnim",
  },
  contact: {
    // Empfehlung fürs öffentliche Web: nur Stadt + E-Mail.
    city: "Berlin (Spandau)",
    email: "Stoll.juli84@gmail.com",
    // Optional: wenn du willst. Sonst einfach "" lassen.
    phone: "",
  },
};

const education = [
  { title: "Abitur" },
  {
    title: "Bauzeichnerin",
    meta: "2 Jahre",
    desc: "Tätigkeit in unterschiedlichen Ingenieurbüros.",
  },
  {
    title: "Zertifiziert als Finanzbuchhalterin",
    meta: "2 Jahre",
    desc: "Mieten- und Finanzbuchhaltung.",
  },
  {
    title: "Ausbildung zur Ergotherapeutin",
    meta: "2 Jahre",
    desc: "Wissen und Handwerkskunde (ohne Abschlusszeugnis).",
  },
  {
    title: "Zertifiziert als Kinder- und Jugendbetreuerin",
  },
];

const focus = [
  {
    title: "Pädagogische Betreuerin (Erziehungshelferin)",
    area: "Betreuung",
    bullets: [
      "Betreuung von Kindern von 1–12 Jahren in verschiedenen Einrichtungen.",
    ],
  },
  {
    title: "Technische Mitarbeiterin",
    area: "Vermessungsbüro",
    bullets: [
      "Anfertigen von amtlichen und privatwirtschaftlichen Lageplänen.",
      "Erstellen von Bestands- und Leitungsplänen.",
    ],
  },
  {
    title: "Technische Mitarbeiterin",
    area: "Immobilienmanagement",
    bullets: [
      "Verwalten von Mieterkonten.",
      "Erworbene Portfolios datenkompatibel aufbereiten.",
    ],
  },
  {
    title: "Sekretariatsmitarbeiterin",
    area: "Office",
    bullets: [
      "Empfangsdienst.",
      "Kundenakquise.",
      "Allgemeine Büroarbeiten.",
    ],
  },
];

const softSkills = [
  "präzises Arbeiten",
  "verantwortungsbewusst",
  "souveräner Umgang mit Zahlen und Sachverhalten",
  "kundenorientierte Arbeitsweise",
  "Fahrerlaubnis vorhanden",
  "handwerklich begabt",
  "kreativer Ausdruck mit Farbe, Pflanzen und Holz",
  "freundlich und zugewandt",
  "ziel- und lösungsorientiert",
];

// Punkte-Level aus dem CV-Foto grob übernommen (0–5).
const skills = [
  { name: "Deutsch", level: 5 },
  { name: "Englisch", level: 2 },
  { name: "Russisch", level: 2 },
  { name: "AutoCAD", level: 4 },
  { name: "Lexware", level: 4 },
];

const sachkompetenzen = [
  "Pädagogische Begleitung im Alltag",
  "Naturpädagogische Aktivitäten",
  "Kreativer Ausdruck mit Farbe, Pflanzen und Holz",
  "Strukturgebende Alltagsgestaltung",
];

const methodischeKompetenzen = [
  "Ressourcenorientiertes Arbeiten",
  "Strukturierte Planung und Dokumentation",
  "Lösungsorientierte Gesprächsführung",
  "Sicherer Umgang mit Aufgaben und Prioritäten",
];

const taetigkeitsprofil = [
  "Betreuung und Förderung von Kindern",
  "Gestaltung von Lern- und Erfahrungsräumen",
  "Begleitung von Entwicklungsprozessen",
  "Zusammenarbeit mit Bezugspersonen und Jugendamt",
];
</script>

<template>
  <section :class="s.card">
    <header :class="s.top">
      <div>
        <h1 :class="s.title">Lebenslauf</h1>
        <p :class="s.muted">
          Kurzprofil, Ausbildung, Schwerpunkte & Skills
        </p>
      </div>

      <!-- Lege deine PDF in /public/resume.pdf ab -->
      <a :class="s.btn" href="/resume.pdf" target="_blank" rel="noreferrer">
        PDF herunterladen
      </a>
    </header>

    <div :class="s.grid">
      <!-- LEFT: Kontakt / Überblick -->
      <aside :class="s.side">
        <img :class="s.sidebarAvatar" :src="portrait" alt="Porträt von Juliane Stoll" />
        <h2 :class="s.sidebarTitle">{{ person.name }}</h2>
        <p :class="s.muted">{{ person.note }}</p>

        <div :class="s.block">
          <h3 :class="s.blockTitle">Aktuelle Position</h3>
          <p><strong>{{ person.currentRole.title }}</strong></p>
          <p :class="s.muted">{{ person.currentRole.org }}</p>
        </div>

        <div :class="s.block">
          <h3 :class="s.blockTitle">Kontakt</h3>
          <ul :class="s.clean">
            <!-- Empfehlung: Adresse/Telefon ggf. ausblenden oder kürzen -->
            <li><span :class="s.label">Ort:</span> {{ person.contact.city }}</li>
            <li>
              <span :class="s.label">E-Mail:</span>
              <a :class="s.link" :href="`mailto:${person.contact.email}`">{{ person.contact.email }}</a>
            </li>
            <li v-if="person.contact.phone">
              <span :class="s.label">Telefon:</span> {{ person.contact.phone }}
            </li>
          </ul>
        </div>

        <div :class="s.block">
          <h3 :class="s.blockTitle">Kenntnisse</h3>
          <ul :class="s.clean">
            <li v-for="skill in skills" :key="skill.name" :class="s.skillRow">
              <span :class="s.skillName">{{ skill.name }}</span>
              <span :class="s.dots" :aria-label="`${skill.level} von 5`">
                <span v-for="n in 5" :key="n" :class="[s.dot, { [s.on]: n <= skill.level }]"></span>
              </span>
            </li>
          </ul>
        </div>

        <div :class="s.block">
          <h3 :class="s.blockTitle">Sachkompetenzen</h3>
          <ul :class="s.list">
            <li v-for="item in sachkompetenzen" :key="item">{{ item }}</li>
          </ul>
        </div>

        <div :class="s.block">
          <h3 :class="s.blockTitle">Methodische Kompetenzen</h3>
          <ul :class="s.list">
            <li v-for="item in methodischeKompetenzen" :key="item">{{ item }}</li>
          </ul>
        </div>

        <div :class="s.block">
          <h3 :class="s.blockTitle">Tätigkeitsprofil</h3>
          <ul :class="s.list">
            <li v-for="item in taetigkeitsprofil" :key="item">{{ item }}</li>
          </ul>
        </div>
      </aside>

      <!-- RIGHT: Inhalt -->
      <div :class="s.content">
        <section :class="s.section">
          <h2 :class="s.sectionTitle">Ausbildung</h2>
          <div :class="s.item" v-for="ed in education" :key="ed.title">
            <div :class="s.row">
              <strong>{{ ed.title }}</strong>
              <span :class="s.muted" v-if="ed.meta">{{ ed.meta }}</span>
            </div>
            <p :class="s.muted" v-if="ed.desc">{{ ed.desc }}</p>
          </div>
        </section>

        <section :class="s.section">
          <h2 :class="s.sectionTitle">Berufliche Schwerpunkte</h2>

          <div :class="s.item" v-for="role in focus" :key="role.title">
            <div :class="s.row">
              <strong>{{ role.title }}</strong>
              <span :class="s.muted" v-if="role.area">{{ role.area }}</span>
            </div>
            <ul :class="s.list">
              <li v-for="b in role.bullets" :key="b">{{ b }}</li>
            </ul>
          </div>
        </section>

        <section :class="s.section">
          <h2 :class="s.sectionTitle">Soft Skills</h2>
          <ul :class="s.pillList">
            <li v-for="p in softSkills" :key="p" :class="s.pill">{{ p }}</li>
          </ul>
        </section>
      </div>
    </div>
  </section>
</template>
