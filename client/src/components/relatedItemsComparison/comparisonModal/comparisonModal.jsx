import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const currentProduct = useSelector((state) => state.app.productInfo);
const comparedProduct = {
  id: 18084,
  name: "Blues Suede Shoes",
  features: [
    {
      feature: "Sole",
      value: "Rubber"
    },
    {
      feature: "Material",
      value: "FullControlSkin"
    },
    {
      feature: "Stitching",
      value: "Double Stitch"
    }
  ]
};

const columns = [
  { id: 'currentProduct', label: 'Current Product', minWidth: 170 },
  { id: 'feature', label: 'Characteristic', minWidth: 190 },
  { id: 'comparedProduct', label: 'Compared Product', minWidth: 170 }
];

function createData (currentProduct, comparedProduct) {
  currentProduct.map((item, index) => {
    comparedProduct.map((characteristic) => {
      if (currentProduct[index].feature === characteristic.feature) {
        return { currentProduct: currentProduct[index].value,
          feature: characteristic.feature,
          comparedProduct: characteristic.value };
      }
    });
  });
}

const rows = [
  createData(currentProduct.features, comparedProduct.features)
];

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  container: {
    maxHeight: 440
  }
});

export default function StickyHeadTable () {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align} />
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}