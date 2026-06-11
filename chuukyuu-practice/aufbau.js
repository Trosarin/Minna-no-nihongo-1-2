// Aufbau-Trainer (Chuukyuu) — ein Satz wächst Schicht für Schicht.
// Mittelstufen-Strukturen, kombiniert mit Grundstufen-Grammatik.
// Der neu hinzugekommene Teil ist mit <b class="ap"> markiert. Alle Sätze handgeprüft.
window.AUFBAU_CHAINS = [
  {
    title: "Kausativ-Passiv + Nostalgie (使役受身 + ものだ)",
    art: "Schichten",
    ziel: "Als Kind wurde ich jeden Tag von meinen Eltern gezwungen, Klavier zu üben — so war das damals.",
    stages: [
      { jp:"ピアノを <ruby>練習<rt>れんしゅう</rt></ruby>する。", de:"Klavier üben.", layer:"Kern: Verb", lesson:"—", note:"Der Ausgangspunkt." },
      { jp:"ピアノを <ruby>練習<rt>れんしゅう</rt></ruby><b class=\"ap\">させられた</b>。", de:"Ich wurde gezwungen, Klavier zu üben.", layer:"+ Kausativ-Passiv 使役受身", lesson:"CK L9", note:"練習する → 練習させられる: „ich werde gezwungen“ — gegen den eigenen Willen." },
      { jp:"<b class=\"ap\"><ruby>親<rt>おや</rt></ruby>に</b> ピアノを <ruby>練習<rt>れんしゅう</rt></ruby>させられた。", de:"Ich wurde von meinen Eltern gezwungen, Klavier zu üben.", layer:"+ Täter mit に", lesson:"L37", note:"Wer zwingt, steht mit に." },
      { jp:"<b class=\"ap\"><ruby>毎日<rt>まいにち</rt></ruby></b> <ruby>親<rt>おや</rt></ruby>に ピアノを <ruby>練習<rt>れんしゅう</rt></ruby>させられた。", de:"Ich wurde jeden Tag von meinen Eltern gezwungen, Klavier zu üben.", layer:"+ Häufigkeit 毎日", lesson:"L11", note:"" },
      { jp:"<b class=\"ap\"><ruby>子供<rt>こども</rt></ruby>の <ruby>頃<rt>ころ</rt></ruby>、</b><ruby>毎日<rt>まいにち</rt></ruby> <ruby>親<rt>おや</rt></ruby>に ピアノを <ruby>練習<rt>れんしゅう</rt></ruby>させられた。", de:"Als Kind wurde ich jeden Tag von meinen Eltern gezwungen, Klavier zu üben.", layer:"+ Zeitrahmen 子供の頃", lesson:"L23", note:"頃 (ころ) ≈ とき: „in der Zeit als …“." },
      { jp:"<ruby>子供<rt>こども</rt></ruby>の <ruby>頃<rt>ころ</rt></ruby>、<ruby>毎日<rt>まいにち</rt></ruby> <ruby>親<rt>おや</rt></ruby>に ピアノを <ruby>練習<rt>れんしゅう</rt></ruby>させられた<b class=\"ap\">ものだ</b>。", de:"Als Kind wurde ich jeden Tag von meinen Eltern gezwungen, Klavier zu üben — so war das damals.", layer:"+ Nostalgie たものだ", lesson:"CK L7", note:"たものだ blickt nostalgisch auf eine frühere Gewohnheit zurück." }
    ]
  },
  {
    title: "Formelles Passiv (によって + Hörensagen)",
    art: "Verschachteln",
    ziel: "Dieser Tempel wurde vor über 1000 Jahren von einem berühmten Mönch erbaut, heißt es.",
    stages: [
      { jp:"お<ruby>寺<rt>てら</rt></ruby>が <ruby>建<rt>た</rt></ruby>てられた。", de:"Ein Tempel wurde gebaut.", layer:"Kern: Passiv", lesson:"L37", note:"建てる → 建てられる." },
      { jp:"この お<ruby>寺<rt>てら</rt></ruby>は <b class=\"ap\"><ruby>有名<rt>ゆうめい</rt></ruby>な <ruby>僧<rt>そう</rt></ruby>に よって</b> <ruby>建<rt>た</rt></ruby>てられた。", de:"Dieser Tempel wurde von einem berühmten Mönch erbaut.", layer:"+ Urheber によって", lesson:"CK L9 / L10", note:"によって (statt nur に) bei Erfindungen, Werken, Bauten — formell." },
      { jp:"この お<ruby>寺<rt>てら</rt></ruby>は <b class=\"ap\"><ruby>千年<rt>せんねん</rt></ruby><ruby>以上<rt>いじょう</rt></ruby><ruby>前<rt>まえ</rt></ruby>に、</b><ruby>有名<rt>ゆうめい</rt></ruby>な <ruby>僧<rt>そう</rt></ruby>に よって <ruby>建<rt>た</rt></ruby>てられた。", de:"Dieser Tempel wurde vor über 1000 Jahren von einem berühmten Mönch erbaut.", layer:"+ Zeitangabe", lesson:"—", note:"以上前 = „vor mehr als …“." },
      { jp:"この お<ruby>寺<rt>てら</rt></ruby>は <ruby>千年<rt>せんねん</rt></ruby><ruby>以上<rt>いじょう</rt></ruby><ruby>前<rt>まえ</rt></ruby>に、<ruby>有名<rt>ゆうめい</rt></ruby>な <ruby>僧<rt>そう</rt></ruby>に よって <ruby>建<rt>た</rt></ruby>てられた<b class=\"ap\">そうだ</b>。", de:"Dieser Tempel wurde vor über 1000 Jahren von einem berühmten Mönch erbaut, heißt es.", layer:"+ Hörensagen そうだ", lesson:"L47", note:"Plain-Form + そうだ = „man sagt / heißt es“ (Information aus zweiter Hand)." }
    ]
  },
  {
    title: "Allmähliche Entwicklung (ようになる + てくる)",
    art: "Schichten",
    ziel: "Seit ich nach Japan gekommen bin, habe ich allmählich angefangen, Kanji lesen zu können.",
    stages: [
      { jp:"<ruby>漢字<rt>かんじ</rt></ruby>が <ruby>読<rt>よ</rt></ruby>める。", de:"Ich kann Kanji lesen.", layer:"Kern: Potential", lesson:"L27", note:"読む → 読める; Objekt mit が." },
      { jp:"<ruby>漢字<rt>かんじ</rt></ruby>が <ruby>読<rt>よ</rt></ruby>める<b class=\"ap\">ように なる</b>。", de:"Ich werde Kanji lesen können.", layer:"+ Veränderung ようになる", lesson:"L36", note:"Vorher ging es nicht, jetzt schon." },
      { jp:"<ruby>漢字<rt>かんじ</rt></ruby>が <ruby>読<rt>よ</rt></ruby>めるように なっ<b class=\"ap\">て きた</b>。", de:"Ich habe allmählich angefangen, Kanji lesen zu können.", layer:"+ Entwicklung bis jetzt てくる", lesson:"CK L10", note:"てくる: eine Veränderung, die sich bis zur Gegenwart entwickelt hat." },
      { jp:"<b class=\"ap\"><ruby>日本<rt>にほん</rt></ruby>に <ruby>来<rt>き</rt></ruby>てから</b>、<ruby>漢字<rt>かんじ</rt></ruby>が <ruby>読<rt>よ</rt></ruby>めるように なって きた。", de:"Seit ich nach Japan gekommen bin, habe ich allmählich angefangen, Kanji lesen zu können.", layer:"+ „seit / nachdem“ てから", lesson:"L16", note:"てから = ab dem Zeitpunkt, an dem V₁ geschah." }
    ]
  },
  {
    title: "Eine Überzeugung (べきだ + Meinung)",
    art: "Verschachteln",
    ziel: "Ich denke, in so einem wichtigen Moment sollte man nicht lügen.",
    stages: [
      { jp:"<ruby>嘘<rt>うそ</rt></ruby>を つく。", de:"lügen.", layer:"Kern: Verb", lesson:"—", note:"嘘を つく = „lügen“ (feste Wendung)." },
      { jp:"<ruby>嘘<rt>うそ</rt></ruby>を つく<b class=\"ap\">べきではない</b>。", de:"Man sollte nicht lügen.", layer:"+ „sollte (nicht)“ べきだ", lesson:"CK L10", note:"V辞書 + べきだ = moralisches Sollen; verneint: べきではない." },
      { jp:"<b class=\"ap\">こんな <ruby>大切<rt>たいせつ</rt></ruby>な ときに、</b><ruby>嘘<rt>うそ</rt></ruby>を つくべきではない。", de:"In so einem wichtigen Moment sollte man nicht lügen.", layer:"+ Zeitrahmen とき", lesson:"L23", note:"な-Adj + な + とき." },
      { jp:"こんな <ruby>大切<rt>たいせつ</rt></ruby>な ときに、<ruby>嘘<rt>うそ</rt></ruby>を つくべきではない<b class=\"ap\">と <ruby>思<rt>おも</rt></ruby>う</b>。", de:"Ich denke, in so einem wichtigen Moment sollte man nicht lügen.", layer:"+ Meinung と思う", lesson:"L21", note:"" }
    ]
  },
  {
    title: "Je … desto … (ば〜ほど)",
    art: "Verketten",
    ziel: "Je mehr man lernt, desto interessanter wird eine Fremdsprache, finde ich.",
    stages: [
      { jp:"<ruby>外国語<rt>がいこくご</rt></ruby>が <ruby>面白<rt>おもしろ</rt></ruby>く なる。", de:"Eine Fremdsprache wird interessant.", layer:"Kern: く + なる", lesson:"L19", note:"面白い → 面白く なる." },
      { jp:"<b class=\"ap\"><ruby>勉強<rt>べんきょう</rt></ruby>すれば する ほど</b>、<ruby>外国語<rt>がいこくご</rt></ruby>が <ruby>面白<rt>おもしろ</rt></ruby>く なる。", de:"Je mehr man lernt, desto interessanter wird eine Fremdsprache.", layer:"+ „je … desto …“ ば〜ほど", lesson:"L35", note:"Dasselbe Verb doppelt: すれば する ほど." },
      { jp:"<ruby>勉強<rt>べんきょう</rt></ruby>すれば する ほど、<ruby>外国語<rt>がいこくご</rt></ruby>が <ruby>面白<rt>おもしろ</rt></ruby>く なる<b class=\"ap\">と <ruby>思<rt>おも</rt></ruby>う</b>。", de:"Je mehr man lernt, desto interessanter wird eine Fremdsprache, finde ich.", layer:"+ Meinung と思う", lesson:"L21", note:"" }
    ]
  },
  {
    title: "Langer のに-Satz: ein Geständnis",
    art: "Verketten",
    ziel: "Obwohl ich vom Arzt ermahnt wurde, kann ich partout nicht mit dem Alkohol aufhören — das macht mir Sorgen.",
    stages: [
      { jp:"お<ruby>酒<rt>さけ</rt></ruby>が やめられない。", de:"Ich kann nicht mit dem Alkohol aufhören.", layer:"Kern: Potential (verneint)", lesson:"L27", note:"やめる → やめられる → やめられない." },
      { jp:"<b class=\"ap\">どうしても</b> お<ruby>酒<rt>さけ</rt></ruby>が やめられない。", de:"Ich kann partout nicht mit dem Alkohol aufhören.", layer:"+ どうしても „partout (nicht)“", lesson:"—", note:"どうしても + Verneinung = „auf keinen Fall / einfach nicht“." },
      { jp:"<b class=\"ap\"><ruby>医者<rt>いしゃ</rt></ruby>に <ruby>注意<rt>ちゅうい</rt></ruby>されたのに</b>、どうしても お<ruby>酒<rt>さけ</rt></ruby>が やめられない。", de:"Obwohl ich vom Arzt ermahnt wurde, kann ich partout nicht aufhören.", layer:"+ Passiv 注意される + „obwohl“ のに", lesson:"L37 / L45", note:"注意される = ermahnt werden; のに = obwohl (mit Beiklang von „und trotzdem nicht“)." },
      { jp:"<ruby>医者<rt>いしゃ</rt></ruby>に <ruby>注意<rt>ちゅうい</rt></ruby>されたのに、どうしても お<ruby>酒<rt>さけ</rt></ruby>が やめられなく<b class=\"ap\">て <ruby>困<rt>こま</rt></ruby>って いる</b>。", de:"Obwohl ich vom Arzt ermahnt wurde, kann ich partout nicht mit dem Alkohol aufhören — und das macht mir Sorgen.", layer:"+ Grund-て + 困っている", lesson:"L39", note:"やめられない → やめられなくて (Grund) + „bin in Schwierigkeiten“ als Folge." }
    ]
  }
];
