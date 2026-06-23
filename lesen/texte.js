// 読解 — Lese-Übungen für renshuu. Handgepflegte, gestaffelte Texte.
// Jeder Satz: {jp (mit Furigana), de}. Alle japanischen Saetze sind geprüft.
// Erweitern: einfach weitere Objekte in "texte" pro Kapitel ergaenzen.
window.LESEN_KAPITEL = [
  {
    titel: "Erste Schritte",
    stufe: "Minna L1–6",
    beschreibung: "Sich vorstellen und Einfaches über sich sagen — です, は, の, を, で.",
    texte: [
      {
        titel: "はじめまして",
        de: "Sehr erfreut (Selbstvorstellung)",
        stufe: "L1–6",
        saetze: [
          { jp:"はじめまして。", de:"Guten Tag / Sehr erfreut." },
          { jp:"<ruby>私<rt>わたし</rt></ruby>は アンナです。", de:"Ich bin Anna." },
          { jp:"ドイツ<ruby>人<rt>じん</rt></ruby>です。", de:"Ich bin Deutsche." },
          { jp:"<ruby>東京<rt>とうきょう</rt></ruby><ruby>大学<rt>だいがく</rt></ruby>の <ruby>学生<rt>がくせい</rt></ruby>です。", de:"Ich bin Studentin an der Universität Tokio." },
          { jp:"<ruby>専門<rt>せんもん</rt></ruby>は <ruby>日本語<rt>にほんご</rt></ruby>です。", de:"Mein Fach ist Japanisch." },
          { jp:"<ruby>毎日<rt>まいにち</rt></ruby> <ruby>大学<rt>だいがく</rt></ruby>で <ruby>日本語<rt>にほんご</rt></ruby>を <ruby>勉強<rt>べんきょう</rt></ruby>します。", de:"Jeden Tag lerne ich an der Uni Japanisch." },
          { jp:"どうぞ よろしく お<ruby>願<rt>ねが</rt></ruby>いします。", de:"Ich freue mich auf die Zusammenarbeit (höfliche Schlussformel)." }
        ],
        vokabeln: [
          { w:"はじめまして", de:"Guten Tag (beim ersten Treffen)" },
          { w:"専門 (せんもん)", de:"Fachgebiet, Hauptfach" },
          { w:"大学 (だいがく)", de:"Universität" },
          { w:"学生 (がくせい)", de:"Student/in" },
          { w:"毎日 (まいにち)", de:"jeden Tag" },
          { w:"勉強する (べんきょうする)", de:"lernen, studieren" }
        ],
        fragen: [
          { q:"Woher kommt Anna?", a:"Aus Deutschland (ドイツ人です)." },
          { q:"Was ist ihr Fach?", a:"Japanisch (専門は日本語です)." }
        ],
        grammatik: "L1 NはNです · L1 Nの (Zugehörigkeit) · L6 Nを + Verb · L6 Ortで"
      }
    ]
  },
  {
    titel: "Mein Alltag",
    stufe: "Minna L7–13",
    beschreibung: "Über Wochenende, Vorlieben und Wünsche sprechen — Adjektive, あげる, 〜たい, 〜が好き.",
    texte: [
      {
        titel: "<ruby>週末<rt>しゅうまつ</rt></ruby>",
        de: "Das Wochenende",
        stufe: "L7–13",
        saetze: [
          { jp:"<ruby>私<rt>わたし</rt></ruby>は <ruby>週末<rt>しゅうまつ</rt></ruby>が <ruby>大好<rt>だいす</rt></ruby>きです。", de:"Ich mag das Wochenende sehr." },
          { jp:"<ruby>土曜日<rt>どようび</rt></ruby>、<ruby>友達<rt>ともだち</rt></ruby>と <ruby>映画<rt>えいが</rt></ruby>を <ruby>見<rt>み</rt></ruby>ます。", de:"Am Samstag schaue ich mit einer Freundin einen Film." },
          { jp:"<ruby>日本<rt>にほん</rt></ruby>の <ruby>映画<rt>えいが</rt></ruby>は とても おもしろいです。", de:"Japanische Filme sind sehr interessant." },
          { jp:"<ruby>日曜日<rt>にちようび</rt></ruby>、デパートへ <ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>に <ruby>行<rt>い</rt></ruby>きます。", de:"Am Sonntag gehe ich zum Einkaufen ins Kaufhaus." },
          { jp:"<ruby>新<rt>あたら</rt></ruby>しい かばんが <ruby>欲<rt>ほ</rt></ruby>しいです。", de:"Ich möchte eine neue Tasche (haben)." },
          { jp:"<ruby>来週<rt>らいしゅう</rt></ruby>は <ruby>母<rt>はは</rt></ruby>の <ruby>誕生日<rt>たんじょうび</rt></ruby>です。", de:"Nächste Woche hat meine Mutter Geburtstag." },
          { jp:"<ruby>母<rt>はは</rt></ruby>に きれいな <ruby>花<rt>はな</rt></ruby>を あげます。", de:"Ich schenke meiner Mutter schöne Blumen." }
        ],
        vokabeln: [
          { w:"週末 (しゅうまつ)", de:"Wochenende" },
          { w:"大好き (だいすき)", de:"sehr gern mögen" },
          { w:"買い物 (かいもの)", de:"Einkaufen" },
          { w:"欲しい (ほしい)", de:"haben wollen, sich wünschen" },
          { w:"誕生日 (たんじょうび)", de:"Geburtstag" },
          { w:"あげる", de:"geben, schenken" }
        ],
        fragen: [
          { q:"Was macht sie am Samstag?", a:"Mit einer Freundin einen Film schauen (友達と映画を見ます)." },
          { q:"Was schenkt sie ihrer Mutter?", a:"Schöne Blumen (きれいな花をあげます)." }
        ],
        grammatik: "L8 Adjektive · L9 Nが好き · L7 あげる · L13 Nが欲しい · L13 ますに行く"
      }
    ]
  },
  {
    titel: "Eine kleine Reise",
    stufe: "Minna L14–20",
    beschreibung: "Eine Erzählung in der Vergangenheit — て-Form, てから, ています.",
    texte: [
      {
        titel: "<ruby>京都<rt>きょうと</rt></ruby><ruby>旅行<rt>りょこう</rt></ruby>",
        de: "Eine Reise nach Kyoto",
        stufe: "L14–20",
        saetze: [
          { jp:"<ruby>先週<rt>せんしゅう</rt></ruby>、<ruby>友達<rt>ともだち</rt></ruby>と <ruby>京都<rt>きょうと</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました。", de:"Letzte Woche bin ich mit einer Freundin nach Kyoto gefahren." },
          { jp:"<ruby>朝<rt>あさ</rt></ruby> <ruby>早<rt>はや</rt></ruby>く <ruby>起<rt>お</rt></ruby>きて、<ruby>新幹線<rt>しんかんせん</rt></ruby>に <ruby>乗<rt>の</rt></ruby>りました。", de:"Wir sind früh aufgestanden und in den Shinkansen gestiegen." },
          { jp:"<ruby>京都<rt>きょうと</rt></ruby>で お<ruby>寺<rt>てら</rt></ruby>を <ruby>見<rt>み</rt></ruby>て、<ruby>写真<rt>しゃしん</rt></ruby>を たくさん <ruby>撮<rt>と</rt></ruby>りました。", de:"In Kyoto haben wir Tempel angeschaut und viele Fotos gemacht." },
          { jp:"お<ruby>寺<rt>てら</rt></ruby>は とても <ruby>静<rt>しず</rt></ruby>かで、きれいでした。", de:"Die Tempel waren sehr ruhig und schön." },
          { jp:"<ruby>昼<rt>ひる</rt></ruby>ごはんを <ruby>食<rt>た</rt></ruby>べてから、<ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>を しました。", de:"Nach dem Mittagessen haben wir eingekauft." },
          { jp:"<ruby>今<rt>いま</rt></ruby>、その <ruby>写真<rt>しゃしん</rt></ruby>を <ruby>部屋<rt>へや</rt></ruby>に <ruby>飾<rt>かざ</rt></ruby>って います。", de:"Jetzt habe ich diese Fotos in meinem Zimmer aufgehängt." },
          { jp:"また <ruby>京都<rt>きょうと</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きたいです。", de:"Ich möchte wieder nach Kyoto fahren." }
        ],
        vokabeln: [
          { w:"旅行 (りょこう)", de:"Reise" },
          { w:"新幹線 (しんかんせん)", de:"Shinkansen (Schnellzug)" },
          { w:"乗る (のる)", de:"einsteigen, fahren mit" },
          { w:"撮る (とる)", de:"(ein Foto) machen" },
          { w:"飾る (かざる)", de:"aufstellen, schmücken, aufhängen" },
          { w:"また", de:"wieder, noch einmal" }
        ],
        fragen: [
          { q:"Womit sind sie nach Kyoto gereist?", a:"Mit dem Shinkansen (新幹線に乗りました)." },
          { q:"Wie waren die Tempel?", a:"Sehr ruhig und schön (とても静かで、きれいでした)." }
        ],
        grammatik: "L16 て-Verkettung · L16 てから · L16 くて/で · L14/15 ています · L13 〜たい"
      }
    ]
  },
  {
    titel: "Wünsche & Pläne",
    stufe: "Minna L17–31",
    beschreibung: "Über Ziele und Meinungen sprechen — つもり, 〜と思う, なければなりません.",
    texte: [
      {
        titel: "<ruby>日本<rt>にほん</rt></ruby>で <ruby>働<rt>はたら</rt></ruby>きたい",
        de: "Ich möchte in Japan arbeiten",
        stufe: "L17–31",
        saetze: [
          { jp:"<ruby>私<rt>わたし</rt></ruby>は <ruby>来年<rt>らいねん</rt></ruby> <ruby>日本<rt>にほん</rt></ruby>へ <ruby>行<rt>い</rt></ruby>く つもりです。", de:"Ich habe vor, nächstes Jahr nach Japan zu gehen." },
          { jp:"<ruby>日本<rt>にほん</rt></ruby>で <ruby>働<rt>はたら</rt></ruby>きたいと <ruby>思<rt>おも</rt></ruby>って います。", de:"Ich möchte (schon länger) in Japan arbeiten." },
          { jp:"<ruby>日本語<rt>にほんご</rt></ruby>の <ruby>勉強<rt>べんきょう</rt></ruby>は <ruby>大変<rt>たいへん</rt></ruby>ですが、おもしろいです。", de:"Japanisch zu lernen ist mühsam, aber interessant." },
          { jp:"<ruby>仕事<rt>しごと</rt></ruby>の ために、<ruby>漢字<rt>かんじ</rt></ruby>を たくさん <ruby>覚<rt>おぼ</rt></ruby>えなければ なりません。", de:"Für den Beruf muss ich viele Kanji lernen." },
          { jp:"<ruby>友達<rt>ともだち</rt></ruby>は「<ruby>頑張<rt>がんば</rt></ruby>って」と <ruby>言<rt>い</rt></ruby>いました。", de:"Meine Freunde sagten: „Gib dein Bestes!“" },
          { jp:"だから、もう <ruby>少<rt>すこ</rt></ruby>し <ruby>頑張<rt>がんば</rt></ruby>ろうと <ruby>思<rt>おも</rt></ruby>います。", de:"Deshalb will ich mich noch ein bisschen mehr anstrengen." }
        ],
        vokabeln: [
          { w:"来年 (らいねん)", de:"nächstes Jahr" },
          { w:"つもり", de:"Absicht, Vorhaben" },
          { w:"大変 (たいへん)", de:"mühsam, anstrengend" },
          { w:"覚える (おぼえる)", de:"sich merken, lernen" },
          { w:"頑張る (がんばる)", de:"sich anstrengen, durchhalten" },
          { w:"だから", de:"deshalb, darum" }
        ],
        fragen: [
          { q:"Was hat sie nächstes Jahr vor?", a:"Nach Japan gehen (日本へ行くつもりです)." },
          { q:"Was muss sie für den Beruf tun?", a:"Viele Kanji lernen (漢字を覚えなければなりません)." }
        ],
        grammatik: "L31 つもり · L31 〜たいと思っている · L20 が (aber) · L17 なければなりません · L42 ために · L21 と言いました · L31 Volitional + と思う"
      }
    ]
  },
  {
    titel: "Beschreiben",
    stufe: "Minna L22–44",
    beschreibung: "Eine Umgebung beschreiben — Relativsätze, てくれる, でしょう.",
    texte: [
      {
        titel: "<ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>し",
        de: "Der Umzug",
        stufe: "L22–44",
        saetze: [
          { jp:"<ruby>先月<rt>せんげつ</rt></ruby>、<ruby>新<rt>あたら</rt></ruby>しい アパートに <ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>しました。", de:"Letzten Monat bin ich in eine neue Wohnung umgezogen." },
          { jp:"<ruby>駅<rt>えき</rt></ruby>から <ruby>近<rt>ちか</rt></ruby>くて、<ruby>住<rt>す</rt></ruby>みやすい <ruby>町<rt>まち</rt></ruby>です。", de:"Es ist eine Gegend nahe am Bahnhof, in der es sich gut wohnen lässt." },
          { jp:"<ruby>近<rt>ちか</rt></ruby>くに、<ruby>友達<rt>ともだち</rt></ruby>が <ruby>教<rt>おし</rt></ruby>えて くれた スーパーが あります。", de:"In der Nähe gibt es einen Supermarkt, den mir eine Freundin gezeigt hat." },
          { jp:"その スーパーは <ruby>安<rt>やす</rt></ruby>くて、<ruby>便利<rt>べんり</rt></ruby>です。", de:"Dieser Supermarkt ist günstig und praktisch." },
          { jp:"<ruby>週末<rt>しゅうまつ</rt></ruby>は <ruby>近<rt>ちか</rt></ruby>くの <ruby>公園<rt>こうえん</rt></ruby>を <ruby>散歩<rt>さんぽ</rt></ruby>します。", de:"Am Wochenende spaziere ich durch den nahen Park." },
          { jp:"<ruby>明日<rt>あした</rt></ruby>は たぶん <ruby>雨<rt>あめ</rt></ruby>が <ruby>降<rt>ふ</rt></ruby>るでしょう。", de:"Morgen wird es wohl regnen." },
          { jp:"だから、<ruby>家<rt>いえ</rt></ruby>で <ruby>本<rt>ほん</rt></ruby>を <ruby>読<rt>よ</rt></ruby>もうと <ruby>思<rt>おも</rt></ruby>って います。", de:"Deshalb will ich zu Hause ein Buch lesen." }
        ],
        vokabeln: [
          { w:"引っ越す (ひっこす)", de:"umziehen" },
          { w:"近い (ちかい)", de:"nah" },
          { w:"住みやすい (すみやすい)", de:"angenehm zum Wohnen" },
          { w:"便利 (べんり)", de:"praktisch, bequem" },
          { w:"散歩する (さんぽする)", de:"spazieren gehen" },
          { w:"たぶん", de:"wahrscheinlich, wohl" }
        ],
        fragen: [
          { q:"Wo liegt die neue Wohnung?", a:"Nahe am Bahnhof (駅から近い)." },
          { q:"Warum will sie morgen zu Hause bleiben?", a:"Weil es wohl regnen wird (雨が降るでしょう)." }
        ],
        grammatik: "L22 Relativsatz · L24 てくれる · L16 くて · L44 やすい · L23 Ortを · L32 でしょう · L31 Volitional + と思う"
      }
    ]
  },
  {
    titel: "Höflich & Mittelstufe",
    stufe: "Minna L41–50 + Chuukyuu",
    beschreibung: "Eine höfliche E-Mail — Keigo, ていただく, のに, Kausativ + いただけませんか.",
    texte: [
      {
        titel: "お<ruby>礼<rt>れい</rt></ruby>の メール",
        de: "Eine Dankes-E-Mail",
        stufe: "L41–50 + CK",
        saetze: [
          { jp:"<ruby>田中<rt>たなか</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>、いつも お<ruby>世話<rt>せわ</rt></ruby>に なって おります。", de:"Sehr geehrter Herr Tanaka, vielen Dank für Ihre stete Unterstützung." },
          { jp:"<ruby>先日<rt>せんじつ</rt></ruby>は、お<ruby>忙<rt>いそが</rt></ruby>しいのに <ruby>時間<rt>じかん</rt></ruby>を <ruby>作<rt>つく</rt></ruby>って いただいて、ありがとう ございました。", de:"Vielen Dank, dass Sie sich neulich trotz Ihrer vielen Arbeit Zeit genommen haben." },
          { jp:"<ruby>先生<rt>せんせい</rt></ruby>に <ruby>教<rt>おし</rt></ruby>えて いただいた ことを、<ruby>毎日<rt>まいにち</rt></ruby> <ruby>練習<rt>れんしゅう</rt></ruby>して います。", de:"Was Sie mir beigebracht haben, übe ich jeden Tag." },
          { jp:"おかげさまで、<ruby>少<rt>すこ</rt></ruby>しずつ <ruby>話<rt>はな</rt></ruby>せるように なって きました。", de:"Dank Ihnen kann ich nach und nach immer mehr sprechen." },
          { jp:"また <ruby>分<rt>わ</rt></ruby>からない ことが あったら、<ruby>質問<rt>しつもん</rt></ruby>させて いただけませんか。", de:"Falls ich wieder etwas nicht verstehe — dürfte ich Ihnen dann eine Frage stellen?" },
          { jp:"これからも どうぞ よろしく お<ruby>願<rt>ねが</rt></ruby>い いたします。", de:"Ich bitte auch weiterhin um Ihr Wohlwollen." }
        ],
        vokabeln: [
          { w:"お世話になる (おせわになる)", de:"jemandes Hilfe/Fürsorge erfahren (feste Höflichkeitsfloskel)" },
          { w:"先日 (せんじつ)", de:"neulich, kürzlich" },
          { w:"おかげさまで", de:"dank Ihrer Hilfe (Dankesfloskel)" },
          { w:"少しずつ (すこしずつ)", de:"nach und nach, Stück für Stück" },
          { w:"質問する (しつもんする)", de:"eine Frage stellen" },
          { w:"これからも", de:"auch in Zukunft, weiterhin" }
        ],
        fragen: [
          { q:"Wofür bedankt sich die Schreiberin?", a:"Dass der Lehrer sich trotz Arbeit Zeit genommen hat (お忙しいのに時間を作っていただいて)." },
          { q:"Worum bittet sie am Ende höflich?", a:"Wieder Fragen stellen zu dürfen (質問させていただけませんか)." }
        ],
        grammatik: "L50 Keigo (おる/いたす) · L41 ていただく · L45 のに · L36 ようになる + CK てくる · L48 Kausativ + いただけませんか"
      }
    ]
  },
  {
    titel: "🔦 Horror-Story: 夜の学校",
    stufe: "Story · Minna L15–30",
    beschreibung: "Eine gruselige Kurzgeschichte in Kapiteln. Etwas anspruchsvoller — aber mit Furigana, Übersetzung und Vokabeln gut zu schaffen.",
    texte: [
      {
        titel: "<ruby>第一章<rt>だいいっしょう</rt></ruby>「ピアノの<ruby>音<rt>おと</rt></ruby>」",
        de: "Kapitel 1: Das Klaviergeräusch",
        stufe: "L15–30",
        saetze: [
          { jp:"それは <ruby>11月<rt>じゅういちがつ</rt></ruby>の <ruby>寒<rt>さむ</rt></ruby>い <ruby>夜<rt>よる</rt></ruby>でした。", de:"Es war eine kalte Nacht im November." },
          { jp:"<ruby>高校生<rt>こうこうせい</rt></ruby>の ユキは、<ruby>一人<rt>ひとり</rt></ruby>で <ruby>教室<rt>きょうしつ</rt></ruby>に <ruby>残<rt>のこ</rt></ruby>って、<ruby>勉強<rt>べんきょう</rt></ruby>して いました。", de:"Die Oberschülerin Yuki war allein im Klassenzimmer geblieben und lernte." },
          { jp:"<ruby>気<rt>き</rt></ruby>が つくと、<ruby>外<rt>そと</rt></ruby>は もう <ruby>真<rt>ま</rt></ruby>っ<ruby>暗<rt>くら</rt></ruby>でした。", de:"Als sie aufmerkte, war es draußen schon stockdunkel." },
          { jp:"<ruby>時計<rt>とけい</rt></ruby>を <ruby>見<rt>み</rt></ruby>ると、<ruby>夜<rt>よる</rt></ruby>の <ruby>12時<rt>じゅうにじ</rt></ruby>でした。", de:"Als sie auf die Uhr schaute, war es Mitternacht." },
          { jp:"「<ruby>変<rt>へん</rt></ruby>だな。だれも いない。」", de:"„Seltsam. Niemand ist da.“" },
          { jp:"<ruby>学校<rt>がっこう</rt></ruby>の <ruby>中<rt>なか</rt></ruby>は とても <ruby>静<rt>しず</rt></ruby>かで、<ruby>電気<rt>でんき</rt></ruby>も <ruby>消<rt>き</rt></ruby>えて いました。", de:"Im Schulgebäude war es ganz still, und auch das Licht war aus." },
          { jp:"ユキは かばんを <ruby>持<rt>も</rt></ruby>って、<ruby>急<rt>いそ</rt></ruby>いで <ruby>廊下<rt>ろうか</rt></ruby>に <ruby>出<rt>で</rt></ruby>ました。", de:"Yuki nahm ihre Tasche und ging eilig auf den Flur." },
          { jp:"その とき、<ruby>音楽室<rt>おんがくしつ</rt></ruby>の ほうから、ピアノの <ruby>音<rt>おと</rt></ruby>が <ruby>聞<rt>き</rt></ruby>こえて きました。", de:"In diesem Moment kam aus Richtung des Musikraums ein Klavierklang." },
          { jp:"でも、<ruby>今日<rt>きょう</rt></ruby>は <ruby>金曜日<rt>きんようび</rt></ruby>で、<ruby>音楽<rt>おんがく</rt></ruby>の <ruby>授業<rt>じゅぎょう</rt></ruby>は ありませんでした。", de:"Aber heute war Freitag, und es gab keinen Musikunterricht." },
          { jp:"「だれか いるの…?」", de:"„Ist da … jemand?“" },
          { jp:"ユキは そっと <ruby>音楽室<rt>おんがくしつ</rt></ruby>の ドアを <ruby>開<rt>あ</rt></ruby>けました。", de:"Yuki öffnete leise die Tür des Musikraums." },
          { jp:"すると、ピアノの <ruby>前<rt>まえ</rt></ruby>に、<ruby>白<rt>しろ</rt></ruby>い <ruby>服<rt>ふく</rt></ruby>を <ruby>着<rt>き</rt></ruby>た <ruby>女<rt>おんな</rt></ruby>の <ruby>子<rt>こ</rt></ruby>が <ruby>座<rt>すわ</rt></ruby>って いました。", de:"Da saß vor dem Klavier ein Mädchen in weißer Kleidung." },
          { jp:"ユキは <ruby>小<rt>ちい</rt></ruby>さな <ruby>声<rt>こえ</rt></ruby>で <ruby>聞<rt>き</rt></ruby>きました。「あなた、だれ?」", de:"Mit leiser Stimme fragte Yuki: „Wer bist du?“" },
          { jp:"<ruby>女<rt>おんな</rt></ruby>の <ruby>子<rt>こ</rt></ruby>は ゆっくりと こちらを <ruby>向<rt>む</rt></ruby>きました。", de:"Das Mädchen drehte sich langsam zu ihr um." },
          { jp:"でも、その <ruby>子<rt>こ</rt></ruby>には、<ruby>顔<rt>かお</rt></ruby>が ありませんでした。", de:"Doch dieses Mädchen hatte kein Gesicht." },
          { jp:"ユキは <ruby>声<rt>こえ</rt></ruby>を <ruby>出<rt>だ</rt></ruby>す ことも できませんでした……。", de:"Yuki konnte nicht einmal schreien …" },
          { jp:"（<ruby>第二章<rt>だいにしょう</rt></ruby>に つづく）", de:"(Fortsetzung in Kapitel 2)" }
        ],
        vokabeln: [
          { w:"残る (のこる)", de:"zurückbleiben, dableiben" },
          { w:"気がつく (きがつく)", de:"bemerken, aufmerken" },
          { w:"真っ暗 (まっくら)", de:"stockdunkel" },
          { w:"変 (へん)", de:"seltsam, komisch" },
          { w:"廊下 (ろうか)", de:"Flur, Gang" },
          { w:"音楽室 (おんがくしつ)", de:"Musikraum" },
          { w:"聞こえる (きこえる)", de:"zu hören sein" },
          { w:"そっと", de:"leise, behutsam" },
          { w:"向く (むく)", de:"sich (hin)wenden, sich drehen" },
          { w:"顔 (かお)", de:"Gesicht" }
        ],
        fragen: [
          { q:"Warum war Yuki nachts noch in der Schule?", a:"Sie war allein im Klassenzimmer geblieben und hat gelernt (一人で教室に残って、勉強していました)." },
          { q:"Was hörte sie auf dem Flur — und warum war das seltsam?", a:"Klaviermusik aus dem Musikraum; seltsam, weil Freitag war und es keinen Musikunterricht gab." },
          { q:"Was war an dem Mädchen am Klavier so unheimlich?", a:"Es hatte kein Gesicht (顔がありませんでした)." }
        ],
        grammatik: "L15 ています (Zustand) · L23 〜と (als/sobald) · L16 くて/で (verbinden) · L22 Relativsatz (白い服を着た女の子) · L43 聞こえてくる · L18 ことができる"
      },
      {
        titel: "<ruby>第二章<rt>だいにしょう</rt></ruby>「<ruby>逃<rt>に</rt></ruby>げられない」",
        de: "Kapitel 2: Kein Entkommen",
        stufe: "gemischt",
        saetze: [
          { jp:"ユキは <ruby>急<rt>いそ</rt></ruby>いで <ruby>音楽室<rt>おんがくしつ</rt></ruby>から <ruby>逃<rt>に</rt></ruby>げました。", de:"Yuki floh eilig aus dem Musikraum." },
          { jp:"<ruby>後<rt>うし</rt></ruby>ろからは、まだ ピアノの <ruby>音<rt>おと</rt></ruby>が <ruby>聞<rt>き</rt></ruby>こえて いました。", de:"Von hinten war immer noch das Klavier zu hören." },
          { jp:"<ruby>心臓<rt>しんぞう</rt></ruby>が <ruby>止<rt>と</rt></ruby>まりそうでした。", de:"Ihr Herz schien stehenzubleiben." },
          { jp:"<ruby>階段<rt>かいだん</rt></ruby>を <ruby>下<rt>お</rt></ruby>りて、<ruby>玄関<rt>げんかん</rt></ruby>まで <ruby>走<rt>はし</rt></ruby>りました。", de:"Sie rannte die Treppe hinunter bis zum Eingang." },
          { jp:"でも、ドアは どんなに <ruby>押<rt>お</rt></ruby>しても、<ruby>開<rt>あ</rt></ruby>きませんでした。", de:"Doch egal wie sehr sie drückte, die Tür ging nicht auf." },
          { jp:"<ruby>鍵<rt>かぎ</rt></ruby>が かかって いたんです。", de:"Sie war nämlich abgeschlossen." },
          { jp:"「だれか、<ruby>助<rt>たす</rt></ruby>けて!」と <ruby>叫<rt>さけ</rt></ruby>びましたが、だれも <ruby>来<rt>き</rt></ruby>ませんでした。", de:"„Hilfe, jemand!“, schrie sie — aber niemand kam." },
          { jp:"その とき、<ruby>窓<rt>まど</rt></ruby>ガラスに <ruby>何<rt>なに</rt></ruby>かが <ruby>映<rt>うつ</rt></ruby>りました。", de:"In diesem Moment spiegelte sich etwas in der Fensterscheibe." },
          { jp:"あの <ruby>白<rt>しろ</rt></ruby>い <ruby>服<rt>ふく</rt></ruby>の <ruby>女<rt>おんな</rt></ruby>の <ruby>子<rt>こ</rt></ruby>が、すぐ <ruby>後<rt>うし</rt></ruby>ろに <ruby>立<rt>た</rt></ruby>って いました。", de:"Das Mädchen in Weiß stand direkt hinter ihr." },
          { jp:"<ruby>逃<rt>に</rt></ruby>げようと しましたが、<ruby>足<rt>あし</rt></ruby>が <ruby>動<rt>うご</rt></ruby>きませんでした。", de:"Sie wollte fliehen, aber ihre Beine bewegten sich nicht." },
          { jp:"<ruby>女<rt>おんな</rt></ruby>の <ruby>子<rt>こ</rt></ruby>は <ruby>静<rt>しず</rt></ruby>かに <ruby>言<rt>い</rt></ruby>いました。「やっと <ruby>見<rt>み</rt></ruby>つけた。」", de:"Das Mädchen sagte leise: „Endlich gefunden.“" },
          { jp:"「<ruby>30年<rt>さんじゅうねん</rt></ruby><ruby>前<rt>まえ</rt></ruby>、<ruby>私<rt>わたし</rt></ruby>も この <ruby>学校<rt>がっこう</rt></ruby>の <ruby>生徒<rt>せいと</rt></ruby>だったの。」", de:"„Vor 30 Jahren war auch ich eine Schülerin dieser Schule.“" },
          { jp:"「でも、だれも <ruby>私<rt>わたし</rt></ruby>の ことを <ruby>覚<rt>おぼ</rt></ruby>えて いない。」", de:"„Aber niemand erinnert sich an mich.“" },
          { jp:"<ruby>廊下<rt>ろうか</rt></ruby>の <ruby>壁<rt>かべ</rt></ruby>には、<ruby>古<rt>ふる</rt></ruby>い <ruby>写真<rt>しゃしん</rt></ruby>が かざって ありました。", de:"An der Flurwand war ein altes Foto aufgehängt." },
          { jp:"その <ruby>写真<rt>しゃしん</rt></ruby>の <ruby>女<rt>おんな</rt></ruby>の <ruby>子<rt>こ</rt></ruby>の <ruby>顔<rt>かお</rt></ruby>だけが、<ruby>消<rt>き</rt></ruby>えて いました。", de:"Nur das Gesicht des Mädchens auf dem Foto war verschwunden." },
          { jp:"そして <ruby>今<rt>いま</rt></ruby>、その <ruby>隣<rt>となり</rt></ruby>に、ユキの <ruby>顔<rt>かお</rt></ruby>が <ruby>写<rt>うつ</rt></ruby>って いたんです。", de:"Und jetzt war direkt daneben Yukis Gesicht zu sehen …" },
          { jp:"（<ruby>第三章<rt>だいさんしょう</rt></ruby>に つづく）", de:"(Fortsetzung in Kapitel 3)" }
        ],
        vokabeln: [
          { w:"逃げる (にげる)", de:"fliehen, entkommen" },
          { w:"心臓 (しんぞう)", de:"Herz" },
          { w:"階段 (かいだん)", de:"Treppe" },
          { w:"玄関 (げんかん)", de:"Eingang(sbereich)" },
          { w:"鍵がかかる (かぎがかかる)", de:"abgeschlossen sein" },
          { w:"叫ぶ (さけぶ)", de:"schreien, rufen" },
          { w:"映る (うつる)", de:"sich spiegeln, erscheinen" },
          { w:"生徒 (せいと)", de:"Schüler/in" },
          { w:"壁 (かべ)", de:"Wand" },
          { w:"写る (うつる)", de:"(auf einem Foto) zu sehen sein" }
        ],
        fragen: [
          { q:"Warum konnte Yuki nicht durch die Tür entkommen?", a:"Die Tür war abgeschlossen (鍵がかかっていたんです)." },
          { q:"Was erzählt das Mädchen über sich?", a:"Vor 30 Jahren war sie Schülerin dieser Schule, aber niemand erinnert sich an sie." },
          { q:"Was ist am Ende mit dem alten Foto?", a:"Das Gesicht des Mädchens fehlt — und jetzt ist Yukis Gesicht daneben zu sehen." }
        ],
        grammatik: "L43 Vます+そう (Anschein: 止まりそう) · L25 どんなに〜ても · L26 んです · Volitional + とする (逃げようとする) · L30 てある (かざってある) · L15 ている (写っている) · Plain-Stil in Dialogen"
      },
      {
        titel: "<ruby>第三章<rt>だいさんしょう</rt></ruby>「<ruby>消<rt>き</rt></ruby>えた<ruby>名前<rt>なまえ</rt></ruby>」",
        de: "Kapitel 3: Der verschwundene Name (Finale)",
        stufe: "gemischt · lang",
        saetze: [
          { jp:"ユキは <ruby>写真<rt>しゃしん</rt></ruby>の <ruby>中<rt>なか</rt></ruby>の <ruby>自分<rt>じぶん</rt></ruby>の <ruby>顔<rt>かお</rt></ruby>を、ただ じっと <ruby>見<rt>み</rt></ruby>つめて いました。", de:"Yuki starrte nur reglos auf ihr eigenes Gesicht im Foto." },
          { jp:"<ruby>指先<rt>ゆびさき</rt></ruby>が <ruby>氷<rt>こおり</rt></ruby>のように <ruby>冷<rt>つめ</rt></ruby>たく なって いきました。", de:"Ihre Fingerspitzen wurden eiskalt." },
          { jp:"その とき、<ruby>背中<rt>せなか</rt></ruby>に、つめたい <ruby>息<rt>いき</rt></ruby>が かかりました。", de:"In diesem Moment spürte sie kalten Atem im Nacken." },
          { jp:"ふり<ruby>向<rt>む</rt></ruby>くと、のっぺりした <ruby>白<rt>しろ</rt></ruby>い <ruby>顔<rt>かお</rt></ruby>が、すぐ <ruby>目<rt>め</rt></ruby>の <ruby>前<rt>まえ</rt></ruby>に ありました。", de:"Als sie sich umdrehte, war das glatte, gesichtslose weiße Antlitz direkt vor ihr." },
          { jp:"ユキは <ruby>悲鳴<rt>ひめい</rt></ruby>を あげようと しましたが、<ruby>声<rt>こえ</rt></ruby>が <ruby>出<rt>で</rt></ruby>ませんでした。", de:"Yuki wollte aufschreien, doch keine Stimme kam heraus." },
          { jp:"「<ruby>怖<rt>こわ</rt></ruby>がらないで。」と、その <ruby>子<rt>こ</rt></ruby>は <ruby>静<rt>しず</rt></ruby>かに <ruby>言<rt>い</rt></ruby>いました。", de:"„Hab keine Angst“, sagte das Mädchen leise." },
          { jp:"「<ruby>私<rt>わたし</rt></ruby>の <ruby>名前<rt>なまえ</rt></ruby>を <ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>して くれたら、<ruby>私<rt>わたし</rt></ruby>は やっと <ruby>消<rt>き</rt></ruby>えられるの。」", de:"„Wenn du dich an meinen Namen erinnerst, kann ich endlich vergehen.“" },
          { jp:"「でも、だれも <ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>して くれなければ、あなたが <ruby>私<rt>わたし</rt></ruby>の <ruby>代<rt>か</rt></ruby>わりに なる。」", de:"„Aber wenn sich niemand erinnert, nimmst du meinen Platz ein.“" },
          { jp:"ユキは <ruby>震<rt>ふる</rt></ruby>える <ruby>声<rt>こえ</rt></ruby>で <ruby>聞<rt>き</rt></ruby>きました。「じゃあ、あなたの <ruby>名前<rt>なまえ</rt></ruby>は <ruby>何<rt>なん</rt></ruby>なの?」", de:"Mit zitternder Stimme fragte Yuki: „Dann — wie heißt du denn?“" },
          { jp:"<ruby>女<rt>おんな</rt></ruby>の <ruby>子<rt>こ</rt></ruby>は <ruby>悲<rt>かな</rt></ruby>しそうに <ruby>首<rt>くび</rt></ruby>を <ruby>横<rt>よこ</rt></ruby>に <ruby>振<rt>ふ</rt></ruby>りました。", de:"Das Mädchen schüttelte traurig den Kopf." },
          { jp:"「もう、<ruby>自分<rt>じぶん</rt></ruby>でも <ruby>分<rt>わ</rt></ruby>からないの。みんなが <ruby>忘<rt>わす</rt></ruby>れて しまったから。」", de:"„Ich weiß es selbst nicht mehr — weil alle es vergessen haben.“" },
          { jp:"<ruby>突然<rt>とつぜん</rt></ruby>、<ruby>廊下<rt>ろうか</rt></ruby>の <ruby>電気<rt>でんき</rt></ruby>が <ruby>一斉<rt>いっせい</rt></ruby>に <ruby>消<rt>き</rt></ruby>えました。", de:"Plötzlich gingen schlagartig alle Lichter im Flur aus." },
          { jp:"<ruby>真<rt>ま</rt></ruby>っ<ruby>暗<rt>くら</rt></ruby>な <ruby>中<rt>なか</rt></ruby>で、<ruby>時計<rt>とけい</rt></ruby>の <ruby>音<rt>おと</rt></ruby>だけが <ruby>大<rt>おお</rt></ruby>きく <ruby>響<rt>ひび</rt></ruby>いて いました。", de:"In der Dunkelheit hallte nur das Ticken der Uhr laut nach." },
          { jp:"<ruby>廊下<rt>ろうか</rt></ruby>は、どんどん <ruby>長<rt>なが</rt></ruby>く なって いくようでした。", de:"Der Flur schien immer länger und länger zu werden." },
          { jp:"ユキは <ruby>名前<rt>なまえ</rt></ruby>を <ruby>探<rt>さが</rt></ruby>す ために、<ruby>職員室<rt>しょくいんしつ</rt></ruby>へ <ruby>走<rt>はし</rt></ruby>りました。", de:"Um den Namen zu finden, rannte Yuki ins Lehrerzimmer." },
          { jp:"<ruby>古<rt>ふる</rt></ruby>い <ruby>名簿<rt>めいぼ</rt></ruby>を <ruby>見<rt>み</rt></ruby>つけて、ページを <ruby>急<rt>いそ</rt></ruby>いで めくりました。", de:"Sie fand eine alte Namensliste und blätterte hastig darin." },
          { jp:"でも、ある <ruby>一人<rt>ひとり</rt></ruby>の <ruby>名前<rt>なまえ</rt></ruby>だけが、<ruby>黒<rt>くろ</rt></ruby>く <ruby>塗<rt>ぬ</rt></ruby>りつぶされて いました。", de:"Doch genau ein einziger Name war schwarz übermalt." },
          { jp:"<ruby>後<rt>うし</rt></ruby>ろから、また あの <ruby>小<rt>ちい</rt></ruby>さな <ruby>声<rt>こえ</rt></ruby>が <ruby>聞<rt>き</rt></ruby>こえました。「<ruby>早<rt>はや</rt></ruby>く……<ruby>見<rt>み</rt></ruby>つけて……。」", de:"Von hinten wieder diese leise Stimme: „Schnell … finde es …“" },
          { jp:"ユキの <ruby>手<rt>て</rt></ruby>は <ruby>震<rt>ふる</rt></ruby>えて いましたが、ページを めくり <ruby>続<rt>つづ</rt></ruby>けました。", de:"Yukis Hände zitterten, doch sie blätterte weiter." },
          { jp:"その とき、<ruby>窓<rt>まど</rt></ruby>の <ruby>外<rt>そと</rt></ruby>から、<ruby>子供<rt>こども</rt></ruby>たちの <ruby>笑<rt>わら</rt></ruby>い<ruby>声<rt>ごえ</rt></ruby>が <ruby>聞<rt>き</rt></ruby>こえました。", de:"Da hörte sie von draußen vor dem Fenster Kinderlachen." },
          { jp:"でも、ここは <ruby>3階<rt>さんがい</rt></ruby>で、<ruby>外<rt>そと</rt></ruby>に だれかが いる はずが ありませんでした。", de:"Aber sie war im 3. Stock — draußen konnte unmöglich jemand sein." },
          { jp:"<ruby>机<rt>つくえ</rt></ruby>の <ruby>引<rt>ひ</rt></ruby>き<ruby>出<rt>だ</rt></ruby>しの <ruby>奥<rt>おく</rt></ruby>に、<ruby>古<rt>ふる</rt></ruby>い <ruby>日記<rt>にっき</rt></ruby>が かくして ありました。", de:"Hinten in der Schublade war ein altes Tagebuch versteckt." },
          { jp:"<ruby>最後<rt>さいご</rt></ruby>の ページに、<ruby>小<rt>ちい</rt></ruby>さな <ruby>字<rt>じ</rt></ruby>で こう <ruby>書<rt>か</rt></ruby>いて ありました。", de:"Auf der letzten Seite stand in winziger Schrift geschrieben:" },
          { jp:"「<ruby>私<rt>わたし</rt></ruby>の ことを <ruby>忘<rt>わす</rt></ruby>れないで。あいこ。」", de:"„Vergiss mich nicht. Aiko.“" },
          { jp:"ユキは <ruby>顔<rt>かお</rt></ruby>を <ruby>上<rt>あ</rt></ruby>げて、<ruby>力<rt>ちから</rt></ruby>いっぱい <ruby>叫<rt>さけ</rt></ruby>びました。「あなたの <ruby>名前<rt>なまえ</rt></ruby>は、あいこでしょう?!」", de:"Yuki hob den Kopf und schrie aus Leibeskräften: „Du heißt Aiko, nicht wahr?!“" },
          { jp:"その <ruby>瞬間<rt>しゅんかん</rt></ruby>、<ruby>女<rt>おんな</rt></ruby>の <ruby>子<rt>こ</rt></ruby>の <ruby>体<rt>からだ</rt></ruby>が、やわらかい <ruby>光<rt>ひかり</rt></ruby>に つつまれました。", de:"In diesem Augenblick wurde der Körper des Mädchens in ein sanftes Licht gehüllt." },
          { jp:"「ありがとう……やっと、<ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>して もらえた。」", de:"„Danke … endlich hat sich jemand an mich erinnert.“" },
          { jp:"のっぺりした <ruby>顔<rt>かお</rt></ruby>に、ゆっくりと <ruby>笑顔<rt>えがお</rt></ruby>が <ruby>浮<rt>う</rt></ruby>かんで きました。", de:"Auf dem leeren Antlitz erschien langsam ein Lächeln." },
          { jp:"ユキは ほっと して、その <ruby>笑顔<rt>えがお</rt></ruby>を <ruby>見<rt>み</rt></ruby>つめました。", de:"Erleichtert blickte Yuki in dieses lächelnde Gesicht." },
          { jp:"でも、つぎの <ruby>瞬間<rt>しゅんかん</rt></ruby>、<ruby>体<rt>からだ</rt></ruby>が <ruby>動<rt>うご</rt></ruby>かなく なりました。", de:"Doch im nächsten Moment konnte sie sich nicht mehr bewegen." },
          { jp:"あいこの <ruby>笑顔<rt>えがお</rt></ruby>は、ユキの <ruby>顔<rt>かお</rt></ruby>と そっくり だったんです。", de:"Denn Aikos lächelndes Gesicht glich aufs Haar dem von Yuki." },
          { jp:"「やっと <ruby>外<rt>そと</rt></ruby>に <ruby>出<rt>で</rt></ruby>られる。<ruby>代<rt>か</rt></ruby>わって くれて、ありがとう。」", de:"„Endlich kann ich hinaus. Danke, dass du meinen Platz nimmst.“" },
          { jp:"<ruby>気<rt>き</rt></ruby>が つくと、ユキは <ruby>冷<rt>つめ</rt></ruby>たい <ruby>音楽室<rt>おんがくしつ</rt></ruby>に <ruby>一人<rt>ひとり</rt></ruby>で <ruby>立<rt>た</rt></ruby>って いました。", de:"Als sie zu sich kam, stand Yuki allein im kalten Musikraum." },
          { jp:"<ruby>鏡<rt>かがみ</rt></ruby>を <ruby>見<rt>み</rt></ruby>ると、そこには <ruby>顔<rt>かお</rt></ruby>の ない <ruby>自分<rt>じぶん</rt></ruby>が <ruby>映<rt>うつ</rt></ruby>って いました。", de:"Als sie in den Spiegel sah, starrte ihr dort ihr eigenes, gesichtsloses Ich entgegen." },
          { jp:"<ruby>壁<rt>かべ</rt></ruby>の <ruby>写真<rt>しゃしん</rt></ruby>の <ruby>中<rt>なか</rt></ruby>では、あいこが <ruby>笑<rt>わら</rt></ruby>いながら、<ruby>学校<rt>がっこう</rt></ruby>を <ruby>出<rt>で</rt></ruby>て <ruby>行<rt>い</rt></ruby>く ところでした。", de:"Auf dem Foto an der Wand verließ Aiko gerade lächelnd die Schule." },
          { jp:"それから <ruby>何年<rt>なんねん</rt></ruby>も たった、ある <ruby>寒<rt>さむ</rt></ruby>い <ruby>夜<rt>よる</rt></ruby>。", de:"Viele Jahre später, in einer kalten Nacht." },
          { jp:"<ruby>一人<rt>ひとり</rt></ruby>の <ruby>生徒<rt>せいと</rt></ruby>が、おそくまで <ruby>教室<rt>きょうしつ</rt></ruby>に <ruby>残<rt>のこ</rt></ruby>って いました。", de:"Blieb ein Schüler bis spät allein im Klassenzimmer." },
          { jp:"どこか とおくから、ピアノの <ruby>音<rt>おと</rt></ruby>が <ruby>聞<rt>き</rt></ruby>こえて きました……。", de:"Und von irgendwo weit her kam ein Klavierklang … " },
          { jp:"（<ruby>終<rt>お</rt></ruby>わり）", de:"(Ende)" }
        ],
        vokabeln: [
          { w:"じっと", de:"reglos, starr" },
          { w:"指先 (ゆびさき)", de:"Fingerspitze" },
          { w:"息 (いき)", de:"Atem" },
          { w:"ふり向く (ふりむく)", de:"sich umdrehen" },
          { w:"悲鳴をあげる (ひめいをあげる)", de:"aufschreien" },
          { w:"怖がる (こわがる)", de:"sich fürchten" },
          { w:"思い出す (おもいだす)", de:"sich erinnern an" },
          { w:"代わりになる (かわりになる)", de:"jds. Platz einnehmen" },
          { w:"首を横に振る (くびをよこにふる)", de:"den Kopf schütteln" },
          { w:"名簿 (めいぼ)", de:"Namensliste, Register" },
          { w:"塗りつぶす (ぬりつぶす)", de:"übermalen, schwärzen" },
          { w:"引き出し (ひきだし)", de:"Schublade" },
          { w:"日記 (にっき)", de:"Tagebuch" },
          { w:"そっくり", de:"zum Verwechseln ähnlich" },
          { w:"鏡 (かがみ)", de:"Spiegel" },
          { w:"瞬間 (しゅんかん)", de:"Augenblick" }
        ],
        fragen: [
          { q:"Welche zwei Möglichkeiten nennt das Mädchen?", a:"Erinnert sich jemand an ihren Namen, kann sie vergehen; erinnert sich niemand, nimmt der andere ihren Platz ein (代わりになる)." },
          { q:"Wie findet Yuki den Namen heraus?", a:"In einem alten, versteckten Tagebuch steht „あいこ“ (日記に「あいこ」と書いてありました)." },
          { q:"Was ist der schreckliche Twist?", a:"Aiko bekommt Yukis Gesicht und entkommt nach draußen — Yuki wird selbst die neue gesichtslose Gestalt im Spiegel." },
          { q:"Woran sieht man, dass der Fluch weitergeht?", a:"Jahre später bleibt wieder ein Schüler bis spät — und hört Klaviermusik (Endlosschleife)." }
        ],
        grammatik: "Konditional たら/ば · 受身 (塗りつぶされる/つつまれる) · はずがない · てある (かくしてある/書いてある) · てしまう · なくなる · ところ (出て行くところ) · ながら · そっくり · Potential (消えられる/出られる) · てもらえる · のように"
      }
    ]
  },
  {
    titel: "🐉 Fantasy-Horror: <ruby>星<rt>ほし</rt></ruby>の かけら",
    stufe: "Story · gemischt · düster",
    beschreibung: "Dunkle Abenteuergeschichte in Kapiteln: ein Junge, ein kleiner Drache und sieben Sternensplitter — in einer schönen, aber sterbenden Welt, in der etwas das Licht frisst. Wir bauen sie Kapitel für Kapitel aus.",
    texte: [
      {
        titel: "<ruby>第一章<rt>だいいっしょう</rt></ruby>「<ruby>光<rt>ひか</rt></ruby>る <ruby>石<rt>いし</rt></ruby>」",
        de: "Kapitel 1: Der leuchtende Stein",
        stufe: "gemischt",
        saetze: [
          { jp:"レンは <ruby>静<rt>しず</rt></ruby>かな <ruby>男<rt>おとこ</rt></ruby>の <ruby>子<rt>こ</rt></ruby>でした。", de:"Ren war ein stiller Junge." },
          { jp:"<ruby>毎日<rt>まいにち</rt></ruby>、<ruby>学校<rt>がっこう</rt></ruby>の <ruby>帰<rt>かえ</rt></ruby>りに、<ruby>森<rt>もり</rt></ruby>の <ruby>道<rt>みち</rt></ruby>を <ruby>通<rt>とお</rt></ruby>って いました。", de:"Jeden Tag ging er auf dem Heimweg durch den Wald." },
          { jp:"ある <ruby>日<rt>ひ</rt></ruby>の <ruby>夕方<rt>ゆうがた</rt></ruby>、<ruby>木<rt>き</rt></ruby>の <ruby>下<rt>した</rt></ruby>で <ruby>青白<rt>あおじろ</rt></ruby>く <ruby>光<rt>ひか</rt></ruby>る <ruby>石<rt>いし</rt></ruby>を <ruby>見<rt>み</rt></ruby>つけました。", de:"Eines Abends fand er unter einem Baum einen fahl-blau leuchtenden Stein." },
          { jp:"その <ruby>石<rt>いし</rt></ruby>は、<ruby>手<rt>て</rt></ruby>の <ruby>中<rt>なか</rt></ruby>で <ruby>氷<rt>こおり</rt></ruby>のように <ruby>冷<rt>つめ</rt></ruby>たかったです。", de:"Der Stein war eiskalt in seiner Hand, wie Eis." },
          { jp:"レンが <ruby>石<rt>いし</rt></ruby>を <ruby>拾<rt>ひろ</rt></ruby>った とき、とつぜん <ruby>強<rt>つよ</rt></ruby>い <ruby>光<rt>ひかり</rt></ruby>が あふれ、<ruby>目<rt>め</rt></ruby>の <ruby>前<rt>まえ</rt></ruby>が <ruby>真<rt>ま</rt></ruby>っ<ruby>白<rt>しろ</rt></ruby>に なりました。", de:"Als Ren den Stein aufhob, flutete plötzlich grelles Licht hervor, und vor seinen Augen wurde alles weiß." },
          { jp:"<ruby>気<rt>き</rt></ruby>が つくと、レンは <ruby>知<rt>し</rt></ruby>らない <ruby>場所<rt>ばしょ</rt></ruby>に <ruby>立<rt>た</rt></ruby>って いました。", de:"Als er zu sich kam, stand Ren an einem unbekannten Ort." },
          { jp:"<ruby>空<rt>そら</rt></ruby>には <ruby>月<rt>つき</rt></ruby>が <ruby>二<rt>ふた</rt></ruby>つ あって、<ruby>草<rt>くさ</rt></ruby>は <ruby>銀色<rt>ぎんいろ</rt></ruby>に <ruby>光<rt>ひか</rt></ruby>って いました。", de:"Am Himmel standen zwei Monde, und das Gras leuchtete silbern." },
          { jp:"でも、<ruby>木<rt>き</rt></ruby>は <ruby>黒<rt>くろ</rt></ruby>く <ruby>枯<rt>か</rt></ruby>れて いて、<ruby>鳥<rt>とり</rt></ruby>の <ruby>声<rt>こえ</rt></ruby>も しませんでした。", de:"Doch die Bäume waren schwarz und verdorrt, und nicht einmal ein Vogelruf war zu hören." },
          { jp:"<ruby>森<rt>もり</rt></ruby>は <ruby>死<rt>し</rt></ruby>んだように <ruby>静<rt>しず</rt></ruby>かでした。", de:"Der Wald war still wie der Tod." },
          { jp:"「ここは……どこ?」と レンは <ruby>小<rt>ちい</rt></ruby>さな <ruby>声<rt>こえ</rt></ruby>で <ruby>言<rt>い</rt></ruby>いました。", de:"„Wo … bin ich hier?“, flüsterte Ren." },
          { jp:"<ruby>遠<rt>とお</rt></ruby>くで、<ruby>聞<rt>き</rt></ruby>いた ことの ない <ruby>叫<rt>さけ</rt></ruby>び<ruby>声<rt>ごえ</rt></ruby>が <ruby>聞<rt>き</rt></ruby>こえました。", de:"In der Ferne ertönte ein Schrei, wie er ihn nie zuvor gehört hatte." },
          { jp:"レンの <ruby>背中<rt>せなか</rt></ruby>が、ぞっと しました。", de:"Ein eiskalter Schauer lief Ren über den Rücken." },
          { jp:"その とき、<ruby>足<rt>あし</rt></ruby>もとで <ruby>小<rt>ちい</rt></ruby>さな <ruby>声<rt>こえ</rt></ruby>が <ruby>聞<rt>き</rt></ruby>こえました。", de:"In dem Moment hörte er zu seinen Füßen eine kleine Stimme." },
          { jp:"<ruby>見<rt>み</rt></ruby>ると、てのひらぐらいの <ruby>小<rt>ちい</rt></ruby>さな <ruby>竜<rt>りゅう</rt></ruby>が、ふるえながら レンを <ruby>見上<rt>みあ</rt></ruby>げて いました。", de:"Als er hinsah, blickte ein handtellergroßer kleiner Drache zitternd zu ihm auf." },
          { jp:"「<ruby>声<rt>こえ</rt></ruby>を <ruby>出<rt>だ</rt></ruby>さないで……あいつらに <ruby>気<rt>き</rt></ruby>づかれて しまう。」と <ruby>竜<rt>りゅう</rt></ruby>は ささやきました。", de:"„Mach keinen Laut … sonst werden sie auf uns aufmerksam“, flüsterte der Drache." },
          { jp:"「<ruby>僕<rt>ぼく</rt></ruby>の <ruby>名前<rt>なまえ</rt></ruby>は ソラ。きみは <ruby>光<rt>ひかり</rt></ruby>の <ruby>石<rt>いし</rt></ruby>に <ruby>選<rt>えら</rt></ruby>ばれたんだ。」", de:"„Ich heiße Sora. Du wurdest vom Stein des Lichts auserwählt.“" },
          { jp:"「この <ruby>世界<rt>せかい</rt></ruby>の <ruby>光<rt>ひかり</rt></ruby>は、<ruby>闇<rt>やみ</rt></ruby>に <ruby>食<rt>た</rt></ruby>べられて いるんだ。」", de:"„Das Licht dieser Welt wird von der Finsternis gefressen.“" },
          { jp:"「<ruby>闇<rt>やみ</rt></ruby>から <ruby>生<rt>う</rt></ruby>まれた <ruby>影<rt>かげ</rt></ruby>たちが、<ruby>石<rt>いし</rt></ruby>を <ruby>持<rt>も</rt></ruby>つ <ruby>者<rt>もの</rt></ruby>を <ruby>探<rt>さが</rt></ruby>して いる。」", de:"„Schatten, aus der Finsternis geboren, jagen den, der den Stein trägt.“" },
          { jp:"「<ruby>七<rt>なな</rt></ruby>つの <ruby>星<rt>ほし</rt></ruby>の かけらを <ruby>集<rt>あつ</rt></ruby>めなければ、この <ruby>世界<rt>せかい</rt></ruby>は <ruby>闇<rt>やみ</rt></ruby>に <ruby>飲<rt>の</rt></ruby>み<ruby>込<rt>こ</rt></ruby>まれて しまう。」", de:"„Wenn wir nicht die sieben Sternensplitter sammeln, wird diese Welt von der Finsternis verschlungen.“" },
          { jp:"「お<ruby>願<rt>ねが</rt></ruby>い。<ruby>僕<rt>ぼく</rt></ruby>と <ruby>一緒<rt>いっしょ</rt></ruby>に <ruby>来<rt>き</rt></ruby>て くれないか。」", de:"„Bitte. Würdest du mit mir kommen?“" },
          { jp:"レンは <ruby>怖<rt>こわ</rt></ruby>かったですが、<ruby>石<rt>いし</rt></ruby>を ぎゅっと にぎりしめて、うなずきました。", de:"Ren hatte Angst, doch er umklammerte den Stein fest und nickte." },
          { jp:"その とき、<ruby>森<rt>もり</rt></ruby>の <ruby>奥<rt>おく</rt></ruby>の <ruby>暗<rt>くら</rt></ruby>やみで、<ruby>赤<rt>あか</rt></ruby>い <ruby>目<rt>め</rt></ruby>が いくつも、ゆっくりと <ruby>開<rt>ひら</rt></ruby>きました。", de:"In diesem Augenblick öffneten sich tief im Dunkel des Waldes langsam viele rote Augen." },
          { jp:"（<ruby>第二章<rt>だいにしょう</rt></ruby>に つづく）", de:"(Fortsetzung in Kapitel 2)" }
        ],
        vokabeln: [
          { w:"森 (もり)", de:"Wald" },
          { w:"拾う (ひろう)", de:"aufheben" },
          { w:"枯れる (かれる)", de:"verdorren, welken" },
          { w:"死んだように (しんだように)", de:"wie tot, totenstill" },
          { w:"ぞっとする", de:"erschaudern, ein Schauer läuft über den Rücken" },
          { w:"竜 (りゅう)", de:"Drache" },
          { w:"気づかれる (きづかれる)", de:"bemerkt werden" },
          { w:"選ばれる (えらばれる)", de:"auserwählt werden" },
          { w:"闇 (やみ)", de:"Finsternis, Dunkelheit" },
          { w:"影 (かげ)", de:"Schatten" },
          { w:"飲み込む (のみこむ)", de:"verschlingen, verschlucken" },
          { w:"にぎりしめる", de:"fest umklammern" }
        ],
        fragen: [
          { q:"Was ist an der neuen Welt unheimlich?", a:"Sie ist schön (zwei Monde, silbernes Gras), aber die Bäume sind schwarz und verdorrt, es ist totenstill, und in der Ferne schreit etwas." },
          { q:"Was bedroht laut Sora die Welt?", a:"Die Finsternis (闇) frisst das Licht; aus ihr geborene Schatten jagen den Stein-Träger." },
          { q:"Womit endet das Kapitel?", a:"Tief im dunklen Wald öffnen sich viele rote Augen (赤い目がいくつも開きました)." }
        ],
        grammatik: "のように (氷のように/死んだように) · とき · ています · 受身 (選ばれた/食べられて/気づかれて/飲み込まれて) · relative ことのない/石を持つ者 · なければ + てしまう · ながら · ないで · てくれないか · んだ"
      },
      {
        titel: "<ruby>第二章<rt>だいにしょう</rt></ruby>「<ruby>呼<rt>よ</rt></ruby>ぶ <ruby>声<rt>こえ</rt></ruby>」",
        de: "Kapitel 2: Die rufende Stimme",
        stufe: "gemischt · lang",
        saetze: [
          { jp:"<ruby>赤<rt>あか</rt></ruby>い <ruby>目<rt>め</rt></ruby>が、ゆっくりと <ruby>近<rt>ちか</rt></ruby>づいて きました。", de:"Die roten Augen kamen langsam näher." },
          { jp:"<ruby>木<rt>き</rt></ruby>の <ruby>間<rt>あいだ</rt></ruby>から、<ruby>黒<rt>くろ</rt></ruby>い <ruby>影<rt>かげ</rt></ruby>が <ruby>何<rt>なん</rt></ruby><ruby>体<rt>たい</rt></ruby>も <ruby>現<rt>あらわ</rt></ruby>れました。", de:"Zwischen den Bäumen erschienen unzählige schwarze Schatten." },
          { jp:"その <ruby>影<rt>かげ</rt></ruby>たちには <ruby>顔<rt>かお</rt></ruby>が なく、<ruby>手<rt>て</rt></ruby>と <ruby>足<rt>あし</rt></ruby>が <ruby>細<rt>ほそ</rt></ruby>く <ruby>長<rt>なが</rt></ruby>かったです。", de:"Die Schatten hatten keine Gesichter, ihre Arme und Beine waren dünn und unnatürlich lang." },
          { jp:"「<ruby>逃<rt>に</rt></ruby>げろ!」と ソラが <ruby>叫<rt>さけ</rt></ruby>びました。", de:"„Lauf!“, schrie Sora." },
          { jp:"レンは <ruby>夢中<rt>むちゅう</rt></ruby>で <ruby>森<rt>もり</rt></ruby>の <ruby>中<rt>なか</rt></ruby>を <ruby>走<rt>はし</rt></ruby>りました。", de:"Ren rannte wie besessen durch den Wald." },
          { jp:"<ruby>後<rt>うし</rt></ruby>ろから、かさかさという <ruby>音<rt>おと</rt></ruby>が <ruby>追<rt>お</rt></ruby>いかけて きました。", de:"Von hinten verfolgte ihn ein raschelndes Geräusch." },
          { jp:"<ruby>枯<rt>か</rt></ruby>れた <ruby>枝<rt>えだ</rt></ruby>が <ruby>顔<rt>かお</rt></ruby>を <ruby>切<rt>き</rt></ruby>っても、レンは <ruby>止<rt>と</rt></ruby>まりませんでした。", de:"Auch als dürre Äste sein Gesicht aufkratzten, hielt Ren nicht an." },
          { jp:"<ruby>心臓<rt>しんぞう</rt></ruby>の <ruby>音<rt>おと</rt></ruby>が、<ruby>耳<rt>みみ</rt></ruby>の <ruby>中<rt>なか</rt></ruby>で うるさいほど <ruby>大<rt>おお</rt></ruby>きく <ruby>聞<rt>き</rt></ruby>こえました。", de:"Sein Herzschlag dröhnte so laut in seinen Ohren, dass es wehtat." },
          { jp:"とつぜん、<ruby>目<rt>め</rt></ruby>の <ruby>前<rt>まえ</rt></ruby>に <ruby>大<rt>おお</rt></ruby>きな <ruby>岩<rt>いわ</rt></ruby>が <ruby>現<rt>あらわ</rt></ruby>れました。", de:"Plötzlich tauchte vor ihm ein großer Fels auf." },
          { jp:"レンは その <ruby>後<rt>うし</rt></ruby>ろに かくれて、<ruby>息<rt>いき</rt></ruby>を <ruby>止<rt>と</rt></ruby>めました。", de:"Ren versteckte sich dahinter und hielt den Atem an." },
          { jp:"「<ruby>声<rt>こえ</rt></ruby>を <ruby>出<rt>だ</rt></ruby>すな。<ruby>動<rt>うご</rt></ruby>くな。」と ソラが <ruby>小<rt>ちい</rt></ruby>さく <ruby>言<rt>い</rt></ruby>いました。", de:"„Keinen Laut. Keine Bewegung.“, flüsterte Sora." },
          { jp:"<ruby>影<rt>かげ</rt></ruby>たちは、<ruby>岩<rt>いわ</rt></ruby>の すぐ <ruby>横<rt>よこ</rt></ruby>を、ゆっくりと <ruby>通<rt>とお</rt></ruby>り <ruby>過<rt>す</rt></ruby>ぎて いきました。", de:"Die Schatten glitten langsam direkt am Felsen vorbei." },
          { jp:"<ruby>冷<rt>つめ</rt></ruby>たい <ruby>風<rt>かぜ</rt></ruby>が、レンの <ruby>首<rt>くび</rt></ruby>を なでました。", de:"Ein kalter Hauch strich über Rens Nacken." },
          { jp:"その とき、どこかで <ruby>聞<rt>き</rt></ruby>き <ruby>覚<rt>おぼ</rt></ruby>えの ある <ruby>声<rt>こえ</rt></ruby>が しました。", de:"In diesem Moment ertönte irgendwo eine vertraute Stimme." },
          { jp:"「レン……レン、どこに いるの?」", de:"„Ren … Ren, wo bist du?“" },
          { jp:"それは、レンの <ruby>母<rt>はは</rt></ruby>の <ruby>声<rt>こえ</rt></ruby>でした。", de:"Es war die Stimme von Rens Mutter." },
          { jp:"レンは <ruby>思<rt>おも</rt></ruby>わず <ruby>立<rt>た</rt></ruby>ち <ruby>上<rt>あ</rt></ruby>がろうと しました。", de:"Unwillkürlich wollte Ren aufstehen." },
          { jp:"でも、ソラが <ruby>必死<rt>ひっし</rt></ruby>に <ruby>止<rt>と</rt></ruby>めました。「だめだ!あれは <ruby>母<rt>かあ</rt></ruby>さんじゃ ない!」", de:"Doch Sora hielt ihn verzweifelt zurück: „Nein! Das ist nicht deine Mutter!“" },
          { jp:"「<ruby>影<rt>かげ</rt></ruby>は、<ruby>人<rt>ひと</rt></ruby>の <ruby>声<rt>こえ</rt></ruby>を まねる ことが できるんだ。」", de:"„Die Schatten können menschliche Stimmen nachahmen.“" },
          { jp:"<ruby>母<rt>はは</rt></ruby>の <ruby>声<rt>こえ</rt></ruby>は、だんだん <ruby>低<rt>ひく</rt></ruby>い <ruby>笑<rt>わら</rt></ruby>い <ruby>声<rt>ごえ</rt></ruby>に <ruby>変<rt>か</rt></ruby>わって いきました。", de:"Die Stimme der Mutter verwandelte sich allmählich in ein tiefes Lachen." },
          { jp:"その <ruby>笑<rt>わら</rt></ruby>い <ruby>声<rt>ごえ</rt></ruby>は、とても <ruby>人間<rt>にんげん</rt></ruby>の ものとは <ruby>思<rt>おも</rt></ruby>えませんでした。", de:"Dieses Lachen konnte unmöglich von einem Menschen stammen." },
          { jp:"レンの <ruby>体<rt>からだ</rt></ruby>は、<ruby>恐怖<rt>きょうふ</rt></ruby>で <ruby>動<rt>うご</rt></ruby>けなく なりました。", de:"Vor Schreck konnte sich Ren nicht mehr bewegen." },
          { jp:"ソラは レンの <ruby>手<rt>て</rt></ruby>を そっと かんで、<ruby>正気<rt>しょうき</rt></ruby>に <ruby>戻<rt>もど</rt></ruby>しました。", de:"Sora biss Ren sacht in die Hand und holte ihn zur Besinnung zurück." },
          { jp:"「<ruby>立<rt>た</rt></ruby>って!<ruby>川<rt>かわ</rt></ruby>の <ruby>音<rt>おと</rt></ruby>が <ruby>聞<rt>き</rt></ruby>こえる。<ruby>水<rt>みず</rt></ruby>の <ruby>近<rt>ちか</rt></ruby>くなら、<ruby>影<rt>かげ</rt></ruby>は <ruby>来<rt>こ</rt></ruby>られない。」", de:"„Steh auf! Ich höre einen Fluss. In der Nähe von Wasser können die Schatten nicht hin.“" },
          { jp:"<ruby>二人<rt>ふたり</rt></ruby>は <ruby>暗<rt>くら</rt></ruby>い <ruby>森<rt>もり</rt></ruby>を、<ruby>川<rt>かわ</rt></ruby>の <ruby>音<rt>おと</rt></ruby>を <ruby>頼<rt>たよ</rt></ruby>りに <ruby>進<rt>すす</rt></ruby>みました。", de:"Die beiden tasteten sich durch den dunklen Wald, dem Klang des Flusses folgend." },
          { jp:"やっと <ruby>木<rt>き</rt></ruby>の <ruby>間<rt>あいだ</rt></ruby>から、<ruby>銀色<rt>ぎんいろ</rt></ruby>に <ruby>光<rt>ひか</rt></ruby>る <ruby>川<rt>かわ</rt></ruby>が <ruby>見<rt>み</rt></ruby>えました。", de:"Endlich erblickten sie zwischen den Bäumen einen silbern glänzenden Fluss." },
          { jp:"<ruby>川<rt>かわ</rt></ruby>の <ruby>真<rt>ま</rt></ruby>ん<ruby>中<rt>なか</rt></ruby>に <ruby>小<rt>ちい</rt></ruby>さな <ruby>島<rt>しま</rt></ruby>が あって、そこに <ruby>古<rt>ふる</rt></ruby>い <ruby>神社<rt>じんじゃ</rt></ruby>が <ruby>立<rt>た</rt></ruby>って いました。", de:"In der Mitte des Flusses lag eine kleine Insel, und darauf stand ein alter Schrein." },
          { jp:"「あの <ruby>神社<rt>じんじゃ</rt></ruby>の <ruby>中<rt>なか</rt></ruby>に、<ruby>最初<rt>さいしょ</rt></ruby>の <ruby>星<rt>ほし</rt></ruby>の かけらが ある はずだ。」と ソラが <ruby>言<rt>い</rt></ruby>いました。", de:"„In diesem Schrein muss der erste Sternensplitter sein.“, sagte Sora." },
          { jp:"<ruby>二人<rt>ふたり</rt></ruby>は <ruby>冷<rt>つめ</rt></ruby>たい <ruby>川<rt>かわ</rt></ruby>を <ruby>渡<rt>わた</rt></ruby>って、<ruby>島<rt>しま</rt></ruby>に <ruby>着<rt>つ</rt></ruby>きました。", de:"Sie durchquerten den eiskalten Fluss und erreichten die Insel." },
          { jp:"<ruby>神社<rt>じんじゃ</rt></ruby>の <ruby>中<rt>なか</rt></ruby>は、<ruby>外<rt>そと</rt></ruby>より もっと <ruby>暗<rt>くら</rt></ruby>く、<ruby>空気<rt>くうき</rt></ruby>が <ruby>重<rt>おも</rt></ruby>かったです。", de:"Im Schrein war es noch dunkler als draußen, und die Luft lag schwer." },
          { jp:"<ruby>奥<rt>おく</rt></ruby>に <ruby>進<rt>すす</rt></ruby>むと、<ruby>祭壇<rt>さいだん</rt></ruby>の <ruby>上<rt>うえ</rt></ruby>で、<ruby>小<rt>ちい</rt></ruby>さな <ruby>光<rt>ひかり</rt></ruby>が <ruby>静<rt>しず</rt></ruby>かに <ruby>光<rt>ひか</rt></ruby>って いました。", de:"Als sie tiefer hineingingen, glomm auf einem Altar still ein kleines Licht." },
          { jp:"それが、<ruby>一<rt>ひと</rt></ruby>つ<ruby>目<rt>め</rt></ruby>の <ruby>星<rt>ほし</rt></ruby>の かけらでした。", de:"Das war der erste Sternensplitter." },
          { jp:"レンが <ruby>手<rt>て</rt></ruby>を <ruby>伸<rt>の</rt></ruby>ばそうと した、その とき——", de:"Genau als Ren die Hand danach ausstrecken wollte —" },
          { jp:"<ruby>祭壇<rt>さいだん</rt></ruby>の <ruby>後<rt>うし</rt></ruby>ろの <ruby>暗<rt>くら</rt></ruby>やみが、ゆっくりと <ruby>動<rt>うご</rt></ruby>きました。", de:"— bewegte sich die Dunkelheit hinter dem Altar." },
          { jp:"それは、ほかの <ruby>影<rt>かげ</rt></ruby>より ずっと <ruby>大<rt>おお</rt></ruby>きく、<ruby>二<rt>ふた</rt></ruby>つの <ruby>赤<rt>あか</rt></ruby>い <ruby>目<rt>め</rt></ruby>が <ruby>燃<rt>も</rt></ruby>えて いました。", de:"Es war weit größer als die anderen Schatten, und zwei rote Augen brannten." },
          { jp:"「よく <ruby>来<rt>き</rt></ruby>たな、<ruby>光<rt>ひかり</rt></ruby>の <ruby>子<rt>こ</rt></ruby>。ずっと <ruby>待<rt>ま</rt></ruby>って いたぞ。」", de:"„Schön, dass du kommst, Kind des Lichts. Ich habe lange auf dich gewartet.“" },
          { jp:"その <ruby>低<rt>ひく</rt></ruby>い <ruby>声<rt>こえ</rt></ruby>は、<ruby>神社<rt>じんじゃ</rt></ruby><ruby>全体<rt>ぜんたい</rt></ruby>を ふるわせました。", de:"Diese tiefe Stimme ließ den ganzen Schrein erbeben." },
          { jp:"ソラが <ruby>小<rt>ちい</rt></ruby>さな <ruby>声<rt>こえ</rt></ruby>で つぶやきました。「まさか……<ruby>影<rt>かげ</rt></ruby>の <ruby>王<rt>おう</rt></ruby>……。」", de:"Sora flüsterte tonlos: „Das darf nicht sein … der König der Schatten …“" },
          { jp:"<ruby>影<rt>かげ</rt></ruby>の <ruby>王<rt>おう</rt></ruby>は <ruby>大<rt>おお</rt></ruby>きな <ruby>手<rt>て</rt></ruby>を <ruby>伸<rt>の</rt></ruby>ばして、レンの <ruby>方<rt>ほう</rt></ruby>へ <ruby>近<rt>ちか</rt></ruby>づいて きました。", de:"Der Schattenkönig streckte eine gewaltige Hand aus und kam auf Ren zu." },
          { jp:"「その <ruby>石<rt>いし</rt></ruby>を、<ruby>渡<rt>わた</rt></ruby>して もらおうか。」", de:"„Diesen Stein … wirst du mir wohl überlassen.“" },
          { jp:"その とき、レンの <ruby>手<rt>て</rt></ruby>の <ruby>中<rt>なか</rt></ruby>で、<ruby>光<rt>ひかり</rt></ruby>の <ruby>石<rt>いし</rt></ruby>が <ruby>急<rt>きゅう</rt></ruby>に <ruby>熱<rt>あつ</rt></ruby>く なり、まぶしく <ruby>光<rt>ひか</rt></ruby>り <ruby>始<rt>はじ</rt></ruby>めました。", de:"In diesem Moment wurde der Stein des Lichts in Rens Hand jäh heiß und begann blendend zu leuchten." },
          { jp:"（<ruby>第三章<rt>だいさんしょう</rt></ruby>に つづく）", de:"(Fortsetzung in Kapitel 3)" }
        ],
        vokabeln: [
          { w:"現れる (あらわれる)", de:"erscheinen, auftauchen" },
          { w:"夢中で (むちゅうで)", de:"wie besessen, atemlos" },
          { w:"追いかける (おいかける)", de:"verfolgen, nachjagen" },
          { w:"息を止める (いきをとめる)", de:"den Atem anhalten" },
          { w:"通り過ぎる (とおりすぎる)", de:"vorbeiziehen" },
          { w:"聞き覚えのある (ききおぼえのある)", de:"vertraut klingend (schon einmal gehört)" },
          { w:"まねる", de:"nachahmen, imitieren" },
          { w:"恐怖 (きょうふ)", de:"Schrecken, Furcht" },
          { w:"正気 (しょうき)", de:"klarer Verstand, Besinnung" },
          { w:"頼りに (たよりに)", de:"sich verlassend auf, sich orientierend an" },
          { w:"神社 (じんじゃ)", de:"(Shinto-)Schrein" },
          { w:"祭壇 (さいだん)", de:"Altar" },
          { w:"燃える (もえる)", de:"brennen, glühen" },
          { w:"影の王 (かげのおう)", de:"König der Schatten" }
        ],
        fragen: [
          { q:"Mit welchem fiesen Trick locken die Schatten Ren?", a:"Sie ahmen vertraute Stimmen nach — die seiner Mutter (影は人の声をまねることができる)." },
          { q:"Warum fliehen Ren und Sora zum Fluss?", a:"In der Nähe von Wasser können die Schatten nicht hin (水の近くなら、影は来られない)." },
          { q:"Wer wartet im Schrein und was will er?", a:"Der König der Schatten (影の王); er will Ren den Stein des Lichts abnehmen." }
        ],
        grammatik: "〜ても · 〜ほど · Verbot 〜な (出すな/動くな) · ようとする · ことができる · ていく · とは思えない · なくなる · なら + Potential-Verneinung (来られない) · はずだ · より (Vergleich) · 〜と · 使役 (ふるわせる) · てもらう · 始める"
      },
      {
        titel: "<ruby>第三章<rt>だいさんしょう</rt></ruby>「<ruby>影<rt>かげ</rt></ruby>の <ruby>王<rt>おう</rt></ruby>の <ruby>言葉<rt>ことば</rt></ruby>」",
        de: "Kapitel 3: Die Worte des Schattenkönigs",
        stufe: "gemischt · lang",
        saetze: [
          { jp:"<ruby>光<rt>ひかり</rt></ruby>の <ruby>石<rt>いし</rt></ruby>は、<ruby>太陽<rt>たいよう</rt></ruby>のように まぶしく <ruby>燃<rt>も</rt></ruby>え<ruby>上<rt>あ</rt></ruby>がりました。", de:"Der Stein des Lichts loderte auf, blendend wie die Sonne." },
          { jp:"<ruby>影<rt>かげ</rt></ruby>の <ruby>王<rt>おう</rt></ruby>は <ruby>顔<rt>かお</rt></ruby>を おおって、<ruby>苦<rt>くる</rt></ruby>しそうに うめきました。", de:"Der Schattenkönig bedeckte sein Gesicht und stöhnte gequält auf." },
          { jp:"「うっ……まぶしい!その <ruby>光<rt>ひかり</rt></ruby>を <ruby>消<rt>け</rt></ruby>せ!」", de:"„Argh … es blendet! Lösch dieses Licht aus!“" },
          { jp:"レンは その すきに、<ruby>祭壇<rt>さいだん</rt></ruby>の <ruby>上<rt>うえ</rt></ruby>の <ruby>星<rt>ほし</rt></ruby>の かけらを つかみました。", de:"Diesen Moment nutzte Ren und griff den Sternensplitter auf dem Altar." },
          { jp:"かけらに ふれた しゅんかん、<ruby>温<rt>あたた</rt></ruby>かい <ruby>力<rt>ちから</rt></ruby>が <ruby>体<rt>からだ</rt></ruby>じゅうに <ruby>流<rt>なが</rt></ruby>れ<ruby>込<rt>こ</rt></ruby>みました。", de:"In dem Augenblick, als er den Splitter berührte, strömte eine warme Kraft durch seinen ganzen Körper." },
          { jp:"「すごい……<ruby>体<rt>からだ</rt></ruby>が <ruby>軽<rt>かる</rt></ruby>く なって いく。」と レンは つぶやきました。", de:"„Unglaublich … mein Körper wird immer leichter“, murmelte Ren." },
          { jp:"でも、よろこんで いる ひまは ありませんでした。", de:"Doch zum Jubeln blieb keine Zeit." },
          { jp:"<ruby>影<rt>かげ</rt></ruby>の <ruby>王<rt>おう</rt></ruby>が、ふたたび <ruby>大<rt>おお</rt></ruby>きな <ruby>手<rt>て</rt></ruby>を <ruby>伸<rt>の</rt></ruby>ばして きたのです。", de:"Denn der Schattenkönig streckte erneut seine gewaltige Hand aus." },
          { jp:"「<ruby>光<rt>ひかり</rt></ruby>の <ruby>子<rt>こ</rt></ruby>よ。お<ruby>前<rt>まえ</rt></ruby>は まだ、<ruby>何<rt>なに</rt></ruby>も わかって いない。」", de:"„Kind des Lichts. Du verstehst noch immer gar nichts.“" },
          { jp:"「お<ruby>前<rt>まえ</rt></ruby>の <ruby>世界<rt>せかい</rt></ruby>も、すぐに この <ruby>闇<rt>やみ</rt></ruby>に <ruby>飲<rt>の</rt></ruby>み<ruby>込<rt>こ</rt></ruby>まれるのだ。」", de:"„Auch deine Welt wird schon bald von dieser Finsternis verschlungen.“" },
          { jp:"レンは <ruby>思<rt>おも</rt></ruby>わず 「ぼくの <ruby>世界<rt>せかい</rt></ruby>?」と <ruby>聞<rt>き</rt></ruby>き<ruby>返<rt>かえ</rt></ruby>しました。", de:"Unwillkürlich fragte Ren zurück: „Meine Welt?“" },
          { jp:"「そうだ。お<ruby>前<rt>まえ</rt></ruby>が <ruby>石<rt>いし</rt></ruby>を <ruby>拾<rt>ひろ</rt></ruby>った あの <ruby>森<rt>もり</rt></ruby>も、もう <ruby>半分<rt>はんぶん</rt></ruby>は <ruby>影<rt>かげ</rt></ruby>の ものだ。」", de:"„So ist es. Auch jener Wald, in dem du den Stein aufgehoben hast — die Hälfte gehört bereits den Schatten.“" },
          { jp:"レンの <ruby>心臓<rt>しんぞう</rt></ruby>が、つめたく なりました。", de:"Rens Herz wurde eiskalt." },
          { jp:"お<ruby>母<rt>かあ</rt></ruby>さんの <ruby>顔<rt>かお</rt></ruby>が、<ruby>頭<rt>あたま</rt></ruby>の <ruby>中<rt>なか</rt></ruby>に うかびました。", de:"Das Gesicht seiner Mutter stieg in seinem Kopf auf." },
          { jp:"「うそだ……うそだと <ruby>言<rt>い</rt></ruby>って!」", de:"„Das ist gelogen … sag, dass es gelogen ist!“" },
          { jp:"「<ruby>信<rt>しん</rt></ruby>じるか どうかは、お<ruby>前<rt>まえ</rt></ruby>の <ruby>自由<rt>じゆう</rt></ruby>だ。」と <ruby>王<rt>おう</rt></ruby>は <ruby>低<rt>ひく</rt></ruby>く <ruby>笑<rt>わら</rt></ruby>いました。", de:"„Ob du es glaubst oder nicht, steht dir frei“, lachte der König tief." },
          { jp:"その とき、ソラが レンの <ruby>肩<rt>かた</rt></ruby>に とまって <ruby>叫<rt>さけ</rt></ruby>びました。", de:"In dem Moment ließ sich Sora auf Rens Schulter nieder und schrie." },
          { jp:"「だまされるな!あいつは <ruby>人<rt>ひと</rt></ruby>の <ruby>心<rt>こころ</rt></ruby>の すきを ねらって いるんだ!」", de:"„Lass dich nicht täuschen! Er hat es auf die Schwachstellen im Herzen der Menschen abgesehen!“" },
          { jp:"「かけらの <ruby>光<rt>ひかり</rt></ruby>を、まっすぐ <ruby>王<rt>おう</rt></ruby>に <ruby>向<rt>む</rt></ruby>けろ!」", de:"„Richte das Licht des Splitters direkt auf den König!“" },
          { jp:"レンは ふるえる <ruby>手<rt>て</rt></ruby>で、<ruby>星<rt>ほし</rt></ruby>の かけらを <ruby>王<rt>おう</rt></ruby>の ほうへ つき<ruby>出<rt>だ</rt></ruby>しました。", de:"Mit zitternder Hand streckte Ren den Sternensplitter dem König entgegen." },
          { jp:"かけらから、まっ<ruby>白<rt>しろ</rt></ruby>な <ruby>光<rt>ひかり</rt></ruby>の <ruby>矢<rt>や</rt></ruby>が とび<ruby>出<rt>だ</rt></ruby>しました。", de:"Aus dem Splitter schoss ein schneeweißer Pfeil aus Licht hervor." },
          { jp:"<ruby>光<rt>ひかり</rt></ruby>は <ruby>影<rt>かげ</rt></ruby>の <ruby>王<rt>おう</rt></ruby>の むねを つらぬき、<ruby>王<rt>おう</rt></ruby>は <ruby>大<rt>おお</rt></ruby>きく のけぞりました。", de:"Das Licht durchbohrte die Brust des Schattenkönigs, und er bäumte sich weit zurück." },
          { jp:"「ぐ……ば、ばかな……この <ruby>私<rt>わたし</rt></ruby>が……!」", de:"„Gah … u-unmöglich … dass ausgerechnet ich …!“" },
          { jp:"<ruby>王<rt>おう</rt></ruby>の <ruby>体<rt>からだ</rt></ruby>が、けむりのように、<ruby>少<rt>すこ</rt></ruby>しずつ くずれ <ruby>始<rt>はじ</rt></ruby>めました。", de:"Der Körper des Königs begann, wie Rauch, Stück für Stück zu zerfallen." },
          { jp:"でも、<ruby>消<rt>き</rt></ruby>えながら、<ruby>王<rt>おう</rt></ruby>は にやりと <ruby>笑<rt>わら</rt></ruby>ったのです。", de:"Doch während er verschwand, grinste der König." },
          { jp:"「おぼえて おけ……<ruby>七<rt>なな</rt></ruby>つ<ruby>目<rt>め</rt></ruby>の かけらは、お<ruby>前<rt>まえ</rt></ruby>の <ruby>中<rt>なか</rt></ruby>に ある。」", de:"„Merk dir eines … der siebte Splitter ist in dir.“" },
          { jp:"「そして、それを <ruby>取<rt>と</rt></ruby>り<ruby>出<rt>だ</rt></ruby>す とき、お<ruby>前<rt>まえ</rt></ruby>は——」", de:"„Und in dem Moment, in dem er herausgeholt wird, wirst du —“" },
          { jp:"<ruby>言葉<rt>ことば</rt></ruby>が <ruby>終<rt>お</rt></ruby>わる <ruby>前<rt>まえ</rt></ruby>に、<ruby>王<rt>おう</rt></ruby>の <ruby>体<rt>からだ</rt></ruby>は <ruby>闇<rt>やみ</rt></ruby>に とけて、<ruby>消<rt>き</rt></ruby>えました。", de:"Bevor die Worte endeten, löste sich der Körper des Königs in der Finsternis auf und verschwand." },
          { jp:"<ruby>神社<rt>じんじゃ</rt></ruby>の <ruby>中<rt>なか</rt></ruby>に、<ruby>急<rt>きゅう</rt></ruby>に しずけさが もどって きました。", de:"Im Schrein kehrte plötzlich Stille ein." },
          { jp:"レンは その<ruby>場<rt>ば</rt></ruby>に へたり<ruby>込<rt>こ</rt></ruby>んで、<ruby>長<rt>なが</rt></ruby>い <ruby>息<rt>いき</rt></ruby>を つきました。", de:"Ren sackte an Ort und Stelle zu Boden und stieß einen langen Atemzug aus." },
          { jp:"「<ruby>今<rt>いま</rt></ruby>のは……どういう <ruby>意味<rt>いみ</rt></ruby>?ぼくの <ruby>中<rt>なか</rt></ruby>に かけらが ある って……。」", de:"„Was eben … was sollte das heißen? Ein Splitter sei in mir …“" },
          { jp:"ソラは しばらく だまって いましたが、やがて <ruby>静<rt>しず</rt></ruby>かに <ruby>言<rt>い</rt></ruby>いました。", de:"Sora schwieg eine Weile, doch dann sagte er leise:" },
          { jp:"「……わからない。でも、<ruby>王<rt>おう</rt></ruby>が うそを ついて いるようには <ruby>見<rt>み</rt></ruby>えなかった。」", de:"„… Ich weiß es nicht. Aber es sah nicht so aus, als würde der König lügen.“" },
          { jp:"<ruby>二人<rt>ふたり</rt></ruby>の <ruby>間<rt>あいだ</rt></ruby>に、<ruby>重<rt>おも</rt></ruby>い ちんもくが <ruby>流<rt>なが</rt></ruby>れました。", de:"Zwischen den beiden breitete sich ein schweres Schweigen aus." },
          { jp:"その とき、<ruby>神社<rt>じんじゃ</rt></ruby>の <ruby>外<rt>そと</rt></ruby>で、<ruby>地面<rt>じめん</rt></ruby>が <ruby>大<rt>おお</rt></ruby>きく ゆれ <ruby>始<rt>はじ</rt></ruby>めました。", de:"In diesem Augenblick begann draußen vor dem Schrein der Boden heftig zu beben." },
          { jp:"「<ruby>王<rt>おう</rt></ruby>が <ruby>消<rt>き</rt></ruby>えても、<ruby>闇<rt>やみ</rt></ruby>は <ruby>消<rt>き</rt></ruby>えて いない。むしろ、おこって いる。」", de:"„Auch wenn der König verschwunden ist — die Finsternis ist es nicht. Im Gegenteil, sie ist erzürnt.“" },
          { jp:"<ruby>窓<rt>まど</rt></ruby>の そとを <ruby>見<rt>み</rt></ruby>ると、<ruby>空<rt>そら</rt></ruby>の <ruby>二<rt>ふた</rt></ruby>つの <ruby>月<rt>つき</rt></ruby>が、<ruby>血<rt>ち</rt></ruby>のように <ruby>赤<rt>あか</rt></ruby>く そまって いました。", de:"Als sie nach draußen blickten, hatten sich die zwei Monde am Himmel blutrot gefärbt." },
          { jp:"<ruby>遠<rt>とお</rt></ruby>くの <ruby>山<rt>やま</rt></ruby>の ほうから、<ruby>数<rt>かぞ</rt></ruby>えきれないほどの <ruby>赤<rt>あか</rt></ruby>い <ruby>目<rt>め</rt></ruby>が、こちらを <ruby>見<rt>み</rt></ruby>て いました。", de:"Aus der Richtung der fernen Berge starrten unzählige rote Augen zu ihnen herüber." },
          { jp:"「レン、<ruby>立<rt>た</rt></ruby>てる?<ruby>次<rt>つぎ</rt></ruby>の かけらの ある <ruby>場所<rt>ばしょ</rt></ruby>まで、<ruby>休<rt>やす</rt></ruby>んで いる ひまは ないよ。」", de:"„Ren, kannst du aufstehen? Bis zum Ort des nächsten Splitters bleibt keine Zeit zum Ausruhen.“" },
          { jp:"レンは <ruby>星<rt>ほし</rt></ruby>の かけらを むねに あてて、ゆっくりと <ruby>立<rt>た</rt></ruby>ち<ruby>上<rt>あ</rt></ruby>がりました。", de:"Ren drückte sich den Sternensplitter an die Brust und stand langsam auf." },
          { jp:"<ruby>自分<rt>じぶん</rt></ruby>の <ruby>中<rt>なか</rt></ruby>に <ruby>何<rt>なに</rt></ruby>が あるのか、まだ こわくて たまりませんでした。", de:"Was wohl in ihm steckte — davor fürchtete er sich noch immer bis zur Unerträglichkeit." },
          { jp:"それでも、レンは <ruby>前<rt>まえ</rt></ruby>を <ruby>見<rt>み</rt></ruby>て、はじめて <ruby>自分<rt>じぶん</rt></ruby>から <ruby>歩<rt>ある</rt></ruby>き<ruby>出<rt>だ</rt></ruby>しました。", de:"Trotzdem blickte Ren nach vorn und setzte sich zum ersten Mal aus eigenem Antrieb in Bewegung." },
          { jp:"<ruby>二人<rt>ふたり</rt></ruby>の <ruby>後<rt>うし</rt></ruby>ろで、<ruby>神社<rt>じんじゃ</rt></ruby>の <ruby>古<rt>ふる</rt></ruby>い <ruby>戸<rt>と</rt></ruby>が、ひとりでに ぎいっと <ruby>閉<rt>し</rt></ruby>まりました。", de:"Hinter den beiden schloss sich die alte Tür des Schreins wie von selbst knarrend." },
          { jp:"（<ruby>第四章<rt>だいよんしょう</rt></ruby>に つづく）", de:"(Fortsetzung in Kapitel 4)" }
        ],
        vokabeln: [
          { w:"燃え上がる (もえあがる)", de:"auflodern, aufflammen" },
          { w:"すき (隙)", de:"günstiger Moment; Lücke, Schwachstelle" },
          { w:"流れ込む (ながれこむ)", de:"hineinströmen, einfließen" },
          { w:"ふたたび", de:"erneut, wieder" },
          { w:"飲み込む (のみこむ)", de:"verschlingen, hinunterschlucken" },
          { w:"聞き返す (ききかえす)", de:"zurückfragen, nachfragen" },
          { w:"だます", de:"täuschen, betrügen" },
          { w:"ねらう", de:"zielen auf, es abgesehen haben auf" },
          { w:"つらぬく (貫く)", de:"durchbohren, durchdringen" },
          { w:"のけぞる", de:"sich (vor Schreck) zurückbäumen" },
          { w:"くずれる (崩れる)", de:"zerfallen, zusammenbrechen" },
          { w:"とける (溶ける)", de:"sich auflösen, schmelzen" },
          { w:"へたり込む (へたりこむ)", de:"kraftlos zu Boden sinken" },
          { w:"数えきれない (かぞえきれない)", de:"unzählbar, unzählig" },
          { w:"そまる (染まる)", de:"sich färben, gefärbt werden" },
          { w:"ひとりでに", de:"von selbst, wie von Geisterhand" }
        ],
        fragen: [
          { q:"Wie gelingt es Ren, den ersten Sternensplitter zu bekommen und den König zu treffen?", a:"Der Stein des Lichts flammt blendend auf; während der König geblendet zurückweicht, greift Ren den Splitter. Auf Soras Ruf hin richtet er dessen Licht auf den König, und ein Lichtpfeil durchbohrt dessen Brust." },
          { q:"Welche schreckliche Enthüllung macht der König, bevor er verschwindet?", a:"Dass der siebte Splitter in Ren selbst steckt (七つ目のかけらはお前の中にある) — und dass auch Rens eigene Welt bald von der Finsternis verschlungen wird." },
          { q:"Warum ist der Sieg über den König kein echtes Ende?", a:"Die Finsternis ist nicht verschwunden, sondern erzürnt: Der Boden bebt, die zwei Monde färben sich blutrot, und unzählige rote Augen beobachten die beiden aus den Bergen." }
        ],
        grammatik: "〜ように (Vergleich: 太陽のように・血のように) · 〜ていく/〜てくる · のだ/のです (Erklärung) · 受身 (飲み込まれる・だまされる) · 命令形＆禁止 (消せ・向けろ・だまされるな・おぼえておけ) · 〜ながら · 〜始める · 〜ても · 〜と (見ると) · 〜かどうか · 〜ほど (数えきれないほど) · 〜くてたまらない · 〜ように見える · 〜前に · Potential (立てる)"
      }
    ]
  }
];
