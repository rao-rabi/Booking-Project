import { useState } from "react";

const Details = () => {
  const sections = [
    {
      title: "Overview",
      heading: "Property Overview",
      content:
        "This is an overview of the house. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem ea pariatur cupiditate, cum rerum eius dolores sunt sit sint!, Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem ea pariatur cupiditate, cum rerum eius dolores sunt sit sint!,Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem ea pariatur cupiditate, cum rerum eius dolores sunt sit sint!, ",
    },
    {
      title: "Area",
      heading: "Area",
      content:
        "This section provides information about the house's area.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem ea pariatur cupiditate, cum rerum eius dolores sunt sit sint!,Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem ea pariatur cupiditate, cum rerum eius dolores sunt sit sint!,Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem ea pariatur cupiditate, cum rerum eius dolores sunt sit sint!,",
    },
    {
      title: "Owner",
      heading: "Owner",
      content:
        "Information about the house's owner can be found here.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem ea pariatur cupiditate, cum rerum eius dolores sunt sit sint!,Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem ea pariatur cupiditate, cum rerum eius dolores sunt sit sint!,Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem ea pariatur cupiditate, cum rerum eius dolores sunt sit sint!,",
    },
    {
      title: "Policies",
      heading: "Policies",
      content:
        "House policies and rules are detailed in this section.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem ea pariatur cupiditate, cum rerum eius dolores sunt sit sint!,Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem ea pariatur cupiditate, cum rerum eius dolores sunt sit sint!,Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem ea pariatur cupiditate, cum rerum eius dolores sunt sit sint!,",
    },
    {
      title: "Layout",
      heading: "Layout",
      content:
        "You can find the house layout and floor plans here.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem ea pariatur cupiditate, cum rerum eius dolores sunt sit sint!,Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem ea pariatur cupiditate, cum rerum eius dolores sunt sit sint!,Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem ea pariatur cupiditate, cum rerum eius dolores sunt sit sint!,",
    },
    {
      title: "Rooms",
      heading: "Rooms",
      content:
        "Details about individual rooms are provided in this section.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem ea pariatur cupiditate, cum rerum eius dolores sunt sit sint!,Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem ea pariatur cupiditate, cum rerum eius dolores sunt sit sint!,Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem ea pariatur cupiditate, cum rerum eius dolores sunt sit sint!,",
    },
  ];
  const [activeSection, setActiveSection] = useState(0);

  const renderContent = () => {
    return (
      <div className="mt-2 px-2">
        <h1 className="text-cyan-700 text-xl font-medium mb-2">
          {sections[activeSection].heading}
        </h1>
        <p className="text-sm">{sections[activeSection].content}</p>
      </div>
    );
  };

  const handleSectionClick = (index) => {
    setActiveSection(index);
  };

  return (
    <div className="px-4 md:px-8 lg:px-14 lg:w-1/2 mt-6 overflow-hidden">
      <div className="flex overflow-auto no-scrollbar lg:space-x-14 space-x-6 pb-2 border-b-2 text-slate-500 border-cyan-200 border-opacity-50" style={{}}>
        {sections.map((section, index) => (
          <button
            key={index}
            onClick={() => handleSectionClick(index)}
            className={`${
              activeSection === index
                ? "font-bold text-black"
                : "font-normal text-slate-500"
            }`}
          >
            {section.title}
          </button>
        ))}
      </div>

      <div className="content mt-4">{renderContent()}</div>
    </div>
  );
};

export default Details;