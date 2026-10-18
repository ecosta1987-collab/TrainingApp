// pkx_translations.js — DIZIONARIO DELLE FRASI dei capitoli della fiera (Packaging Line Training).
// 09/10 (Giulia): per la fiera le traduzioni dei capitoli PKX stanno qui, non nell'editor; dopo la fiera
// si importano nell'editor. Chiave = la frase INGLESE esatta del copione (content-editor.html,
// pkxCapNSections): se si corregge l'inglese, la frase torna inglese nelle altre lingue finché non si
// aggiorna qui. Lo legge lesson-shell.html (l10nDoc) e awDictT in shared.js. IT rivisto da Giulia;
// ES / PT-BR / HI = bozza AI (revisione madrelingua se possibile). Termini dello schermo TilliT in inglese.
var PKX_DICT = window.PKX_DICT || {};
// ── cap3 ── Quality at the machine + frasi comuni (titoli, teaser, chiusura)
Object.assign(PKX_DICT, {
  "TilliT does not replace the machines: it reads their data and shows them as one line.": {
    "it": "TilliT non sostituisce le macchine: ne legge i dati e le mostra come un'unica linea.",
    "es": "TilliT no reemplaza las máquinas: lee sus datos y las muestra como una sola línea.",
    "pt-BR": "O TilliT não substitui as máquinas: ele lê os dados delas e as mostra como uma única linha.",
    "hi": "TilliT मशीनों की जगह नहीं लेता: यह उनका डेटा पढ़ता है और उन्हें एक लाइन के रूप में दिखाता है।"
  },
  "One line, four machines, one system": {
    "it": "Una linea, quattro macchine, un sistema",
    "es": "Una línea, cuatro máquinas, un sistema",
    "pt-BR": "Uma linha, quatro máquinas, um sistema",
    "hi": "एक लाइन, चार मशीनें, एक सिस्टम"
  },
  "One order, four operations": {
    "it": "Un ordine, quattro operazioni",
    "es": "Una orden, cuatro operaciones",
    "pt-BR": "Uma ordem, quatro operações",
    "hi": "एक ऑर्डर, चार ऑपरेशन"
  },
  "Your Station View": {
    "it": "La tua Station View",
    "es": "Tu Station View",
    "pt-BR": "Sua Station View",
    "hi": "आपका Station View"
  },
  "Quality at the machine": {
    "it": "La qualità alla macchina",
    "es": "Calidad en la máquina",
    "pt-BR": "Qualidade na máquina",
    "hi": "मशीन पर क्वालिटी"
  },
  "Where the line loses": {
    "it": "Dove la linea perde",
    "es": "Dónde pierde la línea",
    "pt-BR": "Onde a linha perde",
    "hi": "लाइन कहाँ नुकसान उठाती है"
  },
  "From order to pallet, all traced": {
    "it": "Dall'ordine al pallet, tutto tracciato",
    "es": "De la orden al pallet, todo rastreado",
    "pt-BR": "Da ordem ao palete, tudo rastreado",
    "hi": "ऑर्डर से पैलेट तक, सब कुछ ट्रेस होता है"
  },
  "Next: the Station View of the ACMA Flow Wrap, where the operator starts the order of their machine.": {
    "it": "Nel prossimo capitolo: la Station View dell'ACMA Flow Wrap, dove l'operatore avvia l'ordine della sua macchina.",
    "es": "Siguiente: la Station View de la ACMA Flow Wrap, donde el operador inicia la orden de su máquina.",
    "pt-BR": "A seguir: a Station View da ACMA Flow Wrap, onde o operador inicia a ordem da sua máquina.",
    "hi": "आगे: ACMA Flow Wrap का Station View, जहाँ ऑपरेटर अपनी मशीन का ऑर्डर शुरू करता है।"
  },
  "Next: the activities of the ACMA Flow Wrap. Open one, claim it and submit it.": {
    "it": "Nel prossimo capitolo: le attività dell'ACMA Flow Wrap. Aprine una, prendila in carico e inviala.",
    "es": "Siguiente: las actividades de la ACMA Flow Wrap. Abre una, asígnatela y envíala.",
    "pt-BR": "A seguir: as atividades da ACMA Flow Wrap. Abra uma, assuma e envie.",
    "hi": "आगे: ACMA Flow Wrap की ऐक्टिविटीज़। एक खोलें, उसे क्लेम करें और सबमिट करें।"
  },
  "Quality is under control. But does the line deliver what it should?": {
    "it": "La qualità è sotto controllo. Ma la linea produce quello che dovrebbe?",
    "es": "La calidad está bajo control. Pero ¿la línea produce lo que debería?",
    "pt-BR": "A qualidade está sob controle. Mas a linha entrega o que deveria?",
    "hi": "क्वालिटी नियंत्रण में है। लेकिन क्या लाइन वह दे रही है जो उसे देना चाहिए?"
  },
  "Connected Line": {
    "it": "Linea connessa",
    "es": "Línea conectada",
    "pt-BR": "Linha conectada",
    "hi": "कनेक्टेड लाइन"
  },
  "Order Execution": {
    "it": "Esecuzione dell'ordine",
    "es": "Ejecución de órdenes",
    "pt-BR": "Execução da ordem",
    "hi": "ऑर्डर एग्ज़ीक्यूशन"
  },
  "Digital Workflow & Quality": {
    "it": "Workflow digitale e qualità",
    "es": "Flujo de trabajo digital y calidad",
    "pt-BR": "Fluxo de trabalho digital e qualidade",
    "hi": "डिजिटल वर्कफ़्लो और क्वालिटी"
  },
  "Chapter 3 · Packaging Line Training": {
    "it": "Capitolo 3 · Packaging Line Training",
    "es": "Capítulo 3 · Packaging Line Training",
    "pt-BR": "Capítulo 3 · Packaging Line Training",
    "hi": "अध्याय 3 · Packaging Line Training"
  },
  "In the Station View of the ACMA Flow Wrap, the Activities tab lists the activities of this machine. In this chapter you open the Wrap Seal & Code Check, see what started it, claim it, read its procedure and submit it.": {
    "it": "Nella Station View dell'ACMA Flow Wrap, la scheda Activities elenca le attività di questa macchina. In questo capitolo apri il Wrap Seal & Code Check, vedi che cosa l'ha avviato, lo prendi in carico, leggi la sua procedura e lo invii.",
    "es": "En la Station View de la ACMA Flow Wrap, la pestaña Activities muestra las actividades de esta máquina. En este capítulo abres la Wrap Seal & Code Check, ves qué la inició, la tomas, lees su procedimiento y la envías.",
    "pt-BR": "Na Station View da ACMA Flow Wrap, a aba Activities lista as atividades desta máquina. Neste capítulo, você abre a Wrap Seal & Code Check, vê o que a iniciou, assume a atividade, lê o procedimento dela e a envia.",
    "hi": "ACMA Flow Wrap के Station View में, Activities टैब इस मशीन की ऐक्टिविटीज़ की सूची दिखाता है। इस अध्याय में आप Wrap Seal & Code Check खोलेंगे, देखेंगे कि यह किस कारण शुरू हुई, उसे क्लेम करेंगे, उसकी प्रक्रिया पढ़ेंगे और उसे सबमिट करेंगे।"
  },
  "What starts an activity, and how you claim it": {
    "it": "Che cosa avvia un'attività e come la prendi in carico",
    "es": "Qué inicia una actividad y cómo tomarla",
    "pt-BR": "O que inicia uma atividade e como você a assume",
    "hi": "ऐक्टिविटी किस कारण शुरू होती है, और आप उसे कैसे क्लेम करते हैं"
  },
  "Where the procedure is, at the machine": {
    "it": "Dove trovi la procedura, alla macchina",
    "es": "Dónde está el procedimiento, en la máquina",
    "pt-BR": "Onde está o procedimento, na máquina",
    "hi": "मशीन पर प्रक्रिया कहाँ है"
  },
  "How an activity is filled in, and what stays on record": {
    "it": "Come si compila un'attività e che cosa resta registrato",
    "es": "Cómo se completa una actividad y qué queda registrado",
    "pt-BR": "Como uma atividade é preenchida e o que fica registrado",
    "hi": "ऐक्टिविटी कैसे भरी जाती है, और रिकॉर्ड में क्या रहता है"
  },
  "An activity started by an event": {
    "it": "Un'attività avviata da un evento",
    "es": "Una actividad iniciada por un evento",
    "pt-BR": "Atividade iniciada por um evento",
    "hi": "एक इवेंट से शुरू हुई ऐक्टिविटी"
  },
  "This is the Station View of the ACMA Flow Wrap: the Activities tab lists only the activities of this machine. Open the Wrap Seal & Code Check and see what started it.": {
    "it": "Questa è la Station View dell'ACMA Flow Wrap: la scheda Activities elenca solo le attività di questa macchina. Apri il Wrap Seal & Code Check e guarda che cosa l'ha avviato.",
    "es": "Esta es la Station View de la ACMA Flow Wrap: la pestaña Activities muestra solo las actividades de esta máquina. Abre la Wrap Seal & Code Check y mira qué la inició.",
    "pt-BR": "Esta é a Station View da ACMA Flow Wrap: a aba Activities lista apenas as atividades desta máquina. Abra a Wrap Seal & Code Check e veja o que a iniciou.",
    "hi": "यह ACMA Flow Wrap का Station View है: Activities टैब में केवल इस मशीन की ऐक्टिविटीज़ की सूची है। Wrap Seal & Code Check खोलें और देखें कि यह किस कारण शुरू हुई।"
  },
  "Claim the activity before you answer it": {
    "it": "Prendi in carico l'attività prima di rispondere",
    "es": "Asígnate la actividad antes de responder",
    "pt-BR": "Assuma a atividade antes de respondê-la",
    "hi": "उत्तर देने से पहले ऐक्टिविटी क्लेम करें"
  },
  "Answer the items before you claim it": {
    "it": "Rispondere alle voci prima di prenderla in carico",
    "es": "Responder los ítems antes de tomarla",
    "pt-BR": "Responder os itens antes de assumi-la",
    "hi": "क्लेम करने से पहले आइटम के उत्तर देना"
  },
  "In the Settings of each activity, whoever configures TilliT sets what starts it: order start, shift start, an interval, order end. Without a trigger it is started by hand, with Start Activity. CLAIM records who does it.": {
    "it": "Nelle Settings di ogni attività, chi configura TilliT stabilisce che cosa la avvia: avvio dell'ordine, inizio del turno, un intervallo, fine dell'ordine. Senza trigger si avvia a mano, con Start Activity. CLAIM registra chi la fa.",
    "es": "En los Settings de cada actividad, quien configura TilliT define qué la inicia: inicio de orden, inicio de turno, un intervalo, fin de orden. Sin disparador, se inicia a mano, con Start Activity. CLAIM registra quién la hace.",
    "pt-BR": "Nas Settings de cada atividade, quem configura o TilliT define o que a inicia: início da ordem, início do turno, um intervalo, fim da ordem. Sem gatilho, ela é iniciada manualmente, com Start Activity. CLAIM registra quem a executa.",
    "hi": "हर ऐक्टिविटी की Settings में, TilliT को कॉन्फ़िगर करने वाला व्यक्ति तय करता है कि वह किस कारण शुरू होगी: ऑर्डर की शुरुआत, शिफ्ट की शुरुआत, एक अंतराल, ऑर्डर का अंत। ट्रिगर के बिना उसे हाथ से, Start Activity से शुरू किया जाता है। CLAIM रिकॉर्ड करता है कि उसे कौन करता है।"
  },
  "The configuration of the activity decides when it starts. CLAIM says who does it.": {
    "it": "La configurazione dell'attività decide quando parte. CLAIM dice chi la fa.",
    "es": "La configuración de la actividad decide cuándo se inicia. CLAIM indica quién la hace.",
    "pt-BR": "A configuração da atividade decide quando ela começa. CLAIM diz quem a executa.",
    "hi": "ऐक्टिविटी का कॉन्फ़िगरेशन तय करता है कि वह कब शुरू होती है। CLAIM बताता है कि उसे कौन करता है।"
  },
  "Open the activity": {
    "it": "Apri l'attività",
    "es": "Abre la actividad",
    "pt-BR": "Abra a atividade",
    "hi": "ऐक्टिविटी खोलें"
  },
  "Open the Wrap Seal & Code Check.": {
    "it": "Apri il Wrap Seal & Code Check.",
    "es": "Abre la Wrap Seal & Code Check.",
    "pt-BR": "Abra a Wrap Seal & Code Check.",
    "hi": "Wrap Seal & Code Check खोलें।"
  },
  "The activity opens in the third column. Its items are greyed out: it is Unassigned, nobody has claimed it yet.": {
    "it": "L'attività si apre nella terza colonna. Le sue voci sono in grigio: è Unassigned, nessuno l'ha ancora presa in carico.",
    "es": "La actividad se abre en la tercera columna. Sus ítems están en gris: está Unassigned, nadie la ha tomado todavía.",
    "pt-BR": "A atividade abre na terceira coluna. Os itens aparecem em cinza: ela está Unassigned, ninguém a assumiu ainda.",
    "hi": "ऐक्टिविटी तीसरे कॉलम में खुलती है। इसके आइटम ग्रे हैं: यह Unassigned है, अभी तक किसी ने इसे क्लेम नहीं किया है।"
  },
  "Not this one. Open the Wrap Seal & Code Check in the Activities list.": {
    "it": "Non questa. Apri il Wrap Seal & Code Check nella lista Activities.",
    "es": "Esta no. Abre la Wrap Seal & Code Check en la lista Activities.",
    "pt-BR": "Não é esta. Abra a Wrap Seal & Code Check na lista Activities.",
    "hi": "यह नहीं। Activities सूची में Wrap Seal & Code Check खोलें।"
  },
  "It is the first card in the Activities list, in the middle column.": {
    "it": "È la prima card della lista Activities, nella colonna centrale.",
    "es": "Es la primera tarjeta de la lista Activities, en la columna del centro.",
    "pt-BR": "É o primeiro card da lista Activities, na coluna do meio.",
    "hi": "यह बीच वाले कॉलम में, Activities सूची का पहला कार्ड है।"
  },
  "That is the Metal Detector Challenge. Open the Wrap Seal & Code Check.": {
    "it": "Questo è il Metal Detector Challenge. Apri il Wrap Seal & Code Check.",
    "es": "Esa es la Metal Detector Challenge. Abre la Wrap Seal & Code Check.",
    "pt-BR": "Essa é a Metal Detector Challenge. Abra a Wrap Seal & Code Check.",
    "hi": "वह Metal Detector Challenge है। Wrap Seal & Code Check खोलें।"
  },
  "The top of the activity": {
    "it": "La parte alta dell'attività",
    "es": "Parte superior de la actividad",
    "pt-BR": "O topo da atividade",
    "hi": "ऐक्टिविटी का ऊपरी हिस्सा"
  },
  "At the top of the activity: what started it, and who does it. Click both.": {
    "it": "In alto nell'attività: che cosa l'ha avviata e chi la fa. Clicca entrambi.",
    "es": "En la parte superior de la actividad: qué la inició y quién la hace. Haz clic en ambos.",
    "pt-BR": "No topo da atividade: o que a iniciou e quem a executa. Clique nos dois.",
    "hi": "ऐक्टिविटी के ऊपरी हिस्से में: यह किस कारण शुरू हुई, और इसे कौन करता है। दोनों पर क्लिक करें।"
  },
  "See what started it": {
    "it": "Guarda che cosa l'ha avviata",
    "es": "Mira qué la inició",
    "pt-BR": "Veja o que a iniciou",
    "hi": "देखें यह किस कारण शुरू हुई"
  },
  "Click Caused by.": {
    "it": "Clicca Caused by.",
    "es": "Haz clic en Caused by.",
    "pt-BR": "Clique em Caused by.",
    "hi": "Caused by पर क्लिक करें।"
  },
  "Caused by event: Order Started. In the Settings of this activity it was set to start when the order starts, then every 30 minutes.": {
    "it": "Caused by event: Order Started. Nelle Settings di questa attività è impostata per partire all'avvio dell'ordine, poi ogni 30 minuti.",
    "es": "Caused by event: Order Started. En los Settings de esta actividad se configuró para iniciarse cuando empieza la orden y luego cada 30 minutos.",
    "pt-BR": "Caused by event: Order Started. Nas Settings desta atividade, ela foi configurada para começar no início da ordem e depois a cada 30 minutos.",
    "hi": "Caused by event: Order Started। इस ऐक्टिविटी की Settings में इसे ऑर्डर शुरू होने पर, और फिर हर 30 मिनट में शुरू होने के लिए सेट किया गया था।"
  },
  "The Metal Detector Challenge is set up the same way, every 2 hours. If an activity is not done in time, it expires: it can no longer be filled in unless someone reissues it, and it shows up in the reports.": {
    "it": "Il Metal Detector Challenge è impostato allo stesso modo, ogni 2 ore. Se un'attività non viene fatta in tempo, scade: non si può più compilare, a meno che qualcuno non la riemetta, e compare nei report.",
    "es": "La Metal Detector Challenge está configurada de la misma forma, cada 2 horas. Si una actividad no se hace a tiempo, vence: ya no se puede completar a menos que alguien la vuelva a emitir, y aparece en los reportes.",
    "pt-BR": "A Metal Detector Challenge é configurada da mesma forma, a cada 2 horas. Se uma atividade não é feita a tempo, ela expira: não pode mais ser preenchida, a menos que alguém a emita de novo, e aparece nos relatórios.",
    "hi": "Metal Detector Challenge भी इसी तरह सेट है, हर 2 घंटे में। अगर कोई ऐक्टिविटी समय पर नहीं की जाती, तो वह एक्सपायर हो जाती है: जब तक कोई उसे दोबारा जारी न करे, उसे भरा नहीं जा सकता, और वह रिपोर्ट में दिखती है।"
  },
  "Claim it": {
    "it": "Prendila in carico",
    "es": "Asígnatela",
    "pt-BR": "Assuma a atividade",
    "hi": "इसे क्लेम करें"
  },
  "Click CLAIM.": {
    "it": "Clicca CLAIM.",
    "es": "Haz clic en CLAIM.",
    "pt-BR": "Clique em CLAIM.",
    "hi": "CLAIM पर क्लिक करें।"
  },
  "Claimed by Alex Operator. UNCLAIM, CLEAR and SKIP take its place, and the items unlock.": {
    "it": "Presa in carico da Alex Operator. Al posto di CLAIM compaiono UNCLAIM, CLEAR e SKIP e le voci si sbloccano.",
    "es": "La tomó Alex Operator. En su lugar aparecen UNCLAIM, CLEAR y SKIP, y los ítems se desbloquean.",
    "pt-BR": "Assumida por Alex Operator. UNCLAIM, CLEAR e SKIP aparecem no lugar, e os itens são liberados.",
    "hi": "Alex Operator ने क्लेम किया। CLAIM की जगह UNCLAIM, CLEAR और SKIP आ जाते हैं, और आइटम अनलॉक हो जाते हैं।"
  },
  "The items stay locked until someone claims the activity. Click CLAIM first.": {
    "it": "Le voci restano bloccate finché qualcuno non prende in carico l'attività. Clicca prima CLAIM.",
    "es": "Los ítems siguen bloqueados hasta que alguien tome la actividad. Haz clic primero en CLAIM.",
    "pt-BR": "Os itens ficam bloqueados até alguém assumir a atividade. Clique primeiro em CLAIM.",
    "hi": "जब तक कोई ऐक्टिविटी को क्लेम नहीं करता, आइटम लॉक रहते हैं। पहले CLAIM पर क्लिक करें।"
  },
  "The procedure where it is needed": {
    "it": "La procedura dove serve",
    "es": "El procedimiento donde se necesita",
    "pt-BR": "O procedimento onde é preciso",
    "hi": "जहाँ ज़रूरत है, वहीं प्रक्रिया"
  },
  "Before answering, the operator can read how it is done, without leaving the machine.": {
    "it": "Prima di rispondere, l'operatore può leggere come si fa, senza lasciare la macchina.",
    "es": "Antes de responder, el operador puede leer cómo se hace, sin dejar la máquina.",
    "pt-BR": "Antes de responder, o operador pode ler como se faz, sem sair da máquina.",
    "hi": "उत्तर देने से पहले, ऑपरेटर मशीन छोड़े बिना पढ़ सकता है कि यह कैसे किया जाता है।"
  },
  "Open the SOP when in doubt, at the machine": {
    "it": "Nel dubbio, apri la SOP alla macchina",
    "es": "Ante una duda, abre el SOP en la máquina",
    "pt-BR": "Abra o SOP na dúvida, na máquina",
    "hi": "संदेह हो तो मशीन पर ही SOP खोलें"
  },
  "Answer from memory when in doubt": {
    "it": "Nel dubbio, rispondere a memoria",
    "es": "Ante una duda, responder de memoria",
    "pt-BR": "Responder de memória na dúvida",
    "hi": "संदेह होने पर याद से उत्तर देना"
  },
  "The procedure is a TilliT article attached to the activity: it opens from the book icon, always in its current version. This one also says what to do if a result is out of spec.": {
    "it": "La procedura è un articolo di TilliT allegato all'attività: si apre dall'icona del libro, sempre nella versione in vigore. Questa dice anche che cosa fare se un risultato è fuori specifica.",
    "es": "El procedimiento es un artículo de TilliT adjunto a la actividad: se abre desde el ícono del libro, siempre en su versión vigente. Este también dice qué hacer si un resultado está fuera de especificación.",
    "pt-BR": "O procedimento é um artigo do TilliT anexado à atividade: abre pelo ícone do livro, sempre na versão atual. Este também diz o que fazer se um resultado estiver fora da especificação.",
    "hi": "प्रक्रिया ऐक्टिविटी से जुड़ा एक TilliT आर्टिकल है: यह किताब वाले आइकन से खुलती है, हमेशा अपने मौजूदा संस्करण में। यह प्रक्रिया यह भी बताती है कि अगर कोई परिणाम स्पेसिफिकेशन से बाहर हो तो क्या करना है।"
  },
  "The procedure is attached to the activity.": {
    "it": "La procedura è allegata all'attività.",
    "es": "El procedimiento está adjunto a la actividad.",
    "pt-BR": "O procedimento está anexado à atividade.",
    "hi": "प्रक्रिया ऐक्टिविटी से जुड़ी हुई है।"
  },
  "Open the procedure": {
    "it": "Apri la procedura",
    "es": "Abre el procedimiento",
    "pt-BR": "Abra o procedimento",
    "hi": "प्रक्रिया खोलें"
  },
  "Open the procedure: click the book icon at the top right of the activity.": {
    "it": "Apri la procedura: clicca sull'icona del libro in alto a destra nell'attività.",
    "es": "Abre el procedimiento: haz clic en el ícono del libro, arriba a la derecha de la actividad.",
    "pt-BR": "Abra o procedimento: clique no ícone do livro, no canto superior direito da atividade.",
    "hi": "प्रक्रिया खोलें: ऐक्टिविटी में ऊपर दाईं ओर किताब वाले आइकन पर क्लिक करें।"
  },
  "SOP QS-05 opens on top of the activity.": {
    "it": "La SOP QS-05 si apre sopra l'attività.",
    "es": "El SOP QS-05 se abre encima de la actividad.",
    "pt-BR": "O SOP QS-05 abre sobre a atividade.",
    "hi": "SOP QS-05 ऐक्टिविटी के ऊपर खुलता है।"
  },
  "Not this one. Look for the book icon.": {
    "it": "Non questo. Cerca l'icona del libro.",
    "es": "Este no. Busca el ícono del libro.",
    "pt-BR": "Não é este. Procure o ícone do livro.",
    "hi": "यह नहीं। किताब वाला आइकन ढूँढें।"
  },
  "The book icon is the small dark square at the top right of the activity.": {
    "it": "L'icona del libro è il quadratino scuro in alto a destra nell'attività.",
    "es": "El ícono del libro es el pequeño cuadrado oscuro arriba a la derecha de la actividad.",
    "pt-BR": "O ícone do livro é o pequeno quadrado escuro no canto superior direito da atividade.",
    "hi": "किताब वाला आइकन ऐक्टिविटी में ऊपर दाईं ओर छोटा, गहरे रंग का चौकोर बटन है।"
  },
  "That is the short description. The full procedure is behind the book icon, top right of the activity.": {
    "it": "Questa è la descrizione breve. La procedura completa è dietro l'icona del libro, in alto a destra nell'attività.",
    "es": "Esa es la descripción breve. El procedimiento completo está detrás del ícono del libro, arriba a la derecha de la actividad.",
    "pt-BR": "Essa é a descrição curta. O procedimento completo está no ícone do livro, no canto superior direito da atividade.",
    "hi": "वह छोटा विवरण है। पूरी प्रक्रिया किताब वाले आइकन में है, ऐक्टिविटी में ऊपर दाईं ओर।"
  },
  "The site chooses which article to attach: a site that works in Chinese attaches its article in Chinese.": {
    "it": "È il sito a scegliere quale articolo allegare: un sito che lavora in cinese allega il suo articolo in cinese.",
    "es": "Cada planta elige qué artículo adjuntar: una planta que trabaja en chino adjunta su artículo en chino.",
    "pt-BR": "A planta escolhe qual artigo anexar: uma planta que trabalha em chinês anexa o artigo em chinês.",
    "hi": "कौन-सा आर्टिकल जोड़ना है, यह साइट चुनती है: जो साइट चीनी भाषा में काम करती है, वह अपना आर्टिकल चीनी भाषा में जोड़ती है।"
  },
  "Find what to do if something is wrong": {
    "it": "Trova che cosa fare se qualcosa non va",
    "es": "Qué hacer si algo está mal",
    "pt-BR": "Encontre o que fazer se algo estiver errado",
    "hi": "कुछ गलत हो तो क्या करें, यह ढूँढें"
  },
  "Find what to do if something is wrong: click If out of spec.": {
    "it": "Trova che cosa fare se qualcosa non va: clicca If out of spec.",
    "es": "Encuentra qué hacer si algo está mal: haz clic en If out of spec.",
    "pt-BR": "Encontre o que fazer se algo der errado: clique em If out of spec.",
    "hi": "कुछ गलत हो तो क्या करें, यह ढूँढें: If out of spec पर क्लिक करें।"
  },
  "This SOP says: mark the item Fail and add a comment, stop the wrapper, call the shift lead.": {
    "it": "Questa SOP dice: segna la voce Fail e aggiungi un commento, ferma l'incartatrice, chiama il capoturno.",
    "es": "Este SOP dice: marca el ítem como Fail y agrega un comentario, detén la envolvedora, llama al jefe de turno.",
    "pt-BR": "Este SOP diz: marque o item como Fail e adicione um comentário, pare a embaladora, chame o líder de turno.",
    "hi": "यह SOP कहता है: आइटम को Fail मार्क करें और एक टिप्पणी जोड़ें, रैपर रोकें, शिफ्ट लीड को बुलाएँ।"
  },
  "Not this one. Look for the heading If out of spec.": {
    "it": "Non questo. Cerca il titolo If out of spec.",
    "es": "Este no. Busca el encabezado If out of spec.",
    "pt-BR": "Não é este. Procure o título If out of spec.",
    "hi": "यह नहीं। If out of spec शीर्षक ढूँढें।"
  },
  "If out of spec is the last heading of the procedure.": {
    "it": "If out of spec è l'ultimo titolo della procedura.",
    "es": "If out of spec es el último encabezado del procedimiento.",
    "pt-BR": "If out of spec é o último título do procedimento.",
    "hi": "If out of spec प्रक्रिया का आखिरी शीर्षक है।"
  },
  "Fill in, submit, done": {
    "it": "Compila, invia, fatto",
    "es": "Completar, enviar, listo",
    "pt-BR": "Preencher, enviar, pronto",
    "hi": "भरें, सबमिट करें, हो गया"
  },
  "Now answer the activity: every item, from top to bottom, then Submit.": {
    "it": "Ora compila l'attività: ogni voce, dall'alto in basso, poi Submit.",
    "es": "Ahora responde la actividad: cada ítem, de arriba abajo, y luego Submit.",
    "pt-BR": "Agora responda a atividade: todos os itens, de cima para baixo, depois Submit.",
    "hi": "अब ऐक्टिविटी के उत्तर दें: हर आइटम, ऊपर से नीचे तक, फिर Submit।"
  },
  "Answer every item with a red star": {
    "it": "Rispondi a ogni voce con la stella rossa",
    "es": "Responde cada ítem con estrella roja",
    "pt-BR": "Responda todo item com estrela vermelha",
    "hi": "लाल स्टार वाले हर आइटम का उत्तर दें"
  },
  "Look for Submit before the last required item": {
    "it": "Cercare Submit prima dell'ultima voce obbligatoria",
    "es": "Buscar Submit antes del último ítem obligatorio",
    "pt-BR": "Procurar Submit antes do último item obrigatório",
    "hi": "आखिरी अनिवार्य आइटम से पहले Submit ढूँढना"
  },
  "Submit turns on only when every item with a red star has an answer. Save & Finish Later keeps a half-done activity open. Every result stays on record with who, when, which machine and which order.": {
    "it": "Submit si attiva solo quando ogni voce con la stella rossa ha una risposta. Save & Finish Later tiene aperta un'attività fatta a metà. Ogni risultato resta registrato con chi, quando, quale macchina e quale ordine.",
    "es": "Submit se activa solo cuando cada ítem con estrella roja tiene respuesta. Save & Finish Later mantiene abierta una actividad a medio hacer. Cada resultado queda registrado con quién, cuándo, qué máquina y qué orden.",
    "pt-BR": "Submit só fica ativo quando todos os itens com estrela vermelha têm resposta. Save & Finish Later mantém aberta uma atividade feita pela metade. Todo resultado fica registrado com quem, quando, qual máquina e qual ordem.",
    "hi": "Submit तभी चालू होता है जब लाल स्टार वाले हर आइटम का उत्तर हो। Save & Finish Later आधी भरी ऐक्टिविटी को खुला रखता है। हर परिणाम रिकॉर्ड में रहता है: किसने किया, कब, किस मशीन पर और किस ऑर्डर में।"
  },
  "Submit only with every required item answered. Every result, PASS or FAIL, stays on record.": {
    "it": "Submit solo quando ogni voce obbligatoria ha una risposta. Ogni risultato, PASS o FAIL, resta registrato.",
    "es": "Envía solo con todos los ítems obligatorios respondidos. Cada resultado, PASS o FAIL, queda registrado.",
    "pt-BR": "Envie só com todos os itens obrigatórios respondidos. Todo resultado, PASS ou FAIL, fica registrado.",
    "hi": "Submit तभी करें जब हर अनिवार्य आइटम का उत्तर दिया गया हो। हर परिणाम, PASS हो या FAIL, रिकॉर्ड में रहता है।"
  },
  "You have followed an activity from start to finish": {
    "it": "Hai seguito un'attività dall'inizio alla fine",
    "es": "Seguiste una actividad de principio a fin",
    "pt-BR": "Você acompanhou uma atividade do início ao fim",
    "hi": "आपने एक ऐक्टिविटी को शुरू से अंत तक फ़ॉलो किया है"
  },
  "It was started by the order, you claimed it, read its procedure and submitted it. TilliT kept the record.": {
    "it": "L'ha avviata l'ordine, tu l'hai presa in carico, hai letto la sua procedura e l'hai inviata. TilliT ha registrato tutto.",
    "es": "La inició la orden, la tomaste, leíste su procedimiento y la enviaste. TilliT guardó el registro.",
    "pt-BR": "Ela foi iniciada pela ordem, você a assumiu, leu o procedimento dela e a enviou. O TilliT guardou o registro.",
    "hi": "यह ऑर्डर से शुरू हुई, आपने इसे क्लेम किया, इसकी प्रक्रिया पढ़ी और इसे सबमिट किया। TilliT ने रिकॉर्ड रखा।"
  },
  "The steps you followed": {
    "it": "I passi che hai seguito",
    "es": "Los pasos que seguiste",
    "pt-BR": "Os passos que você seguiu",
    "hi": "आपने ये चरण फ़ॉलो किए"
  },
  "CLAIM": {
    "it": "CLAIM",
    "es": "CLAIM",
    "pt-BR": "CLAIM",
    "hi": "CLAIM"
  },
  "SOP": {
    "it": "SOP",
    "es": "SOP",
    "pt-BR": "SOP",
    "hi": "SOP"
  },
  "ANSWER": {
    "it": "RISPONDI",
    "es": "RESPONDER",
    "pt-BR": "RESPONDER",
    "hi": "उत्तर दें"
  },
  "SUBMIT": {
    "it": "SUBMIT",
    "es": "SUBMIT",
    "pt-BR": "SUBMIT",
    "hi": "SUBMIT"
  },
  "The items of the activity": {
    "it": "Le voci dell'attività",
    "es": "Los ítems de la actividad",
    "pt-BR": "Os itens da atividade",
    "hi": "ऐक्टिविटी के आइटम"
  },
  "All 5 packs hold, the code is legible, one wrapped bar weighs 24.9 g, the packs look right. Answer the items from the top.": {
    "it": "Tutte e 5 le confezioni tengono, il codice è leggibile, una barretta incartata pesa 24,9 g, le confezioni sono a posto. Rispondi alle voci partendo dall'alto.",
    "es": "El sellado aguanta en los 5 paquetes, el código se lee bien, una barra envuelta pesa 24.9 g, los paquetes se ven bien. Responde los ítems desde arriba.",
    "pt-BR": "As 5 embalagens estão vedadas, o código está legível, uma barra embalada pesa 24,9 g, as embalagens estão com bom aspecto. Responda os itens a partir do topo.",
    "hi": "सभी 5 पैक की सील बनी हुई है, कोड पढ़ने योग्य है, एक रैप्ड बार का वज़न 24.9 g है, पैक सही दिखते हैं। ऊपर से आइटम के उत्तर दें।"
  },
  "Seal integrity": {
    "it": "Seal integrity",
    "es": "Seal integrity",
    "pt-BR": "Seal integrity",
    "hi": "Seal integrity"
  },
  "PASS recorded. The note \"is required\" under the item is gone.": {
    "it": "PASS registrato. La nota \"is required\" sotto la voce è sparita.",
    "es": "PASS registrado. La nota \"is required\" debajo del ítem desapareció.",
    "pt-BR": "PASS registrado. O aviso \"is required\" embaixo do item sumiu.",
    "hi": "PASS दर्ज हुआ। आइटम के नीचे का नोट \"is required\" हट गया है।"
  },
  "FAIL would record that the seal does not hold. Here the packs hold: click PASS.": {
    "it": "FAIL registrerebbe che la saldatura non tiene. Qui le confezioni tengono: clicca PASS.",
    "es": "FAIL registraría que el sellado no aguanta. Aquí aguanta en todos los paquetes: haz clic en PASS.",
    "pt-BR": "FAIL registraria que a selagem não veda. Aqui as embalagens estão vedadas: clique em PASS.",
    "hi": "FAIL यह दर्ज करेगा कि सील नहीं टिकती। यहाँ पैक की सील बनी हुई है: PASS पर क्लिक करें।"
  },
  "Lot and best-before": {
    "it": "Lot and best-before",
    "es": "Lot and best-before",
    "pt-BR": "Lot and best-before",
    "hi": "Lot and best-before"
  },
  "PASS recorded.": {
    "it": "PASS registrato.",
    "es": "PASS registrado.",
    "pt-BR": "PASS registrado.",
    "hi": "PASS दर्ज हुआ।"
  },
  "FAIL would record a wrong or unreadable code. Here it is legible: click PASS.": {
    "it": "FAIL registrerebbe un codice sbagliato o illeggibile. Qui è leggibile: clicca PASS.",
    "es": "FAIL registraría un código incorrecto o ilegible. Aquí es legible: haz clic en PASS.",
    "pt-BR": "FAIL registraria um código errado ou ilegível. Aqui ele está legível: clique em PASS.",
    "hi": "FAIL गलत या न पढ़ा जा सकने वाला कोड दर्ज करेगा। यहाँ यह पढ़ने योग्य है: PASS पर क्लिक करें।"
  },
  "Wrapped bar weight": {
    "it": "Wrapped bar weight",
    "es": "Wrapped bar weight",
    "pt-BR": "Wrapped bar weight",
    "hi": "Wrapped bar weight"
  },
  "24.9 g against a target of 25: the mark next to Target stays grey.": {
    "it": "24,9 g rispetto a un target di 25: il segno accanto a Target resta grigio.",
    "es": "24.9 g frente a un objetivo de 25: la marca junto a Target sigue gris.",
    "pt-BR": "24,9 g para uma meta de 25: o sinal ao lado de Target continua cinza.",
    "hi": "25 के Target के मुकाबले 24.9 g: Target के बगल का निशान ग्रे रहता है।"
  },
  "A weight out of range turns that mark into a red triangle: you see it at a glance.": {
    "it": "Un peso fuori tolleranza trasforma quel segno in un triangolo rosso: lo vedi a colpo d'occhio.",
    "es": "Un peso fuera de rango convierte esa marca en un triángulo rojo: lo ves de un vistazo.",
    "pt-BR": "Um peso fora da faixa transforma esse sinal em um triângulo vermelho: você vê na hora.",
    "hi": "रेंज से बाहर का वज़न उस निशान को लाल त्रिकोण में बदल देता है: आप इसे एक नज़र में देख लेते हैं।"
  },
  "Pack appearance": {
    "it": "Pack appearance",
    "es": "Pack appearance",
    "pt-BR": "Pack appearance",
    "hi": "Pack appearance"
  },
  "Every item with a red star has an answer: Submit, at the bottom of the activity, is now on.": {
    "it": "Ogni voce con la stella rossa ha una risposta: Submit, in fondo all'attività, ora è attivo.",
    "es": "Cada ítem con estrella roja tiene respuesta: Submit, al final de la actividad, ya está activo.",
    "pt-BR": "Todos os itens com estrela vermelha têm resposta: Submit, na parte de baixo da atividade, agora está ativo.",
    "hi": "लाल स्टार वाले हर आइटम का उत्तर है: ऐक्टिविटी में सबसे नीचे Submit अब चालू है।"
  },
  "FAIL would record a creased or off-centre pack. Here it looks right: click PASS.": {
    "it": "FAIL registrerebbe una confezione stropicciata o decentrata. Qui è a posto: clicca PASS.",
    "es": "FAIL registraría un paquete arrugado o descentrado. Aquí se ve bien: haz clic en PASS.",
    "pt-BR": "FAIL registraria uma embalagem amassada ou descentrada. Aqui ela está com bom aspecto: clique em PASS.",
    "hi": "FAIL सिलवट वाला या बीच से हटा हुआ पैक दर्ज करेगा। यहाँ यह सही दिखता है: PASS पर क्लिक करें।"
  },
  "Submit": {
    "it": "Submit",
    "es": "Submit",
    "pt-BR": "Submit",
    "hi": "Submit"
  },
  "Click Submit.": {
    "it": "Clicca Submit.",
    "es": "Haz clic en Submit.",
    "pt-BR": "Clique em Submit.",
    "hi": "Submit पर क्लिक करें।"
  },
  "Recorded: who, when, which machine, which order. The activity leaves the Active list, and Open goes from 2 to 1.": {
    "it": "Registrato: chi, quando, quale macchina, quale ordine. L'attività esce dalla lista Active, e Open passa da 2 a 1.",
    "es": "Registrado: quién, cuándo, qué máquina, qué orden. La actividad sale de la lista Active, y Open pasa de 2 a 1.",
    "pt-BR": "Registrado: quem, quando, qual máquina, qual ordem. A atividade sai da lista Active, e Open passa de 2 para 1.",
    "hi": "दर्ज हुआ: किसने, कब, कौन-सी मशीन, कौन-सा ऑर्डर। ऐक्टिविटी Active सूची से हट जाती है, और Open 2 से 1 हो जाता है।"
  },
  "Not this one. Click Submit at the bottom of the activity.": {
    "it": "Non questo. Clicca Submit in fondo all'attività.",
    "es": "Este no. Haz clic en Submit al final de la actividad.",
    "pt-BR": "Não é este. Clique em Submit, na parte de baixo da atividade.",
    "hi": "यह नहीं। ऐक्टिविटी में सबसे नीचे Submit पर क्लिक करें।"
  },
  "Submit is the dark button at the bottom of the activity.": {
    "it": "Submit è il bottone scuro in fondo all'attività.",
    "es": "Submit es el botón oscuro al final de la actividad.",
    "pt-BR": "Submit é o botão escuro na parte de baixo da atividade.",
    "hi": "Submit ऐक्टिविटी में सबसे नीचे गहरे रंग का बटन है।"
  },
  "Everything is answered: click Submit.": {
    "it": "Hai risposto a tutto: clicca Submit.",
    "es": "Todo está respondido: haz clic en Submit.",
    "pt-BR": "Tudo está respondido: clique em Submit.",
    "hi": "सबके उत्तर दिए जा चुके हैं: Submit पर क्लिक करें।"
  },
  "Put an activity in order": {
    "it": "Metti in sequenza i passi di un'attività",
    "es": "Pon los pasos de una actividad en la secuencia correcta",
    "pt-BR": "Coloque os passos da atividade na sequência certa",
    "hi": "एक ऐक्टिविटी के चरण सही क्रम में लगाएँ"
  },
  "A Wrap Seal & Code Check is due on the flow wrapper. Put the six steps in the right order.": {
    "it": "Sull'incartatrice flow-pack c'è da fare un Wrap Seal & Code Check. Metti i sei passi nella sequenza giusta.",
    "es": "Está pendiente una Wrap Seal & Code Check en la envolvedora flow pack. Pon los seis pasos en la secuencia correcta.",
    "pt-BR": "Há uma Wrap Seal & Code Check pendente na embaladora flow pack. Coloque os seis passos na sequência certa.",
    "hi": "फ्लो रैपर पर Wrap Seal & Code Check का समय हो गया है। छह चरणों को सही क्रम में लगाएँ।"
  },
  "Six steps, the same order you followed on the screen.": {
    "it": "Sei passi, nello stesso ordine che hai seguito sullo schermo.",
    "es": "Seis pasos, en el mismo orden que seguiste en la pantalla.",
    "pt-BR": "Seis passos, na mesma ordem que você seguiu na tela.",
    "hi": "छह चरण, उसी क्रम में जिसमें आपने स्क्रीन पर उन्हें फ़ॉलो किया।"
  },
  "TilliT issues the activity, as set in its configuration": {
    "it": "TilliT emette l'attività, come impostato nella sua configurazione",
    "es": "TilliT emite la actividad, como está definido en su configuración",
    "pt-BR": "O TilliT emite a atividade, como definido na configuração dela",
    "hi": "TilliT ऐक्टिविटी जारी करता है, जैसा उसके कॉन्फ़िगरेशन में सेट है"
  },
  "I claim it: the items unlock": {
    "it": "La prendo in carico: le voci si sbloccano",
    "es": "La tomo: los ítems se desbloquean",
    "pt-BR": "Eu assumo: os itens são liberados",
    "hi": "मैं इसे क्लेम करता हूँ: आइटम अनलॉक हो जाते हैं"
  },
  "I open the SOP if I have a doubt": {
    "it": "Apro la SOP se ho un dubbio",
    "es": "Abro el SOP si tengo una duda",
    "pt-BR": "Eu abro o SOP se tiver dúvida",
    "hi": "संदेह होने पर मैं SOP खोलता हूँ"
  },
  "I answer every item with a red star": {
    "it": "Rispondo a ogni voce con la stella rossa",
    "es": "Respondo cada ítem con estrella roja",
    "pt-BR": "Eu respondo todo item com estrela vermelha",
    "hi": "मैं लाल स्टार वाले हर आइटम का उत्तर देता हूँ"
  },
  "Submit turns on": {
    "it": "Submit si attiva",
    "es": "Submit se activa",
    "pt-BR": "Submit fica ativo",
    "hi": "Submit चालू हो जाता है"
  },
  "I submit: the result stays on record": {
    "it": "Invio: il risultato resta registrato",
    "es": "Envío: el resultado queda registrado",
    "pt-BR": "Eu envio: o resultado fica registrado",
    "hi": "मैं सबमिट करता हूँ: परिणाम रिकॉर्ड में रहता है"
  },
  "Nothing starts before TilliT issues the activity: its trigger is in the configuration.": {
    "it": "Niente parte prima che TilliT emetta l'attività: il suo trigger è nella configurazione.",
    "es": "Nada empieza antes de que TilliT emita la actividad: su disparador está en la configuración.",
    "pt-BR": "Nada começa antes de o TilliT emitir a atividade: o gatilho dela está na configuração.",
    "hi": "TilliT के ऐक्टिविटी जारी करने से पहले कुछ भी शुरू नहीं होता: उसका ट्रिगर कॉन्फ़िगरेशन में है।"
  },
  "Submit stays grey until every required item is answered.": {
    "it": "Submit resta grigio finché non si risponde a ogni voce obbligatoria.",
    "es": "Submit sigue gris hasta que se respondan todos los ítems obligatorios.",
    "pt-BR": "Submit fica cinza até todos os itens obrigatórios serem respondidos.",
    "hi": "जब तक हर अनिवार्य आइटम का उत्तर नहीं दिया जाता, Submit ग्रे रहता है।"
  },
  "First you claim it: that is how everyone knows who is doing it.": {
    "it": "Prima la prendi in carico: così tutti sanno chi la sta facendo.",
    "es": "Primero la tomas: así todos saben quién la está haciendo.",
    "pt-BR": "Primeiro você assume a atividade: é assim que todos sabem quem a está fazendo.",
    "hi": "पहले आप इसे क्लेम करते हैं: इसी से सबको पता चलता है कि इसे कौन कर रहा है।"
  },
  "The SOP helps before you answer, not after.": {
    "it": "La SOP aiuta prima di rispondere, non dopo.",
    "es": "El SOP ayuda antes de responder, no después.",
    "pt-BR": "O SOP ajuda antes de você responder, não depois.",
    "hi": "SOP उत्तर देने से पहले मदद करता है, बाद में नहीं।"
  },
  "Submit turns on only when every required item is answered.": {
    "it": "Submit si attiva solo quando si è risposto a ogni voce obbligatoria.",
    "es": "Submit se activa solo cuando todos los ítems obligatorios tienen respuesta.",
    "pt-BR": "Submit só fica ativo quando todos os itens obrigatórios estão respondidos.",
    "hi": "Submit तभी चालू होता है जब हर अनिवार्य आइटम का उत्तर दिया गया हो।"
  },
  "That is the life of an activity: it is issued by its trigger, it has an owner and a procedure, it is submitted only when complete, and it stays on record.": {
    "it": "Questa è la vita di un'attività: la emette il suo trigger, ha un responsabile e una procedura, si invia solo quando è completa e resta registrata.",
    "es": "Esa es la vida de una actividad: la emite su disparador, tiene un responsable y un procedimiento, se envía solo cuando está completa y queda registrada.",
    "pt-BR": "Esta é a vida de uma atividade: é emitida pelo gatilho dela, tem um responsável e um procedimento, só é enviada quando completa e fica registrada.",
    "hi": "यही एक ऐक्टिविटी का पूरा सफ़र है: यह अपने ट्रिगर से जारी होती है, इसका एक ज़िम्मेदार व्यक्ति और एक प्रक्रिया होती है, यह पूरी होने पर ही सबमिट होती है, और रिकॉर्ड में रहती है।"
  },
  "Some rows are out of place. Move the amber ones and check again.": {
    "it": "Alcune righe sono fuori posto. Sposta quelle in ambra e controlla di nuovo.",
    "es": "Algunas filas están fuera de lugar. Mueve las de color ámbar y vuelve a verificar.",
    "pt-BR": "Algumas linhas estão fora do lugar. Mova as que estão em âmbar e verifique de novo.",
    "hi": "कुछ पंक्तियाँ अपनी जगह पर नहीं हैं। एम्बर रंग वाली पंक्तियों को खिसकाएँ और फिर से जाँचें।"
  },
  "When something goes wrong": {
    "it": "Quando qualcosa va storto",
    "es": "Cuando algo sale mal",
    "pt-BR": "Quando algo dá errado",
    "hi": "जब कुछ गलत हो जाए"
  },
  "You are at the flow wrapper with Jordan, the quality supervisor of the day shift. Pick the reply you would really give. A wrong reply is not a problem: Jordan will tell you why.": {
    "it": "Sei all'incartatrice flow-pack con Jordan, responsabile qualità del turno di giorno. Scegli la risposta che daresti davvero. Una risposta sbagliata non è un problema: Jordan ti dirà perché.",
    "es": "Estás en la envolvedora flow pack con Jordan, responsable de calidad del turno de día. Elige la respuesta que realmente darías. Una respuesta incorrecta no es un problema: Jordan te dirá por qué.",
    "pt-BR": "Você está na embaladora flow pack com Jordan, responsável pela qualidade do turno do dia. Escolha a resposta que você daria de verdade. Uma resposta errada não é problema: Jordan vai explicar por quê.",
    "hi": "आप फ्लो रैपर पर Jordan के साथ हैं, जो डे शिफ्ट के क्वालिटी सुपरवाइज़र हैं। वह उत्तर चुनें जो आप सच में देंगे। गलत उत्तर कोई समस्या नहीं है: Jordan आपको बताएँगे क्यों।"
  },
  "Quality supervisor · Day Shift": {
    "it": "Responsabile qualità · Day Shift",
    "es": "Responsable de calidad · Day Shift",
    "pt-BR": "Responsável pela qualidade · Day Shift",
    "hi": "क्वालिटी सुपरवाइज़र · Day Shift"
  },
  "The Wrap Seal & Code Check on the flow wrapper just came back FAIL. What happens now?": {
    "it": "Il Wrap Seal & Code Check sull'incartatrice flow-pack è appena tornato FAIL. Che cosa succede adesso?",
    "es": "La Wrap Seal & Code Check de la envolvedora flow pack acaba de dar FAIL. ¿Qué pasa ahora?",
    "pt-BR": "A Wrap Seal & Code Check da embaladora flow pack acabou de dar FAIL. O que acontece agora?",
    "hi": "फ्लो रैपर पर Wrap Seal & Code Check का परिणाम अभी FAIL आया है। अब क्या होता है?"
  },
  "Nothing. What matters is that it was done.": {
    "it": "Niente. L'importante è che sia stato fatto.",
    "es": "Nada. Lo que importa es que se hizo.",
    "pt-BR": "Nada. O que importa é que foi feita.",
    "hi": "कुछ नहीं। मायने यह रखता है कि यह किया गया।"
  },
  "A FAIL does not disappear: the activity is noncompliant, it shows in the Noncompliant counter and in the reports. Try again.": {
    "it": "Un FAIL non sparisce: l'attività è non conforme, compare nel contatore Noncompliant e nei report. Riprova.",
    "es": "Un FAIL no desaparece: la actividad es no conforme, aparece en el contador Noncompliant y en los reportes. Inténtalo de nuevo.",
    "pt-BR": "Um FAIL não desaparece: a atividade fica não conforme, aparece no contador Noncompliant e nos relatórios. Tente de novo.",
    "hi": "FAIL गायब नहीं होता: ऐक्टिविटी नॉन-कम्प्लायंट है, यह Noncompliant काउंटर में और रिपोर्ट में दिखती है। फिर से कोशिश करें।"
  },
  "It stays on record as noncompliant, and the SOP says what to do.": {
    "it": "Resta registrato come non conforme e la SOP dice che cosa fare.",
    "es": "Queda registrada como no conforme, y el SOP dice qué hacer.",
    "pt-BR": "Fica registrada como não conforme, e o SOP diz o que fazer.",
    "hi": "यह नॉन-कम्प्लायंट के रूप में रिकॉर्ड में रहती है, और SOP बताता है कि क्या करना है।"
  },
  "Exactly: recorded, visible, and the SOP says what to do under \"If out of spec\".": {
    "it": "Esatto: registrato, visibile e la SOP dice che cosa fare sotto \"If out of spec\".",
    "es": "Exacto: registrada, visible, y el SOP dice qué hacer en \"If out of spec\".",
    "pt-BR": "Exatamente: registrada, visível, e o SOP diz o que fazer em \"If out of spec\".",
    "hi": "बिल्कुल: रिकॉर्ड हुई, दिखाई देती है, और SOP \"If out of spec\" के तहत बताता है कि क्या करना है।"
  },
  "We redo it until it comes back PASS, and keep only that one.": {
    "it": "Lo rifacciamo finché non torna PASS, e teniamo solo quello.",
    "es": "La repetimos hasta que dé PASS y conservamos solo esa.",
    "pt-BR": "Refazemos até dar PASS e guardamos só essa.",
    "hi": "हम इसे तब तक दोबारा करते हैं जब तक PASS न आए, और केवल उसी को रखते हैं।"
  },
  "Every result stays on record: if the activity is reissued, the first one is kept as Superseded. Try again.": {
    "it": "Ogni risultato resta registrato: se l'attività viene riemessa, la prima viene conservata come Superseded. Riprova.",
    "es": "Cada resultado queda registrado: si la actividad se vuelve a emitir, la primera se conserva como Superseded. Inténtalo de nuevo.",
    "pt-BR": "Todo resultado fica registrado: se a atividade é emitida de novo, o primeiro resultado fica guardado como Superseded. Tente de novo.",
    "hi": "हर परिणाम रिकॉर्ड में रहता है: अगर ऐक्टिविटी दोबारा जारी की जाती है, तो पहली वाली Superseded के रूप में रखी जाती है। फिर से कोशिश करें।"
  },
  "And if nobody does the Metal Detector Challenge of the next two hours?": {
    "it": "E se nessuno fa il Metal Detector Challenge delle prossime due ore?",
    "es": "¿Y si nadie hace la Metal Detector Challenge de las próximas dos horas?",
    "pt-BR": "E se ninguém fizer a Metal Detector Challenge das próximas duas horas?",
    "hi": "और अगर अगले दो घंटे का Metal Detector Challenge कोई नहीं करता?"
  },
  "I can still fill it in later, whenever I want.": {
    "it": "Posso sempre compilarlo dopo, quando voglio.",
    "es": "Puedo completarla más tarde de todos modos, cuando quiera.",
    "pt-BR": "Ainda posso preenchê-la depois, quando eu quiser.",
    "hi": "मैं इसे बाद में भी, जब चाहूँ, भर सकता हूँ।"
  },
  "Not once its time is up: an expired activity can only be done again if someone reissues it. Try again.": {
    "it": "No, non dopo la scadenza: un'attività scaduta si può rifare solo se qualcuno la riemette. Riprova.",
    "es": "No, si ya se acabó su tiempo: una actividad vencida solo se puede volver a hacer si alguien la vuelve a emitir. Inténtalo de nuevo.",
    "pt-BR": "Não depois que o tempo acaba: uma atividade expirada só pode ser feita de novo se alguém a emitir novamente. Tente de novo.",
    "hi": "समय खत्म होने के बाद नहीं: एक्सपायर हुई ऐक्टिविटी तभी दोबारा की जा सकती है जब कोई उसे फिर से जारी करे। फिर से कोशिश करें।"
  },
  "TilliT stops the line until someone does it.": {
    "it": "TilliT ferma la linea finché qualcuno non lo fa.",
    "es": "TilliT detiene la línea hasta que alguien la haga.",
    "pt-BR": "O TilliT para a linha até alguém fazê-la.",
    "hi": "जब तक कोई इसे न करे, TilliT लाइन को रोक देता है।"
  },
  "TilliT does not stop the machines: it makes the missed activity visible. Try again.": {
    "it": "TilliT non ferma le macchine: rende visibile l'attività mancata. Riprova.",
    "es": "TilliT no detiene las máquinas: hace visible la actividad no realizada. Inténtalo de nuevo.",
    "pt-BR": "O TilliT não para as máquinas: ele torna visível a atividade não feita. Tente de novo.",
    "hi": "TilliT मशीनों को नहीं रोकता: यह छूटी हुई ऐक्टिविटी को सबके सामने दिखाता है। फिर से कोशिश करें।"
  },
  "When time is up it shows as expired, and it is in the reports.": {
    "it": "Quando il tempo scade compare come scaduto, ed è nei report.",
    "es": "Cuando se acaba el tiempo, aparece como vencida y está en los reportes.",
    "pt-BR": "Quando o tempo acaba, ela aparece como expirada e está nos relatórios.",
    "hi": "समय खत्म होने पर यह एक्सपायर्ड के रूप में दिखती है, और रिपोर्ट में होती है।"
  },
  "Right. The Activity Report shows the activities passed, failed, skipped or expired, by machine, order and shift.": {
    "it": "Giusto. L'Activity Report mostra le attività superate, non superate, saltate o scadute, per macchina, ordine e turno.",
    "es": "Correcto. El Activity Report muestra las actividades aprobadas, fallidas, omitidas o vencidas, por máquina, orden y turno.",
    "pt-BR": "Certo. O Activity Report mostra as atividades aprovadas, reprovadas, puladas ou expiradas, por máquina, ordem e turno.",
    "hi": "सही। Activity Report पास, फ़ेल, स्किप या एक्सपायर हुई ऐक्टिविटीज़ दिखाती है, मशीन, ऑर्डर और शिफ्ट के अनुसार।"
  },
  "That is an activity in TilliT: issued on time, with its procedure, on record.": {
    "it": "Questa è un'attività in TilliT: emessa in tempo, con la sua procedura, registrata.",
    "es": "Así es una actividad en TilliT: emitida a tiempo, con su procedimiento y registrada.",
    "pt-BR": "Isso é uma atividade no TilliT: emitida na hora certa, com o procedimento dela, registrada.",
    "hi": "यही TilliT में एक ऐक्टिविटी है: समय पर जारी, अपनी प्रक्रिया के साथ, रिकॉर्ड में।"
  },
  "Two exercises done: the life of an activity in order, and what happens when something goes wrong.": {
    "it": "Due esercizi fatti: la vita di un'attività in sequenza e che cosa succede quando qualcosa va storto.",
    "es": "Dos ejercicios hechos: la vida de una actividad en la secuencia correcta, y qué pasa cuando algo sale mal.",
    "pt-BR": "Dois exercícios feitos: a vida de uma atividade na sequência certa e o que acontece quando algo dá errado.",
    "hi": "दो अभ्यास पूरे: एक ऐक्टिविटी का पूरा सफ़र सही क्रम में, और कुछ गलत होने पर क्या होता है।"
  },
  "Who decides when the Metal Detector Challenge is due?": {
    "it": "Chi decide quando va fatto il Metal Detector Challenge?",
    "es": "¿Quién decide cuándo toca la Metal Detector Challenge?",
    "pt-BR": "Quem decide quando a Metal Detector Challenge deve ser feita?",
    "hi": "Metal Detector Challenge कब करना है, यह कौन तय करता है?"
  },
  "The operator, when they remember": {
    "it": "L'operatore, quando se lo ricorda",
    "es": "El operador, cuando se acuerda",
    "pt-BR": "O operador, quando se lembra",
    "hi": "ऑपरेटर, जब उसे याद आए"
  },
  "The configuration of the activity: it is issued every 2 hours": {
    "it": "La configurazione dell'attività: viene emessa ogni 2 ore",
    "es": "La configuración de la actividad: se emite cada 2 horas",
    "pt-BR": "A configuração da atividade: ela é emitida a cada 2 horas",
    "hi": "ऐक्टिविटी का कॉन्फ़िगरेशन: यह हर 2 घंटे में जारी होती है"
  },
  "The supervisor, at the end of the shift": {
    "it": "Il supervisore, a fine turno",
    "es": "El supervisor, al final del turno",
    "pt-BR": "O supervisor, no fim do turno",
    "hi": "सुपरवाइज़र, शिफ्ट के अंत में"
  },
  "The machine builder, from the wrapper's own panel": {
    "it": "Il costruttore della macchina, dal pannello dell'incartatrice",
    "es": "El fabricante de la máquina, desde el panel de la propia envolvedora",
    "pt-BR": "O fabricante da máquina, pelo painel da própria embaladora",
    "hi": "मशीन निर्माता, रैपर के अपने पैनल से"
  },
  "The \"when\" is set in the configuration of the activity, not left to memory.": {
    "it": "Il \"quando\" è impostato nella configurazione dell'attività, non affidato alla memoria.",
    "es": "El \"cuándo\" se define en la configuración de la actividad, no se deja a la memoria.",
    "pt-BR": "O \"quando\" é definido na configuração da atividade, não fica a cargo da memória.",
    "hi": "\"कब\" ऐक्टिविटी के कॉन्फ़िगरेशन में सेट होता है, याद पर नहीं छोड़ा जाता।"
  },
  "An interval issues it every 2 hours on the ACMA Flow Wrap.": {
    "it": "Un intervallo la emette ogni 2 ore sull'ACMA Flow Wrap.",
    "es": "Un intervalo la emite cada 2 horas en la ACMA Flow Wrap.",
    "pt-BR": "Um intervalo a emite a cada 2 horas na ACMA Flow Wrap.",
    "hi": "एक अंतराल इसे ACMA Flow Wrap पर हर 2 घंटे में जारी करता है।"
  },
  "Where does the operator find the procedure for the Wrap Seal & Code Check?": {
    "it": "Dove trova l'operatore la procedura per il Wrap Seal & Code Check?",
    "es": "¿Dónde encuentra el operador el procedimiento de la Wrap Seal & Code Check?",
    "pt-BR": "Onde o operador encontra o procedimento da Wrap Seal & Code Check?",
    "hi": "ऑपरेटर को Wrap Seal & Code Check की प्रक्रिया कहाँ मिलती है?"
  },
  "In the quality binder in the office": {
    "it": "Nel raccoglitore della qualità in ufficio",
    "es": "En la carpeta de calidad de la oficina",
    "pt-BR": "Na pasta da qualidade, no escritório",
    "hi": "ऑफ़िस में क्वालिटी बाइंडर में"
  },
  "They ask the supervisor": {
    "it": "La chiede al supervisore",
    "es": "Le pregunta al supervisor",
    "pt-BR": "Pergunta ao supervisor",
    "hi": "वे सुपरवाइज़र से पूछते हैं"
  },
  "On the activity itself, behind the book icon": {
    "it": "Sull'attività stessa, dietro l'icona del libro",
    "es": "En la propia actividad, detrás del ícono del libro",
    "pt-BR": "Na própria atividade, no ícone do livro",
    "hi": "ऐक्टिविटी में ही, किताब वाले आइकन में"
  },
  "Nowhere: they follow what they remember": {
    "it": "Da nessuna parte: segue quello che ricorda",
    "es": "En ninguna parte: sigue lo que recuerda",
    "pt-BR": "Em lugar nenhum: segue o que lembra",
    "hi": "कहीं नहीं: उन्हें जो याद है, वे उसी का पालन करते हैं"
  },
  "The procedure is attached to the activity, always in its current version. This one also says what to do if a result is out of spec.": {
    "it": "La procedura è allegata all'attività, sempre nella versione in vigore. Questa dice anche che cosa fare se un risultato è fuori specifica.",
    "es": "El procedimiento está adjunto a la actividad, siempre en su versión vigente. Este también dice qué hacer si un resultado está fuera de especificación.",
    "pt-BR": "O procedimento está anexado à atividade, sempre na versão atual. Este também diz o que fazer se um resultado estiver fora da especificação.",
    "hi": "प्रक्रिया ऐक्टिविटी से जुड़ी होती है, हमेशा अपने मौजूदा संस्करण में। यह प्रक्रिया यह भी बताती है कि अगर कोई परिणाम स्पेसिफिकेशन से बाहर हो तो क्या करना है।"
  },
  "SOP QS-05 opens from the book icon of the activity.": {
    "it": "La SOP QS-05 si apre dall'icona del libro dell'attività.",
    "es": "El SOP QS-05 se abre desde el ícono del libro de la actividad.",
    "pt-BR": "O SOP QS-05 abre pelo ícone do livro da atividade.",
    "hi": "SOP QS-05 ऐक्टिविटी के किताब वाले आइकन से खुलता है।"
  },
  "What happens to an activity submitted with a FAIL?": {
    "it": "Che cosa succede a un'attività inviata con un FAIL?",
    "es": "¿Qué pasa con una actividad enviada con un FAIL?",
    "pt-BR": "O que acontece com uma atividade enviada com um FAIL?",
    "hi": "FAIL के साथ सबमिट की गई ऐक्टिविटी का क्या होता है?"
  },
  "It stays on record as noncompliant, with who and when, and it shows in the reports": {
    "it": "Resta registrata come non conforme, con chi e quando, e compare nei report",
    "es": "Queda registrada como no conforme, con quién y cuándo, y aparece en los reportes",
    "pt-BR": "Fica registrada como não conforme, com quem e quando, e aparece nos relatórios",
    "hi": "यह नॉन-कम्प्लायंट के रूप में रिकॉर्ड में रहती है, किसने और कब किया के साथ, और रिपोर्ट में दिखती है"
  },
  "It can be deleted": {
    "it": "Si può cancellare",
    "es": "Se puede borrar",
    "pt-BR": "Pode ser excluída",
    "hi": "इसे डिलीट किया जा सकता है"
  },
  "TilliT stops working until it is repeated": {
    "it": "TilliT smette di funzionare finché non viene ripetuta",
    "es": "TilliT deja de funcionar hasta que se repita",
    "pt-BR": "O TilliT para de funcionar até ela ser repetida",
    "hi": "जब तक इसे दोहराया न जाए, TilliT काम करना बंद कर देता है"
  },
  "It disappears from the history": {
    "it": "Sparisce dallo storico",
    "es": "Desaparece del historial",
    "pt-BR": "Desaparece do histórico",
    "hi": "यह हिस्ट्री से गायब हो जाती है"
  },
  "Every result, PASS or FAIL, stays in the history of the order.": {
    "it": "Ogni risultato, PASS o FAIL, resta nello storico dell'ordine.",
    "es": "Cada resultado, PASS o FAIL, queda en el historial de la orden.",
    "pt-BR": "Todo resultado, PASS ou FAIL, fica no histórico da ordem.",
    "hi": "हर परिणाम, PASS हो या FAIL, ऑर्डर की हिस्ट्री में रहता है।"
  },
  "The Noncompliant counter of the Station View, and the activity reports.": {
    "it": "Il contatore Noncompliant della Station View e i report delle attività.",
    "es": "El contador Noncompliant de la Station View y los reportes de actividades.",
    "pt-BR": "O contador Noncompliant da Station View e os relatórios de atividades.",
    "hi": "Station View का Noncompliant काउंटर, और ऐक्टिविटी रिपोर्ट।"
  },
  "You completed an activity in TilliT": {
    "it": "Hai completato un'attività in TilliT",
    "es": "Completaste una actividad en TilliT",
    "pt-BR": "Você concluiu uma atividade no TilliT",
    "hi": "आपने TilliT में एक ऐक्टिविटी पूरी की"
  },
  "The Wrap Seal & Code Check was started by the order. You claimed it, read SOP QS-05 and submitted it: TilliT kept who, when, which machine and which order.": {
    "it": "Il Wrap Seal & Code Check è stato avviato dall'ordine. L'hai preso in carico, hai letto la SOP QS-05 e l'hai inviato: TilliT ha conservato chi, quando, quale macchina e quale ordine.",
    "es": "La orden inició la Wrap Seal & Code Check. La tomaste, leíste el SOP QS-05 y la enviaste: TilliT guardó quién, cuándo, qué máquina y qué orden.",
    "pt-BR": "A Wrap Seal & Code Check foi iniciada pela ordem. Você a assumiu, leu o SOP QS-05 e a enviou: o TilliT guardou quem, quando, qual máquina e qual ordem.",
    "hi": "Wrap Seal & Code Check ऑर्डर से शुरू हुई। आपने इसे क्लेम किया, SOP QS-05 पढ़ा और इसे सबमिट किया: TilliT ने दर्ज किया कि किसने, कब, किस मशीन पर और किस ऑर्डर में।"
  },
  "Quality activities at the machine": {
    "it": "Attività di qualità alla macchina",
    "es": "Actividades de calidad en la máquina",
    "pt-BR": "Atividades de qualidade na máquina",
    "hi": "मशीन पर क्वालिटी ऐक्टिविटीज़"
  },
  "Who decides which activities a machine has?": {
    "it": "Chi decide quali attività ha una macchina?",
    "es": "¿Quién decide qué actividades tiene una máquina?",
    "pt-BR": "Quem decide quais atividades uma máquina tem?",
    "hi": "किसी मशीन की कौन-सी ऐक्टिविटीज़ हैं, यह कौन तय करता है?"
  },
  "Whoever configures TilliT defines each activity once, in Settings: its items, where it applies, and what starts it (an event, an interval, a shift start). From then on TilliT issues it when its trigger happens.": {
    "it": "Chi configura TilliT definisce ogni attività una volta, nelle Settings: le sue voci, dove si applica e che cosa la avvia (un evento, un intervallo, un inizio turno). Da lì in poi TilliT la emette quando scatta il suo trigger.",
    "es": "Quien configura TilliT define cada actividad una sola vez, en Settings: sus ítems, dónde se aplica y qué la inicia (un evento, un intervalo, un inicio de turno). A partir de ahí, TilliT la emite cuando ocurre su disparador.",
    "pt-BR": "Quem configura o TilliT define cada atividade uma vez, em Settings: os itens dela, onde se aplica e o que a inicia (um evento, um intervalo, um início de turno). A partir daí, o TilliT a emite quando o gatilho dela acontece.",
    "hi": "TilliT को कॉन्फ़िगर करने वाला व्यक्ति हर ऐक्टिविटी को एक बार Settings में सेट करता है: उसके आइटम, वह कहाँ लागू होती है, और वह किस कारण शुरू होती है (एक इवेंट, एक अंतराल, शिफ्ट की शुरुआत)। उसके बाद से TilliT उसे तब जारी करता है जब उसका ट्रिगर होता है।"
  },
  "What happens if nobody does the activity in time?": {
    "it": "Che cosa succede se nessuno fa l'attività in tempo?",
    "es": "¿Qué pasa si nadie hace la actividad a tiempo?",
    "pt-BR": "O que acontece se ninguém fizer a atividade a tempo?",
    "hi": "अगर कोई समय पर ऐक्टिविटी नहीं करता तो क्या होता है?"
  },
  "It expires: it can no longer be filled in unless someone reissues it, and it shows in the Activity Report.": {
    "it": "Scade: non si può più compilare, a meno che qualcuno non la riemetta, e compare nell'Activity Report.",
    "es": "Vence: ya no se puede completar a menos que alguien la vuelva a emitir, y aparece en el Activity Report.",
    "pt-BR": "Ela expira: não pode mais ser preenchida, a menos que alguém a emita de novo, e aparece no Activity Report.",
    "hi": "वह एक्सपायर हो जाती है: जब तक कोई उसे दोबारा जारी न करे, उसे भरा नहीं जा सकता, और वह Activity Report में दिखती है।"
  },
  "What if an item fails?": {
    "it": "E se una voce non passa?",
    "es": "¿Y si un ítem falla?",
    "pt-BR": "E se um item for reprovado?",
    "hi": "अगर कोई आइटम फ़ेल हो जाए तो?"
  },
  "The activity is recorded as noncompliant. What to do next is in its procedure: for the Wrap Seal & Code Check, stop the wrapper and call the shift lead.": {
    "it": "L'attività viene registrata come non conforme. Che cosa fare dopo è nella sua procedura: per il Wrap Seal & Code Check, fermare l'incartatrice e chiamare il capoturno.",
    "es": "La actividad se registra como no conforme. Qué hacer después está en su procedimiento: para la Wrap Seal & Code Check, detener la envolvedora y llamar al jefe de turno.",
    "pt-BR": "A atividade é registrada como não conforme. O que fazer em seguida está no procedimento dela: na Wrap Seal & Code Check, pare a embaladora e chame o líder de turno.",
    "hi": "ऐक्टिविटी नॉन-कम्प्लायंट के रूप में रिकॉर्ड होती है। आगे क्या करना है, यह उसकी प्रक्रिया में है: Wrap Seal & Code Check के लिए, रैपर रोकें और शिफ्ट लीड को बुलाएँ।"
  }
});
// ── /cap3 ──
// ── cap1 ── Line to machine in the Cockpit
Object.assign(PKX_DICT, {
  "Chapter 1 · Packaging Line Training": {
    "it": "Capitolo 1 · Packaging Line Training",
    "es": "Capítulo 1 · Packaging Line Training",
    "pt-BR": "Capítulo 1 · Packaging Line Training",
    "hi": "अध्याय 1 · Packaging Line Training"
  },
  "Behind you is the Bars & Snacks line, in the Pack Lines area: a flow wrapper, a cartoner, a case packer and a palletiser, from four different builders. It is 7:45 and order PO-20015 is running. In this chapter you read the line in the Cockpit of TilliT, from the site down to each machine.": {
    "it": "Alle tue spalle c'è la linea Bars & Snacks, nell'area Pack Lines: un'incartatrice flow-pack, un'astucciatrice, un'incartonatrice e un pallettizzatore, di quattro costruttori diversi. Sono le 7:45 ed è in corso l'ordine PO-20015. In questo capitolo leggi la linea nel Cockpit di TilliT, dal sito fino a ogni macchina.",
    "es": "Detrás de ti está la línea Bars & Snacks, en el área Pack Lines: una envolvedora flow pack, una encartonadora, una encajonadora y una paletizadora, de cuatro fabricantes distintos. Son las 7:45 y está en curso la orden PO-20015. En este capítulo lees la línea en el Cockpit de TilliT, desde la planta hasta cada máquina.",
    "pt-BR": "Atrás de você está a linha Bars & Snacks, na área Pack Lines: uma embaladora flow pack, uma encartuchadeira, uma encaixotadora e uma paletizadora, de quatro fabricantes diferentes. São 7:45 e a ordem PO-20015 está em andamento. Neste capítulo, você lê a linha no Cockpit do TilliT, da planta até cada máquina.",
    "hi": "आपके पीछे Pack Lines एरिया की Bars & Snacks लाइन है: एक फ्लो रैपर, एक कार्टनर, एक केस पैकर और एक पैलेटाइज़र, चार अलग-अलग निर्माताओं के। अभी 7:45 बजे हैं और ऑर्डर PO-20015 चल रहा है। इस अध्याय में आप TilliT के Cockpit में लाइन को पढ़ेंगे, साइट से लेकर हर मशीन तक।"
  },
  "Go from the site down to the line behind you": {
    "it": "Scendere dal sito fino alla linea alle tue spalle",
    "es": "Bajar desde la planta hasta la línea que está detrás de ti",
    "pt-BR": "Descer da planta até a linha atrás de você",
    "hi": "साइट से नीचे उतरकर अपने पीछे वाली लाइन तक पहुँचें"
  },
  "Read a machine card at a glance": {
    "it": "Leggere a colpo d'occhio la card di una macchina",
    "es": "Leer de un vistazo la tarjeta de una máquina",
    "pt-BR": "Ler de relance o card de uma máquina",
    "hi": "एक नज़र में मशीन का कार्ड पढ़ें"
  },
  "See how one order runs on four machines": {
    "it": "Vedere come un ordine gira su quattro macchine",
    "es": "Ver cómo una orden se ejecuta en cuatro máquinas",
    "pt-BR": "Ver como uma ordem roda em quatro máquinas",
    "hi": "देखें कि एक ऑर्डर चार मशीनों पर कैसे चलता है"
  },
  "From the site to your line": {
    "it": "Dal sito alla tua linea",
    "es": "De la planta a tu línea",
    "pt-BR": "Da planta à sua linha",
    "hi": "साइट से आपकी लाइन तक"
  },
  "This is the Cockpit of the Pack Expo Chicago site. It opens at the top level: the production areas of the site.": {
    "it": "Questo è il Cockpit del sito Pack Expo Chicago. Si apre al livello più alto: le aree di produzione del sito.",
    "es": "Este es el Cockpit de la planta Pack Expo Chicago. Se abre en el nivel más alto: las áreas de producción de la planta.",
    "pt-BR": "Este é o Cockpit da planta Pack Expo Chicago. Ele abre no nível mais alto: as áreas de produção da planta.",
    "hi": "यह Pack Expo Chicago साइट का Cockpit है। यह सबसे ऊपरी स्तर पर खुलता है: साइट के प्रोडक्शन एरिया।"
  },
  "Go down with Drill-down, level by level": {
    "it": "Scendi con Drill-down, un livello alla volta",
    "es": "Baja con Drill-down, nivel por nivel",
    "pt-BR": "Desça com Drill-down, nível por nível",
    "hi": "Drill-down से एक-एक स्तर नीचे जाएँ"
  },
  "Use Station View to go down a level": {
    "it": "Usare Station View per scendere di un livello",
    "es": "Usar Station View para bajar un nivel",
    "pt-BR": "Usar a Station View para descer um nível",
    "hi": "एक स्तर नीचे जाने के लिए Station View इस्तेमाल करना"
  },
  "Site, area, line, machine: this is the asset hierarchy of TilliT. Every order, count and activity belongs to one asset of it.": {
    "it": "Sito, area, linea, macchina: è la gerarchia degli asset di TilliT. Ogni ordine, conteggio e attività appartiene a uno dei suoi asset.",
    "es": "Planta, área, línea, máquina: es la jerarquía de activos de TilliT. Cada orden, conteo y actividad pertenece a uno de sus activos.",
    "pt-BR": "Planta, área, linha, máquina: esta é a hierarquia de ativos do TilliT. Cada ordem, contagem e atividade pertence a um ativo dessa hierarquia.",
    "hi": "साइट, एरिया, लाइन, मशीन: यह TilliT की एसेट हायरार्की है। हर ऑर्डर, गिनती और ऐक्टिविटी इसके किसी एक एसेट से जुड़ी होती है।"
  },
  "Two Drill-downs take you from the whole site to the machines of your line.": {
    "it": "Con due Drill-down passi dall'intero sito alle macchine della tua linea.",
    "es": "Con dos Drill-down pasas de toda la planta a las máquinas de tu línea.",
    "pt-BR": "Com dois Drill-downs você vai da planta inteira às máquinas da sua linha.",
    "hi": "दो Drill-down आपको पूरी साइट से आपकी लाइन की मशीनों तक ले जाते हैं।"
  },
  "Open Pack Lines": {
    "it": "Apri Pack Lines",
    "es": "Abre Pack Lines",
    "pt-BR": "Abra Pack Lines",
    "hi": "Pack Lines खोलें"
  },
  "Three production areas: Pack Lines, Stand Alone, Processing. The packaging lines are in Pack Lines: click its Drill-down.": {
    "it": "Tre aree di produzione: Pack Lines, Stand Alone, Processing. Le linee di confezionamento sono in Pack Lines: clicca il suo Drill-down.",
    "es": "Tres áreas de producción: Pack Lines, Stand Alone, Processing. Las líneas de empaque están en Pack Lines: haz clic en su Drill-down.",
    "pt-BR": "Três áreas de produção: Pack Lines, Stand Alone, Processing. As linhas de embalagem estão em Pack Lines: clique no Drill-down dela.",
    "hi": "तीन प्रोडक्शन एरिया: Pack Lines, Stand Alone, Processing। पैकेजिंग लाइनें Pack Lines में हैं: उसके Drill-down पर क्लिक करें।"
  },
  "One level down: the packaging lines of the Pack Lines area.": {
    "it": "Un livello più giù: le linee di confezionamento dell'area Pack Lines.",
    "es": "Un nivel más abajo: las líneas de empaque del área Pack Lines.",
    "pt-BR": "Um nível abaixo: as linhas de embalagem da área Pack Lines.",
    "hi": "एक स्तर नीचे: Pack Lines एरिया की पैकेजिंग लाइनें।"
  },
  "Not this one. Click Drill-down on the Pack Lines card.": {
    "it": "Non questa. Clicca Drill-down sulla card Pack Lines.",
    "es": "Esta no. Haz clic en Drill-down en la tarjeta Pack Lines.",
    "pt-BR": "Não é esta. Clique em Drill-down no card Pack Lines.",
    "hi": "यह नहीं। Pack Lines कार्ड के Drill-down पर क्लिक करें।"
  },
  "Drill-down is the right-hand button at the bottom of the Pack Lines card.": {
    "it": "Drill-down è il bottone a destra in fondo alla card Pack Lines.",
    "es": "Drill-down es el botón de la derecha, en la parte de abajo de la tarjeta Pack Lines.",
    "pt-BR": "Drill-down é o botão da direita, na parte de baixo do card Pack Lines.",
    "hi": "Drill-down, Pack Lines कार्ड में नीचे दाईं ओर वाला बटन है।"
  },
  "To see the lines of Pack Lines, click Drill-down.": {
    "it": "Per vedere le linee di Pack Lines, clicca Drill-down.",
    "es": "Para ver las líneas de Pack Lines, haz clic en Drill-down.",
    "pt-BR": "Para ver as linhas de Pack Lines, clique em Drill-down.",
    "hi": "Pack Lines की लाइनें देखने के लिए Drill-down पर क्लिक करें।"
  },
  "The packaging lines are in Pack Lines.": {
    "it": "Le linee di confezionamento sono in Pack Lines.",
    "es": "Las líneas de empaque están en Pack Lines.",
    "pt-BR": "As linhas de embalagem estão em Pack Lines.",
    "hi": "पैकेजिंग लाइनें Pack Lines में हैं।"
  },
  "Open Bars & Snacks": {
    "it": "Apri Bars & Snacks",
    "es": "Abre Bars & Snacks",
    "pt-BR": "Abra Bars & Snacks",
    "hi": "Bars & Snacks खोलें"
  },
  "Three packaging lines. Bars & Snacks, the green one, is the line behind you: click its Drill-down.": {
    "it": "Tre linee di confezionamento. Bars & Snacks, quella verde, è la linea alle tue spalle: clicca il suo Drill-down.",
    "es": "Tres líneas de empaque. Bars & Snacks, la verde, es la línea que está detrás de ti: haz clic en su Drill-down.",
    "pt-BR": "Três linhas de embalagem. Bars & Snacks, a verde, é a linha atrás de você: clique no Drill-down dela.",
    "hi": "तीन पैकेजिंग लाइनें। Bars & Snacks, हरे रंग वाली, आपके पीछे वाली लाइन है: उसके Drill-down पर क्लिक करें।"
  },
  "The machines of Bars & Snacks, one card each: ACMA Flow Wrap, RAJ Cartoner, MGS Case Packer, FLX Palletiser.": {
    "it": "Le macchine di Bars & Snacks, una card ciascuna: ACMA Flow Wrap, RAJ Cartoner, MGS Case Packer, FLX Palletiser.",
    "es": "Las máquinas de Bars & Snacks, una tarjeta cada una: ACMA Flow Wrap, RAJ Cartoner, MGS Case Packer, FLX Palletiser.",
    "pt-BR": "As máquinas de Bars & Snacks, um card para cada uma: ACMA Flow Wrap, RAJ Cartoner, MGS Case Packer, FLX Palletiser.",
    "hi": "Bars & Snacks की मशीनें, हर एक का अपना कार्ड: ACMA Flow Wrap, RAJ Cartoner, MGS Case Packer, FLX Palletiser।"
  },
  "Not this one. Click Drill-down on Bars & Snacks, the green card.": {
    "it": "Non questa. Clicca Drill-down su Bars & Snacks, la card verde.",
    "es": "Esta no. Haz clic en Drill-down en Bars & Snacks, la tarjeta verde.",
    "pt-BR": "Não é esta. Clique em Drill-down em Bars & Snacks, o card verde.",
    "hi": "यह नहीं। हरे कार्ड Bars & Snacks के Drill-down पर क्लिक करें।"
  },
  "Drill-down is the right-hand button at the bottom of the green Bars & Snacks card.": {
    "it": "Drill-down è il bottone a destra in fondo alla card verde Bars & Snacks.",
    "es": "Drill-down es el botón de la derecha, en la parte de abajo de la tarjeta verde Bars & Snacks.",
    "pt-BR": "Drill-down é o botão da direita, na parte de baixo do card verde Bars & Snacks.",
    "hi": "Drill-down, हरे Bars & Snacks कार्ड में नीचे दाईं ओर वाला बटन है।"
  },
  "That line has no order running now. The line behind you is Bars & Snacks, the green card.": {
    "it": "Su quella linea ora non è in corso nessun ordine. La linea alle tue spalle è Bars & Snacks, la card verde.",
    "es": "Esa línea no tiene ninguna orden en curso ahora. La línea que está detrás de ti es Bars & Snacks, la tarjeta verde.",
    "pt-BR": "Essa linha não tem nenhuma ordem rodando agora. A linha atrás de você é Bars & Snacks, o card verde.",
    "hi": "उस लाइन पर अभी कोई ऑर्डर नहीं चल रहा है। आपके पीछे वाली लाइन Bars & Snacks है, हरा कार्ड।"
  },
  "Go down to the machines first: click Drill-down.": {
    "it": "Prima scendi alle macchine: clicca Drill-down.",
    "es": "Primero baja a las máquinas: haz clic en Drill-down.",
    "pt-BR": "Primeiro desça até as máquinas: clique em Drill-down.",
    "hi": "पहले मशीनों तक नीचे जाएँ: Drill-down पर क्लिक करें।"
  },
  "Reading a machine card": {
    "it": "Leggere la card di una macchina",
    "es": "Leer la tarjeta de una máquina",
    "pt-BR": "Ler o card de uma máquina",
    "hi": "मशीन का कार्ड पढ़ना"
  },
  "Each machine has its own card. Read the one of the flow wrapper, from top to bottom.": {
    "it": "Ogni macchina ha la sua card. Leggi quella dell'incartatrice flow-pack, dall'alto in basso.",
    "es": "Cada máquina tiene su propia tarjeta. Lee la de la envolvedora flow pack, de arriba abajo.",
    "pt-BR": "Cada máquina tem o seu card. Leia o da embaladora flow pack, de cima para baixo.",
    "hi": "हर मशीन का अपना कार्ड होता है। फ्लो रैपर का कार्ड ऊपर से नीचे तक पढ़ें।"
  },
  "Read the card from top to bottom": {
    "it": "Leggi la card dall'alto in basso",
    "es": "Lee la tarjeta de arriba abajo",
    "pt-BR": "Leia o card de cima para baixo",
    "hi": "कार्ड को ऊपर से नीचे तक पढ़ें"
  },
  "Stop at the colour: the card tells you more": {
    "it": "Fermarsi al colore: la card dice di più",
    "es": "Quedarse solo en el color: la tarjeta dice más",
    "pt-BR": "Parar na cor: o card diz mais",
    "hi": "सिर्फ रंग देखकर रुक जाना: कार्ड इससे ज़्यादा बताता है"
  },
  "The card shows the state, the order, the activities, OEE, speed and quantities of the machine, updated from its data.": {
    "it": "La card mostra lo stato, l'ordine, le attività, l'OEE, la velocità e le quantità della macchina, aggiornati dai suoi dati.",
    "es": "La tarjeta muestra el estado, la orden, las actividades, el OEE, la velocidad y las cantidades de la máquina, actualizados con sus datos.",
    "pt-BR": "O card mostra o estado, a ordem, as atividades, o OEE, a velocidade e as quantidades da máquina, atualizados a partir dos dados dela.",
    "hi": "कार्ड मशीन की स्थिति, ऑर्डर, ऐक्टिविटीज़, OEE, स्पीड और मात्राएँ दिखाता है, जो उसके डेटा से अपडेट होती हैं।"
  },
  "Header, Activities Open, OEE and speed, quantities: one card tells you how a machine is doing.": {
    "it": "Intestazione, Activities Open, OEE e velocità, quantità: una card ti dice come sta andando una macchina.",
    "es": "Encabezado, Activities Open, OEE y velocidad, cantidades: una tarjeta te dice cómo va una máquina.",
    "pt-BR": "Cabeçalho, Activities Open, OEE e velocidade, quantidades: um card mostra como a máquina está.",
    "hi": "हेडर, Activities Open, OEE और स्पीड, मात्राएँ: एक कार्ड बताता है कि मशीन कैसी चल रही है।"
  },
  "The machine card": {
    "it": "La card della macchina",
    "es": "La tarjeta de la máquina",
    "pt-BR": "O card da máquina",
    "hi": "मशीन का कार्ड"
  },
  "Click each part of the ACMA Flow Wrap card: each one is explained here.": {
    "it": "Clicca ogni parte della card ACMA Flow Wrap: qui trovi la spiegazione di ciascuna.",
    "es": "Haz clic en cada parte de la tarjeta ACMA Flow Wrap: aquí se explica cada una.",
    "pt-BR": "Clique em cada parte do card da ACMA Flow Wrap: cada uma é explicada aqui.",
    "hi": "ACMA Flow Wrap कार्ड के हर हिस्से पर क्लिक करें: हर हिस्सा यहाँ समझाया गया है।"
  },
  "Stay on the ACMA Flow Wrap card for now: click the parts listed here.": {
    "it": "Per ora resta sulla card ACMA Flow Wrap: clicca le parti elencate qui.",
    "es": "Por ahora quédate en la tarjeta ACMA Flow Wrap: haz clic en las partes de esta lista.",
    "pt-BR": "Por enquanto, fique no card da ACMA Flow Wrap: clique nas partes listadas aqui.",
    "hi": "अभी ACMA Flow Wrap कार्ड पर ही रहें: यहाँ दिए गए हिस्सों पर क्लिक करें।"
  },
  "The header": {
    "it": "L'intestazione",
    "es": "El encabezado",
    "pt-BR": "O cabeçalho",
    "hi": "हेडर"
  },
  "The name of the machine, its state, RUNNING, and how long it has been in it: 2 hours. Under it, the order it is working on, with the product: PO-20015, CoWare Protein Crisp Chocolate 25g x8.": {
    "it": "Il nome della macchina, il suo stato, RUNNING, e da quanto tempo è in quello stato: 2 ore. Sotto, l'ordine su cui sta lavorando, con il prodotto: PO-20015, CoWare Protein Crisp Chocolate 25g x8.",
    "es": "El nombre de la máquina, su estado, RUNNING, y cuánto tiempo lleva así: 2 horas. Debajo, la orden en la que está trabajando, con el producto: PO-20015, CoWare Protein Crisp Chocolate 25g x8.",
    "pt-BR": "O nome da máquina, o estado, RUNNING, e há quanto tempo ela está nesse estado: 2 horas. Embaixo, a ordem em que ela está trabalhando, com o produto: PO-20015, CoWare Protein Crisp Chocolate 25g x8.",
    "hi": "मशीन का नाम, उसकी स्थिति, RUNNING, और वह कितने समय से इस स्थिति में है: 2 घंटे। उसके नीचे वह ऑर्डर जिस पर मशीन काम कर रही है, प्रोडक्ट के साथ: PO-20015, CoWare Protein Crisp Chocolate 25g x8।"
  },
  "The colours": {
    "it": "I colori",
    "es": "Los colores",
    "pt-BR": "As cores",
    "hi": "रंग"
  },
  "The colour of the header is the state. Click each colour to see the card change.": {
    "it": "Il colore dell'intestazione è lo stato. Clicca ogni colore per vedere come cambia la card.",
    "es": "El color del encabezado es el estado. Haz clic en cada color para ver cómo cambia la tarjeta.",
    "pt-BR": "A cor do cabeçalho é o estado. Clique em cada cor para ver o card mudar.",
    "hi": "हेडर का रंग ही स्थिति है। हर रंग पर क्लिक करके देखें कि कार्ड कैसे बदलता है।"
  },
  "Red points to the machine itself, yellow upstream, orange downstream.": {
    "it": "Il rosso indica la macchina stessa, il giallo a monte, l'arancione a valle.",
    "es": "El rojo señala la propia máquina; el amarillo, aguas arriba; el naranja, aguas abajo.",
    "pt-BR": "O vermelho aponta para a própria máquina, o amarelo para as máquinas anteriores, o laranja para as seguintes.",
    "hi": "लाल रंग खुद मशीन की ओर इशारा करता है, पीला अपस्ट्रीम की ओर, नारंगी डाउनस्ट्रीम की ओर।"
  },
  "Each site sets up its own states and colours: these are the ones of this course.": {
    "it": "Ogni sito configura i propri stati e colori: questi sono quelli di questo corso.",
    "es": "Cada planta configura sus propios estados y colores: estos son los de este curso.",
    "pt-BR": "Cada planta configura os próprios estados e cores: estes são os deste curso.",
    "hi": "हर साइट अपनी स्थितियाँ और रंग खुद सेट करती है: ये इस कोर्स के हैं।"
  },
  "Green · RUNNING": {
    "it": "Verde · RUNNING",
    "es": "Verde · RUNNING",
    "pt-BR": "Verde · RUNNING",
    "hi": "हरा · RUNNING"
  },
  "Producing normally": {
    "it": "Produce normalmente",
    "es": "Produce normalmente",
    "pt-BR": "Produzindo normalmente",
    "hi": "नॉर्मल प्रोडक्शन चल रहा है"
  },
  "Red · STOPPED": {
    "it": "Rosso · STOPPED",
    "es": "Rojo · STOPPED",
    "pt-BR": "Vermelho · STOPPED",
    "hi": "लाल · STOPPED"
  },
  "Fault or manual stop": {
    "it": "Guasto o fermo manuale",
    "es": "Falla o paro manual",
    "pt-BR": "Falha ou parada manual",
    "hi": "खराबी या मैन्युअल स्टॉप"
  },
  "Yellow · STARVATION": {
    "it": "Giallo · STARVATION",
    "es": "Amarillo · STARVATION",
    "pt-BR": "Amarelo · STARVATION",
    "hi": "पीला · STARVATION"
  },
  "Running, but no product arriving from upstream": {
    "it": "In marcia, ma da monte non arriva prodotto",
    "es": "En marcha, pero no llega producto desde aguas arriba",
    "pt-BR": "Rodando, mas sem produto chegando das máquinas anteriores",
    "hi": "चल रही है, लेकिन अपस्ट्रीम से प्रोडक्ट नहीं आ रहा"
  },
  "Orange · BLOCKED": {
    "it": "Arancione · BLOCKED",
    "es": "Naranja · BLOCKED",
    "pt-BR": "Laranja · BLOCKED",
    "hi": "नारंगी · BLOCKED"
  },
  "Downstream buffer full: product cannot move forward": {
    "it": "Buffer a valle pieno: il prodotto non può avanzare",
    "es": "Buffer aguas abajo lleno: el producto no puede avanzar",
    "pt-BR": "Pulmão de saída cheio: o produto não consegue avançar",
    "hi": "डाउनस्ट्रीम बफ़र भरा हुआ: प्रोडक्ट आगे नहीं बढ़ सकता"
  },
  "Grey": {
    "it": "Grigio",
    "es": "Gris",
    "pt-BR": "Cinza",
    "hi": "ग्रे"
  },
  "No active order or no data": {
    "it": "Nessun ordine attivo o nessun dato",
    "es": "Sin orden activa o sin datos",
    "pt-BR": "Sem ordem ativa ou sem dados",
    "hi": "कोई सक्रिय ऑर्डर नहीं या कोई डेटा नहीं"
  },
  "Activities Open": {
    "it": "Activities Open",
    "es": "Activities Open",
    "pt-BR": "Activities Open",
    "hi": "Activities Open"
  },
  "Activities Open: 2. Two activities of this machine are open. You find them in the Station View of the machine.": {
    "it": "Activities Open: 2. Due attività di questa macchina sono aperte. Le trovi nella Station View della macchina.",
    "es": "Activities Open: 2. Dos actividades de esta máquina están abiertas. Las encuentras en la Station View de la máquina.",
    "pt-BR": "Activities Open: 2. Duas atividades desta máquina estão abertas. Você as encontra na Station View da máquina.",
    "hi": "Activities Open: 2। इस मशीन की दो ऐक्टिविटीज़ खुली हैं। ये आपको मशीन के Station View में मिलेंगी।"
  },
  "OEE and speed": {
    "it": "OEE e velocità",
    "es": "OEE y velocidad",
    "pt-BR": "OEE e velocidade",
    "hi": "OEE और स्पीड"
  },
  "OEE puts availability, performance and quality in one number: 84%. Next to it, the current speed of the machine: 20.400.": {
    "it": "L'OEE riunisce disponibilità, prestazioni e qualità in un solo numero: 84%. Accanto, la velocità attuale della macchina: 20.400.",
    "es": "El OEE reúne disponibilidad, rendimiento y calidad en un solo número: 84%. Al lado, la velocidad actual de la máquina: 20.400.",
    "pt-BR": "O OEE junta disponibilidade, desempenho e qualidade em um só número: 84%. Ao lado, a velocidade atual da máquina: 20.400.",
    "hi": "OEE उपलब्धता, परफ़ॉर्मेंस और क्वालिटी को एक संख्या में जोड़ता है: 84%। उसके बगल में मशीन की मौजूदा स्पीड: 20,400।"
  },
  "Quantities": {
    "it": "Quantità",
    "es": "Cantidades",
    "pt-BR": "Quantidades",
    "hi": "मात्राएँ"
  },
  "The order is 72% done: 34.560 of 48.000 Bar, the unit of this machine. Under it, Shift and Daily: the count of the shift and of the day.": {
    "it": "L'ordine è al 72%: 34.560 su 48.000 Bar, l'unità di questa macchina. Sotto, Shift e Daily: il conteggio del turno e del giorno.",
    "es": "La orden va al 72%: 34.560 de 48.000 Bar, la unidad de esta máquina. Debajo, Shift y Daily: el conteo del turno y del día.",
    "pt-BR": "A ordem está 72% concluída: 34.560 de 48.000 Bar, a unidade desta máquina. Embaixo, Shift e Daily: a contagem do turno e do dia.",
    "hi": "ऑर्डर 72% पूरा है: 48,000 में से 34,560 Bar, जो इस मशीन की इकाई है। उसके नीचे Shift और Daily: शिफ्ट और दिन की गिनती।"
  },
  "Three ways to see the line": {
    "it": "Tre modi di vedere la linea",
    "es": "Tres formas de ver la línea",
    "pt-BR": "Três formas de ver a linha",
    "hi": "लाइन देखने के तीन तरीके"
  },
  "Three buttons at the top left change how all the cards look. You have just read the Expanded view.": {
    "it": "Tre bottoni in alto a sinistra cambiano l'aspetto di tutte le card. Hai appena letto la vista Expanded.",
    "es": "Tres botones arriba a la izquierda cambian cómo se ven todas las tarjetas. Acabas de leer la vista Expanded.",
    "pt-BR": "Três botões no canto superior esquerdo mudam a aparência de todos os cards. Você acabou de ler a visualização Expanded.",
    "hi": "ऊपर बाईं ओर के तीन बटन सभी कार्डों का रूप बदलते हैं। आपने अभी Expanded व्यू पढ़ा।"
  },
  "Pick the view for what you need": {
    "it": "Scegli la vista che ti serve",
    "es": "Elige la vista según lo que necesitas",
    "pt-BR": "Escolha a visualização de acordo com o que você precisa",
    "hi": "अपनी ज़रूरत के हिसाब से व्यू चुनें"
  },
  "Expect different data in each view": {
    "it": "Aspettarsi dati diversi in ogni vista",
    "es": "Suponer que cada vista tiene datos distintos",
    "pt-BR": "Esperar dados diferentes em cada visualização",
    "hi": "हर व्यू में अलग डेटा की उम्मीद करना"
  },
  "Every view shows the same machines: only the amount of detail on each card changes.": {
    "it": "Ogni vista mostra le stesse macchine: cambia solo il livello di dettaglio di ogni card.",
    "es": "Todas las vistas muestran las mismas máquinas: solo cambia el nivel de detalle de cada tarjeta.",
    "pt-BR": "Todas as visualizações mostram as mesmas máquinas: só muda o nível de detalhe de cada card.",
    "hi": "हर व्यू में वही मशीनें दिखती हैं: बस हर कार्ड पर डिटेल कम-ज़्यादा होती है।"
  },
  "Expanded: the full card. Graphical: performance hour by hour. Compact: the whole line at a glance.": {
    "it": "Expanded: la card completa. Graphical: le prestazioni ora per ora. Compact: tutta la linea a colpo d'occhio.",
    "es": "Expanded: la tarjeta completa. Graphical: el rendimiento hora por hora. Compact: toda la línea de un vistazo.",
    "pt-BR": "Expanded: o card completo. Graphical: o desempenho hora a hora. Compact: a linha inteira de relance.",
    "hi": "Expanded: पूरा कार्ड। Graphical: घंटे-दर-घंटे परफ़ॉर्मेंस। Compact: एक नज़र में पूरी लाइन।"
  },
  "The view buttons": {
    "it": "I bottoni delle viste",
    "es": "Los botones de vista",
    "pt-BR": "Os botões de visualização",
    "hi": "व्यू बटन"
  },
  "Three buttons at the top left, next to Filter. You are in Expanded: try the other two.": {
    "it": "Tre bottoni in alto a sinistra, accanto a Filter. Sei in Expanded: prova gli altri due.",
    "es": "Tres botones arriba a la izquierda, junto a Filter. Estás en Expanded: prueba los otros dos.",
    "pt-BR": "Três botões no canto superior esquerdo, ao lado de Filter. Você está em Expanded: experimente os outros dois.",
    "hi": "ऊपर बाईं ओर, Filter के बगल में तीन बटन। आप Expanded में हैं: बाकी दो आज़माएँ।"
  },
  "Stay on the three view buttons for now, at the top left.": {
    "it": "Per ora resta sui tre bottoni delle viste, in alto a sinistra.",
    "es": "Por ahora quédate en los tres botones de vista, arriba a la izquierda.",
    "pt-BR": "Por enquanto, fique nos três botões de visualização, no canto superior esquerdo.",
    "hi": "अभी ऊपर बाईं ओर के तीन व्यू बटनों पर ही रहें।"
  },
  "Graphical": {
    "it": "Graphical",
    "es": "Graphical",
    "pt-BR": "Graphical",
    "hi": "Graphical"
  },
  "Each card gets a bar chart: one bar per hour, with its performance value. You see which hours ran well and which did not.": {
    "it": "In ogni card compare un grafico a barre: una barra per ora, con il suo valore di prestazione. Vedi quali ore sono andate bene e quali no.",
    "es": "Cada tarjeta muestra una gráfica de barras: una barra por hora, con su valor de rendimiento. Ves qué horas salieron bien y cuáles no.",
    "pt-BR": "Cada card ganha um gráfico de barras: uma barra por hora, com o valor de desempenho. Você vê quais horas foram bem e quais não.",
    "hi": "हर कार्ड में एक बार चार्ट आ जाता है: हर घंटे का अपना एक बार, उसकी परफ़ॉर्मेंस वैल्यू के साथ। आप देखते हैं कि कौन-से घंटे अच्छे चले और कौन-से नहीं।"
  },
  "Compact": {
    "it": "Compact",
    "es": "Compact",
    "pt-BR": "Compact",
    "hi": "Compact"
  },
  "Smaller cards: the four machines of the line on one screen, each with its state, order, OEE, speed and quantity.": {
    "it": "Card più piccole: le quattro macchine della linea in una sola schermata, ognuna con stato, ordine, OEE, velocità e quantità.",
    "es": "Tarjetas más pequeñas: las cuatro máquinas de la línea en una sola pantalla, cada una con su estado, orden, OEE, velocidad y cantidad.",
    "pt-BR": "Cards menores: as quatro máquinas da linha em uma só tela, cada uma com estado, ordem, OEE, velocidade e quantidade.",
    "hi": "छोटे कार्ड: लाइन की चारों मशीनें एक ही स्क्रीन पर, हर एक अपनी स्थिति, ऑर्डर, OEE, स्पीड और मात्रा के साथ।"
  },
  "One order, four machines": {
    "it": "Un ordine, quattro macchine",
    "es": "Una orden, cuatro máquinas",
    "pt-BR": "Uma ordem, quatro máquinas",
    "hi": "एक ऑर्डर, चार मशीनें"
  },
  "PO-20015 came from the ERP as one order for the line. See how it appears on each machine.": {
    "it": "PO-20015 è arrivato dall'ERP come un solo ordine per la linea. Guarda come compare su ogni macchina.",
    "es": "La PO-20015 llegó del ERP como una sola orden para la línea. Mira cómo aparece en cada máquina.",
    "pt-BR": "A PO-20015 veio do ERP como uma única ordem para a linha. Veja como ela aparece em cada máquina.",
    "hi": "PO-20015 ERP से लाइन के लिए एक ही ऑर्डर के रूप में आया। देखें कि यह हर मशीन पर कैसे दिखता है।"
  },
  "Read the order and the unit on each card": {
    "it": "Leggi l'ordine e l'unità su ogni card",
    "es": "Lee la orden y la unidad en cada tarjeta",
    "pt-BR": "Leia a ordem e a unidade em cada card",
    "hi": "हर कार्ड पर ऑर्डर और इकाई पढ़ें"
  },
  "Expect the same unit on every machine": {
    "it": "Aspettarsi la stessa unità su ogni macchina",
    "es": "Suponer que todas las máquinas usan la misma unidad",
    "pt-BR": "Esperar a mesma unidade em todas as máquinas",
    "hi": "हर मशीन पर एक जैसी इकाई की उम्मीद करना"
  },
  "In TilliT an order is planned for the line: the same order runs on each machine, split into one operation per machine.": {
    "it": "In TilliT un ordine si pianifica per la linea: lo stesso ordine gira su ogni macchina, diviso in un'operazione per macchina.",
    "es": "En TilliT una orden se planifica para la línea: la misma orden se ejecuta en cada máquina, dividida en una operación por máquina.",
    "pt-BR": "No TilliT, uma ordem é planejada para a linha: a mesma ordem roda em cada máquina, dividida em uma operação por máquina.",
    "hi": "TilliT में ऑर्डर लाइन के लिए प्लान किया जाता है: वही ऑर्डर हर मशीन पर चलता है, हर मशीन के लिए एक ऑपरेशन में बँटकर।"
  },
  "One order for the line, split into one operation per machine, each counted in the unit of its machine.": {
    "it": "Un ordine per la linea, diviso in un'operazione per macchina, ognuna contata nell'unità della sua macchina.",
    "es": "Una orden para la línea, dividida en una operación por máquina, cada una contada en la unidad de su máquina.",
    "pt-BR": "Uma ordem para a linha, dividida em uma operação por máquina, cada uma contada na unidade da sua máquina.",
    "hi": "लाइन के लिए एक ऑर्डर, हर मशीन के लिए एक ऑपरेशन में बँटा हुआ, हर ऑपरेशन अपनी मशीन की इकाई में गिना जाता है।"
  },
  "You have read the line from the site to the machine": {
    "it": "Hai letto la linea dal sito alla macchina",
    "es": "Leíste la línea desde la planta hasta la máquina",
    "pt-BR": "Você leu a linha da planta até a máquina",
    "hi": "आपने लाइन को साइट से मशीन तक पढ़ लिया"
  },
  "Two clicks down, one card per machine, one order on four machines.": {
    "it": "Due clic per scendere, una card per macchina, un ordine su quattro macchine.",
    "es": "Dos clics hacia abajo, una tarjeta por máquina, una orden en cuatro máquinas.",
    "pt-BR": "Dois cliques para descer, um card por máquina, uma ordem em quatro máquinas.",
    "hi": "नीचे जाने के लिए दो क्लिक, हर मशीन का एक कार्ड, चार मशीनों पर एक ऑर्डर।"
  },
  "From the site to the machine": {
    "it": "Dal sito alla macchina",
    "es": "De la planta a la máquina",
    "pt-BR": "Da planta à máquina",
    "hi": "साइट से मशीन तक"
  },
  "SITE": {
    "it": "SITO",
    "es": "PLANTA",
    "pt-BR": "PLANTA",
    "hi": "साइट"
  },
  "AREA": {
    "it": "AREA",
    "es": "ÁREA",
    "pt-BR": "ÁREA",
    "hi": "एरिया"
  },
  "LINE": {
    "it": "LINEA",
    "es": "LÍNEA",
    "pt-BR": "LINHA",
    "hi": "लाइन"
  },
  "MACHINE": {
    "it": "MACCHINA",
    "es": "MÁQUINA",
    "pt-BR": "MÁQUINA",
    "hi": "मशीन"
  },
  "The four cards": {
    "it": "Le quattro card",
    "es": "Las cuatro tarjetas",
    "pt-BR": "Os quatro cards",
    "hi": "चार कार्ड"
  },
  "Look at the four cards. On the RAJ Cartoner, the second one, click the order under its header and its quantity.": {
    "it": "Guarda le quattro card. Sulla card della RAJ Cartoner, la seconda, clicca l'ordine sotto l'intestazione e la sua quantità.",
    "es": "Mira las cuatro tarjetas. En la de la RAJ Cartoner, la segunda, haz clic en la orden debajo del encabezado y en su cantidad.",
    "pt-BR": "Olhe os quatro cards. No card da RAJ Cartoner, o segundo, clique na ordem embaixo do cabeçalho e na quantidade dela.",
    "hi": "चारों कार्ड देखें। दूसरे कार्ड, RAJ Cartoner, पर हेडर के नीचे वाले ऑर्डर पर और उसकी मात्रा पर क्लिक करें।"
  },
  "Stay on the four machine cards for now: click the parts listed here.": {
    "it": "Per ora resta sulle quattro card delle macchine: clicca le parti elencate qui.",
    "es": "Por ahora quédate en las cuatro tarjetas de máquina: haz clic en las partes de esta lista.",
    "pt-BR": "Por enquanto, fique nos quatro cards das máquinas: clique nas partes listadas aqui.",
    "hi": "अभी चारों मशीन कार्डों पर ही रहें: यहाँ दिए गए हिस्सों पर क्लिक करें।"
  },
  "Same order": {
    "it": "Stesso ordine",
    "es": "Misma orden",
    "pt-BR": "Mesma ordem",
    "hi": "वही ऑर्डर"
  },
  "The same order on all four machines. TilliT splits the order of the line into one operation per machine: wrapping, cartoning, case packing, palletising.": {
    "it": "Lo stesso ordine su tutte e quattro le macchine. TilliT divide l'ordine della linea in un'operazione per macchina: incarto, astucciamento, incartonamento, pallettizzazione.",
    "es": "La misma orden en las cuatro máquinas. TilliT divide la orden de la línea en una operación por máquina: envoltura, encartonado, encajonado, paletizado.",
    "pt-BR": "A mesma ordem nas quatro máquinas. O TilliT divide a ordem da linha em uma operação por máquina: embalagem flow pack, encartuchamento, encaixotamento, paletização.",
    "hi": "चारों मशीनों पर वही ऑर्डर। TilliT लाइन के ऑर्डर को हर मशीन के लिए एक ऑपरेशन में बाँटता है: रैपिंग, कार्टनिंग, केस पैकिंग, पैलेटाइज़िंग।"
  },
  "Four units": {
    "it": "Quattro unità",
    "es": "Cuatro unidades",
    "pt-BR": "Quatro unidades",
    "hi": "चार इकाइयाँ"
  },
  "Each machine counts the order in its own unit: Bar, Carton, Case, Case. The counts come from the machines and land on the order running on each one. In this line each operator starts it in the Station View of their machine: that is chapter 2.": {
    "it": "Ogni macchina conta l'ordine nella sua unità: Bar, Carton, Case, Case. I conteggi arrivano dalle macchine e finiscono sull'ordine in corso su ciascuna. In questa linea ogni operatore lo avvia nella Station View della sua macchina: lo vedi nel capitolo 2.",
    "es": "Cada máquina cuenta la orden en su propia unidad: Bar, Carton, Case, Case. Los conteos vienen de las máquinas y se registran en la orden en curso en cada una. En esta línea cada operador la inicia en la Station View de su máquina: de eso trata el capítulo 2.",
    "pt-BR": "Cada máquina conta a ordem na própria unidade: Bar, Carton, Case, Case. As contagens vêm das máquinas e são registradas na ordem que está rodando em cada uma. Nesta linha, cada operador a inicia na Station View da própria máquina: esse é o tema do capítulo 2.",
    "hi": "हर मशीन ऑर्डर को अपनी यूनिट में गिनती है: Bar, Carton, Case, Case। गिनती मशीनों से आती है और हर मशीन पर चल रहे ऑर्डर में दर्ज होती है। इस लाइन में हर ऑपरेटर इसे अपनी मशीन के Station View में शुरू करता है: यह अध्याय 2 में है।"
  },
  "Put the line in order": {
    "it": "Metti in sequenza le macchine della linea",
    "es": "Pon la línea en la secuencia correcta",
    "pt-BR": "Coloque a linha na sequência certa",
    "hi": "लाइन को क्रम में लगाएँ"
  },
  "Put the four machines in the order the product goes through them.": {
    "it": "Metti le quattro macchine nella sequenza in cui le attraversa il prodotto.",
    "es": "Pon las cuatro máquinas en la secuencia en que el producto pasa por ellas.",
    "pt-BR": "Coloque as quatro máquinas na sequência em que o produto passa por elas.",
    "hi": "चारों मशीनों को उस क्रम में लगाएँ जिसमें प्रोडक्ट उनसे होकर गुज़रता है।"
  },
  "Look at the line behind you if you need to.": {
    "it": "Se ti serve, guarda la linea alle tue spalle.",
    "es": "Mira la línea que está detrás de ti si lo necesitas.",
    "pt-BR": "Se precisar, olhe a linha atrás de você.",
    "hi": "ज़रूरत हो तो अपने पीछे वाली लाइन देखें।"
  },
  "ACMA Flow Wrap": {
    "it": "ACMA Flow Wrap",
    "es": "ACMA Flow Wrap",
    "pt-BR": "ACMA Flow Wrap",
    "hi": "ACMA Flow Wrap"
  },
  "RAJ Cartoner": {
    "it": "RAJ Cartoner",
    "es": "RAJ Cartoner",
    "pt-BR": "RAJ Cartoner",
    "hi": "RAJ Cartoner"
  },
  "MGS Case Packer": {
    "it": "MGS Case Packer",
    "es": "MGS Case Packer",
    "pt-BR": "MGS Case Packer",
    "hi": "MGS Case Packer"
  },
  "FLX Palletiser": {
    "it": "FLX Palletiser",
    "es": "FLX Palletiser",
    "pt-BR": "FLX Palletiser",
    "hi": "FLX Palletiser"
  },
  "The bar has to be wrapped before it goes into a carton: look at the line behind you.": {
    "it": "La barretta va incartata prima di entrare in un astuccio: guarda la linea alle tue spalle.",
    "es": "La barra tiene que estar envuelta antes de entrar en un estuche: mira la línea que está detrás de ti.",
    "pt-BR": "A barra precisa ser embalada antes de entrar em um cartucho: olhe a linha atrás de você.",
    "hi": "कार्टन में जाने से पहले बार का रैप होना ज़रूरी है: अपने पीछे वाली लाइन देखें।"
  },
  "The pallet is the end of the line: it takes the full cases.": {
    "it": "Il pallet è la fine della linea: riceve i cartoni pieni.",
    "es": "El pallet es el final de la línea: recibe las cajas llenas.",
    "pt-BR": "O palete é o fim da linha: ele recebe as caixas cheias.",
    "hi": "पैलेट लाइन का आखिरी हिस्सा है: वह भरे हुए केस लेता है।"
  },
  "The cases are filled with cartons: the cartoner comes first.": {
    "it": "I cartoni si riempiono di astucci: prima viene l'astucciatrice.",
    "es": "Las cajas se llenan con estuches: primero va la encartonadora.",
    "pt-BR": "As caixas são enchidas com cartuchos: a encartuchadeira vem antes.",
    "hi": "केस कार्टनों से भरे जाते हैं: कार्टनर पहले आता है।"
  },
  "That is the line: the bar is wrapped, put in cartons, the cartons in cases, the cases on a pallet.": {
    "it": "Questa è la linea: la barretta viene incartata, messa negli astucci, gli astucci nei cartoni, i cartoni su un pallet.",
    "es": "Esa es la línea: la barra se envuelve, se pone en estuches, los estuches en cajas, las cajas en un pallet.",
    "pt-BR": "Essa é a linha: a barra é embalada, colocada em cartuchos, os cartuchos em caixas, as caixas em um palete.",
    "hi": "यही लाइन है: बार रैप होती है, कार्टनों में जाती है, कार्टन केसों में, और केस पैलेट पर।"
  },
  "What does the colour tell you?": {
    "it": "Che cosa ti dice il colore?",
    "es": "¿Qué te dice el color?",
    "pt-BR": "O que a cor está dizendo?",
    "hi": "रंग आपको क्या बताता है?"
  },
  "You are in front of the Cockpit with Sam, the production supervisor. Pick the reply you would really give. A wrong reply is not a problem: Sam will tell you why.": {
    "it": "Sei davanti al Cockpit con Sam, responsabile di produzione. Scegli la risposta che daresti davvero. Una risposta sbagliata non è un problema: Sam ti dirà perché.",
    "es": "Estás frente al Cockpit con Sam, responsable de producción. Elige la respuesta que realmente darías. Una respuesta incorrecta no es un problema: Sam te dirá por qué.",
    "pt-BR": "Você está diante do Cockpit com Sam, responsável pela produção. Escolha a resposta que você daria de verdade. Uma resposta errada não é problema: Sam vai explicar por quê.",
    "hi": "आप Cockpit के सामने Sam के साथ हैं, जो प्रोडक्शन सुपरवाइज़र हैं। वह उत्तर चुनें जो आप सच में देंगे। गलत उत्तर कोई समस्या नहीं है: Sam आपको बताएँगे क्यों।"
  },
  "Sam Rivera": {
    "it": "Sam Rivera",
    "es": "Sam Rivera",
    "pt-BR": "Sam Rivera",
    "hi": "Sam Rivera"
  },
  "Production supervisor · Day Shift": {
    "it": "Responsabile di produzione · Day Shift",
    "es": "Responsable de producción · Day Shift",
    "pt-BR": "Responsável pela produção · Day Shift",
    "hi": "प्रोडक्शन सुपरवाइज़र · Day Shift"
  },
  "The RAJ Cartoner card turns yellow: STARVATION. The operator wants to call the cartoner technician. What do you tell them?": {
    "it": "La card della RAJ Cartoner diventa gialla: STARVATION. L'operatore vuole chiamare il tecnico dell'astucciatrice. Che cosa rispondi?",
    "es": "La tarjeta de la RAJ Cartoner se pone amarilla: STARVATION. El operador quiere llamar al técnico de la encartonadora. ¿Qué le dices?",
    "pt-BR": "O card da RAJ Cartoner fica amarelo: STARVATION. O operador quer chamar o técnico da encartuchadeira. O que você responde?",
    "hi": "RAJ Cartoner का कार्ड पीला हो जाता है: STARVATION। ऑपरेटर कार्टनर के तकनीशियन को बुलाना चाहते हैं। आप उनसे क्या कहेंगे?"
  },
  "Call the technician: the cartoner has a problem.": {
    "it": "Chiama il tecnico: l'astucciatrice ha un problema.",
    "es": "Llama al técnico: la encartonadora tiene un problema.",
    "pt-BR": "Chame o técnico: a encartuchadeira tem um problema.",
    "hi": "तकनीशियन को बुलाएँ: कार्टनर में समस्या है।"
  },
  "Starvation means it is waiting for product from upstream. Try again.": {
    "it": "Starvation vuol dire che sta aspettando prodotto da monte. Riprova.",
    "es": "Starvation significa que está esperando producto desde aguas arriba. Inténtalo de nuevo.",
    "pt-BR": "Starvation significa que ela está esperando produto das máquinas anteriores. Tente de novo.",
    "hi": "Starvation का मतलब है कि मशीन अपस्ट्रीम से प्रोडक्ट का इंतज़ार कर रही है। फिर से कोशिश करें।"
  },
  "Look upstream first: Starvation means no product is arriving.": {
    "it": "Prima guarda a monte: Starvation vuol dire che non arriva prodotto.",
    "es": "Primero mira aguas arriba: Starvation significa que no llega producto.",
    "pt-BR": "Olhe primeiro para as máquinas anteriores: Starvation significa que não está chegando produto.",
    "hi": "पहले अपस्ट्रीम देखें: Starvation का मतलब है कि प्रोडक्ट नहीं आ रहा।"
  },
  "Exactly: yellow sends you upstream, orange downstream.": {
    "it": "Esatto: il giallo ti manda a monte, l'arancione a valle.",
    "es": "Exacto: el amarillo te manda aguas arriba, el naranja aguas abajo.",
    "pt-BR": "Exato: o amarelo manda você olhar as máquinas anteriores, o laranja as seguintes.",
    "hi": "बिल्कुल: पीला आपको अपस्ट्रीम भेजता है, नारंगी डाउनस्ट्रीम।"
  },
  "Wait until it turns red.": {
    "it": "Aspetta che diventi rossa.",
    "es": "Espera a que se ponga roja.",
    "pt-BR": "Espere até ficar vermelho.",
    "hi": "लाल होने तक इंतज़ार करें।"
  },
  "Yellow already tells you where to look. Try again.": {
    "it": "Il giallo ti dice già dove guardare. Riprova.",
    "es": "El amarillo ya te dice dónde mirar. Inténtalo de nuevo.",
    "pt-BR": "O amarelo já diz onde olhar. Tente de novo.",
    "hi": "पीला पहले ही बता देता है कि कहाँ देखना है। फिर से कोशिश करें।"
  },
  "A visitor asks: \"My machines are from different builders, and some are old. Can TilliT read them?\"": {
    "it": "Una persona in visita ti chiede: \"Le mie macchine sono di costruttori diversi, e alcune sono vecchie. TilliT riesce a leggerle?\"",
    "es": "Un visitante pregunta: \"Mis máquinas son de distintos fabricantes, y algunas son antiguas. ¿TilliT puede leerlas?\"",
    "pt-BR": "Um visitante pergunta: \"Minhas máquinas são de fabricantes diferentes, e algumas são antigas. O TilliT consegue ler os dados delas?\"",
    "hi": "एक विज़िटर पूछते हैं: \"मेरी मशीनें अलग-अलग निर्माताओं की हैं, और कुछ पुरानी हैं। क्या TilliT उन्हें पढ़ सकता है?\""
  },
  "Yes: the Edge reads the common industrial protocols, and what has no signal can be entered by hand.": {
    "it": "Sì: l'Edge legge i protocolli industriali più diffusi, e quello che non ha un segnale si può inserire a mano.",
    "es": "Sí: el Edge lee los protocolos industriales más comunes, y lo que no tiene señal se puede ingresar a mano.",
    "pt-BR": "Sim: o Edge lê os protocolos industriais mais comuns, e o que não tem sinal pode ser inserido manualmente.",
    "hi": "हाँ: Edge आम इंडस्ट्रियल प्रोटोकॉल पढ़ता है, और जिसका कोई सिग्नल नहीं है उसे हाथ से दर्ज किया जा सकता है।"
  },
  "Right. Four builders here, one line in the Cockpit.": {
    "it": "Giusto. Qui quattro costruttori, una sola linea nel Cockpit.",
    "es": "Correcto. Aquí hay cuatro fabricantes y una sola línea en el Cockpit.",
    "pt-BR": "Certo. Aqui são quatro fabricantes e uma só linha no Cockpit.",
    "hi": "सही। यहाँ चार निर्माता हैं, और Cockpit में एक ही लाइन।"
  },
  "Only if they are all from the same builder.": {
    "it": "Solo se sono tutte dello stesso costruttore.",
    "es": "Solo si todas son del mismo fabricante.",
    "pt-BR": "Só se forem todas do mesmo fabricante.",
    "hi": "सिर्फ तभी जब सभी एक ही निर्माता की हों।"
  },
  "This line has four builders and TilliT reads them all. Try again.": {
    "it": "Questa linea ha quattro costruttori e TilliT le legge tutte. Riprova.",
    "es": "Esta línea tiene cuatro fabricantes y TilliT las lee todas. Inténtalo de nuevo.",
    "pt-BR": "Esta linha tem quatro fabricantes e o TilliT lê todas. Tente de novo.",
    "hi": "इस लाइन में चार निर्माता हैं और TilliT सभी को पढ़ता है। फिर से कोशिश करें।"
  },
  "No, old machines must be replaced first.": {
    "it": "No, prima bisogna sostituire le macchine vecchie.",
    "es": "No, primero hay que reemplazar las máquinas antiguas.",
    "pt-BR": "Não, as máquinas antigas precisam ser substituídas antes.",
    "hi": "नहीं, पहले पुरानी मशीनें बदलनी होंगी।"
  },
  "TilliT does not replace the machines: it connects them. Try again.": {
    "it": "TilliT non sostituisce le macchine: le collega. Riprova.",
    "es": "TilliT no reemplaza las máquinas: las conecta. Inténtalo de nuevo.",
    "pt-BR": "O TilliT não substitui as máquinas: ele as conecta. Tente de novo.",
    "hi": "TilliT मशीनों की जगह नहीं लेता: उन्हें जोड़ता है। फिर से कोशिश करें।"
  },
  "That is the point: four machines, one system.": {
    "it": "È proprio questo: quattro macchine, un solo sistema.",
    "es": "Esa es la idea: cuatro máquinas, un solo sistema.",
    "pt-BR": "É isso: quatro máquinas, um só sistema.",
    "hi": "यही बात है: चार मशीनें, एक सिस्टम।"
  },
  "Two exercises done: the line in order, and where to look when a card turns yellow.": {
    "it": "Due esercizi fatti: la linea in sequenza e dove guardare quando una card diventa gialla.",
    "es": "Dos ejercicios hechos: la línea en la secuencia correcta, y dónde mirar cuando una tarjeta se pone amarilla.",
    "pt-BR": "Dois exercícios feitos: a sequência da linha e onde olhar quando um card fica amarelo.",
    "hi": "दो अभ्यास पूरे: लाइन सही क्रम में, और कार्ड पीला होने पर कहाँ देखना है।"
  },
  "You are in the Cockpit, on the areas of the site. How do you reach the card of the ACMA Flow Wrap?": {
    "it": "Sei nel Cockpit, sulle aree del sito. Come arrivi alla card dell'ACMA Flow Wrap?",
    "es": "Estás en el Cockpit, en las áreas de la planta. ¿Cómo llegas a la tarjeta de la ACMA Flow Wrap?",
    "pt-BR": "Você está no Cockpit, nas áreas da planta. Como você chega ao card da ACMA Flow Wrap?",
    "hi": "आप Cockpit में, साइट के एरिया पर हैं। ACMA Flow Wrap के कार्ड तक कैसे पहुँचेंगे?"
  },
  "Station View on Pack Lines": {
    "it": "Station View su Pack Lines",
    "es": "Station View en Pack Lines",
    "pt-BR": "Station View em Pack Lines",
    "hi": "Pack Lines पर Station View"
  },
  "Drill-down on Pack Lines, then Drill-down on Bars & Snacks": {
    "it": "Drill-down su Pack Lines, poi Drill-down su Bars & Snacks",
    "es": "Drill-down en Pack Lines, luego Drill-down en Bars & Snacks",
    "pt-BR": "Drill-down em Pack Lines, depois Drill-down em Bars & Snacks",
    "hi": "Pack Lines पर Drill-down, फिर Bars & Snacks पर Drill-down"
  },
  "Drill-down on Pack Lines, then Station View on Bars & Snacks": {
    "it": "Drill-down su Pack Lines, poi Station View su Bars & Snacks",
    "es": "Drill-down en Pack Lines, luego Station View en Bars & Snacks",
    "pt-BR": "Drill-down em Pack Lines, depois Station View em Bars & Snacks",
    "hi": "Pack Lines पर Drill-down, फिर Bars & Snacks पर Station View"
  },
  "Filter, then Pack Lines": {
    "it": "Filter, poi Pack Lines",
    "es": "Filter, luego Pack Lines",
    "pt-BR": "Filter, depois Pack Lines",
    "hi": "Filter, फिर Pack Lines"
  },
  "Each Drill-down goes one level down: areas, lines, machines. Station View opens the view of that asset, it does not go down.": {
    "it": "Ogni Drill-down scende di un livello: aree, linee, macchine. Station View apre la vista di quell'asset, non scende.",
    "es": "Cada Drill-down baja un nivel: áreas, líneas, máquinas. Station View abre la vista de ese activo, no baja.",
    "pt-BR": "Cada Drill-down desce um nível: áreas, linhas, máquinas. A Station View abre a visualização daquele ativo, não desce.",
    "hi": "हर Drill-down एक स्तर नीचे जाता है: एरिया, लाइनें, मशीनें। Station View उस एसेट का व्यू खोलता है, नीचे नहीं जाता।"
  },
  "Cockpit › Pack Lines › Bars & Snacks.": {
    "it": "Cockpit › Pack Lines › Bars & Snacks.",
    "es": "Cockpit › Pack Lines › Bars & Snacks.",
    "pt-BR": "Cockpit › Pack Lines › Bars & Snacks.",
    "hi": "Cockpit › Pack Lines › Bars & Snacks."
  },
  "For the same order, the ACMA Flow Wrap shows 34.560/48.000 Bar and the RAJ Cartoner 4.320/6.000 Carton. Why?": {
    "it": "Per lo stesso ordine, l'ACMA Flow Wrap mostra 34.560/48.000 Bar e la RAJ Cartoner 4.320/6.000 Carton. Perché?",
    "es": "Para la misma orden, la ACMA Flow Wrap muestra 34.560/48.000 Bar y la RAJ Cartoner 4.320/6.000 Carton. ¿Por qué?",
    "pt-BR": "Para a mesma ordem, a ACMA Flow Wrap mostra 34.560/48.000 Bar e a RAJ Cartoner 4.320/6.000 Carton. Por quê?",
    "hi": "एक ही ऑर्डर के लिए ACMA Flow Wrap 34,560/48,000 Bar दिखाता है और RAJ Cartoner 4,320/6,000 Carton। क्यों?"
  },
  "The cartoner is behind schedule": {
    "it": "L'astucciatrice è in ritardo",
    "es": "La encartonadora va atrasada",
    "pt-BR": "A encartuchadeira está atrasada",
    "hi": "कार्टनर शेड्यूल से पीछे है"
  },
  "One of the two cards is wrong": {
    "it": "Una delle due card è sbagliata",
    "es": "Una de las dos tarjetas está mal",
    "pt-BR": "Um dos dois cards está errado",
    "hi": "दोनों में से एक कार्ड गलत है"
  },
  "Each machine counts the order in its own unit": {
    "it": "Ogni macchina conta l'ordine nella sua unità",
    "es": "Cada máquina cuenta la orden en su propia unidad",
    "pt-BR": "Cada máquina conta a ordem na própria unidade",
    "hi": "हर मशीन ऑर्डर को अपनी इकाई में गिनती है"
  },
  "The cartoner is running a different order": {
    "it": "L'astucciatrice sta lavorando un altro ordine",
    "es": "La encartonadora está produciendo otra orden",
    "pt-BR": "A encartuchadeira está rodando outra ordem",
    "hi": "कार्टनर कोई दूसरा ऑर्डर चला रहा है"
  },
  "The same order runs on each machine, split into one operation per machine: each one is counted in the unit of its machine.": {
    "it": "Lo stesso ordine gira su ogni macchina, diviso in un'operazione per macchina: ognuna è contata nell'unità della sua macchina.",
    "es": "La misma orden se ejecuta en cada máquina, dividida en una operación por máquina: cada una se cuenta en la unidad de su máquina.",
    "pt-BR": "A mesma ordem roda em cada máquina, dividida em uma operação por máquina: cada uma é contada na unidade da sua máquina.",
    "hi": "वही ऑर्डर हर मशीन पर चलता है, हर मशीन के लिए एक ऑपरेशन में बँटकर: हर ऑपरेशन अपनी मशीन की इकाई में गिना जाता है।"
  },
  "The quantity on each machine card.": {
    "it": "La quantità su ogni card di macchina.",
    "es": "La cantidad en cada tarjeta de máquina.",
    "pt-BR": "A quantidade em cada card de máquina.",
    "hi": "हर मशीन कार्ड पर मात्रा।"
  },
  "Where do the counts of the RAJ Cartoner land?": {
    "it": "Dove finiscono i conteggi della RAJ Cartoner?",
    "es": "¿Dónde se registran los conteos de la RAJ Cartoner?",
    "pt-BR": "Onde são registradas as contagens da RAJ Cartoner?",
    "hi": "RAJ Cartoner की गिनती कहाँ दर्ज होती है?"
  },
  "On the last order sent by the ERP": {
    "it": "Sull'ultimo ordine inviato dall'ERP",
    "es": "En la última orden enviada por el ERP",
    "pt-BR": "Na última ordem enviada pelo ERP",
    "hi": "ERP द्वारा भेजे गए आखिरी ऑर्डर पर"
  },
  "On the order running on the RAJ Cartoner": {
    "it": "Sull'ordine in corso sulla RAJ Cartoner",
    "es": "En la orden en curso en la RAJ Cartoner",
    "pt-BR": "Na ordem que está rodando na RAJ Cartoner",
    "hi": "RAJ Cartoner पर चल रहे ऑर्डर पर"
  },
  "On the order of the ACMA Flow Wrap": {
    "it": "Sull'ordine dell'ACMA Flow Wrap",
    "es": "En la orden de la ACMA Flow Wrap",
    "pt-BR": "Na ordem da ACMA Flow Wrap",
    "hi": "ACMA Flow Wrap के ऑर्डर पर"
  },
  "On the order written down at the end of the shift": {
    "it": "Sull'ordine annotato a fine turno",
    "es": "En la orden anotada al final del turno",
    "pt-BR": "Na ordem anotada no fim do turno",
    "hi": "शिफ्ट के अंत में लिखे गए ऑर्डर पर"
  },
  "Counts land on the order running on each machine.": {
    "it": "I conteggi finiscono sull'ordine in corso su ciascuna macchina.",
    "es": "Los conteos se registran en la orden en curso en cada máquina.",
    "pt-BR": "As contagens são registradas na ordem que está rodando em cada máquina.",
    "hi": "गिनती हर मशीन पर चल रहे ऑर्डर में दर्ज होती है।"
  },
  "The order and the quantity on each machine card.": {
    "it": "L'ordine e la quantità su ogni card di macchina.",
    "es": "La orden y la cantidad en cada tarjeta de máquina.",
    "pt-BR": "A ordem e a quantidade em cada card de máquina.",
    "hi": "हर मशीन कार्ड पर ऑर्डर और मात्रा।"
  },
  "You saw one line, four machines, one system": {
    "it": "Hai visto una linea, quattro macchine, un solo sistema",
    "es": "Viste una línea, cuatro máquinas, un solo sistema",
    "pt-BR": "Você viu uma linha, quatro máquinas, um só sistema",
    "hi": "आपने देखा: एक लाइन, चार मशीनें, एक सिस्टम"
  },
  "From the site to the machine with two Drill-downs, one card per machine, one order split into one operation per machine.": {
    "it": "Dal sito alla macchina con due Drill-down, una card per macchina, un ordine diviso in un'operazione per macchina.",
    "es": "De la planta a la máquina con dos Drill-down, una tarjeta por máquina, una orden dividida en una operación por máquina.",
    "pt-BR": "Da planta à máquina com dois Drill-downs, um card por máquina, uma ordem dividida em uma operação por máquina.",
    "hi": "दो Drill-down में साइट से मशीन तक, हर मशीन का एक कार्ड, एक ऑर्डर जो हर मशीन के लिए एक ऑपरेशन में बँटा है।"
  },
  "Reading the line in the Cockpit": {
    "it": "Leggere la linea nel Cockpit",
    "es": "Leer la línea en el Cockpit",
    "pt-BR": "Ler a linha no Cockpit",
    "hi": "Cockpit में लाइन पढ़ना"
  },
  "Why does the line card show the same numbers as the flow wrapper?": {
    "it": "Perché la card della linea mostra gli stessi numeri dell'incartatrice flow-pack?",
    "es": "¿Por qué la tarjeta de la línea muestra los mismos números que la envolvedora flow pack?",
    "pt-BR": "Por que o card da linha mostra os mesmos números da embaladora flow pack?",
    "hi": "लाइन का कार्ड फ्लो रैपर वाले ही नंबर क्यों दिखाता है?"
  },
  "In the asset hierarchy one machine is set as \"Represents Line Performance\", here the ACMA Flow Wrap: the line card shows its state and performance, not an average of the four machines. The count of the line comes from the machine set as \"Represents Line Production\".": {
    "it": "Nella gerarchia degli asset una macchina è impostata come \"Represents Line Performance\", qui l'ACMA Flow Wrap: la card della linea mostra il suo stato e le sue prestazioni, non una media delle quattro macchine. Il conteggio della linea viene dalla macchina impostata come \"Represents Line Production\".",
    "es": "En la jerarquía de activos una máquina está configurada como \"Represents Line Performance\", aquí la ACMA Flow Wrap: la tarjeta de la línea muestra su estado y su rendimiento, no un promedio de las cuatro máquinas. El conteo de la línea viene de la máquina configurada como \"Represents Line Production\".",
    "pt-BR": "Na hierarquia de ativos, uma máquina é configurada como \"Represents Line Performance\", aqui a ACMA Flow Wrap: o card da linha mostra o estado e o desempenho dela, não uma média das quatro máquinas. A contagem da linha vem da máquina configurada como \"Represents Line Production\".",
    "hi": "एसेट हायरार्की में एक मशीन को \"Represents Line Performance\" के रूप में सेट किया जाता है, यहाँ ACMA Flow Wrap: लाइन का कार्ड उसकी स्थिति और परफ़ॉर्मेंस दिखाता है, चारों मशीनों का औसत नहीं। लाइन की गिनती उस मशीन से आती है जिसे \"Represents Line Production\" के रूप में सेट किया गया है।"
  },
  "Can TilliT read machines from different builders?": {
    "it": "TilliT riesce a leggere macchine di costruttori diversi?",
    "es": "¿TilliT puede leer máquinas de distintos fabricantes?",
    "pt-BR": "O TilliT consegue ler máquinas de fabricantes diferentes?",
    "hi": "क्या TilliT अलग-अलग निर्माताओं की मशीनें पढ़ सकता है?"
  },
  "Yes. The Edge reads the signals through the common industrial protocols (OPC-UA, Modbus, Ethernet/IP, Profinet); data can also come through API or MQTT, or be entered by hand.": {
    "it": "Sì. L'Edge legge i segnali tramite i protocolli industriali più diffusi (OPC-UA, Modbus, Ethernet/IP, Profinet); i dati possono arrivare anche via API o MQTT, oppure essere inseriti a mano.",
    "es": "Sí. El Edge lee las señales mediante los protocolos industriales más comunes (OPC-UA, Modbus, Ethernet/IP, Profinet); los datos también pueden llegar por API o MQTT, o ingresarse a mano.",
    "pt-BR": "Sim. O Edge lê os sinais pelos protocolos industriais mais comuns (OPC-UA, Modbus, Ethernet/IP, Profinet); os dados também podem chegar por API ou MQTT, ou ser inseridos manualmente.",
    "hi": "हाँ। Edge आम इंडस्ट्रियल प्रोटोकॉल (OPC-UA, Modbus, Ethernet/IP, Profinet) के ज़रिए सिग्नल पढ़ता है; डेटा API या MQTT से भी आ सकता है, या हाथ से दर्ज किया जा सकता है।"
  },
  "What do Starvation and Blocked mean?": {
    "it": "Che cosa vogliono dire Starvation e Blocked?",
    "es": "¿Qué significan Starvation y Blocked?",
    "pt-BR": "O que significam Starvation e Blocked?",
    "hi": "Starvation और Blocked का क्या मतलब है?"
  },
  "Starvation (yellow): the machine is running, but no product is arriving from upstream. Blocked (orange): the downstream buffer is full and product cannot move forward. Each site sets up its own states and colours: these are the ones used in this course.": {
    "it": "Starvation (giallo): la macchina è in marcia, ma da monte non arriva prodotto. Blocked (arancione): il buffer a valle è pieno e il prodotto non può avanzare. Ogni sito configura i propri stati e colori: questi sono quelli usati in questo corso.",
    "es": "Starvation (amarillo): la máquina está en marcha, pero no llega producto desde aguas arriba. Blocked (naranja): el buffer aguas abajo está lleno y el producto no puede avanzar. Cada planta configura sus propios estados y colores: estos son los que se usan en este curso.",
    "pt-BR": "Starvation (amarelo): a máquina está rodando, mas não chega produto das máquinas anteriores. Blocked (laranja): o pulmão de saída está cheio e o produto não consegue avançar. Cada planta configura os próprios estados e cores: estes são os usados neste curso.",
    "hi": "Starvation (पीला): मशीन चल रही है, लेकिन अपस्ट्रीम से प्रोडक्ट नहीं आ रहा। Blocked (नारंगी): डाउनस्ट्रीम बफ़र भरा है और प्रोडक्ट आगे नहीं बढ़ सकता। हर साइट अपनी स्थितियाँ और रंग खुद सेट करती है: ये इस कोर्स में इस्तेमाल किए गए हैं।"
  }
});
// ── /cap1 ──
// ── cap2 ── Your Station View
Object.assign(PKX_DICT, {
  "Chapter 2 · Packaging Line Training": {
    "it": "Capitolo 2 · Packaging Line Training",
    "es": "Capítulo 2 · Packaging Line Training",
    "pt-BR": "Capítulo 2 · Packaging Line Training",
    "hi": "अध्याय 2 · Packaging Line Training"
  },
  "Chapter 3 · Packaging Line Training": {
    "it": "Capitolo 3 · Packaging Line Training",
    "es": "Capítulo 3 · Packaging Line Training",
    "pt-BR": "Capítulo 3 · Packaging Line Training",
    "hi": "अध्याय 3 · Packaging Line Training"
  },
  "It is 7:45, PO-20015 is running. You are the operator of the flow wrapper: you work in the Station View of your machine. In this chapter you open it and read its main parts.": {
    "it": "Sono le 7:45, è in corso PO-20015. Conduci l'incartatrice flow-pack: lavori nella Station View della tua macchina. In questo capitolo la apri e ne leggi le parti principali.",
    "es": "Son las 7:45 y está en curso la PO-20015. Operas la envolvedora flow pack: trabajas en la Station View de tu máquina. En este capítulo la abres y lees sus partes principales.",
    "pt-BR": "São 7:45 e a PO-20015 está rodando. Você opera a embaladora flow pack: trabalha na Station View da sua máquina. Neste capítulo, você a abre e lê as partes principais dela.",
    "hi": "अभी 7:45 बजे हैं, PO-20015 चल रहा है। आप फ्लो रैपर के ऑपरेटर हैं: आप अपनी मशीन के Station View में काम करते हैं। इस अध्याय में आप उसे खोलेंगे और उसके मुख्य हिस्से पढ़ेंगे।"
  },
  "Open the Station View of your machine from the Cockpit": {
    "it": "Aprire dal Cockpit la Station View della tua macchina",
    "es": "Abrir desde el Cockpit la Station View de tu máquina",
    "pt-BR": "Abrir pelo Cockpit a Station View da sua máquina",
    "hi": "Cockpit से अपनी मशीन का Station View खोलें"
  },
  "Read your order and what you can do with it": {
    "it": "Leggere il tuo ordine e che cosa puoi farci",
    "es": "Leer tu orden y lo que puedes hacer con ella",
    "pt-BR": "Ler a sua ordem e o que você pode fazer com ela",
    "hi": "अपना ऑर्डर पढ़ें और जानें कि आप उसके साथ क्या कर सकते हैं"
  },
  "Know what the three tabs are for": {
    "it": "Sapere a che cosa servono le tre schede",
    "es": "Saber para qué sirven las tres pestañas",
    "pt-BR": "Saber para que servem as três abas",
    "hi": "जानें कि तीन टैब किस लिए हैं"
  },
  "Open your Station View": {
    "it": "Apri la tua Station View",
    "es": "Abre tu Station View",
    "pt-BR": "Abra a sua Station View",
    "hi": "अपना Station View खोलें"
  },
  "You start where chapter 1 ended: the four machines of Bars & Snacks in the Cockpit. You are the operator of the flow wrapper.": {
    "it": "Parti da dove è finito il capitolo 1: le quattro macchine di Bars & Snacks nel Cockpit. Conduci l'incartatrice flow-pack.",
    "es": "Empiezas donde terminó el capítulo 1: las cuatro máquinas de Bars & Snacks en el Cockpit. Operas la envolvedora flow pack.",
    "pt-BR": "Você começa onde o capítulo 1 terminou: as quatro máquinas de Bars & Snacks no Cockpit. Você opera a embaladora flow pack.",
    "hi": "आप वहीं से शुरू करते हैं जहाँ अध्याय 1 खत्म हुआ था: Cockpit में Bars & Snacks की चार मशीनें। आप फ्लो रैपर के ऑपरेटर हैं।"
  },
  "Open your Station View from the card of your machine": {
    "it": "Apri la tua Station View dalla card della tua macchina",
    "es": "Abre tu Station View desde la tarjeta de tu máquina",
    "pt-BR": "Abra a sua Station View pelo card da sua máquina",
    "hi": "अपनी मशीन के कार्ड से अपना Station View खोलें"
  },
  "Use the Station View of the line": {
    "it": "Usare la Station View della linea",
    "es": "Usar la Station View de la línea",
    "pt-BR": "Usar a Station View da linha",
    "hi": "लाइन का Station View इस्तेमाल करना"
  },
  "The Cockpit shows how the machines are doing; the Station View of a machine is where its operator works.": {
    "it": "Il Cockpit mostra come vanno le macchine; la Station View di una macchina è dove lavora il suo operatore.",
    "es": "El Cockpit muestra cómo van las máquinas; la Station View de una máquina es donde trabaja su operador.",
    "pt-BR": "O Cockpit mostra como as máquinas estão; a Station View de uma máquina é onde o operador dela trabalha.",
    "hi": "Cockpit दिखाता है कि मशीनें कैसी चल रही हैं; किसी मशीन का Station View वह जगह है जहाँ उसका ऑपरेटर काम करता है।"
  },
  "Station View on a machine card opens the screen of that machine.": {
    "it": "Station View sulla card di una macchina apre la schermata di quella macchina.",
    "es": "Station View en la tarjeta de una máquina abre la pantalla de esa máquina.",
    "pt-BR": "Station View no card de uma máquina abre a tela daquela máquina.",
    "hi": "मशीन कार्ड पर Station View उस मशीन की स्क्रीन खोलता है।"
  },
  "Click Station View on the ACMA Flow Wrap card.": {
    "it": "Clicca Station View sulla card ACMA Flow Wrap.",
    "es": "Haz clic en Station View en la tarjeta ACMA Flow Wrap.",
    "pt-BR": "Clique em Station View no card da ACMA Flow Wrap.",
    "hi": "ACMA Flow Wrap कार्ड के Station View पर क्लिक करें।"
  },
  "This is the Station View of the ACMA Flow Wrap: the screen of the operator of the flow wrapper.": {
    "it": "Questa è la Station View dell'ACMA Flow Wrap: la schermata dell'operatore dell'incartatrice flow-pack.",
    "es": "Esta es la Station View de la ACMA Flow Wrap: la pantalla del operador de la envolvedora flow pack.",
    "pt-BR": "Esta é a Station View da ACMA Flow Wrap: a tela do operador da embaladora flow pack.",
    "hi": "यह ACMA Flow Wrap का Station View है: फ्लो रैपर के ऑपरेटर की स्क्रीन।"
  },
  "Not this one. Station View is the button at the bottom of the ACMA Flow Wrap card.": {
    "it": "Non questo. Station View è il bottone in fondo alla card ACMA Flow Wrap.",
    "es": "Este no. Station View es el botón de abajo en la tarjeta ACMA Flow Wrap.",
    "pt-BR": "Não é este. Station View é o botão na parte de baixo do card da ACMA Flow Wrap.",
    "hi": "यह नहीं। Station View, ACMA Flow Wrap कार्ड में सबसे नीचे वाला बटन है।"
  },
  "The ACMA Flow Wrap card is the first one, top left: Station View is at its bottom.": {
    "it": "La card ACMA Flow Wrap è la prima, in alto a sinistra: Station View è in fondo alla card.",
    "es": "La tarjeta ACMA Flow Wrap es la primera, arriba a la izquierda: Station View está en la parte de abajo.",
    "pt-BR": "O card da ACMA Flow Wrap é o primeiro, no canto superior esquerdo: Station View fica na parte de baixo dele.",
    "hi": "ACMA Flow Wrap कार्ड पहला है, ऊपर बाईं ओर: Station View उसमें सबसे नीचे है।"
  },
  "That is the Station View of another machine. Yours is the flow wrapper: the first card.": {
    "it": "Questa è la Station View di un'altra macchina. La tua è l'incartatrice flow-pack: la prima card.",
    "es": "Esa es la Station View de otra máquina. La tuya es la envolvedora flow pack: la primera tarjeta.",
    "pt-BR": "Essa é a Station View de outra máquina. A sua é a embaladora flow pack: o primeiro card.",
    "hi": "यह किसी दूसरी मशीन का Station View है। आपकी मशीन फ्लो रैपर है: पहला कार्ड।"
  },
  "The bar on top": {
    "it": "La barra in alto",
    "es": "La barra superior",
    "pt-BR": "A barra superior",
    "hi": "ऊपर की बार"
  },
  "Above the columns, a bar tells you which day and which machine you are looking at.": {
    "it": "Sopra le colonne, una barra ti dice quale giorno e quale macchina stai guardando.",
    "es": "Sobre las columnas, una barra te dice qué día y qué máquina estás viendo.",
    "pt-BR": "Acima das colunas, uma barra diz qual dia e qual máquina você está vendo.",
    "hi": "कॉलमों के ऊपर एक बार बताती है कि आप कौन सा दिन और कौन सी मशीन देख रहे हैं।"
  },
  "Check the day and the machine first": {
    "it": "Controlla prima il giorno e la macchina",
    "es": "Revisa primero el día y la máquina",
    "pt-BR": "Confira primeiro o dia e a máquina",
    "hi": "पहले दिन और मशीन जाँचें"
  },
  "Read the figures without checking the day": {
    "it": "Leggere i numeri senza controllare il giorno",
    "es": "Leer las cifras sin revisar el día",
    "pt-BR": "Ler os números sem conferir o dia",
    "hi": "दिन जाँचे बिना आँकड़े पढ़ना"
  },
  "The Station View of every machine has the same parts: learn one and you can read them all.": {
    "it": "La Station View di ogni macchina ha le stesse parti: ne impari una e le sai leggere tutte.",
    "es": "La Station View de cada máquina tiene las mismas partes: aprendes una y puedes leerlas todas.",
    "pt-BR": "A Station View de toda máquina tem as mesmas partes: aprendendo uma, você lê todas.",
    "hi": "हर मशीन के Station View में वही हिस्से होते हैं: एक सीख लें, तो आप सभी पढ़ सकते हैं।"
  },
  "The bar on top: the day, your machine and its state, and a pin to find it again.": {
    "it": "La barra in alto: il giorno, la tua macchina e il suo stato, e il Pin per ritrovarla.",
    "es": "La barra superior: el día, tu máquina y su estado, y un Pin para volver a encontrarla.",
    "pt-BR": "A barra superior: o dia, a sua máquina e o estado dela, e um Pin para encontrá-la de novo.",
    "hi": "ऊपर की बार: दिन, आपकी मशीन और उसकी स्थिति, और उसे फिर से ढूँढने के लिए एक Pin।"
  },
  "Click each part of the bar: each one is explained here.": {
    "it": "Clicca ogni parte della barra: qui trovi la spiegazione di ciascuna.",
    "es": "Haz clic en cada parte de la barra: aquí se explica cada una.",
    "pt-BR": "Clique em cada parte da barra: cada uma é explicada aqui.",
    "hi": "बार के हर हिस्से पर क्लिक करें: हर हिस्सा यहाँ समझाया गया है।"
  },
  "Stay on the bar on top for now: click the parts listed here.": {
    "it": "Per ora resta sulla barra in alto: clicca le parti elencate qui.",
    "es": "Por ahora quédate en la barra superior: haz clic en las partes de esta lista.",
    "pt-BR": "Por enquanto, fique na barra superior: clique nas partes listadas aqui.",
    "hi": "अभी ऊपर की बार पर ही रहें: यहाँ दिए गए हिस्सों पर क्लिक करें।"
  },
  "The day": {
    "it": "Il giorno",
    "es": "El día",
    "pt-BR": "O dia",
    "hi": "दिन"
  },
  "The day you are looking at, with arrows to the day before or after.": {
    "it": "Il giorno che stai guardando, con le frecce per il giorno prima o dopo.",
    "es": "El día que estás viendo, con flechas para ir al día anterior o al siguiente.",
    "pt-BR": "O dia que você está vendo, com setas para o dia anterior ou o seguinte.",
    "hi": "वह दिन जिसे आप देख रहे हैं, पिछले या अगले दिन पर जाने के लिए तीरों के साथ।"
  },
  "Pin": {
    "it": "Pin",
    "es": "Pin",
    "pt-BR": "Pin",
    "hi": "Pin"
  },
  "Pinned: the Station View of your machine is now in the menu on the left, one click away.": {
    "it": "Fissata: la Station View della tua macchina ora è nel menu a sinistra, a un clic di distanza.",
    "es": "Fijada: la Station View de tu máquina ahora está en el menú de la izquierda, a un clic.",
    "pt-BR": "Fixada: a Station View da sua máquina agora está no menu da esquerda, a um clique.",
    "hi": "पिन हो गया: आपकी मशीन का Station View अब बाईं ओर के मेनू में है, बस एक क्लिक दूर।"
  },
  "Your machine": {
    "it": "La tua macchina",
    "es": "Tu máquina",
    "pt-BR": "A sua máquina",
    "hi": "आपकी मशीन"
  },
  "Your machine, in the colour of its state, with how long it has been in it. Next to it, A: the availability of the shift.": {
    "it": "La tua macchina, nel colore del suo stato, e da quanto tempo è in quello stato. Accanto, A: la disponibilità del turno.",
    "es": "Tu máquina, en el color de su estado, y cuánto tiempo lleva así. Al lado, A: la disponibilidad del turno.",
    "pt-BR": "A sua máquina, na cor do estado, e há quanto tempo ela está nesse estado. Ao lado, A: a disponibilidade do turno.",
    "hi": "आपकी मशीन, उसकी स्थिति के रंग में, और वह कितने समय से इस स्थिति में है। उसके बगल में A: शिफ्ट की उपलब्धता।"
  },
  "Shift and site": {
    "it": "Turno e sito",
    "es": "Turno y planta",
    "pt-BR": "Turno e planta",
    "hi": "शिफ्ट और साइट"
  },
  "On the right, the shift, Day Shift, and the site, Pack Expo Chicago.": {
    "it": "A destra, il turno, Day Shift, e il sito, Pack Expo Chicago.",
    "es": "A la derecha, el turno, Day Shift, y la planta, Pack Expo Chicago.",
    "pt-BR": "À direita, o turno, Day Shift, e a planta, Pack Expo Chicago.",
    "hi": "दाईं ओर शिफ्ट, Day Shift, और साइट, Pack Expo Chicago।"
  },
  "Your operation": {
    "it": "La tua operazione",
    "es": "Tu operación",
    "pt-BR": "A sua operação",
    "hi": "आपका ऑपरेशन"
  },
  "The left column is your order, from the top: its card, Actions, Activities and Run rate.": {
    "it": "La colonna di sinistra è il tuo ordine, dall'alto: la sua card, Actions, Activities e Run rate.",
    "es": "La columna de la izquierda es tu orden, de arriba abajo: su tarjeta, Actions, Activities y Run rate.",
    "pt-BR": "A coluna da esquerda é a sua ordem, de cima para baixo: o card dela, Actions, Activities e Run rate.",
    "hi": "बायाँ कॉलम आपका ऑर्डर है, ऊपर से: उसका कार्ड, Actions, Activities और Run rate।"
  },
  "Check your order on its card": {
    "it": "Controlla il tuo ordine sulla sua card",
    "es": "Revisa tu orden en su tarjeta",
    "pt-BR": "Confira a sua ordem no card dela",
    "hi": "अपने ऑर्डर को उसके कार्ड पर जाँचें"
  },
  "Wait for the end of the shift to see your counts": {
    "it": "Aspettare la fine del turno per vedere i tuoi conteggi",
    "es": "Esperar al final del turno para ver tus conteos",
    "pt-BR": "Esperar o fim do turno para ver as suas contagens",
    "hi": "अपनी गिनती देखने के लिए शिफ्ट खत्म होने का इंतज़ार करना"
  },
  "Everything in this column is about the order running on your machine now.": {
    "it": "In questa colonna trovi tutto sull'ordine in corso ora sulla tua macchina.",
    "es": "Todo lo que hay en esta columna se refiere a la orden en curso ahora en tu máquina.",
    "pt-BR": "Tudo nesta coluna se refere à ordem que está rodando agora na sua máquina.",
    "hi": "इस कॉलम में सब कुछ उस ऑर्डर के बारे में है जो अभी आपकी मशीन पर चल रहा है।"
  },
  "Your order, what you can do with it, and its activities: all on the left.": {
    "it": "Il tuo ordine, che cosa puoi farci e le sue attività: tutto a sinistra.",
    "es": "Tu orden, lo que puedes hacer con ella y sus actividades: todo a la izquierda.",
    "pt-BR": "A sua ordem, o que você pode fazer com ela e as atividades dela: tudo à esquerda.",
    "hi": "आपका ऑर्डर, आप उसके साथ क्या कर सकते हैं, और उसकी ऐक्टिविटीज़: सब बाईं ओर।"
  },
  "The left column": {
    "it": "La colonna di sinistra",
    "es": "La columna de la izquierda",
    "pt-BR": "A coluna da esquerda",
    "hi": "बायाँ कॉलम"
  },
  "From the top: the card, its Actions, its Activities, Run rate. Click each box: each one is explained here.": {
    "it": "Dall'alto: la card, Actions, Activities e Run rate. Clicca ogni riquadro: qui trovi la spiegazione di ciascuno.",
    "es": "De arriba abajo: la tarjeta, sus Actions, sus Activities, Run rate. Haz clic en cada recuadro: aquí se explica cada uno.",
    "pt-BR": "De cima para baixo: o card, as Actions, as Activities, Run rate. Clique em cada quadro: cada um é explicado aqui.",
    "hi": "ऊपर से: कार्ड, उसके Actions, उसकी Activities, Run rate। हर बॉक्स पर क्लिक करें: हर बॉक्स यहाँ समझाया गया है।"
  },
  "Stay on the left column for now: click the boxes listed here.": {
    "it": "Per ora resta sulla colonna di sinistra: clicca i riquadri elencati qui.",
    "es": "Por ahora quédate en la columna de la izquierda: haz clic en los recuadros de esta lista.",
    "pt-BR": "Por enquanto, fique na coluna da esquerda: clique nos quadros listados aqui.",
    "hi": "अभी बाएँ कॉलम पर ही रहें: यहाँ दिए गए बॉक्सों पर क्लिक करें।"
  },
  "The order card": {
    "it": "La card dell'ordine",
    "es": "La tarjeta de la orden",
    "pt-BR": "O card da ordem",
    "hi": "ऑर्डर कार्ड"
  },
  "Your order on this machine: PO-20015 - WRAPPING, the wrapping operation of the line's order. It is RUNNING. On the card: the quantity with the rejects (420), the speed against the target, OEE, and the times: started at 6:00, projected finish 8:25.": {
    "it": "Il tuo ordine su questa macchina: PO-20015 - WRAPPING, l'operazione di incarto dell'ordine della linea. È in corso. Sulla card: la quantità con gli scarti (420), la velocità rispetto al target, l'OEE e gli orari: avviato alle 6:00, fine prevista alle 8:25.",
    "es": "Tu orden en esta máquina: PO-20015 - WRAPPING, la operación de envoltura de la orden de la línea. Está en curso. En la tarjeta: la cantidad con los rechazos (420), la velocidad frente al objetivo, el OEE y los horarios: iniciada a las 6:00, fin previsto a las 8:25.",
    "pt-BR": "A sua ordem nesta máquina: PO-20015 - WRAPPING, a operação de embalagem flow pack da ordem da linha. Está em andamento. No card: a quantidade com os refugos (420), a velocidade em relação à meta, o OEE e os horários: iniciada às 6:00, término previsto às 8:25.",
    "hi": "इस मशीन पर आपका ऑर्डर: PO-20015 - WRAPPING, लाइन के ऑर्डर का रैपिंग ऑपरेशन। यह चल रहा है। कार्ड पर: रिजेक्ट के साथ मात्रा (420), टारगेट के मुकाबले स्पीड, OEE और समय: 6:00 बजे शुरू हुआ, खत्म होने का अनुमानित समय 8:25।"
  },
  "Actions": {
    "it": "Actions",
    "es": "Actions",
    "pt-BR": "Actions",
    "hi": "Actions"
  },
  "What you can do with your order. The buttons change with its state: it arrives NEW, the operator makes it Ready, then Start, and from then on the counts land on it. Now it is Running: Start Activity starts an activity by hand, Suspend Order pauses the order (it can be resumed), Complete Order completes it. Every change of state asks for a confirmation.": {
    "it": "Che cosa puoi fare con il tuo ordine. I bottoni cambiano con il suo stato: arriva NEW, l'operatore lo mette in Ready, poi preme Start, e da quel momento i conteggi vanno su quell'ordine. Ora è in corso: Start Activity avvia un'attività a mano, Suspend Order mette in pausa l'ordine (si può riprendere), Complete Order lo completa. Ogni cambio di stato chiede una conferma.",
    "es": "Lo que puedes hacer con tu orden. Los botones cambian según su estado: llega como NEW, el operador la pasa a Ready y luego le da Start, y desde ese momento los conteos se registran en ella. Ahora está en curso: Start Activity inicia una actividad a mano, Suspend Order pausa la orden (se puede reanudar), Complete Order la completa. Cada cambio de estado pide una confirmación.",
    "pt-BR": "O que você pode fazer com a sua ordem. Os botões mudam conforme o estado dela: ela chega como NEW, o operador a coloca em Ready e depois aciona Start, e a partir daí as contagens são registradas nela. Agora ela está em andamento: Start Activity inicia uma atividade manualmente, Suspend Order pausa a ordem (ela pode ser retomada), Complete Order a conclui. Toda mudança de estado pede uma confirmação.",
    "hi": "आप अपने ऑर्डर के साथ क्या कर सकते हैं। बटन उसकी स्थिति के साथ बदलते हैं: यह NEW स्थिति में आता है, ऑपरेटर इसे Ready करता है, फिर Start दबाता है, और तब से गिनती इस पर दर्ज होती है। अभी यह चल रहा है: Start Activity हाथ से एक ऐक्टिविटी शुरू करता है, Suspend Order ऑर्डर को कुछ समय के लिए रोकता है (इसे फिर से शुरू किया जा सकता है), Complete Order इसे पूरा करता है। स्थिति का हर बदलाव पुष्टि माँगता है।"
  },
  "Activities": {
    "it": "Activities",
    "es": "Activities",
    "pt-BR": "Activities",
    "hi": "Activities"
  },
  "The activities of this order: Open 2, Skipped 0, Noncompliant 0. Below: Issued 5, Closed 3, Completed 3.": {
    "it": "Le attività di questo ordine: Open 2, Skipped 0, Noncompliant 0. Sotto: Issued 5, Closed 3, Completed 3.",
    "es": "Las actividades de esta orden: Open 2, Skipped 0, Noncompliant 0. Debajo: Issued 5, Closed 3, Completed 3.",
    "pt-BR": "As atividades desta ordem: Open 2, Skipped 0, Noncompliant 0. Embaixo: Issued 5, Closed 3, Completed 3.",
    "hi": "इस ऑर्डर की ऐक्टिविटीज़: Open 2, Skipped 0, Noncompliant 0। नीचे: Issued 5, Closed 3, Completed 3।"
  },
  "Run rate": {
    "it": "Run rate",
    "es": "Run rate",
    "pt-BR": "Run rate",
    "hi": "Run rate"
  },
  "Run rate opens the Run Rate chart of your machine: its speed now and its hourly average, against the target speed set for the machine or the material, all per hour.": {
    "it": "Run rate apre il grafico Run Rate della tua macchina: la sua velocità attuale e la media oraria, rispetto alla velocità target impostata per la macchina o per il materiale; tutti i valori sono all'ora.",
    "es": "Run rate abre la gráfica Run Rate de tu máquina: su velocidad actual y su promedio por hora, frente a la velocidad objetivo configurada para la máquina o el material, todo por hora.",
    "pt-BR": "Run rate abre o gráfico Run Rate da sua máquina: a velocidade atual e a média por hora, em relação à velocidade-meta definida para a máquina ou para o material, tudo por hora.",
    "hi": "Run rate आपकी मशीन का Run Rate चार्ट खोलता है: उसकी अभी की स्पीड और घंटे का औसत, मशीन या मटीरियल के लिए सेट की गई टारगेट स्पीड के मुकाबले, सब प्रति घंटा।"
  },
  "Your work: three tabs": {
    "it": "Il tuo lavoro: tre schede",
    "es": "Tu trabajo: tres pestañas",
    "pt-BR": "O seu trabalho: três abas",
    "hi": "आपका काम: तीन टैब"
  },
  "The middle column is your work, in three tabs: what you have to do, the orders of your machine, and what happened.": {
    "it": "La colonna centrale è il tuo lavoro, in tre schede: che cosa devi fare, gli ordini della tua macchina e che cosa è successo.",
    "es": "La columna del centro es tu trabajo, en tres pestañas: lo que tienes que hacer, las órdenes de tu máquina y lo que pasó.",
    "pt-BR": "A coluna do meio é o seu trabalho, em três abas: o que você tem que fazer, as ordens da sua máquina e o que aconteceu.",
    "hi": "बीच का कॉलम आपका काम है, तीन टैब में: आपको क्या करना है, आपकी मशीन के ऑर्डर, और क्या हुआ।"
  },
  "Activities to do, Orders to see, Events to look back": {
    "it": "Activities per cosa fare, Orders per gli ordini, Events per cosa è successo",
    "es": "Activities para hacer, Orders para ver, Events para mirar atrás",
    "pt-BR": "Activities para fazer, Orders para consultar, Events para rever o passado",
    "hi": "करने के लिए Activities, देखने के लिए Orders, पीछे देखने के लिए Events"
  },
  "Look for past stops in the Activities tab": {
    "it": "Cercare i fermi passati nella scheda Activities",
    "es": "Buscar paros anteriores en la pestaña Activities",
    "pt-BR": "Procurar paradas passadas na aba Activities",
    "hi": "पिछले स्टॉप Activities टैब में ढूँढना"
  },
  "What to do, what is planned and what happened sit on the same screen as your order.": {
    "it": "Che cosa fare, che cosa è pianificato e che cosa è successo stanno sulla stessa schermata del tuo ordine.",
    "es": "Lo que hay que hacer, lo que está planeado y lo que pasó están en la misma pantalla que tu orden.",
    "pt-BR": "O que fazer, o que está planejado e o que aconteceu ficam na mesma tela da sua ordem.",
    "hi": "क्या करना है, क्या प्लान है और क्या हुआ, सब आपके ऑर्डर वाली स्क्रीन पर ही हैं।"
  },
  "Activities: what to do. Orders: the orders of your machine. Events: what happened.": {
    "it": "Activities: che cosa fare. Orders: gli ordini della tua macchina. Events: che cosa è successo.",
    "es": "Activities: lo que hay que hacer. Orders: las órdenes de tu máquina. Events: lo que pasó.",
    "pt-BR": "Activities: o que fazer. Orders: as ordens da sua máquina. Events: o que aconteceu.",
    "hi": "Activities: क्या करना है। Orders: आपकी मशीन के ऑर्डर। Events: क्या हुआ।"
  },
  "You know your Station View": {
    "it": "Conosci la tua Station View",
    "es": "Ya conoces tu Station View",
    "pt-BR": "Você conhece a sua Station View",
    "hi": "आप अपना Station View जानते हैं"
  },
  "From the Cockpit to your machine, and the main parts of its screen.": {
    "it": "Dal Cockpit alla tua macchina e le parti principali della sua schermata.",
    "es": "Del Cockpit a tu máquina, y las partes principales de su pantalla.",
    "pt-BR": "Do Cockpit à sua máquina, e as partes principais da tela dela.",
    "hi": "Cockpit से आपकी मशीन तक, और उसकी स्क्रीन के मुख्य हिस्से।"
  },
  "From the Cockpit to your work": {
    "it": "Dal Cockpit al tuo lavoro",
    "es": "Del Cockpit a tu trabajo",
    "pt-BR": "Do Cockpit ao seu trabalho",
    "hi": "Cockpit से आपके काम तक"
  },
  "COCKPIT": {
    "it": "COCKPIT",
    "es": "COCKPIT",
    "pt-BR": "COCKPIT",
    "hi": "COCKPIT"
  },
  "STATION VIEW": {
    "it": "STATION VIEW",
    "es": "STATION VIEW",
    "pt-BR": "STATION VIEW",
    "hi": "STATION VIEW"
  },
  "OPERATION": {
    "it": "OPERAZIONE",
    "es": "OPERACIÓN",
    "pt-BR": "OPERAÇÃO",
    "hi": "ऑपरेशन"
  },
  "WORK": {
    "it": "LAVORO",
    "es": "TRABAJO",
    "pt-BR": "TRABALHO",
    "hi": "काम"
  },
  "The three tabs": {
    "it": "Le tre schede",
    "es": "Las tres pestañas",
    "pt-BR": "As três abas",
    "hi": "तीन टैब"
  },
  "Three tabs on top of the middle column. Click each one: each one is explained here.": {
    "it": "Tre schede in cima alla colonna centrale. Clicca ciascuna: qui trovi la spiegazione di ognuna.",
    "es": "Tres pestañas arriba de la columna del centro. Haz clic en cada una: aquí se explica cada una.",
    "pt-BR": "Três abas no alto da coluna do meio. Clique em cada uma: cada uma é explicada aqui.",
    "hi": "बीच वाले कॉलम में सबसे ऊपर तीन टैब। हर एक पर क्लिक करें: हर टैब यहाँ समझाया गया है।"
  },
  "Stay on the middle column for now: click the tabs listed here.": {
    "it": "Per ora resta sulla colonna centrale: clicca le schede elencate qui.",
    "es": "Por ahora quédate en la columna del centro: haz clic en las pestañas de esta lista.",
    "pt-BR": "Por enquanto, fique na coluna do meio: clique nas abas listadas aqui.",
    "hi": "अभी बीच वाले कॉलम पर ही रहें: यहाँ दिए गए टैब पर क्लिक करें।"
  },
  "Your activities, with the Active filter on (the default). For each one: when it was created, when it expires, who has claimed it (Unassigned: nobody yet) and its state, ACTIVE. You do one in chapter 3.": {
    "it": "Le tue attività, con il filtro Active inserito (è l'impostazione predefinita). Per ognuna: quando è stata creata, quando scade, chi l'ha presa in carico (Unassigned: ancora nessuno) e il suo stato, ACTIVE. Ne fai una nel capitolo 3.",
    "es": "Tus actividades, con el filtro Active activado (es el predeterminado). Para cada una: cuándo se creó, cuándo vence, quién la tomó (Unassigned: nadie todavía) y su estado, ACTIVE. Haces una en el capítulo 3.",
    "pt-BR": "As suas atividades, com o filtro Active ligado (é o padrão). Para cada uma: quando foi criada, quando expira, quem a assumiu (Unassigned: ninguém ainda) e o estado dela, ACTIVE. Você faz uma no capítulo 3.",
    "hi": "आपकी ऐक्टिविटीज़, Active फ़िल्टर चालू (डिफ़ॉल्ट)। हर एक के लिए: वह कब बनी, कब एक्सपायर होगी, किसने उसे क्लेम किया है (Unassigned: अभी किसी ने नहीं) और उसकी स्थिति, ACTIVE। अध्याय 3 में आप एक ऐक्टिविटी करेंगे।"
  },
  "Orders": {
    "it": "Orders",
    "es": "Orders",
    "pt-BR": "Orders",
    "hi": "Orders"
  },
  "The orders of your machine, filtered by state: New, Ready, Running, Suspended. PO-20015 is the one running, the same card as on the left; PO-20016 is also in the list, still NEW.": {
    "it": "Gli ordini della tua macchina, filtrati per stato: New, Ready, Running, Suspended. PO-20015 è quello in corso, la stessa card che c'è a sinistra; nell'elenco c'è anche PO-20016, ancora NEW.",
    "es": "Las órdenes de tu máquina, filtradas por estado: New, Ready, Running, Suspended. La PO-20015 es la que está en curso, la misma tarjeta que a la izquierda; en la lista también está la PO-20016, todavía NEW.",
    "pt-BR": "As ordens da sua máquina, filtradas por estado: New, Ready, Running, Suspended. A PO-20015 é a que está rodando, o mesmo card da esquerda; a PO-20016 também está na lista, ainda NEW.",
    "hi": "आपकी मशीन के ऑर्डर, स्थिति के हिसाब से फ़िल्टर किए गए: New, Ready, Running, Suspended। PO-20015 वह है जो चल रहा है, वही कार्ड जो बाईं ओर है; सूची में PO-20016 भी है, अभी NEW।"
  },
  "Events": {
    "it": "Events",
    "es": "Events",
    "pt-BR": "Events",
    "hi": "Events"
  },
  "What happened on your machine, newest first: Activity issued at 7:30, Equipment running at 7:15 after a Short stop at 7:12 (reason: Product infeed). Further down: Order Started and Shift started at 6:00.": {
    "it": "Che cosa è successo sulla tua macchina, dal più recente: Activity issued alle 7:30, Equipment running alle 7:15 dopo uno Short stop alle 7:12 (motivo: Product infeed). Più in basso: Order Started e Shift started alle 6:00.",
    "es": "Lo que pasó en tu máquina, de lo más reciente a lo más antiguo: Activity issued a las 7:30, Equipment running a las 7:15 después de un Short stop a las 7:12 (motivo: Product infeed). Más abajo: Order Started y Shift started a las 6:00.",
    "pt-BR": "O que aconteceu na sua máquina, do mais recente ao mais antigo: Activity issued às 7:30, Equipment running às 7:15 depois de um Short stop às 7:12 (motivo: Product infeed). Mais abaixo: Order Started e Shift started às 6:00.",
    "hi": "आपकी मशीन पर क्या हुआ, सबसे नया पहले: 7:30 बजे Activity issued, 7:12 बजे Short stop (कारण: Product infeed) के बाद 7:15 बजे Equipment running। और नीचे: 6:00 बजे Order Started और Shift started।"
  },
  "Put the clicks in order: from the Cockpit to the Activities tab of your machine.": {
    "it": "Metti i clic in sequenza: dal Cockpit alla scheda Activities della tua macchina.",
    "es": "Pon los clics en la secuencia correcta: del Cockpit a la pestaña Activities de tu máquina.",
    "pt-BR": "Coloque os cliques na sequência certa: do Cockpit à aba Activities da sua máquina.",
    "hi": "क्लिकों को क्रम में लगाएँ: Cockpit से आपकी मशीन के Activities टैब तक।"
  },
  "Five clicks, from the site down to your activities.": {
    "it": "Cinque clic, dal sito fino alle tue attività.",
    "es": "Cinco clics, desde la planta hasta tus actividades.",
    "pt-BR": "Cinco cliques, da planta até as suas atividades.",
    "hi": "पाँच क्लिक, साइट से नीचे आपकी ऐक्टिविटीज़ तक।"
  },
  "Cockpit: the production areas": {
    "it": "Cockpit: le aree di produzione",
    "es": "Cockpit: las áreas de producción",
    "pt-BR": "Cockpit: as áreas de produção",
    "hi": "Cockpit: प्रोडक्शन एरिया"
  },
  "Drill-down on Pack Lines": {
    "it": "Drill-down su Pack Lines",
    "es": "Drill-down en Pack Lines",
    "pt-BR": "Drill-down em Pack Lines",
    "hi": "Pack Lines पर Drill-down"
  },
  "Drill-down on Bars & Snacks": {
    "it": "Drill-down su Bars & Snacks",
    "es": "Drill-down en Bars & Snacks",
    "pt-BR": "Drill-down em Bars & Snacks",
    "hi": "Bars & Snacks पर Drill-down"
  },
  "Station View on the ACMA Flow Wrap": {
    "it": "Station View sull'ACMA Flow Wrap",
    "es": "Station View en la ACMA Flow Wrap",
    "pt-BR": "Station View na ACMA Flow Wrap",
    "hi": "ACMA Flow Wrap पर Station View"
  },
  "The Activities tab": {
    "it": "La scheda Activities",
    "es": "La pestaña Activities",
    "pt-BR": "A aba Activities",
    "hi": "Activities टैब"
  },
  "Everything starts from the Cockpit, at the level of the areas.": {
    "it": "Tutto parte dal Cockpit, al livello delle aree.",
    "es": "Todo empieza en el Cockpit, en el nivel de las áreas.",
    "pt-BR": "Tudo começa no Cockpit, no nível das áreas.",
    "hi": "सब कुछ Cockpit से शुरू होता है, एरिया के स्तर पर।"
  },
  "First the area, then its line: Pack Lines before Bars & Snacks.": {
    "it": "Prima l'area, poi la sua linea: Pack Lines prima di Bars & Snacks.",
    "es": "Primero el área, luego su línea: Pack Lines antes de Bars & Snacks.",
    "pt-BR": "Primeiro a área, depois a linha dela: Pack Lines antes de Bars & Snacks.",
    "hi": "पहले एरिया, फिर उसकी लाइन: Bars & Snacks से पहले Pack Lines।"
  },
  "The Activities tab is inside the Station View: it comes last.": {
    "it": "La scheda Activities è dentro la Station View: viene per ultima.",
    "es": "La pestaña Activities está dentro de la Station View: va al final.",
    "pt-BR": "A aba Activities fica dentro da Station View: ela vem por último.",
    "hi": "Activities टैब Station View के अंदर है: वह आखिर में आता है।"
  },
  "That is the way: area, line, machine, then your work in its Station View.": {
    "it": "È questa la strada: area, linea, macchina, poi il tuo lavoro nella sua Station View.",
    "es": "Ese es el camino: área, línea, máquina, y luego tu trabajo en su Station View.",
    "pt-BR": "Esse é o caminho: área, linha, máquina, e depois o seu trabalho na Station View dela.",
    "hi": "यही रास्ता है: एरिया, लाइन, मशीन, फिर उसके Station View में आपका काम।"
  },
  "At your Station View": {
    "it": "Alla tua Station View",
    "es": "En tu Station View",
    "pt-BR": "Na sua Station View",
    "hi": "आपके Station View पर"
  },
  "You are at the flow wrapper with Sam, the production supervisor. Pick the reply you would really give. A wrong reply is not a problem: Sam will tell you why.": {
    "it": "Sei all'incartatrice flow-pack con Sam, responsabile di produzione. Scegli la risposta che daresti davvero. Una risposta sbagliata non è un problema: Sam ti dirà perché.",
    "es": "Estás en la envolvedora flow pack con Sam, responsable de producción. Elige la respuesta que realmente darías. Una respuesta incorrecta no es un problema: Sam te dirá por qué.",
    "pt-BR": "Você está na embaladora flow pack com Sam, responsável pela produção. Escolha a resposta que você daria de verdade. Uma resposta errada não é problema: Sam vai explicar por quê.",
    "hi": "आप फ्लो रैपर पर Sam के साथ हैं, जो प्रोडक्शन सुपरवाइज़र हैं। वह उत्तर चुनें जो आप सच में देंगे। गलत उत्तर कोई समस्या नहीं है: Sam आपको बताएँगे क्यों।"
  },
  "PO-20015 is going slower than planned. Where do you look first?": {
    "it": "PO-20015 sta andando più lento del previsto. Dove guardi per prima cosa?",
    "es": "La PO-20015 va más lenta de lo planeado. ¿Dónde miras primero?",
    "pt-BR": "A PO-20015 está mais lenta do que o planejado. Onde você olha primeiro?",
    "hi": "PO-20015 प्लान से धीमा चल रहा है। आप सबसे पहले कहाँ देखेंगे?"
  },
  "At the speed on my order card, against the target.": {
    "it": "La velocità sulla card del mio ordine, rispetto al target.",
    "es": "La velocidad en la tarjeta de mi orden, frente al objetivo.",
    "pt-BR": "A velocidade no card da minha ordem, em relação à meta.",
    "hi": "अपने ऑर्डर कार्ड पर स्पीड, टारगेट के मुकाबले।"
  },
  "Right: 20,4K against 24K Bar per hour, right there on the card.": {
    "it": "Giusto: 20,4K contro 24K Bar all'ora, proprio lì sulla card.",
    "es": "Correcto: 20,4K frente a 24K Bar por hora, ahí mismo en la tarjeta.",
    "pt-BR": "Certo: 20,4K para uma meta de 24K Bar por hora, ali mesmo no card.",
    "hi": "सही: 24K के मुकाबले 20.4K Bar प्रति घंटा, वहीं कार्ड पर।"
  },
  "In the Events tab.": {
    "it": "Nella scheda Events.",
    "es": "En la pestaña Events.",
    "pt-BR": "Na aba Events.",
    "hi": "Events टैब में।"
  },
  "Events tell you what happened; the speed against the target is on the card. Try again.": {
    "it": "In Events vedi che cosa è successo; la velocità rispetto al target è sulla card. Riprova.",
    "es": "En Events ves lo que pasó; la velocidad frente al objetivo está en la tarjeta. Inténtalo de nuevo.",
    "pt-BR": "Em Events você vê o que aconteceu; a velocidade em relação à meta está no card. Tente de novo.",
    "hi": "Events टैब में दिखता है कि क्या हुआ; टारगेट के मुकाबले स्पीड कार्ड पर है। फिर से कोशिश करें।"
  },
  "In the Activities tab.": {
    "it": "Nella scheda Activities.",
    "es": "En la pestaña Activities.",
    "pt-BR": "Na aba Activities.",
    "hi": "Activities टैब में।"
  },
  "Activities are your tasks; the speed against the target is on your order card. Try again.": {
    "it": "In Activities trovi i tuoi compiti; la velocità rispetto al target è sulla card del tuo ordine. Riprova.",
    "es": "En Activities están tus tareas; la velocidad frente al objetivo está en la tarjeta de tu orden. Inténtalo de nuevo.",
    "pt-BR": "Em Activities estão as suas tarefas; a velocidade em relação à meta está no card da sua ordem. Tente de novo.",
    "hi": "Activities टैब में आपके काम हैं; टारगेट के मुकाबले स्पीड आपके ऑर्डर कार्ड पर है। फिर से कोशिश करें।"
  },
  "Is there another order for your machine, besides PO-20015?": {
    "it": "C'è un altro ordine per la tua macchina, oltre a PO-20015?",
    "es": "¿Hay otra orden para tu máquina, además de la PO-20015?",
    "pt-BR": "Existe outra ordem para a sua máquina, além da PO-20015?",
    "hi": "क्या PO-20015 के अलावा आपकी मशीन के लिए कोई और ऑर्डर है?"
  },
  "Yes: in the Orders tab, PO-20016, still NEW.": {
    "it": "Sì: nella scheda Orders, PO-20016, ancora NEW.",
    "es": "Sí: en la pestaña Orders, la PO-20016, todavía NEW.",
    "pt-BR": "Sim: na aba Orders, a PO-20016, ainda NEW.",
    "hi": "हाँ: Orders टैब में, PO-20016, अभी NEW।"
  },
  "Right: the Orders tab lists the orders of your machine.": {
    "it": "Giusto: la scheda Orders elenca gli ordini della tua macchina.",
    "es": "Correcto: la pestaña Orders muestra las órdenes de tu máquina.",
    "pt-BR": "Certo: a aba Orders lista as ordens da sua máquina.",
    "hi": "सही: Orders टैब आपकी मशीन के ऑर्डर दिखाता है।"
  },
  "No: a machine has one order at a time.": {
    "it": "No: una macchina ha un ordine alla volta.",
    "es": "No: una máquina tiene una sola orden a la vez.",
    "pt-BR": "Não: uma máquina tem uma ordem por vez.",
    "hi": "नहीं: एक मशीन पर एक समय में एक ही ऑर्डर होता है।"
  },
  "One runs at a time, but the Orders tab lists them all: PO-20016 is there, NEW. Try again.": {
    "it": "Ne gira uno alla volta, ma la scheda Orders li elenca tutti: c'è PO-20016, NEW. Riprova.",
    "es": "Solo una está en curso a la vez, pero la pestaña Orders las muestra todas: ahí está la PO-20016, NEW. Inténtalo de nuevo.",
    "pt-BR": "Roda uma por vez, mas a aba Orders lista todas: a PO-20016 está lá, NEW. Tente de novo.",
    "hi": "एक समय में एक ही चलता है, लेकिन Orders टैब सभी दिखाता है: PO-20016 वहाँ है, NEW। फिर से कोशिश करें।"
  },
  "I have to ask the ERP.": {
    "it": "Devo chiedere all'ERP.",
    "es": "Tengo que preguntarle al ERP.",
    "pt-BR": "Preciso perguntar ao ERP.",
    "hi": "मुझे ERP से पूछना होगा।"
  },
  "The orders of your machine are in TilliT, in the Orders tab. Try again.": {
    "it": "Gli ordini della tua macchina sono in TilliT, nella scheda Orders. Riprova.",
    "es": "Las órdenes de tu máquina están en TilliT, en la pestaña Orders. Inténtalo de nuevo.",
    "pt-BR": "As ordens da sua máquina estão no TilliT, na aba Orders. Tente de novo.",
    "hi": "आपकी मशीन के ऑर्डर TilliT में हैं, Orders टैब में। फिर से कोशिश करें।"
  },
  "That is your Station View: your order on the left, your work in the middle.": {
    "it": "Questa è la tua Station View: il tuo ordine a sinistra, il tuo lavoro al centro.",
    "es": "Esta es tu Station View: tu orden a la izquierda, tu trabajo en el centro.",
    "pt-BR": "Essa é a sua Station View: a sua ordem à esquerda, o seu trabalho no meio.",
    "hi": "यही आपका Station View है: बाईं ओर आपका ऑर्डर, बीच में आपका काम।"
  },
  "Two exercises done: the way to your Station View, and where to find what.": {
    "it": "Due esercizi fatti: la strada fino alla tua Station View e dove si trova ogni cosa.",
    "es": "Dos ejercicios hechos: el camino hasta tu Station View, y dónde encontrar cada cosa.",
    "pt-BR": "Dois exercícios feitos: o caminho até a sua Station View e onde encontrar cada coisa.",
    "hi": "दो अभ्यास पूरे: आपके Station View तक का रास्ता, और क्या कहाँ मिलता है।"
  },
  "In the Station View of your machine, what is in the left column?": {
    "it": "Nella Station View della tua macchina, che cosa c'è nella colonna di sinistra?",
    "es": "En la Station View de tu máquina, ¿qué hay en la columna de la izquierda?",
    "pt-BR": "Na Station View da sua máquina, o que fica na coluna da esquerda?",
    "hi": "आपकी मशीन के Station View में बाएँ कॉलम में क्या है?"
  },
  "The tabs Activities, Orders and Events": {
    "it": "Le schede Activities, Orders ed Events",
    "es": "Las pestañas Activities, Orders y Events",
    "pt-BR": "As abas Activities, Orders e Events",
    "hi": "Activities, Orders और Events टैब"
  },
  "Your operation: its card, Actions, Activities and Run rate": {
    "it": "La tua operazione: la sua card, Actions, Activities e Run rate",
    "es": "Tu operación: su tarjeta, Actions, Activities y Run rate",
    "pt-BR": "A sua operação: o card dela, Actions, Activities e Run rate",
    "hi": "आपका ऑपरेशन: उसका कार्ड, Actions, Activities और Run rate"
  },
  "The four machines of the line": {
    "it": "Le quattro macchine della linea",
    "es": "Las cuatro máquinas de la línea",
    "pt-BR": "As quatro máquinas da linha",
    "hi": "लाइन की चार मशीनें"
  },
  "The site and the shift": {
    "it": "Il sito e il turno",
    "es": "La planta y el turno",
    "pt-BR": "A planta e o turno",
    "hi": "साइट और शिफ्ट"
  },
  "Left: your order and what you can do with it. Middle: your work, in three tabs.": {
    "it": "A sinistra: il tuo ordine e che cosa puoi farci. Al centro: il tuo lavoro, in tre schede.",
    "es": "Izquierda: tu orden y lo que puedes hacer con ella. Centro: tu trabajo, en tres pestañas.",
    "pt-BR": "Esquerda: a sua ordem e o que você pode fazer com ela. Meio: o seu trabalho, em três abas.",
    "hi": "बाईं ओर: आपका ऑर्डर और आप उसके साथ क्या कर सकते हैं। बीच में: आपका काम, तीन टैब में।"
  },
  "The columns of the Station View.": {
    "it": "Le colonne della Station View.",
    "es": "Las columnas de la Station View.",
    "pt-BR": "As colunas da Station View.",
    "hi": "Station View के कॉलम।"
  },
  "Your order is Running and is not finished. Which button pauses it, so that it can be resumed later?": {
    "it": "Il tuo ordine è in corso e non è finito. Quale bottone lo mette in pausa, per poterlo riprendere dopo?",
    "es": "Tu orden está en curso y no ha terminado. ¿Qué botón la pone en pausa para poder reanudarla después?",
    "pt-BR": "A sua ordem está em andamento e não terminou. Qual botão coloca a ordem em pausa, para que possa ser retomada depois?",
    "hi": "आपका ऑर्डर चल रहा है और पूरा नहीं हुआ है। कौन सा बटन उसे रोकता है, ताकि उसे बाद में फिर से शुरू किया जा सके?"
  },
  "Complete Order": {
    "it": "Complete Order",
    "es": "Complete Order",
    "pt-BR": "Complete Order",
    "hi": "Complete Order"
  },
  "Start Activity": {
    "it": "Start Activity",
    "es": "Start Activity",
    "pt-BR": "Start Activity",
    "hi": "Start Activity"
  },
  "Suspend Order": {
    "it": "Suspend Order",
    "es": "Suspend Order",
    "pt-BR": "Suspend Order",
    "hi": "Suspend Order"
  },
  "Ready Order": {
    "it": "Ready Order",
    "es": "Ready Order",
    "pt-BR": "Ready Order",
    "hi": "Ready Order"
  },
  "Suspend Order pauses the order, and it can be resumed. Complete Order is for an order that is finished.": {
    "it": "Suspend Order mette in pausa l'ordine, che si può riprendere. Complete Order è per un ordine finito.",
    "es": "Suspend Order pausa la orden, y se puede reanudar. Complete Order es para una orden terminada.",
    "pt-BR": "Suspend Order pausa a ordem, e ela pode ser retomada. Complete Order é para uma ordem terminada.",
    "hi": "Suspend Order ऑर्डर को कुछ समय के लिए रोकता है, और उसे फिर से शुरू किया जा सकता है। Complete Order पूरे हो चुके ऑर्डर के लिए है।"
  },
  "Actions, under the card of your order.": {
    "it": "Actions, sotto la card del tuo ordine.",
    "es": "Actions, debajo de la tarjeta de tu orden.",
    "pt-BR": "Actions, embaixo do card da sua ordem.",
    "hi": "Actions, आपके ऑर्डर के कार्ड के नीचे।"
  },
  "Where do you see that the machine stopped for 3 minutes at 7:12?": {
    "it": "Dove vedi che la macchina si è fermata per 3 minuti alle 7:12?",
    "es": "¿Dónde ves que la máquina se detuvo 3 minutos a las 7:12?",
    "pt-BR": "Onde você vê que a máquina parou por 3 minutos às 7:12?",
    "hi": "आप कहाँ देखते हैं कि मशीन 7:12 बजे 3 मिनट के लिए रुकी थी?"
  },
  "In the Events tab": {
    "it": "Nella scheda Events",
    "es": "En la pestaña Events",
    "pt-BR": "Na aba Events",
    "hi": "Events टैब में"
  },
  "In Details": {
    "it": "In Details",
    "es": "En Details",
    "pt-BR": "Em Details",
    "hi": "Details में"
  },
  "In the Activities tab": {
    "it": "Nella scheda Activities",
    "es": "En la pestaña Activities",
    "pt-BR": "Na aba Activities",
    "hi": "Activities टैब में"
  },
  "In Actions": {
    "it": "In Actions",
    "es": "En Actions",
    "pt-BR": "Em Actions",
    "hi": "Actions में"
  },
  "Events list what happened on your machine: machine states, order and activity events. Click a Short stop to see how long it lasted.": {
    "it": "In Events trovi che cosa è successo sulla tua macchina: stati della macchina, eventi degli ordini e delle attività. Clicca uno Short stop per vedere quanto è durato.",
    "es": "En Events ves lo que pasó en tu máquina: estados de la máquina, eventos de órdenes y de actividades. Haz clic en un Short stop para ver cuánto duró.",
    "pt-BR": "Em Events você vê o que aconteceu na sua máquina: estados da máquina, eventos de ordens e de atividades. Clique em um Short stop para ver quanto tempo durou.",
    "hi": "Events टैब में आपकी मशीन पर हुए इवेंट दिखते हैं: मशीन की स्थितियाँ, ऑर्डर और ऐक्टिविटीज़ के इवेंट। Short stop पर क्लिक करके देखें कि वह कितनी देर चला।"
  },
  "The Events tab, in the middle column.": {
    "it": "La scheda Events, nella colonna centrale.",
    "es": "La pestaña Events, en la columna del centro.",
    "pt-BR": "A aba Events, na coluna do meio.",
    "hi": "Events टैब, बीच वाले कॉलम में।"
  },
  "From the Cockpit to your machine: your order, its actions, your work in three tabs.": {
    "it": "Dal Cockpit alla tua macchina: il tuo ordine, le sue Actions, il tuo lavoro in tre schede.",
    "es": "Del Cockpit a tu máquina: tu orden, sus Actions, tu trabajo en tres pestañas.",
    "pt-BR": "Do Cockpit à sua máquina: a sua ordem, as Actions dela, o seu trabalho em três abas.",
    "hi": "Cockpit से आपकी मशीन तक: आपका ऑर्डर, उसके Actions, तीन टैब में आपका काम।"
  },
  "Reading the Station View of a machine": {
    "it": "Leggere la Station View di una macchina",
    "es": "Leer la Station View de una máquina",
    "pt-BR": "Ler a Station View de uma máquina",
    "hi": "मशीन का Station View पढ़ना"
  },
  "What is the difference between Suspend and Complete?": {
    "it": "Che differenza c'è tra Suspend e Complete?",
    "es": "¿Cuál es la diferencia entre Suspend y Complete?",
    "pt-BR": "Qual é a diferença entre Suspend e Complete?",
    "hi": "Suspend और Complete में क्या अंतर है?"
  },
  "Suspend Order pauses the order: you can resume it later. Complete Order completes it, when it is finished. Both ask for a confirmation.": {
    "it": "Suspend Order mette in pausa l'ordine: puoi riprenderlo dopo. Complete Order lo completa quando è finito. Entrambi chiedono una conferma.",
    "es": "Suspend Order pausa la orden: puedes reanudarla después. Complete Order la completa cuando está terminada. Los dos piden una confirmación.",
    "pt-BR": "Suspend Order pausa a ordem: você pode retomá-la depois. Complete Order a conclui quando está terminada. Os dois pedem uma confirmação.",
    "hi": "Suspend Order ऑर्डर को कुछ समय के लिए रोकता है: आप उसे बाद में फिर से शुरू कर सकते हैं। Complete Order उसे पूरा करता है, जब वह खत्म हो जाए। दोनों पुष्टि माँगते हैं।"
  },
  "What are the three tabs in the middle?": {
    "it": "Quali sono le tre schede al centro?",
    "es": "¿Cuáles son las tres pestañas del centro?",
    "pt-BR": "Quais são as três abas do meio?",
    "hi": "बीच के तीन टैब कौन से हैं?"
  },
  "Activities lists your activities (Active filter on by default), Orders the orders of your machine, Events what happened: machine states, order and activity events.": {
    "it": "In Activities trovi le tue attività (filtro Active inserito di default), in Orders gli ordini della tua macchina, in Events che cosa è successo: stati della macchina, eventi degli ordini e delle attività.",
    "es": "En Activities ves tus actividades (filtro Active activado de forma predeterminada), en Orders las órdenes de tu máquina, en Events lo que pasó: estados de la máquina, eventos de órdenes y de actividades.",
    "pt-BR": "Em Activities você encontra as suas atividades (filtro Active ligado por padrão), em Orders as ordens da sua máquina, em Events o que aconteceu: estados da máquina, eventos de ordens e de atividades.",
    "hi": "Activities टैब में आपकी ऐक्टिविटीज़ दिखती हैं (डिफ़ॉल्ट रूप से Active फ़िल्टर चालू), Orders में आपकी मशीन के ऑर्डर, Events में क्या हुआ: मशीन की स्थितियाँ, ऑर्डर और ऐक्टिविटीज़ के इवेंट।"
  },
  "What is the A in the top bar?": {
    "it": "Che cos'è la A nella barra in alto?",
    "es": "¿Qué es la A de la barra superior?",
    "pt-BR": "O que é o A na barra superior?",
    "hi": "ऊपर की बार में A क्या है?"
  },
  "The availability of the shift, one of the three parts of OEE (Availability × Performance × Quality). A low availability means the machine was stopped.": {
    "it": "La disponibilità del turno, una delle tre parti dell'OEE (Availability × Performance × Quality). Una disponibilità bassa vuol dire che la macchina è stata ferma.",
    "es": "La disponibilidad del turno, una de las tres partes del OEE (Availability × Performance × Quality). Una disponibilidad baja significa que la máquina estuvo detenida.",
    "pt-BR": "A disponibilidade do turno, uma das três partes do OEE (Availability × Performance × Quality). Uma disponibilidade baixa significa que a máquina ficou parada.",
    "hi": "शिफ्ट की उपलब्धता, OEE के तीन हिस्सों में से एक (Availability × Performance × Quality)। कम उपलब्धता का मतलब है कि मशीन रुकी हुई थी।"
  },
  "How does a new order start?": {
    "it": "Come parte un nuovo ordine?",
    "es": "¿Cómo empieza una orden nueva?",
    "pt-BR": "Como uma nova ordem começa?",
    "hi": "नया ऑर्डर कैसे शुरू होता है?"
  },
  "In this line it arrives NEW from the ERP. The operator makes it Ready, then Start, from Actions in the Station View of the machine: each step is confirmed. Start makes it Running, and from then on the counts land on it.": {
    "it": "In questa linea arriva NEW dall'ERP. L'operatore lo mette in Ready, poi preme Start, da Actions nella Station View della macchina: ogni passo va confermato. Start lo porta in Running, e da quel momento i conteggi vanno su quell'ordine.",
    "es": "En esta línea llega NEW desde el ERP. El operador la pasa a Ready y luego le da Start, desde Actions en la Station View de la máquina: cada paso se confirma. Start la pone en Running, y desde ese momento los conteos se registran en ella.",
    "pt-BR": "Nesta linha ela chega NEW do ERP. O operador a coloca em Ready e depois aciona Start, pelas Actions na Station View da máquina: cada passo é confirmado. Start a coloca em Running, e a partir daí as contagens são registradas nela.",
    "hi": "इस लाइन में यह ERP से NEW आता है। ऑपरेटर इसे मशीन के Station View में Actions से Ready करता है, फिर Start दबाता है: हर चरण की पुष्टि होती है। Start इसे Running बनाता है, और तब से गिनती इस पर दर्ज होती है।"
  }
});
// ── /cap2 ──
// ── 2livelli ── 13/10: config TilliT a 2 livelli (linee → macchine, Bar Packaging), viola OFFLINE, A·P·Q.
// Solo le frasi cambiate nei capitoli 1 e 2 (PROPOSTA_TESTI_2LIVELLI_CAP1-2_2026-10-13). IT da rivedere
// da Giulia; ES / PT-BR / HI = bozza AI. Le chiavi vecchie sopra restano (non più usate, innocue).
Object.assign(PKX_DICT, {
  "Behind you is the Bar Packaging line: a flow wrapper, a cartoner, a case packer and a palletiser, from four different builders. It is 7:45 and order PO-20015 is running. In this chapter you read the line in the Cockpit of TilliT, from the lines of the site down to each machine.": {
    "it": "Alle tue spalle c'è la linea Bar Packaging: un'incartatrice flow-pack, un'astucciatrice, un'incartonatrice e un pallettizzatore, di quattro costruttori diversi. Sono le 7:45 ed è in corso l'ordine PO-20015. In questo capitolo leggi la linea nel Cockpit di TilliT, dalle linee del sito fino a ogni macchina.",
    "es": "Detrás de ti está la línea Bar Packaging: una envolvedora flow pack, una encartonadora, una encajonadora y una paletizadora, de cuatro fabricantes distintos. Son las 7:45 y está en curso la orden PO-20015. En este capítulo lees la línea en el Cockpit de TilliT, desde las líneas de la planta hasta cada máquina.",
    "pt-BR": "Atrás de você está a linha Bar Packaging: uma embaladora flow pack, uma encartuchadeira, uma encaixotadora e uma paletizadora, de quatro fabricantes diferentes. São 7:45 e a ordem PO-20015 está em andamento. Neste capítulo, você lê a linha no Cockpit do TilliT, das linhas da planta até cada máquina.",
    "hi": "आपके पीछे Bar Packaging लाइन है: एक फ्लो रैपर, एक कार्टनर, एक केस पैकर और एक पैलेटाइज़र, चार अलग-अलग निर्माताओं के। अभी 7:45 बजे हैं और ऑर्डर PO-20015 चल रहा है। इस अध्याय में आप TilliT के Cockpit में लाइन को पढ़ेंगे, साइट की लाइनों से लेकर हर मशीन तक।"
  },
  "Find the line behind you in the Cockpit and open its machines": {
    "it": "Trovare nel Cockpit la linea alle tue spalle e aprirne le macchine",
    "es": "Encontrar en el Cockpit la línea que está detrás de ti y abrir sus máquinas",
    "pt-BR": "Encontrar no Cockpit a linha atrás de você e abrir as máquinas dela",
    "hi": "Cockpit में अपने पीछे वाली लाइन ढूँढें और उसकी मशीनें खोलें"
  },
  "This is the Cockpit of the Pack Expo Chicago site. It opens at the top level: the lines of the site.": {
    "it": "Questo è il Cockpit del sito Pack Expo Chicago. Si apre al livello più alto: le linee del sito.",
    "es": "Este es el Cockpit de la planta Pack Expo Chicago. Se abre en el nivel más alto: las líneas de la planta.",
    "pt-BR": "Este é o Cockpit da planta Pack Expo Chicago. Ele abre no nível mais alto: as linhas da planta.",
    "hi": "यह Pack Expo Chicago साइट का Cockpit है। यह सबसे ऊपरी स्तर पर खुलता है: साइट की लाइनें।"
  },
  "Go down with Drill-down": {
    "it": "Scendi con Drill-down",
    "es": "Baja con Drill-down",
    "pt-BR": "Desça com Drill-down",
    "hi": "Drill-down से नीचे जाएँ"
  },
  "Site, line, machine: this is the asset hierarchy of TilliT. Every order, count and activity belongs to one asset of it.": {
    "it": "Sito, linea, macchina: è la gerarchia degli asset di TilliT. Ogni ordine, conteggio e attività appartiene a uno dei suoi asset.",
    "es": "Planta, línea, máquina: es la jerarquía de activos de TilliT. Cada orden, conteo y actividad pertenece a uno de sus activos.",
    "pt-BR": "Planta, linha, máquina: esta é a hierarquia de ativos do TilliT. Cada ordem, contagem e atividade pertence a um ativo dessa hierarquia.",
    "hi": "साइट, लाइन, मशीन: यह TilliT की एसेट हायरार्की है। हर ऑर्डर, गिनती और ऐक्टिविटी इसके किसी एक एसेट से जुड़ी होती है।"
  },
  "One Drill-down takes you from the lines of the site to the machines of your line.": {
    "it": "Con un Drill-down passi dalle linee del sito alle macchine della tua linea.",
    "es": "Con un Drill-down pasas de las líneas de la planta a las máquinas de tu línea.",
    "pt-BR": "Com um Drill-down você vai das linhas da planta às máquinas da sua linha.",
    "hi": "एक Drill-down आपको साइट की लाइनों से आपकी लाइन की मशीनों तक ले जाता है।"
  },
  "Open Bar Packaging": {
    "it": "Apri Bar Packaging",
    "es": "Abre Bar Packaging",
    "pt-BR": "Abra Bar Packaging",
    "hi": "Bar Packaging खोलें"
  },
  "Four lines: Bar Bakery, Bar Packaging, Pouch to Shelf, Tube in Box. Bar Packaging, the green one, is the line behind you: click its Drill-down.": {
    "it": "Quattro linee: Bar Bakery, Bar Packaging, Pouch to Shelf, Tube in Box. Bar Packaging, quella verde, è la linea alle tue spalle: clicca il suo Drill-down.",
    "es": "Cuatro líneas: Bar Bakery, Bar Packaging, Pouch to Shelf, Tube in Box. Bar Packaging, la verde, es la línea que está detrás de ti: haz clic en su Drill-down.",
    "pt-BR": "Quatro linhas: Bar Bakery, Bar Packaging, Pouch to Shelf, Tube in Box. Bar Packaging, a verde, é a linha atrás de você: clique no Drill-down dela.",
    "hi": "चार लाइनें: Bar Bakery, Bar Packaging, Pouch to Shelf, Tube in Box। Bar Packaging, हरे रंग वाली, आपके पीछे वाली लाइन है: उसके Drill-down पर क्लिक करें।"
  },
  "The machines of Bar Packaging, one card each: ACMA Flow Wrap, RAJ Cartoner, MGS Case Packer, FLX Palletiser.": {
    "it": "Le macchine di Bar Packaging, una card ciascuna: ACMA Flow Wrap, RAJ Cartoner, MGS Case Packer, FLX Palletiser.",
    "es": "Las máquinas de Bar Packaging, una tarjeta cada una: ACMA Flow Wrap, RAJ Cartoner, MGS Case Packer, FLX Palletiser.",
    "pt-BR": "As máquinas de Bar Packaging, um card para cada uma: ACMA Flow Wrap, RAJ Cartoner, MGS Case Packer, FLX Palletiser.",
    "hi": "Bar Packaging की मशीनें, हर एक का अपना कार्ड: ACMA Flow Wrap, RAJ Cartoner, MGS Case Packer, FLX Palletiser।"
  },
  "Not this one. Click Drill-down on Bar Packaging, the green card.": {
    "it": "Non questa. Clicca Drill-down su Bar Packaging, la card verde.",
    "es": "Esta no. Haz clic en Drill-down en Bar Packaging, la tarjeta verde.",
    "pt-BR": "Não é esta. Clique em Drill-down em Bar Packaging, o card verde.",
    "hi": "यह नहीं। हरे कार्ड Bar Packaging के Drill-down पर क्लिक करें।"
  },
  "Drill-down is the right-hand button at the bottom of the green Bar Packaging card.": {
    "it": "Drill-down è il bottone a destra in fondo alla card verde Bar Packaging.",
    "es": "Drill-down es el botón de la derecha, en la parte de abajo de la tarjeta verde Bar Packaging.",
    "pt-BR": "Drill-down é o botão da direita, na parte de baixo do card verde Bar Packaging.",
    "hi": "Drill-down, हरे Bar Packaging कार्ड में नीचे दाईं ओर वाला बटन है।"
  },
  "That line has no order running now. The line behind you is Bar Packaging, the green card.": {
    "it": "Su quella linea ora non è in corso nessun ordine. La linea alle tue spalle è Bar Packaging, la card verde.",
    "es": "Esa línea no tiene ninguna orden en curso ahora. La línea que está detrás de ti es Bar Packaging, la tarjeta verde.",
    "pt-BR": "Essa linha não tem nenhuma ordem rodando agora. A linha atrás de você é Bar Packaging, o card verde.",
    "hi": "उस लाइन पर अभी कोई ऑर्डर नहीं चल रहा है। आपके पीछे वाली लाइन Bar Packaging है, हरा कार्ड।"
  },
  "Purple · OFFLINE": {
    "it": "Viola · OFFLINE",
    "es": "Morado · OFFLINE",
    "pt-BR": "Roxo · OFFLINE",
    "hi": "बैंगनी · OFFLINE"
  },
  "The machine is connected, but it is not running": {
    "it": "La macchina è collegata, ma non è in marcia",
    "es": "La máquina está conectada, pero no está en marcha",
    "pt-BR": "A máquina está conectada, mas não está rodando",
    "hi": "मशीन जुड़ी हुई है, लेकिन चल नहीं रही है"
  },
  "No data: the machine is not connected": {
    "it": "Nessun dato: la macchina non è collegata",
    "es": "Sin datos: la máquina no está conectada",
    "pt-BR": "Sem dados: a máquina não está conectada",
    "hi": "कोई डेटा नहीं: मशीन जुड़ी हुई नहीं है"
  },
  "One click down, one card per machine, one order on four machines.": {
    "it": "Un clic per scendere, una card per macchina, un ordine su quattro macchine.",
    "es": "Un clic hacia abajo, una tarjeta por máquina, una orden en cuatro máquinas.",
    "pt-BR": "Um clique para descer, um card por máquina, uma ordem em quatro máquinas.",
    "hi": "नीचे जाने के लिए एक क्लिक, हर मशीन का एक कार्ड, चार मशीनों पर एक ऑर्डर।"
  },
  "You are in the Cockpit, on the lines of the site. How do you reach the card of the ACMA Flow Wrap?": {
    "it": "Sei nel Cockpit, sulle linee del sito. Come arrivi alla card dell'ACMA Flow Wrap?",
    "es": "Estás en el Cockpit, en las líneas de la planta. ¿Cómo llegas a la tarjeta de la ACMA Flow Wrap?",
    "pt-BR": "Você está no Cockpit, nas linhas da planta. Como você chega ao card da ACMA Flow Wrap?",
    "hi": "आप Cockpit में, साइट की लाइनों पर हैं। ACMA Flow Wrap के कार्ड तक कैसे पहुँचेंगे?"
  },
  "Station View on Bar Packaging": {
    "it": "Station View su Bar Packaging",
    "es": "Station View en Bar Packaging",
    "pt-BR": "Station View em Bar Packaging",
    "hi": "Bar Packaging पर Station View"
  },
  "Drill-down on Bar Packaging": {
    "it": "Drill-down su Bar Packaging",
    "es": "Drill-down en Bar Packaging",
    "pt-BR": "Drill-down em Bar Packaging",
    "hi": "Bar Packaging पर Drill-down"
  },
  "Drill-down on Bar Bakery": {
    "it": "Drill-down su Bar Bakery",
    "es": "Drill-down en Bar Bakery",
    "pt-BR": "Drill-down em Bar Bakery",
    "hi": "Bar Bakery पर Drill-down"
  },
  "Filter, then Bar Packaging": {
    "it": "Filter, poi Bar Packaging",
    "es": "Filter, luego Bar Packaging",
    "pt-BR": "Filter, depois Bar Packaging",
    "hi": "Filter, फिर Bar Packaging"
  },
  "Drill-down goes one level down: from the lines to their machines. Station View opens the view of that asset, it does not go down.": {
    "it": "Drill-down scende di un livello: dalle linee alle loro macchine. Station View apre la vista di quell'asset, non scende.",
    "es": "Drill-down baja un nivel: de las líneas a sus máquinas. Station View abre la vista de ese activo, no baja.",
    "pt-BR": "O Drill-down desce um nível: das linhas às máquinas delas. A Station View abre a visualização daquele ativo, não desce.",
    "hi": "Drill-down एक स्तर नीचे जाता है: लाइनों से उनकी मशीनों तक। Station View उस एसेट का व्यू खोलता है, नीचे नहीं जाता।"
  },
  "Cockpit › Bar Packaging.": {
    "it": "Cockpit › Bar Packaging.",
    "es": "Cockpit › Bar Packaging.",
    "pt-BR": "Cockpit › Bar Packaging.",
    "hi": "Cockpit › Bar Packaging."
  },
  "From the lines of the site to the machine with one Drill-down, one card per machine, one order split into one operation per machine.": {
    "it": "Dalle linee del sito alla macchina con un Drill-down, una card per macchina, un ordine diviso in un'operazione per macchina.",
    "es": "De las líneas de la planta a la máquina con un Drill-down, una tarjeta por máquina, una orden dividida en una operación por máquina.",
    "pt-BR": "Das linhas da planta à máquina com um Drill-down, um card por máquina, uma ordem dividida em uma operação por máquina.",
    "hi": "एक Drill-down में साइट की लाइनों से मशीन तक, हर मशीन का एक कार्ड, एक ऑर्डर जो हर मशीन के लिए एक ऑपरेशन में बँटा है।"
  },
  "You start where chapter 1 ended: the four machines of Bar Packaging in the Cockpit. You are the operator of the flow wrapper.": {
    "it": "Parti da dove è finito il capitolo 1: le quattro macchine di Bar Packaging nel Cockpit. Conduci l'incartatrice flow-pack.",
    "es": "Empiezas donde terminó el capítulo 1: las cuatro máquinas de Bar Packaging en el Cockpit. Operas la envolvedora flow pack.",
    "pt-BR": "Você começa onde o capítulo 1 terminou: as quatro máquinas de Bar Packaging no Cockpit. Você opera a embaladora flow pack.",
    "hi": "आप वहीं से शुरू करते हैं जहाँ अध्याय 1 खत्म हुआ था: Cockpit में Bar Packaging की चार मशीनें। आप फ्लो रैपर के ऑपरेटर हैं।"
  },
  "Your machine, in the colour of its state, with how long it has been in it.": {
    "it": "La tua macchina, nel colore del suo stato, e da quanto tempo è in quello stato.",
    "es": "Tu máquina, en el color de su estado, y cuánto tiempo lleva así.",
    "pt-BR": "A sua máquina, na cor do estado, e há quanto tempo ela está nesse estado.",
    "hi": "आपकी मशीन, उसकी स्थिति के रंग में, और वह कितने समय से इस स्थिति में है।"
  },
  "A, P and Q": {
    "it": "A, P e Q",
    "es": "A, P y Q",
    "pt-BR": "A, P e Q",
    "hi": "A, P और Q"
  },
  "A, P and Q: the availability, performance and quality of the shift, the three parts of OEE.": {
    "it": "A, P e Q: disponibilità, prestazioni e qualità del turno, le tre parti dell'OEE.",
    "es": "A, P y Q: la disponibilidad, el rendimiento y la calidad del turno, las tres partes del OEE.",
    "pt-BR": "A, P e Q: a disponibilidade, o desempenho e a qualidade do turno, as três partes do OEE.",
    "hi": "A, P और Q: शिफ्ट की उपलब्धता, परफ़ॉर्मेंस और क्वालिटी, OEE के तीन हिस्से।"
  },
  "What are A, P and Q in the top bar?": {
    "it": "Che cosa sono A, P e Q nella barra in alto?",
    "es": "¿Qué son A, P y Q en la barra superior?",
    "pt-BR": "O que são A, P e Q na barra superior?",
    "hi": "ऊपर की बार में A, P और Q क्या हैं?"
  },
  "The three parts of OEE for the shift: Availability, Performance and Quality (OEE = A × P × Q). A low A means the machine was stopped.": {
    "it": "Le tre parti dell'OEE del turno: disponibilità, prestazioni e qualità (OEE = A × P × Q). Una A bassa vuol dire che la macchina è stata ferma.",
    "es": "Las tres partes del OEE del turno: Availability, Performance y Quality (OEE = A × P × Q). Una A baja significa que la máquina estuvo detenida.",
    "pt-BR": "As três partes do OEE do turno: Availability, Performance e Quality (OEE = A × P × Q). Um A baixo significa que a máquina ficou parada.",
    "hi": "शिफ्ट के लिए OEE के तीन हिस्से: उपलब्धता (Availability), परफ़ॉर्मेंस और क्वालिटी (OEE = A × P × Q)। कम A का मतलब है कि मशीन रुकी हुई थी।"
  },
  "Four clicks, from the lines of the site down to your activities.": {
    "it": "Quattro clic, dalle linee del sito fino alle tue attività.",
    "es": "Cuatro clics, desde las líneas de la planta hasta tus actividades.",
    "pt-BR": "Quatro cliques, das linhas da planta até as suas atividades.",
    "hi": "चार क्लिक, साइट की लाइनों से नीचे आपकी ऐक्टिविटीज़ तक।"
  },
  "Cockpit: the lines of the site": {
    "it": "Cockpit: le linee del sito",
    "es": "Cockpit: las líneas de la planta",
    "pt-BR": "Cockpit: as linhas da planta",
    "hi": "Cockpit: साइट की लाइनें"
  },
  "Everything starts from the Cockpit, at the level of the lines.": {
    "it": "Tutto parte dal Cockpit, al livello delle linee.",
    "es": "Todo empieza en el Cockpit, en el nivel de las líneas.",
    "pt-BR": "Tudo começa no Cockpit, no nível das linhas.",
    "hi": "सब कुछ Cockpit से शुरू होता है, लाइनों के स्तर पर।"
  },
  "First the line, then its machine: Drill-down on Bar Packaging before the Station View of the ACMA.": {
    "it": "Prima la linea, poi la sua macchina: Drill-down su Bar Packaging prima della Station View dell'ACMA.",
    "es": "Primero la línea, luego su máquina: Drill-down en Bar Packaging antes de la Station View de la ACMA.",
    "pt-BR": "Primeiro a linha, depois a máquina dela: Drill-down em Bar Packaging antes da Station View da ACMA.",
    "hi": "पहले लाइन, फिर उसकी मशीन: ACMA के Station View से पहले Bar Packaging पर Drill-down।"
  },
  "That is the way: line, machine, then your work in its Station View.": {
    "it": "È questa la strada: linea, macchina, poi il tuo lavoro nella sua Station View.",
    "es": "Ese es el camino: línea, máquina, y luego tu trabajo en su Station View.",
    "pt-BR": "Esse é o caminho: linha, máquina, e depois o seu trabalho na Station View dela.",
    "hi": "यही रास्ता है: लाइन, मशीन, फिर उसके Station View में आपका काम।"
  }
});
// ── /2livelli ──

// ── lineecolorate ── 13/10 sera: le altre 3 linee colorate con ordine ("the second card"), giallo = STARVED
// (PROPOSTA_LINEE_COLORATE_CAP1_2026-10-13). IT da rivedere da Giulia; ES/PT-BR/HI = bozza AI.
Object.assign(PKX_DICT, {
  "Four lines: Bar Bakery, Bar Packaging, Pouch to Shelf, Tube in Box. Bar Packaging, the second card, is the line behind you: click its Drill-down.": {
    "it": "Quattro linee: Bar Bakery, Bar Packaging, Pouch to Shelf, Tube in Box. Bar Packaging, la seconda card, è la linea alle tue spalle: clicca il suo Drill-down.",
    "es": "Cuatro líneas: Bar Bakery, Bar Packaging, Pouch to Shelf, Tube in Box. Bar Packaging, la segunda tarjeta, es la línea que está detrás de ti: haz clic en su Drill-down.",
    "pt-BR": "Quatro linhas: Bar Bakery, Bar Packaging, Pouch to Shelf, Tube in Box. Bar Packaging, o segundo card, é a linha atrás de você: clique no Drill-down dela.",
    "hi": "चार लाइनें: Bar Bakery, Bar Packaging, Pouch to Shelf, Tube in Box। Bar Packaging, दूसरा कार्ड, आपके पीछे वाली लाइन है: उसके Drill-down पर क्लिक करें।"
  },
  "Not this one. Click Drill-down on Bar Packaging, the second card.": {
    "it": "Non questa. Clicca Drill-down su Bar Packaging, la seconda card.",
    "es": "Esta no. Haz clic en Drill-down en Bar Packaging, la segunda tarjeta.",
    "pt-BR": "Não é esta. Clique em Drill-down em Bar Packaging, o segundo card.",
    "hi": "यह नहीं। दूसरे कार्ड Bar Packaging के Drill-down पर क्लिक करें।"
  },
  "Drill-down is the right-hand button at the bottom of the Bar Packaging card.": {
    "it": "Drill-down è il bottone a destra in fondo alla card Bar Packaging.",
    "es": "Drill-down es el botón de la derecha, en la parte de abajo de la tarjeta Bar Packaging.",
    "pt-BR": "Drill-down é o botão da direita, na parte de baixo do card Bar Packaging.",
    "hi": "Drill-down, Bar Packaging कार्ड में नीचे दाईं ओर वाला बटन है।"
  },
  "That is another line of the site, with its own order. The line behind you is Bar Packaging, the second card.": {
    "it": "Quella è un'altra linea del sito, con il suo ordine. La linea alle tue spalle è Bar Packaging, la seconda card.",
    "es": "Esa es otra línea de la planta, con su propia orden. La línea que está detrás de ti es Bar Packaging, la segunda tarjeta.",
    "pt-BR": "Essa é outra linha da planta, com uma ordem própria. A linha atrás de você é Bar Packaging, o segundo card.",
    "hi": "वह साइट की दूसरी लाइन है, जिसका अपना ऑर्डर है। आपके पीछे वाली लाइन Bar Packaging है, दूसरा कार्ड।"
  },
  "Yellow · STARVED": {
    "it": "Giallo · STARVED",
    "es": "Amarillo · STARVED",
    "pt-BR": "Amarelo · STARVED",
    "hi": "पीला · STARVED"
  },
  "The RAJ Cartoner card turns yellow: STARVED. The operator wants to call the cartoner technician. What do you tell them?": {
    "it": "La card della RAJ Cartoner diventa gialla: STARVED. L'operatore vuole chiamare il tecnico dell'astucciatrice. Che cosa rispondi?",
    "es": "La tarjeta de la RAJ Cartoner se pone amarilla: STARVED. El operador quiere llamar al técnico de la encartonadora. ¿Qué le dices?",
    "pt-BR": "O card da RAJ Cartoner fica amarelo: STARVED. O operador quer chamar o técnico da encartuchadeira. O que você responde?",
    "hi": "RAJ Cartoner का कार्ड पीला हो जाता है: STARVED। ऑपरेटर कार्टनर के तकनीशियन को बुलाना चाहते हैं। आप उनसे क्या कहेंगे?"
  },
  "Starved means it is waiting for product from upstream. Try again.": {
    "it": "Starved vuol dire che sta aspettando prodotto da monte. Riprova.",
    "es": "Starved significa que está esperando producto desde aguas arriba. Inténtalo de nuevo.",
    "pt-BR": "Starved significa que ela está esperando produto das máquinas anteriores. Tente de novo.",
    "hi": "Starved का मतलब है कि मशीन अपस्ट्रीम से प्रोडक्ट का इंतज़ार कर रही है। फिर से कोशिश करें।"
  },
  "Look upstream first: Starved means no product is arriving.": {
    "it": "Prima guarda a monte: Starved vuol dire che non arriva prodotto.",
    "es": "Primero mira aguas arriba: Starved significa que no llega producto.",
    "pt-BR": "Olhe primeiro para as máquinas anteriores: Starved significa que não está chegando produto.",
    "hi": "पहले अपस्ट्रीम देखें: Starved का मतलब है कि प्रोडक्ट नहीं आ रहा।"
  },
  "What do Starved and Blocked mean?": {
    "it": "Che cosa vogliono dire Starved e Blocked?",
    "es": "¿Qué significan Starved y Blocked?",
    "pt-BR": "O que significam Starved e Blocked?",
    "hi": "Starved और Blocked का क्या मतलब है?"
  },
  "Starved (yellow): the machine is running, but no product is arriving from upstream. Blocked (orange): the downstream buffer is full and product cannot move forward. Each site sets up its own states and colours: these are the ones used in this course.": {
    "it": "Starved (giallo): la macchina è in marcia, ma da monte non arriva prodotto. Blocked (arancione): il buffer a valle è pieno e il prodotto non può avanzare. Ogni sito configura i propri stati e colori: questi sono quelli usati in questo corso.",
    "es": "Starved (amarillo): la máquina está en marcha, pero no llega producto desde aguas arriba. Blocked (naranja): el buffer aguas abajo está lleno y el producto no puede avanzar. Cada planta configura sus propios estados y colores: estos son los que se usan en este curso.",
    "pt-BR": "Starved (amarelo): a máquina está rodando, mas não chega produto das máquinas anteriores. Blocked (laranja): o pulmão de saída está cheio e o produto não consegue avançar. Cada planta configura os próprios estados e cores: estes são os usados neste curso.",
    "hi": "Starved (पीला): मशीन चल रही है, लेकिन अपस्ट्रीम से प्रोडक्ट नहीं आ रहा। Blocked (नारंगी): डाउनस्ट्रीम बफ़र भरा है और प्रोडक्ट आगे नहीं बढ़ सकता। हर साइट अपनी स्थितियाँ और रंग खुद सेट करती है: ये इस कोर्स में इस्तेमाल किए गए हैं।"
  }
});
// ── /lineecolorate ──

// ── video ── 14/10: riga legale nella sigla di chiusura dei video (voce HeyGen = AI, da dichiarare: Terms HeyGen §2,
// AI Act art. 50). Usata solo da 08-video/cap2-voce/build.mjs. IT da rivedere da Giulia; ES/PT-BR/HI = bozza AI.
Object.assign(PKX_DICT, {
  "Voice generated with AI": {
    "it": "Voce generata con l'AI",
    "es": "Voz generada con IA",
    "pt-BR": "Voz gerada com IA",
    "hi": "आवाज़ AI से बनाई गई है"
  }
});
// ── /video ──

// ── dati demo ── 14/10 (PROPOSTA_DATI_DEMO_E_RESET_2026-10-14): ruolo di chi assegna / tiene la live session (D1:
// un ruolo, non un nome) e le 3 note di esempio di My Notes sui capitoli fatti. IT da rivedere da Giulia; ES/PT-BR/HI = bozza AI.
Object.assign(PKX_DICT, {
  "Line supervisor": {
    "it": "Supervisore di linea",
    "es": "Supervisor de línea",
    "pt-BR": "Supervisor de linha",
    "hi": "लाइन सुपरवाइज़र"
  },
  "Who puts the order in Ready on our line: the supervisor or me?": {
    "it": "Chi mette l'ordine in Ready sulla nostra linea: il supervisore o io?",
    "es": "¿Quién pone la orden en Ready en nuestra línea: el supervisor o yo?",
    "pt-BR": "Quem coloca a ordem em Ready na nossa linha: o supervisor ou eu?",
    "hi": "हमारी लाइन पर ऑर्डर को Ready में कौन डालता है: सुपरवाइज़र या मैं?"
  },
  "Activities: open one, claim it, then submit it.": {
    "it": "Attività: aprine una, prendila in carico, poi inviala.",
    "es": "Actividades: abre una, asígnatela y luego envíala.",
    "pt-BR": "Atividades: abra uma, assuma e depois envie.",
    "hi": "ऐक्टिविटीज़: एक खोलें, उसे क्लेम करें, फिर सबमिट करें।"
  },
  "For the live Q&A: ask what purple OFFLINE means for our machines.": {
    "it": "Per la live Q&A: chiedere cosa vuol dire il viola OFFLINE per le nostre macchine.",
    "es": "Para la sesión de preguntas en vivo: preguntar qué significa el morado OFFLINE en nuestras máquinas.",
    "pt-BR": "Para a sessão de perguntas ao vivo: perguntar o que significa o roxo OFFLINE nas nossas máquinas.",
    "hi": "लाइव Q&A के लिए: पूछना है कि हमारी मशीनों पर बैंगनी OFFLINE का क्या मतलब है।"
  },
  // menu dell'avatar per chi presenta (shared.js, avatarHTML)
  "Demo menu": { "it": "Menu della demo", "es": "Menú de la demo", "pt-BR": "Menu da demo", "hi": "डेमो मेनू" },
  "Presenter mode": { "it": "Modalità presentatore", "es": "Modo presentador", "pt-BR": "Modo apresentador", "hi": "प्रेज़ेंटर मोड" },
  "On": { "it": "Attiva", "es": "Activado", "pt-BR": "Ativado", "hi": "चालू" },
  "Off": { "it": "Spenta", "es": "Desactivado", "pt-BR": "Desativado", "hi": "बंद" },
  "All sections of a chapter open, to jump straight to Quiz or Done.": {
    "it": "Tutte le sezioni del capitolo aperte, per andare subito al Quiz o alla fine.",
    "es": "Todas las secciones del capítulo abiertas, para ir directo al Quiz o al final.",
    "pt-BR": "Todas as seções do capítulo abertas, para ir direto ao Quiz ou ao final.",
    "hi": "अध्याय के सभी सेक्शन खुले, ताकि सीधे Quiz या आख़िर तक जा सकें।"
  },
  // annunci della posta (shared.js, awApplyEdition)
  "Chapter 2 now has a video": {
    "it": "Il capitolo 2 ora ha un video",
    "es": "El capítulo 2 ahora tiene un video",
    "pt-BR": "O capítulo 2 agora tem um vídeo",
    "hi": "अध्याय 2 में अब एक वीडियो है"
  },
  "Your Station View now opens with a short video, in all five languages, with subtitles.": {
    "it": "La tua Station View ora si apre con un breve video, in tutte e cinque le lingue, con i sottotitoli.",
    "es": "Tu Station View ahora empieza con un video corto, en los cinco idiomas, con subtítulos.",
    "pt-BR": "Sua Station View agora começa com um vídeo curto, nos cinco idiomas, com legendas.",
    "hi": "आपका Station View अब एक छोटे वीडियो से शुरू होता है, पाँचों भाषाओं में, सबटाइटल के साथ।"
  },
  "The training glossary is ready": {
    "it": "Il glossario del training è pronto",
    "es": "El glosario del training está listo",
    "pt-BR": "O glossário do treinamento está pronto",
    "hi": "ट्रेनिंग की शब्दावली तैयार है"
  },
  "All the TilliT terms of the training in one place, with a translation under each term. Save it as a PDF.": {
    "it": "Tutti i termini di TilliT del training in un solo posto, con la traduzione sotto ogni termine. Puoi salvarlo in PDF.",
    "es": "Todos los términos de TilliT del training en un solo lugar, con la traducción debajo de cada término. Puedes guardarlo en PDF.",
    "pt-BR": "Todos os termos do TilliT do treinamento em um só lugar, com a tradução embaixo de cada termo. Você pode salvá-lo em PDF.",
    "hi": "ट्रेनिंग के सभी TilliT शब्द एक ही जगह, हर शब्द के नीचे उसका अनुवाद। इसे PDF में सेव कर सकते हैं।"
  },
  // 15/10: riga del Learner in Team Management (dashboard.html, youTag) e placeholder dei moduli (data-ph)
  "You": { "it": "Tu", "es": "Tú", "pt-BR": "Você", "hi": "आप" },
  "e.g. Alex Morgan": { "it": "es. Alex Morgan", "es": "p. ej., Alex Morgan", "pt-BR": "ex.: Alex Morgan", "hi": "जैसे: Alex Morgan" },
  "e.g. Finish chapter 2 before your next shift": {
    "it": "es. Finire il capitolo 2 prima del prossimo turno",
    "es": "p. ej., Terminar el capítulo 2 antes del próximo turno",
    "pt-BR": "ex.: Concluir o capítulo 2 antes do próximo turno",
    "hi": "जैसे: अगली शिफ़्ट से पहले अध्याय 2 पूरा करें"
  },
  "Live Q&A session": { "it": "Sessione live di domande e risposte", "es": "Sesión de preguntas en vivo", "pt-BR": "Sessão de perguntas ao vivo", "hi": "लाइव Q&A सेशन" },
  "e.g. 9": { "it": "es. 9", "es": "p. ej., 9", "pt-BR": "ex.: 9", "hi": "जैसे: 9" },
  "What this session covers": { "it": "Di cosa parla la sessione", "es": "De qué trata la sesión", "pt-BR": "Sobre o que é a sessão", "hi": "इस सेशन में क्या होगा" },
  "Link to slides, docs or a recording": {
    "it": "Link a slide, documenti o una registrazione",
    "es": "Enlace a diapositivas, documentos o una grabación",
    "pt-BR": "Link para slides, documentos ou uma gravação",
    "hi": "स्लाइड, डॉक्यूमेंट या रिकॉर्डिंग का लिंक"
  }
});
// ── /dati demo ──

// ── collega ── 15/10: nella chat del Practice niente nomi né scena (come la voce del video) e niente supervisor
// ("mette ansia", Giulia): fa le domande un collega.
Object.assign(PKX_DICT, {
  "Colleague": { "it": "Collega", "es": "Colega", "pt-BR": "Colega", "hi": "सहकर्मी" },
  "A colleague asks you about the Cockpit. Pick the reply you would really give. A wrong reply is not a problem: you will see why.": {
    "it": "Un collega ti fa una domanda sul Cockpit. Scegli la risposta che daresti davvero. Una risposta sbagliata non è un problema: vedrai perché.",
    "es": "Un colega te hace una pregunta sobre el Cockpit. Elige la respuesta que realmente darías. Una respuesta incorrecta no es un problema: verás por qué.",
    "pt-BR": "Um colega faz uma pergunta sobre o Cockpit. Escolha a resposta que você daria de verdade. Uma resposta errada não é problema: você vai ver por quê.",
    "hi": "एक सहकर्मी आपसे Cockpit के बारे में पूछता है। वह उत्तर चुनें जो आप सच में देंगे। गलत उत्तर कोई समस्या नहीं है: आप देखेंगे क्यों।"
  },
  "A colleague asks you about the Station View. Pick the reply you would really give. A wrong reply is not a problem: you will see why.": {
    "it": "Un collega ti fa una domanda sulla Station View. Scegli la risposta che daresti davvero. Una risposta sbagliata non è un problema: vedrai perché.",
    "es": "Un colega te hace una pregunta sobre la Station View. Elige la respuesta que realmente darías. Una respuesta incorrecta no es un problema: verás por qué.",
    "pt-BR": "Um colega faz uma pergunta sobre a Station View. Escolha a resposta que você daria de verdade. Uma resposta errada não é problema: você vai ver por quê.",
    "hi": "एक सहकर्मी आपसे Station View के बारे में पूछता है। वह उत्तर चुनें जो आप सच में देंगे। गलत उत्तर कोई समस्या नहीं है: आप देखेंगे क्यों।"
  },
  "A colleague asks you what happens when an Activity comes back FAIL. Pick the reply you would really give. A wrong reply is not a problem: you will see why.": {
    "it": "Un collega ti chiede che cosa succede quando un'Activity torna FAIL. Scegli la risposta che daresti davvero. Una risposta sbagliata non è un problema: vedrai perché.",
    "es": "Un colega te pregunta qué pasa cuando una Activity da FAIL. Elige la respuesta que realmente darías. Una respuesta incorrecta no es un problema: verás por qué.",
    "pt-BR": "Um colega pergunta o que acontece quando uma Activity dá FAIL. Escolha a resposta que você daria de verdade. Uma resposta errada não é problema: você vai ver por quê.",
    "hi": "एक सहकर्मी आपसे पूछता है कि जब कोई Activity FAIL आती है तो क्या होता है। वह उत्तर चुनें जो आप सच में देंगे। गलत उत्तर कोई समस्या नहीं है: आप देखेंगे क्यों।"
  }
});
// ── /collega ──

// ── rinumerazione 16/10: il login è il capitolo 1 (stesse frasi, numero +1) ──
Object.assign(PKX_DICT, {
  "Chapter 4 · Packaging Line Training": {
    "it": "Capitolo 4 · Packaging Line Training",
    "es": "Capítulo 4 · Packaging Line Training",
    "pt-BR": "Capítulo 4 · Packaging Line Training",
    "hi": "अध्याय 4 · Packaging Line Training"
  },
  "Chapter 3 now has a video": {
    "it": "Il capitolo 3 ora ha un video",
    "es": "El capítulo 3 ahora tiene un video",
    "pt-BR": "O capítulo 3 agora tem um vídeo",
    "hi": "अध्याय 3 में अब एक वीडियो है"
  },
  "Each machine counts the order in its own unit: Bar, Carton, Case, Case. The counts come from the machines and land on the order running on each one. In this line each operator starts it in the Station View of their machine: that is chapter 3.": {
    "it": "Ogni macchina conta l'ordine nella sua unità: Bar, Carton, Case, Case. I conteggi arrivano dalle macchine e finiscono sull'ordine in corso su ciascuna. In questa linea ogni operatore lo avvia nella Station View della sua macchina: lo vedi nel capitolo 3.",
    "es": "Cada máquina cuenta la orden en su propia unidad: Bar, Carton, Case, Case. Los conteos vienen de las máquinas y se registran en la orden en curso en cada una. En esta línea cada operador la inicia en la Station View de su máquina: de eso trata el capítulo 3.",
    "pt-BR": "Cada máquina conta a ordem na própria unidade: Bar, Carton, Case, Case. As contagens vêm das máquinas e são registradas na ordem que está rodando em cada uma. Nesta linha, cada operador a inicia na Station View da própria máquina: esse é o tema do capítulo 3.",
    "hi": "हर मशीन ऑर्डर को अपनी यूनिट में गिनती है: Bar, Carton, Case, Case। गिनती मशीनों से आती है और हर मशीन पर चल रहे ऑर्डर में दर्ज होती है। इस लाइन में हर ऑपरेटर इसे अपनी मशीन के Station View में शुरू करता है: यह अध्याय 3 में है।"
  },
  "You start where chapter 2 ended: the four machines of Bar Packaging in the Cockpit. You are the operator of the flow wrapper.": {
    "it": "Parti da dove è finito il capitolo 2: le quattro macchine di Bar Packaging nel Cockpit. Conduci l'incartatrice flow-pack.",
    "es": "Empiezas donde terminó el capítulo 2: las cuatro máquinas de Bar Packaging en el Cockpit. Operas la envolvedora flow pack.",
    "pt-BR": "Você começa onde o capítulo 2 terminou: as quatro máquinas de Bar Packaging no Cockpit. Você opera a embaladora flow pack.",
    "hi": "आप वहीं से शुरू करते हैं जहाँ अध्याय 2 खत्म हुआ था: Cockpit में Bar Packaging की चार मशीनें। आप फ्लो रैपर के ऑपरेटर हैं।"
  },
  "Your activities, with the Active filter on (the default). For each one: when it was created, when it expires, who has claimed it (Unassigned: nobody yet) and its state, ACTIVE. You do one in chapter 4.": {
    "it": "Le tue attività, con il filtro Active inserito (è l'impostazione predefinita). Per ognuna: quando è stata creata, quando scade, chi l'ha presa in carico (Unassigned: ancora nessuno) e il suo stato, ACTIVE. Ne fai una nel capitolo 4.",
    "es": "Tus actividades, con el filtro Active activado (es el predeterminado). Para cada una: cuándo se creó, cuándo vence, quién la tomó (Unassigned: nadie todavía) y su estado, ACTIVE. Haces una en el capítulo 4.",
    "pt-BR": "As suas atividades, com o filtro Active ligado (é o padrão). Para cada uma: quando foi criada, quando expira, quem a assumiu (Unassigned: ninguém ainda) e o estado dela, ACTIVE. Você faz uma no capítulo 4.",
    "hi": "आपकी ऐक्टिविटीज़, Active फ़िल्टर चालू (डिफ़ॉल्ट)। हर एक के लिए: वह कब बनी, कब एक्सपायर होगी, किसने उसे क्लेम किया है (Unassigned: अभी किसी ने नहीं) और उसकी स्थिति, ACTIVE। अध्याय 4 में आप एक ऐक्टिविटी करेंगे।"
  }
});

// ── capitolo login 16/10 (PKX-00.1, copia di OP-01.1): tradotto, ritradotto alla cieca ES/PT-BR/HI, nessun cambio di significato ──
Object.assign(PKX_DICT, {
  "First time in TilliT: log in and find your way": {
    "it": "Primo accesso a TilliT: entra e orientati",
    "es": "Primera vez en TilliT: inicia sesión y ubícate",
    "pt-BR": "Primeira vez no TilliT: faça login e se oriente",
    "hi": "TilliT में पहली बार: लॉग इन करें और रास्ता पहचानें"
  },
  "TilliT works with a username and password, and it can also connect to your company Microsoft login with the Corporate Login button. This chapter covers the login page, the frame that TilliT keeps around every page, and where to check your account.": {
    "it": "In TilliT si entra con username e password, ma ci si può collegare anche al login Microsoft dell'azienda con il bottone Corporate Login. In questo capitolo vedi la pagina di login, la struttura della pagina, che in TilliT resta uguale ovunque, e dove controllare il tuo account.",
    "es": "TilliT funciona con usuario y contraseña, y también puede conectarse con el inicio de sesión Microsoft de tu empresa mediante el botón Corporate Login. En este capítulo ves la página de inicio de sesión, la estructura de la página, que en TilliT es la misma en todas partes, y dónde revisar tu cuenta.",
    "pt-BR": "O TilliT funciona com usuário e senha, e também pode se conectar ao login Microsoft da sua empresa pelo botão Corporate Login. Este capítulo mostra a página de login, a estrutura da página, que no TilliT é a mesma em todas as telas, e onde conferir a sua conta.",
    "hi": "TilliT यूज़रनेम और पासवर्ड से चलता है, और Corporate Login बटन से आपकी कंपनी के Microsoft लॉगिन से भी जुड़ सकता है। इस अध्याय में आप देखेंगे लॉगिन पेज, पेज का ढाँचा, जो TilliT में हर पेज पर एक जैसा रहता है, और अपना अकाउंट कहाँ देखना है।"
  },
  "Choose your language and log in with Corporate Login": {
    "it": "Scegli la lingua ed entra con Corporate Login",
    "es": "Elige tu idioma e inicia sesión con Corporate Login",
    "pt-BR": "Escolher o idioma e fazer login com Corporate Login",
    "hi": "अपनी भाषा चुनें और Corporate Login से लॉग इन करें"
  },
  "Recognise the frame: environment tag, left menu and language": {
    "it": "Riconosci la struttura della pagina: etichetta dell'ambiente, menu a sinistra e lingua",
    "es": "Reconoce la estructura de la página: etiqueta del entorno, menú de la izquierda e idioma",
    "pt-BR": "Reconhecer a estrutura da página: etiqueta do ambiente, menu à esquerda e idioma",
    "hi": "पेज का ढाँचा पहचानें: एनवायरनमेंट टैग, बायाँ मेनू और भाषा"
  },
  "Open your User Profile and read your role and sites": {
    "it": "Apri lo User Profile e leggi ruolo e siti",
    "es": "Abre tu User Profile y revisa tu rol y tus plantas",
    "pt-BR": "Abrir o User Profile e ver o seu papel e as suas plantas",
    "hi": "अपना User Profile खोलें और अपना रोल और साइटें देखें"
  },
  "Log in with Corporate Login": {
    "it": "Entra con Corporate Login",
    "es": "Iniciar sesión con Corporate Login",
    "pt-BR": "Fazer login com Corporate Login",
    "hi": "Corporate Login से लॉग इन करें"
  },
  "Tell Stage apart from Production": {
    "it": "Distingui Stage da Produzione",
    "es": "Distinguir Stage de Producción",
    "pt-BR": "Diferenciar Stage de Produção",
    "hi": "Stage और Production में फ़र्क पहचानें"
  },
  "Find your menu and change the interface language with the globe icon": {
    "it": "Trova il tuo menu e cambia la lingua dell'interfaccia con l'icona globo",
    "es": "Encontrar tu menú y cambiar el idioma de la interfaz con el ícono del globo",
    "pt-BR": "Encontrar o seu menu e mudar o idioma da interface pelo ícone do globo",
    "hi": "अपना मेनू ढूँढें और ग्लोब आइकन से इंटरफ़ेस की भाषा बदलें"
  },
  "Check your role and sites in User Profile": {
    "it": "Controlla ruolo e siti nello User Profile",
    "es": "Revisar tu rol y tus plantas en User Profile",
    "pt-BR": "Conferir o seu papel e as suas plantas no User Profile",
    "hi": "User Profile में अपना रोल और साइटें देखें"
  },
  "The login page": {
    "it": "La pagina di login",
    "es": "La página de inicio de sesión",
    "pt-BR": "A página de login",
    "hi": "लॉगिन पेज"
  },
  "The first page you see when you open TilliT. Follow the steps in the bar above the screen.": {
    "it": "È la prima pagina che vedi quando apri TilliT. Segui i passi nella barra sopra lo schermo.",
    "es": "Es la primera página que ves al abrir TilliT. Sigue los pasos de la barra que está arriba de la pantalla.",
    "pt-BR": "A primeira página que você vê ao abrir o TilliT. Siga os passos da barra acima da tela.",
    "hi": "TilliT खोलते ही दिखने वाला पहला पेज। स्क्रीन के ऊपर वाली पट्टी के स्टेप फ़ॉलो करें।"
  },
  "Site": {
    "it": "Sito",
    "es": "Planta",
    "pt-BR": "Planta",
    "hi": "साइट"
  },
  "Site name": {
    "it": "Nome del sito",
    "es": "Nombre de la planta",
    "pt-BR": "Nome da planta",
    "hi": "साइट का नाम"
  },
  "Click the name under Login.": {
    "it": "Clicca il nome sotto Login.",
    "es": "Haz clic en el nombre debajo de Login.",
    "pt-BR": "Clique no nome abaixo de Login.",
    "hi": "Login के नीचे वाले नाम पर क्लिक करें।"
  },
  "Your site": {
    "it": "Il tuo sito",
    "es": "Tu planta",
    "pt-BR": "Sua planta",
    "hi": "आपकी साइट"
  },
  "The login page shows the tenant it belongs to, here packexpo.": {
    "it": "La pagina di login mostra a chi appartiene, qui packexpo.",
    "es": "La página de inicio de sesión muestra a qué empresa pertenece: aquí, packexpo.",
    "pt-BR": "A página de login mostra a qual ambiente da empresa ela pertence: aqui, packexpo.",
    "hi": "लॉगिन पेज दिखाता है कि वह किस टेनेंट का है, यहाँ packexpo।"
  },
  "Language": {
    "it": "Lingua",
    "es": "Idioma",
    "pt-BR": "Idioma",
    "hi": "भाषा"
  },
  "Language selector": {
    "it": "Scelta della lingua",
    "es": "Selector de idioma",
    "pt-BR": "Seletor de idioma",
    "hi": "भाषा चुनने का बटन"
  },
  "Click English under the login box.": {
    "it": "Clicca English sotto il riquadro di login.",
    "es": "Haz clic en English, debajo del recuadro de inicio de sesión.",
    "pt-BR": "Clique em English, abaixo da caixa de login.",
    "hi": "लॉगिन बॉक्स के नीचे English पर क्लिक करें।"
  },
  "Choose the language first": {
    "it": "Prima scegli la lingua",
    "es": "Primero, elige el idioma",
    "pt-BR": "Escolha o idioma primeiro",
    "hi": "पहले भाषा चुनें"
  },
  "The language selector under the login box opens the list of languages TilliT offers.": {
    "it": "Sotto il riquadro di login trovi la scelta della lingua: apre l'elenco delle lingue disponibili in TilliT.",
    "es": "El selector de idioma, debajo del recuadro de inicio de sesión, abre la lista de idiomas que ofrece TilliT.",
    "pt-BR": "O seletor de idioma, abaixo da caixa de login, abre a lista dos idiomas que o TilliT oferece.",
    "hi": "लॉगिन बॉक्स के नीचे वाला भाषा बटन उन भाषाओं की लिस्ट खोलता है जो TilliT में मिलती हैं।"
  },
  "Pick it": {
    "it": "Sceglila",
    "es": "Elígelo",
    "pt-BR": "Escolha",
    "hi": "चुनें"
  },
  "English": {
    "it": "English",
    "es": "English",
    "pt-BR": "English",
    "hi": "English"
  },
  "Click English in the list.": {
    "it": "Clicca English nell'elenco.",
    "es": "Haz clic en English en la lista.",
    "pt-BR": "Clique em English na lista.",
    "hi": "लिस्ट में English पर क्लिक करें।"
  },
  "Pick your language": {
    "it": "Scegli la tua lingua",
    "es": "Elige tu idioma",
    "pt-BR": "Escolha o seu idioma",
    "hi": "अपनी भाषा चुनें"
  },
  "Choose your language from the list.": {
    "it": "Scegli la tua lingua dall'elenco.",
    "es": "Elige tu idioma en la lista.",
    "pt-BR": "Escolha o seu idioma na lista.",
    "hi": "लिस्ट से अपनी भाषा चुनें।"
  },
  "Log in": {
    "it": "Entra",
    "es": "Iniciar sesión",
    "pt-BR": "Entrar",
    "hi": "लॉग इन"
  },
  "Corporate Login": {
    "it": "Corporate Login",
    "es": "Corporate Login",
    "pt-BR": "Corporate Login",
    "hi": "Corporate Login"
  },
  "Click Corporate Login.": {
    "it": "Clicca Corporate Login.",
    "es": "Haz clic en Corporate Login.",
    "pt-BR": "Clique em Corporate Login.",
    "hi": "Corporate Login पर क्लिक करें।"
  },
  "TilliT also works with a username and password. Corporate Login connects it to your company Microsoft login: the same account you use every day, one click, no extra password. Here you log in with Corporate Login. After signing in, TilliT opens.": {
    "it": "In TilliT si può entrare anche con username e password. Corporate Login lo collega al login Microsoft dell'azienda: lo stesso account che usi ogni giorno, un clic e nessuna password in più. Qui entri con Corporate Login. Dopo l'accesso, TilliT si apre.",
    "es": "TilliT también funciona con usuario y contraseña. Corporate Login lo conecta con el inicio de sesión Microsoft de tu empresa: la misma cuenta que usas todos los días, un clic y ninguna contraseña extra. Aquí inicias sesión con Corporate Login. Al entrar, se abre TilliT.",
    "pt-BR": "O TilliT também funciona com usuário e senha. O Corporate Login conecta o TilliT ao login Microsoft da sua empresa: a mesma conta que você usa todo dia, um clique, nenhuma senha a mais. Aqui você entra com Corporate Login. Depois de entrar, o TilliT abre.",
    "hi": "TilliT यूज़रनेम और पासवर्ड से भी चलता है। Corporate Login इसे आपकी कंपनी के Microsoft लॉगिन से जोड़ता है: वही अकाउंट जो आप रोज़ इस्तेमाल करते हैं, एक क्लिक, कोई अलग पासवर्ड नहीं। यहाँ आप Corporate Login से लॉग इन करते हैं। साइन इन के बाद TilliT खुल जाता है।"
  },
  "If you cannot get in, ask your IT or your site admin.": {
    "it": "Se non riesci a entrare, chiedi al tuo IT o all'amministratore del sito.",
    "es": "Si no puedes entrar, pregúntale a tu área de IT o al administrador de tu planta.",
    "pt-BR": "Se não conseguir entrar, fale com o seu TI ou com o administrador da sua planta.",
    "hi": "अगर लॉग इन नहीं हो पा रहा, तो अपने IT या साइट एडमिन से पूछें।"
  },
  "The TilliT frame": {
    "it": "La struttura della pagina",
    "es": "La estructura de la página",
    "pt-BR": "A estrutura da página",
    "hi": "पेज का ढाँचा"
  },
  "After login you are inside the frame that TilliT keeps around every page. The page itself is empty here: what you work on is in the next chapters. Explore the three areas of the frame.": {
    "it": "Dopo il login sei dentro la struttura della pagina, uguale intorno a ogni schermata di TilliT. Qui la schermata è vuota: su cosa lavori lo vedi nei prossimi capitoli. Esplora le tre zone della struttura.",
    "es": "Después de iniciar sesión estás dentro de la estructura de la página, la misma alrededor de cada pantalla de TilliT. Aquí la pantalla está vacía: lo que usas para trabajar lo verás en los próximos capítulos. Explora las tres zonas de la estructura.",
    "pt-BR": "Depois do login, você vê a estrutura da página, a mesma em volta de todas as telas do TilliT. Aqui a tela em si está vazia: o que você usa no trabalho vem nos próximos capítulos. Explore as três áreas da estrutura.",
    "hi": "लॉगिन के बाद आप पेज के ढाँचे के अंदर हैं, जो TilliT की हर स्क्रीन के चारों ओर एक जैसा रहता है। यहाँ स्क्रीन खुद खाली है: आपका काम अगले अध्यायों में है। ढाँचे के तीनों हिस्से देखें।"
  },
  "Environment": {
    "it": "Ambiente",
    "es": "Entorno",
    "pt-BR": "Ambiente",
    "hi": "एनवायरनमेंट"
  },
  "STAGE tag": {
    "it": "Etichetta STAGE",
    "es": "Etiqueta STAGE",
    "pt-BR": "Etiqueta STAGE",
    "hi": "STAGE टैग"
  },
  "Click the orange STAGE tag at the top.": {
    "it": "Clicca l'etichetta arancione STAGE in alto.",
    "es": "Haz clic en la etiqueta naranja STAGE, arriba.",
    "pt-BR": "Clique na etiqueta laranja STAGE, no topo.",
    "hi": "ऊपर नारंगी STAGE टैग पर क्लिक करें।"
  },
  "Stage or Production": {
    "it": "Stage o Produzione",
    "es": "Stage o Producción",
    "pt-BR": "Stage ou Produção",
    "hi": "Stage या Production"
  },
  "TilliT runs in two environments. The orange STAGE tag means the test environment: nothing you do there is real. No tag means Production, the live system, where every action counts.": {
    "it": "TilliT gira in due ambienti. L'etichetta arancione STAGE indica l'ambiente di prova: lì niente di quello che fai è reale. Se non c'è nessuna etichetta sei in Produzione, il sistema vero, dove ogni azione conta.",
    "es": "TilliT funciona en dos entornos. La etiqueta naranja STAGE indica el entorno de pruebas: nada de lo que hagas ahí es real. Sin etiqueta estás en Producción, el sistema real, donde cada acción cuenta.",
    "pt-BR": "O TilliT roda em dois ambientes. A etiqueta laranja STAGE indica o ambiente de teste: nada do que você faz ali é real. Sem etiqueta, você está em Produção, o sistema real, onde cada ação conta.",
    "hi": "TilliT दो एनवायरनमेंट में चलता है। नारंगी STAGE टैग का मतलब है टेस्ट एनवायरनमेंट: वहाँ आप जो भी करें, वह असली नहीं है। टैग न हो तो मतलब Production, यानी लाइव सिस्टम, जहाँ हर काम मायने रखता है।"
  },
  "Check the tag before your shift.": {
    "it": "Controlla l'etichetta prima del turno.",
    "es": "Revisa la etiqueta antes de empezar tu turno.",
    "pt-BR": "Confira a etiqueta antes do seu turno.",
    "hi": "अपनी शिफ़्ट से पहले टैग देख लें।"
  },
  "Menu": {
    "it": "Menu",
    "es": "Menú",
    "pt-BR": "Menu",
    "hi": "मेनू"
  },
  "Left menu": {
    "it": "Menu a sinistra",
    "es": "Menú de la izquierda",
    "pt-BR": "Menu à esquerda",
    "hi": "बायाँ मेनू"
  },
  "Click the left menu.": {
    "it": "Clicca il menu a sinistra.",
    "es": "Haz clic en el menú de la izquierda.",
    "pt-BR": "Clique no menu à esquerda.",
    "hi": "बाएँ मेनू पर क्लिक करें।"
  },
  "Your menu depends on your role": {
    "it": "Il menu dipende dal tuo ruolo",
    "es": "Tu menú depende de tu rol",
    "pt-BR": "O seu menu depende do seu papel",
    "hi": "आपका मेनू आपके रोल पर निर्भर है"
  },
  "As an Operator you see Assets, Orders, Activities and Cockpit. A Superuser sees more items: Boards, Insights, Users, Settings and History.": {
    "it": "Come Operator vedi Assets, Orders, Activities e Cockpit. Un Superuser vede più voci: Boards, Insights, Users, Settings e History.",
    "es": "Como Operator ves Assets, Orders, Activities y Cockpit. Un Superuser ve más opciones: Boards, Insights, Users, Settings y History.",
    "pt-BR": "Como Operator, você vê Assets, Orders, Activities e Cockpit. Um Superuser vê mais itens: Boards, Insights, Users, Settings e History.",
    "hi": "Operator के तौर पर आपको Assets, Orders, Activities और Cockpit दिखते हैं। Superuser को ज़्यादा आइटम दिखते हैं: Boards, Insights, Users, Settings और History।"
  },
  "Globe icon": {
    "it": "Icona globo",
    "es": "Ícono del globo",
    "pt-BR": "Ícone do globo",
    "hi": "ग्लोब आइकन"
  },
  "Click the globe icon at the top right.": {
    "it": "Clicca l'icona globo in alto a destra.",
    "es": "Haz clic en el ícono del globo, arriba a la derecha.",
    "pt-BR": "Clique no ícone do globo, no canto superior direito.",
    "hi": "ऊपर दाईं ओर ग्लोब आइकन पर क्लिक करें।"
  },
  "Change the language": {
    "it": "Cambia la lingua",
    "es": "Cambia el idioma",
    "pt-BR": "Mude o idioma",
    "hi": "भाषा बदलें"
  },
  "The globe icon, between the bell and the help icon, opens the Language list. You can change the language here at any time, not only on the login page.": {
    "it": "L'icona globo, tra la campanella e l'icona dell'aiuto, apre l'elenco Language. Qui puoi cambiare lingua in qualsiasi momento, non solo nella pagina di login.",
    "es": "El ícono del globo, entre la campana y el ícono de ayuda, abre la lista Language. Aquí puedes cambiar el idioma en cualquier momento, no solo en la página de inicio de sesión.",
    "pt-BR": "O ícone do globo, entre o sino e o ícone de ajuda, abre a lista Language. Você pode mudar o idioma aqui a qualquer momento, não só na página de login.",
    "hi": "घंटी और हेल्प आइकन के बीच वाला ग्लोब आइकन Language लिस्ट खोलता है। यहाँ आप कभी भी भाषा बदल सकते हैं, सिर्फ़ लॉगिन पेज पर नहीं।"
  },
  "Italiano": {
    "it": "Italiano",
    "es": "Italiano",
    "pt-BR": "Italiano",
    "hi": "Italiano"
  },
  "Click Italiano.": {
    "it": "Clicca Italiano.",
    "es": "Haz clic en Italiano.",
    "pt-BR": "Clique em Italiano.",
    "hi": "Italiano पर क्लिक करें।"
  },
  "System labels change": {
    "it": "Le scritte di sistema cambiano",
    "es": "Cambian las etiquetas del sistema",
    "pt-BR": "Os textos do sistema mudam",
    "hi": "सिस्टम के लेबल बदल जाते हैं"
  },
  "Menus, field names and standard statuses switch to the language you choose.": {
    "it": "Menu, nomi dei campi e stati standard passano alla lingua che scegli.",
    "es": "Los menús, los nombres de los campos y los estados estándar pasan al idioma que elijas.",
    "pt-BR": "Menus, nomes dos campos e status padrão passam para o idioma que você escolheu.",
    "hi": "मेनू, फ़ील्ड के नाम और स्टैंडर्ड स्टेटस आपकी चुनी हुई भाषा में आ जाते हैं।"
  },
  "Names of lines, assets and activities are set by your site and can stay in their original language.": {
    "it": "I nomi di linee, asset e attività li decide il tuo sito e possono restare nella lingua originale.",
    "es": "Los nombres de líneas, assets y actividades los define tu planta y pueden quedar en su idioma original.",
    "pt-BR": "Os nomes de linhas, assets e atividades são definidos pela sua planta e podem ficar no idioma original.",
    "hi": "लाइनों, एसेट और ऐक्टिविटीज़ के नाम आपकी साइट तय करती है, और वे अपनी मूल भाषा में रह सकते हैं।"
  },
  "Your account": {
    "it": "Il tuo account",
    "es": "Tu cuenta",
    "pt-BR": "Sua conta",
    "hi": "आपका अकाउंट"
  },
  "Your initials at the top right show you are logged in. The menu under them holds your account pages.": {
    "it": "Le tue iniziali in alto a destra indicano che hai fatto l'accesso. Nel menu sotto trovi le pagine del tuo account.",
    "es": "Tus iniciales, arriba a la derecha, indican que iniciaste sesión. El menú que se abre debajo tiene las páginas de tu cuenta.",
    "pt-BR": "As suas iniciais, no canto superior direito, mostram que você está logado. O menu embaixo delas reúne as páginas da sua conta.",
    "hi": "ऊपर दाईं ओर आपके इनिशियल्स दिखाते हैं कि आप लॉग इन हैं। उनके नीचे वाले मेनू में आपके अकाउंट के पेज हैं।"
  },
  "Your initials": {
    "it": "Le tue iniziali",
    "es": "Tus iniciales",
    "pt-BR": "Suas iniciais",
    "hi": "आपके इनिशियल्स"
  },
  "Click your initials at the top right.": {
    "it": "Clicca le tue iniziali in alto a destra.",
    "es": "Haz clic en tus iniciales, arriba a la derecha.",
    "pt-BR": "Clique nas suas iniciais, no canto superior direito.",
    "hi": "ऊपर दाईं ओर अपने इनिशियल्स पर क्लिक करें।"
  },
  "The account menu": {
    "it": "Il menu dell'account",
    "es": "El menú de la cuenta",
    "pt-BR": "O menu da conta",
    "hi": "अकाउंट मेनू"
  },
  "Your initials confirm you are logged in. The menu lists your account pages, for example User Profile.": {
    "it": "Le tue iniziali confermano che hai fatto l'accesso. Nel menu trovi le pagine del tuo account, per esempio User Profile.",
    "es": "Tus iniciales confirman que iniciaste sesión. El menú muestra las páginas de tu cuenta, por ejemplo User Profile.",
    "pt-BR": "As suas iniciais confirmam que você está logado. O menu lista as páginas da sua conta, por exemplo User Profile.",
    "hi": "आपके इनिशियल्स बताते हैं कि आप लॉग इन हैं। मेनू में आपके अकाउंट के पेज हैं, जैसे User Profile।"
  },
  "User Profile": {
    "it": "User Profile",
    "es": "User Profile",
    "pt-BR": "User Profile",
    "hi": "User Profile"
  },
  "Click User Profile.": {
    "it": "Clicca User Profile.",
    "es": "Haz clic en User Profile.",
    "pt-BR": "Clique em User Profile.",
    "hi": "User Profile पर क्लिक करें।"
  },
  "Your personal information: name, email and phone number.": {
    "it": "I tuoi dati personali: nome, email e numero di telefono.",
    "es": "Tus datos personales: nombre, correo electrónico y número de teléfono.",
    "pt-BR": "Os seus dados pessoais: nome, e-mail e telefone.",
    "hi": "आपकी निजी जानकारी: नाम, ईमेल और फ़ोन नंबर।"
  },
  "You cannot edit your name, email or role here. To change them, ask your IT.": {
    "it": "Qui non puoi modificare nome, email o ruolo. Per cambiarli, chiedi al tuo IT.",
    "es": "Aquí no puedes modificar tu nombre, tu correo ni tu rol. Para cambiarlos, pídeselo a tu área de IT.",
    "pt-BR": "Aqui você não pode alterar o seu nome, e-mail ou papel. Para mudar, fale com o seu TI.",
    "hi": "यहाँ आप अपना नाम, ईमेल या रोल नहीं बदल सकते। बदलवाने के लिए अपने IT से पूछें।"
  },
  "Roles": {
    "it": "Roles",
    "es": "Roles",
    "pt-BR": "Roles",
    "hi": "Roles"
  },
  "Click Roles.": {
    "it": "Clicca Roles.",
    "es": "Haz clic en Roles.",
    "pt-BR": "Clique em Roles.",
    "hi": "Roles पर क्लिक करें।"
  },
  "Your role": {
    "it": "Il tuo ruolo",
    "es": "Tu rol",
    "pt-BR": "Seu papel",
    "hi": "आपका रोल"
  },
  "Your role decides what you can see and do in TilliT, for example the items in the left menu. Here: OPERATOR.": {
    "it": "Il ruolo decide cosa puoi vedere e fare in TilliT, per esempio le voci del menu a sinistra. Qui: OPERATOR.",
    "es": "Tu rol define lo que puedes ver y hacer en TilliT, por ejemplo las opciones del menú de la izquierda. Aquí: OPERATOR.",
    "pt-BR": "O seu papel define o que você pode ver e fazer no TilliT, por exemplo os itens do menu à esquerda. Aqui: OPERATOR.",
    "hi": "आपका रोल तय करता है कि आप TilliT में क्या देख और कर सकते हैं, जैसे बाएँ मेनू के आइटम। यहाँ: OPERATOR।"
  },
  "Sites": {
    "it": "Sites",
    "es": "Sites",
    "pt-BR": "Sites",
    "hi": "Sites"
  },
  "Click Sites.": {
    "it": "Clicca Sites.",
    "es": "Haz clic en Sites.",
    "pt-BR": "Clique em Sites.",
    "hi": "Sites पर क्लिक करें।"
  },
  "Your sites": {
    "it": "I tuoi siti",
    "es": "Tus plantas",
    "pt-BR": "Suas plantas",
    "hi": "आपकी साइटें"
  },
  "The sites your account can work on, here Pack Expo Chicago.": {
    "it": "I siti su cui il tuo account può lavorare, qui Pack Expo Chicago.",
    "es": "Las plantas en las que puede trabajar tu cuenta; aquí, Pack Expo Chicago.",
    "pt-BR": "As plantas em que a sua conta pode trabalhar; aqui, Pack Expo Chicago.",
    "hi": "वे साइटें जिन पर आपका अकाउंट काम कर सकता है, यहाँ Pack Expo Chicago।"
  },
  "Put the login in order": {
    "it": "Metti in ordine i passi del login",
    "es": "Ordena los pasos del inicio de sesión",
    "pt-BR": "Coloque os passos do login em ordem",
    "hi": "लॉगिन को क्रम में लगाएँ"
  },
  "Put the login steps in the right order.": {
    "it": "Metti i passi del login nella sequenza giusta.",
    "es": "Pon los pasos del inicio de sesión en la secuencia correcta.",
    "pt-BR": "Coloque os passos do login na ordem certa.",
    "hi": "लॉगिन के स्टेप सही क्रम में लगाएँ।"
  },
  "Think of the first time you open TilliT.": {
    "it": "Pensa alla prima volta che apri TilliT.",
    "es": "Piensa en la primera vez que abres TilliT.",
    "pt-BR": "Pense na primeira vez que você abre o TilliT.",
    "hi": "उस पल के बारे में सोचें जब आप पहली बार TilliT खोलते हैं।"
  },
  "Open the TilliT address of your site": {
    "it": "Apri l'indirizzo TilliT del tuo sito",
    "es": "Abre la dirección de TilliT de tu planta",
    "pt-BR": "Abra o endereço do TilliT da sua planta",
    "hi": "अपनी साइट का TilliT एड्रेस खोलें"
  },
  "Choose your language under the login box": {
    "it": "Scegli la lingua sotto il riquadro di login",
    "es": "Elige tu idioma debajo del recuadro de inicio de sesión",
    "pt-BR": "Escolha o seu idioma abaixo da caixa de login",
    "hi": "लॉगिन बॉक्स के नीचे अपनी भाषा चुनें"
  },
  "Click Corporate Login": {
    "it": "Clicca Corporate Login",
    "es": "Haz clic en Corporate Login",
    "pt-BR": "Clique em Corporate Login",
    "hi": "Corporate Login पर क्लिक करें"
  },
  "Sign in with your company account": {
    "it": "Accedi con l'account aziendale",
    "es": "Entra con la cuenta de tu empresa",
    "pt-BR": "Entre com a conta da sua empresa",
    "hi": "अपने कंपनी अकाउंट से साइन इन करें"
  },
  "TilliT opens on the Assets page": {
    "it": "TilliT si apre sulla pagina Assets",
    "es": "TilliT se abre en la página Assets",
    "pt-BR": "O TilliT abre na página Assets",
    "hi": "TilliT Assets पेज पर खुलता है"
  },
  "Correct sequence: open TilliT, choose the language, Corporate Login, company account, Assets.": {
    "it": "Sequenza giusta: apri TilliT, scegli la lingua, Corporate Login, account aziendale, Assets.",
    "es": "Secuencia correcta: abrir TilliT, elegir el idioma, Corporate Login, cuenta de la empresa, Assets.",
    "pt-BR": "Sequência correta: abrir o TilliT, escolher o idioma, Corporate Login, conta da empresa, Assets.",
    "hi": "सही क्रम: TilliT खोलें, भाषा चुनें, Corporate Login, कंपनी अकाउंट, Assets।"
  },
  "Some steps are in the wrong order. What has to happen before TilliT can open?": {
    "it": "Alcuni passi non sono al posto giusto. Cosa deve succedere prima che TilliT si apra?",
    "es": "Algunos pasos no están en la secuencia correcta. ¿Qué tiene que pasar antes de que TilliT se abra?",
    "pt-BR": "Alguns passos estão fora de ordem. O que precisa acontecer antes de o TilliT abrir?",
    "hi": "कुछ स्टेप गलत क्रम में हैं। TilliT खुलने से पहले क्या होना ज़रूरी है?"
  },
  "Your first shift": {
    "it": "Il tuo primo turno",
    "es": "Tu primer turno",
    "pt-BR": "Seu primeiro turno",
    "hi": "आपकी पहली शिफ़्ट"
  },
  "A colleague asks you about TilliT on their first day. Pick the reply you would really give. A wrong reply is not a problem: you will see why.": {
    "it": "Un collega al primo giorno ti fa una domanda su TilliT. Scegli la risposta che daresti davvero. Una risposta sbagliata non è un problema: vedrai perché.",
    "es": "Un colega te hace preguntas sobre TilliT en su primer día. Elige la respuesta que realmente darías. Una respuesta incorrecta no es un problema: verás por qué.",
    "pt-BR": "Um colega faz perguntas sobre o TilliT no primeiro dia dele. Escolha a resposta que você daria de verdade. Uma resposta errada não é problema: você vai ver por quê.",
    "hi": "एक सहकर्मी अपने पहले दिन आपसे TilliT के बारे में पूछता है। वह उत्तर चुनें जो आप सच में देंगे। गलत उत्तर कोई समस्या नहीं है: आप देखेंगे क्यों।"
  },
  "I am opening TilliT at the start of my shift. How do I log in?": {
    "it": "Sto aprendo TilliT a inizio turno. Come faccio a entrare?",
    "es": "Estoy abriendo TilliT al empezar mi turno. ¿Cómo inicio sesión?",
    "pt-BR": "Estou abrindo o TilliT no começo do meu turno. Como faço login?",
    "hi": "मैं शिफ़्ट की शुरुआत में TilliT खोल रहा हूँ। लॉग इन कैसे करूँ?"
  },
  "Click Corporate Login and sign in with your company account.": {
    "it": "Clicca Corporate Login e accedi con il tuo account aziendale.",
    "es": "Haz clic en Corporate Login y entra con la cuenta de tu empresa.",
    "pt-BR": "Clique em Corporate Login e entre com a conta da empresa.",
    "hi": "Corporate Login पर क्लिक करो और अपने कंपनी अकाउंट से साइन इन करो।"
  },
  "Right. Corporate Login signs me in with my company account.": {
    "it": "Giusto. Con Corporate Login entro con il mio account aziendale.",
    "es": "Claro. Con Corporate Login entro con la cuenta de mi empresa.",
    "pt-BR": "Certo. O Corporate Login me conecta com a conta da empresa.",
    "hi": "सही। Corporate Login मुझे मेरे कंपनी अकाउंट से साइन इन कराता है।"
  },
  "Click Reset to create a new TilliT password.": {
    "it": "Clicca Reset per creare una nuova password di TilliT.",
    "es": "Haz clic en Reset para crear una contraseña nueva de TilliT.",
    "pt-BR": "Clique em Reset para criar uma nova senha do TilliT.",
    "hi": "नया TilliT पासवर्ड बनाने के लिए Reset पर क्लिक करो।"
  },
  "Reset is for a forgotten password. Here we log in with Corporate Login. Try again.": {
    "it": "Reset serve quando hai dimenticato la password. Qui si entra con Corporate Login. Riprova.",
    "es": "Reset sirve cuando olvidas la contraseña. Aquí iniciamos sesión con Corporate Login. Inténtalo de nuevo.",
    "pt-BR": "O Reset serve para quando a gente esquece a senha. Aqui o login é com Corporate Login. Tente de novo.",
    "hi": "Reset भूले हुए पासवर्ड के लिए है। यहाँ हम Corporate Login से लॉग इन करते हैं। फिर से कोशिश करें।"
  },
  "Ask IT for a separate TilliT password.": {
    "it": "Chiedi all'IT una password di TilliT a parte.",
    "es": "Pídele a IT una contraseña aparte para TilliT.",
    "pt-BR": "Peça ao TI uma senha separada para o TilliT.",
    "hi": "IT से TilliT का अलग पासवर्ड माँग लो।"
  },
  "No need: Corporate Login uses the company account I already have. Try again.": {
    "it": "Non serve: Corporate Login usa l'account aziendale che ho già. Riprova.",
    "es": "No hace falta: Corporate Login usa la cuenta de la empresa que ya tengo. Inténtalo de nuevo.",
    "pt-BR": "Não precisa: o Corporate Login usa a conta da empresa que eu já tenho. Tente de novo.",
    "hi": "ज़रूरत नहीं: Corporate Login वही कंपनी अकाउंट इस्तेमाल करता है जो मेरे पास पहले से है। फिर से कोशिश करें।"
  },
  "Before I start, I want to be sure I am not in the test environment. What do I check?": {
    "it": "Prima di cominciare voglio essere sicuro di non essere nell'ambiente di prova. Cosa controllo?",
    "es": "Antes de empezar quiero estar seguro de que no estoy en el entorno de pruebas. ¿Qué reviso?",
    "pt-BR": "Antes de começar, quero ter certeza de que não estou no ambiente de teste. O que eu confiro?",
    "hi": "शुरू करने से पहले मैं पक्का करना चाहता हूँ कि मैं टेस्ट एनवायरनमेंट में नहीं हूँ। क्या देखूँ?"
  },
  "The orange STAGE tag at the top: no tag means Production.": {
    "it": "L'etichetta arancione STAGE in alto: se non c'è, sei in Produzione.",
    "es": "La etiqueta naranja STAGE, arriba: sin etiqueta es Producción.",
    "pt-BR": "A etiqueta laranja STAGE no topo: sem etiqueta é Produção.",
    "hi": "ऊपर नारंगी STAGE टैग: टैग नहीं है तो मतलब Production।"
  },
  "Got it: STAGE is the test environment, no tag is Production.": {
    "it": "Chiaro: STAGE è l'ambiente di prova, senza etichetta sono in Produzione.",
    "es": "Entendido: STAGE es el entorno de pruebas; sin etiqueta, Producción.",
    "pt-BR": "Entendi: STAGE é o ambiente de teste, sem etiqueta é Produção.",
    "hi": "समझ गया: STAGE टेस्ट एनवायरनमेंट है, टैग नहीं तो Production।"
  },
  "The colour of the left menu.": {
    "it": "Il colore del menu a sinistra.",
    "es": "El color del menú de la izquierda.",
    "pt-BR": "A cor do menu à esquerda.",
    "hi": "बाएँ मेनू का रंग।"
  },
  "The menu looks the same in both. Look at the top of the page. Try again.": {
    "it": "Il menu è uguale in tutti e due. Guarda in cima alla pagina. Riprova.",
    "es": "El menú se ve igual en los dos. Mira la parte de arriba de la página. Inténtalo de nuevo.",
    "pt-BR": "O menu é igual nos dois. Olhe o topo da página. Tente de novo.",
    "hi": "मेनू दोनों में एक जैसा दिखता है। पेज के ऊपर देखें। फिर से कोशिश करें।"
  },
  "My initials at the top right.": {
    "it": "Le mie iniziali in alto a destra.",
    "es": "Mis iniciales, arriba a la derecha.",
    "pt-BR": "As minhas iniciais, no canto superior direito.",
    "hi": "ऊपर दाईं ओर मेरे इनिशियल्स।"
  },
  "My initials say I am logged in, not where. Try again.": {
    "it": "Le iniziali dicono che ho fatto l'accesso, non dove. Riprova.",
    "es": "Mis iniciales dicen que inicié sesión, no dónde. Inténtalo de nuevo.",
    "pt-BR": "As minhas iniciais dizem que estou logado, não onde. Tente de novo.",
    "hi": "मेरे इनिशियल्स बताते हैं कि मैं लॉग इन हूँ, यह नहीं कि कहाँ। फिर से कोशिश करें।"
  },
  "I would rather read TilliT in Polish. Where do I change the language?": {
    "it": "Preferirei usare TilliT in polacco. Dove cambio la lingua?",
    "es": "Prefiero ver TilliT en polaco. ¿Dónde cambio el idioma?",
    "pt-BR": "Prefiro usar o TilliT em polonês. Onde eu mudo o idioma?",
    "hi": "मैं TilliT पोलिश में पढ़ना चाहूँगा। भाषा कहाँ बदलूँ?"
  },
  "The globe icon in the top-right bar.": {
    "it": "L'icona globo nella barra in alto a destra.",
    "es": "El ícono del globo, en la barra de arriba a la derecha.",
    "pt-BR": "No ícone do globo, na barra do canto superior direito.",
    "hi": "ऊपर दाईं ओर की पट्टी में ग्लोब आइकन।"
  },
  "Thanks: the globe icon opens the Language list.": {
    "it": "Grazie: l'icona globo apre l'elenco Language.",
    "es": "Gracias: el ícono del globo abre la lista Language.",
    "pt-BR": "Valeu: o ícone do globo abre a lista Language.",
    "hi": "धन्यवाद: ग्लोब आइकन Language लिस्ट खोलता है।"
  },
  "Settings, then Language, in the left menu.": {
    "it": "Settings, poi Language, nel menu a sinistra.",
    "es": "Settings y luego Language, en el menú de la izquierda.",
    "pt-BR": "Em Settings, depois Language, no menu à esquerda.",
    "hi": "बाएँ मेनू में Settings, फिर Language।"
  },
  "The language is not in the left menu. Look at the top-right bar. Try again.": {
    "it": "La lingua non è nel menu a sinistra. Guarda la barra in alto a destra. Riprova.",
    "es": "El idioma no está en el menú de la izquierda. Mira la barra de arriba a la derecha. Inténtalo de nuevo.",
    "pt-BR": "O idioma não fica no menu à esquerda. Olhe a barra do canto superior direito. Tente de novo.",
    "hi": "भाषा बाएँ मेनू में नहीं है। ऊपर दाईं ओर की पट्टी में देखें। फिर से कोशिश करें।"
  },
  "Only on the login page, before signing in.": {
    "it": "Solo nella pagina di login, prima di entrare.",
    "es": "Solo en la página de inicio de sesión, antes de entrar.",
    "pt-BR": "Só na página de login, antes de entrar.",
    "hi": "सिर्फ़ लॉगिन पेज पर, साइन इन से पहले।"
  },
  "You can also change it after login, at any time. Try again.": {
    "it": "Puoi cambiarla anche dopo il login, in qualsiasi momento. Riprova.",
    "es": "También se puede cambiar después de iniciar sesión, en cualquier momento. Inténtalo de nuevo.",
    "pt-BR": "Dá para mudar também depois do login, a qualquer momento. Tente de novo.",
    "hi": "लॉगिन के बाद भी कभी भी बदल सकते हैं। फिर से कोशिश करें।"
  },
  "Which role and site does my account have? Where do I look?": {
    "it": "Che ruolo e che sito ha il mio account? Dove guardo?",
    "es": "¿Qué rol y qué planta tiene mi cuenta? ¿Dónde lo veo?",
    "pt-BR": "Qual papel e qual planta a minha conta tem? Onde eu vejo isso?",
    "hi": "मेरे अकाउंट का रोल और साइट क्या है? कहाँ देखूँ?"
  },
  "Click your initials, then User Profile: Roles and Sites.": {
    "it": "Clicca le tue iniziali, poi User Profile: Roles e Sites.",
    "es": "Haz clic en tus iniciales y luego en User Profile: Roles y Sites.",
    "pt-BR": "Clique nas suas iniciais, depois em User Profile: Roles e Sites.",
    "hi": "अपने इनिशियल्स पर क्लिक करो, फिर User Profile: Roles और Sites।"
  },
  "Perfect: User Profile shows my role and my site.": {
    "it": "Perfetto: nello User Profile vedo il mio ruolo e il mio sito.",
    "es": "Perfecto: User Profile muestra mi rol y mi planta.",
    "pt-BR": "Perfeito: o User Profile mostra o meu papel e a minha planta.",
    "hi": "बढ़िया: User Profile में मेरा रोल और मेरी साइट दिखती है।"
  },
  "Open the Cockpit.": {
    "it": "Apri il Cockpit.",
    "es": "Abre el Cockpit.",
    "pt-BR": "Abra o Cockpit.",
    "hi": "Cockpit खोलो।"
  },
  "The Cockpit shows the lines, not my account. Try again.": {
    "it": "Il Cockpit mostra le linee, non il mio account. Riprova.",
    "es": "El Cockpit muestra las líneas, no mi cuenta. Inténtalo de nuevo.",
    "pt-BR": "O Cockpit mostra as linhas, não a minha conta. Tente de novo.",
    "hi": "Cockpit लाइनें दिखाता है, मेरा अकाउंट नहीं। फिर से कोशिश करें।"
  },
  "Click the STAGE tag.": {
    "it": "Clicca l'etichetta STAGE.",
    "es": "Haz clic en la etiqueta STAGE.",
    "pt-BR": "Clique na etiqueta STAGE.",
    "hi": "STAGE टैग पर क्लिक करो।"
  },
  "The tag tells the environment, not my account. Try again.": {
    "it": "L'etichetta indica l'ambiente, non il mio account. Riprova.",
    "es": "La etiqueta indica el entorno, no mi cuenta. Inténtalo de nuevo.",
    "pt-BR": "A etiqueta indica o ambiente, não a minha conta. Tente de novo.",
    "hi": "टैग एनवायरनमेंट बताता है, मेरा अकाउंट नहीं। फिर से कोशिश करें।"
  },
  "That is your first login: Corporate Login, the environment, the language and your account.": {
    "it": "Ecco il tuo primo accesso: Corporate Login, l'ambiente, la lingua e il tuo account.",
    "es": "Así es tu primer inicio de sesión: Corporate Login, el entorno, el idioma y tu cuenta.",
    "pt-BR": "Esse é o seu primeiro login: Corporate Login, o ambiente, o idioma e a sua conta.",
    "hi": "यही है आपका पहला लॉगिन: Corporate Login, एनवायरनमेंट, भाषा और आपका अकाउंट।"
  },
  "Two exercises done: the login in order, and the first questions of a new colleague.": {
    "it": "Due esercizi fatti: il login in sequenza e le prime domande di un nuovo collega.",
    "es": "Dos ejercicios hechos: el inicio de sesión en la secuencia correcta, y las primeras preguntas de un colega nuevo.",
    "pt-BR": "Dois exercícios feitos: o login na ordem certa e as primeiras perguntas de um colega novo.",
    "hi": "दो अभ्यास पूरे: लॉगिन सही क्रम में, और नए सहकर्मी के पहले सवाल।"
  },
  "You open the TilliT login page. There are Username and Password fields and a Corporate Login button. On this site, what do you do?": {
    "it": "Apri la pagina di login di TilliT. Ci sono i campi Username e Password e un bottone Corporate Login. In questo sito, cosa fai?",
    "es": "Abres la página de inicio de sesión de TilliT. Hay campos Username y Password y un botón Corporate Login. En esta planta, ¿qué haces?",
    "pt-BR": "Você abre a página de login do TilliT. Há os campos Username e Password e um botão Corporate Login. Nesta planta, o que você faz?",
    "hi": "आप TilliT का लॉगिन पेज खोलते हैं। उसमें Username और Password फ़ील्ड और एक Corporate Login बटन है। इस साइट पर आप क्या करेंगे?"
  },
  "Fill in Username and Password, then click Login": {
    "it": "Compili Username e Password, poi clicchi Login",
    "es": "Completas Username y Password y luego haces clic en Login",
    "pt-BR": "Preencho Username e Password e clico em Login",
    "hi": "Username और Password भरें, फिर Login पर क्लिक करें"
  },
  "Click Corporate Login and sign in with your company account": {
    "it": "Clicchi Corporate Login e accedi con l'account aziendale",
    "es": "Haces clic en Corporate Login y entras con la cuenta de tu empresa",
    "pt-BR": "Clico em Corporate Login e entro com a conta da empresa",
    "hi": "Corporate Login पर क्लिक करें और अपने कंपनी अकाउंट से साइन इन करें"
  },
  "Click Reset to create a new TilliT password": {
    "it": "Clicchi Reset per creare una nuova password di TilliT",
    "es": "Haces clic en Reset para crear una contraseña nueva de TilliT",
    "pt-BR": "Clico em Reset para criar uma nova senha do TilliT",
    "hi": "नया TilliT पासवर्ड बनाने के लिए Reset पर क्लिक करें"
  },
  "TilliT also accepts a username and password; on this site you log in with Corporate Login, using your company account.": {
    "it": "TilliT accetta anche username e password; in questo sito però si entra con Corporate Login, con l'account aziendale.",
    "es": "TilliT también acepta usuario y contraseña; en esta planta inicias sesión con Corporate Login, con la cuenta de tu empresa.",
    "pt-BR": "O TilliT também aceita usuário e senha; nesta planta, o login é com Corporate Login, usando a conta da empresa.",
    "hi": "TilliT यूज़रनेम और पासवर्ड भी लेता है; इस साइट पर आप Corporate Login से, अपने कंपनी अकाउंट के साथ लॉग इन करते हैं।"
  },
  "You see an orange STAGE tag at the top of TilliT. What does it mean?": {
    "it": "In cima a TilliT vedi un'etichetta arancione STAGE. Cosa significa?",
    "es": "Ves una etiqueta naranja STAGE arriba en TilliT. ¿Qué significa?",
    "pt-BR": "Você vê uma etiqueta laranja STAGE no topo do TilliT. O que ela significa?",
    "hi": "आपको TilliT में ऊपर नारंगी STAGE टैग दिखता है। इसका क्या मतलब है?"
  },
  "You are in the test environment: nothing you do there is real": {
    "it": "Sei nell'ambiente di prova: niente di quello che fai è reale",
    "es": "Estás en el entorno de pruebas: nada de lo que hagas ahí es real",
    "pt-BR": "Você está no ambiente de teste: nada do que você faz ali é real",
    "hi": "आप टेस्ट एनवायरनमेंट में हैं: वहाँ आप जो भी करें, वह असली नहीं है"
  },
  "You are in Production and every action counts": {
    "it": "Sei in Produzione e ogni azione conta",
    "es": "Estás en Producción y cada acción cuenta",
    "pt-BR": "Você está em Produção e cada ação conta",
    "hi": "आप Production में हैं और हर काम मायने रखता है"
  },
  "A line has stopped and needs attention": {
    "it": "Una linea si è fermata e va controllata",
    "es": "Una línea se detuvo y requiere atención",
    "pt-BR": "Uma linha parou e precisa de atenção",
    "hi": "एक लाइन रुक गई है और उस पर ध्यान देना है"
  },
  "STAGE marks the test environment. No tag means Production, the live system.": {
    "it": "STAGE indica l'ambiente di prova. Senza etichetta sei in Produzione, il sistema vero.",
    "es": "STAGE indica el entorno de pruebas. Sin etiqueta estás en Producción, el sistema real.",
    "pt-BR": "STAGE indica o ambiente de teste. Sem etiqueta é Produção, o sistema real.",
    "hi": "STAGE टेस्ट एनवायरनमेंट दिखाता है। टैग न हो तो मतलब Production, यानी लाइव सिस्टम।"
  },
  "You want to switch TilliT to Italian. Where do you click?": {
    "it": "Vuoi passare TilliT in italiano. Dove clicchi?",
    "es": "Quieres poner TilliT en italiano. ¿Dónde haces clic?",
    "pt-BR": "Você quer mudar o TilliT para italiano. Onde você clica?",
    "hi": "आप TilliT की भाषा इटैलियन करना चाहते हैं। कहाँ क्लिक करेंगे?"
  },
  "Settings, then Language, in the left menu": {
    "it": "Settings, poi Language, nel menu a sinistra",
    "es": "Settings y luego Language, en el menú de la izquierda",
    "pt-BR": "Em Settings, depois Language, no menu à esquerda",
    "hi": "बाएँ मेनू में Settings, फिर Language"
  },
  "The globe icon in the top-right bar": {
    "it": "L'icona globo nella barra in alto a destra",
    "es": "El ícono del globo, en la barra de arriba a la derecha",
    "pt-BR": "No ícone do globo, na barra do canto superior direito",
    "hi": "ऊपर दाईं ओर की पट्टी में ग्लोब आइकन"
  },
  "Your initials, then User Profile": {
    "it": "Le tue iniziali, poi User Profile",
    "es": "Tus iniciales y luego User Profile",
    "pt-BR": "Nas suas iniciais, depois em User Profile",
    "hi": "आपके इनिशियल्स, फिर User Profile"
  },
  "The globe icon, between the bell and the help icon, opens the Language list. On the login page there is also a language selector under the login box.": {
    "it": "L'icona globo, tra la campanella e l'icona dell'aiuto, apre l'elenco Language. Nella pagina di login c'è anche la scelta della lingua sotto il riquadro di login.",
    "es": "El ícono del globo, entre la campana y el ícono de ayuda, abre la lista Language. En la página de inicio de sesión también hay un selector de idioma debajo del recuadro de inicio de sesión.",
    "pt-BR": "O ícone do globo, entre o sino e o ícone de ajuda, abre a lista Language. Na página de login também há um seletor de idioma abaixo da caixa de login.",
    "hi": "घंटी और हेल्प आइकन के बीच वाला ग्लोब आइकन Language लिस्ट खोलता है। लॉगिन पेज पर लॉगिन बॉक्स के नीचे भी भाषा चुनने का बटन है।"
  },
  "You are in: Login & Language": {
    "it": "Sei dentro: Login & Language",
    "es": "Ya estás dentro: Login & Language",
    "pt-BR": "Você entrou: Login & Language",
    "hi": "आपने लॉग इन कर लिया: Login & Language"
  },
  "You can log in with Corporate Login, tell Stage apart from Production, change the language with the globe icon, and check your role and sites in User Profile. Next: the Cockpit, where you read the whole line.": {
    "it": "Ora sai entrare con Corporate Login, distinguere Stage da Produzione, cambiare lingua con l'icona globo e controllare ruolo e siti nello User Profile. Prossimo capitolo: il Cockpit, dove leggi l'intera linea.",
    "es": "Ya sabes iniciar sesión con Corporate Login, distinguir Stage de Producción, cambiar el idioma con el ícono del globo y revisar tu rol y tus plantas en User Profile. Siguiente: el Cockpit, donde ves el estado de toda la línea de producción.",
    "pt-BR": "Você já sabe fazer login com Corporate Login, diferenciar Stage de Produção, mudar o idioma pelo ícone do globo e conferir o seu papel e as suas plantas no User Profile. A seguir: o Cockpit, onde você lê a linha inteira.",
    "hi": "अब आप Corporate Login से लॉग इन कर सकते हैं, Stage और Production में फ़र्क पहचान सकते हैं, ग्लोब आइकन से भाषा बदल सकते हैं, और User Profile में अपना रोल और साइटें देख सकते हैं। आगे: Cockpit, जहाँ आप पूरी प्रोडक्शन लाइन की स्थिति देखते हैं।"
  },
  "Logging in to TilliT": {
    "it": "Entrare in TilliT",
    "es": "Iniciar sesión en TilliT",
    "pt-BR": "Login no TilliT",
    "hi": "TilliT में लॉग इन करना"
  },
  "Can I log in with Username and Password?": {
    "it": "Posso entrare con Username e Password?",
    "es": "¿Puedo iniciar sesión con Username y Password?",
    "pt-BR": "Posso fazer login com Username e Password?",
    "hi": "क्या मैं Username और Password से लॉग इन कर सकता हूँ?"
  },
  "TilliT works with a username and password too. Corporate Login connects it to your company Microsoft login: on this site you use Corporate Login.": {
    "it": "In TilliT si entra anche con username e password. Corporate Login lo collega al login Microsoft dell'azienda: in questo sito usi Corporate Login.",
    "es": "TilliT también funciona con usuario y contraseña. Corporate Login lo conecta con el inicio de sesión Microsoft de tu empresa: en esta planta se usa Corporate Login.",
    "pt-BR": "O TilliT também funciona com usuário e senha. O Corporate Login conecta o TilliT ao login Microsoft da sua empresa: nesta planta, você usa o Corporate Login.",
    "hi": "TilliT यूज़रनेम और पासवर्ड से भी चलता है। Corporate Login इसे आपकी कंपनी के Microsoft लॉगिन से जोड़ता है: इस साइट पर आप Corporate Login इस्तेमाल करते हैं।"
  },
  "What is Corporate Login?": {
    "it": "Che cos'è Corporate Login?",
    "es": "¿Qué es Corporate Login?",
    "pt-BR": "O que é o Corporate Login?",
    "hi": "Corporate Login क्या है?"
  },
  "It signs you in with your company Microsoft account, the one your IT has linked to TilliT.": {
    "it": "Ti fa entrare con l'account Microsoft aziendale, quello che il tuo IT ha collegato a TilliT.",
    "es": "Te permite entrar con la cuenta Microsoft de tu empresa, la que tu área de IT vinculó a TilliT.",
    "pt-BR": "Ele faz o seu login com a conta Microsoft da empresa, a que o seu TI vinculou ao TilliT.",
    "hi": "यह आपको आपकी कंपनी के Microsoft अकाउंट से साइन इन कराता है, वही जिसे आपके IT ने TilliT से जोड़ा है।"
  },
  "What if I cannot get in?": {
    "it": "E se non riesco a entrare?",
    "es": "¿Y si no puedo entrar?",
    "pt-BR": "E se eu não conseguir entrar?",
    "hi": "अगर लॉग इन न हो पाए तो?"
  },
  "Ask your IT or your site admin.": {
    "it": "Chiedi al tuo IT o all'amministratore del sito.",
    "es": "Pregúntale a tu área de IT o al administrador de tu planta.",
    "pt-BR": "Fale com o seu TI ou com o administrador da sua planta.",
    "hi": "अपने IT या साइट एडमिन से पूछें।"
  },
  "How do I know if I am in Stage or Production?": {
    "it": "Come capisco se sono in Stage o in Produzione?",
    "es": "¿Cómo sé si estoy en Stage o en Producción?",
    "pt-BR": "Como sei se estou em Stage ou em Produção?",
    "hi": "कैसे पता चले कि मैं Stage में हूँ या Production में?"
  },
  "An orange STAGE tag at the top means the test environment, where nothing is real. No tag means Production, where every action counts.": {
    "it": "L'etichetta arancione STAGE in alto indica l'ambiente di prova, dove niente è reale. Se non c'è nessuna etichetta sei in Produzione, dove ogni azione conta.",
    "es": "Una etiqueta naranja STAGE arriba indica el entorno de pruebas, donde nada es real. Sin etiqueta estás en Producción, donde cada acción cuenta.",
    "pt-BR": "Uma etiqueta laranja STAGE no topo indica o ambiente de teste, onde nada é real. Sem etiqueta é Produção, onde cada ação conta.",
    "hi": "ऊपर नारंगी STAGE टैग का मतलब है टेस्ट एनवायरनमेंट, जहाँ कुछ भी असली नहीं है। टैग न हो तो मतलब Production, जहाँ हर काम मायने रखता है।"
  },
  "Which page opens after login?": {
    "it": "Quale pagina si apre dopo il login?",
    "es": "¿Qué página se abre después de iniciar sesión?",
    "pt-BR": "Qual página abre depois do login?",
    "hi": "लॉगिन के बाद कौन सा पेज खुलता है?"
  },
  "Assets, by default. A device can be set to open on another page, for example the Cockpit.": {
    "it": "Di base, Assets. Un dispositivo può essere impostato per aprirsi su un'altra pagina, per esempio il Cockpit.",
    "es": "Assets, de forma predeterminada. Un dispositivo se puede configurar para que abra otra página, por ejemplo el Cockpit.",
    "pt-BR": "Assets, por padrão. Um dispositivo pode ser configurado para abrir em outra página, por exemplo o Cockpit.",
    "hi": "डिफ़ॉल्ट रूप से Assets। किसी डिवाइस को दूसरे पेज पर खुलने के लिए सेट किया जा सकता है, जैसे Cockpit।"
  },
  "Where do I change the language?": {
    "it": "Dove cambio la lingua?",
    "es": "¿Dónde cambio el idioma?",
    "pt-BR": "Onde eu mudo o idioma?",
    "hi": "भाषा कहाँ बदलूँ?"
  },
  "With the globe icon in the top-right bar, between the bell and the help icon. On the login page there is also a language selector under the login box.": {
    "it": "Con l'icona globo nella barra in alto a destra, tra la campanella e l'icona dell'aiuto. Nella pagina di login c'è anche la scelta della lingua sotto il riquadro di login.",
    "es": "Con el ícono del globo, en la barra de arriba a la derecha, entre la campana y el ícono de ayuda. En la página de inicio de sesión también hay un selector de idioma debajo del recuadro de inicio de sesión.",
    "pt-BR": "No ícone do globo, na barra do canto superior direito, entre o sino e o ícone de ajuda. Na página de login também há um seletor de idioma abaixo da caixa de login.",
    "hi": "ऊपर दाईं ओर की पट्टी में ग्लोब आइकन से, घंटी और हेल्प आइकन के बीच। लॉगिन पेज पर लॉगिन बॉक्स के नीचे भी भाषा चुनने का बटन है।"
  },
  "Why do some names stay in English after I change language?": {
    "it": "Perché alcuni nomi restano in inglese dopo che ho cambiato lingua?",
    "es": "¿Por qué algunos nombres siguen en inglés después de cambiar el idioma?",
    "pt-BR": "Por que alguns nomes continuam em inglês depois que mudo o idioma?",
    "hi": "भाषा बदलने के बाद कुछ नाम इंग्लिश में क्यों रहते हैं?"
  },
  "The globe icon changes menus, field names and standard statuses. Names of lines, assets and activities are set by your site and can stay in their original language.": {
    "it": "L'icona globo cambia menu, nomi dei campi e stati standard. I nomi di linee, asset e attività li decide il tuo sito e possono restare nella lingua originale.",
    "es": "El ícono del globo cambia los menús, los nombres de los campos y los estados estándar. Los nombres de líneas, assets y actividades los define tu planta y pueden quedar en su idioma original.",
    "pt-BR": "O ícone do globo muda menus, nomes dos campos e status padrão. Os nomes de linhas, assets e atividades são definidos pela sua planta e podem ficar no idioma original.",
    "hi": "ग्लोब आइकन मेनू, फ़ील्ड के नाम और स्टैंडर्ड स्टेटस बदलता है। लाइनों, एसेट और ऐक्टिविटीज़ के नाम आपकी साइट तय करती है, और वे अपनी मूल भाषा में रह सकते हैं।"
  },
  "Where do I see my role and site?": {
    "it": "Dove vedo il mio ruolo e il mio sito?",
    "es": "¿Dónde veo mi rol y mi planta?",
    "pt-BR": "Onde vejo o meu papel e a minha planta?",
    "hi": "मेरा रोल और साइट कहाँ दिखते हैं?"
  },
  "Click your initials at the top right, then User Profile: Roles and Sites are in Basic Information.": {
    "it": "Clicca le tue iniziali in alto a destra, poi User Profile: Roles e Sites sono in Basic Information.",
    "es": "Haz clic en tus iniciales, arriba a la derecha, y luego en User Profile: Roles y Sites están en Basic Information.",
    "pt-BR": "Clique nas suas iniciais, no canto superior direito, depois em User Profile: Roles e Sites ficam em Basic Information.",
    "hi": "ऊपर दाईं ओर अपने इनिशियल्स पर क्लिक करें, फिर User Profile: Roles और Sites, Basic Information में हैं।"
  },
  "Can I change my role or my email?": {
    "it": "Posso cambiare il mio ruolo o la mia email?",
    "es": "¿Puedo cambiar mi rol o mi correo?",
    "pt-BR": "Posso mudar o meu papel ou o meu e-mail?",
    "hi": "क्या मैं अपना रोल या ईमेल बदल सकता हूँ?"
  },
  "Not from here. Your name, email and role are managed for you: ask your IT.": {
    "it": "Non da qui. Nome, email e ruolo non li gestisci tu: chiedi al tuo IT.",
    "es": "Desde aquí no. Tu nombre, tu correo y tu rol los administra tu área de IT: pídeles el cambio.",
    "pt-BR": "Por aqui, não. O seu nome, e-mail e papel são gerenciados para você: fale com o seu TI.",
    "hi": "यहाँ से नहीं। आपका नाम, ईमेल और रोल आपके लिए मैनेज किए जाते हैं: अपने IT से पूछें।"
  },
  "Why do I see fewer menu items than a Superuser?": {
    "it": "Perché vedo meno voci di menu di un Superuser?",
    "es": "¿Por qué veo menos opciones en el menú que un Superuser?",
    "pt-BR": "Por que vejo menos itens no menu do que um Superuser?",
    "hi": "मुझे Superuser से कम मेनू आइटम क्यों दिखते हैं?"
  },
  "The menu depends on your role. Operators see Assets, Orders, Activities and Cockpit; a Superuser also sees Boards, Insights, Users, Settings and History.": {
    "it": "Il menu dipende dal ruolo. Gli Operator vedono Assets, Orders, Activities e Cockpit; un Superuser vede anche Boards, Insights, Users, Settings e History.",
    "es": "El menú depende de tu rol. Los Operators ven Assets, Orders, Activities y Cockpit; un Superuser también ve Boards, Insights, Users, Settings y History.",
    "pt-BR": "O menu depende do seu papel. Um Operator vê Assets, Orders, Activities e Cockpit; um Superuser vê também Boards, Insights, Users, Settings e History.",
    "hi": "मेनू आपके रोल पर निर्भर है। Operator को Assets, Orders, Activities और Cockpit दिखते हैं; Superuser को Boards, Insights, Users, Settings और History भी दिखते हैं।"
  },
  "Check the STAGE tag, use the menu of your role, and change the language with the globe icon.": {
    "it": "Controlla l'etichetta STAGE, usa il menu del tuo ruolo e cambia lingua con l'icona globo.",
    "es": "Revisa la etiqueta STAGE, usa el menú de tu rol y cambia el idioma con el ícono del globo.",
    "pt-BR": "Confira a etiqueta STAGE, use o menu do seu papel e troque o idioma no ícone do globo.",
    "hi": "STAGE टैग देखें, अपने रोल का मेनू इस्तेमाल करें और ग्लोब आइकन से भाषा बदलें।"
  },
  "Your initials open your account: User Profile shows your role and your sites.": {
    "it": "Le tue iniziali aprono il tuo account: nello User Profile trovi il tuo ruolo e i tuoi siti.",
    "es": "Tus iniciales abren tu cuenta: en User Profile ves tu rol y tus plantas.",
    "pt-BR": "Suas iniciais abrem a sua conta: no User Profile você vê o seu papel e as suas plantas.",
    "hi": "आपके इनिशियल्स से आपका अकाउंट खुलता है: User Profile में आपका रोल और आपकी साइटें दिखती हैं।"
  }
});

// ── capitolo login, restyle dei Concepts 16/10 pomeriggio: frasi nuove, ritradotte alla cieca ES/PT-BR/HI (0 cambi di significato) ──
Object.assign(PKX_DICT, {
  "The first page you see when you open TilliT: your tenant, the language and two ways to log in.": {
    "it": "È la prima pagina che vedi quando apri TilliT: la tua azienda, la lingua e due modi per entrare.",
    "es": "Es la primera página que ves al abrir TilliT: tu empresa, el idioma y dos formas de iniciar sesión.",
    "pt-BR": "A primeira página que você vê ao abrir o TilliT: a sua empresa, o idioma e duas formas de fazer login.",
    "hi": "TilliT खोलते ही दिखने वाला पहला पेज: आपकी कंपनी, भाषा और लॉग इन करने के दो तरीके।"
  },
  "Choose the language, then Corporate Login": {
    "it": "Scegli la lingua, poi Corporate Login",
    "es": "Elige el idioma y luego Corporate Login",
    "pt-BR": "Escolha o idioma, depois Corporate Login",
    "hi": "भाषा चुनें, फिर Corporate Login"
  },
  "Ask for a separate TilliT password": {
    "it": "Chiedi una password di TilliT a parte",
    "es": "Pide una contraseña aparte para TilliT",
    "pt-BR": "Peça uma senha separada para o TilliT",
    "hi": "TilliT का अलग पासवर्ड माँगें"
  },
  "The login page is where every shift starts: the same page for every user of your company.": {
    "it": "Ogni turno comincia dalla pagina di login: la stessa per tutti gli utenti della tua azienda.",
    "es": "Cada turno empieza en la página de inicio de sesión: la misma para todos los usuarios de tu empresa.",
    "pt-BR": "Todo turno começa pela página de login: a mesma para todos os usuários da sua empresa.",
    "hi": "हर शिफ़्ट लॉगिन पेज से शुरू होती है: आपकी कंपनी के हर यूज़र के लिए एक ही पेज।"
  },
  "Your tenant, your language, then Corporate Login: one click with your company Microsoft account.": {
    "it": "La tua azienda, la tua lingua, poi Corporate Login: un clic con l'account Microsoft aziendale.",
    "es": "Tu empresa, tu idioma y luego Corporate Login: un clic con la cuenta Microsoft de tu empresa.",
    "pt-BR": "A sua empresa, o seu idioma, depois Corporate Login: um clique com a conta Microsoft da sua empresa.",
    "hi": "आपकी कंपनी, आपकी भाषा, फिर Corporate Login: आपकी कंपनी के Microsoft अकाउंट से एक क्लिक।"
  },
  "Your tenant": {
    "it": "La tua azienda",
    "es": "Tu empresa",
    "pt-BR": "Sua empresa",
    "hi": "आपकी कंपनी"
  },
  "Not this one. Click the name under Login.": {
    "it": "Non questo. Clicca il nome sotto Login.",
    "es": "Este no. Haz clic en el nombre debajo de Login.",
    "pt-BR": "Não é este. Clique no nome abaixo de Login.",
    "hi": "यह नहीं। Login के नीचे वाले नाम पर क्लिक करें।"
  },
  "The name is under the word Login, at the top of the box.": {
    "it": "Il nome è sotto la scritta Login, in cima al riquadro.",
    "es": "El nombre está debajo de la palabra Login, en la parte de arriba del recuadro.",
    "pt-BR": "O nome fica abaixo da palavra Login, no alto da caixa.",
    "hi": "नाम बॉक्स में सबसे ऊपर, Login शब्द के नीचे है।"
  },
  "The language": {
    "it": "La lingua",
    "es": "El idioma",
    "pt-BR": "O idioma",
    "hi": "भाषा"
  },
  "Open the language list, then pick English.": {
    "it": "Apri l'elenco delle lingue, poi scegli English.",
    "es": "Abre la lista de idiomas y luego elige English.",
    "pt-BR": "Abra a lista de idiomas e escolha English.",
    "hi": "भाषाओं की लिस्ट खोलें, फिर English चुनें।"
  },
  "Stay on the language selector under the login box.": {
    "it": "Resta sulla scelta della lingua sotto il riquadro di login.",
    "es": "Quédate en el selector de idioma, debajo del recuadro de inicio de sesión.",
    "pt-BR": "Fique no seletor de idioma, abaixo da caixa de login.",
    "hi": "लॉगिन बॉक्स के नीचे वाले भाषा बटन पर ही रहें।"
  },
  "Username and Password": {
    "it": "Username e Password",
    "es": "Username y Password",
    "pt-BR": "Username e Password",
    "hi": "Username और Password"
  },
  "Click the Username field.": {
    "it": "Clicca il campo Username.",
    "es": "Haz clic en el campo Username.",
    "pt-BR": "Clique no campo Username.",
    "hi": "Username फ़ील्ड पर क्लिक करें।"
  },
  "TilliT also works with a username and password: the Username and Password fields and the Login button.": {
    "it": "In TilliT si può entrare anche con username e password: i campi Username e Password e il bottone Login.",
    "es": "TilliT también funciona con usuario y contraseña: los campos Username y Password y el botón Login.",
    "pt-BR": "O TilliT também funciona com usuário e senha: os campos Username e Password e o botão Login.",
    "hi": "TilliT यूज़रनेम और पासवर्ड से भी चलता है: Username और Password फ़ील्ड और Login बटन।"
  },
  "Not this one. Click the Username field.": {
    "it": "Non questo. Clicca il campo Username.",
    "es": "Este no. Haz clic en el campo Username.",
    "pt-BR": "Não é este. Clique no campo Username.",
    "hi": "यह नहीं। Username फ़ील्ड पर क्लिक करें।"
  },
  "Username is the first field in the box.": {
    "it": "Username è il primo campo del riquadro.",
    "es": "Username es el primer campo del recuadro.",
    "pt-BR": "Username é o primeiro campo da caixa.",
    "hi": "Username बॉक्स का पहला फ़ील्ड है।"
  },
  "Corporate Login connects TilliT to your company Microsoft login: the same account you use every day, one click, no extra password. Here you log in with Corporate Login. After signing in, TilliT opens.": {
    "it": "Corporate Login collega TilliT al login Microsoft dell'azienda: lo stesso account che usi ogni giorno, un clic e nessuna password in più. Qui entri con Corporate Login. Dopo l'accesso, TilliT si apre.",
    "es": "Corporate Login conecta TilliT con el inicio de sesión Microsoft de tu empresa: la misma cuenta que usas todos los días, un clic y ninguna contraseña extra. Aquí inicias sesión con Corporate Login. Al entrar, se abre TilliT.",
    "pt-BR": "O Corporate Login conecta o TilliT ao login Microsoft da sua empresa: a mesma conta que você usa todo dia, um clique, nenhuma senha a mais. Aqui você entra com Corporate Login. Depois de entrar, o TilliT abre.",
    "hi": "Corporate Login TilliT को आपकी कंपनी के Microsoft लॉगिन से जोड़ता है: वही अकाउंट जो आप रोज़ इस्तेमाल करते हैं, एक क्लिक, कोई अलग पासवर्ड नहीं। यहाँ आप Corporate Login से लॉग इन करते हैं। साइन इन के बाद TilliT खुल जाता है।"
  },
  "Not this one. Click Corporate Login.": {
    "it": "Non questo. Clicca Corporate Login.",
    "es": "Este no. Haz clic en Corporate Login.",
    "pt-BR": "Não é este. Clique em Corporate Login.",
    "hi": "यह नहीं। Corporate Login पर क्लिक करें।"
  },
  "Corporate Login is the dark blue button under \"or\".": {
    "it": "Corporate Login è il bottone blu scuro sotto \"or\".",
    "es": "Corporate Login es el botón azul oscuro debajo de \"or\".",
    "pt-BR": "Corporate Login é o botão azul-escuro abaixo de \"or\".",
    "hi": "Corporate Login, \"or\" के नीचे वाला गहरा नीला बटन है।"
  },
  "After login you are inside the frame that TilliT keeps around every page. The page itself is empty here: what you work on is in the next chapters.": {
    "it": "Dopo il login sei dentro la struttura della pagina, uguale intorno a ogni schermata di TilliT. Qui la schermata è vuota: su cosa lavori lo vedi nei prossimi capitoli.",
    "es": "Después de iniciar sesión estás dentro de la estructura de la página, la misma alrededor de cada pantalla de TilliT. Aquí la pantalla está vacía: lo que usas para trabajar lo verás en los próximos capítulos.",
    "pt-BR": "Depois do login, você vê a estrutura da página, a mesma em volta de todas as telas do TilliT. Aqui a tela em si está vazia: o que você usa no trabalho vem nos próximos capítulos.",
    "hi": "लॉगिन के बाद आप पेज के ढाँचे के अंदर हैं, जो TilliT की हर स्क्रीन के चारों ओर एक जैसा रहता है। यहाँ स्क्रीन खुद खाली है: आपका काम अगले अध्यायों में है।"
  },
  "Check the STAGE tag before you start": {
    "it": "Controlla l'etichetta STAGE prima di cominciare",
    "es": "Revisa la etiqueta STAGE antes de empezar",
    "pt-BR": "Confira a etiqueta STAGE antes de começar",
    "hi": "शुरू करने से पहले STAGE टैग देखें"
  },
  "Work in STAGE as if it were real": {
    "it": "Lavora in STAGE come se fosse reale",
    "es": "Trabaja en STAGE como si fuera real",
    "pt-BR": "Trabalhe no STAGE como se fosse real",
    "hi": "STAGE में ऐसे काम करें जैसे वह असली हो"
  },
  "The frame is the same on every page: learn it once and you always know where you are.": {
    "it": "La struttura della pagina è uguale ovunque: la impari una volta e sai sempre dove sei.",
    "es": "La estructura de la página es igual en todas partes: la aprendes una vez y siempre sabes dónde estás.",
    "pt-BR": "A estrutura da página é a mesma em todas as telas: aprenda uma vez e você sempre vai saber onde está.",
    "hi": "पेज का ढाँचा हर जगह एक जैसा है: एक बार सीख लें, फिर आपको हमेशा पता रहेगा कि आप कहाँ हैं।"
  },
  "Not this one. Click the orange STAGE tag.": {
    "it": "Non questa. Clicca l'etichetta arancione STAGE.",
    "es": "Esta no. Haz clic en la etiqueta naranja STAGE.",
    "pt-BR": "Não é esta. Clique na etiqueta laranja STAGE.",
    "hi": "यह नहीं। नारंगी STAGE टैग पर क्लिक करें।"
  },
  "STAGE is the orange tag in the middle of the top bar.": {
    "it": "STAGE è l'etichetta arancione al centro della barra in alto.",
    "es": "STAGE es la etiqueta naranja en el centro de la barra de arriba.",
    "pt-BR": "STAGE é a etiqueta laranja no meio da barra superior.",
    "hi": "STAGE ऊपर की पट्टी के बीच में नारंगी टैग है।"
  },
  "The menu": {
    "it": "Il menu",
    "es": "El menú",
    "pt-BR": "O menu",
    "hi": "मेनू"
  },
  "Click the menu on the left.": {
    "it": "Clicca il menu a sinistra.",
    "es": "Haz clic en el menú de la izquierda.",
    "pt-BR": "Clique no menu à esquerda.",
    "hi": "बाएँ मेनू पर क्लिक करें।"
  },
  "What you see in the menu depends on your role: each role has its permissions, set in TilliT. With more permissions the menu shows more items, like here: Insights, Users, Settings and History. This is the menu you will see in the next chapters.": {
    "it": "Cosa vedi nel menu dipende dal tuo ruolo: ogni ruolo ha i suoi permessi, impostati in TilliT. Con più permessi il menu mostra più voci, come qui: Insights, Users, Settings e History. È il menu che vedrai nei prossimi capitoli.",
    "es": "Lo que ves en el menú depende de tu rol: cada rol tiene sus permisos, configurados en TilliT. Con más permisos, el menú muestra más opciones, como aquí: Insights, Users, Settings y History. Este es el menú que verás en los próximos capítulos.",
    "pt-BR": "O que você vê no menu depende do seu papel: cada papel tem as suas permissões, definidas no TilliT. Com mais permissões, o menu mostra mais itens, como aqui: Insights, Users, Settings e History. Este é o menu que você vai ver nos próximos capítulos.",
    "hi": "मेनू में आपको क्या दिखता है, यह आपके रोल पर निर्भर है: हर रोल की अपनी परमिशन होती हैं, जो TilliT में सेट होती हैं। ज़्यादा परमिशन हों तो मेनू में ज़्यादा आइटम दिखते हैं, जैसे यहाँ: Insights, Users, Settings और History। अगले अध्यायों में आप यही मेनू देखेंगे।"
  },
  "Not this one. Click the menu on the left.": {
    "it": "Non questo. Clicca il menu a sinistra.",
    "es": "Este no. Haz clic en el menú de la izquierda.",
    "pt-BR": "Não é este. Clique no menu à esquerda.",
    "hi": "यह नहीं। बाएँ मेनू पर क्लिक करें।"
  },
  "The menu is the column on the left, from Assets down.": {
    "it": "Il menu è la colonna a sinistra, da Assets in giù.",
    "es": "El menú es la columna de la izquierda, de Assets hacia abajo.",
    "pt-BR": "O menu é a coluna à esquerda, de Assets para baixo.",
    "hi": "मेनू बाईं ओर का कॉलम है, Assets से नीचे तक।"
  },
  "Open the language list with the globe icon, then pick Italiano.": {
    "it": "Apri l'elenco delle lingue con l'icona globo, poi scegli Italiano.",
    "es": "Abre la lista de idiomas con el ícono del globo y luego elige Italiano.",
    "pt-BR": "Abra a lista de idiomas pelo ícone do globo e escolha Italiano.",
    "hi": "ग्लोब आइकन से भाषाओं की लिस्ट खोलें, फिर Italiano चुनें।"
  },
  "Stay on the globe icon at the top right.": {
    "it": "Resta sull'icona globo in alto a destra.",
    "es": "Quédate en el ícono del globo, arriba a la derecha.",
    "pt-BR": "Fique no ícone do globo, no canto superior direito.",
    "hi": "ऊपर दाईं ओर ग्लोब आइकन पर ही रहें।"
  },
  "The menu is now in Italian: menus, field names and standard statuses switch to the language you choose.": {
    "it": "Ora il menu è in italiano: voci, nomi dei campi e stati standard passano alla lingua che scegli.",
    "es": "Ahora el menú está en italiano: los menús, los nombres de los campos y los estados estándar pasan al idioma que elijas.",
    "pt-BR": "Agora o menu está em italiano: menus, nomes dos campos e status padrão passam para o idioma que você escolher.",
    "hi": "अब मेनू इटैलियन में है: मेनू, फ़ील्ड के नाम और स्टैंडर्ड स्टेटस आपकी चुनी हुई भाषा में आ जाते हैं।"
  },
  "Try to change your role yourself": {
    "it": "Prova a cambiare il ruolo da solo",
    "es": "Intenta cambiar tu rol tú mismo",
    "pt-BR": "Tente mudar o seu papel por conta própria",
    "hi": "अपना रोल खुद बदलने की कोशिश करें"
  },
  "Your account decides what you see in TilliT: your role and the sites you work on.": {
    "it": "È il tuo account a decidere cosa vedi in TilliT: il tuo ruolo e i siti su cui lavori.",
    "es": "Tu cuenta define lo que ves en TilliT: tu rol y las plantas en las que trabajas.",
    "pt-BR": "A sua conta define o que você vê no TilliT: o seu papel e as plantas em que você trabalha.",
    "hi": "TilliT में आपको क्या दिखेगा, यह आपका अकाउंट तय करता है: आपका रोल और वे साइटें जिन पर आप काम करते हैं।"
  },
  "Not this one. Click your initials at the top right.": {
    "it": "Non qui. Clicca le tue iniziali in alto a destra.",
    "es": "Aquí no. Haz clic en tus iniciales, arriba a la derecha.",
    "pt-BR": "Não é aqui. Clique nas suas iniciais, no canto superior direito.",
    "hi": "यह नहीं। ऊपर दाईं ओर अपने इनिशियल्स पर क्लिक करें।"
  },
  "Your initials are in the circle at the right end of the top bar.": {
    "it": "Le tue iniziali sono nel cerchio all'estremità destra della barra in alto.",
    "es": "Tus iniciales están en el círculo del extremo derecho de la barra de arriba.",
    "pt-BR": "As suas iniciais ficam no círculo na ponta direita da barra superior.",
    "hi": "आपके इनिशियल्स ऊपर की पट्टी के सबसे दाएँ सिरे पर गोले में हैं।"
  },
  "User Profile: your personal information, name, email and phone number.": {
    "it": "User Profile: i tuoi dati personali, nome, email e numero di telefono.",
    "es": "User Profile: tus datos personales, nombre, correo electrónico y número de teléfono.",
    "pt-BR": "User Profile: os seus dados pessoais, nome, e-mail e telefone.",
    "hi": "User Profile: आपकी निजी जानकारी, नाम, ईमेल और फ़ोन नंबर।"
  },
  "Not this one. Click User Profile, the first item of the menu.": {
    "it": "Non questa. Clicca User Profile, la prima voce del menu.",
    "es": "Esta no. Haz clic en User Profile, la primera opción del menú.",
    "pt-BR": "Não é este. Clique em User Profile, o primeiro item do menu.",
    "hi": "यह नहीं। मेनू के पहले आइटम User Profile पर क्लिक करें।"
  },
  "User Profile is the first item of the menu under your initials.": {
    "it": "User Profile è la prima voce del menu sotto le tue iniziali.",
    "es": "User Profile es la primera opción del menú debajo de tus iniciales.",
    "pt-BR": "User Profile é o primeiro item do menu abaixo das suas iniciais.",
    "hi": "User Profile आपके इनिशियल्स के नीचे वाले मेनू का पहला आइटम है।"
  },
  "Role and sites": {
    "it": "Ruolo e siti",
    "es": "Rol y plantas",
    "pt-BR": "Papel e plantas",
    "hi": "रोल और साइटें"
  },
  "Click Roles and Sites: each one is explained here.": {
    "it": "Clicca Roles e Sites: qui trovi la spiegazione di ognuno.",
    "es": "Haz clic en Roles y Sites: aquí se explica cada uno.",
    "pt-BR": "Clique em Roles e Sites: cada um é explicado aqui.",
    "hi": "Roles और Sites पर क्लिक करें: हर एक की जानकारी यहाँ है।"
  },
  "Stay on Basic Information for now: click Roles and Sites.": {
    "it": "Per ora resta su Basic Information: clicca Roles e Sites.",
    "es": "Por ahora quédate en Basic Information: haz clic en Roles y Sites.",
    "pt-BR": "Por enquanto, fique em Basic Information: clique em Roles e Sites.",
    "hi": "अभी Basic Information पर ही रहें: Roles और Sites पर क्लिक करें।"
  },
  "Your role: its permissions decide what you see and can do in TilliT, like the items of the left menu.": {
    "it": "Il tuo ruolo: sono i permessi del ruolo a decidere cosa vedi e cosa puoi fare in TilliT, come le voci del menu a sinistra.",
    "es": "Tu rol: sus permisos definen lo que ves y puedes hacer en TilliT, como las opciones del menú de la izquierda.",
    "pt-BR": "Seu papel: as permissões dele definem o que você vê e pode fazer no TilliT, como os itens do menu à esquerda.",
    "hi": "आपका रोल: इसकी परमिशन तय करती हैं कि आप TilliT में क्या देख और कर सकते हैं, जैसे बाएँ मेनू के आइटम।"
  },
  "Why does my menu have fewer items than a colleague's?": {
    "it": "Perché il mio menu ha meno voci di quello di un collega?",
    "es": "¿Por qué mi menú tiene menos opciones que el de un colega?",
    "pt-BR": "Por que o meu menu tem menos itens que o de um colega?",
    "hi": "मेरे मेनू में किसी सहकर्मी से कम आइटम क्यों हैं?"
  },
  "The menu depends on the permissions of your role, set in TilliT: with more permissions it shows more items.": {
    "it": "Il menu dipende dai permessi del tuo ruolo, impostati in TilliT: con più permessi mostra più voci.",
    "es": "El menú depende de los permisos de tu rol, configurados en TilliT: con más permisos muestra más opciones.",
    "pt-BR": "O menu depende das permissões do seu papel, definidas no TilliT: com mais permissões, ele mostra mais itens.",
    "hi": "मेनू आपके रोल की परमिशन पर निर्भर है, जो TilliT में सेट होती हैं: ज़्यादा परमिशन हों तो ज़्यादा आइटम दिखते हैं।"
  }
});
// ── capitolo login, lingua in un clic 16/10 sera (Giulia: "leva English come clic"): frase nuova, DA RICONTROLLARE
//    nel giro di traduzione del cap. 1 (ritraduzione alla cieca + registro, PROPOSTA_CAP1_LOGIN_CLIC_ALONI_TRADUZIONI_VIDEO §4) ──
Object.assign(PKX_DICT, {
  "Click the language selector under the login box.": {
    "it": "Clicca la scelta della lingua sotto il riquadro di login.",
    "es": "Haz clic en el selector de idioma, debajo del recuadro de inicio de sesión.",
    "pt-BR": "Clique no seletor de idioma, abaixo da caixa de login.",
    "hi": "लॉगिन बॉक्स के नीचे वाले भाषा बटन पर क्लिक करें।"
  }
});

// 16/10 (controllo fiera): il nome del corso (track) si legge in barra capitolo, card, Team Management → anche tradotto.
Object.assign(PKX_DICT, {
  "Packaging Line Training": {
    "it": "Training sulla linea di confezionamento",
    "es": "Capacitación en la línea de empaque",
    "pt-BR": "Treinamento na linha de embalagem",
    "hi": "पैकेजिंग लाइन प्रशिक्षण"
  }
});
// …e nei testi di Team Management che portano il nome del corso (shared.js li scrive prima che questo file sia caricato)
(function () {
  var e = PKX_DICT['Packaging Line Training'];
  if (!window.T || !e) return;
  ['mgr.course.op', 'mgr.course.op.full', 'mgr.f.opcourse', 'mgr.chip.operators', 'mgr.attn.chip.op'].forEach(function (k) {
    Object.keys(window.T).forEach(function (l) { if (window.T[l] && window.T[l][k] === 'Packaging Line Training' && e[l]) window.T[l][k] = e[l]; });
  });
})();
