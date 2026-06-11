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
  },
  {
    title: "Passiv: „als Kind wurde ich geschimpft“",
    art: "Schichten",
    ziel: "Weil ich kein Gemüse aß, wurde ich als Kind oft von meiner Mutter geschimpft.",
    stages: [
      { jp:"<ruby>叱<rt>しか</rt></ruby>られた。", de:"Ich wurde geschimpft.", layer:"Kern: Passiv-Form", lesson:"L37", note:"叱る → 叱られる: aus Sicht des Betroffenen." },
      { jp:"<b class=\"ap\"><ruby>母<rt>はは</rt></ruby>に</b> <ruby>叱<rt>しか</rt></ruby>られた。", de:"Ich wurde von meiner Mutter geschimpft.", layer:"+ Täter mit に", lesson:"L37", note:"Im Passiv steht der Täter mit に (= „von“)." },
      { jp:"<ruby>母<rt>はは</rt></ruby>に <b class=\"ap\">よく</b> <ruby>叱<rt>しか</rt></ruby>られた。", de:"Ich wurde oft von meiner Mutter geschimpft.", layer:"+ Häufigkeit よく", lesson:"L9", note:"よく = „oft“ (mit positivem Verb)." },
      { jp:"<b class=\"ap\"><ruby>子供<rt>こども</rt></ruby>の とき、</b><ruby>母<rt>はは</rt></ruby>に よく <ruby>叱<rt>しか</rt></ruby>られた。", de:"Als Kind wurde ich oft von meiner Mutter geschimpft.", layer:"+ Zeitrahmen とき", lesson:"L23", note:"N の + とき = „zur Zeit von …“." },
      { jp:"<b class=\"ap\"><ruby>野菜<rt>やさい</rt></ruby>を <ruby>食<rt>た</rt></ruby>べなかったから、</b><ruby>子供<rt>こども</rt></ruby>の とき、<ruby>母<rt>はは</rt></ruby>に よく <ruby>叱<rt>しか</rt></ruby>られた。", de:"Weil ich kein Gemüse aß, wurde ich als Kind oft von meiner Mutter geschimpft.", layer:"+ Grund から", lesson:"L9", note:"Erst der Grund, dann から, dann die Folge." }
    ]
  },
  {
    title: "Bedauern erklären (てしまう + んです)",
    art: "Schichten",
    ziel: "Es ist nämlich so, dass ich leider mein Portemonnaie im Zug vergessen habe.",
    stages: [
      { jp:"<ruby>財布<rt>さいふ</rt></ruby>を <ruby>忘<rt>わす</rt></ruby>れた。", de:"Ich habe das Portemonnaie vergessen.", layer:"Kern: た-Form", lesson:"L19", note:"財布 = Geldbörse." },
      { jp:"<b class=\"ap\"><ruby>電車<rt>でんしゃ</rt></ruby>に</b> <ruby>財布<rt>さいふ</rt></ruby>を <ruby>忘<rt>わす</rt></ruby>れた。", de:"Ich habe das Portemonnaie im Zug vergessen.", layer:"+ Ort mit に", lesson:"L10", note:"Bei „liegen lassen“ steht der Ort mit に." },
      { jp:"<ruby>電車<rt>でんしゃ</rt></ruby>に <ruby>財布<rt>さいふ</rt></ruby>を <ruby>忘<rt>わす</rt></ruby>れ<b class=\"ap\">て しまった</b>。", de:"Ich habe leider das Portemonnaie im Zug vergessen.", layer:"+ Bedauern てしまう", lesson:"L29", note:"てしまう gibt den Beiklang „leider, ungewollt“." },
      { jp:"<ruby>電車<rt>でんしゃ</rt></ruby>に <ruby>財布<rt>さいふ</rt></ruby>を <ruby>忘<rt>わす</rt></ruby>れて しまった<b class=\"ap\">んです</b>。", de:"Es ist nämlich so, dass ich leider mein Portemonnaie im Zug vergessen habe.", layer:"+ Erklärung んです", lesson:"L26", note:"んです erklärt die Lage („es ist nämlich so …“)." }
    ]
  },
  {
    title: "Eine Absicht ausbauen (ために + Plan)",
    art: "Verschachteln",
    ziel: "Ich habe vor, nächstes Jahr nach Japan zu reisen, um die Sprache zu lernen.",
    stages: [
      { jp:"<ruby>日本<rt>にほん</rt></ruby>へ <ruby>行<rt>い</rt></ruby>く。", de:"Ich gehe nach Japan.", layer:"Kern: Ort へ + Verb", lesson:"L5", note:"Der Kern." },
      { jp:"<b class=\"ap\"><ruby>来年<rt>らいねん</rt></ruby></b> <ruby>日本<rt>にほん</rt></ruby>へ <ruby>行<rt>い</rt></ruby>く。", de:"Nächstes Jahr gehe ich nach Japan.", layer:"+ Zeitangabe", lesson:"L4", note:"来年 ohne に (relative Zeit)." },
      { jp:"<b class=\"ap\"><ruby>日本語<rt>にほんご</rt></ruby>を <ruby>勉強<rt>べんきょう</rt></ruby>する ために</b>、<ruby>来年<rt>らいねん</rt></ruby> <ruby>日本<rt>にほん</rt></ruby>へ <ruby>行<rt>い</rt></ruby>く。", de:"Um Japanisch zu lernen, gehe ich nächstes Jahr nach Japan.", layer:"+ Zweck ために", lesson:"L42", note:"V辞書 + ために = „um zu …“ (eigenes, steuerbares Ziel)." },
      { jp:"<ruby>日本語<rt>にほんご</rt></ruby>を <ruby>勉強<rt>べんきょう</rt></ruby>する ために、<ruby>来年<rt>らいねん</rt></ruby> <ruby>日本<rt>にほん</rt></ruby>へ <ruby>行<rt>い</rt></ruby><b class=\"ap\">こうと <ruby>思<rt>おも</rt></ruby>って いる</b>。", de:"Ich habe vor, nächstes Jahr nach Japan zu reisen, um Japanisch zu lernen.", layer:"+ Absicht (Volitional + と思っている)", lesson:"L31", note:"行こう (Volitional) + と思っている = ein länger gehegter Plan." }
    ]
  },
  {
    title: "Auch wenn … (ても + Meinung)",
    art: "Verketten",
    ziel: "Ich glaube, auch wenn es regnet, findet das Fest morgen statt.",
    stages: [
      { jp:"お<ruby>祭<rt>まつ</rt></ruby>りが ある。", de:"Es gibt ein Fest.", layer:"Kern: Event が ある", lesson:"L21", note:"あります kann „stattfinden“ heißen." },
      { jp:"<b class=\"ap\"><ruby>明日<rt>あした</rt></ruby></b> お<ruby>祭<rt>まつ</rt></ruby>りが ある。", de:"Morgen gibt es ein Fest.", layer:"+ Zeitangabe", lesson:"L4", note:"" },
      { jp:"<b class=\"ap\"><ruby>雨<rt>あめ</rt></ruby>が <ruby>降<rt>ふ</rt></ruby>っても</b>、<ruby>明日<rt>あした</rt></ruby> お<ruby>祭<rt>まつ</rt></ruby>りが ある。", de:"Auch wenn es regnet, gibt es morgen ein Fest.", layer:"+ „auch wenn“ ても", lesson:"L25", note:"ても = trotz der Bedingung gilt es." },
      { jp:"<ruby>雨<rt>あめ</rt></ruby>が <ruby>降<rt>ふ</rt></ruby>っても、<ruby>明日<rt>あした</rt></ruby> お<ruby>祭<rt>まつ</rt></ruby>りが ある<b class=\"ap\">と <ruby>思<rt>おも</rt></ruby>う</b>。", de:"Ich glaube, auch wenn es regnet, findet das Fest morgen statt.", layer:"+ Meinung と思う", lesson:"L21", note:"" }
    ]
  },
  {
    title: "Obwohl … (のに) — Frust ausdrücken",
    art: "Verketten",
    ziel: "Obwohl ich jeden Tag fleißig lerne, kann ich noch nicht gut Japanisch sprechen — das ist frustrierend.",
    stages: [
      { jp:"<ruby>日本語<rt>にほんご</rt></ruby>が <ruby>話<rt>はな</rt></ruby>せない。", de:"Ich kann nicht Japanisch sprechen.", layer:"Kern: Potential (verneint)", lesson:"L27", note:"話せる → 話せない." },
      { jp:"<b class=\"ap\">まだ <ruby>上手<rt>じょうず</rt></ruby>に</b> <ruby>日本語<rt>にほんご</rt></ruby>が <ruby>話<rt>はな</rt></ruby>せない。", de:"Ich kann noch nicht gut Japanisch sprechen.", layer:"+ まだ + Adverb 上手に", lesson:"L31 / L44", note:"上手 → 上手に (Adverb): „gut“ (wie man etwas tut)." },
      { jp:"<b class=\"ap\"><ruby>毎日<rt>まいにち</rt></ruby> <ruby>勉強<rt>べんきょう</rt></ruby>して いるのに</b>、まだ <ruby>上手<rt>じょうず</rt></ruby>に <ruby>日本語<rt>にほんご</rt></ruby>が <ruby>話<rt>はな</rt></ruby>せない。", de:"Obwohl ich jeden Tag lerne, kann ich noch nicht gut sprechen.", layer:"+ „obwohl“ のに", lesson:"L45", note:"のに = obwohl, mit Beiklang von Enttäuschung/Ärger." },
      { jp:"<ruby>毎日<rt>まいにち</rt></ruby> <b class=\"ap\"><ruby>一生懸命<rt>いっしょうけんめい</rt></ruby></b> <ruby>勉強<rt>べんきょう</rt></ruby>して いるのに、まだ <ruby>上手<rt>じょうず</rt></ruby>に <ruby>日本語<rt>にほんご</rt></ruby>が <ruby>話<rt>はな</rt></ruby>せない。", de:"Obwohl ich jeden Tag fleißig lerne, kann ich noch nicht gut sprechen.", layer:"+ Adverb 一生懸命", lesson:"—", note:"一生懸命 = „mit ganzer Kraft, fleißig“." },
      { jp:"<ruby>毎日<rt>まいにち</rt></ruby> <ruby>一生懸命<rt>いっしょうけんめい</rt></ruby> <ruby>勉強<rt>べんきょう</rt></ruby>して いるのに、まだ <ruby>上手<rt>じょうず</rt></ruby>に <ruby>日本語<rt>にほんご</rt></ruby>が <ruby>話<rt>はな</rt></ruby>せなく<b class=\"ap\">て、ちょっと がっかりする</b>。", de:"Obwohl ich jeden Tag fleißig lerne, kann ich noch nicht gut Japanisch sprechen — das ist etwas frustrierend.", layer:"+ Grund-て + Gefühl", lesson:"L39", note:"話せない → 話せなくて (verneinte Grund-て-Form), Gefühl als Folge." }
    ]
  },
  {
    title: "Großer langer Satz: eine Empfehlung",
    art: "Verschachteln",
    ziel: "Ich finde, das Restaurant, das mir mein Freund gezeigt hat, ist zwar etwas teuer, aber weil es so lecker ist, sollte man unbedingt mal hingehen.",
    stages: [
      { jp:"レストランは おいしい。", de:"Das Restaurant ist lecker.", layer:"Kern: N は Adj", lesson:"L8", note:"Der Ausgangspunkt." },
      { jp:"<b class=\"ap\"><ruby>友達<rt>ともだち</rt></ruby>が <ruby>教<rt>おし</rt></ruby>えて くれた</b> レストランは おいしい。", de:"Das Restaurant, das mir ein Freund gezeigt hat, ist lecker.", layer:"+ Relativsatz (mit てくれる)", lesson:"L22 / L24", note:"„友達が 教えて くれた“ beschreibt レストラン — Subjekt darin mit が." },
      { jp:"<ruby>友達<rt>ともだち</rt></ruby>が <ruby>教<rt>おし</rt></ruby>えて くれた レストランは、<ruby>少<rt>すこ</rt></ruby>し <ruby>高<rt>たか</rt></ruby><b class=\"ap\">いけど</b>、おいしい。", de:"Das Restaurant, das mir ein Freund gezeigt hat, ist zwar etwas teuer, aber lecker.", layer:"+ Gegensatz けど", lesson:"L20", note:"けど = lockeres „aber / zwar“." },
      { jp:"<ruby>友達<rt>ともだち</rt></ruby>が <ruby>教<rt>おし</rt></ruby>えて くれた レストランは、<ruby>少<rt>すこ</rt></ruby>し <ruby>高<rt>たか</rt></ruby>いけど、おいし<b class=\"ap\">いから、ぜひ <ruby>一度<rt>いちど</rt></ruby> <ruby>行<rt>い</rt></ruby>った ほうが いい</b>。", de:"… ist zwar etwas teuer, aber weil es lecker ist, sollte man unbedingt mal hingehen.", layer:"+ Grund から + Rat たほうがいい", lesson:"L9 / L32", note:"Zwei Schichten Logik: weil (から) → Empfehlung (たほうがいい)." },
      { jp:"<ruby>友達<rt>ともだち</rt></ruby>が <ruby>教<rt>おし</rt></ruby>えて くれた レストランは、<ruby>少<rt>すこ</rt></ruby>し <ruby>高<rt>たか</rt></ruby>いけど、おいしいから、ぜひ <ruby>一度<rt>いちど</rt></ruby> <ruby>行<rt>い</rt></ruby>った ほうが いい<b class=\"ap\">と <ruby>思<rt>おも</rt></ruby>う</b>。", de:"Ich finde, das Restaurant, das mir mein Freund gezeigt hat, ist zwar etwas teuer, aber weil es so lecker ist, sollte man unbedingt mal hingehen.", layer:"+ Meinung と思う (Hülle um alles)", lesson:"L21", note:"Lies von innen: [Restaurant … teuer … aber lecker … also hingehen] + „finde ich“." }
    ]
  }
];
