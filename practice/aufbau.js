// Auto-/handgepflegt — Aufbau-Trainer: ein Satz wächst Schicht für Schicht.
// Jede Stufe fügt GENAU EINE gelernte Struktur hinzu (Verketten / Verschachteln / Schichten).
// Der neu hinzugekommene Teil ist im jp-Feld mit <b class="ap"> markiert.
// Alle japanischen Sätze sind handgeprüft und grammatisch korrekt.
window.AUFBAU_CHAINS = [
  {
    title: "Morgens: drei Handlungen verketten",
    art: "Verketten",
    ziel: "Ich stehe morgens auf, dusche und gehe erst danach zur Arbeit.",
    stages: [
      { jp:"<ruby>会社<rt>かいしゃ</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きます。", de:"Ich gehe zur Firma.", layer:"Kern: Ort へ + Bewegungsverb", lesson:"L5", note:"Der einfachste Satz — wohin man geht." },
      { jp:"<ruby>朝<rt>あさ</rt></ruby> <ruby>会社<rt>かいしゃ</rt></ruby>へ <b class=\"ap\"><ruby>行<rt>い</rt></ruby>きます</b>。", de:"Morgens gehe ich zur Firma.", layer:"+ Zeitangabe (vage, ohne に)", lesson:"L4", note:"朝 steht ohne に — relative Zeitangaben bekommen kein に." },
      { jp:"シャワーを <b class=\"ap\"><ruby>浴<rt>あ</rt></ruby>びて</b>、<ruby>朝<rt>あさ</rt></ruby> <ruby>会社<rt>かいしゃ</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きます。", de:"Ich dusche und gehe (morgens) zur Firma.", layer:"+ て-Form verkettet zwei Handlungen", lesson:"L16", note:"Nur das letzte Verb trägt die Zeit; alles davor steht in der て-Form." },
      { jp:"<b class=\"ap\"><ruby>起<rt>お</rt></ruby>きて</b>、シャワーを <ruby>浴<rt>あ</rt></ruby>びて、<ruby>会社<rt>かいしゃ</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きます。", de:"Ich stehe auf, dusche und gehe zur Firma.", layer:"+ weitere て-Form in der Kette", lesson:"L16", note:"Die Reihenfolge der Verben = die Reihenfolge der Handlungen." },
      { jp:"<ruby>朝<rt>あさ</rt></ruby> <ruby>起<rt>お</rt></ruby>きて、シャワーを <ruby>浴<rt>あ</rt></ruby>び<b class=\"ap\">てから</b>、<ruby>会社<rt>かいしゃ</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きます。", de:"Morgens stehe ich auf, und erst nach dem Duschen gehe ich zur Firma.", layer:"+ てから betont „erst nachdem“", lesson:"L16", note:"てから ist strenger als て: V₂ beginnt erst, wenn V₁ abgeschlossen ist." }
    ]
  },
  {
    title: "Ein Nomen verschachteln (Relativsatz + Meinung)",
    art: "Verschachteln",
    ziel: "Ich glaube, mein Bruder liest gern Bücher, die ich ihm empfohlen habe.",
    stages: [
      { jp:"<ruby>弟<rt>おとうと</rt></ruby>は <ruby>本<rt>ほん</rt></ruby>を <ruby>読<rt>よ</rt></ruby>む。", de:"Mein Bruder liest Bücher.", layer:"Kern: は + を + Verb (Plain)", lesson:"L6 / L20", note:"Plain-Form, weil gleich etwas drangehängt wird." },
      { jp:"<ruby>弟<rt>おとうと</rt></ruby>は <ruby>本<rt>ほん</rt></ruby>を <ruby>読<rt>よ</rt></ruby>む<b class=\"ap\">のが <ruby>好<rt>す</rt></ruby>きだ</b>。", de:"Mein Bruder liest gern Bücher.", layer:"+ Nominalisierung のが好き", lesson:"L38", note:"の macht „lesen“ zum Nomen; 好き verlangt が, nicht を." },
      { jp:"<ruby>弟<rt>おとうと</rt></ruby>は <b class=\"ap\"><ruby>私<rt>わたし</rt></ruby>が すすめた</b> <ruby>本<rt>ほん</rt></ruby>を <ruby>読<rt>よ</rt></ruby>むのが <ruby>好<rt>す</rt></ruby>きだ。", de:"Mein Bruder liest gern Bücher, die ich empfohlen habe.", layer:"+ Relativsatz vor 本", lesson:"L22", note:"Der ganze Satz „私が すすめた“ beschreibt 本 — Subjekt darin mit が, nie は." },
      { jp:"<ruby>弟<rt>おとうと</rt></ruby>は <ruby>私<rt>わたし</rt></ruby>が すすめた <ruby>本<rt>ほん</rt></ruby>を <ruby>読<rt>よ</rt></ruby>むのが <ruby>好<rt>す</rt></ruby>きだ<b class=\"ap\">と<ruby>思<rt>おも</rt></ruby>う</b>。", de:"Ich glaube, mein Bruder liest gern Bücher, die ich empfohlen habe.", layer:"+ Meinung と思う (verschachtelt den ganzen Satz)", lesson:"L21", note:"Der komplette Satz wird zum Inhalt von „ich denke, dass …“." },
      { jp:"<ruby>弟<rt>おとうと</rt></ruby>は <ruby>私<rt>わたし</rt></ruby>が すすめた <ruby>本<rt>ほん</rt></ruby>を <ruby>読<rt>よ</rt></ruby>むのが <ruby>好<rt>す</rt></ruby>きだと<ruby>思<rt>おも</rt></ruby><b class=\"ap\">います</b>。", de:"Ich glaube, mein Bruder liest gern Bücher, die ich ihm empfohlen habe.", layer:"+ Höflichkeits-Hülle ます", lesson:"L20", note:"Nur das äußerste Verb wird höflich — das Innere bleibt Plain." }
    ]
  },
  {
    title: "Schichten um den Kern (Geben + Aspekt)",
    art: "Schichten",
    ziel: "Die Mutter macht gerade für ihr krankes Kind Reisbrei.",
    stages: [
      { jp:"<ruby>母<rt>はは</rt></ruby>は おかゆを <ruby>作<rt>つく</rt></ruby>る。", de:"Die Mutter macht Reisbrei.", layer:"Kern: は + を + Verb", lesson:"L6", note:"おかゆ = Reisbrei (isst man, wenn man krank ist)." },
      { jp:"<ruby>母<rt>はは</rt></ruby>は <b class=\"ap\"><ruby>子供<rt>こども</rt></ruby>に</b> おかゆを <ruby>作<rt>つく</rt></ruby>る。", de:"Die Mutter macht dem Kind Reisbrei.", layer:"+ Empfänger に", lesson:"L7", note:"に zeigt, für wen / an wen die Handlung geht." },
      { jp:"<ruby>母<rt>はは</rt></ruby>は <ruby>子供<rt>こども</rt></ruby>に おかゆを <ruby>作<rt>つく</rt></ruby>っ<b class=\"ap\">て あげる</b>。", de:"Die Mutter macht dem Kind (als Gefallen) Reisbrei.", layer:"+ Geben てあげる", lesson:"L24", note:"てあげる: jemand tut etwas als Gefallen für einen anderen." },
      { jp:"<ruby>母<rt>はは</rt></ruby>は <b class=\"ap\"><ruby>病気<rt>びょうき</rt></ruby>の</b> <ruby>子供<rt>こども</rt></ruby>に おかゆを <ruby>作<rt>つく</rt></ruby>って あげる。", de:"Die Mutter macht ihrem kranken Kind Reisbrei.", layer:"+ Nomen-Attribut mit の", lesson:"L8 / L22", note:"病気の 子供 = „das kranke Kind“ — Nomen beschreibt Nomen mit の." },
      { jp:"<ruby>母<rt>はは</rt></ruby>は <ruby>病気<rt>びょうき</rt></ruby>の <ruby>子供<rt>こども</rt></ruby>に おかゆを <ruby>作<rt>つく</rt></ruby>って あげ<b class=\"ap\">て いる</b>。", de:"Die Mutter macht gerade für ihr krankes Kind Reisbrei.", layer:"+ Verlaufsform ている", lesson:"L14", note:"ている setzt die ganze Handlung in den „läuft gerade“-Aspekt." }
    ]
  },
  {
    title: "Eine höfliche Bitte aufbauen",
    art: "Verketten",
    ziel: "Entschuldigung — falls Sie Zeit haben, könnten Sie mich bitte anrufen, bevor Sie kommen?",
    stages: [
      { jp:"<ruby>電話<rt>でんわ</rt></ruby>して ください。", de:"Rufen Sie bitte an.", layer:"Kern: て ください", lesson:"L14", note:"Die höfliche Standard-Bitte." },
      { jp:"<b class=\"ap\"><ruby>来<rt>く</rt></ruby>る <ruby>前<rt>まえ</rt></ruby>に</b>、<ruby>電話<rt>でんわ</rt></ruby>して ください。", de:"Rufen Sie bitte an, bevor Sie kommen.", layer:"+ 前に „bevor“", lesson:"L18", note:"Vor 前に immer die Wörterbuchform (来る), nie 来た." },
      { jp:"<ruby>時間<rt>じかん</rt></ruby>が <b class=\"ap\">あったら</b>、<ruby>来<rt>く</rt></ruby>る <ruby>前<rt>まえ</rt></ruby>に、<ruby>電話<rt>でんわ</rt></ruby>して ください。", de:"Wenn Sie Zeit haben, rufen Sie bitte an, bevor Sie kommen.", layer:"+ Bedingung たら", lesson:"L25", note:"たら darf vor einer Bitte stehen (anders als と)." },
      { jp:"<b class=\"ap\">もし</b> <ruby>時間<rt>じかん</rt></ruby>が あったら、<ruby>来<rt>く</rt></ruby>る <ruby>前<rt>まえ</rt></ruby>に、<ruby>電話<rt>でんわ</rt></ruby>して ください。", de:"Falls Sie Zeit haben, rufen Sie bitte an, bevor Sie kommen.", layer:"+ もし verstärkt das „falls“", lesson:"L25", note:"もし am Anfang kündigt die Hypothese schon an." },
      { jp:"すみませんが、もし <ruby>時間<rt>じかん</rt></ruby>が あったら、<ruby>来<rt>く</rt></ruby>る <ruby>前<rt>まえ</rt></ruby>に、<ruby>電話<rt>でんわ</rt></ruby>して <b class=\"ap\">いただけませんか</b>。", de:"Entschuldigung — falls Sie Zeit haben, könnten Sie mich bitte vor dem Kommen anrufen?", layer:"+ sehr höfliche Bitte いただけませんか", lesson:"L26", note:"いただけませんか hebt die ganze Bitte auf die höfliche Stufe." }
    ]
  },
  {
    title: "Kausativ: höflich um Erlaubnis bitten",
    art: "Schichten",
    ziel: "Entschuldigung, aber dürfte ich heute etwas früher gehen?",
    stages: [
      { jp:"<ruby>帰<rt>かえ</rt></ruby>ります。", de:"Ich gehe nach Hause.", layer:"Kern: Verb", lesson:"L5", note:"Der nackte Kern." },
      { jp:"<b class=\"ap\"><ruby>早<rt>はや</rt></ruby>く</b> <ruby>帰<rt>かえ</rt></ruby>ります。", de:"Ich gehe früh nach Hause.", layer:"+ Adjektiv als Adverb (く)", lesson:"L44", note:"早い → 早く beschreibt, WIE man geht." },
      { jp:"<ruby>早<rt>はや</rt></ruby>く <ruby>帰<rt>かえ</rt></ruby><b class=\"ap\">らせて</b> ください。", de:"Lassen Sie mich früh gehen.", layer:"+ Kausativ-Bitte させてください", lesson:"L48", note:"帰る → 帰らせて = „lass mich gehen“ (um Erlaubnis bitten)." },
      { jp:"<ruby>今日<rt>きょう</rt></ruby>は <ruby>早<rt>はや</rt></ruby>く <ruby>帰<rt>かえ</rt></ruby>らせて <b class=\"ap\">いただけませんか</b>。", de:"Dürfte ich heute früher gehen?", layer:"+ höflichste Form いただけませんか", lesson:"L48", note:"Die respektvolle Standardbitte gegenüber Vorgesetzten." },
      { jp:"<b class=\"ap\">すみませんが、</b><ruby>今日<rt>きょう</rt></ruby>は <ruby>早<rt>はや</rt></ruby>く <ruby>帰<rt>かえ</rt></ruby>らせて いただけませんか。", de:"Entschuldigung, aber dürfte ich heute etwas früher gehen?", layer:"+ höfliche Einleitung mit が", lesson:"L20", note:"が am Satzende leitet weich und höflich ein (kein „aber“-Gegensatz)." }
    ]
  },
  {
    title: "Großes Finale: alles zusammen",
    art: "Verschachteln",
    ziel: "Mein Lehrer hat gesagt, dass man Japanisch sprechen können wird, wenn man jeden Tag lernt.",
    stages: [
      { jp:"<ruby>日本語<rt>にほんご</rt></ruby>が <ruby>話<rt>はな</rt></ruby>せる。", de:"… kann Japanisch sprechen.", layer:"Kern: Potential-Form", lesson:"L27", note:"話す → 話せる; das Objekt steht mit が." },
      { jp:"<ruby>日本語<rt>にほんご</rt></ruby>が <ruby>話<rt>はな</rt></ruby>せる<b class=\"ap\">ように なる</b>。", de:"… wird Japanisch sprechen können.", layer:"+ Veränderung ようになる", lesson:"L36", note:"Drückt aus: vorher ging es nicht, jetzt schon." },
      { jp:"<ruby>毎日<rt>まいにち</rt></ruby> <ruby>勉強<rt>べんきょう</rt></ruby><b class=\"ap\">すれば</b>、<ruby>日本語<rt>にほんご</rt></ruby>が <ruby>話<rt>はな</rt></ruby>せるように なる。", de:"Wenn man täglich lernt, wird man Japanisch sprechen können.", layer:"+ ば-Konditional", lesson:"L35", note:"Die allgemeingültige Bedingung „immer wenn …“." },
      { jp:"<ruby>毎日<rt>まいにち</rt></ruby> <ruby>勉強<rt>べんきょう</rt></ruby>すれば、<ruby>日本語<rt>にほんご</rt></ruby>が <ruby>話<rt>はな</rt></ruby>せるように なる<b class=\"ap\">と <ruby>先生<rt>せんせい</rt></ruby>が <ruby>言<rt>い</rt></ruby>って いた</b>。", de:"Mein Lehrer hat gesagt, dass man Japanisch sprechen können wird, wenn man jeden Tag lernt.", layer:"+ Zitat と言っていた (verschachtelt alles)", lesson:"L33", note:"Der ganze aufgebaute Satz wird zum Inhalt dessen, was der Lehrer sagte." }
    ]
  }
];
