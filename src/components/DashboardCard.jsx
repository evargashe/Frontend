const DashboardCard = ({ title, value }) => {
    return (
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-3xl font-bold text-blue-600">{value}</p>
      </div>
    )
  }
  
  export default DashboardCard
  
  