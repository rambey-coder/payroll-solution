import React from "react";

interface Props {
  name: string;
}

export const NameProfile: React.FC<Props> = ({ name }) => {
  const bgColor = [
    "#bc6c25",
    "#003049",
    "#03045e",
    "#606c38",
    "#283618",
    "#540b0e",
  ];

  const getRandomColor = (initials: string, colors: string[]) => {
    let hash = 0;
    for (let i = 0; i < initials.length; i++) {
      hash = initials.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % colors.length;
    return colors[index];
  };

  const getName = (name: string) => {
    const transformName = name.toUpperCase();
    const nameParts = transformName?.split(" ");
    const firstInitial = nameParts?.[0]?.charAt(0) || "";
    const lastInitial = nameParts?.[1]?.charAt(0) || "";
    return firstInitial + lastInitial;
  };
  const initials = getName(name);

  const background = getRandomColor(initials, bgColor);
  return (
    <div
      style={{
        backgroundColor: background,
        color: "#fff",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "16px",
        fontWeight: "bold",
      }}>
      {initials}
    </div>
  );
};
