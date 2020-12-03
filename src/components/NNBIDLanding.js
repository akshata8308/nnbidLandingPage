import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Accordation from './Accordation'
import Sold1 from '../images/sold1.svg'
import Book from '../images/book.svg'
import FreeInspec from '../images/freeInspec.svg'
import Sell from '../images/sell.svg'
import Rupee from '../images/rupee.svg'
import Payment from '../images/payment.svg'
import RC from '../images/rc.svg'


const useStyles = makeStyles((theme) => ({
  root: {
    height: '50vh',
  },
  image: {
    backgroundImage: 'url("https://images.news18.com/ibnlive/uploads/2020/11/1606288664_untitled-design-2020-11-25t124650.236.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    height: '82vh',
    backgroundPosition: 'center',
  },

  image2: {
    backgroundImage: 'url("https://image.freepik.com/free-vector/man-buy-car-automobile-seller-make-contract-vector-illustration_81522-2679.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    height: '50vh',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(3 , 0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
 
  form: {
    width: '80%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  cardGrid: {
    paddingTop: theme.spacing(10),
  },
  imageGrid: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(8),
  },
  steps: {
    height: '100%',
    display: 'flex',
    justifyContent:'center'
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  
}));

function getSteps() {
  return ['Select master blaster campaign settings', 'Create an ad group', 'Create an ad'];
}




export default function SignInSide() {
  const classes = useStyles();
  const steps = getSteps();
  const [activeStep, setActiveStep] = React.useState(0);



  return (
   <div>
    <Grid container component="main" >
      <CssBaseline/>
      <Grid item xs={12} sm={8} md={5}  >
        <div component={Paper}>
        <div className={classes.paper}>

        <Typography component="h1" variant="h5">
        Sign in
        </Typography>
          
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
  
          </form>
          </div>
        </div>

        <div align="center">
        <div style={{padding:'0% 10%'}}>
          <marquee behavior="alternate" scrollamount="8">
            <h2 style={{color:'red'}}>
              LIVE AUCTIONS
            </h2>
          </marquee>
        </div>
            <Accordation/>
        </div>                       
      </Grid>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
    </Grid>

    {/* 3 easy steps */}
    <Grid xs={12} sm={12} xd={12} className={classes.cardGrid} container direction="row" >
    <Typography variant="h4" gutterBottom style={{paddingLeft:'4%'}}>
        Sell Car in 3 Easy Steps
      </Typography>
    </Grid>

    <Grid xs={12} sm={12} xd={12} className={classes.imageGrid} container direction="row" >
    
      <Grid item lg={4} xs={12} sm={12} md={4} className={classes.steps}>
        <img src={Book}/>
      </Grid>

      <Grid item lg={4} xs={12} sm={12} md={4} className={classes.steps}>
        <img src={FreeInspec}/>
      </Grid>

      <Grid item lg={4} xs={12} sm={12} md={4} className={classes.steps}>
        <img src={Sell}/>
      </Grid>
    
    </Grid>

    <Grid lg={12} md={12} sm={12} xs={12}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Grid>

    {/*why choose us */}
    <Grid xs={12} sm={12} xd={12} className={classes.cardGrid}  style={{paddingLeft:'4%'}} >
      <Typography variant="h4" gutterBottom>
        Why Choose Us?
      </Typography>
    </Grid>

    <Grid xs={12} sm={12} xd={12} className={classes.imageGrid} container direction="row" >
        <Grid item lg={3} xs={12} sm={12} md={3} className={classes.steps} container direction="column">
        <img src={Sold1} />
          <Typography variant="body1" gutterBottom align="center"> 
            sold car
          </Typography>
        </Grid>

      <Grid item lg={3} xs={12} sm={12} md={3} className={classes.steps} container direction="column">
        <img src={Rupee}/>
          <Typography variant="body1" gutterBottom align="center"> 
            sold car
          </Typography>
      </Grid>

      <Grid item lg={3} xs={12} sm={12} md={3} className={classes.steps} container direction="column">
        <img src={Payment}/>
          <Typography variant="body1" gutterBottom align="center"> 
          sold car
        </Typography>
      </Grid>

      <Grid item lg={3} xs={12} sm={12} md={3} className={classes.steps} container direction="column">
        <img src={RC}/>
          <Typography variant="body1" gutterBottom align="center"> 
            sold car
          </Typography>
      </Grid>

    </Grid>

    {/**ready to sell car */}
    <Grid container component="main" style={{display:'flex'}} >
      <Grid item xs={12} sm={8} md={7} lg={7} style={{padding:"4%"}} >
        <Typography variant="h4" gutterBottom>
          Ready to Sell Your Car?
        </Typography>
        <p>
          You have made it all the way down here,
          now all it takes is a single visit to CARS24 
          branch to sell car without any RC transfer hassle.
        </p>
        <div>
          <Button variant="contained" color="primary" >
            SELL MY CAR
          </Button>
        </div>
      </Grid >
      <Grid item xs={false} sm={4} md={5} lg={5} className={classes.image2}/>
    </Grid>
    <br/>

    {/* footer */}
    
    <div style={{backgroundColor:"#23272a",fontFamily:'Arial'}}>
      <Grid container direction="row" xs={12} lg={12} sm={12} md={12}>
          <Grid lg={4} md={4} sm={12} xs={12} style={{color:"#ffffff"}} >
              <h1 style={{color:"#7289cf", textAlign:"center"}}>Get connected to us</h1>
              <Grid className="fontsapps" container direction="row" lg={12} md={12} sm={12} xs={12} style={{display:"flex", justifyContent:"center"}}>
              <span><a className="footertagstyle" href="https://www.facebook.com/Classtro_official-103936884675306" target="_blank"><FacebookIcon /></a></span>
                  <span><a style={{color:"white"}} href="https://www.instagram.com/classtro_official/" target="_blank"><InstagramIcon /></a></span>
                  <span><a style={{color:"white"}} href="https://twitter.com/ClasstroO" target="_blank"><TwitterIcon /></a></span>
                  <span><a style={{color:"white"}} href="https://www.linkedin.com/company/classtro/" target="_blank"><LinkedInIcon /></a></span>
              </Grid>
          </Grid>
          <Grid lg={2}  md={2} sm={6} xs={6} >
              <Grid direction="column" justify="flex-start" style={{lineHeight:"2em", color:"#ffffff", listStyle:"none"}}>
              <div style={{paddingLeft:'15px'}}>
              <p style={{color:"#7289cf"}}>Product</p>
                  <li><a className="footertag" href="/whyclasstro">Why NNBID</a></li>
                  <li><a  className="footertag" href="/announcement">Announcement</a></li>
                  <li><a  className="footertag" href="/documentation">Documentation</a></li>
                  </div>
              </Grid>
          </Grid>

          <Grid lg={2}  md={2} sm={6} xs={6}>
            <Grid direction="column" justify="flex-start" style={{lineHeight:"2em", color:"#ffffff", listStyle:"none"}}>
              <p style={{color:"#7289cf"}}>Company</p>
                <li><a className="footertag" href="/aboutclasstro">About</a></li>
            </Grid>
          </Grid>

          <Grid lg={2}  md={2} sm={6} xs={6}>
              <Grid direction="column" justify="flex-start" style={{lineHeight:"2em", color:"#ffffff", listStyle:"none"}}>
                <div style={{paddingLeft:'15px'}}>
                  <p style={{color:"#7289cf"}}>Resources</p>
                    <li><a className="footertag" href="/support">Support</a></li>
                    <li><a className="footertag" href='/safety'>Safety</a></li>
                    <li><a className="footertag" href='/newblog'>Blog</a></li>
                    <li><a className="footertag" href='/developers'>Developers</a></li>
                </div>
              </Grid>
          </Grid>
          <Grid lg={2}  md={2} sm={6} xs={6}>
              <Grid direction="column" justify="flex-start" style={{lineHeight:"2em", color:"#ffffff", listStyle:"none"}}>
              <p style={{color:"#7289cf"}}>Policies</p>
                  <li><a  className="footertag" href="/privacy">Privacy</a></li>
                  <li><a  className="footertag" href="/guidelines">Guidelines</a></li>
              </Grid>
          </Grid>
          <hr style={{marginTop:"3em", borderTop:"2px solid #7289cf",borderBottom:"0px solid #7289cf", width:"80%", margin:"auto"}}/>
          <Grid xs={12} lg={6} style={{marginTop:"2em"}} >
              <img src="/classtro_logo.png" className="logo"/>
          </Grid>
          <Grid xs={12} lg={6} style={{color:"#ffffff", textAlign:"right",marginTop:"1em"}} >
            <div className="end_line">
            <p >Made With<span> &#9829; </span> By Team NNBID.</p>
            </div>
          </Grid>
      </Grid>
    </div> 
    
   </div>
  );
}