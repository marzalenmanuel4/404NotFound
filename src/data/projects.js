/**
 * Proyectos de la sección "Nuestros proyectos". La grilla se genera 100% desde este array.
 *
 * Campos:
 * - id: identificador único (sin espacios).
 * - name: nombre del proyecto (igual en todos los idiomas).
 * - category: 'landing' | 'corporate' | 'ecommerce' | 'webapp'.
 * - description: texto corto en los tres idiomas.
 * - stack: tecnologías usadas (se muestran como badges; [] las oculta).
 * - url: enlace público (opcional, '' para ocultar el botón).
 * - image: captura real (opcional). Pon el archivo en /public/projects/ y usa '/projects/archivo.webp'
 *   (recomendado 1280x800). Si es null, <ProjectImage> dibuja un placeholder pixel-art según la categoría.
 * - status: 'demo' | 'beta' | 'personal' (opcional). Muestra una etiqueta ("demo" / "en pruebas" / "proyecto personal").
 * - placeholder: true marca proyectos de ejemplo (muestran la etiqueta "ejemplo").
 *
 * TODO: completa `stack` de cada proyecto con las tecnologías reales.
 */
export const PROJECTS = [
    {
        id: 'crm-seguros',
        name: 'CRM Seguros',
        category: 'webapp',
        description: {
            'pt-BR':
                'CRM para agências de seguros de saúde nos EUA: cota com os dados oficiais do Marketplace, organiza a carteira por domicílios fiscais, antecipa renovações e fecha vendas pelo WhatsApp.',
            es: 'CRM para agencias de seguros de salud en EE. UU.: cotiza con los datos oficiales del Marketplace, organiza la cartera por hogares fiscales, anticipa renovaciones y cierra por WhatsApp.',
            en: 'CRM for US health insurance agencies: quotes with official Marketplace data, organizes clients by tax household, anticipates renewals and closes sales over WhatsApp.',
        },
        stack: [],
        url: 'https://mycrm.agency/',
        image: '/projects/crm-seguros.webp',
    },
    {
        id: 'ilha-areia',
        name: 'Ilha & Areia',
        category: 'landing',
        description: {
            'pt-BR':
                'Landing page de uma sorveteria artesanal fictícia na Lagoa da Conceição, em Florianópolis. Gelato batido em pequenos lotes com a receita da Nonna Teresa: feito devagar, saboreado sem pressa.',
            es: 'Landing page de una heladería artesanal ficticia en la Lagoa da Conceição, Florianópolis. Gelato batido en lotes chicos con la receta de la Nonna Teresa: hecho despacio, saboreado sin prisa.',
            en: "Landing page for a fictional artisan gelato shop in Lagoa da Conceição, Florianópolis. Small-batch gelato made with Nonna Teresa's recipe: made slowly, savored without rush.",
        },
        stack: [],
        url: 'https://ilha-areia.vercel.app/',
        image: '/projects/ilha-areia.webp',
        status: 'personal',
    },
    {
        id: 'the-matrix-lab-academy',
        name: 'The Matrix Lab Academy',
        category: 'corporate',
        description: {
            'pt-BR':
                'A academia de trading que te leva ao próximo nível: aprenda, opere e domine os mercados financeiros com estratégia e disciplina.',
            es: 'La academia de trading que te lleva al siguiente nivel: aprende, opera y domina los mercados financieros con estrategia y disciplina.',
            en: 'The trading academy that takes you to the next level: learn, trade and master the financial markets with strategy and discipline.',
        },
        stack: [],
        url: 'https://thematrixlab.academy/es',
        image: '/projects/the-matrix-lab-academy.webp',
        status: 'beta',
    },
    {
        id: 'pe-na-areia',
        name: 'Pé na Areia',
        category: 'landing',
        description: {
            'pt-BR':
                'Landing page de uma pizzaria fictícia à beira-mar, com forno a lenha, massa de fermentação natural e pedidos pelo WhatsApp.',
            es: 'Landing page de una pizzería de playa ficticia, con horno a leña, masa de fermentación natural y pedidos por WhatsApp.',
            en: 'Landing page for a fictional beachside pizzeria with a wood-fired oven, naturally leavened dough and WhatsApp ordering.',
        },
        stack: [],
        url: 'https://p-na-areia.vercel.app/',
        image: '/projects/pe-na-areia.webp',
        status: 'personal',
    },
    {
        id: 'taskflow',
        name: 'Taskflow',
        category: 'webapp',
        description: {
            'pt-BR': 'Um gerenciador de tarefas para te ajudar a organizar melhor o seu dia.',
            es: 'Un gestor de tareas para ayudarte a manejar mejor tus pendientes.',
            en: 'A task manager to help you stay on top of your to-dos.',
        },
        stack: [],
        url: 'https://todo-list-three-delta-92.vercel.app/',
        image: '/projects/taskflow.webp',
    },
]
