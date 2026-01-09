/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useMemo } from 'react';
import { useLanguage } from '@/contexts/language-context';

// Spanish translations
const spanishTranslations: any = {
  // Navigation
  nav: {
    home: 'Inicio',
    connectivity: 'Conectividad',
    specifications: 'Especificaciones',
    infrastructure: 'Infraestructura',
    opportunities: 'Oportunidades',
    applications: 'Aplicaciones',
  },
  // Header
  header: {
    callNow: 'Llamar Ahora',
  },
  // LocationInfo
  location: {
    facilityName: 'Ubicación 2',
    warehouseAddress: 'Dirección del Almacén',
    viewOnGoogleMaps: 'Ver en Google Maps',
  },
  // WarehouseBanner
  banner: {
    badge: 'Almacén Industrial en Renta',
    title: 'Centro Logístico Jilotepec',
    subtitle: 'Ubicación Privilegiada en la Intersección de Arco Norte y Carretera 57',
    description: 'Posicione su operación logística o de manufactura en uno de los centros industriales más estratégicos de México: CENTRO LOGÍSTICO JILOTEPEC, un parque industrial de clase mundial ubicado en el cruce exacto de Arco Norte y Carretera 57 (México–Querétaro).',
    scheduleTour: 'Agendar un visita',
    premierLocation: 'Ubicación Privilegiada',
    premierLocationDesc: 'Posición estratégica en la intersección logística clave de México',
    distributionHub: 'Centro de Distribución',
    distributionHubDesc: 'Conectividad nacional y regional sin igual',
    premiumInfrastructure: 'Infraestructura Premium',
    premiumInfrastructureDesc: 'Servicios de alta capacidad y sistemas robustos',
    advancedSecurity: 'Seguridad Avanzada',
    advancedSecurityDesc: 'Sistemas de seguridad y vigilancia de última generación',
    availableOptions: 'Opciones Disponibles',
    availableOptionsValue: 'Renta, Venta y Construcción a la Medida',
    facilityType: 'Tipo de Instalación',
    facilityTypeValue: 'Bodegas de Gran Escala',
  },
  // StrategicLocationSection
  strategicLocation: {
    badge: 'Beneficios de Ubicación Estratégica',
    title: 'Nodo Logístico Más Eficiente de México',
    description: 'CLJ está posicionado en uno de los nodos logísticos más eficientes del país, conectando instantáneamente con los corredores clave de México.',
    directHighwayAccess: 'Acceso Directo a Carreteras',
    highwayRoutes: [
      {
        title: 'Carretera 57D',
        description: 'Corredor México–Querétaro–San Luis Potosí',
      },
      {
        title: 'Arco Norte 40D',
        description: 'Enlace Bajío–Golfo–Centro–Puebla–Tlaxcala',
      },
      {
        title: 'Circuito Exterior',
        description: 'Sistema de carretera periférica Mexiquense',
      },
      {
        title: 'Acceso Rápido',
        description: 'Rutas a Ciudad de México, Bajío, Pacífico, Golfo y Norte',
      },
    ],
    stats: {
      consumers: 'Consumidores en la Zona Metropolitana',
      regions: 'Regiones Principales Conectadas',
      network: 'Red de Distribución Eficiente',
    },
    keyAdvantages: 'Ventajas Operativas Clave',
    advantages: [
      {
        title: 'Distribución Eficiente',
        description: 'Distribución altamente eficiente a puertos, fronteras y principales mercados de consumo',
      },
      {
        title: 'Tiempos de Tránsito Reducidos',
        description: 'Tiempos de entrega minimizados para rutas de distribución nacional y regional',
      },
      {
        title: 'Alcance de Mercado',
        description: 'Acceso inmediato a más de 23 millones de consumidores en el área metropolitana',
      },
      {
        title: 'Posicionamiento Estratégico',
        description: 'Posicionamiento perfecto para cadenas de suministro que conectan norte–centro–sur',
      },
      {
        title: 'Operaciones Versátiles',
        description: 'Ideal para 3PLs, distribución minorista, comercio electrónico y manufactura',
      },
      {
        title: 'Cobertura Multi-Regional',
        description: 'Conectividad directa con las regiones de Bajío, Golfo, Centro, Puebla y Tlaxcala',
      },
    ],
  },
  // SpecificationsSection
  specifications: {
    title: 'Especificaciones del Parque y Edificios',
    parkOverview: 'Resumen del Parque',
    totalParkLand: 'Superficie total del parque',
    phase1: 'Fase 1: 33 ha',
    existingBuildings: 'Edificios Existentes',
    buildingA: 'Edificio A',
    buildingB: 'Edificio B',
    leased: '100% ARRENDADO',
    immediateAvailability: 'DISPONIBILIDAD INMEDIATA',
    divisibleSpace: 'Espacio Divisible',
    landAvailable: 'Terreno Disponible',
    forSaleOrBTS: 'Para Venta o Proyectos BTS',
    classAFeatures: 'Características de Edificio Clase A',
    features: [
      'Muros de concreto',
      'Techumbre metálica aislada KR-18',
      '6% de iluminación natural mediante claraboyas de policarbonato',
      'Altura libre: 11.50 m (38 pies)',
      'Piso de concreto de 6" (15 cm)',
      'Andenes totalmente equipados (hasta 1 andén / aprox. 350 m²)',
      'Rampas de entrada (opciones BTS)',
      'Patios de camiones de 40 metros de profundidad',
      'Iluminación LED en todo el edificio',
      'Sistema de hidrantes y preparación para rociadores',
    ],
  },
  // WarehouseCTA
  cta: {
    title: 'Soluciones de Almacén Modernas',
    description: 'Optimice su logística, gestione su inventario de manera eficiente y escale sus operaciones con nuestra tecnología de almacén de vanguardia',
    buttonText: 'Comience Hoy',
  },
  // SecuritySystems
  security: {
    title: 'SISTEMAS DE SEGURIDAD AVANZADOS',
    description: 'Cada edificio dentro del parque incluye medidas de seguridad integrales diseñadas para máxima protección y eficiencia operativa',
    doublePerimeterTitle: 'Seguridad de Doble Perímetro',
    doublePerimeterDesc: 'Nuestro enfoque de seguridad multinivel combina cercado perimetral exterior con un perímetro interno controlado, creando un sistema de alta seguridad.',
    bottomCta: 'Esto garantiza un entorno operativo altamente controlado y seguro para usuarios industriales.',
    features: [
      {
        title: 'Cercado de seguridad exterior + perímetro controlado interno',
        description: 'Protección perimetral multicapa con sistemas de límites avanzados',
      },
      {
        title: 'Control de accesos 24/7 con personal de seguridad',
        description: 'Personal de seguridad profesional y monitoreo las 24 horas',
      },
      {
        title: 'Monitoreo y vigilancia centralizada en tiempo real',
          description: 'Sistemas de monitoreo de última generación con supervisión en tiempo real',
      },
      {
        title: 'Accesos segregados para tráileres, vehículos y personal',
        description: 'Puntos de entrada dedicados que garantizan un flujo de tráfico óptimo y seguridad',
      },
    ],
  },
  // InfrastructureSection
  infrastructure: {
    header: {
      title: 'Infraestructura de Agua y Energía de Alta Capacidad',
      description: 'Sistemas de servicios de nivel corporativo diseñados para operaciones industriales de alta demanda.',
    },
    items: [
      {
        title: 'Capacidad eléctrica',
        points: [
          'Subestación de 7 MVA con capacidad de ampliación',
          'Línea de media tensión de 23 kV',
          '140 kVA disponibles por hectárea',
          'Alumbrado público LED',
        ],
      },
      {
        title: 'Agua',
        points: [
          'Dos pozos de agua',
          'Acuífero con disponibilidad para usuarios de alta demanda',
          'Planta de tratamiento de aguas residuales tipo MBBR (90 m³/día)',
        ],
      },
      {
        title: 'Servicios adicionales',
        points: [
          'Canalizaciones para voz y datos',
          'Factibilidad para habilitar gas natural',
          'Edificio administrativo del parque y áreas de servicio',
        ],
      },
    ],
  },
  // BuildToSuitLand
  buildToSuit: {
    title: 'Tierra Disponible para Proyectos Build-to-Suit',
    description: 'Además de las naves existentes, CLJ ofrece soluciones integrales de tierra industrial:',
    availableNow: 'Disponible Ahora',
    features: [
      {
        title: 'Más de 30 hectáreas',
        description: 'Totalmente urbanizadas con infraestructura a pie de lote',
      },
      {
        title: 'Más de 23 hectáreas',
        description: 'Reserva adicional de terreno industrial',
      },
    ],
    projectCapabilities: 'Capacidades de proyecto',
    projectCapabilitiesDesc: 'Proyectos BTS desde 10,000 m² hasta más de 100,000 m², diseñados a la medida del usuario',
  },
  // IdealFor
  idealFor: {
    title: 'Ideal Para',
    operations: [
      {
        title: 'Centros de Distribución Nacionales y Regionales',
        description: 'Operaciones de gran escala que requieren una coordinación logística eficiente',
      },
      {
        title: 'Fulfillment para E-commerce y Retail',
        description: 'Procesamiento de pedidos y gestión de entregas de alta velocidad',
      },
      {
        title: 'Proveedores Logísticos 3PL',
        description: 'Servicios de almacenaje y transporte para múltiples clientes',
      },
      {
        title: 'Operaciones de Manufactura y Ensamble',
        description: 'Plantas productivas con necesidades complejas de cadena de suministro',
      },
      {
        title: 'Usuarios de Servicios de Alta Demanda',
        description: 'Operaciones que requieren suministro constante de energía y recursos',
      },
      {
        title: 'Operaciones Corporativas de Cadena de Suministro a Gran Escala',
        description: 'Gestión logística y de distribución a nivel empresarial',
      },
    ],
  },
  // WarehouseLeadForm
  form: {
    title: 'Formulario de Solicitud de Información',
    description: 'Comparta sus requerimientos y lo conectaremos con los espacios disponibles.',
    contactInfo: 'Información de contacto',
    contactInfoDesc: 'Déjenos saber cómo contactarlo',
    warehouseRequirements: 'Requerimientos de bodega',
    warehouseRequirementsDesc: 'Cuéntenos sobre sus necesidades de espacio',
    additionalInfo: 'Información adicional',
    additionalInfoDesc: '¿Algún requerimiento especial o pregunta?',
    fullName: 'Nombre completo',
    companyName: 'Nombre de la empresa',
    email: 'Correo electrónico',
    phone: 'Teléfono',
    warehouseSize: 'Superficie de bodega (pies² o m²)',
    preferredLocation: 'Ubicación preferida',
    locationPlaceholder: 'Ciudad, estado o región',
    monthlyBudget: 'Presupuesto mensual',
    leaseDuration: 'Duración del contrato',
    timeline: 'Fecha estimada de ocupación',
    additionalNotes: 'Notas o requerimientos especiales',
    requiredFields: 'Campos requeridos',
    submitInquiry: 'Enviar consulta',
    submitting: 'Enviando...',
    errorMessage: 'Algo salió mal al enviar. Por favor, intente nuevamente.',
    thankYou: '¡Gracias por su consulta!',
    thankYouMessage: 'Nuestro equipo se pondrá en contacto con usted en un plazo de 24 horas para discutir sus necesidades de almacén.',
  },
  // Footer
  footer: {
    description: 'Bodegas industriales Clase A premium en ubicaciones estratégicas en México. Su socio para la excelencia logística.',
    forMoreInfo: 'Para más información:',
    quickLinks: 'Enlaces Rápidos',
    disclaimer: 'Aviso Legal',
    disclaimerText: 'Este documento ha sido preparado por Newmark únicamente con fines informativos. Newmark no otorga garantías ni representaciones, expresas o implícitas, respecto a la información, incluyendo, sin limitarse a ello, su contenido, exactitud o confiabilidad. Cualquier parte interesada deberá realizar sus propias investigaciones. Newmark excluye expresamente cualquier responsabilidad por pérdidas o daños derivados del uso de esta información. La información está sujeta a cambios sin previo aviso.',
    copyright: '© 2025 NEWMARK. Todos los derechos reservados.',
    executiveDirector: 'Director Ejecutivo Gerente | Industrial',
    industrialBroker: 'Corredor Industrial',
    mexicoCity: 'Ciudad de México',
    newYorkHeadquarters: 'Oficina Central Nueva York',
  },
};

// English translations (default)
const englishTranslations: any = {
  // Navigation
  nav: {
    home: 'Home',
    connectivity: 'Connectivity',
    specifications: 'Specifications',
    infrastructure: 'Infrastructure',
    opportunities: 'Opportunities',
    applications: 'Applications',
  },
  // Header
  header: {
    callNow: 'Call Now',
  },
  // LocationInfo
  location: {
    facilityName: 'Location 2',
    warehouseAddress: 'Warehouse Address',
    viewOnGoogleMaps: 'View on Google Maps',
  },
  // WarehouseBanner
  banner: {
    badge: 'Industrial Warehouse for Lease',
    title: 'Jilotepec Logistics Center',
    subtitle: 'Premier Location at the Itersection Of Arco Norte & Highway 57 Intersection',
    description: 'Position your logistics or manufacturing operation in one of Mexico\'s most strategic industrial hubs: JILOTEPEC LOGISTICS CENTER , a world-class industrial park located at the exact crossroads of Arco Norte and Highway 57 (Mexico–Querétaro).',
    scheduleTour: 'Schedule a Tour',
    premierLocation: 'Premier Location',
    premierLocationDesc: 'Strategic position at Mexico\'s key logistics intersection',
    distributionHub: 'Distribution Hub',
    distributionHubDesc: 'Unmatched national and regional connectivity',
    premiumInfrastructure: 'Premium Infrastructure',
    premiumInfrastructureDesc: 'High-capacity utilities and robust systems',
    advancedSecurity: 'Advanced Security',
    advancedSecurityDesc: 'State-of-the-art security and surveillance systems',
    availableOptions: 'Available Options',
    availableOptionsValue: 'Lease, Sale & Build-to-Suit',
    facilityType: 'Facility Type',
    facilityTypeValue: 'Large-Scale Warehouses',
  },
  // StrategicLocationSection
  strategicLocation: {
    badge: 'Strategic Location Benefits',
    title: 'Mexico\'s Most Efficient Logistics Node',
    description: 'CLJ is positioned in one of the most efficient logistics nodes in the country, connecting instantly with Mexico\'s key corridors.',
    directHighwayAccess: 'Direct Highway Access',
    highwayRoutes: [
      {
        title: 'Highway 57D',
        description: 'Mexico–Querétaro–San Luis Potosí corridor',
      },
      {
        title: 'Arco Norte 40D',
        description: 'Bajío–Gulf–Central–Puebla–Tlaxcala link',
      },
      {
        title: 'Circuito Exterior',
        description: 'Mexiquense ring road system',
      },
      {
        title: 'Rapid Access',
        description: 'Mexico City, Bajío, Pacific, Gulf & Northern routes',
      },
    ],
    stats: {
      consumers: 'Consumers in Greater Mexico City',
      regions: 'Major Regions Connected',
      network: 'Efficient Distribution Network',
    },
    keyAdvantages: 'Key Operational Advantages',
    advantages: [
      {
        title: 'Efficient Distribution',
        description: 'Highly efficient distribution to ports, borders, and major consumption markets',
      },
      {
        title: 'Reduced Transit Times',
        description: 'Minimized delivery times for national and regional distribution routes',
      },
      {
        title: 'Market Reach',
        description: 'Immediate access to 23+ million consumers in the metro area',
      },
      {
        title: 'Strategic Positioning',
        description: 'Perfect positioning for supply chains connecting north–central–south',
      },
      {
        title: 'Versatile Operations',
        description: 'Ideal for 3PLs, retail distribution, e-commerce, and manufacturing',
      },
      {
        title: 'Multi-Region Coverage',
        description: 'Direct connectivity to Bajío, Gulf, Central, Puebla, and Tlaxcala regions',
      },
    ],
  },
  // SpecificationsSection
  specifications: {
    title: 'Park & Building Specifications',
    parkOverview: 'Park Overview',
    totalParkLand: 'Total Park Land',
    phase1: 'Phase 1: 33 ha',
    existingBuildings: 'Existing Buildings',
    buildingA: 'Building A',
    buildingB: 'Building B',
    leased: '100% LEASED',
    immediateAvailability: 'IMMEDIATE AVAILABILITY',
    divisibleSpace: 'Divisible Space',
    landAvailable: 'Land Available',
    forSaleOrBTS: 'For Sale or BTS Projects',
    classAFeatures: 'Class-A Building Features',
    features: [
      'Concrete walls',
      'KR-18 insulated metal roof',
      '6% natural lighting via polycarbonate skylights',
      'Clear height: 11.50 m (38 ft)',
      '6" (15 cm) concrete floor',
      'Fully equipped dock doors (up to 1 dock / 350 SQM approx.)',
      'Drive-in ramps (BTS options)',
      '40-meter deep truck courts',
      'LED lighting throughout',
      'Hydrants and sprinkler-ready system',
    ],
  },
  // WarehouseCTA
  cta: {
    title: 'Modern Warehouse Solutions',
    description: 'Streamline your logistics, optimize inventory management, and scale your operations with our cutting-edge warehouse technology',
    buttonText: 'Get Started Today',
  },
  // SecuritySystems
  security: {
    title: 'ADVANCED SECURITY SYSTEMS',
    description: 'Each building within the park includes comprehensive security measures designed for maximum protection and operational efficiency',
    doublePerimeterTitle: 'Double Perimeter Security',
    doublePerimeterDesc: 'Our multi-layered security approach combines outer fencing with an internal controlled perimeter, creating a fortress-level protection system for your operations.',
    bottomCta: 'This ensures a highly controlled and secure operational environment for industrial users.',
    features: [
      {
        title: 'Outer security fencing + internal controlled perimeter',
        description: 'Multi-layer perimeter protection with advanced boundary systems',
      },
      {
        title: '24/7 manned access control',
        description: 'Round-the-clock professional security personnel and monitoring',
      },
      {
        title: 'Centralized monitoring and surveillance',
        description: 'State-of-the-art monitoring systems with real-time oversight',
      },
      {
        title: 'Segregated access for trucks, vehicles, and personnel',
        description: 'Dedicated entry points ensuring optimal traffic flow and safety',
      },
    ],
  },
  // InfrastructureSection
  infrastructure: {
    header: {
      title: 'High-Capacity Water & Power Infrastructure',
      description: 'Enterprise-grade utility systems designed for high-demand industrial operations',
    },
    items: [
      {
        title: 'Electrical Capacity',
        points: [
          'Redundant 7 MVA substation',
          '23 KV medium-voltage line',
          '140 KVA per hectare available',
          'LED street lighting',
        ],
      },
      {
        title: 'Water',
        points: [
          'Two water wells',
          'Aquifer with availability for high-demand users',
          'MBBR wastewater treatment plant (90 m³/day)',
        ],
      },
      {
        title: 'Additional Services',
        points: [
          'Conduits for voice and data',
          'Natural gas available',
          'Park administration building and service areas',
          'Planned on-site fuel station',
        ],
      },
    ],
  },
  // BuildToSuitLand
  buildToSuit: {
    title: 'Land Available for Build-to-Suit Projects',
    description: 'In addition to existing buildings, CLJ offers comprehensive land solutions',
    availableNow: 'Available Now',
    features: [
      {
        title: '30+ hectares',
        description: 'Fully serviced with infrastructure at lot line',
      },
      {
        title: '23+ hectares',
        description: 'Hectares of additional industrial reserve land',
      },
    ],
    projectCapabilities: 'Project Capabilities',
    projectCapabilitiesDesc: 'Suitable for BTS projects ranging from 10,000 m² to over 100,000 m², tailored to the exact needs of the user.',
  },
  // IdealFor
  idealFor: {
    title: 'Ideal For',
    operations: [
      {
        title: 'National and Regional Distribution Centers',
        description: 'Large-scale operations requiring efficient logistics coordination',
      },
      {
        title: 'E-commerce and Retail Fulfillment',
        description: 'Fast-paced order processing and delivery management',
      },
      {
        title: '3PL Logistics Providers',
        description: 'Multi-client warehouse and transportation services',
      },
      {
        title: 'Manufacturing and Assembly Operations',
        description: 'Production facilities with complex supply chain needs',
      },
      {
        title: 'High-Demand Utility Users',
        description: 'Operations requiring consistent power and resources',
      },
      {
        title: 'Large Corporate Supply Chain Operations',
        description: 'Enterprise-level logistics and distribution management',
      },
    ],
  },
  // WarehouseLeadForm
  form: {
    title: 'Warehouse Inquiry Form',
    description: 'Share your requirements and we will match you with available warehouse spaces',
    contactInfo: 'Contact Information',
    contactInfoDesc: 'Let us know how to reach you',
    warehouseRequirements: 'Warehouse Requirements',
    warehouseRequirementsDesc: 'Tell us about your space needs',
    additionalInfo: 'Additional Information',
    additionalInfoDesc: 'Any special requirements or questions?',
    fullName: 'Full Name',
    companyName: 'Company Name',
    email: 'Email Address',
    phone: 'Phone Number',
    warehouseSize: 'Warehouse Size (sq ft)',
    preferredLocation: 'Preferred Location',
    locationPlaceholder: 'City, State or Region',
    monthlyBudget: 'Monthly Budget',
    leaseDuration: 'Lease Duration',
    timeline: 'Timeline to Move In',
    additionalNotes: 'Additional Notes',
    requiredFields: 'Required fields',
    submitInquiry: 'Submit Inquiry',
    submitting: 'Submitting...',
    errorMessage: 'Something went wrong while submitting. Please try again.',
    thankYou: 'Thank you for your inquiry!',
    thankYouMessage: 'Our team will contact you within 24 hours to discuss your warehouse needs.',
  },
  // Footer
  footer: {
    description: 'Premium Class A industrial warehouse facilities in strategic locations across Mexico. Your partner for logistics excellence.',
    forMoreInfo: 'For more information:',
    quickLinks: 'Quick Links',
    disclaimer: 'Disclaimer',
    disclaimerText: 'This document has been prepared by Newmark for general information only. Newmark makes no warranties nor representations of any kind, express or implied, with respect to the information, including, without limitation, warranties of content, accuracy and reliability. Any interested party should make their own inquiries into the accuracy of the information. Newmark unequivocally excludes all inferred or implied terms, conditions and warranties arising from this document and excludes all liability for loss and damage arising therefrom. The information is subject to change without prior notice.',
    copyright: '© 2025 NEWMARK. All rights reserved.',
    executiveDirector: 'Executive Managing Director | Industrial',
    industrialBroker: 'Industrial Broker',
    mexicoCity: 'Mexico City',
    newYorkHeadquarters: 'New York Headquarters',
  },
};

export function useTranslations() {
  const { language } = useLanguage();

  const translations = useMemo(() => {
    return language === 'es' ? spanishTranslations : englishTranslations;
  }, [language]);

  return translations;
}
