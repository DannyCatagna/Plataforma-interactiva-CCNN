import { MicroscopePart, ProtocolStep, SafetyRule, TrueFalseQuestion, SpecimenSlide, QuizQuestion } from '../types/microscope';

export const MICROSCOPE_PARTS: MicroscopePart[] = [
  {
    id: 'ocular',
    name: 'Ocular',
    system: 'optico',
    systemName: 'Sistema Óptico',
    shortDesc: 'Lente situada cerca del ojo del observador.',
    fullDesc: 'Lente o conjunto de lentes cilíndricas situadas en la parte superior del tubo. Generalmente tiene un aumento de 10x (multiplica por 10 la imagen formada por el objetivo).',
    functionDesc: 'Amplía la imagen primaria formada previamente por el objetivo y la proyecta directamente hacia el ojo del estudiante.',
    coords: { x: 50, y: 12 }
  },
  {
    id: 'tubo',
    name: 'Tubo o Cabezal',
    system: 'mecanico',
    systemName: 'Sistema Mecánico',
    shortDesc: 'Estructura cilíndrica que sostiene el ocular.',
    fullDesc: 'Cilindro metálico o cabezal óptico que mantiene alineados los elementos ópticos (el ocular en su extremo superior y el revólver en el inferior) a la distancia focal correcta (habitualmente 160 mm).',
    functionDesc: 'Conduce y protege el haz de luz desde los objetivos hasta el ocular sin permitir la entrada de luz parásita ambiental.',
    coords: { x: 44, y: 22 }
  },
  {
    id: 'revolver',
    name: 'Revólver portaobjetivos',
    system: 'mecanico',
    systemName: 'Sistema Mecánico',
    shortDesc: 'Disco giratorio que porta los diferentes objetivos.',
    fullDesc: 'Pieza metálica circular móvil que contiene orificios roscados donde se acoplan los objetivos. Rota con suaves "clics" de encaje para alinear cada lente.',
    functionDesc: 'Permite cambiar fácilmente de objetivo (4x, 10x, 40x o 100x) sin perder el centrado aproximado del campo de observación.',
    coords: { x: 40, y: 35 }
  },
  {
    id: 'objetivos',
    name: 'Objetivos',
    system: 'optico',
    systemName: 'Sistema Óptico',
    shortDesc: 'Lentes más próximas a la preparación que generan el primer aumento.',
    fullDesc: 'Juego de lentes compuestas de alta precisión montadas en cilindros metálicos. Los más comunes en 8.° EGB son: 4x (lupa o panorámico), 10x (menor aumento o seco débil) y 40x (mayor aumento o seco fuerte).',
    functionDesc: 'Capturan los rayos lumínicos provenientes de la muestra y producen una imagen real, invertida y muy aumentada.',
    coords: { x: 38, y: 44 }
  },
  {
    id: 'platina',
    name: 'Platina',
    system: 'mecanico',
    systemName: 'Sistema Mecánico',
    shortDesc: 'Superficie plana y horizontal donde se coloca la muestra.',
    fullDesc: 'Plataforma metálica oscura y resistente provista de un orificio central que permite el paso vertical del haz luminoso hacia la muestra.',
    functionDesc: 'Sostiene de manera firme y horizontal el portaobjetos con la preparación biológica durante la observación.',
    coords: { x: 48, y: 52 }
  },
  {
    id: 'pinzas',
    name: 'Pinzas o Sujetadores',
    system: 'mecanico',
    systemName: 'Sistema Mecánico',
    shortDesc: 'Láminas metálicas flexibles que inmovilizan la lámina.',
    fullDesc: 'Dos piezas de metal flexible (o un carro mecánico coaxial) montadas sobre la superficie de la platina.',
    functionDesc: 'Mantienen inmóvil el portaobjetos para evitar desplazamientos accidentales al manipular los mandos de enfoque.',
    coords: { x: 34, y: 50 }
  },
  {
    id: 'condensador',
    name: 'Condensador y Diafragma',
    system: 'iluminacion',
    systemName: 'Sistema de Iluminación',
    shortDesc: 'Conjunto de lentes y cortinilla que concentran y regulan la luz.',
    fullDesc: 'Ubicado inmediatamente debajo de la platina. El condensador concentra los rayos luminosos en un cono de luz sobre la muestra, mientras el diafragma iris regula la apertura.',
    functionDesc: 'Concentra la luz de manera uniforme y gradúa el contraste y la profundidad de campo para apreciar detalles transparentes.',
    coords: { x: 48, y: 60 }
  },
  {
    id: 'fuente_luz',
    name: 'Fuente de Iluminación',
    system: 'iluminacion',
    systemName: 'Sistema de Iluminación',
    shortDesc: 'Lámpara LED o halógena integrada en la base.',
    fullDesc: 'Dispositivo eléctrico (o espejo en modelos clásicos) situado en la base del microscopio que emite un haz luminoso vertical hacia la subplatina.',
    functionDesc: 'Proporciona la radiación lumínica indispensable para atravesar la preparación por transparencia y llegar al ojo.',
    coords: { x: 48, y: 75 }
  },
  {
    id: 'tornillo_macro',
    name: 'Tornillo Macrométrico',
    system: 'mecanico',
    systemName: 'Sistema Mecánico',
    shortDesc: 'Rueda grande para el enfoque rápido y grueso.',
    fullDesc: 'Mando giratorio de gran diámetro ubicado en el lateral del microscopio que produce un desplazamiento vertical amplio y veloz de la platina.',
    functionDesc: 'Permite acercar o alejar rápidamente la platina para conseguir el enfoque inicial visible de la muestra con el objetivo menor.',
    coords: { x: 67, y: 62 }
  },
  {
    id: 'tornillo_micro',
    name: 'Tornillo Micrométrico',
    system: 'mecanico',
    systemName: 'Sistema Mecánico',
    shortDesc: 'Rueda pequeña para el enfoque fino y de máxima nitidez.',
    fullDesc: 'Mando giratorio de precisión milimétrica (frecuentemente concéntrico con el macrométrico o situado a su lado).',
    functionDesc: 'Realiza desplazamientos microscópicos y casi imperceptibles de la platina para calibrar la nitidez exacta de las estructuras.',
    coords: { x: 74, y: 69 }
  },
  {
    id: 'brazo',
    name: 'Brazo o Columna',
    system: 'mecanico',
    systemName: 'Sistema Mecánico',
    shortDesc: 'Estructura curvada y robusta que une la base con el cabezal.',
    fullDesc: 'Columna metálica sólida que constituye el esqueleto central del microscopio óptico.',
    functionDesc: 'Sirve como punto de sujeción firme y seguro para transportar el microscopio y conecta mecánicamente la base con el tubo.',
    coords: { x: 63, y: 38 }
  },
  {
    id: 'base',
    name: 'Base o Pie',
    system: 'mecanico',
    systemName: 'Sistema Mecánico',
    shortDesc: 'Apoyo inferior pesado que otorga estabilidad.',
    fullDesc: 'Parte inferior pesada, fabricada en hierro colado o aleación densa, con topes de goma antideslizantes.',
    functionDesc: 'Sostiene todo el peso del instrumento, garantizando equilibrio estricto y absorbiendo vibraciones de la mesa de trabajo.',
    coords: { x: 50, y: 92 }
  }
];

export const PROTOCOL_STEPS: ProtocolStep[] = [
  {
    number: 1,
    title: 'Preparación',
    shortName: 'Ubicación',
    instruction: 'Coloca el microscopio sobre una superficie firme, limpia, seca y plana, alejada de bordes de la mesa.',
    teacherTip: 'Revisa que el cable no cuelgue ni estorbe el paso de tus compañeros en el laboratorio.',
    iconName: 'ShieldCheck',
    safetyNote: 'Transporta siempre el equipo tomándolo con una mano del brazo y apoyando la otra en la base.'
  },
  {
    number: 2,
    title: 'Iluminación',
    shortName: 'Encendido',
    instruction: 'Enciende la fuente de luz y ajusta su intensidad a un nivel moderado que no canse la vista.',
    teacherTip: 'Abre el diafragma a la mitad para iniciar con un buen equilibrio de luz y contraste.',
    iconName: 'Sun',
    safetyNote: 'No mires directamente a la bombilla encendida sin lentes ni filtro.'
  },
  {
    number: 3,
    title: 'Colocación',
    shortName: 'Montaje',
    instruction: 'Sitúa la preparación sobre la platina, asegurando que la muestra quede sobre el orificio central, y sujétala con las pinzas.',
    teacherTip: 'El cubreobjetos debe quedar siempre hacia arriba, nunca en contacto directo con la platina.',
    iconName: 'Layers',
    safetyNote: 'Manipula las láminas de vidrio solo por sus bordes para no mancharlas ni romperlas.'
  },
  {
    number: 4,
    title: 'Aumento inicial',
    shortName: 'Objetivo menor',
    instruction: 'Gira el revólver portaobjetivos hasta colocar el objetivo de menor aumento (4x o 10x). Debe escucharse un suave "clic".',
    teacherTip: 'Empezar con el menor aumento te brinda un campo de visión amplio para localizar la muestra con facilidad.',
    iconName: 'Maximize2',
    safetyNote: 'Nunca inicies la observación con objetivos grandes (40x o 100x), pues corres el riesgo de romper la lámina.'
  },
  {
    number: 5,
    title: 'Enfoque grueso',
    shortName: 'Macrométrico',
    instruction: 'Observando lateralmente, sube la platina con el tornillo macrométrico sin tocar el vidrio. Luego mira por el ocular y baja lentamente hasta que aparezca la imagen.',
    teacherTip: 'El enfoque siempre se realiza alejando el objetivo del portaobjetos para evitar choques accidentales.',
    iconName: 'Sliders',
    safetyNote: 'Nunca subas la platina mientras miras por el ocular sin vigilar la distancia al objetivo.'
  },
  {
    number: 6,
    title: 'Ajuste fino',
    shortName: 'Micrométrico',
    instruction: 'Utiliza cuidadosamente el tornillo micrométrico girándolo despacio en ambos sentidos para alcanzar la máxima nitidez de los detalles.',
    teacherTip: 'Un giro suave de pocos milímetros es suficiente para enfocar diferentes planos de la célula.',
    iconName: 'Sparkles',
    safetyNote: 'No fuerces los topes mecánicos de los tornillos.'
  },
  {
    number: 7,
    title: 'Observación y Registro',
    shortName: 'Registro',
    instruction: 'Identifica las estructuras visibles (paredes celulares, núcleos, forma celular) y regístralas mediante dibujos y notas claras en tu hoja de trabajo.',
    teacherTip: 'Dibuja exactamente lo que observas por el ocular, sin inventar detalles que no veas.',
    iconName: 'FileEdit',
    safetyNote: 'Mantén ambos ojos abiertos para evitar fatiga ocular durante sesiones prolongadas.'
  },
  {
    number: 8,
    title: 'Finalización y Guardado',
    shortName: 'Limpieza',
    instruction: 'Regresa al objetivo de menor aumento, baja la platina, retira la preparación, apaga la luz y limpia suavemente el microscopio.',
    teacherTip: 'Desconecta el cable jalando del enchufe, nunca tirando del cable.',
    iconName: 'CheckCircle2',
    safetyNote: 'Cubre el microscopio con su funda protectora contra el polvo para conservarlo en óptimas condiciones.'
  }
];

export const SAFETY_RULES: SafetyRule[] = [
  {
    id: 1,
    rule: 'Transportar el microscopio sujetando el brazo con una mano y sosteniendo la base firmemente con la otra mano.',
    rationale: 'Evita caídas imprevistas por el peso concentrado del instrumento.',
    isImportant: true
  },
  {
    id: 2,
    rule: 'No tocar jamás las lentes de vidrio (ocular u objetivos) con los dedos.',
    rationale: 'La grasa y suciedad natural de la piel opacan el vidrio y deterioran los recubrimientos antirreflejo.',
    isImportant: true
  },
  {
    id: 3,
    rule: 'No forzar nunca los tornillos macrométrico ni micrométrico más allá de sus topes suaves.',
    rationale: 'Los engranajes internos son de precisión milimétrica y pueden desgastarse o quebrarse.',
    isImportant: true
  },
  {
    id: 4,
    rule: 'Evitar rigurosamente que el objetivo choque o presione contra el portaobjetos.',
    rationale: 'Se fractura inmediatamente la lámina de vidrio y se raya de forma irreversible la lente frontal del objetivo.',
    isImportant: true
  },
  {
    id: 5,
    rule: 'Utilizar únicamente papel especial para lentes (papel arroz/óptico) cuando sea necesario limpiarlas.',
    rationale: 'Cualquier tela o papel ordinario contiene fibras ásperas que rayan el vidrio óptico.',
    isImportant: false
  },
  {
    id: 6,
    rule: 'Manipular con delicadeza los portaobjetos y cubreobjetos tomándolos solo por los bordes.',
    rationale: 'Son cristales finos cortantes que se rompen con facilidad y pueden producir cortes.',
    isImportant: false
  },
  {
    id: 7,
    rule: 'Informar de inmediato al docente sobre cualquier material roto, líquido derramado o dificultad técnica.',
    rationale: 'Garantiza la seguridad de todo el grupo y un manejo correcto del material de laboratorio.',
    isImportant: true
  },
  {
    id: 8,
    rule: 'No utilizar objetivos de mayor aumento (40x o inmersión 100x) sin previa autorización e instrucción del docente.',
    rationale: 'Tienen una distancia de trabajo muy reducida (menos de 1 mm) y requieren técnica supervisada.',
    isImportant: false
  }
];

export const TRUE_FALSE_QUESTIONS: TrueFalseQuestion[] = [
  {
    id: 1,
    statement: 'Para transportar el microscopio es suficiente agarrarlo con una sola mano de la platina.',
    isTrue: false,
    explanation: '¡Falso! La platina es una pieza móvil delicada. El microscopio siempre debe transportarse con dos manos: una sujetando el brazo y la otra apoyada debajo de la base.'
  },
  {
    id: 2,
    statement: 'Siempre se debe iniciar la observación con el objetivo de menor aumento (como 4x o 10x).',
    isTrue: true,
    explanation: '¡Verdadero! El objetivo de menor aumento ofrece mayor campo de visión y mayor distancia a la muestra, facilitando la ubicación y evitando roturas.'
  },
  {
    id: 3,
    statement: 'Si una lente se ensucia, se puede limpiar rápidamente con la manga de la chompa o papel higiénico.',
    isTrue: false,
    explanation: '¡Falso! Las telas comunes y el papel higiénico contienen fibras duras que rayan el vidrio de las lentes. Debe usarse únicamente papel especial para óptica.'
  },
  {
    id: 4,
    statement: 'El tornillo micrométrico se utiliza para realizar ajustes finos y lograr la máxima nitidez de la imagen.',
    isTrue: true,
    explanation: '¡Verdadero! El micrométrico desplaza la platina en distancias ínfimas, logrando enfocar con precisión microscópica.'
  },
  {
    id: 5,
    statement: 'Al enfocar con el tornillo macrométrico, es seguro subir la platina rápidamente mirando por el ocular.',
    isTrue: false,
    explanation: '¡Falso! Al subir la platina se debe vigilar desde afuera de forma lateral para asegurarse de que el objetivo no impacte contra la lámina de vidrio.'
  }
];

export const SPECIMEN_SLIDES: SpecimenSlide[] = [
  {
    id: 'cebolla',
    name: 'Epidermis de cebolla (Allium cepa)',
    category: 'vegetal',
    origin: 'Tejido protector vegetal de la cara cóncava de una catáfila de cebolla',
    stain: 'Solución de Lugol / Azul de metileno',
    description: 'Células vegetales típicas dispuestas en una sola capa como hileras de ladrillos. Presentan una pared celular nítida y rígida, citoplasma y un núcleo bien diferenciado. No contienen cloroplastos visibles.',
    hasChloroplasts: false,
    hasCellWall: true,
    realMicrographNote: 'Micrografía óptica educativa real: el bulbo de cebolla crece bajo tierra, por lo que almacena nutrientes pero no realiza fotosíntesis ni contiene cloroplastos.',
    magnifications: {
      '40x': {
        description: 'Visión panorámica de la monocapa. Se aprecian decenas de células alargadas y poligonales ordenadas simétricamente.',
        visibleStructures: ['Mosaico de células alargadas', 'Límites de las paredes celulares', 'Contorno de núcleos'],
        diameterMicrons: 4500,
        idealFocus: 50
      },
      '100x': {
        description: 'Aumento medio. La pared celular de celulosa se distingue con gran nitidez. Se observan los núcleos como cuerpos ovales teñidos de amarillo-ámbar o azul.',
        visibleStructures: ['Pared celular de celulosa', 'Núcleo ovoide excéntrico', 'Citoplasma granular'],
        diameterMicrons: 1800,
        idealFocus: 54
      },
      '400x': {
        description: 'Gran aumento. Se evidencia el espesor de la pared celular vegetal, la membrana plasmática íntimamente adosada a ella y el nucléolo dentro del núcleo.',
        visibleStructures: ['Pared celular de doble contorno', 'Núcleo teñido con nucléolo', 'Vacuola central delimitada'],
        diameterMicrons: 450,
        idealFocus: 60
      }
    },
    labels: [
      { name: 'Pared celular', description: 'Capa rígida de celulosa que da forma poligonal y protección a la célula vegetal.', x: 50, y: 32, minMag: '40x' },
      { name: 'Núcleo teñido', description: 'Corpúsculo ovoide que alberga el ADN y regula todas las actividades de la célula.', x: 62, y: 55, minMag: '100x' },
      { name: 'Citoplasma', description: 'Medio acuoso gelatinoso donde se encuentran los organelos celulares.', x: 38, y: 64, minMag: '100x' },
      { name: 'Zona de vacuola central', description: 'Gran compartimento con agua y reservas que ocupa la mayor parte del volumen.', x: 45, y: 48, minMag: '400x' }
    ]
  },
  {
    id: 'mucosa',
    name: 'Células epiteliales de mucosa bucal humana',
    category: 'animal',
    origin: 'Frotis de raspado suave del epitelio interior de la mejilla',
    stain: 'Azul de metileno (0.1%)',
    description: 'Células animales planas aisladas o en pequeños grupos desprendidos. Tienen contornos celulares irregulares y flexibles sin pared celular rígida, con un núcleo central intensamente teñido de azul.',
    hasChloroplasts: false,
    hasCellWall: false,
    realMicrographNote: 'Micrografía óptica educativa real: las células animales carecen de pared celular y cloroplastos; presentan membrana plasmática flexible y núcleo central.',
    magnifications: {
      '40x': {
        description: 'Campo amplio. Se distinguen pequeños puntos y agregados azulados dispersos sobre el fondo claro del portaobjetos.',
        visibleStructures: ['Grupos dispersos de células', 'Fondo limpio con colorante'],
        diameterMicrons: 4500,
        idealFocus: 48
      },
      '100x': {
        description: 'Aumento intermedio. Se identifican claramente las células individuales con su silueta poligonal irregular plegada.',
        visibleStructures: ['Células epiteliales planas', 'Núcleos esféricos azul oscuro', 'Bordes celulares plegados'],
        diameterMicrons: 1800,
        idealFocus: 52
      },
      '400x': {
        description: 'Gran aumento. Cada célula muestra su membrana plasmática flexible con pliegues, citoplasma azul pálido finamente granular y núcleo oscuro bien definido.',
        visibleStructures: ['Membrana plasmática flexible', 'Núcleo central denso', 'Citoplasma granular'],
        diameterMicrons: 450,
        idealFocus: 58
      }
    },
    labels: [
      { name: 'Membrana plasmática', description: 'Límite externo flexible formado por bicapa lipídica; sin pared celular.', x: 44, y: 35, minMag: '40x' },
      { name: 'Núcleo azul oscuro', description: 'Estructura central fuertemente teñida por el azul de metileno con cromatina.', x: 52, y: 53, minMag: '100x' },
      { name: 'Citoplasma animal', description: 'Espacio celular interno sin cloroplastos ni gran vacuola rígida.', x: 65, y: 42, minMag: '100x' },
      { name: 'Pliegues de membrana', description: 'Arrugas naturales del tejido epitelial plano estratificado.', x: 30, y: 62, minMag: '400x' }
    ]
  },
  {
    id: 'hoja_verde',
    name: 'Tejido vegetal con cloroplastos (Hoja verde de Elodea)',
    category: 'vegetal',
    origin: 'Corte superficial de hoja viva de planta acuática Elodea / hoja tierna',
    stain: 'Montaje en fresco con agua destilada (pigmentos naturales)',
    description: 'Células vegetales fotosintéticas ricas en cloroplastos esféricos de color verde brillante. Muestran movimiento de ciclosis citoplasmática en muestras vivas frescas.',
    hasChloroplasts: true,
    hasCellWall: true,
    realMicrographNote: 'Micrografía ilustrativa rotulada: a diferencia de la cebolla, estas células expuestas a la luz solar sí desarrollan abundantes cloroplastos con clorofila.',
    magnifications: {
      '40x': {
        description: 'Se observa la red de tejido foliar con un marcado color verde distribuido en compartimentos celulares.',
        visibleStructures: ['Malla celular verde', 'Venación foliar simple'],
        diameterMicrons: 4500,
        idealFocus: 51
      },
      '100x': {
        description: 'Se reconocen las paredes celulares transparentes y decenas de esferas verdes (cloroplastos) en el interior de cada célula.',
        visibleStructures: ['Pared celular nítida', 'Múltiples cloroplastos esféricos', 'Estomas ocasionales'],
        diameterMicrons: 1800,
        idealFocus: 55
      },
      '400x': {
        description: 'Detalle de alta resolución. Los cloroplastos se ven distribuidos contra la pared celular debido a la presión de la gran vacuola central.',
        visibleStructures: ['Cloroplastos discoidales verdes', 'Pared celular de celulosa', 'Flujo citoplasmático periférico'],
        diameterMicrons: 450,
        idealFocus: 62
      }
    },
    labels: [
      { name: 'Cloroplastos', description: 'Organelos verdes que contienen clorofila y realizan la fotosíntesis captando luz solar.', x: 55, y: 42, minMag: '40x' },
      { name: 'Pared celular vegetal', description: 'Armazón de celulosa que delimita cada célula vegetal rectangular.', x: 32, y: 30, minMag: '100x' },
      { name: 'Vacuola central translúcida', description: 'Ocupa el 80% del centro empujando los cloroplastos a la periferia.', x: 48, y: 58, minMag: '100x' }
    ]
  },
  {
    id: 'muscular',
    name: 'Tejido muscular estriado esquelético animal',
    category: 'animal',
    origin: 'Corte histológico longitudinal de músculo estriado de mamífero',
    stain: 'Hematoxilina y Eosina (H-E)',
    description: 'Fibras musculares cilíndricas alargadas dispuestas en fascículos paralelos. Presentan estriaciones transversales periódicas características (bandas claras y oscuras) y múltiples núcleos periféricos.',
    hasChloroplasts: false,
    hasCellWall: false,
    realMicrographNote: 'Microfotografía histológica de referencia: tejido altamente especializado para la contracción voluntaria del aparato locomotor.',
    magnifications: {
      '40x': {
        description: 'Haz de fibras musculares paralelas teñidas de tono rojizo-rosado con núcleos en forma de puntos alargados.',
        visibleStructures: ['Fascículos de fibras paralelas', 'Tejido conectivo intersticial'],
        diameterMicrons: 4500,
        idealFocus: 49
      },
      '100x': {
        description: 'Se diferencian las fibras individuales multinucleadas. Los núcleos se disponen en la periferia de cada fibra.',
        visibleStructures: ['Fibras musculares cilíndricas', 'Núcleos periféricos alargados'],
        diameterMicrons: 1800,
        idealFocus: 53
      },
      '400x': {
        description: 'Se observan con máxima claridad las estriaciones transversales (alternancia de bandas de actina y miosina) responsables de la contracción.',
        visibleStructures: ['Estriaciones transversales (bandas A e I)', 'Sarcolema (membrana celular)', 'Sarcoplasma con núcleos'],
        diameterMicrons: 450,
        idealFocus: 61
      }
    },
    labels: [
      { name: 'Fibra muscular', description: 'Célula muscular cilíndrica multinucleada muy larga.', x: 48, y: 38, minMag: '40x' },
      { name: 'Estriaciones transversales', description: 'Bandas paralelas de proteínas contráctiles (actina y miosina).', x: 60, y: 52, minMag: '100x' },
      { name: 'Núcleo periférico', description: 'Núcleo celular ubicado justo debajo de la membrana (sarcolema).', x: 35, y: 65, minMag: '100x' }
    ]
  },
  {
    id: 'nervioso',
    name: 'Tejido nervioso (Médula espinal y neuronas motoras)',
    category: 'animal',
    origin: 'Corte histológico de sustancia gris de médula espinal',
    stain: 'Impregnación de plata / Violeta de cresilo',
    description: 'Neuronas multipolares de gran tamaño con cuerpo estrellado (soma), prolongaciones ramificadas (dendritas) y un axón prominente, rodeadas de pequeños núcleos de células gliales de soporte.',
    hasChloroplasts: false,
    hasCellWall: false,
    realMicrographNote: 'Microfotografía histológica de referencia: tejido especializado en generar y conducir impulsos electroquímicos para la coordinación corporal.',
    magnifications: {
      '40x': {
        description: 'Campo amplio de sustancia gris con somas neuronales oscuros que destacan sobre una trama fibrilar fina (neurópilo).',
        visibleStructures: ['Cuerpos neuronales estrellados', 'Red de soporte glial'],
        diameterMicrons: 4500,
        idealFocus: 50
      },
      '100x': {
        description: 'Se aprecian las siluetas estrelladas características de las neuronas motoras con sus prolongaciones dendríticas saliendo del soma.',
        visibleStructures: ['Soma neuronal estrellado', 'Dendritas primarias', 'Células de la glía'],
        diameterMicrons: 1800,
        idealFocus: 54
      },
      '400x': {
        description: 'Detalle del cuerpo neuronal con su gran núcleo vesiculoso esférico, nucléolo prominente y grumos de Nissl en el citoplasma.',
        visibleStructures: ['Núcleo neuronal esférico', 'Nucléolo marcado', 'Cono axónico y axón', 'Sustancia de Nissl'],
        diameterMicrons: 450,
        idealFocus: 59
      }
    },
    labels: [
      { name: 'Soma o cuerpo neuronal', description: 'Centro metabólico de la neurona que contiene el núcleo y la maquinaria biosintética.', x: 46, y: 48, minMag: '40x' },
      { name: 'Dendritas', description: 'Prolongaciones celulares ramificadas que reciben estímulos de otras células.', x: 62, y: 32, minMag: '100x' },
      { name: 'Núcleo y nucléolo', description: 'Núcleo voluminoso con nucléolo visible en "ojo de búho".', x: 49, y: 52, minMag: '400x' },
      { name: 'Células gliales', description: 'Células acompañantes más pequeñas que nutren y protegen a las neuronas.', x: 30, y: 68, minMag: '100x' }
    ]
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: '¿Cuál es la función principal del revólver portaobjetivos en un microscopio?',
    options: [
      'Encender y apagar la fuente de luz',
      'Permitir el intercambio rápido de objetivos de diferentes aumentos',
      'Desplazar la platina de izquierda a derecha',
      'Aumentar la imagen final directamente en el ojo'
    ],
    correctAnswer: 1,
    explanation: 'El revólver es una pieza circular giratoria que sostiene los objetivos y permite cambiar entre 4x, 10x y 40x con un simple giro sin perder el enfoque.',
    topic: 'microscopio'
  },
  {
    id: 2,
    question: '¿Por qué se debe iniciar siempre la observación con el objetivo de menor aumento?',
    options: [
      'Porque es el único que funciona con luz artificial',
      'Porque ofrece un campo visual más amplio y evita que el objetivo choque con la lámina',
      'Porque no necesita que se use el tornillo micrométrico',
      'Porque así no se gasta la batería del microscopio'
    ],
    correctAnswer: 1,
    explanation: 'El objetivo de menor aumento brinda un campo amplio para ubicar la muestra fácilmente y mantiene una distancia segura con respecto a la lámina de vidrio.',
    topic: 'seguridad'
  },
  {
    id: 3,
    question: '¿Qué tornillo se debe utilizar para lograr una imagen nítida y con detalles finos?',
    options: [
      'Tornillo macrométrico',
      'Tornillo del condensador',
      'Tornillo micrométrico',
      'Tornillo de las pinzas'
    ],
    correctAnswer: 2,
    explanation: 'El tornillo micrométrico realiza movimientos minúsculos y precisos de la platina para ajustar la nitidez exacta de la muestra.',
    topic: 'microscopio'
  },
  {
    id: 4,
    question: '¿Cómo debe transportarse correctamente el microscopio en el aula o laboratorio?',
    options: [
      'Sujetándolo únicamente por el tubo ocular',
      'Tomándolo con una mano del brazo y apoyando la otra firmemente bajo la base',
      'Arrastrándolo con cuidado sobre la mesa',
      'Agarrándolo de las pinzas de la platina'
    ],
    correctAnswer: 1,
    explanation: 'El microscopio debe transportarse con ambas manos: una asegurando el brazo y otra sosteniendo la base para evitar caídas o descalibraciones.',
    topic: 'seguridad'
  },
  {
    id: 5,
    question: 'Si observamos células de epidermis de cebolla al microscopio, ¿qué estructura es la responsable de su forma geométrica rectangular y rígida?',
    options: [
      'La membrana plasmática',
      'La pared celular de celulosa',
      'Los cloroplastos verdes',
      'El tornillo macrométrico'
    ],
    correctAnswer: 1,
    explanation: 'La pared celular está compuesta de celulosa y proporciona rigidez, soporte y una forma poliédrica constante a las células vegetales.',
    topic: 'celulas'
  },
  {
    id: 6,
    question: '¿Por qué las células del bulbo de cebolla NO presentan cloroplastos verdes?',
    options: [
      'Porque la cebolla no es un vegetal',
      'Porque se murieron al preparar la lámina',
      'Porque el bulbo crece bajo tierra en la oscuridad y no realiza fotosíntesis',
      'Porque el microscopio óptico no tiene suficiente potencia'
    ],
    correctAnswer: 2,
    explanation: 'Los bulbos de cebolla se desarrollan bajo el suelo en ausencia de luz; no realizan fotosíntesis y por tanto no desarrollan cloroplastos, a diferencia de las hojas verdes.',
    topic: 'celulas'
  },
  {
    id: 7,
    question: 'Al observar células epiteliales de la mucosa bucal humana, se confirma que son de origen animal porque:',
    options: [
      'Tienen una pared celular muy gruesa y cloroplastos',
      'Tienen membrana plasmática flexible, forma irregular y carecen de pared celular',
      'No poseen núcleo celular',
      'Tienen forma de ladrillo perfectamente rectangular'
    ],
    correctAnswer: 1,
    explanation: 'Las células animales tienen membrana plasmática delgada y flexible, forma variable y nunca poseen pared celular de celulosa ni cloroplastos.',
    topic: 'celulas'
  },
  {
    id: 8,
    question: '¿Qué aumento total se obtiene al combinar un ocular de 10x con un objetivo de 40x?',
    options: [
      '50x',
      '400x',
      '40x',
      '4000x'
    ],
    correctAnswer: 1,
    explanation: 'El aumento total es la multiplicación del aumento del ocular por el aumento del objetivo: 10 × 40 = 400x.',
    topic: 'microscopio'
  },
  {
    id: 9,
    question: '¿Cuál de los siguientes es un ejemplo de tejido vegetal conductor?',
    options: [
      'Tejido muscular estriado',
      'Tejido epitelial estratificado',
      'Xilema y floema',
      'Tejido nervioso'
    ],
    correctAnswer: 2,
    explanation: 'El xilema (conduce agua y sales minerales) y el floema (conduce savia elaborada) constituyen el tejido vascular conductor de las plantas.',
    topic: 'tejidos'
  },
  {
    id: 10,
    question: '¿Qué es biológicamente un "tejido"?',
    options: [
      'Un solo organelo que flota en el citoplasma',
      'Un conjunto organizado de células similares que cumplen una función especializada',
      'Cualquier pedazo de tela utilizado para limpiar el microscopio',
      'El conjunto de todos los huesos del cuerpo'
    ],
    correctAnswer: 1,
    explanation: 'En biología, un tejido es una agrupación integrada y coordinada de células con estructura y origen semejantes que desempeñan funciones específicas.',
    topic: 'tejidos'
  }
];

export const TISSUE_CATEGORIES = {
  animal: [
    {
      name: 'Tejido Epitelial',
      icon: 'Shield',
      function: 'Recubre superficies externas del cuerpo y reviste cavidades y órganos internos. Cumple funciones de protección, absorción y secreción.',
      examples: 'Piel (epidermis), mucosa bucal, recubrimiento del estómago.',
      cellType: 'Células estrechamente unidas con escasa sustancia intercelular.'
    },
    {
      name: 'Tejido Muscular',
      icon: 'Activity',
      function: 'Permite el movimiento corporal y visceral mediante la contracción y relajación de sus células (fibras musculares).',
      examples: 'Músculo esquelético (voluntario), músculo cardíaco (corazón) y liso (involuntario).',
      cellType: 'Fibras alargadas ricas en proteínas contráctiles (actina y miosina).'
    },
    {
      name: 'Tejido Nervioso',
      icon: 'Zap',
      function: 'Detecta estímulos, procesa información y transmite impulsos electroquímicos para coordinar las respuestas del organismo.',
      examples: 'Cerebro, médula espinal y nervios periféricos.',
      cellType: 'Neuronas especializadas en transmisión de impulsos y células de la glía de soporte.'
    },
    {
      name: 'Tejido Conectivo (Conjuntivo)',
      icon: 'Network',
      function: 'Une, sostiene, protege y transporta nutrientes entre los demás tejidos del cuerpo.',
      examples: 'Tejido óseo (huesos), cartilaginoso, adiposo (grasa) y sangre.',
      cellType: 'Células dispersas inmersas en una abundante matriz extracelular.'
    }
  ],
  vegetal: [
    {
      name: 'Tejido Epidérmico',
      icon: 'ShieldCheck',
      function: 'Cubre y protege las hojas, tallos jóvenes y raíces contra desecación, patógenos y daños mecánicos. Presenta estomas para el intercambio de gases.',
      examples: 'Epidermis de la hoja, epidermis de la cebolla.',
      cellType: 'Capa continua de células adosadas sin espacios intercelulares, a menudo con cutícula cerosa.'
    },
    {
      name: 'Parénquima (Tejido Fundamental)',
      icon: 'Sun',
      function: 'Realiza la fotosíntesis (parénquima clorofílico) y almacena sustancias de reserva como almidón, agua y aire.',
      examples: 'Mesófilo de hojas verdes, pulpa de frutas, tubérculos como la papa.',
      cellType: 'Células vivas con paredes primarias delgadas y grandes vacuolas.'
    },
    {
      name: 'Tejido Conductor (Xilema y Floema)',
      icon: 'ArrowDownUp',
      function: 'Transporta agua, minerales y nutrientes a través de toda la planta (sistema circulatorio vegetal).',
      examples: 'Xilema (savia bruta desde la raíz a hojas) y Floema (savia elaborada desde hojas al resto).',
      cellType: 'Tubos alargados y vasos huecos continuos adaptados al flujo continuo.'
    }
  ]
};

export const GLOSSARY_TERMS = [
  {
    id: 'resolucion',
    term: 'Resolución (Poder de resolución)',
    category: 'optica' as const,
    categoryLabel: 'Óptica y Aumento',
    definition: 'Capacidad de un sistema óptico para distinguir como separados dos puntos que se encuentran muy próximos entre sí en la muestra.',
    simpleExplanation: 'No es solo agrandar la imagen, sino verla con nitidez y separar detalles pequeños sin que se vean borrosos.',
    example: 'El microscopio óptico tiene un límite de resolución de unos 0.2 micrómetros (µm).'
  },
  {
    id: 'tincion',
    term: 'Tinción o Coloración biológica',
    category: 'tecnica' as const,
    categoryLabel: 'Técnicas de Laboratorio',
    definition: 'Procedimiento técnico que utiliza colorantes químicos afines para teñir estructuras celulares transparentes, aumentando su contraste.',
    simpleExplanation: 'Pintar las células con tintes especiales para que sus partes invisibles se puedan ver con claridad al microscopio.',
    example: 'El azul de metileno tiñe de azul intenso los núcleos de las células de la mucosa bucal.'
  },
  {
    id: 'preparacion_fresco',
    term: 'Preparación en fresco (Montaje húmedo)',
    category: 'tecnica' as const,
    categoryLabel: 'Técnicas de Laboratorio',
    definition: 'Montaje temporal de una muestra viva o recién extraída sobre el portaobjetos con una gota de agua o líquido fisiológico, cubierta por un cubreobjetos.',
    simpleExplanation: 'Colocar un pedacito de muestra fresca con una gota de agua para observarla de inmediato sin fijadores químicos.',
    example: 'Una hoja tierna de Elodea con agua destilada para observar el movimiento de los cloroplastos.'
  },
  {
    id: 'preparacion_fija',
    term: 'Preparación permanente o fija',
    category: 'tecnica' as const,
    categoryLabel: 'Técnicas de Laboratorio',
    definition: 'Lámina tratada mediante fijadores químicos y resinas sintéticas que conserva las células y tejidos intactos durante años para su estudio.',
    simpleExplanation: 'Muestras preparadas por el docente o el laboratorio que duran mucho tiempo protegidas con resina.',
    example: 'Cortes histológicos de músculo estriado o médula espinal teñidos con hematoxilina-eosina.'
  },
  {
    id: 'aumento_total',
    term: 'Aumento total',
    category: 'optica' as const,
    categoryLabel: 'Óptica y Aumento',
    definition: 'Poder de amplificación final que resulta de multiplicar el aumento del lente ocular por el aumento del lente objetivo seleccionado.',
    simpleExplanation: 'La multiplicación de los dos lentes: Ocular (10x) × Objetivo (40x) = 400x aumentos.',
    example: 'Con un ocular de 10x y un objetivo de 10x, observamos la muestra 100 veces más grande que su tamaño real.'
  },
  {
    id: 'portaobjetos',
    term: 'Portaobjetos y Cubreobjetos',
    category: 'tecnica' as const,
    categoryLabel: 'Técnicas de Laboratorio',
    definition: 'Láminas de cristal óptico plano. El portaobjetos es grueso y sirve de base (75 × 25 mm); el cubreobjetos es un cuadrado muy fino (0.17 mm) que aplana la muestra y protege el objetivo.',
    simpleExplanation: 'El vidrio grande sobre el que va la muestra y el vidrio finito que la cubre para que no se seque ni ensucie el lente.',
    example: 'Manipularlos siempre por los bordes para no dejar huellas dactilares de grasa.'
  },
  {
    id: 'campo_visual',
    term: 'Campo visual (Campo óptico)',
    category: 'optica' as const,
    categoryLabel: 'Óptica y Aumento',
    definition: 'Área circular iluminada del espécimen que se percibe a través del ocular al observar la muestra.',
    simpleExplanation: 'El círculo redondo de luz que ves con tu ojo. A mayor aumento, ves un pedacito más chiquito pero con mayor detalle.',
    example: 'A 40x el campo mide unos 4.5 mm de diámetro; a 400x se reduce a solo 0.45 mm.'
  },
  {
    id: 'diafragma_iris',
    term: 'Diafragma iris',
    category: 'optica' as const,
    categoryLabel: 'Óptica y Aumento',
    definition: 'Dispositivo mecánico de láminas metálicas ubicado bajo la platina que gradúa el diámetro del haz de luz que atraviesa la preparación.',
    simpleExplanation: 'Una ventanita circular que se abre o cierra para controlar cuánta luz entra y mejorar el contraste.',
    example: 'Para muestras muy transparentes, cerrar un poco el diafragma aumenta el contraste de los bordes.'
  },
  {
    id: 'micrometro',
    term: 'Micrómetro o Micra (µm)',
    category: 'optica' as const,
    categoryLabel: 'Óptica y Aumento',
    definition: 'Unidad de longitud del Sistema Internacional equivalente a la millonésima parte de un metro o la milésima parte de un milímetro (1 mm = 1000 µm).',
    simpleExplanation: 'La regla de medir de los biólogos para medir células y bacterias.',
    example: 'Una célula de epidermis de cebolla mide aproximadamente entre 100 y 300 µm de longitud.'
  },
  {
    id: 'pared_celular',
    term: 'Pared celular',
    category: 'celular' as const,
    categoryLabel: 'Estructuras Celulares',
    definition: 'Capa externa rígida compuesta principalmente de celulosa que envuelve la membrana plasmática de las células vegetales y les otorga resistencia mecánica.',
    simpleExplanation: 'El armazón resistente de las plantas que hace que las células parezcan ladrillos y les da firmeza.',
    example: 'Es la responsable de la forma poligonal ordenada de las células de cebolla.'
  },
  {
    id: 'cloroplasto',
    term: 'Cloroplasto',
    category: 'celular' as const,
    categoryLabel: 'Estructuras Celulares',
    definition: 'Organelo vegetal membranoso con pigmento verde (clorofila) donde se realiza la fotosíntesis en presencia de luz solar.',
    simpleExplanation: 'Las fábricas verdes de alimento de las plantas. Solo están en partes que reciben luz (hojas y tallos verdes).',
    example: 'Las hojas verdes de Elodea tienen abundantes cloroplastos; las cebollas no los tienen porque crecen bajo tierra.'
  },
  {
    id: 'membrana_plasmatica',
    term: 'Membrana plasmática',
    category: 'celular' as const,
    categoryLabel: 'Estructuras Celulares',
    definition: 'Bicapa lipídica semipermeable que encierra el contenido celular y selecciona activamente las sustancias que entran y salen.',
    simpleExplanation: 'La piel flexible y protectora de la célula que controla el paso de agua y nutrientes.',
    example: 'En las células de la mucosa bucal se aprecian pliegues de esta membrana flexible.'
  },
  {
    id: 'nucleo_celular',
    term: 'Núcleo celular',
    category: 'celular' as const,
    categoryLabel: 'Estructuras Celulares',
    definition: 'Estructura esférica u ovoide delimitada por una doble envoltura con poros que contiene el genoma (ADN) de la célula eucariota.',
    simpleExplanation: 'El centro de control de la célula donde se guarda la información genética de la vida.',
    example: 'Se observa como un punto denso y teñido en las células de cebolla y de mucosa humana.'
  },
  {
    id: 'parenquima',
    term: 'Parénquima',
    category: 'celular' as const,
    categoryLabel: 'Estructuras Celulares',
    definition: 'Tejido vegetal fundamental compuesto por células vivas con paredes primarias delgadas encargado de fotosíntesis, almacenamiento o cicatrización.',
    simpleExplanation: 'El tejido de relleno y trabajo activo de las plantas, como el mesófilo de las hojas o la pulpa de la manzana.',
    example: 'El parénquima clorofílico contiene abundantes cloroplastos para captar la luz del sol.'
  },
  {
    id: 'ciclosis',
    term: 'Ciclosis citoplasmática',
    category: 'celular' as const,
    categoryLabel: 'Estructuras Celulares',
    definition: 'Movimiento rotatorio continuo y activo del citosol generado por filamentos de actina que desplaza organelos dentro de células vegetales vivas.',
    simpleExplanation: 'Una corriente como un río dentro de la célula que mueve los cloroplastos en círculos para aprovechar mejor la luz.',
    example: 'En hojas vivas de Elodea se observa a los cloroplastos girando alrededor de la gran vacuola central.'
  }
];
