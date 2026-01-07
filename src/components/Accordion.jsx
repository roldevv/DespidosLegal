import React, { useState } from 'react'

const items = [
    {
        title: '¿Tengo derecho a reclamar?',
        content: 'Sí, tienes derecho a reclamar cuando tu empresa incumple obligaciones laborales (salarios, horarios, vacaciones, despido, acoso, etc.) y puedes demostrarlo con pruebas y dentro de los plazos legales establecidos, y también cuando el tipo de despido pueda ser calificado como improcedente o nulo según la ley aplicable.'
    },
    {
        title: '¿Cuánto tiempo tengo para reclamar?',
        content: 'Tienes 20 días hábiles desde el despido para presentar una demanda. Si ya pasaron más de 20 días, aún podemos ayudarte, pero el tiempo es limitado.'
    },
    {
        title: '¿Cuánto cuesta la consulta?',
        content: 'La primera consulta es completamente gratuita. Solo pagas si decidimos llevar tu caso y ganamos.'
    },
    {
        title: '¿Qué pasa si no sé qué tipo de despido es?',
        content: 'No te preocupes. Un profesional especializado revisará tu caso y te explicará las opciones disponibles.'
    },
    {
        title: '¿Puedo reclamar si ya pasaron más de 20 días?',
        content: 'Sí, aunque el plazo de 20 días es el ideal, aún puedes reclamar. Contacta con nosotros y evaluaremos tu caso.'
    }
]

export default function Accordion({ className }) {
    const [openIndex, setOpenIndex] = useState(0)

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className={`w-full ${className}`}>
            <div className="space-y-6">
                {items.map((item, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6">
                        <button
                            onClick={() => toggleItem(index)}
                            className="w-full flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg p-2 -ml-2"
                            aria-expanded={openIndex === index}
                            aria-controls={`accordion-content-${index}`}
                        >
                            <h3 className="text-xl font-semibold text-gray-900 pr-4">
                                {item.title}
                            </h3>
                            <div className="shrink-0">
                                <svg
                                    className={`w-6 h-6 text-gray-500 transition-transform duration-200 ${
                                        openIndex === index ? 'transform rotate-180' : ''
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </button>
                        <div
                            id={`accordion-content-${index}`}
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                openIndex === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                            }`}
                        >
                            <p className="text-gray-600">{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
