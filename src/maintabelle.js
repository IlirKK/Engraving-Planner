import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function createData(accessory, engraving1, engraving2, engraving3, engraving4, engraving5, engraving6, malice,) {
    return { accessory, engraving1, engraving2, engraving3, engraving4, engraving5, engraving6, malice };
}

const accessoryRows = [
    createData('Necklace'),
    createData('Earring 1'),
    createData('Earring 2'),
    createData('Ring 1'),
    createData('Ring 2'),
];

const bookRows = [
    createData('Book 1'),
    createData('Book 2'),
]

const stoneRow = [
    createData('Ability Stone'),
]

const tableStyle = { minWidth: 555 }

export default function BasicTable() {
    const [dropdownAccessory, setDropdownAccessory] = React.useState([0,0,0,0,0,0,0,0]);
    const handleChangeAccessory = (event, index) => {
        setDropdownAccessory(previous => Object.assign([...previous],{[index]:event.target.value}));    
    };

    const [dropdownBook, setDropdownBook] = React.useState([0,0,0,0]);
    const handleChangeBook = (event, index) => {
        setDropdownBook(previous => Object.assign([...previous],{[index]:event.target.value}));    
    };
    
    const [dropdownStone, setDropdownStone] = React.useState([0,0,0,0,0,0,0,0,0,0,0]);
    const handleChangeStone = (event, index) => {
        setDropdownStone(previous => Object.assign([...previous],{[index]:event.target.value}));    
    };

    return (

        <TableContainer component={Paper}>
            <Table sx={tableStyle} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Accessory</TableCell>
                        <TableCell align="right">Engraving 1</TableCell>
                        <TableCell align="right">Engraving 2</TableCell>
                        <TableCell align="right">Engraving 3</TableCell>
                        <TableCell align="right">Engraving 4</TableCell>
                        <TableCell align="right">Engraving 5</TableCell>
                        <TableCell align="right">Engraving 6</TableCell>
                        <TableCell align="right">Malice</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {accessoryRows.map((row, index) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.accessory}
                            </TableCell>
                            <TableCell align="right"><Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Engraving</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={dropdownAccessory[index]}
                                        label="Engraving"
                                        onChange={(event)=>{handleChangeAccessory(event,index)}}
                                    >
                                        <MenuItem value={0}>+0</MenuItem>
                                        <MenuItem value={1}>+1</MenuItem>
                                        <MenuItem value={2}>+2</MenuItem>
                                        <MenuItem value={3}>+3</MenuItem>
                                        <MenuItem value={4}>+4</MenuItem>
                                        <MenuItem value={5}>+5</MenuItem>
                                        <MenuItem value={6}>+6</MenuItem>

                                    </Select>
                                </FormControl>
                            </Box>
                            </TableCell>



                            <TableCell align="right">{row.engraving2}</TableCell>
                            <TableCell align="right">{row.engraving3}</TableCell>
                            <TableCell align="right">{row.engraving4}</TableCell>
                            <TableCell align="right">{row.engraving5}</TableCell>
                            <TableCell align="right">{row.engraving6}</TableCell>
                            <TableCell align="right">{row.malice}</TableCell>
                        </TableRow>
                    ))}
                    {bookRows.map((row, index) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.accessory}
                            </TableCell>
                            <TableCell align="right"><Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Engraving</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={dropdownBook[index]}
                                        label="Engraving"
                                        onChange={(event)=>{handleChangeBook(event,index)}}
                                    >
                                        <MenuItem value={0}>+0</MenuItem>
                                        <MenuItem value={3}>+3</MenuItem>
                                        <MenuItem value={6}>+6</MenuItem>
                                        <MenuItem value={9}>+9</MenuItem>
                                        <MenuItem value={12}>+12</MenuItem>

                                    </Select>
                                </FormControl>
                            </Box>
                            </TableCell>



                            <TableCell align="right">{row.engraving2}</TableCell>
                            <TableCell align="right">{row.engraving3}</TableCell>
                            <TableCell align="right">{row.engraving4}</TableCell>
                            <TableCell align="right">{row.engraving5}</TableCell>
                            <TableCell align="right">{row.engraving6}</TableCell>
                            <TableCell align="right">{row.malice}</TableCell>
                        </TableRow>
                    ))}
                    {stoneRow.map((row, index) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.accessory}
                            </TableCell>
                            <TableCell align="right"><Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Engraving</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={dropdownStone[index]}
                                        label="Engraving"
                                        onChange={(event)=>{handleChangeStone(event,index)}}
                                    >
                                        <MenuItem value={0}>+0</MenuItem>
                                        <MenuItem value={1}>+1</MenuItem>
                                        <MenuItem value={2}>+2</MenuItem>
                                        <MenuItem value={3}>+3</MenuItem>
                                        <MenuItem value={4}>+4</MenuItem>
                                        <MenuItem value={5}>+5</MenuItem>
                                        <MenuItem value={6}>+6</MenuItem>
                                        <MenuItem value={7}>+7</MenuItem>
                                        <MenuItem value={8}>+8</MenuItem>
                                        <MenuItem value={9}>+9</MenuItem>
                                        <MenuItem value={10}>+10</MenuItem>

                                    </Select>
                                </FormControl>
                            </Box>
                            </TableCell>



                            <TableCell align="right">{row.engraving2}</TableCell>
                            <TableCell align="right">{row.engraving3}</TableCell>
                            <TableCell align="right">{row.engraving4}</TableCell>
                            <TableCell align="right">{row.engraving5}</TableCell>
                            <TableCell align="right">{row.engraving6}</TableCell>
                            <TableCell align="right">{row.malice}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}