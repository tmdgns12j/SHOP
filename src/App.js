import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Container, Paper, CssBaseline, rgbToHex, TextField } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Img from './image1.jpg';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "900px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  root_con: {
    width: "70%",

  },
  card: {
    width: "30%",
    justifyContent: 'center',
    color: "red",
    backgroundColor: "pink",

  },
  img1: {
    width: "50%",
  },
  btn1: {
    marginLeft: theme.spacing(5),
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      
      <CssBaseline />
      <Container className={classes.root_con}>
        <Paper>
          <h1>React start</h1>
          <Typography variant="subtitle1" gutterBottom>타이포그래피입니다.</Typography>
        </Paper>


        <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
        <div>
          <h3>커밋확인</h3>
        </div>
      </CardActions>
    </Card>

    <div>
      <img src={Img} className={classes.img1} />
    </div>
    <div>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="아이디를 입력하세요" />

      <Button variant="contained" color="primary" className={classes.btn1}>
        Primary
      </Button>
      </form>
      
      </div>


    
      </Container>
    </React.Fragment>
    </div>
    
  );
}
