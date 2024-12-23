function Ratings() {
    const stats = [
      { title: "Projects", value: "40+"},
      { title: "Clients", value: "100+"},
      { title: "Referral Businesses", value: "53%" },
      { title: "Daily Transactional", value: "900k+" },
    ];
  return (
    <div className=" py-12 px-4 grid grid-cols-4 gap-8 text-center bg-gray-900">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center text-center border-r border-r-gray-700">
          <h3 className="text-4xl font-semibold  text-gray-100 mb-1">{stat.value}</h3>
          <p className="text-gray-400">{stat.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Ratings;
