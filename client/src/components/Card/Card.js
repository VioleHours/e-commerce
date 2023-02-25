import * as React from 'react';
import { useState, useStateValue } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AddShoppingCart } from '@mui/icons-material';
import accounting from 'accounting';
import { ActionTypes } from '@mui/base';
import '../../product_data';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Products({
  product: {id, name, productType, image, price, rating, description},
}) {
  // const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [ /*{basket}*/, dispatch] = useStateValue();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addToBasket = () => {
    dispatch({
      type: ActionTypes.ADD_TO_BASKET,
      item: {
        id,
        name,
        productType,
        image,
        price,
        rating, 
        description,
      },
    });
  };


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <Typography 
            className='classes'
            variant='h5'
            color='textSecondary'
            >
            {accounting.formatMoney(price, 'ARS')} 
          </Typography>
        }
        title={name || 'product'}
        subheader="in Stock"
      />
      <CardMedia
        component="img"
        height=""
        image={image}
        alt={name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {productType}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='Add to cart' onClick={addToBasket}>
          <AddShoppingCart fontSize='large'/>
        </IconButton>
        {Array(rating)
        .fill()
        .map((_, i) => (
          <p>&#11088;</p>
        ))}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}