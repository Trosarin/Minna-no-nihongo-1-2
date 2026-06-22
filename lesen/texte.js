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
      }
    ]
  }
];
