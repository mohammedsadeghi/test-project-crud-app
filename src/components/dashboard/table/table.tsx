import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import { ResponseDataType } from "@/types/requestTypes";
import { StyledTableCell } from "./tableCell";
import { StyledTableRow } from "./tableRow";
import TableHeadContainer from "./tableHead";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { Paper } from "@mui/material";

export default function CustomizedTables({ data }: ResponseDataType) {
  console.log({ data });
  return (
    <TableContainer
      component={Paper}
      sx={{ direction: "rtl", mx: 5 }}
      elevation={7}
    >
      <Table sx={{ minWidth: 700 }}>
        <TableHeadContainer />
        <TableBody>
          {data?.length > 0 &&
            data?.map((row: ResponseDataType["data"][0], index: number) => (
              <StyledTableRow key={index}>
                <StyledTableCell align="right" scope="row">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell align="right">{row.name}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.familyName ? row?.familyName : ""}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.nationalId}
                </StyledTableCell>
                <StyledTableCell align="right">{row.education}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.status === "active" ? (
                    <CheckIcon color={"success"} />
                  ) : (
                    <CloseIcon color={"error"} />
                  )}
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
