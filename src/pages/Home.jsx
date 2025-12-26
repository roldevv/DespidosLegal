import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LeadForm from '../components/LeadForm'
import { supabase } from '../lib/supabase'

function Home() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Paso 1
    despidoReciente: '',
    // Paso 2
    tipoDespido: '',
    // Paso 3
    provincia: '',
    tipoContrato: '',
    // Paso 4
    nombre: '',
    telefono: '',
    email: ''
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validateStep = (currentStep) => {
    const newErrors = {}

    if (currentStep === 1) {
      if (!formData.despidoReciente) {
        newErrors.despidoReciente = 'Por favor, selecciona una opción'
      } else if (formData.despidoReciente === 'no') {
        newErrors.despidoReciente = 'Lo sentimos, solo podemos ayudar en casos de despido'
      }
    }

    if (currentStep === 2) {
      if (!formData.tipoDespido) {
        newErrors.tipoDespido = 'Por favor, selecciona una opción'
      }
    }

    if (currentStep === 3) {
      if (!formData.provincia) {
        newErrors.provincia = 'Por favor, selecciona una provincia'
      }
      if (!formData.tipoContrato) {
        newErrors.tipoContrato = 'Por favor, selecciona un tipo de contrato'
      }
    }

    if (currentStep === 4) {
      if (!formData.nombre.trim()) {
        newErrors.nombre = 'El nombre es obligatorio'
      }
      if (!formData.telefono.trim()) {
        newErrors.telefono = 'El teléfono es obligatorio'
      } else if (!/^[0-9]{9,}$/.test(formData.telefono.replace(/\s/g, ''))) {
        newErrors.telefono = 'Introduce un teléfono válido'
      }
      if (!formData.email.trim()) {
        newErrors.email = 'El email es obligatorio'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Introduce un email válido'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(step)) {
      // Si es paso 1 y no hay despido, no avanzar
      if (step === 1 && formData.despidoReciente === 'no') {
        return
      }
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    setStep(step - 1)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validateStep(4)) {
      setIsLoading(true)
      try {
        // Aquí iría la lógica para enviar los datos al backend
        console.log('Form data:', formData)

        const { error } = await supabase
          .from('leads')
          .insert({
            name: formData.nombre,
            email: formData.email,
            phone: formData.telefono,
            province: formData.provincia,
            contract_type: formData.tipoContrato,
            dismissal_type: formData.tipoDespido,
            recent_dismissal: formData.despidoReciente,
          })

        if (error) {
          console.error(error)
          setIsLoading(false)
          return
        }

        // Redirigir a la página de agradecimiento
        navigate('/thank-you')
      } catch (error) {
        console.error('Error submitting form:', error)
        setIsLoading(false)
      }
    }
  }

  return (
    <div className="bg-white">
      {/* Above the fold */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                ¿Te han despedido?
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Revisión clara y sin compromiso de tu despido en Barcelona.
              Tu caso será evaluado por profesionales especializados.
              </p>
            </div>
            <div>
              <LeadForm 
                step={step}
                formData={formData}
                errors={errors}
                handleChange={handleChange}
                handleNext={handleNext}
                handleBack={handleBack}
                handleSubmit={handleSubmit}
                isLoading={isLoading}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            ¿Por qué confiar en nosotros?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Expertos en despidos
              </h3>
              <p className="text-gray-600">
                Especialistas en derecho laboral con años de experiencia defendiendo trabajadores
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Respuesta rápida
              </h3>
              <p className="text-gray-600">
                Te contactamos en menos de 24 horas para revisar tu caso sin compromiso
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Sin coste inicial
              </h3>
              <p className="text-gray-600">
                Consulta gratuita. Solo pagas si ganamos tu caso
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Cómo funciona
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Completa el formulario
              </h3>
              <p className="text-gray-600">
                Cuéntanos tu situación en menos de 2 minutos. Es rápido y sin compromiso.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Revisamos tu caso
              </h3>
              <p className="text-gray-600">
                Profesionales especializados analizan tu situación y te informan de los próximos pasos.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Defendemos tus derechos
              </h3>
              <p className="text-gray-600">
                Si tienes derecho a indemnización, te orientamos para reclamarla con ayuda profesional.
              </p>
            </div>
          </div>
        </div>
        <div className=" w-full text-center mt-10">
          <span className="text-gray-600 text-sm text-center italic">Tus datos se utilizarán para analizar tu caso y podrán compartirse con abogados colaboradores </span>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Preguntas frecuentes
          </h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                ¿Cuánto tiempo tengo para reclamar?
              </h3>
              <p className="text-gray-600">
                Tienes 20 días hábiles desde el despido para presentar una demanda. Si ya pasaron más de 20 días, aún podemos ayudarte, pero el tiempo es limitado.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                ¿Cuánto cuesta la consulta?
              </h3>
              <p className="text-gray-600">
                La primera consulta es completamente gratuita. Solo pagas si decidimos llevar tu caso y ganamos.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                ¿Qué pasa si no sé qué tipo de despido es?
              </h3>
              <p className="text-gray-600">
                No te preocupes. Un profesional especializado revisará tu caso y te explicará las opciones disponibles.
              </p>
            </div>
            <div className="pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                ¿Puedo reclamar si ya pasaron más de 20 días?
              </h3>
              <p className="text-gray-600">
                Sí, aunque el plazo de 20 días es el ideal, aún puedes reclamar. Contacta con nosotros y evaluaremos tu caso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prueba social */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Más de 500 casos resueltos
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Ayudamos a trabajadores de Barcelona a defender sus derechos laborales
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">98%</div>
              <div className="text-gray-700">Tasa de éxito</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">24h</div>
              <div className="text-gray-700">Tiempo de respuesta</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">500+</div>
              <div className="text-gray-700">Casos resueltos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario repetido */}
      <section id="form-section" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Listo para defender tus derechos?
            </h2>
            <p className="text-xl text-gray-700">
              Completa el formulario y un abogado te llamará sin compromiso
            </p>
          </div>
          <LeadForm 
            variant="compact"
            step={step}
            formData={formData}
            errors={errors}
            handleChange={handleChange}
            handleNext={handleNext}
            handleBack={handleBack}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
          />
        </div>
      </section>
    </div>
  )
}

export default Home
