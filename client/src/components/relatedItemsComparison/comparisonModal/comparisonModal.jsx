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
import { v4 as uuidv4 } from 'uuid';


export default function StickyHeadTable (props) {
  const currentProduct = useSelector((state) => state.app.productInfo);
  const comparedProduct = props.productInfo;

  const columns = [
    { id: 'currentProduct', label: `${currentProduct.name}`, minWidth: 170 },
    { id: 'feature', label: 'Characteristic', minWidth: 190 },
    { id: 'comparedProduct', label: `${comparedProduct.name}`, minWidth: 170 }
  ];

  const rows = [];
  const featuresObj = {};

  function createData (currentFeatures, comparedFeatures) {
    currentFeatures.map((item) => {
      featuresObj[item.feature] = { current: item.value, compared: null };
    });
    comparedFeatures.map((item) => {
      if (featuresObj[item.feature]) {
        featuresObj[item.feature].compared = item.value;
      } else {
        featuresObj[item.feature] = { current: null, compared: item.value };
      }
    });
    for (var key in featuresObj) {
      rows.push({ currentProduct: featuresObj[key].current, feature: key, comparedProduct: featuresObj[key].compared });
    }
  }

  createData(currentProduct.features, comparedProduct.features);

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
              {columns.map((column, index) => (
                <TableCell
                  key={uuidv4()}
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
                <TableRow key={uuidv4()} hover role="checkbox" tabIndex={-1} >
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={uuidv4()} align={column.align}>
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
