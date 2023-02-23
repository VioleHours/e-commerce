import React from 'react';
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
// import MoreVertIcon from '@mui/icons-material/MoreVert';

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

export default function Products() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
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
            {accounting.formatMoney(7500, 'ARS')} 
          </Typography>
        }
        title="Harry Potter Mug"
        subheader="in Stock"
      />
      <CardMedia
        component="img"
        height=""
        image="https://m.media-amazon.com/images/I/81e1-3xT5dL._AC_SS300_.jpg"
        alt=""
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          LA MEJOR PERRA TAZA DEL MUNDO
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='Add to cart' onClick={() => alert('emulamos compra')}>
          <AddShoppingCart fontSize='large'/>
        </IconButton>
        {Array(3)
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
          <Typography paragraph>{'taza del mejor mago que ha existido'}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}