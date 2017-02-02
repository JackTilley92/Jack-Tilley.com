import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
};

const tilesData = [
  {
    img: '01-Zurc.jpg',
    title: 'Ammeters, Voltmeters and Process Instruments.',
    author: 'jill111',
  },
  {
    img: '02-Zurc-Circutor.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: '03-Releco.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: '04-Orbis.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: '05-Line_seiki-Konda.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: '06-Arcolectric-Orbitec.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
 /**
  * This example demonstrates the horizontal scrollable single-line grid list of images.
  */
 const Products = () => (
   <div style={styles.root}>
     <GridList style={styles.gridList} cols={2.2}>
       {tilesData.map((tile) => (
         <GridTile
           key={tile.img}
           title={tile.title}
           style = {{Textpadding: '100dp'}}
         >
           <img src={tile.img} />
         </GridTile>
       ))}
     </GridList>
   </div>
 );

export default Products;
