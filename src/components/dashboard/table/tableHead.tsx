import { TableHead as TH, TableRow } from "@mui/material";
import { StyledTableCell } from "./tableCell";
import { TableHeadText } from "@/utils/tableHeadText";

const TableHeadContainer = () => (
  <>
    <TH>
      <TableRow>
        {TableHeadText.map((text: string, index: number) => (
          <StyledTableCell key={index} align="right">
            {text}
          </StyledTableCell>
        ))}
      </TableRow>
    </TH>
  </>
);

export default TableHeadContainer;
