/*import { useState, useEffect } from "react";

function Admin() {
  const [members, setMembers] = useState(() => {
    const savedMembers = localStorage.getItem("userMembers");
    return savedMembers ? JSON.parse(savedMembers) : [];
  });

  const [name, setName] = useState("");
  const [kg, setKg] = useState("");

  useEffect(() => {
    localStorage.setItem("userMembers", JSON.stringify(members)); // Use "userMembers" instead of "members"
  }, [members]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !kg) return;

    setMembers((prevMembers) => {
      const existingMember = prevMembers.find((member) => member.name === name);
      if (existingMember) {
        return prevMembers.map((member) =>
          member.name === name ? { ...member, kg: member.kg + Number(kg) } : member
        );
      }
      return [...prevMembers, { name, kg: Number(kg) }];
    });

    setName("");
    setKg("");
  };

  const handleClear = () => {
    if (window.confirm("Are you sure you want to clear all data?")) {
      setMembers([]);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-blue-500 mb-4">Admin - Membership Input</h1>
      <form onSubmit={handleSubmit} className="mb-4 space-y-2">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border rounded w-full"
        />
        <input
          type="number"
          placeholder="Plastic Collected (kg)"
          value={kg}
          onChange={(e) => setKg(e.target.value)}
          className="p-2 border rounded w-full"
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Add Member
        </button>
      </form>

      <button onClick={handleClear} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
        Clear Data
      </button>
    </div>
  );
}
export default Admin;
*/

/*import { useState, useEffect } from "react";

function Admin() {
  const [members, setMembers] = useState(() => {
    const savedMembers = localStorage.getItem("userMembers");
    return savedMembers ? JSON.parse(savedMembers) : [];
  });

  const [name, setName] = useState("");
  const [kg, setKg] = useState("");

  useEffect(() => {
    console.log("Current Members:", members);
    localStorage.setItem("userMembers", JSON.stringify(members)); // Ensure correct key
  }, [members]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !kg) return;

    setMembers((prevMembers) => {
      const existingMember = prevMembers.find((member) => member.name === name);
      if (existingMember) {
        return prevMembers.map((member) =>
          member.name === name ? { ...member, kg: member.kg + Number(kg) } : member
        );
      }
      return [...prevMembers, { name, kg: Number(kg) }];
    });

    setName("");
    setKg("");
  };

  const handleClear = () => {
    if (window.confirm("Are you sure you want to clear all data?")) {
      setMembers([]);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-blue-500 mb-4">Admin - Membership Input</h1>
      <form onSubmit={handleSubmit} className="mb-4 space-y-2">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border rounded w-full"
        />
        <input
          type="number"
          placeholder="Plastic Collected (kg)"
          value={kg}
          onChange={(e) => setKg(Number(e.target.value))}
          className="p-2 border rounded w-full"
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Add Member
        </button>
      </form>

      <button onClick={handleClear} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
        Clear Data
      </button>
    </div>
  );
}

export default Admin;*/



import { useState, useEffect } from "react";

function Admin() {
  const [members, setMembers] = useState(() => {
    const savedMembers = localStorage.getItem("userMembers");
    return savedMembers ? JSON.parse(savedMembers) : [];
  });

  const [name, setName] = useState("");
  const [kg, setKg] = useState("");

  useEffect(() => {
    // Save to localStorage whenever members state changes
    localStorage.setItem("userMembers", JSON.stringify(members));
    // Dispatch a custom event to signal other components
    window.dispatchEvent(new Event("storage"));
  }, [members]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !kg) return;

    setMembers((prevMembers) => {
      const existingMember = prevMembers.find((member) => member.name === name);
      if (existingMember) {
        return prevMembers.map((member) =>
          member.name === name
            ? { ...member, kg: member.kg + Number(kg) }
            : member
        );
      }
      return [...prevMembers, { name, kg: Number(kg) }];
    });

    setName("");
    setKg("");
  };

  const handleClear = () => {
    if (window.confirm("Are you sure you want to clear all data?")) {
      setMembers([]);
    }
  };

  return (
    <div className="container p-3 mt-4 border rounded shadow-sm">
    <div className="p-4">
      <h1 className="text-2xl font-bold text-blue-500 mb-4">
        Admin - Membership Input
      </h1>
      <form onSubmit={handleSubmit} className="mb-4 space-y-2">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border rounded w-full"
        />
        <input
          type="number"
          placeholder="Plastic Collected (kg)"
          value={kg}
          onChange={(e) => setKg(e.target.value)}
          className="p-2 border rounded w-full"
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Add Member
        </button>
      </form>

      <button onClick={handleClear} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
        Clear Data
      </button>
    </div>
    </div>
  );
}

export default Admin;

