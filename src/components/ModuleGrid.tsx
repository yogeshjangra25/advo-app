import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Case', width: 100 },
  { field: 'judge', headerName: 'Judge', width: 100 },
  { field: 'party_name', headerName: 'Party Name', width: 180 },
  { field: 'next_hearing_date', headerName: 'Next Date', width: 105, editable : false },
  { field: 'next_purpose', headerName: 'Purpose', width: 110, editable : false },
  { field: 'note', headerName: 'Note', width: 100, editable : false },
  { field: 'next_hearing_date', headerName: 'Next Date', width: 105, editable : false },
  { field: 'next_purpose', headerName: 'Purpose', width: 110, editable : false },
  { field: 'note', headerName: 'Note', width: 100, editable : false },
  { field: 'next_purpose', headerName: 'Purpose', width: 110, editable : false },
];

interface Data {
  id: string;
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
    id : case_type + "/" + registration_number, 
    judge, 
    party_name : petitioner + ' ' + respondent , 
    next_hearing_date, 
    next_purpose, 
    note 
  };
}

const rows : any = [  
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
  createData('Crm', '5/2023', 'Judicial Magistrate - 1st Class', 'Deepti Jangra D/O Krishan Dutt', 'Yogesh Kumar S/O Naresh Kumar', '19-02-2024', 'Appereance', ''),
  createData('Crm', '5/2023', 'Judicial Magistrate - 1st Class', 'Deepti Jangra D/O Krishan Dutt', 'Yogesh Kumar S/O Naresh Kumar', '19-02-2024', 'Appereance', ''),
  createData('Crm', '5/2023', 'Judicial Magistrate - 1st Class', 'Deepti Jangra D/O Krishan Dutt', 'Yogesh Kumar S/O Naresh Kumar', '19-02-2024', 'Appereance', ''),
  createData('Crm', '5/2023', 'Judicial Magistrate - 1st Class', 'Deepti Jangra D/O Krishan Dutt', 'Yogesh Kumar S/O Naresh Kumar', '19-02-2024', 'Appereance', ''),
  createData('Crm', '5/2023', 'Judicial Magistrate - 1st Class', 'Deepti Jangra D/O Krishan Dutt', 'Yogesh Kumar S/O Naresh Kumar', '19-02-2024', 'Appereance', ''),
  createData('Crm', '5/2023', 'Judicial Magistrate - 1st Class', 'Deepti Jangra D/O Krishan Dutt', 'Yogesh Kumar S/O Naresh Kumar', '19-02-2024', 'Appereance', ''),
  createData('Crm', '5/2023', 'Judicial Magistrate - 1st Class', 'Deepti Jangra D/O Krishan Dutt', 'Yogesh Kumar S/O Naresh Kumar', '19-02-2024', 'Appereance', ''),
];


export default function ModuleGrid() {
  return (
    <Box sx={{ height: 400 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        // initialState={{
        //   pagination: {
        //     paginationModel: {
        //       pageSize: 5,
        //     },
        //   },
        // }}
        // pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}