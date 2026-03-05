<script setup>
import s from "../styles/pages/resume.module.css";
import portrait320 from "../assets/images/profile/julia-profile-320.jpg";
import portrait640 from "../assets/images/profile/julia-profile-640.jpg";
import portrait960 from "../assets/images/profile/julia-profile-960.jpg";

const person = {
  name: "Juliane Stoll",
  note: "1 Tochter (Luise, 18 Jahre)",
  birth: "07.02.1979 (Spremberg)",
  nationality: "Deutsch",
  maritalStatus: "Ledig",
  currentRole: {
    title: "Mitarbeiterin Fertigung / Optische Kontrolle & Endkontrolle",
    org: "Carl Zeiss Meditec AG, Berlin (09/2022 – 09/2024)",
  },
  contact: {
    street: "Götelstraße 63",
    zipCity: "13595 Berlin",
    email: "Stoll.juli84@gmail.com",
    phone: "0176 61729648",
  },
};

const experience = [
  {
    title: "Mitarbeiterin Fertigung / Optische Kontrolle & Endkontrolle",
    meta: "09/2022 – 09/2024 · Carl Zeiss Meditec AG, Berlin",
    bullets: [
      "Hygienegerechtes Arbeiten im Reinraum.",
      "Qualitätsprüfung und Konfektionierung optischer Komponenten (IOL).",
      "Durchführung von SOP-gestützten Prozessen.",
      "Finale Qualitätskontrolle und Prozessfreigaben.",
      "Schichtübergreifende Abstimmung zur Prozesssicherung.",
    ],
  },
  {
    title: "Scout Waldläufer",
    meta: "08/2020 – 03/2022 · Naturverein Grüne Akademie Berlin-Brandenburg e.V.",
    bullets: [
      "Zusammenarbeit mit Berliner Forsten.",
      "Wildaufsicht und Dokumentation im Naturpark Barnim.",
      "Konfliktvermittlung im Hundeauslaufgebiet.",
      "Öffentlichkeitsarbeit und Durchführung von Kinderveranstaltungen.",
    ],
  },
  {
    title: "Tourenfahrerin",
    meta: "06/2019 – 12/2019 · Berliner Tafel e.V.",
    bullets: [
      "Be- und Entladung von Transportern.",
      "Verteilung gespendeter Lebensmittel.",
      "Warenkontrolle und Sortierung.",
    ],
  },
  {
    title: "Zustellerin",
    meta: "10/2014 – 09/2015 · Zustellagentur Spandau",
    bullets: ["Nächtliche Zustellung von Tages- und Wochenzeitungen."],
  },
  {
    title: "Pädagogische Betreuerin",
    meta: "10/2012 – 06/2014 · „Mütter in Berlin“",
    bullets: ["Betreuung von Kindern (1–12 Jahre)."],
  },
  {
    title: "Finanzbuchhalterin",
    meta: "01/2006 – 09/2009 · Barg Group Immobilienmanagement",
    bullets: [
      "Debitoren- und Kreditorenbuchhaltung.",
      "Mahnwesen und Kautionsverwaltung.",
      "Datenverarbeitung und Jahresabschlussvorbereitung.",
    ],
  },
  {
    title: "Sekretariatsmitarbeiterin",
    meta: "04/2005 – 05/2005 · Allianz Versicherung",
    bullets: ["Empfang, Büroorganisation, Kundenkontakt."],
  },
  {
    title: "Bauzeichnerin / Callcenter Agentin",
    meta: "2001 – 2004 · Verschiedene Stationen",
    bullets: [
      "Erstellung technischer Zeichnungen und Planunterlagen.",
      "Telefonkoordination Inbound & Outbound.",
    ],
  },
];

const education = [
  {
    title: "Fachkraft Optik (Zertifikat)",
    meta: "03/2022 – 09/2022 · bbw Bildungswerk der Wirtschaft",
    desc: "Praktikum: Carl Zeiss Meditec AG.",
  },
  {
    title: "Ausbildung Ergotherapie (ohne Abschluss)",
    meta: "10/2015 – 09/2017",
  },
  {
    title: "Kinder- und Jugendbetreuerin (Zertifikat)",
    meta: "01/2014 – 06/2014",
  },
  {
    title: "Finanzbuchhalterin (Zertifikat)",
    meta: "06/2005 – 12/2005",
  },
  {
    title: "Bauzeichnerin Hochbau (IHK)",
    meta: "10/1998 – 04/2001",
  },
  {
    title: "Allgemeine Hochschulreife",
    meta: "Ernst-Thälmann-Oberschule, Spremberg",
  },
];

const trainings = [
  "2022 Journalistische Schreiben",
  "2021 Motorsägenarbeit Modul A",
  "2021 Wiesenweiher Exkursion",
  "2019 Selbstmanagement",
  "2003 Business English Level 1",
];

const languageSkills = [
  { name: "Deutsch", level: 5, note: "Muttersprache" },
  { name: "Englisch", level: 3, note: "gut" },
  { name: "Russisch", level: 3, note: "gut" },
];

const itSkills = [
  "MS Word",
  "Excel",
  "PowerPoint",
  "Outlook",
  "SAP",
  "Datev",
  "Lexware",
  "Adobe Photoshop",
  "AutoCAD",
];

const otherSkills = ["Führerschein Klasse B"];

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

const softSkills = [
  "präzises Arbeiten",
  "verantwortungsbewusst",
  "souveräner Umgang mit Zahlen und Sachverhalten",
  "kundenorientierte Arbeitsweise",
  "handwerklich begabt",
  "kreativer Ausdruck mit Farbe, Pflanzen und Holz",
  "freundlich und zugewandt",
  "ziel- und lösungsorientiert",
];
</script>

<template>
  <section :class="s.card">
    <header :class="s.top">
      <div>
        <h1 :class="s.title">Lebenslauf</h1>
        <p :class="s.muted">
          Kurzprofil, Berufserfahrung, Ausbildung & Kompetenzen
        </p>
      </div>

      <div :class="s.actions">
        <RouterLink :class="s.btnGhost" to="/motivation">
          Meine Motivation
        </RouterLink>
        <!-- Lege deine PDF in /public/resume.pdf ab -->
        <a :class="s.btn" href="/resume.pdf" target="_blank" rel="noreferrer">
          PDF herunterladen
        </a>
      </div>
    </header>

    <div :class="s.grid">
      <!-- LEFT: Kontakt / Überblick -->
      <aside :class="s.side">
        <img
          :class="s.sidebarAvatar"
          :src="portrait640"
          :srcset="`${portrait320} 320w, ${portrait640} 640w, ${portrait960} 960w`"
          sizes="180px"
          alt="Porträt von Juliane Stoll"
          width="960"
          height="960"
          decoding="async"
          loading="lazy"
        />
        <h2 :class="s.sidebarTitle">{{ person.name }}</h2>
        <p :class="s.muted">{{ person.note }}</p>

        <div :class="s.block">
          <h3 :class="s.blockTitle">Letzte Position</h3>
          <p><strong>{{ person.currentRole.title }}</strong></p>
          <p :class="s.muted">{{ person.currentRole.org }}</p>
        </div>

        <div :class="s.block">
          <h3 :class="s.blockTitle">Persönliche Daten</h3>
          <ul :class="s.clean">
            <li><span :class="s.label">Geboren:</span> {{ person.birth }}</li>
            <li>
              <span :class="s.label">Staatsangehörigkeit:</span>
              {{ person.nationality }}
            </li>
            <li>
              <span :class="s.label">Familienstand:</span>
              {{ person.maritalStatus }}
            </li>
          </ul>
        </div>

        <div :class="s.block">
          <h3 :class="s.blockTitle">Kontakt</h3>
          <ul :class="s.clean">
            <li>
              <span :class="s.label">Adresse:</span>
              {{ person.contact.street }} · {{ person.contact.zipCity }}
            </li>
            <li>
              <span :class="s.label">E-Mail:</span>
              <a :class="s.link" :href="`mailto:${person.contact.email}`">
                {{ person.contact.email }}
              </a>
            </li>
            <li>
              <span :class="s.label">Telefon:</span>
              {{ person.contact.phone }}
            </li>
          </ul>
        </div>

        <div :class="s.block">
          <h3 :class="s.blockTitle">Sprachen</h3>
          <ul :class="s.clean">
            <li
              v-for="skill in languageSkills"
              :key="skill.name"
              :class="s.skillRow"
            >
              <span :class="s.skillName">{{ skill.name }}</span>
              <span :class="s.dots" :aria-label="`${skill.level} von 5`">
                <span
                  v-for="n in 5"
                  :key="n"
                  :class="[s.dot, { [s.on]: n <= skill.level }]"
                ></span>
              </span>
            </li>
          </ul>
        </div>

        <div :class="s.block">
          <h3 :class="s.blockTitle">EDV</h3>
          <ul :class="s.list">
            <li v-for="item in itSkills" :key="item">{{ item }}</li>
          </ul>
        </div>

        <div :class="s.block">
          <h3 :class="s.blockTitle">Sonstiges</h3>
          <ul :class="s.list">
            <li v-for="item in otherSkills" :key="item">{{ item }}</li>
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
            <li v-for="item in methodischeKompetenzen" :key="item">
              {{ item }}
            </li>
          </ul>
        </div>

        <div :class="s.block">
          <h3 :class="s.blockTitle">Tätigkeitsprofil</h3>
          <ul :class="s.list">
            <li v-for="item in taetigkeitsprofil" :key="item">{{ item }}</li>
          </ul>
        </div>

        <div :class="s.block">
          <h3 :class="s.blockTitle">Soft Skills</h3>
          <ul :class="s.pillListSidebar">
            <li v-for="p in softSkills" :key="p" :class="s.pillSidebar">
              {{ p }}
            </li>
          </ul>
        </div>
      </aside>

      <!-- RIGHT: Inhalt -->
      <div :class="s.content">
        <section :class="s.section">
          <h2 :class="s.sectionTitle">Berufserfahrung</h2>
          <div :class="s.item" v-for="job in experience" :key="job.title">
            <div :class="s.row">
              <strong>{{ job.title }}</strong>
              <span :class="s.muted" v-if="job.meta">{{ job.meta }}</span>
            </div>
            <ul :class="s.list">
              <li v-for="b in job.bullets" :key="b">{{ b }}</li>
            </ul>
          </div>
        </section>

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
          <h2 :class="s.sectionTitle">Weiterbildungen</h2>
          <ul :class="s.list">
            <li v-for="item in trainings" :key="item">{{ item }}</li>
          </ul>
        </section>

      </div>
    </div>
  </section>
</template>
