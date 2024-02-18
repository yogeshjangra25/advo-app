import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

// case_number = case_type + registration_number

interface Column {
  id: 'case_number' | 'judge' | 'party_name' | 'next_hearing_date' | 'next_purpose' | 'note';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'case_number', label: 'Case', minWidth: 100 },
  { id: 'judge', label: 'Judge', minWidth: 100 },
  { id: 'party_name', label: 'Party Name', minWidth: 180 },
  { id: 'next_hearing_date', label: 'Next Date', minWidth: 105  },
  { id: 'next_purpose', label: 'Purpose', minWidth: 110  },
  { id: 'note', label: 'Note', minWidth: 100  }
];

interface Data {
  case_number: string;
  judge: string;
  party_name: string;
  next_hearing_date: string;
  next_purpose: string;
  note: string;
}

function createData(
  case_type : string,
  registration_number: string,
  judge: string,
  petitioner : string,
  respondent : string,
  next_hearing_date: string,
  next_purpose: string,
  note: string,
): Data {
  return { 
    case_number : case_type + "/" + registration_number, 
    judge, 
    party_name : petitioner + ' ' + respondent , 
    next_hearing_date, 
    next_purpose, 
    note 
  };
}

const rows = [
  createData('Crm', '5/2023', 'Judicial Magistrate - 1st Class', 'Deepti Jangra D/O Krishan Dutt', 'Yogesh Kumar S/O Naresh Kumar', '19-02-2024', 'Appereance', ''),
  createData('Crm', '5/2023', 'Judicial Magistrate - 1st Class', 'Deepti Jangra D/O Krishan Dutt', 'Yogesh Kumar S/O Naresh Kumar', '19-02-2024', 'Appereance', ''),
  createData('Crm', '5/2023', 'Judicial Magistrate - 1st Class', 'Deepti Jangra D/O Krishan Dutt', 'Yogesh Kumar S/O Naresh Kumar', '19-02-2024', 'Appereance', ''),
  createData('Crm', '5/2023', 'Judicial Magistrate - 1st Class', 'Deepti Jangra D/O Krishan Dutt', 'Yogesh Kumar S/O Naresh Kumar', '19-02-2024', 'Appereance', ''),
  createData('Crm', '5/2023', 'Judicial Magistrate - 1st Class', 'Deepti Jangra D/O Krishan Dutt', 'Yogesh Kumar S/O Naresh Kumar', '19-02-2024', 'Appereance', ''),
  createData('Crm', '5/2023', 'Judicial Magistrate - 1st Class', 'Deepti Jangra D/O Krishan Dutt', 'Yogesh Kumar S/O Naresh Kumar', '19-02-2024', 'Appereance', ''),
  createData('Crm', '5/2023', 'Judicial Magistrate - 1st Class', 'Deepti Jangra D/O Krishan Dutt', 'Yogesh Kumar S/O Naresh Kumar', '19-02-2024', 'Appereance', ''),
  createData('Crm', '5/2023', 'Judicial Magistrate - 1st Class', 'Deepti Jangra D/O Krishan Dutt', 'Yogesh Kumar S/O Naresh Kumar', '19-02-2024', 'Appereance', ''),
  createData('Crm', '5/2023', 'Judicial Magistrate - 1st Class', 'Deepti Jangra D/O Krishan Dutt', 'Yogesh Kumar S/O Naresh Kumar', '19-02-2024', 'Appereance', ''),
  createData('Crm', '5/2023', 'Judicial Magistrate - 1st Class', 'Deepti Jangra D/O Krishan Dutt', 'Yogesh Kumar S/O Naresh Kumar', '19-02-2024', 'Appereance', ''),
];


// interface Column {
//   id: 'name' | 'code' | 'population' | 'size' | 'density';
//   label: string;
//   minWidth?: number;
//   align?: 'right';
//   format?: (value: number) => string;
// }

// const columns: readonly Column[] = [
//   { id: 'name', label: 'Name', minWidth: 170 },
//   { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
//   {
//     id: 'population',
//     label: 'Population',
//     minWidth: 170,
//     align: 'right',
//     format: (value: number) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'size',
//     label: 'Size\u00a0(km\u00b2)',
//     minWidth: 170,
//     align: 'right',
//     format: (value: number) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'density',
//     label: 'Density',
//     minWidth: 170,
//     align: 'right',
//     format: (value: number) => value.toFixed(2),
//   },
// ];

// interface Data {
//   name: string;
//   code: string;
//   population: number;
//   size: number;
//   density: number;
// }

// function createData(
//   name: string,
//   code: string,
//   population: number,
//   size: number,
// ): Data {
//   const density = population / size;
//   return { name, code, population, size, density };
// }

// const rows = [
//   createData('India', 'IN', 1324171354, 3287263),
//   createData('China', 'CN', 1403500365, 9596961),
//   createData('Italy', 'IT', 60483973, 301340),
//   createData('United States', 'US', 327167434, 9833520),
//   createData('Canada', 'CA', 37602103, 9984670),
//   createData('Australia', 'AU', 25475400, 7692024),
//   createData('Germany', 'DE', 83019200, 357578),
//   createData('Ireland', 'IE', 4857000, 70273),
//   createData('Mexico', 'MX', 126577691, 1972550),
//   createData('Japan', 'JP', 126317000, 377973),
//   createData('France', 'FR', 67022000, 640679),
//   createData('United Kingdom', 'GB', 67545757, 242495),
//   createData('Russia', 'RU', 146793744, 17098246),
//   createData('Nigeria', 'NG', 200962417, 923768),
//   createData('Brazil', 'BR', 210147125, 8515767),
// ];

export default function ModuleTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, maxWidth: 200 }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.case_number}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}