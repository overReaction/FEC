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


export default function StickyHeadTable (props) {
  const currentProduct = useSelector((state) => state.app.productInfo);
  const comparedProduct = props.productInfo;

  const columns = [
    { id: 'currentProduct', label: `${currentProduct.name}`, minWidth: 170 },
    { id: 'feature', label: 'Characteristic', minWidth: 190 },
    { id: 'comparedProduct', label: `${comparedProduct.name}`, minWidth: 170 }
  ];

  function createData (currentFeatures, comparedFeatures) {
    // console.log('currentFeatures: ', currentFeatures);
    // console.log('comparedFeatures: ', comparedFeatures);
    currentFeatures.map((item, index) => {
      comparedFeatures.map((characteristic) => {
        if (currentFeatures[index].feature === characteristic.feature) {
          return { currentProduct: currentFeatures[index].value,
            feature: characteristic.feature,
            comparedProduct: characteristic.value };
        }
      });
      return { currentProduct: currentFeatures[index].value,
        feature: currentFeatures[index].feature,
        comparedProduct: '' };
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
            {rows.slice().map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} >
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {value}
                      </TableCell>
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
