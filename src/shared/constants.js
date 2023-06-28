import { styled, tableCellClasses, TableRow, TableCell } from "@mui/material";

export const teamTableHeaders = [
  {
    id: "task",
    label: "Task Description",
  },
  {
    id: "dueDate",
    label: "Due Date",
  },
  // {
  //   id: "assignee",
  //   label: "Assignee",
  // },
  {
    id: "status",
    label: "Is Task Done?",
  },
];

export const Colors = {
  green: "#10b890",
  yellow: "#F1BC32",
  red: "#ea5b63",
  primaryDark4: "#F4F6F9",
  primaryDark3: "#C0C3CE",
  primaryDark2: "#878BA2",
  primaryDark1: "#3A4168",
  primaryHueBlue: "#2290FE",
  white: "#FFFFFF",
};

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: Colors.primaryDark4,
    color: theme.palette.common.black,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: Colors.primaryDark4,
    color: theme.palette.common.black,
  },
  height: "3.875rem",
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const API_URL = "https://nodejs-production-1b05.up.railway.app";
