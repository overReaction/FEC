// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// // import Grid from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';
// import GridList from '@material-ui/core/GridList';
// import { fetchRelated } from '../relatedSlice.js';

// import RelatedProductCard from '../relatedProductCard/relatedProductCard.jsx';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     backgroundColor: theme.palette.background.paper
//   },
//   gridList: {
//     flexWrap: 'nowrap',
//     // Promote the list into her own layer on Chrome. This cost memory but helps keeping high FPS.
//     transform: 'translateZ(0)'
//   }
// }));

// const OutfitList = () => {
//   const classes = useStyles();
//   const dispatch = useDispatch();

//   // useEffect(() => {
//   //   dispatch();
//   // }, [productId]);


//   if (outfitList.length > 0) {
//     return (
//       <div data-testid="outfitList" className={classes.root}> My Outfit
//         <GridList className={classes.gridList} cols={2.5}>
//           {outfitList.map((product) => {
//             return (
//               < OutfitCard key={product.id} productInfo={product}/>
//             );
//           }
//           )}
//         </GridList>
//       </div>
//     );
//   } else {
//     return (
//       <div>Add some items to your outfit!</div>
//     );
//   }
// };

// export default OutfitList;

import React from 'react';

const OutfitList = (props) => {
  return (
    <div data-testid="outfitList"> OutfitList placeholder</div>
  );
};

export default OutfitList;
