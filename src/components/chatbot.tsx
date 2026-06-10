"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useLanguage } from "@/lib/language-context";

interface KnowledgeItem {
  keywords: string[];
  reply_es: string;
  reply_en: string;
  quick_es: string[];
  quick_en: string[];
}

interface Msg {
  type: "bot" | "user";
  text: string;
}

const knowledge: KnowledgeItem[] = [
  {
    keywords: ["hola", "buenos", "dias", "tardes", "noches", "hey", "saludos", "hello", "hi", "good"],
    reply_es: "¡Hola! Soy NeurIA, el asistente virtual de Neurotecnologías. Estoy aquí para resolver tus dudas, orientarte sobre nuestros servicios y, si lo necesitas, ponerte en contacto con un experto.",
    reply_en: "Hello! I'm NeurIA, the virtual assistant of Neurotecnologías. Would you like to speak with an expert from our team?",
    quick_es: ["Ver productos", "Publicaciones", "Contactar"],
    quick_en: ["View products", "Clinical areas", "Contact"],
  },
  {
    keywords: ["producto", "equipo", "tecnolog", "venden", "ofrecen", "catálogo", "catalogo", "product", "equipment", "technology"],
    reply_es: "Trabajamos con equipos especializados en:<br><br>🧠 <b>EMT / TMS</b> — Estimulación Magnética Transcraneal<br>🧠 <b>tDCS</b> — Estimulación por Corriente Directa<br>🧠 <b>TEC / ECT</b> — Terapia Electroconvulsiva<br>🧠 <b>Monitoreo Neurofisiológico</b><br>🧠 <b>Neurorehabilitación</b><br>🧠 <b>Investigación clínica</b>",
    reply_en: "We work with specialized equipment in:<br><br>🧠 <b>TMS</b> — Transcranial Magnetic Stimulation<br>🧠 <b>tDCS</b> — Transcranial Direct Current Stimulation<br>🧠 <b>ECT</b> — Electroconvulsive Therapy<br>🧠 <b>Neurophysiological Monitoring</b><br>🧠 <b>Neurorehabilitation</b><br>🧠 <b>Clinical Research</b>",
    quick_es: ["Ver EMT/TMS", "Ver tDCS", "Solicitar asesoría"],
    quick_en: ["View TMS", "View tDCS", "Request advice"],
  },
  {
    keywords: ["em/tms", "emt", "tms", "estimulación magnética", "magnética transcraneal", "estimulacion magnetica", "magnetic", "transcranial"],
    reply_es: "La <b>Estimulación Magnética Transcraneal (EMT/TMS)</b> es una técnica no invasiva que utiliza campos magnéticos para estimular áreas específicas del cerebro. Se utiliza en neurología, psiquiatría, neurorehabilitación e investigación.",
    reply_en: "<b>Transcranial Magnetic Stimulation (TMS)</b> is a non-invasive technique that uses magnetic fields to stimulate specific brain areas. It is used in neurology, psychiatry, neurorehabilitation and research.",
    quick_es: ["Solicitar asesoría", "Ver productos", "Contactar"],
    quick_en: ["Request advice", "View products", "Contact"],
  },
  {
    keywords: ["tdcs", "corriente directa", "corriente continua", "electrodos", "direct current"],
    reply_es: "La <b>Estimulación Transcraneal por Corriente Directa (tDCS)</b> es una técnica de estimulación cerebral de baja intensidad usada en neurorehabilitación, plasticidad cerebral, investigación y protocolos terapéuticos.",
    reply_en: "<b>Transcranial Direct Current Stimulation (tDCS)</b> is a low-intensity brain stimulation technique used in neurorehabilitation, brain plasticity, research and therapeutic protocols.",
    quick_es: ["Solicitar asesoría", "Ver tDCS", "Contactar"],
    quick_en: ["Request advice", "View tDCS", "Contact"],
  },
  {
    keywords: ["tec", "ect", "electroconvulsiva", "terapia convulsiva", "electrochoque", "electroconvulsive"],
    reply_es: "La <b>Terapia Electroconvulsiva (TEC/ECT)</b> es un procedimiento médico utilizado en entornos hospitalarios bajo estricto criterio clínico, principalmente en psiquiatría especializada y salud mental.",
    reply_en: "<b>Electroconvulsive Therapy (ECT)</b> is a medical procedure used in hospital settings under strict clinical criteria, mainly in specialized psychiatry and mental health.",
    quick_es: ["Solicitar asesoría", "Ver TEC/ECT", "Contactar"],
    quick_en: ["Request advice", "View ECT", "Contact"],
  },
  {
    keywords: ["neurofisiolog", "eeg", "potenciales", "electroencefalograma", "monitoreo neurofisiológico", "monitoreo", "neurophysiology", "monitoring"],
    reply_es: "Ofrecemos soluciones de <b>Neurofisiología Clínica</b> para diagnóstico (EEG, potenciales evocados), monitoreo intraoperatorio, cuidados intensivos neurológicos y polisomnografía.",
    reply_en: "We offer <b>Clinical Neurophysiology</b> solutions for diagnosis (EEG, evoked potentials), intraoperative monitoring, neurological intensive care and polysomnography.",
    quick_es: ["Ver neurofisiología", "Solicitar asesoría", "Contactar"],
    quick_en: ["View neurophysiology", "Request advice", "Contact"],
  },
  {
    keywords: ["neurorehabilitación", "neurorehabilitacion", "rehabilitación", "rehabilitacion", "recuperación", "plasticidad", "post-ictus", "ictus", "derrame", "neurorehabilitation", "rehabilitation", "recovery", "stroke"],
    reply_es: "Nuestras soluciones de <b>Neurorehabilitación</b> están orientadas a recuperación funcional post-ictus, rehabilitación cognitiva y motora, plasticidad cerebral y estimulación terapéutica.",
    reply_en: "Our <b>Neurorehabilitation</b> solutions are oriented towards post-stroke functional recovery, cognitive and motor rehabilitation, brain plasticity and therapeutic stimulation.",
    quick_es: ["Ver neurorehabilitación", "Solicitar asesoría", "Contactar"],
    quick_en: ["View neurorehabilitation", "Request advice", "Contact"],
  },
  {
    keywords: ["neuromodulación", "neuromodulacion", "estimulación cerebral", "estimulacion cerebral", "no invasiva", "neuromodulation", "brain stimulation", "non-invasive"],
    reply_es: "La <b>Neuromodulación</b> incluye EMT/TMS, tDCS y TEC/ECT. Tecnologías para modular la actividad del sistema nervioso en contextos clínicos y de investigación.",
    reply_en: "<b>Neuromodulation</b> includes TMS, tDCS and ECT. Technologies to modulate nervous system activity in clinical and research settings.",
    quick_es: ["Ver neuromodulación", "Solicitar asesoría", "Ver productos"],
    quick_en: ["View neuromodulation", "Request advice", "View products"],
  },
  {
    keywords: ["precio", "costó", "costo", "valor", "cuánto", "cuanto", "presupuesto", "contactar", "cotización", "cotizacion", "price", "cost", "quote", "budget"],
    reply_es: "Los precios varían según el modelo y configuración. Te recomendamos solicitar una <b>asesoría personalizada</b> para recibir una cotización ajustada a tu centro.",
    reply_en: "Prices vary by model and configuration. We recommend requesting <b>personalized advice</b> to receive a quote tailored to your facility.",
    quick_es: ["Solicitar asesoría", "Contactar por WhatsApp"],
    quick_en: ["Request advice", "Contact via WhatsApp"],
  },
  {
    keywords: ["clínica", "clinica", "neurológica", "neurologica", "hospital", "centro de salud", "institución", "salud mental", "psiquiatra", "clinic", "hospital", "health", "institution", "psychiatrist"],
    reply_es: "Trabajamos con clínicas neurológicas, hospitales, centros de neurorehabilitación, psiquiatras, universidades, investigadores y distribuidores médicos. ¿Cuál es tu perfil?",
    reply_en: "We work with neurological clinics, hospitals, neurorehabilitation centers, psychiatrists, universities, researchers and medical distributors. What is your profile?",
    quick_es: ["Soy clínica/hospital", "Soy investigador", "Soy distribuidor", "Contactar"],
    quick_en: ["I'm a clinic/hospital", "I'm a researcher", "I'm a distributor", "Contact"],
  },
  {
    keywords: ["investigación", "investigacion", "universidad", "laboratorio", "neurociencia", "estudio", "científico", "cientifico", "research", "university", "lab", "neuroscience", "study"],
    reply_es: "Ofrecemos equipos para investigación en neurociencia: estimulación cerebral (TMS, tDCS), monitoreo neurofisiológico y equipos para laboratorios.",
    reply_en: "We offer equipment for neuroscience research: brain stimulation (TMS, tDCS), neurophysiological monitoring and laboratory equipment.",
    quick_es: ["Ver investigación", "Solicitar asesoría", "Contactar"],
    quick_en: ["View research", "Request advice", "Contact"],
  },
  {
    keywords: ["distribuidor", "representante", "revender", "partner", "colaboración", "colaboracion", "comercial", "distribución", "distribucion", "distributor", "partner", "reseller", "commercial"],
    reply_es: "Trabajamos con distribuidores médicos en USA y Latinoamérica. Escríbenos para conversar sobre colaboración comercial.",
    reply_en: "We work with medical distributors in the USA and Latin America. Write to us to discuss commercial collaboration.",
    quick_es: ["Contactar por WhatsApp", "Enviar correo"],
    quick_en: ["Contact via WhatsApp", "Send email"],
  },
  {
    keywords: ["congreso", "evento", "feria", "conferencia", "simposio", "congress", "event", "conference", "symposium"],
    reply_es: "Participamos en congresos y eventos científicos. Revisa nuestra agenda en la sección Congresos o contáctanos si deseas invitarnos.",
    reply_en: "We participate in scientific congresses and events. Check our agenda in the Congress section or contact us if you wish to invite us.",
    quick_es: ["Ver congresos", "Contactar"],
    quick_en: ["View congresses", "Contact"],
  },
  {
    keywords: ["garantía", "garantia", "soporte", "técnico", "tecnico", "mantenimiento", "instalación", "instalacion", "capacitación", "capacitacion", "warranty", "support", "technical", "maintenance", "installation", "training"],
    reply_es: "Ofrecemos soporte profesional: orientación en selección, implementación y acompañamiento técnico continuo.",
    reply_en: "We offer professional support: guidance in selection, implementation and ongoing technical assistance.",
    quick_es: ["Solicitar asesoría", "Contactar"],
    quick_en: ["Request advice", "Contact"],
  },
  {
    keywords: ["neurología", "neurologia", "psiquiatría", "psiquiatria", "neurocirugía", "neurocirugia", "neurointensivismo", "dolor", "parkinson", "depresión", "depresion", "ansiedad", "epilepsia", "alzheimer", "tdah", "autismo", "bipolar", "esquizofrenia", "toc", "neurology", "psychiatry", "neurosurgery", "pain", "depression", "anxiety", "epilepsy", "alzheimer", "adhd", "autism"],
    reply_es: "Nuestros equipos tienen aplicación en neurología y psiquiatría. Cada tecnología debe evaluarse según indicación autorizada y criterio médico. Te recomendamos una asesoría personalizada.",
    reply_en: "Our equipment is used in neurology and psychiatry. Each technology must be evaluated according to authorized indications and medical criteria. We recommend personalized advice.",
    quick_es: ["Solicitar asesoría", "Contactar"],
    quick_en: ["Request advice", "Contact"],
  },
  {
    keywords: ["contacto", "contactar", "hablar", "whatsapp", "whats", "teléfono", "telefono", "correo", "email", "mail", "asesor", "asesoria", "ayuda", "contact", "speak", "phone", "help"],
    reply_es: "<b>Email:</b> info@neurotecnologias.com<br><b>WhatsApp:</b> +1 305 320 4838<br><br>Te responderemos a la brevedad.",
    reply_en: "<b>Email:</b> info@neurotecnologias.com<br><b>WhatsApp:</b> +1 305 320 4838<br><br>We will get back to you shortly.",
    quick_es: [],
    quick_en: [],
  },
  {
    keywords: ["gracias", "thank", "thanks", "vale", "ok", "okay", "perfecto", "excelente", "genial", "bueno", "thanks", "thank you", "great", "good"],
    reply_es: "¡Gracias a ti! Si tienes más preguntas, aquí estaremos. Puedes explorar nuestro sitio o escribirnos directamente.",
    reply_en: "Thank you! If you have more questions, we'll be here. You can explore our site or write to us directly.",
    quick_es: ["Ver productos", "Contactar por WhatsApp"],
    quick_en: ["View products", "Contact via WhatsApp"],
  },
];

const defaultReply = {
  reply_es: "Gracias por tu consulta. Para darte una respuesta más precisa, te recomendamos contactarnos directamente.<br><br>¿Prefieres que te contactemos?",
  reply_en: "Thank you for your inquiry. For a more accurate answer, we recommend contacting us directly.<br><br>Would you prefer us to contact you?",
  quick_es: ["Contactar por WhatsApp", "Enviar correo", "Solicitar asesoría"],
  quick_en: ["Contact via WhatsApp", "Send email", "Request advice"],
};

function getReply(text: string, locale: "es" | "en"): { reply: string; quick: string[] } {
  const t = text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  for (const item of knowledge) {
    for (const kw of item.keywords) {
      if (t.includes(kw)) {
        return {
          reply: locale === "en" ? item.reply_en : item.reply_es,
          quick: locale === "en" ? item.quick_en : item.quick_es,
        };
      }
    }
  }
  return {
    reply: locale === "en" ? defaultReply.reply_en : defaultReply.reply_es,
    quick: locale === "en" ? defaultReply.quick_en : defaultReply.quick_es,
  };
}

export default function Chatbot() {
  const locale = useLanguage();
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [quick, setQuick] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const greetingShown = useRef(false);
  const endRef = useRef<HTMLDivElement>(null);

  const t = useCallback(
    (es: string, en: string) => (locale === "en" ? en : es),
    [locale],
  );

  const botReply = useCallback((msg: string, quickBtns?: string[]) => {
    setMsgs((prev) => [...prev, { type: "bot", text: msg }]);
    if (quickBtns) setQuick(quickBtns);
  }, []);

  const userMsg = useCallback((msg: string) => {
    setMsgs((prev) => [...prev, { type: "user", text: msg }]);
    setQuick([]);
  }, []);

  const handleQuick = useCallback(
    (text: string) => {
      userMsg(text);
      const r = getReply(text, locale);
      setTimeout(() => botReply(r.reply, r.quick), 400);
    },
    [userMsg, botReply, locale],
  );

  const sendMsg = useCallback(() => {
    const text = input.trim();
    if (!text) return;
    setInput("");
    userMsg(text);
    const r = getReply(text, locale);
    setTimeout(() => botReply(r.reply, r.quick), 500);
  }, [input, userMsg, botReply, locale]);

  const toggleChat = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    if (open && !greetingShown.current) {
      greetingShown.current = true;
      const timer = setTimeout(() => {
        botReply(
          locale === "en"
            ? "Hello! I'm NeurIA, the virtual assistant of Neurotecnologías. Would you like to speak with an expert from our team?"
            : "¡Hola! Soy NeurIA, el asistente virtual de Neurotecnologías. Estoy aquí para resolver tus dudas, orientarte sobre nuestros servicios y, si lo necesitas, ponerte en contacto con un experto.",
          locale === "en" ? ["Yes", "No"] : ["Sí", "No"],
        );
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [open, locale, botReply]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, quick]);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[9998]">
        <button
          onClick={toggleChat}
          className="chat-fab"
          aria-label={t("Abrir chat NeurIA", "Open NeurIA chat")}
        >
          <div className="chat-fab-wrap">
            <div className="brain-3d">
              <svg className="brain-svg" viewBox="0 0 332.11 297.8" width={44} height={44}>
                <path className="brain-green" d="M88.77,196.59c-4.95,0-9.16,3.21-10.68,7.66H45.53c-21.1,0-38.26-17.16-38.26-38.26s17.16-38.26,38.26-38.26h9.05c2.01,0,3.63-1.63,3.63-3.63s-1.63-3.63-3.63-3.63h-9.05C20.42,120.46,0,140.88,0,165.98s20.42,45.53,45.53,45.53h32.56c1.52,4.45,5.73,7.66,10.68,7.66,6.23,0,11.29-5.06,11.29-11.29s-5.06-11.29-11.29-11.29Zm0,16.77c-3.02,0-5.48-2.46-5.48-5.48s2.46-5.48,5.48-5.48,5.48,2.46,5.48,5.48-2.46,5.48-5.48,5.48Z"/>
                <path className="brain-green" d="M135.92,165.82s-.04-.04-.07-.06l-44.08-36.58c.48-1.25,.75-2.6,.75-4.02,0-6.23-5.06-11.29-11.29-11.29s-11.29,5.06-11.29,11.29,5.06,11.29,11.29,11.29c2.16,0,4.18-.62,5.9-1.68l44.04,36.54c.92,.82,23.51,21.23,23.51,45.37v33.34c0,22.33-18.17,40.51-40.51,40.51s-40.5-18.17-40.5-40.51v-1.34c4.45-1.52,7.66-5.73,7.66-10.68,0-6.23-5.06-11.29-11.29-11.29s-11.29,5.06-11.29,11.29c0,4.95,3.21,9.16,7.66,10.68v1.34c0,26.34,21.43,47.77,47.77,47.77s47.77-21.43,47.77-47.77v-33.34c0-27.86-24.96-49.94-26.02-50.87Zm-60.17-40.66c0-3.02,2.46-5.48,5.48-5.48s5.48,2.46,5.48,5.48-2.46,5.48-5.48,5.48-5.48-2.46-5.48-5.48Zm-11.2,112.85c0-3.02,2.46-5.48,5.48-5.48s5.48,2.46,5.48,5.48-2.46,5.48-5.48,5.48-5.48-2.46-5.48-5.48Z"/>
                <path className="brain-blue" d="M151.16,163.47c-.83,0-1.67-.29-2.36-.87-.32-.27-7.81-6.78-7.81-15.27,0-9.89,9.37-18.53,13.23-21.67V34.84c0-15.2-12.37-27.57-27.57-27.57s-27.57,12.37-27.57,27.57c0,9.84-8.01,17.84-17.84,17.84-2.01,0-3.63-1.63-3.63-3.63s1.63-3.63,3.63-3.63c5.83,0,10.58-4.75,10.58-10.58C91.81,15.63,107.44,0,126.65,0s34.84,15.63,34.84,34.84V127.44c0,1.16-.55,2.25-1.49,2.93-3.26,2.4-11.74,10.12-11.74,16.96,0,5.1,5.21,9.7,5.27,9.75,1.52,1.3,1.7,3.6,.4,5.12-.72,.84-1.74,1.27-2.76,1.27Z"/>
                <path className="brain-blue" d="M141.29,115.98c-.45-.21-11.01-5.22-11.01-18.29V46.93c5.2-1.56,9-6.39,9-12.09,0-6.97-5.67-12.63-12.63-12.63s-12.63,5.67-12.63,12.63c0,5.7,3.8,10.53,9,12.09v50.75c0,17.88,14.66,24.64,15.29,24.92,.48,.21,.98,.32,1.48,.32,1.38,0,2.7-.8,3.3-2.14,.83-1.82,.02-3.97-1.8-4.8Zm-21.46-81.14c0-3.76,3.06-6.82,6.82-6.82s6.82,3.06,6.82,6.82-3.06,6.82-6.82,6.82-6.82-3.06-6.82-6.82Z"/>
                <path className="brain-blue" d="M135.5,225.96c1.89-.18,3.27-1.87,3.27-3.77v-12.79c0-23.37-19.01-42.38-42.4-42.38l-7.98,.03c-18.9,0-35.35-12.88-40.24-30.7-.45-1.64-1.94-2.77-3.64-2.7-.03,0-.06,0-.1,0-2.27,.11-3.9,2.29-3.3,4.48,5.7,20.99,25.05,36.17,47.29,36.17l7.98-.03c19.37,0,35.12,15.75,35.12,35.12v12.95c0,2.12,1.82,3.82,3.99,3.61Z"/>
                <path className="brain-blue" d="M33.15,110.77c0-15.56,9.13-29.82,23.26-36.34,1.76-.81,2.66-2.93,1.92-4.72-1.32-3.2-1.99-6.61-1.99-10.12,0-14.57,11.81-26.43,26.36-26.51,1.88-.01,3.57-1.36,3.77-3.24,.23-2.18-1.48-4.03-3.61-4.03-18.63,0-33.78,15.15-33.78,33.78,0,3.32,.47,6.57,1.41,9.7-15.04,8.24-24.6,24.18-24.6,41.48,0,.97,.03,1.94,.09,2.9,.15,2.32,2.4,3.88,4.62,3.2,.02,0,.05-.01,.07-.02,1.58-.48,2.66-1.95,2.56-3.59-.05-.83-.08-1.66-.08-2.49Z"/>
                <path className="brain-blue" d="M48.79,112.2c5.06-15.29,18.68-26.4,34.7-28.3,1.6,4.68,6.19,7.99,11.48,7.61,5.63-.39,10.19-5.06,10.47-10.7,.32-6.48-4.86-11.86-11.28-11.86-4.95,0-9.15,3.2-10.67,7.64-19.19,1.94-35.58,15.11-41.61,33.36-.78,2.36,.99,4.79,3.48,4.74,.03,0,.07,0,.1,0,1.53-.04,2.85-1.04,3.33-2.49Zm45.37-37.43c3.02,0,5.48,2.46,5.48,5.48s-2.46,5.48-5.48,5.48-5.48-2.46-5.48-5.48,2.46-5.48,5.48-5.48Z"/>
                <path className="brain-green" d="M31.33,232.67c0-2.04-1.71-3.62-3.75-3.63-10.39-.06-18.83-8.55-18.83-18.97,0-1.75,.24-3.47,.7-5.12,.34-1.2-.01-2.49-.88-3.39l-.05-.06c-1.94-2.01-5.32-1.15-6.07,1.54-.63,2.27-.96,4.63-.96,7.03,0,13.27,9.91,24.28,22.71,26,1.55,20.64,17.13,37.41,37.2,40.81,2.84,.48,5.01-2.44,3.83-5.06-.01-.03-.02-.05-.03-.08-.48-1.08-1.49-1.84-2.66-2.04-17.69-3.04-31.2-18.48-31.2-37.03Z"/>
                <path className="brain-green" d="M119.77,255c2.25,1.77,5.17,2.71,8.32,2.34,5.23-.62,9.41-4.92,9.88-10.17,.61-6.79-4.82-12.49-11.52-12.33-4.34,.1-8.17,2.86-10,6.79-1.21,2.62-1.22,5.07-.65,7.29-8.1,5.08-18.84,11.35-28.53,15.77-2.04,.93-2.73,3.5-1.43,5.33,.01,.02,.03,.04,.04,.06,1,1.4,2.85,1.9,4.41,1.19,10.69-4.84,21.91-11.51,29.47-16.27Zm6.96-14.35c3.02,0,5.48,2.46,5.48,5.48s-2.46,5.48-5.48,5.48-5.48-2.46-5.48-5.48,2.46-5.48,5.48-5.48Z"/>
                <path className="brain-green" d="M232.06,207.88c0,6.23,5.06,11.29,11.29,11.29,4.95,0,9.16-3.21,10.68-7.66h32.56c25.1,0,45.53-20.42,45.53-45.53,0-25.1-20.42-45.53-45.53-45.53h-9.05c-2.01,0-3.63,1.63-3.63,3.63s1.63,3.63,3.63,3.63h9.05c21.1,0,38.26,17.16,38.26,38.26,0,21.1-17.16,38.26-38.26,38.26h-32.56c-1.52-4.45-5.73-7.66-10.68-7.66-6.23,0-11.29,5.06-11.29,11.29Zm5.81,0c0-3.02,2.46-5.48,5.48-5.48,3.02,0,5.48,2.46,5.48,5.48s-2.46,5.48-5.48,5.48-5.48-2.46-5.48-5.48Z"/>
                <path className="brain-green" d="M170.17,216.69v33.34c0,26.34,21.43,47.77,47.77,47.77s47.77-21.43,47.77-47.77v-1.34c4.45-1.52,7.66-5.73,7.66-10.68,0-6.23-5.06-11.29-11.29-11.29-6.23,0-11.29,5.06-11.29,11.29,0,4.95,3.21,9.16,7.66,10.68v1.34c0,22.33-18.17,40.51-40.5,40.51-22.33,0-40.51-18.17-40.51-40.51v-33.34c0-24.14,22.58-44.55,23.51-45.37l44.04-36.54c1.72,1.06,3.73,1.68,5.9,1.68,6.23,0,11.29-5.06,11.29-11.29,0-6.23-5.06-11.29-11.29-11.29-6.23,0-11.29,5.06-11.29,11.29,0,1.42,.27,2.77,.75,4.02l-44.08,36.58s-.05,.04-.07,.06c-1.06,.93-26.02,23.01-26.02,50.87Zm80.71-86.05c-3.02,0-5.48-2.46-5.48-5.48,0-3.02,2.46-5.48,5.48-5.48s5.48,2.46,5.48,5.48c0,3.02-2.46,5.48-5.48,5.48Zm11.2,112.85c-3.02,0-5.48-2.46-5.48-5.48,0-3.02,2.46-5.48,5.48-5.48s5.48,2.46,5.48,5.48-2.46,5.48-5.48,5.48Z"/>
                <path className="brain-blue" d="M180.96,163.47c.83,0,1.67-.29,2.36-.87,.32-.27,7.81-6.78,7.81-15.27,0-9.89-9.37-18.53-13.23-21.67V34.84c0-15.2,12.37-27.57,27.57-27.57,15.2,0,27.57,12.37,27.57,27.57,0,9.84,8.01,17.84,17.84,17.84,2.01,0,3.63-1.63,3.63-3.63s-1.63-3.63-3.63-3.63c-5.83,0-10.58-4.75-10.58-10.58,0-19.21-15.63-34.84-34.84-34.84-19.21,0-34.84,15.63-34.84,34.84V127.44c0,1.16,.55,2.25,1.49,2.93,3.26,2.4,11.74,10.12,11.74,16.96,0,5.1-5.21,9.7-5.27,9.75-1.52,1.3-1.7,3.6-.4,5.12,.72,.84,1.74,1.27,2.76,1.27Z"/>
                <path className="brain-blue" d="M189.03,120.79c.61,1.34,1.92,2.14,3.3,2.14,.49,0,1-.1,1.48-.32,.62-.28,15.29-7.04,15.29-24.92V46.93c5.2-1.56,9-6.39,9-12.09,0-6.97-5.67-12.63-12.63-12.63s-12.63,5.67-12.63,12.63c0,5.7,3.8,10.53,9,12.09v50.75c0,13.07-10.56,18.09-11.01,18.29-1.81,.84-2.62,2.99-1.8,4.8Zm16.44-79.13c-3.76,0-6.82-3.06-6.82-6.82s3.06-6.82,6.82-6.82c3.76,0,6.82,3.06,6.82,6.82s-3.06,6.82-6.82,6.82Z"/>
                <path className="brain-blue" d="M196.61,225.96c-1.89-.18-3.27-1.87-3.27-3.77v-12.79c0-23.37,19.01-42.38,42.4-42.38l7.98,.03c18.9,0,35.35-12.88,40.24-30.7,.45-1.64,1.94-2.77,3.64-2.7,.03,0,.06,0,.1,0,2.27,.11,3.9,2.29,3.3,4.48-5.7,20.99-25.05,36.17-47.29,36.17l-7.98-.03c-19.37,0-35.12,15.75-35.12,35.12v12.95c0,2.12-1.82,3.82-3.99,3.61Z"/>
                <path className="brain-blue" d="M298.97,110.77c0-15.56-9.13-29.82-23.26-36.34-1.76-.81-2.66-2.93-1.92-4.72,1.32-3.2,1.99-6.61,1.99-10.12,0-14.57-11.81-26.43-26.36-26.51-1.88-.01-3.57-1.36-3.77-3.24-.23-2.18,1.48-4.03,3.61-4.03,18.63,0,33.78,15.15,33.78,33.78,0,3.32-.47,6.57-1.41,9.7,15.04,8.24,24.6,24.18,24.6,41.48,0,.97-.03,1.94-.09,2.9-.15,2.32-2.4,3.88-4.62,3.2-.02,0-.05-.01-.07-.02-1.58-.48-2.66-1.95-2.56-3.59,.05-.83,.08-1.66,.08-2.49Z"/>
                <path className="brain-blue" d="M286.65,114.7s.06,0,.1,0c2.49,.06,4.26-2.37,3.48-4.74-6.02-18.24-22.41-31.42-41.61-33.36-1.52-4.44-5.73-7.64-10.67-7.64-6.41,0-11.59,5.37-11.28,11.86,.28,5.64,4.84,10.3,10.47,10.7,5.29,.37,9.88-2.94,11.48-7.61,16.02,1.91,29.64,13.01,34.7,28.3,.48,1.45,1.8,2.46,3.33,2.49Zm-43.22-34.44c0,3.02-2.46,5.48-5.48,5.48s-5.48-2.46-5.48-5.48,2.46-5.48,5.48-5.48,5.48,2.46,5.48,5.48Z"/>
                <path className="brain-green" d="M300.78,232.67c0-2.04,1.71-3.62,3.75-3.63,10.39-.06,18.83-8.55,18.83-18.97,0-1.75-.24-3.47-.7-5.12-.34-1.2,.01-2.49,.88-3.39l.05-.06c1.94-2.01,5.32-1.15,6.07,1.54,.63,2.27,.96,4.63,.96,7.03,0,13.27-9.91,24.28-22.71,26-1.55,20.64-17.13,37.41-37.2,40.81-2.84,.48-5.01-2.44-3.83-5.06,.01-.03,.02-.05,.03-.08,.48-1.08,1.49-1.84,2.66-2.04,17.69-3.04,31.2-18.48,31.2-37.03Z"/>
                <path className="brain-green" d="M241.82,271.27c1.57,.71,3.42,.21,4.41-1.19,.01-.02,.03-.04,.04-.06,1.3-1.83,.61-4.4-1.43-5.33-9.69-4.42-20.43-10.68-28.53-15.77,.57-2.22,.56-4.67-.65-7.29-1.82-3.94-5.66-6.69-10-6.79-6.7-.16-12.13,5.54-11.52,12.33,.47,5.25,4.65,9.55,9.88,10.17,3.15,.37,6.07-.57,8.32-2.34,7.56,4.76,18.78,11.42,29.47,16.27Zm-30.95-25.14c0,3.02-2.46,5.48-5.48,5.48s-5.48-2.46-5.48-5.48,2.46-5.48,5.48-5.48,5.48,2.46,5.48,5.48Z"/>
              </svg>
            </div>
          </div>
        </button>
      </div>

      <div id="chat-panel" className={open ? "open" : ""}>
        <div id="chat-header">
          <div className="avatar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9.5 4C7 4 5 6 5 8.5c0 1.3.6 2.5 1.6 3.3-.4.6-.6 1.3-.6 2 0 1.6 1 3 2.5 3.5" />
              <path d="M14.5 4C17 4 19 6 19 8.5c0 1.3-.6 2.5-1.6 3.3.4.6.6 1.3.6 2 0 1.6-1 3-2.5 3.5" />
              <path d="M9 15c.8.6 1.9 1 3 1s2.2-.4 3-1" />
              <path d="M12 4v12" opacity="0.2" />
            </svg>
          </div>
          <div className="info">
            <h3>NeurIA</h3>
            <p>{t("Conversación en directo (Español)", "Live chat (English)")}</p>
          </div>
          <button id="chat-close" onClick={toggleChat}>
            ✕
          </button>
        </div>

        <div id="chat-messages">
          {msgs.map((m, i) => (
            <div key={i} className={`chat-msg ${m.type}`}>
              {m.type === "bot" ? (
                <span dangerouslySetInnerHTML={{ __html: m.text }} />
              ) : (
                <span>{m.text}</span>
              )}
              <span className="msg-time">
                {m.type === "bot" ? "NeurIA" : t("Tú", "You")}
              </span>
            </div>
          ))}
          <div ref={endRef} />
        </div>

        <div className="chat-quick" id="chat-quick">
          {quick.map((q, i) => (
            <button key={i} onClick={() => handleQuick(q)}>
              {q}
            </button>
          ))}
        </div>

        <div id="chat-input-wrap">
          <input
            id="chat-input"
            type="text"
            placeholder={t("Escribe tu pregunta...", "Type your question...")}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMsg();
            }}
          />
          <button id="chat-send" onClick={sendMsg}>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
