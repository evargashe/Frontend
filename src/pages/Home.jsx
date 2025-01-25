import DashboardCard from "../components/DashboardCard"

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Panel de Control</h1>
      <h2 className="text-4xl font-bold mb-4">Bienvenido a la Clínica Médica</h2>
      <p className="text-xl">Gestión eficiente de consultas, pacientes, médicos, servicios y facturaciones.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard title="Pacientes" value="1,234" />
        <DashboardCard title="Médicos" value="56" />
        <DashboardCard title="Consultas Hoy" value="78" />
        <DashboardCard title="Ingresos del Mes" value="$123,456" />
        <DashboardCard title="Servicios Activos" value="25" />
        <DashboardCard title="Paquetes Vendidos" value="89" />
      </div>
    </div>
  )
}

export default Home

