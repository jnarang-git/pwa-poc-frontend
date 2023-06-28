import React from "react";
import styles from "../styles/Table.scss";
import {
  Card,
  CardContent,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Switch,
  TableSortLabel,
} from "@mui/material";
import {
  teamTableHeaders,
  StyledTableCell,
  StyledTableRow,
  API_URL,
} from "../shared/constants";

const TableComponent = () => {
  const rows = [
    {
      id: "14423",
      task: "TASK 1",
      dueDate: "29-Jun-2023",
      assignee: "John Miller",
      status: "Incomplete",
    },
    {
      id: "24321",
      task: "TASK 2",
      dueDate: "30-Jun-2023",
      assignee: "Jonathan Smith",
      status: "Incomplete",
    },
    {
      id: "99821",
      task: "TASK 3",
      dueDate: "20-Jun-2023",
      assignee: "Peter Doyle",
      status: "Incomplete",
    },
    {
      id: "55632",
      task: "TASK 4 ",
      dueDate: "18-Jun-2023",
      assignee: "John Miller",
      status: "Complete",
    },
  ];

  const label = { inputProps: { "aria-label": "Color switch demo" } };

  return (
    <>
      <div className={styles.homeContainer}>
        <Card className={styles.container} variant="outlined">
          <CardContent>
            <div className={styles.tableContainer}>
              <TableContainer component={Paper}>
                <Table className={styles.table} aria-label="simple table">
                  <TableHead className={`${styles.tableHead} tableHead`}>
                    <TableRow>
                      {teamTableHeaders?.map((header) => (
                        <TableCell
                          key={header.id}
                          className={styles.tableHeadCell}
                        >
                          {header.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  {rows?.length === 0 ? (
                    <TableBody>
                      <TableRow>
                        <TableCell colSpan={9} className={styles.notFound}>
                          <p>No Records found</p>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  ) : (
                    <TableBody className={styles.tableBody}>
                      {rows.map((row) => (
                        <StyledTableRow
                          key={row.email}
                          sx={{
                            "&:last-child td, &:last-child th": {
                              border: 0,
                            },
                          }}
                        >
                          <StyledTableCell>{row.task ?? ""}</StyledTableCell>
                          {/* <StyledTableCell>{row.dueDate ?? ""}</StyledTableCell> */}
                          <StyledTableCell>
                            {row.assignee ?? ""}
                          </StyledTableCell>
                          <Switch
                            onChange={async (e) => {
                              await fetch(`${API_URL}/notify`, {
                                method: "POST",
                                headers: {
                                  "Content-Type": "application/json",
                                  // 'Content-Type': 'application/x-www-form-urlencoded',
                                },
                                body: JSON.stringify({
                                  subObj: JSON.parse(
                                    localStorage.getItem("subcriptionObj")
                                  ),
                                  checked: e.target.checked,
                                  taskDesc: row.task,
                                }),
                              });
                            }}
                            {...label}
                            defaultChecked
                            color="secondary"
                          />
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  )}
                </Table>
              </TableContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
export default TableComponent;
