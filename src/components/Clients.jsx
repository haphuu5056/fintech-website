import Image from "next/image";

// Client logo imports
import safarilink from '../../public/images/safarilink.jpeg';
import euro from '../../public/images/euro.jpg';
import grennwich from '../../public/images/greenwich.png';
import imv from '../../public/images/imv.png';
import isra from '../../public/images/isra.png';
import sepi from '../../public/images/sepi.png';
import proxyimage from '../../public/images/proxy.png';
import taam from '../../public/images/taam.png';

// Client data with names and images
const clients = [
  { name: 'Safarilink', image: safarilink },
  { name: 'Euro', image: euro },
  { name: 'Greenwich', image: grennwich },
  { name: 'IMV', image: imv },
  { name: 'ISRA', image: isra },
  { name: 'SEPI', image: sepi },
  { name: 'Proxy', image: proxyimage },
  { name: 'Taam', image: taam },
];

const Clients = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-xl text-gray-400  text-center mb-4">
          trusted by leading companies
        </h2>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {clients.map((client, index) => (
            <div key={index}>
              <Image
                src={client.image}
                alt={`${client.name} logo`}
                width={100}
                height={50}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;

