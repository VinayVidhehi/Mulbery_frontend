import { MenuOutlined } from "@ant-design/icons";
import { Button, Dropdown } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
const items = [
  {
    key: "1",
    label: (
      <Link href="/" className="ml-4 text-black border border-gray-300 hover:border-gray-800 hover:rounded-md px-2 p-1 transition-all duration-300 transition">
        Home
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link href="/#about" className="ml-4 text-black border border-gray-300 hover:border-gray-800 hover:rounded-md px-2 p-1 transition-all duration-300 transition">
        About
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link href="/#linkage" className="ml-4 text-black border border-gray-300 hover:border-gray-800 hover:rounded-md px-2 p-1 transition-all duration-300 transition">
        Linkage Mapping
      </Link>
    ),
  },
  {
    key: "4",
    label: (
      <Link href="contactUs" className="ml-4 text-black border border-gray-300 hover:border-gray-800 hover:rounded-md px-2 p-1 transition-all duration-300 transition">
        Contact
      </Link>
    ),
  },
  {
    key: "4",
    label: (
      <Link href="downloads" className="ml-4 text-black border border-gray-300 hover:border-gray-800 hover:rounded-md px-2 p-1 transition-all duration-300 transition">
        Downloads
      </Link>
    ),
  },
];

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {isMobile ? (
        <Dropdown
          menu={{
            items,
          }}
          arrow={{
            pointAtCenter: true,
          }}
          trigger={["click"]}
        >
          <MenuOutlined className="text-3xl" />
        </Dropdown>
      ) : (
        <div className="flex text-xl">
          {items.map((e) => (
            <p key={e.key}>{e.label}</p>
          ))}
        </div>
      )}
    </>
  );
};
export default App;
