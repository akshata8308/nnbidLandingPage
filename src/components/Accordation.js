import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    justifyContent:'center'
  },
  heading: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightRegular,
    color: 'blue',
    fontWeight: "bold"
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Auction 1</Typography>
        </AccordionSummary>
        <AccordionDetails>

        <table>
          <tr> 
            <td>
              <Typography variant="body1" gutterBottom>Name of Auction: </Typography>
            </td>
            <td>
              <Typography variant="body1" gutterBottom>diwali auction:</Typography>
            </td>
          </tr>
          <tr> 
            <td>
              <Typography variant="body1" gutterBottom>Company / Seller:</Typography>
            </td>
            <td>
              <Typography variant="body1" gutterBottom>whirlpool</Typography>
            </td>
          </tr>
                   
          <tr> 
            <td>
              <Typography variant="body1" gutterBottom>Date Of Auction:</Typography>
            </td>
            <td>
              <Typography variant="body1" gutterBottom>26/11/202</Typography>
            </td>
          </tr>
          <tr> 
            <td>
              <Typography variant="body1" gutterBottom>Last Date To Apply:</Typography>
            </td>
            <td>
              <Typography variant="body1" gutterBottom>1/12/2020</Typography>
            </td>
          </tr>
          <tr> 
            <td>
              <Typography variant="body1" gutterBottom>Contact:</Typography>
            </td>
            <td>
              <Typography variant="body1" gutterBottom>12345678</Typography>
            </td>
          </tr>
                  
        </table>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Auction 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <table>
            <tr> 
              <td>
                <Typography variant="body1" gutterBottom>Name of Auction: </Typography>
              </td>
              <td>
                <Typography variant="body1" gutterBottom>diwali auction:</Typography>
              </td>
            </tr>
            <tr> 
              <td>
                <Typography variant="body1" gutterBottom>Company / Seller:</Typography>
              </td>
              <td>
                <Typography variant="body1" gutterBottom>whirlpool</Typography>
              </td>
            </tr>
            
            <tr> 
              <td>
                <Typography variant="body1" gutterBottom>Date Of Auction:</Typography>
              </td>
              <td>
                <Typography variant="body1" gutterBottom>26/11/202</Typography>
              </td>
            </tr>
            <tr> 
              <td>
                <Typography variant="body1" gutterBottom>Last Date To Apply:</Typography>
              </td>
              <td>
                <Typography variant="body1" gutterBottom>1/12/2020</Typography>
              </td>
            </tr>
            <tr> 
              <td>
                <Typography variant="body1" gutterBottom>Contact:</Typography>
              </td>
              <td>
                <Typography variant="body1" gutterBottom>12345678</Typography>
              </td>
            </tr>
          </table>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Auction 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <table>
            <tr> 
              <td>
                <Typography variant="body1" gutterBottom>Name of Auction: </Typography>
              </td>
              <td>
                <Typography variant="body1" gutterBottom>diwali auction:</Typography>
              </td>
            </tr>
            <tr> 
              <td>
                <Typography variant="body1" gutterBottom>Company / Seller:</Typography>
              </td>
              <td>
                <Typography variant="body1" gutterBottom>whirlpool</Typography>
              </td>
            </tr>
            
            <tr> 
              <td>
                <Typography variant="body1" gutterBottom>Date Of Auction:</Typography>
              </td>
              <td>
                <Typography variant="body1" gutterBottom>26/11/202</Typography>
              </td>
            </tr>
            <tr> 
              <td>
                <Typography variant="body1" gutterBottom>Last Date To Apply:</Typography>
              </td>
              <td>
                <Typography variant="body1" gutterBottom>1/12/2020</Typography>
              </td>
            </tr>
            <tr> 
              <td>
                <Typography variant="body1" gutterBottom>Contact:</Typography>
              </td>
              <td>
                <Typography variant="body1" gutterBottom>12345678</Typography>
              </td>
            </tr>            
          </table>]
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}
