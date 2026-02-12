<script setup>
import s from "../styles/pages/methodik.module.css";
</script>

<template>
  <section :class="s.page">
    <div :class="s.hero">
      <div>
        <p :class="s.kicker">Pädagogisches Konzept</p>
        <h1 :class="s.title">Methodik & Haltung</h1>
        <p :class="s.lede">
          Dieses Konzept beschreibt meine pädagogische Arbeitsweise für die
          Zusammenarbeit mit dem Jugendamt. Im Mittelpunkt stehen Beziehung,
          Verlässlichkeit und eine strukturgebende Begleitung, die Kinder und
          Jugendliche in ihrer Entwicklung stärkt.
        </p>
      </div>
      <div :class="s.heroCard">
        <h2 :class="s.cardTitle">Leitlinien</h2>
        <ul :class="s.list">
          <li>bindungsorientiert und wertschätzend</li>
          <li>ressourcen- und stärkenorientiert</li>
          <li>partizipativ und lösungsorientiert</li>
          <li>ganzheitlich und entwicklungsbegleitend</li>
        </ul>
      </div>
    </div>

    <div :class="s.grid">
      <section :class="[s.panel, s.rainbowCard]">
        <h2 :class="s.sectionTitle">Zielgruppe & Rahmen</h2>
        <p :class="s.body">
          Begleitung von Kindern und Jugendlichen in ihrem individuellen
          Entwicklungsprozess. Die Arbeit orientiert sich am Bedarf des
          jeweiligen Hilfeplans und wird transparent abgestimmt. Struktur,
          Sicherheit und ein verlässlicher Alltag bilden den Rahmen.
        </p>
      </section>

      <section :class="[s.panel, s.rainbowCard]">
        <h2 :class="s.sectionTitle">Pädagogische Haltung</h2>
        <p :class="s.body">
          Kinder und Jugendliche werden als eigenständige Persönlichkeiten
          wahrgenommen. Beziehung, Vertrauen und klare Grenzen schaffen
          Orientierung. Ziel ist es, Selbstwirksamkeit zu fördern und die
          individuellen Potenziale sichtbar zu machen.
        </p>
      </section>

      <section :class="[s.panel, s.rainbowCard]">
        <h2 :class="s.sectionTitle">Methodische Schwerpunkte</h2>
        <ul :class="s.list">
          <li>Strukturgebende Alltagsrituale und klare Abläufe.</li>
          <li>Naturpädagogik mit Bewegung im Freien und achtsamer Wahrnehmung.</li>
          <li>Kreativer Ausdruck mit Farbe, Pflanzen und Holz.</li>
          <li>Gesprächsführung, Reflexion und ressourcenorientiertes Feedback.</li>
        </ul>
      </section>

      <section :class="[s.panel, s.rainbowCard]">
        <h2 :class="s.sectionTitle">Ziele der Begleitung</h2>
        <ul :class="s.list">
          <li>Stärkung von Selbstvertrauen und emotionaler Stabilität.</li>
          <li>Aufbau sozialer Kompetenzen und Beziehungsgestaltung.</li>
          <li>Förderung von Selbstständigkeit und Verantwortungsbewusstsein.</li>
          <li>Unterstützung bei schulischen und alltagsnahen Anforderungen.</li>
        </ul>
      </section>

      <section :class="[s.panel, s.rainbowCard]">
        <h2 :class="s.sectionTitle">Zusammenarbeit & Kommunikation</h2>
        <p :class="s.body">
          Eine enge, transparente Zusammenarbeit mit Eltern, Bezugspersonen und
          dem Jugendamt ist zentral. Absprachen werden verlässlich dokumentiert
          und Entwicklungsverläufe nachvollziehbar kommuniziert.
        </p>
      </section>

      <section :class="[s.panel, s.rainbowCard]">
        <h2 :class="s.sectionTitle">Dokumentation & Reflexion</h2>
        <p :class="s.body">
          Beobachtungen, Ziele und Fortschritte werden strukturiert
          festgehalten. Regelmäßige Reflexion hilft, Maßnahmen anzupassen und
          die Qualität der Begleitung zu sichern.
        </p>
      </section>

      <section :class="[s.panel, s.rainbowCard]">
        <h2 :class="s.sectionTitle">Schutz & Grenzen</h2>
        <p :class="s.body">
          Kinderschutz, klare Regeln und ein respektvoller Umgang sind
          unverzichtbar. Grenzen werden transparent kommuniziert und achtsam
          eingehalten, damit ein sicherer Rahmen besteht.
        </p>
      </section>
    </div>
  </section>
</template>
