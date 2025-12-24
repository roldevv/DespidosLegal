const PROVINCIAS = [
  'Barcelona',
  'Madrid',
  'Valencia',
  'Sevilla',
  'Bilbao',
  'Málaga',
  'Zaragoza',
  'Murcia',
  'Palma',
  'Las Palmas',
  'Otra'
]

function LeadForm({ 
  variant = 'default',
  step,
  formData,
  errors,
  handleChange,
  handleNext,
  handleBack,
  handleSubmit
}) {

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              ¿Te han despedido recientemente?
            </h3>
            <div className="space-y-3">
              <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-indigo-500 transition-colors">
                <input
                  type="radio"
                  name="despidoReciente"
                  value="menos20"
                  checked={formData.despidoReciente === 'menos20'}
                  onChange={(e) => handleChange('despidoReciente', e.target.value)}
                  className="w-5 h-5 text-indigo-600"
                />
                <span className="ml-3 text-gray-700">Sí, hace menos de 20 días</span>
              </label>
              <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-indigo-500 transition-colors">
                <input
                  type="radio"
                  name="despidoReciente"
                  value="mas20"
                  checked={formData.despidoReciente === 'mas20'}
                  onChange={(e) => handleChange('despidoReciente', e.target.value)}
                  className="w-5 h-5 text-indigo-600"
                />
                <span className="ml-3 text-gray-700">Sí, hace más de 20 días</span>
              </label>
              <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-indigo-500 transition-colors">
                <input
                  type="radio"
                  name="despidoReciente"
                  value="comunicado"
                  checked={formData.despidoReciente === 'comunicado'}
                  onChange={(e) => handleChange('despidoReciente', e.target.value)}
                  className="w-5 h-5 text-indigo-600"
                />
                <span className="ml-3 text-gray-700">Me han comunicado que me van a despedir</span>
              </label>
            </div>
            {errors.despidoReciente && (
              <p className="text-red-600 text-sm mt-2">{errors.despidoReciente}</p>
            )}
          </div>
        )

      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Tipo de despido
            </h3>
            <div className="space-y-3">
              <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-indigo-500 transition-colors">
                <input
                  type="radio"
                  name="tipoDespido"
                  value="disciplinario"
                  checked={formData.tipoDespido === 'disciplinario'}
                  onChange={(e) => handleChange('tipoDespido', e.target.value)}
                  className="w-5 h-5 text-indigo-600"
                />
                <span className="ml-3 text-gray-700">Disciplinario</span>
              </label>
              <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-indigo-500 transition-colors">
                <input
                  type="radio"
                  name="tipoDespido"
                  value="objetivo"
                  checked={formData.tipoDespido === 'objetivo'}
                  onChange={(e) => handleChange('tipoDespido', e.target.value)}
                  className="w-5 h-5 text-indigo-600"
                />
                <span className="ml-3 text-gray-700">Objetivo</span>
              </label>
              <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-indigo-500 transition-colors">
                <input
                  type="radio"
                  name="tipoDespido"
                  value="improcedente"
                  checked={formData.tipoDespido === 'improcedente'}
                  onChange={(e) => handleChange('tipoDespido', e.target.value)}
                  className="w-5 h-5 text-indigo-600"
                />
                <span className="ml-3 text-gray-700">Improcedente</span>
              </label>
              <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-indigo-500 transition-colors">
                <input
                  type="radio"
                  name="tipoDespido"
                  value="no-se"
                  checked={formData.tipoDespido === 'no-se'}
                  onChange={(e) => handleChange('tipoDespido', e.target.value)}
                  className="w-5 h-5 text-indigo-600"
                />
                <span className="ml-3 text-gray-700">No lo sé</span>
              </label>
            </div>
            {errors.tipoDespido && (
              <p className="text-red-600 text-sm mt-2">{errors.tipoDespido}</p>
            )}
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Provincia
              </label>
              <select
                value={formData.provincia}
                onChange={(e) => handleChange('provincia', e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none"
              >
                <option value="">Selecciona una provincia</option>
                {PROVINCIAS.map(prov => (
                  <option key={prov} value={prov}>{prov}</option>
                ))}
              </select>
              {errors.provincia && (
                <p className="text-red-600 text-sm mt-2">{errors.provincia}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Tipo de contrato
              </label>
              <div className="space-y-3">
                <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-indigo-500 transition-colors">
                  <input
                    type="radio"
                    name="tipoContrato"
                    value="indefinido"
                    checked={formData.tipoContrato === 'indefinido'}
                    onChange={(e) => handleChange('tipoContrato', e.target.value)}
                    className="w-5 h-5 text-indigo-600"
                  />
                  <span className="ml-3 text-gray-700">Indefinido</span>
                </label>
                <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-indigo-500 transition-colors">
                  <input
                    type="radio"
                    name="tipoContrato"
                    value="temporal"
                    checked={formData.tipoContrato === 'temporal'}
                    onChange={(e) => handleChange('tipoContrato', e.target.value)}
                    className="w-5 h-5 text-indigo-600"
                  />
                  <span className="ml-3 text-gray-700">Temporal</span>
                </label>
                <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-indigo-500 transition-colors">
                  <input
                    type="radio"
                    name="tipoContrato"
                    value="autonomo"
                    checked={formData.tipoContrato === 'autonomo'}
                    onChange={(e) => handleChange('tipoContrato', e.target.value)}
                    className="w-5 h-5 text-indigo-600"
                  />
                  <span className="ml-3 text-gray-700">Autónomo / falso autónomo</span>
                </label>
              </div>
              {errors.tipoContrato && (
                <p className="text-red-600 text-sm mt-2">{errors.tipoContrato}</p>
              )}
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Datos de contacto
            </h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.nombre}
                onChange={(e) => handleChange('nombre', e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none"
                placeholder="Tu nombre"
              />
              {errors.nombre && (
                <p className="text-red-600 text-sm mt-2">{errors.nombre}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Teléfono <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={formData.telefono}
                onChange={(e) => handleChange('telefono', e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none"
                placeholder="612 345 678"
                required
              />
              {errors.telefono && (
                <p className="text-red-600 text-sm mt-2">{errors.telefono}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none"
                placeholder="tu@email.com"
                required
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-2">{errors.email}</p>
              )}
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Un abogado laboralista revisará tu caso y se pondrá en contacto contigo.
            </p>
          </div>
        )

      default:
        return null
    }
  }

  const isCompact = variant === 'compact'

  const getProgressMessage = () => {
    switch (step) {
      case 1:
        return 'Empecemos'
      case 2:
        return 'Ya queda poco'
      case 3:
        return 'Casi terminamos'
      case 4:
        return 'Último paso'
      default:
        return ''
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`bg-white rounded-xl shadow-lg p-6 ${isCompact ? 'p-4' : 'p-8'}`}>
      {/* Progress indicator */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-indigo-600">
            {getProgressMessage()}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>
      </div>

      {renderStep()}

      {/* Navigation buttons */}
      <div className={`mt-8 flex gap-4 ${step === 4 ? 'flex-col sm:flex-row' : 'flex-row'}`}>
        {step > 1 && (
          <button
            type="button"
            onClick={handleBack}
            className={`px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors ${step === 4 ? 'w-full sm:flex-1' : 'flex-1'}`}
          >
            Atrás
          </button>
        )}
        {step < 4 ? (
          <button
            type="button"
            onClick={handleNext}
            className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Siguiente
          </button>
        ) : (
          <button
            type="submit"
            className={`px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors text-lg ${step === 4 ? 'w-full sm:flex-1' : 'flex-1'}`}
          >
            👉 Revisar mi caso gratis
          </button>
        )}
      </div>
    </form>
  )
}

export default LeadForm

