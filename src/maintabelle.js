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
    const [dropdownAccessory, setDropdownAccessory] = React.useState([0, 0, 0, 0, 0, 0, 0, 0]);
    const handleChangeAccessory = (event, index) => {
        setDropdownAccessory(previous => Object.assign([...previous], { [index]: event.target.value }));
    };

    const [dropdownBook, setDropdownBook] = React.useState([0, 0, 0, 0]);
    const handleChangeBook = (event, index) => {
        setDropdownBook(previous => Object.assign([...previous], { [index]: event.target.value }));
    };

    const [dropdownStone, setDropdownStone] = React.useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const handleChangeStone = (event, index) => {
        setDropdownStone(previous => Object.assign([...previous], { [index]: event.target.value }));
    }
    const [dropdownMalice, setDropdownMalice] = React.useState([0,0,0,0,0,0,0,0,0,0,0,0,0]);
    const handleChangeMalice = (event, index) => {
        setDropdownStone(previous => Object.assign([...previous], { [index]: event.target.value }));
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
                            <TableCell align="right"><DropdownMain state={dropdownAccessory} index={index} hc={handleChangeAccessory} plus={[0,1,2,3,4,5,6]} ></DropdownMain></TableCell>
                            <TableCell align="right"><DropdownMain state={dropdownAccessory} index={index} hc={handleChangeAccessory} plus={[0,1,2,3,4,5,6]} ></DropdownMain></TableCell>
                            <TableCell align="right"><DropdownMain state={dropdownAccessory} index={index} hc={handleChangeAccessory} plus={[0,1,2,3,4,5,6]} ></DropdownMain></TableCell>
                            <TableCell align="right"><DropdownMain state={dropdownAccessory} index={index} hc={handleChangeAccessory} plus={[0,1,2,3,4,5,6]} ></DropdownMain></TableCell>
                            <TableCell align="right"><DropdownMain state={dropdownAccessory} index={index} hc={handleChangeAccessory} plus={[0,1,2,3,4,5,6]} ></DropdownMain></TableCell>
                            <TableCell align="right"><DropdownMain state={dropdownAccessory} index={index} hc={handleChangeAccessory} plus={[0,1,2,3,4,5,6]} ></DropdownMain></TableCell>
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
                            <TableCell align="right"><DropdownMain state={dropdownBook} index={index} hc={handleChangeBook} plus={[0,3,6,9,12]} ></DropdownMain></TableCell>
                            <TableCell align="right"><DropdownMain state={dropdownBook} index={index} hc={handleChangeBook} plus={[0,3,6,9,12]} ></DropdownMain></TableCell>
                            <TableCell align="right"><DropdownMain state={dropdownBook} index={index} hc={handleChangeBook} plus={[0,3,6,9,12]} ></DropdownMain></TableCell>
                            <TableCell align="right"><DropdownMain state={dropdownBook} index={index} hc={handleChangeBook} plus={[0,3,6,9,12]} ></DropdownMain></TableCell>
                            <TableCell align="right"><DropdownMain state={dropdownBook} index={index} hc={handleChangeBook} plus={[0,3,6,9,12]} ></DropdownMain></TableCell>
                            <TableCell align="right"><DropdownMain state={dropdownBook} index={index} hc={handleChangeBook} plus={[0,3,6,9,12]} ></DropdownMain></TableCell>


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
                            
                            <TableCell align="right"><DropdownMain state={dropdownStone} index={index} hc={handleChangeStone} plus={[0,1,2,3,4,5,6,7,8,9,10]} ></DropdownMain></TableCell>
                            <TableCell align="right"><DropdownMain state={dropdownStone} index={index} hc={handleChangeStone} plus={[0,1,2,3,4,5,6,7,8,9,10]} ></DropdownMain></TableCell>
                            <TableCell align="right"><DropdownMain state={dropdownStone} index={index} hc={handleChangeStone} plus={[0,1,2,3,4,5,6,7,8,9,10]} ></DropdownMain></TableCell>
                            <TableCell align="right"><DropdownMain state={dropdownStone} index={index} hc={handleChangeStone} plus={[0,1,2,3,4,5,6,7,8,9,10]} ></DropdownMain></TableCell>
                            <TableCell align="right"><DropdownMain state={dropdownStone} index={index} hc={handleChangeStone} plus={[0,1,2,3,4,5,6,7,8,9,10]} ></DropdownMain></TableCell>
                            <TableCell align="right"><DropdownMain state={dropdownStone} index={index} hc={handleChangeStone} plus={[0,1,2,3,4,5,6,7,8,9,10]} ></DropdownMain></TableCell>


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




function DropdownMain({state,hc,index,plus}) {
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Engraving</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={state[index]}
                    label="Engraving"
                    onChange={(event) => { hc(event, index)}}
                >
                {plus.map((add) => {
                    return (<MenuItem value={add}>+{add}</MenuItem>)
                })}
                </Select>
            </FormControl>
        </Box>
    )
}
