const statusList = [
  {
    label: "Full Time",
    value: "full_time",
  },
  {
    label: "Part Time",
    value: "part_time",
  },
  {
    label: "Contract",
    value: "contract",
  },
  {
    label: "Intern",
    value: "intern",
  },
];

export const formatEmploymentType = (type: string): string => {
  const status = statusList.find((status) => status.value === type);
  return status ? status.label : "Unknown"; 
};
