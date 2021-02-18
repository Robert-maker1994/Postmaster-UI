import React, { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";

//React Forms
import { useForm } from "react-hook-form";


const useStyles = makeStyles((theme) => ({ 
    input: {
        margin: "10px 0",
    },
}))
function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setemail] = useState("");
  const [announcement, setAnnouncement] = useState("");

  const { register, errors, handleSubmit } = useForm();
  const styles = useStyles();

  const submitValue = async (data) => {
  
    try {
      data.fullName = fullName;
      data.email = email;
      data.message = announcement;
      console.log(data);
      const response = await fetch(
        "https://postmaster-api.herokuapp.com/contact",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({ data }),
        }
      )
        .then((res) => {
          console.log(res)
          setTimeout(() => {
            window.location.replace("https://www.google.com/");
          }, 2000);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.loh("ERROR" + error.message);
    }
  };


  return (
    <Container >
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={10}>
        
        <Typography variant="h6" >
          Please don't hesitate to react out, we look forward to hearing from
          you.
        </Typography>
        </Grid>
        <form name="form" className={styles.root}  onSubmit={handleSubmit(submitValue)}>
          <Grid item className={styles.input}>
          <FormControl  >
            <TextField
            error required
              id="outlined-secondary"
              label="Name"
              variant="outlined"
              color="primary"
              ref={register({ name: "fullName"})}
              
              onChange={(e) => setFullName(e.target.value)}
            />
            {errors.fullName && <p className="error">This is required! </p>}
            </FormControl>
          </Grid>
          <Grid item className={styles.input}>
            <TextField
            error required
              label="Email"
              variant="outlined"
              name={email}
              color="primary"
              ref={register({
                name: "email"})}
              onChange={(e) => setemail(e.target.value)}
            />
            {errors.email && <p className="error">Please enter your email</p>}
          </Grid>
          <Grid item >
            <TextField
              className={styles.input}
              id="outlined-secondary"
              label="Message"
              variant="outlined"
              color="primary"
              error required
              onChange={(e) => setAnnouncement(e.target.value)}
            />
            {errors.announcement && (
              <p className="error">Please enter your message</p>
            )}
          </Grid>
          <Grid item className={styles.input}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              color="primary"
            >
              Submit
            </Button>
          </Grid>
        </form>
      </Grid>
    </Container>
  );
}

export default ContactForm;
