const Stats: React.FC = () => {
    // Datos simulados
    const data = [
      { vendedor: 'Juan', ventas: 10 },
      { vendedor: 'María', ventas: 15 },
      { vendedor: 'Pedro', ventas: 8 },
    ];
  
    return (
      <ul className="space-y-2">
        {data.map((stat, index) => (
          <li key={index} className="text-lg">
            <span className="font-medium">{stat.vendedor}:</span> {stat.ventas} ventas
          </li>
        ))}
      </ul>
    );
  };
  
  export default Stats;
  