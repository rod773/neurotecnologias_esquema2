export const SITE = {
  name: "NEUROTECNOLOGIAS Inc",
  tagline: "desde 2003",
  email: "info@neurotecnologias.com",
  phone: "+1 305 320 4838",
  whatsapp: "https://wa.me/13053204838",
  url: "https://neurotecnologias.com",
  since: "2003",
  description:
    "Soluciones avanzadas para neurofisiología, neuromodulación y neurorehabilitación. Equipos médicos especializados desde 2003.",
};

export const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/productos", label: "Productos" },
  { href: "/areas-clinicas", label: "Publicaciones" },
  { href: "/congresos", label: "Congresos" },
  { href: "/contacto", label: "Contacto" },
];

export const CLINICAL_AREAS = [
  {
    id: 1,
    title: "Neuromodulación",
    slug: "neuromodulacion",
    description:
      "Equipos para estimulación cerebral no invasiva, EMT y tecnologías aplicadas al tratamiento neurológico y psiquiátrico.",
    chips: ["EMT / TMS", "tDCS", "TEC / ECT"],
    gradient: "from-medical-500 to-cyan-500",
    img: "/imagenes/neuromodulacion.webp",
  },
  {
    id: 2,
    title: "Neurofisiología",
    slug: "neurofisiologia",
    description:
      "Tecnología para evaluación, diagnóstico y monitoreo funcional del sistema nervioso en entornos clínicos y hospitalarios.",
    chips: ["Diagnóstico", "Monitoreo", "Clínica"],
    gradient: "from-cyan-500 to-teal-500",
    img: "/imagenes/EEGPE 21 canales.webp",
  },
  {
    id: 3,
    title: "Neurorehabilitación",
    slug: "neurorehabilitacion",
    description:
      "Soluciones orientadas a recuperación funcional, rehabilitación neurológica y estimulación terapéutica.",
    chips: ["Rehabilitación", "Plasticidad", "Terapia"],
    gradient: "from-teal-500 to-emerald-400",
    img: "/imagenes/Neuro-rehabilitación.webp",
  },
  {
    id: 4,
    title: "Neurocirugía",
    slug: "neurocirugia",
    description:
      "Equipos para procedimientos neuroquirúrgicos, planificación, monitoreo intraoperatorio y seguridad clínica.",
    chips: ["Quirófano", "Monitoreo", "Precisión"],
    gradient: "from-violet-500 to-blue-500",
    img: "/imagenes/NeuroNavegador para Cráneo, Columna y ENT.webp",
  },
  {
    id: 5,
    title: "Neurointensivismo",
    slug: "neurointensivismo",
    description:
      "Tecnología para cuidados intensivos neurológicos, monitoreo avanzado de pacientes críticos y soporte clínico.",
    chips: ["UCI neurológica", "Paciente crítico", "Monitoreo"],
    gradient: "from-blue-500 to-indigo-500",
    img: "/imagenes/neuroinsentivismo.webp",
  },
];

export const PRODUCTS = [
  {
    title: "Estimulación Magnética Transcraneal",
    slug: "estimulacion-magnetica-transcraneal",
    description:
      "Equipos para aplicaciones clínicas e investigativas en neurología, psiquiatría y rehabilitación.",
    chips: ["Neuromodulación", "EMT / TMS"],
    features: [
      "Estimulación cerebral no invasiva",
      "Aplicaciones clínicas y de investigación",
      "Soluciones para centros especializados",
    ],
    img: "/imagenes/Estimulación Magnética Transcraneal.webp",
    gradient: "from-medical-500/10 to-cyan-500/10",
    cta: "Ver solución",
  },
  {
    title: "Estimulación Transcraneal por Corriente Directa",
    slug: "tdcs",
    description:
      "Dispositivos utilizados en investigación, neurorehabilitación y protocolos clínicos controlados.",
    chips: ["tDCS", "Estimulación cerebral"],
    features: [
      "Estimulación de baja intensidad",
      "Aplicaciones en plasticidad cerebral",
      "Uso clínico e investigativo",
    ],
    img: "/imagenes/tdcs corriente directa.webp",
    gradient: "from-teal-500/10 to-emerald-400/10",
    cta: "Conocer tDCS",
  },
  {
    title: "Terapia Electroconvulsiva",
    slug: "terapia-electroconvulsiva",
    description:
      "Equipos especializados para entornos clínicos, hospitales y unidades de salud mental bajo criterio médico.",
    chips: ["TEC / ECT", "Psiquiatría clínica"],
    features: [
      "Uso profesional hospitalario",
      "Control y seguridad clínica",
      "Aplicaciones en psiquiatría especializada",
    ],
    img: "/imagenes/Terapia Electroconvulsiva.webp",
    gradient: "from-violet-500/10 to-blue-500/10",
    cta: "Ver tecnología TEC",
  },
  {
    title: "Monitoreo Neurofisiológico",
    slug: "neurofisiologia",
    description:
      "Sistemas para evaluación, seguimiento y monitoreo funcional del sistema nervioso en entornos clínicos.",
    chips: ["Monitoreo", "Neurofisiología"],
    features: [
      "Diagnóstico neurofisiológico",
      "Monitoreo intraoperatorio",
      "Soporte para neurocirugía y UCI",
    ],
    img: "/imagenes/Neuromonitor.webp",
    gradient: "from-cyan-500/10 to-blue-500/10",
    cta: "Explorar monitoreo",
  },
  {
    title: "Neurorehabilitación",
    slug: "neurorehabilitacion",
    description:
      "Soluciones para recuperación funcional, plasticidad cerebral, rehabilitación motora y estimulación terapéutica.",
    chips: ["Rehabilitación", "Recuperación"],
    features: [
      "Recuperación funcional",
      "Plasticidad cerebral",
      "Estimulación terapéutica",
    ],
    img: "/imagenes/Neuro-rehabilitación.webp",
    gradient: "from-teal-500/10 to-emerald-400/10",
    cta: "Ver soluciones",
  },
  {
    title: "Investigación Clínica",
    slug: "investigacion-neurociencia",
    description:
      "Herramientas para investigación en neurociencia, estimulación cerebral, comportamiento y tecnología aplicada.",
    chips: ["Investigación", "Neurociencia"],
    features: [
      "Estudios clínicos",
      "Equipos para laboratorios",
      "Soporte para universidades",
    ],
    img: "/imagenes/estimulacion por pulsos.webp",
    imgPosition: "object-[25%_center]",
    gradient: "from-violet-500/10 to-indigo-500/10",
    cta: "Explorar investigación",
  },
];

export const FAQS = [
  {
    q: "¿Qué tipo de equipos médicos ofrece Neurotecnologías?",
    a: "Ofrecemos equipos especializados en neuromodulación (EMT/TMS, tDCS, TEC/ECT), neurofisiología clínica, neurorehabilitación, monitoreo neurofisiológico y tecnología para investigación en neurociencia. Cada solución está orientada a entornos clínicos, hospitalarios y académicos.",
  },
  {
    q: "¿Cómo sé qué equipo necesita mi centro?",
    a: "Puedes contactarnos para una asesoría personalizada. Analizamos tu especialidad, tipo de centro, necesidades clínicas y presupuesto para recomendarte la solución más adecuada. No trabajamos con catálogos genéricos: cada recomendación es personalizada.",
  },
  {
    q: "¿Tienen representación en USA y Latinoamérica?",
    a: "Sí. Desde 2003 atendemos instituciones médicas en Estados Unidos y diversos países de Latinoamérica. Trabajamos con clínicas, hospitales, distribuidores e instituciones académicas en toda la región.",
  },
  {
    q: "¿Ofrecen soporte técnico y capacitación?",
    a: "Sí. Acompañamos a nuestros clientes en la selección, implementación y puesta en marcha de los equipos. Ofrecemos orientación técnica continua y capacitación para el personal del centro.",
  },
  {
    q: "¿Cómo puedo solicitar una cotización?",
    a: "Puedes escribirnos a info@neurotecnologias.com, contactarnos por WhatsApp al +1 305 320 4838 o llenar el formulario de contacto en nuestra web. Te responderemos con información detallada y una cotización ajustada a tu centro.",
  },
];

export const AUDIENCE_ITEMS = [
  { id: 1, title: "Clínicas neurológicas", description: "Equipos avanzados para diagnóstico, tratamiento, monitoreo y seguimiento de pacientes neurológicos.", color: "medical" },
  { id: 2, title: "Hospitales e instituciones médicas", description: "Soluciones para quirófanos, UCI, neurofisiología y servicios clínicos hospitalarios.", color: "cyan" },
  { id: 3, title: "Centros de neurorehabilitación", description: "Tecnología enfocada en recuperación funcional, plasticidad cerebral y rehabilitación neurológica.", color: "teal" },
  { id: 4, title: "Psiquiatras y centros de salud mental", description: "Equipos para neuromodulación y terapia electroconvulsiva bajo criterio médico profesional.", color: "violet" },
  { id: 5, title: "Universidades e investigadores", description: "Herramientas para investigación en neurociencia, estimulación cerebral y neurotecnología aplicada.", color: "blue" },
  { id: 6, title: "Distribuidores médicos", description: "Colaboración comercial y expansión regional en soluciones médicas especializadas.", color: "indigo" },
];

export const CLINICAL_APPLICATIONS = [
  {
    id: 1,
    title: "Depresión resistente al tratamiento",
    description:
      "Tecnologías de neuromodulación utilizadas en contextos psiquiátricos especializados y bajo evaluación médica profesional.",
    chip: "Psiquiatría",
  },
  {
    id: 2,
    title: "Rehabilitación post-ictus",
    description:
      "Soluciones orientadas a acompañar procesos de recuperación funcional, estimulación cerebral y neurorehabilitación motora o cognitiva.",
    chip: "Neurología",
  },
  {
    id: 3,
    title: "Dolor crónico",
    description:
      "Equipos y tecnologías utilizadas en protocolos profesionales relacionados con neuromodulación y manejo clínico especializado.",
    chip: "Neuromodulación",
  },
  {
    id: 4,
    title: "Trastornos neurológicos",
    description:
      "Herramientas para evaluación, seguimiento, estimulación o soporte terapéutico en diferentes condiciones neurológicas.",
    chip: "Neurofisiología",
  },
  {
    id: 5,
    title: "Monitoreo cerebral",
    description:
      "Tecnología para seguimiento funcional, monitoreo neurofisiológico y apoyo en entornos clínicos, quirúrgicos o intensivos.",
    chip: "Neurointensivismo",
  },
  {
    id: 6,
    title: "Neurocirugía funcional",
    description:
      "Soluciones de apoyo para planificación, precisión, monitoreo y seguridad en procedimientos neuroquirúrgicos especializados.",
    chip: "Neurocirugía",
  },
  {
    id: 7,
    title: "Plasticidad cerebral",
    description:
      "Herramientas utilizadas en investigación y rehabilitación para estudiar o acompañar procesos de adaptación del sistema nervioso.",
    chip: "Neurorehabilitación",
  },
  {
    id: 8,
    title: "Investigación en neurociencia",
    description:
      "Equipos para universidades, laboratorios y centros dedicados al estudio del cerebro, la conducta y la función neural.",
    chip: "Investigación",
  },
];

export const SPECIALTY_SOLUTIONS = [
  {
    id: 1,
    title: "Neurología",
    slug: "neurologia",
    description:
      "Equipos para diagnóstico, estimulación, monitoreo y tratamiento de condiciones relacionadas con el sistema nervioso.",
    gradient: "from-medical-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Psiquiatría",
    slug: "psiquiatria",
    description:
      "Tecnología para neuromodulación, TEC, estimulación cerebral y tratamientos especializados en salud mental.",
    gradient: "from-violet-500 to-blue-500",
  },
  {
    id: 3,
    title: "Neurorehabilitación",
    slug: "neurorehabilitacion",
    description:
      "Soluciones para recuperación funcional, plasticidad cerebral, rehabilitación motora y estimulación terapéutica.",
    gradient: "from-teal-500 to-emerald-400",
  },
  {
    id: 4,
    title: "Neurocirugía",
    slug: "neurocirugia",
    description:
      "Equipos para monitoreo, soporte intraoperatorio, precisión quirúrgica y procedimientos neuroquirúrgicos avanzados.",
    gradient: "from-violet-500 to-indigo-500",
  },
  {
    id: 5,
    title: "Investigación",
    slug: "investigacion-neurociencia",
    description:
      "Equipos para universidades, centros de investigación, laboratorios y estudios clínicos en neurociencia.",
    gradient: "from-cyan-500 to-teal-500",
  },
];

export const SPECIALTIES = [
  {
    id: 1,
    title: "Neurofisiología",
    slug: "neurofisiologia",
    img: "/imagenes/EEGPE 21 canales.webp",
    products: [
      { title: "EEG/PE 21 canales", img: "/imagenes/EEGPE 21 canales.webp", slug: "eeg-pe-21-canales", description: "Sistema de electroencefalografía y potenciales evocados de 21 canales con colocación de electrodos según el sistema internacional 10-20. Diseñado para diagnóstico clínico de epilepsia, trastornos del sueño, encefalopatías y evaluación funcional del sistema nervioso central. Incluye software avanzado de análisis y generación de informes." },
      { title: "EEG/PSG Ambulatorio", img: "/imagenes/Neuromonitor.webp", slug: "eeg-psg-ambulatorio", description: "Grabador ambulatorio de EEG/PSG de alta resolución con 21 canales y transferencia de datos en tiempo real por Wi-Fi. Permite monitoreo prolongado de actividad epiléptica durante varios días en memoria externa. Incluye pulsioxímetro integrado, sensores de flujo aéreo, esfuerzo abdominal/torácico, ronquido y posición corporal para estudios completos de sueño según norma AASM." },
      { title: "EEG/PE/EMG", img: "/imagenes/Neurotecnoligias_1.webp", slug: "eeg-pe-emg", description: "Estación de trabajo neuromultifuncional que combina electroencefalografía, potenciales evocados y electromiografía en un solo equipo. Ideal para clínicas y laboratorios de neurofisiología que requieren versatilidad diagnóstica. Interfaz unificada para registro, análisis y reportes de múltiples modalidades." },
      { title: "Neuron-Spectrum-61..65", img: "/imagenes/Neuron-Spectrum-61..65 (EEGVIDEOPSG de 11 a 39 canales).webp", slug: "neuron-spectrum-61-65", description: "Sistemas de video-EEG/PSG de 11 a 39 canales para monitoreo prolongado con cámara sincronizada. Diseñados para la localización de focos epilépticos, estudios de sueño y evaluación prequirúrgica. Compatible con múltiples configuraciones de electrodos y protocolos clínicos." },
      { title: "EMG 2 canales", img: "/imagenes/emg-2-canales.webp", slug: "emg-2-canales", description: "Electromiógrafo de 2 canales para estudios de conducción nerviosa, despistaje de neuropatías y evaluación de la función neuromuscular. Compacto y portátil, ideal para consultorios y clínicas con necesidades básicas de diagnóstico electromiográfico." },
      { title: "EMG 3 canales", img: "/imagenes/EMG de 3 canales.webp", slug: "emg-3-canales", description: "Electromiógrafo de 3 canales con capacidad ampliada para estudios de conducción nerviosa, ondas F, reflejo H y EMG de aguja. Incluye software de análisis cuantitativo y generación automática de informes clínicos." },
      { title: "EMG 4 canales", img: "/imagenes/EMG de 4 canales.webp", slug: "emg-4-canales", description: "Sistema EMG de 4 canales para evaluación integral del sistema nervioso periférico. Permite estudios simultáneos de múltiples músculos, facilitando diagnósticos complejos de trastornos neuromusculares, síndromes del túnel carpiano y radiculopatías." },
      { title: "EMG 5 canales", img: "/imagenes/EMG de 5 canales.webp", slug: "emg-5-canales", description: "Electromiógrafo de 5 canales con funcionalidad avanzada para estudios de despistaje y diagnóstico detallado. Incluye protocolos preconfigurados para las pruebas más frecuentes, análisis espectral y herramientas de monitoreo intraoperatorio básico." },
      { title: "EMG 8 canales", img: "/imagenes/EMG de 8 canales.webp", slug: "emg-8-canales", description: "Sistema EMG de 8 canales de alta gama para diagnóstico completo de trastornos neuromusculares y monitoreo intraoperatorio neurofisiológico. Capacidad multicanal para evaluación simultánea de múltiples nervios y músculos, ideal para centros de referencia." },
      { title: "Neuro-Tox (Botox guiado por EMG)", img: "/imagenes/Neuro-Tox.webp", slug: "neuro-tox", description: "Sistema de inyección de toxina botulínica guiada por EMG para tratamiento de distonía, espasticidad y otros trastornos del movimiento. Permite localización precisa del músculo diana mediante señal electromiográfica en tiempo real, mejorando la eficacia del tratamiento." },
      { title: "EOA / PE / Cocleografía", img: "/imagenes/EOA PECocleografía.webp", slug: "eoa-pe-cocleografia", description: "Sistema para evaluación de emisiones otoacústicas, potenciales evocados auditivos y cocleografía. Herramienta esencial para el despistaje auditivo neonatal, diagnóstico de hipoacusia y evaluación de la vía auditiva en pacientes pediátricos y adultos." },
      { title: "Screener EOA", img: "/imagenes/Screener EOA.webp", slug: "screener-eoa", description: "Equipo de despistaje rápido de emisiones otoacústicas para programas de screening auditivo neonatal. Diseño compacto y fácil de usar con resultados automáticos, ideal para maternidades y centros de salud primaria." },
      { title: "Impedanciometría y PEAee", img: "/imagenes/Impedanciometría.webp", slug: "impedanciometria-peaee", description: "Sistema combinado de impedanciometría timpánica y potenciales evocados auditivos de estado estable. Permite evaluación objetiva de la función del oído medio y la vía auditiva, fundamental para diagnóstico audiológico completo." },
      { title: "Electro-retinografía", img: "/imagenes/Electro-retinografía.webp", slug: "electro-retinografia", description: "Sistema de electroretinografía para evaluación funcional de la retina. Diagnóstico de retinosis pigmentaria, degeneración macular y otras enfermedades retinianas. Registro de ondas a, b y oscilatorias según estándares ISCEV." },
      { title: "Analizador Sistema Neuro-Vegetativo", img: "/imagenes/Analizador Sistema.webp", slug: "analizador-neuro-vegetativo", description: "Sistema para evaluación del sistema nervioso autónomo mediante variabilidad de la frecuencia cardíaca, respuesta simpática de la piel, test de sudoración y reflejo pupilar. Indicado para diagnóstico de neuropatías autonómicas en diabetes y otras condiciones." },
      { title: "EMT Neuronavegada para Mapeo Cortical", img: "/imagenes/Estimulación Magnética neuronavegada.webp", slug: "emt-neuronavegada-mapeo", description: "Sistema de estimulación magnética transcraneal neuronavegada para mapeo cortical motor y del lenguaje. Integración con neuronavegación 3D para localización precisa de áreas funcionales. Utilizado en planificación neuroquirúrgica y evaluación preoperatoria." },
    ],
  },
  {
    id: 2,
    title: "Neuromodulación",
    slug: "neuromodulacion",
    img: "/imagenes/neuromodulacion.webp",
    products: [
      { title: "Estimulación Magnética Transcraneal", img: "/imagenes/Estimulación Magnética Transcraneal.webp", slug: "emt-transcraneal", description: "Sistema de estimulación magnética transcraneal para tratamiento de depresión, trastorno obsesivo-compulsivo, dolor crónico y rehabilitación neurológica. Protocolos clínicos preconfigurados y modo de investigación con parámetros personalizables. Aprobado para uso clínico e investigativo." },
      { title: "Neuronavegador BST para EMT", img: "/imagenes/Neuronavegador BST para EMt.webp", slug: "neuronavegador-bst-emt", description: "Sistema de neuronavegación para estimulación magnética transcraneal que permite localización precisa del objetivo cerebral en 3D. Integra imagen anatómica del paciente con seguimiento en tiempo real de la bobina, garantizando reproducibilidad entre sesiones y precisión terapéutica." },
      { title: "Terapia Electroconvulsiva", img: "/imagenes/Terapia Electroconvulsiva.webp", slug: "terapia-electroconvulsiva", description: "Equipo de terapia electroconvulsiva de última generación para tratamiento de trastornos psiquiátricos resistentes a medicación. Control preciso de parámetros de estimulación, monitoreo integrado de EEG y EMG para verificación de convulsión, y protocolos de seguridad avanzados para uso hospitalario." },
      { title: "Neurofeedback", img: "/imagenes/neurofeedback.webp", slug: "neurofeedback", description: "Sistema de neurofeedback/biorretroalimentación cerebral para entrenamiento de autorregulación de la actividad EEG. Aplicaciones en TDAH, ansiedad, rendimiento cognitivo y rehabilitación. Interfaz visual interactiva con protocolos preconfigurados y personalizables." },
      { title: "tDCS - Corriente Directa", img: "/imagenes/tdcs corriente directa.webp", slug: "tdcs-corriente-directa", description: "Dispositivo de estimulación transcraneal por corriente directa (tDCS) para investigación y rehabilitación neurológica. Corriente constante y segura con múltiples modos de operación. Utilizado en estudios de plasticidad cerebral, dolor crónico, rehabilitación motora y trastornos del estado de ánimo." },
      { title: "TPS - Estimulación por Pulsos", img: "/imagenes/estimulacion por pulsos.webp", slug: "tps-estimulacion-pulsos", description: "Sistema de estimulación por pulsos para tratamiento de dolor, rehabilitación musculoesquelética y modulación neuromuscular. Generación de pulsos eléctricos de alta precisión con múltiples frecuencias y formas de onda adaptables a cada protocolo clínico." },
    ],
  },
  {
    id: 3,
    title: "Neurointensivismo",
    slug: "neurointensivismo",
    img: "/imagenes/neuroinsentivismo.webp",
    products: [
      { title: "Monitor FC/aEEG", img: "/imagenes/monitor fc.webp", slug: "monitor-fc-aeeg", description: "Monitor de frecuencia cardíaca y EEG de amplitud integrada (aEEG) para monitoreo continuo en unidades de cuidados intensivos. Detección automática de crisis epilépticas, tendencias de actividad cerebral y alertas configurables para intervención oportuna." },
      { title: "Doppler Transcraneal", img: "/imagenes/Doppler Transcraneal   Modelo Multi-Dop T digital.webp", slug: "doppler-transcraneal", description: "Sistema de Doppler transcraneal digital para evaluación no invasiva del flujo sanguíneo cerebral. Detección de vasoespasmo, embolia, estenosis y evaluación de reactividad vascular. Multicanal con monitoreo continuo y análisis espectral en tiempo real." },
      { title: "Pupilometría para UCI", img: "/imagenes/Pupilometría para UCI.webp", slug: "pupilometria-uci", description: "Sistema automatizado de pupilometría para evaluación objetiva de la función pupilar en pacientes neurocríticos. Medición precisa del diámetro pupilar, latencia de reflejo fotomotor y asimetría, con registro continuo y alertas de cambios neurológicos." },
    ],
  },
  {
    id: 4,
    title: "Neurocirugía",
    slug: "neurocirugia",
    img: "/imagenes/NeuroNavegador para Cráneo, Columna y ENT.webp",
    products: [
      { title: "Estimulador Eléctrico Cortical", img: "/imagenes/Estimulador Eléctrico Cortical.webp", slug: "estimulador-electrico-cortical", description: "Sistema de estimulación eléctrica cortical directa para mapeo funcional durante cirugía cerebral. Identificación en tiempo real de áreas motoras, del lenguaje y sensitivas para preservar funciones neurológicas durante la resección tumoral." },
      { title: "Monitor Intra-operatorio 32/64 canales", img: "/imagenes/Monitor intra-operatorio Neurofisiológico de 32_64 canales.webp", slug: "monitor-intraoperatorio", description: "Sistema de monitoreo neurofisiológico intraoperatorio de 32 o 64 canales para cirugía de columna, craneotomía y procedimientos espinales. Registro simultáneo de PEM, PE, EMG y EEG con alertas en tiempo real para prevenir déficits neurológicos." },
      { title: "NeuroNavegador para Cráneo, Columna y ENT", img: "/imagenes/NeuroNavegador para Cráneo, Columna y ENT.webp", slug: "neuronavegador-craneo-columna", description: "Sistema de neuronavegación 3D para cirugía de cráneo, columna vertebral y oído-nariz-garganta. Registro de imágenes preoperatorias con posición del paciente en tiempo real, guiando la precisión del abordaje quirúrgico y minimizando el trauma tisular." },
    ],
  },
  {
    id: 5,
    title: "Neurorehabilitación",
    slug: "neurorehabilitacion",
    img: "/imagenes/Neuro-rehabilitación.webp",
    products: [
      { title: "Re-educación de la marcha", img: "/imagenes/re-educacion marcha.webp", slug: "reeducacion-marcha", description: "Sistema de re-educación de la marcha para rehabilitación neurológica de pacientes con ictus, lesión medular y enfermedades neurodegenerativas. Entrenamiento con soporte de peso parcial, retroalimentación visual en tiempo real y protocolos progresivos de recuperación funcional." },
      { title: "EMT Terapéutica (Neuro MS/X)", img: "/imagenes/Estimulacion magnetica.webp", slug: "emt-terapeutica-neuro-msx", description: "Sistema de estimulación magnética transcraneal terapéutica de alta frecuencia para rehabilitación motora y cognitiva. Aplicaciones en recuperación post-ictus, dolor neuropático, rehabilitación de miembro superior y potenciación de plasticidad cerebral." },
    ],
  },
];
